'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Hardcoded check for now (as per previous mock)
    // In real app, check against DB
    if (email === 'admin@sr12.com' && password === 'securepassword123') {
        // Set cookie
        const cookieStore = await cookies()
        cookieStore.set('session', 'admin-token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        })

        redirect('/admin')
    } else {
        return { error: 'Email atau password salah!' }
    }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
    redirect('/login')
}

export async function getSession() {
    const cookieStore = await cookies()
    return cookieStore.get('session')?.value
}
