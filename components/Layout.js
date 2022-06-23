import Footer from "./Footer";
import Header from "./Header";
import Head from 'next/head'

export default function Layout({title, children}) {
  return (
    <>
    <Head>
        <title>Next JS | {title}</title>
        <meta name='description' content='website next js basic'/>
    </Head>
    <div>
        <Header/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
    </>
  )
}
