import Link from 'next/link'
import { Plus, Edit, Trash } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { getProducts, deleteProduct } from '@/actions/products'

export const dynamic = 'force-dynamic'

export default async function AdminProductsPage() {
    const products = await getProducts()

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Manajemen Produk</h1>
                <Link href="/admin/products/new" className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors shadow-sm">
                    <Plus className="h-4 w-4" />
                    Tambah Produk
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {products.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        Belum ada produk. Silakan tambah produk baru.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-medium text-gray-900">Nama Produk</th>
                                    <th className="px-6 py-4 font-medium text-gray-900">Kategori</th>
                                    <th className="px-6 py-4 font-medium text-gray-900">Harga</th>
                                    <th className="px-6 py-4 font-medium text-gray-900">Stok</th>
                                    <th className="px-6 py-4 font-medium text-gray-900 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{product.category || '-'}</td>
                                        <td className="px-6 py-4 text-gray-600">{formatCurrency(Number(product.price))}</td>
                                        <td className="px-6 py-4 text-gray-600">{product.stock}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/products/${product.id}/edit`}
                                                    className="p-2 hover:bg-blue-50 rounded text-blue-600 transition-colors"
                                                    title="Edit Produk"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                                <form action={async () => {
                                                    'use server'
                                                    await deleteProduct(product.id)
                                                }}>
                                                    <button type="submit" className="p-2 hover:bg-red-50 rounded text-red-600 transition-colors" title="Hapus Produk">
                                                        <Trash className="h-4 w-4" />
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
