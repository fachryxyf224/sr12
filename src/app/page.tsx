import { ProductCard } from '@/components/ui/ProductCard'
import Link from 'next/link'
import { getProducts } from '@/actions/products'
import { HeroSection } from '@/components/ui/HeroSection'
import { VoucherSection } from '@/components/ui/VoucherSection'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const products = await getProducts()
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="space-y-12 pb-12 bg-white">
      <HeroSection />

      <VoucherSection />

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Produk Terlaris</h2>
            <p className="text-gray-500">Pilihan terbaik untuk perawatan kulitmu</p>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
          >
            Lihat Semua
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={{
                ...product,
                price: Number(product.price)
              }} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-gray-500">Belum ada produk yang ditampilkan.</p>
          </div>
        )}
      </section>
    </div>
  )
}
