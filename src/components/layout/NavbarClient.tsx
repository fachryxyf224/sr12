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
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl md:hidden flex flex-col"
                    >
                        <div className="container mx-auto px-4 h-20 flex items-center justify-between border-b border-gray-100/50">
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
                                className="p-2 text-gray-500 hover:text-pink-600 transition-colors"
                            >
                                <X className="h-8 w-8" />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-serif font-medium text-gray-900 hover:text-pink-600 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col gap-4 w-full max-w-xs mt-8"
                            >
                                {session ? (
                                    <Link
                                        href="/admin"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <LayoutDashboard className="h-5 w-5" />
                                        Dashboard Admin
                                    </Link>
                                ) : (
                                    <Link
                                        href="/login"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <User className="h-5 w-5" />
                                        Masuk
                                    </Link>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
