export default function OrderCard({ order }) {
    // Format the deadline date/time
    const formatDeadline = (date) => {
        return new Date(date).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Calculate time remaining
    const getTimeRemaining = (deadline) => {
        const now = new Date();
        const diff = new Date(deadline) - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (hours < 0) return 'OVERDUE';
        if (hours === 0) return `${minutes}m remaining`;
        if (hours < 24) return `${hours}h ${minutes}m remaining`;

        const days = Math.floor(hours / 24);
        const remainingHours = hours % 24;
        return `${days}d ${remainingHours}h remaining`;
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            {/* Header Row */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {order.orderNumber}
                    </h3>
                    <p className="text-sm text-gray-600">{order.customerName}</p>
                </div>
                <div className="text-right">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            {order.slaType}
          </span>
                </div>
            </div>

            {/* Order Details Grid */}
            <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                <div>
                    <span className="text-gray-500">Line Items:</span>
                    <span className="ml-2 font-medium text-gray-900">{order.lineItems}</span>
                </div>
                <div>
                    <span className="text-gray-500">Postal Code:</span>
                    <span className="ml-2 font-medium text-gray-900">{order.postalCode}</span>
                </div>
                <div>
                    <span className="text-gray-500">Customer Tier:</span>
                    <span className="ml-2 font-medium text-gray-900 capitalize">{order.customerTier}</span>
                </div>
                <div>
                    <span className="text-gray-500">Status:</span>
                    <span className="ml-2 font-medium text-green-600">Ready to Pick</span>
                </div>
            </div>

            {/* Deadline Information */}
            <div className="border-t pt-3">
                <div className="flex justify-between items-center text-sm">
                    <div>
                        <span className="text-gray-500">Ship By:</span>
                        <span className="ml-2 font-medium text-gray-900">
              {formatDeadline(order.shipByDeadline)}
            </span>
                    </div>
                    <div className="text-gray-600 font-medium">
                        {getTimeRemaining(order.shipByDeadline)}
                    </div>
                </div>
            </div>

            {/* Items Preview */}
            <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500 mb-1">Items:</p>
                <div className="space-y-1">
                    {order.items.map((item, index) => (
                        <div key={index} className="text-xs text-gray-700">
                            <span className="font-medium">{item.quantity}x</span> {item.name}
                            <span className="text-gray-400 ml-1">({item.sku})</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}