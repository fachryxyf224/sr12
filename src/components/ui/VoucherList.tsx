'use client'

import { toast } from 'sonner'
import { Copy, Tag } from 'lucide-react'

interface Voucher {
    id: string
    code: string
    discount: any // Decimal from Prisma is tricky in client, treat as number/string
    desc?: string
}

export function VoucherList({ vouchers }: { vouchers: Voucher[] }) {
    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code)
        toast.success('Kode voucher berhasil disalin!')
    }

    if (vouchers.length === 0) {
        return (
            <section className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Voucher Spesial</h2>
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Tag className="h-8 w-8 text-pink-300" />
                    </div>
                    <p className="text-gray-500">Maaf, belum ada voucher diskon yang tersedia saat ini.</p>
                    <p className="text-sm text-gray-400 mt-1">Nantikan promo menarik dari kami!</p>
                </div>
            </section>
        )
    }

    return (
        <section className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Voucher Spesial</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vouchers.map((voucher) => (
                    <div key={voucher.id} className="group relative overflow-hidden border border-pink-200 bg-gradient-to-r from-pink-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-pink-600">{Number(voucher.discount)}% OFF</h3>
                                <p className="text-sm text-gray-600 mt-1">Gunakan kode ini saat checkout</p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(voucher.code)}
                                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-pink-200 font-mono font-bold text-pink-600 hover:bg-pink-50 transition-colors active:scale-95 cursor-pointer"
                            >
                                {voucher.code}
                                <Copy className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-pink-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}
