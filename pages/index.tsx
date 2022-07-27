
import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import News from '../components/news'
import configs from "../config/configs"

import { getInformationOneClass,getInformationChildClass } from "../lib/service"

let myTimer=null;

export default function Index(props) {
  const {catyList} =props
  return (
    <>
      <Layout
      toPage={toPage}
      >
        <Head>
          <title>这是页面标题</title>
        </Head>
        <Container>
          <News
          catyList={catyList}
          />
        </Container>
      </Layout>
    </>
  )
}

function toPage(type){
  if (!type) return;
  if(type === "top"){
    if (myTimer) {
      clearInterval(myTimer)
    }
    const speed = 100 //定义一个速度，即每隔30毫秒走多少px
    myTimer = setInterval(() => {
      document.documentElement.scrollTop = document.documentElement.scrollTop - speed
      //如果scroll的滚动值为0，也就是到达了页面顶部，需要停止定时器
      if (document.documentElement.scrollTop <= 0) {
        clearInterval(myTimer)
      }
    }, 30)
  } else if(type === "index"){
    window.location.href=configs.jucaiSeoUrl+"/index.html";
  } else if(type === "home"){
    window.location.href=configs.mallpop;
  }  else if(type === "apioption"){
    window.open('https://doc.weixin.qq.com/doc/w3_m_GIVpppnbFQlr?scode=AEEAmwerAAo3uLCpb0AJwAPAZfALk')
  } else if(type === "api"){
    window.open('https://docs.open.fulu.com/home')
  } else if(type === "qa"){
    window.open('https://doc.weixin.qq.com/doc/w3_m_GRCNsrIrnsUO?scode=AEEAmwerAAoetVFvz6AJwAPAZfALk')
  } else if(type === "kaipiao"){
    window.open('https://jucai.fulu.com/question/1')
  } else if(type === "map"){
    window.open('https://jucai.fulu.com/sitemap.html')
  } else if(type === "zixun"){
    window.open('https://www8c1.53kf.com/webCompany.php?arg=10441351&kf_sign=zU2NTMTY1MMzMTI0NTgxOTg4MDkwODcyNDQxMzUx&style=1')
  } else if(type === "form"){
    window.open('http://form.53kf.com/visitor/10441351/43cc53dca112dd41cae06d00ec0febfa')
  } else if(type === "onlinekefu"){
    window.open('https://www8c1.53kf.com/webCompany.php?arg=10441351&kf_sign=zg3OTMTY1McxMTI0NTgxOTg4MDkwODcyNDQxMzUx&style=1')
  } else if(type === "xunjia"){
    window.open('https://form.53kf.com/visitor/10441351/80d4d1f0d8a960c21007fabcc4fb480a')
  } else if(type === "fuli"){
    window.location.href="./solutionQy.html"
  } else if(type === "jifen"){
    window.location.href="./solutionJf.html"
  } else if(type === "yinxiao"){
    window.location.href="./solutionYx.html"
  } else if(type === "zhibo"){
    window.location.href="./solutionZb.html"
  } else if(type === "liaojie"){
    window.open('https://www8c1.53kf.com/webCompany.php?arg=10441351&kf_sign=TEwNTMTY1NM3MTI1MTA4NTA3ODcwODcyNDQxMzUx&style=1')
  } else if(type === "tiyan"){
    window.open('https://jucai.fulu.com/subject?id=338e283c-b020-11ec-b0d6-506b4b4b3eba')
    // https://qiyegou-jucai.fulu.com/subject?id=338e283c-b020-11ec-b0d6-506b4b4b3eba
  } else if(type === "huiyuan"){
    window.open('https://jucai.fulu.com/')
  } else if(type === "project"){
    window.open('https://form.53kf.com/visitor/10441351/80d4d1f0d8a960c21007fabcc4fb480a')
  } else if(type === 'qygOrder'){
  //   window.open(configs.mallpop+"/myOrders")
  } else if(type === 'qygCenter'){
  //   window.open(configs.mallpop+"/center")
  }

}

export async function getServerSideProps(context) {
  let {catyId}=context.query;
  const res = await getInformationOneClass();
  let resdata=res.list;
  catyId=catyId||resdata[0].id
  if(res){
    const res2 = await getInformationChildClass({pid:catyId})
    let resdata2=res2.list;
    return {
      props:{
        catyList:resdata2||[]
      }
    }
  }
}