'use client'

import { usePathname } from 'next/navigation'

export function PublicLayout({
    children,
    navbar,
    footer
}: {
    children: React.ReactNode
    navbar: React.ReactNode
    footer: React.ReactNode
}) {
    const pathname = usePathname()
    const isAdmin = pathname?.startsWith('/admin') || pathname?.startsWith('/login')

    if (isAdmin) {
        return <>{children}</>
    }

    return (
        <>
            {navbar}
            <main className="flex-grow">
                {children}
            </main>
            {footer}
        </>
    )
}
