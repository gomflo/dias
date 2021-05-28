import Layout from '@/components/Layout'
import Examples from '@/components/Examples'
import dayjs from '@/utils/dayjs'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const onSubmit = data => router.push(data.date)

  const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD')

  return (
    <Layout>
      <div className="max-w-xl">

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* <h1 className="text-2xl text-center text-gray-800 font-semibold uppercase">Elije una fecha</h1> */}

          <div className="flex justify-center space-x-3">
            <div>
              <label htmlFor="date" className="sr-only">Día</label>
              <input {...register("date")} id="date" type="date" defaultValue={tomorrow} className="w-full" />
            </div>

            <button className="bg-indigo-800 text-white font-semibold px-3">Continuar</button>
          </div>


          <div className="mt-3">
            <Examples />
          </div>
        </form>

        {/* <h1 className="mt-28 text-xl text-center font-semibold">Calcula cuantos días faltan ó cuantos días han transcurrido</h1>
        <div className="mt-3 text-gray-800 text-center">
          Herramienta que te permite calcular cuantos días faltan ó cuantos días han transcurrido a partir de una fecha en particular, por ejemplo la puedes utilizar para saber cuanto tiempo falta para tu cumpleaños, cuantos días faltan para Navidad o alguna fecha importante.
        </div> */}
      </div>
    </Layout>
  )
}
