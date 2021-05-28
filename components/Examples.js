import Link from 'next/link'
import dayjs from '@/utils/dayjs'

const DATE_FORMAT = 'YYYY-MM-DD'
const YEAR_FORMAT = 'YYYY'

export default function Examples() {

  const today = dayjs()

  const christmas = dayjs(`${today.format(YEAR_FORMAT)}-12-24`)
  const nextChristmas = christmas.isBefore(today) ? christmas.add(1, 'year') : christmas
  const neweve = dayjs(`${today.format(YEAR_FORMAT)}-12-31`)
  const nextNeweve = neweve.isBefore(today) ? neweve.add(1, 'year') : neweve

  const dates = {
    tomorrow: today.add(1, 'day').format(DATE_FORMAT),
    past_tomorrow: today.add(2, 'day').format(DATE_FORMAT),
    next_week: today.add(7, 'day').startOf('week').format(DATE_FORMAT),
    next_month: today.add(1, 'month').startOf('month').format(DATE_FORMAT),
    next_christmas: nextChristmas.format(DATE_FORMAT),
    next_neweve: nextNeweve.format(DATE_FORMAT),
    start_year: dayjs().month(0).date(1).format(DATE_FORMAT),
    year_2000: dayjs().year(2000).month(1).date(1).format(DATE_FORMAT)
  }

  return (
    <div className="text-gray-500 text-xs leading-5">
      Ejemplos: cuanto tiempo falta para {` `}
      <Link href={`/${dates.tomorrow}`}>
        <a className="text-indigo-400 underline">mañana</a>
      </Link>,
      {` `}

      <Link href={`/${dates.past_tomorrow}`}>
        <a className="text-indigo-400 underline">pasado mañana</a>
      </Link>,
      {` `}

      <Link href="/2021-05-29">
        <a className="text-indigo-400 underline">el próximo viernes</a>
      </Link>,
      {` `}

      <Link href={`/${dates.next_week}`}>
        <a className="text-indigo-400 underline">la próxima semana</a>
      </Link>,
      {` `}

      <Link href={`/${dates.next_month}`}>
        <a className="text-indigo-400 underline">el próximo mes</a>
      </Link>,
      {` `}

      <Link href={`/${dates.next_christmas}`}>
        <a className="text-indigo-400 underline">navidad</a>
      </Link>,
      {` `}

      <Link href={`/${dates.next_neweve}`}>
        <a className="text-indigo-400 underline">fin de año</a>
      </Link>
      {` `}

            también pudes consultar cuanto tiempo a transcurrido desde {` `}

      <Link href={`/${dates.start_year}`}>
        <a className="text-indigo-400 underline">que comenzó el año</a>
      </Link>,
      {` `}

      <Link href={`/${dates.year_2000}`}>
        <a className="text-indigo-400 underline">el año 2000</a>
      </Link>,
      {` `}

            ó cualquier fecha que especifiques.
    </div>
  )
}