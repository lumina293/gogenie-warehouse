// Batching utility functions

// Group orders by postal code prefix
export function groupOrdersByPostalPrefix(orders, prefixLength = 3) {
    const groups = {};

    orders.forEach(order => {
        const prefix = order.postalCode.substring(0, prefixLength);
        if (!groups[prefix]) {
            groups[prefix] = [];
        }
        groups[prefix].push(order);
    });

    return groups;
}

// Calculate batch statistics
export function calculateBatchStats(orders) {
    const totalItems = orders.reduce((sum, order) => sum + order.lineItems, 0);
    const totalWeight = orders.length; // Simplified - would be actual weight in production

    // Calculate urgency level based on earliest deadline
    const earliestDeadline = orders.reduce((earliest, order) => {
        return new Date(order.shipByDeadline) < new Date(earliest)
            ? order.shipByDeadline
            : earliest;
    }, orders[0]?.shipByDeadline || new Date());

    const now = new Date();
    const hoursUntilDeadline = (new Date(earliestDeadline) - now) / (1000 * 60 * 60);

    let urgency = 'normal';
    if (hoursUntilDeadline < 1) urgency = 'critical';
    else if (hoursUntilDeadline <= 4) urgency = 'warning';

    return {
        totalOrders: orders.length,
        totalItems,
        totalWeight,
        earliestDeadline,
        urgency
    };
}

// Generate optimized pick list (simplified warehouse routing)
export function generatePickList(orders) {
    // In a real system, this would optimize by aisle/shelf location
    // For now, we'll group by SKU and sort items
    const itemMap = {};

    orders.forEach(order => {
        order.items.forEach(item => {
            if (!itemMap[item.sku]) {
                itemMap[item.sku] = {
                    sku: item.sku,
                    name: item.name,
                    totalQuantity: 0,
                    orders: []
                };
            }
            itemMap[item.sku].totalQuantity += item.quantity;
            itemMap[item.sku].orders.push({
                orderNumber: order.orderNumber,
                quantity: item.quantity
            });
        });
    });

    // Convert to array and sort by SKU for consistent routing
    return Object.values(itemMap).sort((a, b) => a.sku.localeCompare(b.sku));
}

// Check if batch exceeds maximum size
export function shouldSplitBatch(orders, maxSize = 30) {
    return orders.length > maxSize;
}

// Split oversized batch into smaller batches
export function splitBatch(orders, maxSize = 30) {
    const batches = [];

    for (let i = 0; i < orders.length; i += maxSize) {
        batches.push(orders.slice(i, i + maxSize));
    }

    return batches;
}