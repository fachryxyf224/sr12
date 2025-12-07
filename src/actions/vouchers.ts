'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getVouchers() {
    try {
        const vouchers = await prisma.voucher.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return vouchers
    } catch (error) {
        console.error('Failed to fetch vouchers:', error)
        return []
    }
}

export async function createVoucher(formData: FormData) {
    const code = (formData.get('code') as string).toUpperCase()
    const discount = Number(formData.get('discount'))
    // Mock validity for now, or add field in form
    const validity = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now

    try {
        await prisma.voucher.create({
            data: {
                code,
                discount,
                validity,
            },
        })
    } catch (error) {
        console.error('Failed to create voucher:', error)
        // return { error: 'Failed to create voucher' }
        return
    }

    revalidatePath('/admin/vouchers')
    revalidatePath('/')
    redirect('/admin/vouchers')
}

export async function deleteVoucher(id: string) {
    try {
        await prisma.voucher.delete({
            where: { id },
        })
        revalidatePath('/admin/vouchers')
        revalidatePath('/')
    } catch (error) {
        console.error('Failed to delete voucher:', error)
        // return { error: 'Failed to delete voucher' }
    }
}
