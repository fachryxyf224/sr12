import { ProductCard } from '@/components/ui/ProductCard'
import { getProducts } from '@/actions/products'

export const dynamic = 'force-dynamic'

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Katalog Produk</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Jelajahi koleksi lengkap produk SR12 Herbal Skincare. Temukan solusi tepat untuk kebutuhan kulitmu.
                </p>
            </div>

            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={{
                            ...product,
                            price: Number(product.price)
                        }} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-500">Belum ada produk yang tersedia saat ini.</p>
                </div>
            )}
        </div>
    )
}
