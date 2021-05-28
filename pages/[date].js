import { useRouter } from 'next/router'
import Countdown from '@/components/Countdown/Countdown'

export default function Day() {
  const router = useRouter()
  const routerDate = router.query?.date


  return (
    <div className="min-h-screen flex justify-center items-center p-10">
      <Countdown propDate={routerDate} />
    </div>
  )
}