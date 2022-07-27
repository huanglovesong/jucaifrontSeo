import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { getInformationOneClass } from "../lib/service"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <div className="min-h-screen">
    <Header
     newsCaty={pageProps.newsCaty}
    /> 
     <Component {...pageProps}/>
    <Footer/> 
  </div>
}

MyApp.getInitialProps= async () => {
  const res = await getInformationOneClass()
  let resdata=[];
  if(res){resdata=res.list;}
  let props = {
    newsCaty:resdata
  }
  return {pageProps:{...props}}
}