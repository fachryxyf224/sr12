'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, ShoppingBag, User, LayoutDashboard, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarClientProps {
    session: string | undefined
}

export function NavbarClient({ session }: NavbarClientProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/products', label: 'Produk' },
        { href: '/about', label: 'Tentang Kami' },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="w-full max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
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

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-colors"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-50 md:hidden flex flex-col"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-gray-100">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-pink-100">
                                        <Image
                                            src="/assets/logo.png"
                                            alt="Toko SR12 Elbirroe"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-lg font-serif font-bold text-gray-900">SR12 Elbirroe</span>
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all"
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <div className="pt-6 mt-6 border-t border-gray-100 px-4">
                                    {session ? (
                                        <Link
                                            href="/admin"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-sm"
                                        >
                                            <LayoutDashboard className="h-5 w-5" />
                                            Dashboard Admin
                                        </Link>
                                    ) : (
                                        <Link
                                            href="/login"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition-all shadow-sm"
                                        >
                                            <User className="h-5 w-5" />
                                            Masuk
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    )
}
