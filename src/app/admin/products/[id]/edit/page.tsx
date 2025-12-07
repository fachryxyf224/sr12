import { updateProduct, getProduct } from '@/actions/products'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function EditProductPage({ params }: PageProps) {
    const { id } = await params
    const product = await prisma.product.findUnique({
        where: { id }
    })

    if (!product) {
        notFound()
    }

    const updateProductWithId = updateProduct.bind(null, product.id)

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link href="/admin/products" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
                    <ArrowLeft className="h-4 w-4" />
                    Kembali
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 font-serif">Edit Produk</h1>
            </div>

            <form action={updateProductWithId} className="bg-white p-6 rounded-lg shadow-sm border space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Produk
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        defaultValue={product.name}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                            Harga (Rp)
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            required
                            min="0"
                            defaultValue={Number(product.price)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                            Stok
                        </label>
                        <input
                            type="number"
                            name="stock"
                            id="stock"
                            required
                            min="0"
                            defaultValue={product.stock}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Kategori
                    </label>
                    <select
                        name="category"
                        id="category"
                        defaultValue={product.category || 'Skincare'}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                    >
                        <option value="Skincare">Skincare</option>
                        <option value="Body Care">Body Care</option>
                        <option value="Hair Care">Hair Care</option>
                        <option value="Herbal">Herbal</option>
                        <option value="Kosmetik">Kosmetik</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                        Gambar Produk (Biarkan kosong jika tidak ingin mengubah)
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                    />
                    {product.image && (
                        <p className="mt-2 text-xs text-gray-500">Gambar saat ini: {product.image}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Deskripsi
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        required
                        rows={4}
                        defaultValue={product.description}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-pink-600 px-4 py-2 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
                    >
                        Update Produk
                    </button>
                </div>
            </form>
        </div>
    )
}
