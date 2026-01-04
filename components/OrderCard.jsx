import UrgencyBadge from './UrgencyBadge';

export default function OrderCard({ order }) {
    // Calculate urgency level for styling
    const getUrgencyLevel = (deadline) => {
        const now = new Date();
        const diff = new Date(deadline) - now;
        const hours = diff / (1000 * 60 * 60);

        if (hours < 0) return 'overdue';
        if (hours <= 1) return 'critical';
        if (hours <= 4) return 'warning';
        return 'normal';
    };

    const urgency = getUrgencyLevel(order.shipByDeadline);

    // Define border and background styles based on urgency
    const urgencyStyles = {
        overdue: 'border-red-500 border-2 bg-red-50',
        critical: 'border-red-400 border-2 bg-red-50',
        warning: 'border-yellow-400 border-2 bg-yellow-50',
        normal: 'border-gray-200 bg-white'
    };

    // Format the deadline date/time
    const formatDeadline = (date) => {
        return new Date(date).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Calculate time remaining with better formatting
    const getTimeRemaining = (deadline) => {
        const now = new Date();
        const diff = new Date(deadline) - now;
        const totalMinutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        if (totalMinutes < 0) return 'OVERDUE';
        if (hours === 0) return `${minutes} min`;
        if (hours < 24) return `${hours}h ${minutes}m`;

        const days = Math.floor(hours / 24);
        const remainingHours = hours % 24;
        return `${days}d ${remainingHours}h`;
    };

    // Get relative time description
    const getRelativeTime = (deadline) => {
        const now = new Date();
        const diff = new Date(deadline) - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));

        if (hours < 0) return 'overdue';
        if (hours < 1) return 'due very soon';
        if (hours < 4) return 'due today';
        if (hours < 24) return 'due today';
        if (hours < 48) return 'due tomorrow';
        return 'due in ' + Math.floor(hours / 24) + ' days';
    };

    return (
        <div className={`rounded-lg p-4 hover:shadow-md transition-shadow ${urgencyStyles[urgency]}`}>
            {/* Header Row with Urgency Badge */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                            {order.orderNumber}
                        </h3>
                        <UrgencyBadge deadline={order.shipByDeadline} />
                    </div>
                    <p className="text-sm text-gray-600">{order.customerName}</p>
                </div>
                <div className="text-right ml-3">
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

            {/* Deadline Information - Enhanced */}
            <div className="border-t border-gray-300 pt-3">
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <div>
                            <span className="text-gray-500">Ship By:</span>
                            <span className="ml-2 font-medium text-gray-900">
                {formatDeadline(order.shipByDeadline)}
              </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 capitalize">
              {getRelativeTime(order.shipByDeadline)}
            </span>
                        <span className={`text-sm font-bold ${
                            urgency === 'critical' || urgency === 'overdue' ? 'text-red-700' :
                                urgency === 'warning' ? 'text-yellow-700' :
                                    'text-gray-900'
                        }`}>
              {getTimeRemaining(order.shipByDeadline)}
            </span>
                    </div>
                </div>
            </div>

            {/* Items Preview */}
            <div className="mt-3 pt-3 border-t border-gray-300">
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