import Image from 'next/image'
import Link from 'next/link'
import { formatCurrency } from '@/lib/utils'
import { MessageCircle } from 'lucide-react'

interface ProductCardProps {
    product: {
        id: string
        name: string
        slug: string
        price: number
        image: string
        description: string
    }
}

export function ProductCard({ product }: ProductCardProps) {
    const whatsappMessage = encodeURIComponent(
        `Halo Kak, saya tertarik dengan produk ${product.name}, apakah stok masih ada?`
    )
    const whatsappUrl = `https://wa.me/6283150279906?text=${whatsappMessage}`

    return (
        <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
            <Link href={`/products/${product.slug}`} className="block aspect-square overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </Link>
            <div className="p-4">
                <Link href={`/products/${product.slug}`}>
                    <h3 className="line-clamp-1 text-lg font-semibold text-gray-900 hover:text-pink-600">
                        {product.name}
                    </h3>
                </Link>
                <p className="mt-1 text-lg font-bold text-pink-600">
                    {formatCurrency(Number(product.price))}
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {product.description}
                </p>

                <div className="mt-4 flex gap-2">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 transition-colors"
                    >
                        <MessageCircle className="h-4 w-4" />
                        Beli Sekarang
                    </a>
                </div>
            </div>
        </div>
    )
}
