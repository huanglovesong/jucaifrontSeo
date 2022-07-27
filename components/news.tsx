import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { parseISO,format } from 'date-fns'

const News=({catyList})=>{
  return (
    <div>
      <Head>
        <title>新闻中心</title>
      </Head>
      <div className="news news_page">
      <div className="bannerBox">
          <div className="w1200">
              <div className="title">
                  新闻中心
              </div>
              <div className="desp">
                  公司动态/新闻报道/权益玩法/行业资讯
              </div>
          </div>
      </div>
      {
        catyList&&catyList.map((item,index)=>{
          return (
            <div className={`caty_box caty_${index+1}`} key={item.id}>
              <div className="w1200">
                  {
                    item.informationList&&<div className="titleBox">
                      <div className="icon icon-tlt-l"></div>
                      <span className="title">{item.name}</span>
                      <div className="icon icon-tlt-r"></div>
                      <Link as={`/lists/${item.id}`} href="/lists/[pid]"><span className="more">查看全部</span></Link>
                    </div>
                  }
                  {
                    index==0&&item.informationList&&<ul className="list">
                    {
                      item.informationList.map((child,childIdx)=>{
                        return (childIdx<3&&<li className="item" key={child.id}>
                        <Link data-title={child.name} data-time={child.modifyTime} as={`/details/${child.id}`} href="/details/[id]">
                            <div className="content">
                                <Image className="img" src={child.informationImage} alt={child.name} width={384} height={230}/>
                                <p className="desp">{child.name}</p>
                            </div>
                        </Link>
                    </li>)
                      })
                    } 
                  </ul>}

                  {
                    index==1&&item.informationList&&<ul className="list">
                    {
                      item.informationList.map((child,childIdx)=>{
                        return (childIdx<4&&
                          <Link data-title={child.name} data-time={child.modifyTime} as={`/details/${child.id}`} href="/details/[id]">     
                          <li className="item" key={childIdx}>
                              <h4 className="title">{child.name}</h4>
                              <p className="text">{child.subTitle}</p>
                              <div className="desp">
                                  <span className="source">{child.keyWord}</span>
                                  <span className="time">{format(parseISO(child.modifyTime), 'yyyy年MM月dd日 HH:mm:ss')}</span>
                              </div>
                          </li>
                        </Link>
                        )
                      })
                    } 
                  </ul>
                  }

                  {
                    index==2&&item.informationList&&<ul className="list">
                    {
                      item.informationList.map((child,childIdx)=>{
                        return (childIdx<4&&
                          <Link data-title={child.name} data-time={child.modifyTime} as={`/details/${child.id}`} href="/details/[id]" key={childIdx}>
                            {childIdx==0?<div className="item flex-col">
                                <Image className="img" src={child.informationImage} alt={child.name} width={550} height={324}/>
                                <div className='txtcon'>
                                  <h2 className='title font-clamp'>{child.name}</h2>
                                  <p className="desp font-clamp2">{child.subTitle}</p>
                                </div>
                            </div>:<div className="item flex-row">
                                <Image className="img" src={child.informationImage} alt={child.name} width={135} height={80}/>
                                <div className='txtcon'>
                                  <h2 className='title font-clamp'>{child.name}</h2>
                                  <p className="desp font-clamp2">{child.subTitle}</p>
                                </div>
                            </div>} 
                          </Link>
                        )
                      })
                    } 
                  </ul>
                  }

                  {
                    index==3&&item.informationList&&<ul className="list">
                    {
                      item.informationList.map((child,childIdx)=>{
                        return (childIdx<5&&
                          <Link data-title={child.name} data-time={child.modifyTime} as={`/details/${child.id}`} href="/details/[id]" key={childIdx}>     
                            <li className="item">
                              <div className='keyword'>{child.keyWord}</div>
                              <div className='fr'>
                                  <h4 className="title font-clamp">{child.name}</h4>
                                  <p className="desp font-clamp">{child.subTitle}</p>
                                  <span className="time">{child.modifyTime}</span>
                              </div>
                            </li>
                        </Link>
                        )
                      })
                    } 
                  </ul>
                  }
                  
              </div>
            </div>
          )
        })
      }
      
      </div>
    </div>
  )
}

export default News



