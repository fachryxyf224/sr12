import Link from 'next/link'
import { ShoppingBag, ArrowRight } from 'lucide-react'

export default function CartPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="h-10 w-10 text-gray-400" />
                </div>
                <h1 className="font-serif text-3xl font-bold text-gray-900 mb-4">Keranjang Belanja</h1>
                <p className="text-gray-600 mb-8">
                    Keranjang belanja Anda saat ini masih kosong. Mari mulai belanja produk perawatan kulit terbaik kami.
                </p>
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-700 transition-colors shadow-lg hover:shadow-pink-200 hover:-translate-y-1"
                >
                    Mulai Belanja
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    )
}
