import 'dotenv/config'
import { PrismaClient, Role } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    // Create Admin User
    const adminEmail = 'admin@sr12.com'
    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
            name: 'Admin SR12',
            role: Role.ADMIN,
            password: 'securepassword123', // In production, hash this!
        },
    })

    console.log({ admin })

    // Create Sample Products
    const products = [
        {
            name: 'Minyak Bulus SR12',
            slug: 'minyak-bulus-sr12',
            price: 95000,
            description: 'Minyak bulus asli untuk perawatan kulit alami.',
            image: '/assets/sr12.jpeg', // Using the moved image
            stock: 50,
            category: 'Skincare',
            metaTitle: 'Jual Minyak Bulus SR12 Asli',
            metaDesc: 'Minyak bulus SR12 solusi kulit sehat alami.',
        },
        {
            name: 'Sabun Bulus SR12',
            slug: 'sabun-bulus-sr12',
            price: 25000,
            description: 'Sabun mandi herbal dengan ekstrak bulus.',
            image: '/assets/logo.png', // Placeholder
            stock: 100,
            category: 'Body Care',
            metaTitle: 'Sabun Bulus SR12 Murah',
            metaDesc: 'Sabun herbal SR12 untuk kulit bersih dan cerah.',
        },
    ]

    for (const p of products) {
        const product = await prisma.product.upsert({
            where: { slug: p.slug },
            update: {},
            create: p,
        })
        console.log({ product })
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
