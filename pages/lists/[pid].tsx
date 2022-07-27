import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import type ListType from '../../interfaces/list'
import { getInformationList,getInformationChildClass } from "../../lib/service"

type Props = {
  listInfo: ListType
  preview?: boolean
  toPage: Function
}
export default function List(props) {
  const {listInfo,preview, toPage} = props
  const router = useRouter()
  if (!router.isFallback && !listInfo.className) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>news news_list</title>
        </Head>
        <div className="news_list">
          <div className="bannerBox">
              <div className="w1200">
                  <div className="title">
                    发现精彩福禄
                  </div>
              </div>
          </div>
          <div className="backBox">
              <div className="w1200">
              <Link as={`/`} href="/"><span className="back">{listInfo.oneClassName}</span></Link>
              </div>
          </div>
          <div className="article">
            <div className="w1200">
                <div className="titleBox">
                    <span className="slogn"></span>
                    <span className="h3">{listInfo.className}</span>
                </div>
                <ul className="list page-list">
                  {
                    listInfo.pagedList.list.map((item)=>(
                        <Link key={item.id} className="con" as={`/details/${item.id}`} href={`/details/${encodeURIComponent(item.id)}`}>
                          <a className="item" key={item.id}>
                          <Image className="img" src={item.informationImage} alt={item.name} width={280} height={172}/>
                          <div className="fr">
                              <h4 className="title">{item.name}</h4>
                              <div className="text">{item.subTitle}</div>
                              <div className="desp">
                                  <span className="origin">{item.keyWord||'福禄控股'}</span>
                                  <span className="gap"></span>
                                  <span className="time">{item.modifyTime}</span>
                              </div>
                          </div>
                          </a>
                        </Link>
                    ))
                  }
                </ul>
            </div>
        </div>
        
        </div>
      </Layout>

    </div>

  )
}

export async function getCatyList(pid) {
  const parmas={
    classId:pid,
    pageIndex:'1',
    pageSize:'10'
  }
  const res = await getInformationList(parmas)
  return res;
}

export async function getServerSideProps(context) {
  const res = await getCatyList(context.params.pid)
  return {
     props: { 
      listInfo:{
        ...res
      }
    }
  }
}