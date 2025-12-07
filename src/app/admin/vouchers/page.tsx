import Link from 'next/link'
import { Plus, Trash, Tag } from 'lucide-react'
import { getVouchers, deleteVoucher } from '@/actions/vouchers'

export const dynamic = 'force-dynamic'

export default async function AdminVouchersPage() {
    const vouchers = await getVouchers()

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 font-serif">Manajemen Voucher</h1>
                <Link href="/admin/vouchers/new" className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors shadow-sm">
                    <Plus className="h-4 w-4" />
                    Tambah Voucher
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {vouchers.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Tag className="h-8 w-8 text-pink-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada voucher</h3>
                        <p className="text-gray-500 mb-6">Buat voucher diskon untuk menarik lebih banyak pelanggan.</p>
                        <Link href="/admin/vouchers/new" className="text-pink-600 font-medium hover:text-pink-700 hover:underline">
                            Buat Voucher Baru &rarr;
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 font-medium text-gray-900">Kode Voucher</th>
                                    <th className="px-6 py-4 font-medium text-gray-900">Diskon</th>
                                    <th className="px-6 py-4 font-medium text-gray-900">Berlaku Sampai</th>
                                    <th className="px-6 py-4 font-medium text-gray-900 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {vouchers.map((voucher) => (
                                    <tr key={voucher.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-mono font-bold text-pink-600">{voucher.code}</td>
                                        <td className="px-6 py-4 text-gray-600">{Number(voucher.discount)}%</td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {new Date(voucher.validity).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <form action={async () => {
                                                    'use server'
                                                    await deleteVoucher(voucher.id)
                                                }}>
                                                    <button type="submit" className="p-2 hover:bg-red-50 rounded text-red-600 transition-colors" title="Hapus Voucher">
                                                        <Trash className="h-4 w-4" />
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
