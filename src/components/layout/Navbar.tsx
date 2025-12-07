import Link from 'next/link'
import Image from 'next/image'
import { Menu, ShoppingBag, User, LayoutDashboard } from 'lucide-react'
import { getSession } from '@/actions/auth'

export async function Navbar() {
    const session = await getSession()

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-pink-100 shadow-sm group-hover:shadow-md transition-all">
                        <Image
                            src="/assets/logo.png"
                            alt="Toko SR12 Elbirroe"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-serif font-bold text-gray-900 tracking-tight group-hover:text-pink-600 transition-colors">SR12 Elbirroe</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Herbal Skincare</span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors">
                        Beranda
                    </Link>
                    <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors">
                        Produk
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors">
                        Tentang Kami
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/cart" className="relative p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all group">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Keranjang</span>
                    </Link>

                    {session ? (
                        <Link
                            href="/admin"
                            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Link>
                    ) : (
                        <Link
                            href="/login"
                            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-600 text-white text-sm font-medium hover:bg-pink-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <User className="h-4 w-4" />
                            Masuk
                        </Link>
                    )}

                    <button className="md:hidden p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
