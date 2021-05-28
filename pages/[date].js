import Link from 'next/link'
import { useRouter } from 'next/router'
import Countdown from '@/components/Countdown/Countdown'

export default function Day() {
  const router = useRouter()
  const routerDate = router.query?.date


  return (
    <div className="min-h-screen flex justify-center items-center p-10">

      <Link href="/">
        <a className="text-xl font-semibold absolute top-0 mt-5">📆😀</a>
      </Link>
      <Countdown propDate={routerDate} />
    </div>
  )
}