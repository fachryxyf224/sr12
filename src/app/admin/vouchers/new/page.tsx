import { createVoucher } from '@/actions/vouchers'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NewVoucherPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link href="/admin/vouchers" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
                    <ArrowLeft className="h-4 w-4" />
                    Kembali
                </Link>
                <h1 className="text-2xl font-bold text-gray-900 font-serif">Tambah Voucher Baru</h1>
            </div>

            <form action={createVoucher} className="bg-white p-6 rounded-lg shadow-sm border space-y-6">
                <div>
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
                        Kode Voucher
                    </label>
                    <input
                        type="text"
                        name="code"
                        id="code"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 uppercase font-mono"
                        placeholder="CONTOH: DISKON10"
                    />
                    <p className="mt-1 text-xs text-gray-500">Gunakan huruf kapital dan angka tanpa spasi.</p>
                </div>

                <div>
                    <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">
                        Besar Diskon (%)
                    </label>
                    <input
                        type="number"
                        name="discount"
                        id="discount"
                        required
                        min="1"
                        max="100"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                        placeholder="10"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-pink-600 px-4 py-2 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
                    >
                        Simpan Voucher
                    </button>
                </div>
            </form>
        </div>
    )
}
