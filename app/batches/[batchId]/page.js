import Link from 'next/link';
import { getBatchById, getOrdersInBatch } from '@/lib/mockData';
import { calculateBatchStats, generatePickList } from '@/lib/batchingUtils';
import OrderCard from '@/components/OrderCard';

export default function BatchDetailPage({ params }) {
    const batch = getBatchById(params.batchId);

    if (!batch) {
        return (
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-lg shadow p-12 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Batch Not Found</h2>
                        <p className="text-gray-600 mb-6">The batch you're looking for doesn't exist.</p>
                        <Link href="/batches" className="text-blue-600 hover:text-blue-700 font-medium">
                            ← Back to Batches
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const orders = getOrdersInBatch(params.batchId);
    const stats = calculateBatchStats(orders);
    const pickList = generatePickList(orders);

    // Status styling
    const statusStyles = {
        ready: 'bg-green-100 text-green-800 border-green-300',
        in_progress: 'bg-blue-100 text-blue-800 border-blue-300',
        completed: 'bg-gray-100 text-gray-800 border-gray-300'
    };

    const getStatusText = (status) => {
        const statusMap = {
            ready: 'Ready to Pick',
            in_progress: 'In Progress',
            completed: 'Completed'
        };
        return statusMap[status] || status;
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/batches"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
                >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Batches
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {batch.id}
                            </h1>
                            <p className="text-gray-600">{batch.name}</p>
                        </div>
                        <span className={`px-4 py-2 text-sm font-medium rounded-full border-2 ${statusStyles[batch.status]}`}>
              {getStatusText(batch.status)}
            </span>
                    </div>
                </div>

                {/* Batch Stats */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Batch Summary</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <div className="text-gray-500 text-sm">Postal Prefix</div>
                            <div className="text-2xl font-bold text-gray-900">{batch.postalPrefix}XX</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Total Orders</div>
                            <div className="text-2xl font-bold text-gray-900">{stats.totalOrders}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Total Items</div>
                            <div className="text-2xl font-bold text-gray-900">{stats.totalItems}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm">Urgency Level</div>
                            <div className={`text-2xl font-bold ${
                                stats.urgency === 'critical' ? 'text-red-600' :
                                    stats.urgency === 'warning' ? 'text-yellow-600' :
                                        'text-green-600'
                            }`}>
                                {stats.urgency.toUpperCase()}
                            </div>
                        </div>
                    </div>

                    {batch.assignedPicker && (
                        <div className="mt-4 pt-4 border-t">
                            <span className="text-gray-500 text-sm">Assigned Picker: </span>
                            <span className="font-semibold text-blue-600">{batch.assignedPicker}</span>
                        </div>
                    )}
                </div>

                {/* Consolidated Pick List */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Consolidated Pick List</h2>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            Print Pick List
                        </button>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <div className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <h4 className="font-semibold text-blue-900">Optimized Picking Route</h4>
                                <p className="text-blue-800 text-sm mt-1">
                                    Items are grouped and sorted for efficient warehouse navigation. Pick all quantities for each SKU, then sort by order during packing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {pickList.map((item, index) => (
                            <div key={item.sku} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                            <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-blue-600">{item.totalQuantity}</div>
                                        <div className="text-xs text-gray-500">total qty</div>
                                    </div>
                                </div>

                                <div className="mt-3 pt-3 border-t border-gray-200">
                                    <div className="text-xs text-gray-500 mb-2">Needed for orders:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {item.orders.map((orderInfo, idx) => (
                                            <span key={idx} className="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-xs">
                        <span className="font-semibold">{orderInfo.orderNumber}</span>
                        <span className="text-gray-500 ml-1">({orderInfo.quantity}x)</span>
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Orders in Batch */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">Orders in This Batch ({orders.length})</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {orders.map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}