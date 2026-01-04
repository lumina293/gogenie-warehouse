import { mockOrders } from '@/lib/mockData';
import OrderCard from '@/components/OrderCard';

export default function QueuePage() {
    // Sort orders by ship_by_deadline (ascending - most urgent first)
    const sortedOrders = [...mockOrders].sort((a, b) => {
        return new Date(a.shipByDeadline) - new Date(b.shipByDeadline);
    });

    // Calculate urgency statistics
    const getUrgencyStats = () => {
        const now = new Date();
        let critical = 0;
        let warning = 0;
        let normal = 0;

        sortedOrders.forEach(order => {
            const diff = new Date(order.shipByDeadline) - now;
            const hours = diff / (1000 * 60 * 60);

            if (hours <= 1) critical++;
            else if (hours <= 4) warning++;
            else normal++;
        });

        return { critical, warning, normal };
    };

    const urgencyStats = getUrgencyStats();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Pick Queue
                    </h1>
                    <p className="text-gray-600">
                        Orders sorted by ship-by deadline (most urgent first)
                    </p>
                </div>

                {/* Stats Bar with Urgency Breakdown */}
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-6">
                            <div>
                                <span className="text-gray-600">Total Orders:</span>
                                <span className="ml-2 text-2xl font-bold text-gray-900">
                  {sortedOrders.length}
                </span>
                            </div>
                            <div className="h-8 w-px bg-gray-300"></div>
                            <div className="flex items-center gap-4 text-sm">
                                <div>
                                    <span className="text-red-600 font-bold">{urgencyStats.critical}</span>
                                    <span className="text-gray-600 ml-1">Critical</span>
                                </div>
                                <div>
                                    <span className="text-yellow-600 font-bold">{urgencyStats.warning}</span>
                                    <span className="text-gray-600 ml-1">Urgent</span>
                                </div>
                                <div>
                                    <span className="text-green-600 font-bold">{urgencyStats.normal}</span>
                                    <span className="text-gray-600 ml-1">On Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">
                            Updated: {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                </div>

                {/* Critical Orders Alert (if any) */}
                {urgencyStats.critical > 0 && (
                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-6">
                        <div className="flex items-start">
                            <svg className="w-6 h-6 text-red-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <h4 className="font-bold text-red-900 text-lg">⚠️ Critical Orders Require Immediate Attention</h4>
                                <p className="text-red-800 text-sm mt-1">
                                    <strong>{urgencyStats.critical}</strong> {urgencyStats.critical === 1 ? 'order has' : 'orders have'} less than 1 hour until deadline.
                                    Start picking these orders immediately to meet SLA commitments.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Priority Info Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h4 className="font-semibold text-blue-900">Visual Urgency Indicators Active</h4>
                            <p className="text-blue-800 text-sm mt-1">
                                <span className="font-medium text-red-700">Red borders</span> = Less than 1 hour remaining •
                                <span className="font-medium text-yellow-700 ml-1">Yellow borders</span> = 1-4 hours remaining •
                                <span className="font-medium text-green-700 ml-1">Normal</span> = More than 4 hours
                            </p>
                        </div>
                    </div>
                </div>

                {/* Orders Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {sortedOrders.map((order, index) => (
                        <div key={order.id} className="relative">
                            {/* Queue Position Badge */}
                            <div className="absolute -top-2 -left-2 z-10 bg-gray-800 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                                {index + 1}
                            </div>
                            <OrderCard order={order} />
                        </div>
                    ))}
                </div>

                {/* Empty State (hidden when there are orders) */}
                {sortedOrders.length === 0 && (
                    <div className="bg-white rounded-lg shadow p-12 text-center">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            No Orders in Queue
                        </h3>
                        <p className="text-gray-600">
                            All orders have been picked or there are no pending orders.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}