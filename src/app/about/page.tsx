import Image from 'next/image'

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Cantik, Sehat, <span className="text-pink-600 italic">Alami</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Kami berdedikasi untuk menghadirkan solusi perawatan kulit terbaik dengan bahan-bahan herbal alami yang aman, halal, dan terpercaya.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                            <Image
                                src="/assets/sr12.jpeg"
                                alt="Tentang SR12"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Tentang Toko SR12 Elbirroe</h2>
                            <div className="w-20 h-1 bg-pink-600 mb-6"></div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Sebagai distributor resmi SR12 Herbal Skincare, kami berkomitmen untuk menyediakan produk perawatan kulit yang tidak hanya mempercantik, tetapi juga menyehatkan.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Setiap produk yang kami tawarkan telah melalui proses seleksi ketat dan terjamin keasliannya. Kami percaya bahwa setiap orang berhak mendapatkan perawatan kulit terbaik yang aman untuk jangka panjang.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Visi Kami</h3>
                                <p className="text-sm text-gray-600">
                                    Menjadi mitra terpercaya dalam perjalanan perawatan kulit alami wanita Indonesia.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Misi Kami</h3>
                                <p className="text-sm text-gray-600">
                                    Menyediakan produk herbal berkualitas tinggi dengan pelayanan yang ramah dan profesional.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Kenapa Memilih Kami?</h3>
                            <ul className="space-y-3">
                                {[
                                    'Produk 100% Original & Terjamin',
                                    'Konsultasi Gratis Seputar Masalah Kulit',
                                    'Pengiriman Cepat & Aman ke Seluruh Indonesia',
                                    'Jaminan Uang Kembali jika Produk Palsu'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-xs font-bold">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
