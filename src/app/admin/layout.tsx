import { AdminClientLayout } from '@/components/layout/AdminClientLayout'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getSession } from '@/actions/auth'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getSession()

    if (!session) {
        redirect('/login')
    }

    return (
        <AdminClientLayout
            navbar={<Navbar />}
            footer={<Footer />}
        >
            {children}
        </AdminClientLayout>
    )
}
