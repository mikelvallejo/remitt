import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Remitt - Obtén más por el dinero que envias a casa</title>
        <meta name="description" content="Remitt compara proveedores de envio de dinero por ti" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
