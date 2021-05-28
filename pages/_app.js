import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Días · Consulta cuantos días para una fecha especifica</title>
        <meta name="description" content="Herramienta donde podrás consultar cuanto tiempo falta para una fecha especifica ó consultar cuanto tiempo a transcurrido a partir de una fecha." />
        <script async defer data-website-id="df166a87-1df9-47fe-9d37-7f86e608feca" src="https://analytics.gomflo.dev/umami.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
