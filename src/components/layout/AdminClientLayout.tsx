'use client'

import Link from 'next/link'
import { LayoutDashboard, Package, Settings, LogOut, Tag, Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { logout } from '@/actions/auth'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function AdminClientLayout({
    children,
    navbar,
    footer
}: {
    children: React.ReactNode
    navbar: React.ReactNode
    footer: React.ReactNode
}) {
    const router = useRouter()
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleLogout = async () => {
        await logout()
        toast.success('Berhasil keluar')
        router.push('/login')
    }

    const navItems = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/products', label: 'Produk', icon: Package },
        { href: '/admin/vouchers', label: 'Voucher', icon: Tag },
        { href: '/admin/settings', label: 'Pengaturan', icon: Settings },
    ]

    return (
        <div className="flex min-h-screen bg-gray-50/50">
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 z-40">
                <span className="font-serif font-bold text-pink-600 text-lg">Admin SR12</span>
                <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-gray-600">
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
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
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 md:hidden"
                        >
                            <div className="p-6 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-pink-600 font-serif">Admin SR12</h2>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            <nav className="px-4 space-y-1">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                                    ? 'bg-pink-50 text-pink-600 font-medium shadow-sm'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                }`}
                                        >
                                            <item.icon className={`h-5 w-5 ${isActive ? 'text-pink-600' : 'text-gray-400'}`} />
                                            {item.label}
                                        </Link>
                                    )
                                })}
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all mt-8 text-left"
                                >
                                    <LogOut className="h-5 w-5" />
                                    Keluar
                                </button>
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <aside className="w-72 bg-white hidden md:block fixed h-full shadow-[1px_0_20px_rgba(0,0,0,0.02)] z-50">
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-pink-600 font-serif tracking-tight">Admin SR12</h2>
                </div>
                <nav className="px-6 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${isActive
                                        ? 'bg-pink-50 text-pink-600 font-medium shadow-sm translate-x-1'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:translate-x-1'
                                    }`}
                            >
                                <item.icon className={`h-5 w-5 ${isActive ? 'text-pink-600' : 'text-gray-400'}`} />
                                {item.label}
                            </Link>
                        )
                    })}

                    <div className="px-4 mt-8 pt-8 border-t border-gray-100">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all text-left group"
                        >
                            <LogOut className="h-5 w-5 group-hover:text-red-600 transition-colors" />
                            Keluar
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col md:ml-72 min-h-screen transition-all duration-300">
                {/* Navbar */}
                <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
                    {/* We wrap the passed Navbar to ensure it behaves well in this context if needed, 
               but the Navbar component itself is sticky. We might need to override that or let it be.
               Since Navbar has 'sticky top-0', it will stick to the top of THIS container (flex-1).
               Perfect.
           */}
                    {navbar}
                </div>

                {/* Page Content */}
                <main className="flex-1 p-6 md:p-10">
                    <div className="max-w-5xl mx-auto">
                        {children}
                    </div>
                </main>

                {/* Footer */}
                <div className="border-t border-gray-100 bg-white">
                    {footer}
                </div>
            </div>
        </div>
    )
}
