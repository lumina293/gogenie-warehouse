import Link from 'next/link';
import { mockOrders, getOrderStats } from '@/lib/mockData';

export default function Home() {
    const stats = getOrderStats();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        GO-GENIE Warehouse Management
                    </h1>
                    <p className="text-gray-600">
                        Order Prioritization & Batching System
                    </p>
                </header>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-semibold mb-4">System Status</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="text-blue-600 text-sm font-medium">Total Orders</div>
                            <div className="text-3xl font-bold text-blue-900">{stats.total}</div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <div className="text-green-600 text-sm font-medium">Ready to Pick</div>
                            <div className="text-3xl font-bold text-green-900">
                                {stats.readyToPick}
                            </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="text-purple-600 text-sm font-medium">Quick Picks Available</div>
                            <div className="text-3xl font-bold text-purple-900">
                                {stats.quickPicks}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
                        <div className="flex gap-3">
                            <Link
                                href="/queue"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                View Pick Queue
                            </Link>
                        </div>
                    </div>

                    <div className="border-t mt-6 pt-4">
                        <h3 className="text-lg font-semibold mb-3">Mock Data Preview</h3>
                        <div className="space-y-2">
                            {mockOrders.slice(0, 5).map(order => (
                                <div key={order.id} className="bg-gray-50 p-3 rounded text-sm">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="font-semibold">{order.orderNumber}</span>
                                            <span className="mx-2">•</span>
                                            <span>{order.customerName}</span>
                                            <span className="mx-2">•</span>
                                            <span className="text-blue-600">{order.slaType}</span>
                                        </div>
                                        <div className="text-gray-600">
                                            {order.lineItems} {order.lineItems === 1 ? 'item' : 'items'}
                                        </div>
                                    </div>
                                    <div className="text-gray-500 mt-1">
                                        Postal: {order.postalCode} | Tier: {order.customerTier}
                                    </div>
                                </div>
                            ))}
                            <div className="text-center text-gray-500 text-sm pt-2">
                                ... and {mockOrders.length - 5} more orders
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start">
                            <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <h4 className="font-semibold text-green-900">Step 2 Complete!</h4>
                                <p className="text-green-800 text-sm mt-1">
                                    Basic pick queue view created. Click "View Pick Queue" to see all 18 orders
                                    displayed with full details including line items, deadlines, and customer info.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}