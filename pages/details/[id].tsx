import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import Link from 'next/link'
import type DetailType from '../../interfaces/detail'
import { getInformation } from "../../lib/service"

type Props = {
  detailInfo: DetailType
  preview?: boolean
  toPage: Function
}

export default function Detail({ detailInfo, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !detailInfo?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>{detailInfo.className}</title>
        </Head>
        <div className="news news_detail">
          <div className="bannerBox">
              <div className="w1200">
                  <div className="title">
                      在这里，读懂福禄
                  </div>
              </div>
          </div>
          <div className="backBox">
              <div className="w1200">
              <Link as={`/lists/${detailInfo.classId}`} href="/lists/[pid]"><span className="back" >{detailInfo.className}</span></Link>
              </div>
          </div>
          <Container>
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <div className='articleBox'>
                <article className='w700'>
                  <PostTitle children={detailInfo.name}></PostTitle>
                  <div className="desp">发布于：<span>{detailInfo.modifyTime}</span></div>
                  <PostBody content={detailInfo.content} />
                </article>
              </div>
            )}
          </Container>
        </div>
      </Layout>
    </div>

  )
}

type Params = {
  params: {
    id: string
  }
}

export async function getServerSideProps(context) {
  const res = await getInformation({id:context.params.id})
  const data = res;
  return {
    props: {
      detailInfo: {
        ...data,
      },
    },
  }
}