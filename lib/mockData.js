// Mock Data - 18 orders with varied characteristics

export const mockOrders = [
    {
        id: 'ORD-001',
        orderNumber: 'WH-2025-001',
        customerName: 'Alice Johnson',
        customerTier: 'platinum',
        slaType: 'Same-Day',
        shipByDeadline: new Date(Date.now() + 45 * 60 * 1000), // 45 minutes from now
        postalCode: '17801',
        lineItems: 2,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        items: [
            { sku: 'FESTIVE-123', name: 'Holiday Gift Set', quantity: 1 },
            { sku: 'WRAP-001', name: 'Gift Wrap Premium', quantity: 1 }
        ]
    },
    {
        id: 'ORD-002',
        orderNumber: 'WH-2025-002',
        customerName: 'Bob Smith',
        customerTier: 'standard',
        slaType: 'Next-Day',
        shipByDeadline: new Date(Date.now() + 18 * 60 * 60 * 1000), // 18 hours
        postalCode: '17802',
        lineItems: 5,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
        items: [
            { sku: 'ELEC-456', name: 'Wireless Mouse', quantity: 2 },
            { sku: 'ELEC-789', name: 'USB Cable', quantity: 3 }
        ]
    },
    {
        id: 'ORD-003',
        orderNumber: 'WH-2025-003',
        customerName: 'Carol Davis',
        customerTier: 'gold',
        slaType: 'Standard 3-Day',
        shipByDeadline: new Date(Date.now() + 70 * 60 * 60 * 1000), // 70 hours
        postalCode: '17803',
        lineItems: 1,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 30 * 60 * 1000),
        items: [
            { sku: 'BOOK-111', name: 'Best Seller Novel', quantity: 1 }
        ]
    },
    {
        id: 'ORD-004',
        orderNumber: 'WH-2025-004',
        customerName: 'David Lee',
        customerTier: 'standard',
        slaType: 'Same-Day',
        shipByDeadline: new Date(Date.now() + 90 * 60 * 1000), // 90 minutes
        postalCode: '17801',
        lineItems: 3,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
        items: [
            { sku: 'CLOTH-222', name: 'T-Shirt', quantity: 2 },
            { sku: 'CLOTH-333', name: 'Jeans', quantity: 1 }
        ]
    },
    {
        id: 'ORD-005',
        orderNumber: 'WH-2025-005',
        customerName: 'Emma Wilson',
        customerTier: 'platinum',
        slaType: 'Next-Day',
        shipByDeadline: new Date(Date.now() + 22 * 60 * 60 * 1000),
        postalCode: '17804',
        lineItems: 1,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 45 * 60 * 1000),
        items: [
            { sku: 'JEWEL-444', name: 'Silver Necklace', quantity: 1 }
        ]
    },
    {
        id: 'ORD-006',
        orderNumber: 'WH-2025-006',
        customerName: 'Frank Martinez',
        customerTier: 'standard',
        slaType: 'Standard 3-Day',
        shipByDeadline: new Date(Date.now() + 68 * 60 * 60 * 1000),
        postalCode: '17802',
        lineItems: 7,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
        items: [
            { sku: 'KITCHEN-555', name: 'Cookware Set', quantity: 1 },
            { sku: 'KITCHEN-666', name: 'Utensil Set', quantity: 6 }
        ]
    },
    {
        id: 'ORD-007',
        orderNumber: 'WH-2025-007',
        customerName: 'Grace Taylor',
        customerTier: 'gold',
        slaType: 'Next-Day',
        shipByDeadline: new Date(Date.now() + 20 * 60 * 60 * 1000),
        postalCode: '17801',
        lineItems: 2,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 2.5 * 60 * 60 * 1000),
        items: [
            { sku: 'SPORT-777', name: 'Yoga Mat', quantity: 1 },
            { sku: 'SPORT-888', name: 'Water Bottle', quantity: 1 }
        ]
    },
    {
        id: 'ORD-008',
        orderNumber: 'WH-2025-008',
        customerName: 'Henry Brown',
        customerTier: 'standard',
        slaType: 'Same-Day',
        shipByDeadline: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours
        postalCode: '17805',
        lineItems: 1,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
        items: [
            { sku: 'TECH-999', name: 'Phone Case', quantity: 1 }
        ]
    },
    {
        id: 'ORD-009',
        orderNumber: 'WH-2025-009',
        customerName: 'Ivy Chen',
        customerTier: 'platinum',
        slaType: 'Standard 3-Day',
        shipByDeadline: new Date(Date.now() + 65 * 60 * 60 * 1000),
        postalCode: '17803',
        lineItems: 4,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
        items: [
            { sku: 'HOME-101', name: 'Lamp', quantity: 2 },
            { sku: 'HOME-102', name: 'Picture Frame', quantity: 2 }
        ]
    },
    {
        id: 'ORD-010',
        orderNumber: 'WH-2025-010',
        customerName: 'Jack Anderson',
        customerTier: 'standard',
        slaType: 'Next-Day',
        shipByDeadline: new Date(Date.now() + 19 * 60 * 60 * 1000),
        postalCode: '17804',
        lineItems: 2,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
        items: [
            { sku: 'GARDEN-201', name: 'Plant Pot', quantity: 2 }
        ]
    },
    {
        id: 'ORD-011',
        orderNumber: 'WH-2025-011',
        customerName: 'Karen White',
        customerTier: 'gold',
        slaType: 'Same-Day',
        shipByDeadline: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours - WARNING
        postalCode: '17802',
        lineItems: 1,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        items: [
            { sku: 'BEAUTY-301', name: 'Skincare Set', quantity: 1 }
        ]
    },
    {
        id: 'ORD-012',
        orderNumber: 'WH-2025-012',
        customerName: 'Leo Rodriguez',
        customerTier: 'standard',
        slaType: 'Standard 3-Day',
        shipByDeadline: new Date(Date.now() + 72 * 60 * 60 * 1000),
        postalCode: '17805',
        lineItems: 8,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
        items: [
            { sku: 'OFFICE-401', name: 'Notebook Pack', quantity: 5 },
            { sku: 'OFFICE-402', name: 'Pen Set', quantity: 3 }
        ]
    },
    {
        id: 'ORD-013',
        orderNumber: 'WH-2025-013',
        customerName: 'Mia Thompson',
        customerTier: 'platinum',
        slaType: 'Next-Day',
        shipByDeadline: new Date(Date.now() + 21 * 60 * 60 * 1000),
        postalCode: '17801',
        lineItems: 2,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 1.5 * 60 * 60 * 1000),
        items: [
            { sku: 'FESTIVE-456', name: 'Party Decoration', quantity: 2 }
        ]
    },
    {
        id: 'ORD-014',
        orderNumber: 'WH-2025-014',
        customerName: 'Noah Garcia',
        customerTier: 'standard',
        slaType: 'Same-Day',
        shipByDeadline: new Date(Date.now() + 4.5 * 60 * 60 * 1000),
        postalCode: '17803',
        lineItems: 3,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        items: [
            { sku: 'PET-501', name: 'Dog Food', quantity: 2 },
            { sku: 'PET-502', name: 'Pet Toy', quantity: 1 }
        ]
    },
    {
        id: 'ORD-015',
        orderNumber: 'WH-2025-015',
        customerName: 'Olivia Martinez',
        customerTier: 'gold',
        slaType: 'Standard 3-Day',
        shipByDeadline: new Date(Date.now() + 69 * 60 * 60 * 1000),
        postalCode: '17804',
        lineItems: 1,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
        items: [
            { sku: 'AUTO-601', name: 'Car Air Freshener', quantity: 1 }
        ]
    },
    {
        id: 'ORD-016',
        orderNumber: 'WH-2025-016',
        customerName: 'Paul Walker',
        customerTier: 'standard',
        slaType: 'Next-Day',
        shipByDeadline: new Date(Date.now() + 17 * 60 * 60 * 1000),
        postalCode: '17802',
        lineItems: 6,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
        items: [
            { sku: 'TOY-701', name: 'Building Blocks', quantity: 3 },
            { sku: 'TOY-702', name: 'Puzzle', quantity: 3 }
        ]
    },
    {
        id: 'ORD-017',
        orderNumber: 'WH-2025-017',
        customerName: 'Quinn Adams',
        customerTier: 'platinum',
        slaType: 'Same-Day',
        shipByDeadline: new Date(Date.now() + 1.5 * 60 * 60 * 1000), // 1.5 hours - WARNING
        postalCode: '17805',
        lineItems: 1,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
        items: [
            { sku: 'ELECTRON-801', name: 'Headphones', quantity: 1 }
        ]
    },
    {
        id: 'ORD-018',
        orderNumber: 'WH-2025-018',
        customerName: 'Rachel Green',
        customerTier: 'gold',
        slaType: 'Next-Day',
        shipByDeadline: new Date(Date.now() + 23 * 60 * 60 * 1000),
        postalCode: '17801',
        lineItems: 2,
        status: 'ready_to_pick',
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
        items: [
            { sku: 'FOOD-901', name: 'Organic Snacks', quantity: 2 }
        ]
    }
];

// Helper function to get statistics
export function getOrderStats() {
    return {
        total: mockOrders.length,
        readyToPick: mockOrders.filter(o => o.status === 'ready_to_pick').length,
        quickPicks: mockOrders.filter(o => o.lineItems <= 2).length,
        sameDayCount: mockOrders.filter(o => o.slaType === 'Same-Day').length,
        nextDayCount: mockOrders.filter(o => o.slaType === 'Next-Day').length,
        standardCount: mockOrders.filter(o => o.slaType === 'Standard 3-Day').length
    };
}