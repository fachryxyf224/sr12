'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Lock, ArrowLeft } from 'lucide-react'
import { login } from '@/actions/auth'
import Link from 'next/link'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        setLoading(true)
        const result = await login(formData)

        if (result?.error) {
            toast.error(result.error)
            setLoading(false)
        }
        // If success, redirect happens in server action
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                    <div className="bg-pink-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="h-6 w-6 text-pink-600" />
                    </div>
                    <h1 className="font-serif text-2xl font-bold text-gray-900">Admin Login</h1>
                    <p className="text-sm text-gray-500 mt-2">Masuk untuk mengelola toko</p>
                </div>

                <form action={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all"
                            placeholder="admin@sr12.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-gray-900 px-4 py-3 text-white font-medium hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Memproses...' : 'Masuk'}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-pink-600 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </div>
    )
}
