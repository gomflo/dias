import { useState } from 'react'
import { useInterval } from 'react-use'
import dayjs from '@/utils/dayjs'
import CountdownItem from '@/components/Countdown/CountdownItem'

export default function Countdown({ propDate }) {

  const date = dayjs(propDate)
  const isPast = date.isBefore(dayjs())

  const [countdown, setCountdown] = useState({})

  let timer
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  function remaining() {
    const now = dayjs()
    const distance = isPast ? now - date : date - now

    if (distance < 0) {
      clearInterval(timer)
    }

    const days = Math.floor(distance / day)
    const hours = Math.floor((distance % day) / hour)
    const minutes = Math.floor((distance % hour) / minute)
    const seconds = Math.floor((distance % minute) / second)
    setCountdown({ days, hours, minutes, seconds })
  }

  timer = useInterval(remaining, 1000)

  return (
    <div>
      <div className="flex flex-col md:flex-row space-x-0 space-y-10 md:space-y-0 md:space-x-20 text-5xl font-semibold">

        <CountdownItem value={countdown.days} label="días" />
        <CountdownItem value={countdown.hours} label="horas" />
        <CountdownItem value={countdown.minutes} label="minutos" />
        <CountdownItem value={countdown.seconds} label="segundos" />

      </div>

      {!isPast && <div className="mt-10 text-xs text-gray-800 text-right">Tiempo restante para el {date.format('dddd DD [de] MMMM [del] YYYY')}</div>}
      {isPast && <div className="mt-10 text-xs text-gray-800 text-right">Tiempo transcurrido desde el {date.format('dddd DD [de] MMMM [del] YYYY')}</div>}
    </div>
  )
}