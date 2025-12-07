import { prisma } from '@/lib/prisma'
import { Package, Users, ShoppingCart, TrendingUp } from 'lucide-react'

export const dynamic = 'force-dynamic'

async function getStats() {
    const [productCount, voucherCount] = await Promise.all([
        prisma.product.count(),
        prisma.voucher.count(),
    ])

    return {
        products: productCount,
        vouchers: voucherCount,
        orders: 0, // Mock
        visitors: 1250, // Mock
    }
}

export default async function AdminDashboard() {
    const stats = await getStats()

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 font-serif">Dashboard Overview</h1>
                <p className="text-gray-500">Selamat datang kembali, Admin.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-pink-50 rounded-lg">
                            <Package className="h-6 w-6 text-pink-600" />
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{stats.products}</h3>
                    <p className="text-sm text-gray-500 mt-1">Total Produk</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+5%</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{stats.visitors}</h3>
                    <p className="text-sm text-gray-500 mt-1">Total Pengunjung</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-50 rounded-lg">
                            <ShoppingCart className="h-6 w-6 text-purple-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-full">0%</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{stats.orders}</h3>
                    <p className="text-sm text-gray-500 mt-1">Pesanan Baru</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-orange-50 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-orange-600" />
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{stats.vouchers}</h3>
                    <p className="text-sm text-gray-500 mt-1">Voucher Aktif</p>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[300px] flex items-center justify-center text-gray-400">
                    Chart Area (Coming Soon)
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[300px] flex items-center justify-center text-gray-400">
                    Recent Activity (Coming Soon)
                </div>
            </div>
        </div>
    )
}
