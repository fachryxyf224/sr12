'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getProducts() {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return products
    } catch (error) {
        console.error('Failed to fetch products:', error)
        return []
    }
}

export async function getProduct(slug: string) {
    try {
        const product = await prisma.product.findUnique({
            where: { slug },
        })
        return product
    } catch (error) {
        console.error('Failed to fetch product:', error)
        return null
    }
}

import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function createProduct(formData: FormData) {
    const name = formData.get('name') as string
    const price = Number(formData.get('price'))
    const description = formData.get('description') as string
    const stock = Number(formData.get('stock'))
    const category = formData.get('category') as string

    const imageFile = formData.get('image') as File
    let imagePath = '/assets/logo.png' // Default fallback

    if (imageFile && imageFile.size > 0) {
        try {
            const bytes = await imageFile.arrayBuffer()
            const buffer = Buffer.from(bytes)

            // Create unique filename
            const filename = `${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.]/g, '')}`
            const uploadDir = join(process.cwd(), 'public', 'uploads')
            const filepath = join(uploadDir, filename)

            await writeFile(filepath, buffer)
            imagePath = `/uploads/${filename}`
        } catch (error) {
            console.error('Error uploading file:', error)
            // Continue with default image or handle error
        }
    } else {
        // Check if it's a URL string (fallback for old form or if user enters URL)
        const imageUrl = formData.get('image') as string
        if (typeof imageUrl === 'string' && imageUrl.startsWith('http')) {
            imagePath = imageUrl
        }
    }

    // Simple slug generation
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + Date.now()

    try {
        await prisma.product.create({
            data: {
                name,
                slug,
                price,
                description,
                image: imagePath,
                stock,
                category,
            },
        })
    } catch (error) {
        console.error('Failed to create product:', error)
        return
    }

    revalidatePath('/admin/products')
    revalidatePath('/products')
    revalidatePath('/')
    redirect('/admin/products')
}

export async function updateProduct(id: string, formData: FormData) {
    const name = formData.get('name') as string
    const price = Number(formData.get('price'))
    const description = formData.get('description') as string
    const stock = Number(formData.get('stock'))
    const category = formData.get('category') as string

    const imageFile = formData.get('image') as File
    let imagePath = undefined

    if (imageFile && imageFile.size > 0) {
        try {
            const bytes = await imageFile.arrayBuffer()
            const buffer = Buffer.from(bytes)

            const filename = `${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.]/g, '')}`
            const uploadDir = join(process.cwd(), 'public', 'uploads')
            const filepath = join(uploadDir, filename)

            await writeFile(filepath, buffer)
            imagePath = `/uploads/${filename}`
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    } else {
        // Check if user provided a URL string manually (if we keep that option)
        const imageUrl = formData.get('image') as string
        if (typeof imageUrl === 'string' && imageUrl.startsWith('http')) {
            imagePath = imageUrl
        }
    }

    try {
        await prisma.product.update({
            where: { id },
            data: {
                name,
                price,
                description,
                stock,
                category,
                ...(imagePath && { image: imagePath }), // Only update image if new one provided
            },
        })
    } catch (error) {
        console.error('Failed to update product:', error)
        return
    }

    revalidatePath('/admin/products')
    revalidatePath('/products')
    revalidatePath('/')
    redirect('/admin/products')
}

export async function deleteProduct(id: string) {
    try {
        await prisma.product.delete({
            where: { id },
        })
        revalidatePath('/admin/products')
        revalidatePath('/products')
        revalidatePath('/')
    } catch (error) {
        console.error('Failed to delete product:', error)
        return { error: 'Failed to delete product' }
    }
}
