'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroSection() {
    return (
        <section className="relative bg-gradient-to-b from-pink-50 to-white py-20 lg:py-32">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold mb-6">
                                #1 Herbal Skincare Indonesia
                            </span>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight">
                                Cantik Alami Bersama <span className="text-pink-600">SR12 Herbal</span>
                            </h1>
                            <p className="text-lg leading-8 text-gray-600 mb-8">
                                Temukan rahasia kulit sehat dan cantik alami dengan rangkaian produk herbal terbaik dari SR12.
                                Aman, Halal, dan BPOM.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/products"
                                    className="rounded-full bg-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-pink-500 hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300"
                                >
                                    Belanja Sekarang
                                </Link>
                                <Link
                                    href="/about"
                                    className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
                                >
                                    Tentang Kami
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex-1 relative w-full max-w-md lg:max-w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-md mx-auto aspect-square p-4">
                            <div className="absolute inset-0 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                            <Image
                                src="/assets/sr12.jpeg"
                                alt="SR12 Products"
                                fill
                                className="object-cover rounded-2xl shadow-2xl relative z-10"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            {/* Floating Elements - Adjusted positions */}
                            <motion.div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl z-20 border border-pink-100"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >
                                <p className="font-bold text-pink-600 text-lg">100%</p>
                                <p className="text-xs text-gray-500 font-medium">Original</p>
                            </motion.div>
                            <motion.div
                                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl z-20 border border-green-100"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                            >
                                <p className="font-bold text-green-600 text-lg">BPOM</p>
                                <p className="text-xs text-gray-500 font-medium">Certified</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
