import Link from 'next/link'
import { Instagram, ShoppingBag, Phone } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-pink-600 mb-4">Toko SR12 Elbirroe</h3>
                        <p className="text-sm text-gray-600">
                            Solusi perawatan kulit alami dan sehat bersama SR12 Herbal Skincare.
                            Cantik, Sehat, Alami.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-pink-600">Beranda</Link></li>
                            <li><Link href="/products" className="hover:text-pink-600">Produk</Link></li>
                            <li><Link href="/about" className="hover:text-pink-600">Tentang Kami</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Hubungi Kami</h3>
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/6283150279906"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600"
                            >
                                <Phone className="h-4 w-4" />
                                +62 831-5027-9906
                            </a>
                            <a
                                href="https://instagram.com/Tsabit244"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-600"
                            >
                                <Instagram className="h-4 w-4" />
                                @Tsabit244
                            </a>
                            <a
                                href="https://shopee.co.id/enden_salimah102"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500"
                            >
                                <ShoppingBag className="h-4 w-4" />
                                Shopee: enden_salimah102
                            </a>
                            <a
                                href="https://tiktok.com/@enden.salimah.ii"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                                @enden.salimah.ii
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Toko SR12 Elbirroe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
