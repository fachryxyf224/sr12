'use client'

import { toast } from 'sonner'

export default function SettingsPage() {
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        toast.success('Pengaturan berhasil disimpan')
    }

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 font-serif mb-8">Pengaturan Toko</h1>

            <form onSubmit={handleSave} className="bg-white p-6 rounded-lg shadow-sm border space-y-6">
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Informasi Umum</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-1">
                                Nama Toko
                            </label>
                            <input
                                type="text"
                                id="storeName"
                                defaultValue="Toko SR12 Elbirroe"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                                Nomor WhatsApp
                            </label>
                            <input
                                type="text"
                                id="whatsapp"
                                defaultValue="6283150279906"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Media Sosial</h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                                Instagram
                            </label>
                            <input
                                type="text"
                                id="instagram"
                                defaultValue="@Tsabit244"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="tiktok" className="block text-sm font-medium text-gray-700 mb-1">
                                TikTok
                            </label>
                            <input
                                type="text"
                                id="tiktok"
                                defaultValue="@enden.salimah.ii"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="shopee" className="block text-sm font-medium text-gray-700 mb-1">
                                Shopee
                            </label>
                            <input
                                type="text"
                                id="shopee"
                                defaultValue="enden_salimah102"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-pink-600 px-4 py-2 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors"
                    >
                        Simpan Perubahan
                    </button>
                </div>
            </form>
        </div>
    )
}
