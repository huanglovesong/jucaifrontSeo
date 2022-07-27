import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getInformationOneClass } from "../lib/service"
import type newsCatyObject from '../interfaces/propObject'
import configs from "../config/configs"

type Props = {
  newsCaty: newsCatyObject[]
  toPage: Function
}

//功能组件
const Header = (props) => {
  const {newsCaty} =props
  return (
    <div>
      <div className="topBox">
          <div className="w1200">
              <div className="fl">
                  <div className="hrefBox">
                      <a className="link" onClick={()=>{toPage('home')}}><span>首页</span></a>
                      <a className="link" onClick={()=>{toPage('kaipiao')}}><span>开票申请</span></a>
                      <a className="link" onClick={()=>{toPage('map')}}><span>网站地图</span></a>  
                  </div>
              </div>
              <div className="fr">
                  {/* <div className="unlogBox">
                      <a className="link" href="login.html?type=login"><span>请登录</span></a>
                      <a className="link last" href="login.html?type=sign"><span>注册</span></a>
                  </div> */}

                  <div className="logedBox">
                    <span>企业会员  <em className="cellphone">XXXXXX</em></span>
                    <div className='nav-item'>
                      <ul className='menu-list'>
                      <li >
                          <div>我的订单</div>
                      </li>
                      <li >
                          <div>个人中心</div>
                      </li>
                      <li className="showLogOutConfirm">
                          <div>登出</div>
                      </li>
                      </ul>
                    </div>
                  </div>

                  <span className="ml30">客服热线：400-001-2806</span>
              </div>

          </div>
      </div>
      <div className="header">
          <div className="w1200">
              <div className="fl">
                  <a className="logoa" onClick={()=>{toPage('home')}}><div className="logo"></div></a>
                  <ul className="navBox">
                      <li className="navli"><a target="_blank" href={process.env.jucaiSeoUrl}>在线批采</a></li>
                      <li className="navli"><a target="_blank" href={configs.jucaiSeoUrl+"/index.html"}>API进货</a><span className="abs icon-hot"></span></li>
                      <li className="navli"><a target="_blank" href={configs.jucaiSeoUrl+"/qudao.html"}>渠道定制</a></li>
                      <li className="navli"><a target="_blank" href={configs.jucaiSeoUrl+"/solution.html"}>解决方案</a></li>
                      {newsCaty&&newsCaty.length==1&&<li className="navli active"><a>{newsCaty[0].name}</a></li>}
                      {newsCaty&&newsCaty.length>1&&<li className='navli active catyNav'>
                            <a>新闻资讯</a> 
                            <div className='navhide'>
                                {newsCaty.map(item=>(
                                  <Link href={`/?catyId=${item.id}`} key={item.id}><span>{item.name}</span></Link>
                                ))}
                            </div>
                        </li>}
                      <li className="navli"><a target="_blank" href="https://jucai.fulu.com/caseAndHonor">客户案例</a></li>
                      <li className="navli"><a target="_blank" href={configs.jucaiSeoUrl+"/client.html"}>大客户专区<span className="abs icon-hot"></span></a></li>
                      <li className="navli"><a target="_blank" href={configs.jucaiSeoUrl+"/about.html"}>关于我们</a></li>
                  </ul>
              </div>

              <div className="fr">
                  <div className="callplat">
                      <Image className="img" src={configs.jucaiSeoUrl+"/images/concact-top.png"} alt="contact" width={40} height={40}/>
                      <div className='ml10'>
                          <span>24h在线客服</span>
                          <a className="callbtn" onClick={()=>{toPage('zixun')}}>立即咨询</a>
                      </div>
                  </div>
              </div>

          </div>
      </div>

      <div className="popModal">
          <div className="mask"></div>
          <div className="modal-content">
              <span className="modal-close hideLogOutConfirm">
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
              </span>
              <div className="modal-body">
                  <div className="confirm-content">
                      <h2>提示</h2>
                      <div className="text">确定退出登录吗？</div>
                      <div className="confirm-btn"><span className="ok logout-confirm">确认</span><span className="cancel hideLogOutConfirm">取消</span></div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

function toPage(type){
  if (!type) return;
  if(type === "index"){
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

export default Header
