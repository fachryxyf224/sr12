import { createProduct } from '@/actions/products'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NewProductPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link href="/admin/products" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
                    <ArrowLeft className="h-4 w-4" />
                    Kembali
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Tambah Produk Baru</h1>
            </div>

            <form action={createProduct} className="bg-white p-6 rounded-lg shadow-sm border space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Produk
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                        placeholder="Contoh: Minyak Bulus SR12"
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
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            placeholder="95000"
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
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            placeholder="100"
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
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                            Gambar Produk
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            accept="image/*"
                            required
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                        />
                        <p className="mt-1 text-xs text-gray-500">Format: JPG, PNG, GIF. Maks 5MB.</p>
                    </div>
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
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                        placeholder="Deskripsi lengkap produk..."
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-pink-600 px-4 py-2 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
                    >
                        Simpan Produk
                    </button>
                </div>
            </form>
        </div>
    )
}
