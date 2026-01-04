import { mockBatches, getBatchStats } from '@/lib/mockData';
import BatchCard from '@/components/BatchCard';

export default function BatchesPage() {
    const stats = getBatchStats();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Batch Management
                    </h1>
                    <p className="text-gray-600">
                        View and manage order batches grouped by delivery zone
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="text-blue-600 text-sm font-medium">Total Batches</div>
                            <div className="text-3xl font-bold text-blue-900">{stats.total}</div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <div className="text-green-600 text-sm font-medium">Ready to Pick</div>
                            <div className="text-3xl font-bold text-green-900">{stats.ready}</div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="text-purple-600 text-sm font-medium">In Progress</div>
                            <div className="text-3xl font-bold text-purple-900">{stats.inProgress}</div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-gray-600 text-sm font-medium">Total Orders</div>
                            <div className="text-3xl font-bold text-gray-900">{stats.totalOrders}</div>
                        </div>
                    </div>
                </div>

                {/* Info Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h4 className="font-semibold text-blue-900">Postal Code Batching Active</h4>
                            <p className="text-blue-800 text-sm mt-1">
                                Orders are automatically grouped by the first 3 digits of their delivery postal code.
                                This allows pickers to fulfill multiple orders in a single optimized warehouse route.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Batches Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockBatches.map(batch => (
                        <BatchCard
                            key={batch.id}
                            batch={batch}
                            orderCount={batch.orderIds.length}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {mockBatches.length === 0 && (
                    <div className="bg-white rounded-lg shadow p-12 text-center">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            No Batches Available
                        </h3>
                        <p className="text-gray-600">
                            Batches will be created automatically when orders are ready for picking.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}