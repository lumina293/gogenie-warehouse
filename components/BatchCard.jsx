import Link from 'next/link';

export default function BatchCard({ batch, orderCount }) {
    // Status styling
    const statusStyles = {
        ready: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-700',
            badge: 'bg-green-100 text-green-800'
        },
        in_progress: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-700',
            badge: 'bg-blue-100 text-blue-800'
        },
        completed: {
            bg: 'bg-gray-50',
            border: 'border-gray-200',
            text: 'text-gray-700',
            badge: 'bg-gray-100 text-gray-800'
        }
    };

    const style = statusStyles[batch.status] || statusStyles.ready;

    // Format created date
    const formatDate = (date) => {
        return new Date(date).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Format status text
    const getStatusText = (status) => {
        const statusMap = {
            ready: 'Ready to Pick',
            in_progress: 'In Progress',
            completed: 'Completed'
        };
        return statusMap[status] || status;
    };

    return (
        <Link href={`/batches/${batch.id}`}>
            <div className={`${style.bg} border-2 ${style.border} rounded-lg p-4 hover:shadow-md transition-all cursor-pointer`}>
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {batch.id}
                        </h3>
                        <p className="text-sm text-gray-600">{batch.name}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${style.badge}`}>
            {getStatusText(batch.status)}
          </span>
                </div>

                {/* Batch Details */}
                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                    <div>
                        <span className="text-gray-500">Postal Prefix:</span>
                        <span className="ml-2 font-bold text-gray-900">{batch.postalPrefix}XX</span>
                    </div>
                    <div>
                        <span className="text-gray-500">Orders:</span>
                        <span className="ml-2 font-bold text-gray-900">{orderCount}</span>
                    </div>
                </div>

                {/* Picker Assignment */}
                {batch.assignedPicker ? (
                    <div className="mb-3 text-sm">
                        <span className="text-gray-500">Assigned to:</span>
                        <span className="ml-2 font-medium text-blue-600">{batch.assignedPicker}</span>
                    </div>
                ) : (
                    <div className="mb-3 text-sm text-gray-500">
                        No picker assigned
                    </div>
                )}

                {/* Footer */}
                <div className="border-t pt-3 flex justify-between items-center text-xs text-gray-500">
                    <span>Created: {formatDate(batch.createdAt)}</span>
                    <span className={`font-medium ${style.text}`}>
            View Details →
          </span>
                </div>
            </div>
        </Link>
    );
}