import { useRouter } from 'next/router'
import Countdown from '@/components/Countdown/Countdown'
import Layout from '@/components/Layout'

export default function Day() {
  const router = useRouter()
  const routerDate = router.query?.date


  return (
    <Layout>
      <Countdown propDate={routerDate} />
    </Layout>
  )
}