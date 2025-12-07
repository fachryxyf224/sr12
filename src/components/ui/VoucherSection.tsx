import { getVouchers } from '@/actions/vouchers'
import { VoucherList } from './VoucherList'

export async function VoucherSection() {
    const vouchers = await getVouchers()
    return <VoucherList vouchers={vouchers} />
}
