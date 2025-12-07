import { getSession } from '@/actions/auth'
import { NavbarClient } from './NavbarClient'

export async function Navbar() {
    const session = await getSession()
    return <NavbarClient session={session} />
}
