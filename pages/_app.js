import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async defer data-website-id="df166a87-1df9-47fe-9d37-7f86e608feca" src="https://analytics.gomflo.dev/umami.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
