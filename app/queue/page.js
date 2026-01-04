import { mockOrders } from '@/lib/mockData';
import OrderCard from '@/components/OrderCard';

export default function QueuePage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Pick Queue
                    </h1>
                    <p className="text-gray-600">
                        All orders ready for picking
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="bg-white rounded-lg shadow p-4 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-gray-600">Total Orders in Queue:</span>
                            <span className="ml-2 text-2xl font-bold text-gray-900">
                {mockOrders.length}
              </span>
                        </div>
                        <div className="text-sm text-gray-500">
                            Updated: {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                </div>

                {/* Orders Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {mockOrders.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>

                {/* Empty State (hidden when there are orders) */}
                {mockOrders.length === 0 && (
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