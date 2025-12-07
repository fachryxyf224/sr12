import Image from 'next/image'
import { notFound } from 'next/navigation'
import { formatCurrency } from '@/lib/utils'
import { MessageCircle, Check, ShieldCheck } from 'lucide-react'
import { getProduct } from '@/actions/products'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
    const { slug } = await params
    const product = await getProduct(slug)

    if (!product) {
        notFound()
    }

    const whatsappMessage = encodeURIComponent(
        `Halo Kak, saya tertarik dengan produk ${product.name}, apakah stok masih ada?`
    )
    const whatsappUrl = `https://wa.me/6283150279906?text=${whatsappMessage}`

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div>
                    <div className="mb-6">
                        <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-600">
                            {product.category || 'Produk SR12'}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-3xl font-bold text-pink-600 mb-6">
                        {formatCurrency(Number(product.price))}
                    </p>

                    <div className="prose prose-sm text-gray-600 mb-8">
                        <p>{product.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Stok Tersedia: {product.stock}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <ShieldCheck className="h-4 w-4 text-green-500" />
                            <span>Jaminan 100% Original</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>BPOM Registered</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Halal Certified</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white hover:bg-green-600 transition-all shadow-lg hover:shadow-green-200 hover:-translate-y-1"
                        >
                            <MessageCircle className="h-6 w-6" />
                            Beli Sekarang via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
