import Container from './container'
import Image from 'next/image'
import Link from 'next/link'
let myTimer=null;

const Footer = (props) => {
  return (
    <footer>
   
      <div className="footer">
            <div className="adv_img"></div>
            <div className="w1200">
                <div className="footTop">
                    <div className="item">
                        <div className="title">关于我们</div>
                        <div className="desp">武汉福禄网络科技有限公司（以下简称：福禄控股）是中国数字商品及服务提供商，目前公司已在港交所上市（股票代码：2101.HK）；</div>
                        <div className="desp">【福禄聚采商城】是福禄控股旗下-数字权益商品企业购平台，集合全场景优质品牌资源，为企业提供员工福利、商品供货、数字营销、积分商城搭建等综合权益解决方案。</div>
                    </div>
                    <div className="item">
                        <div className="title">客户服务</div>
                        <ul className="desp inLink">
                            <li>在线询价：
                              <span className="alink" onClick={()=>{toPage('xunjia')}}>前往询价&gt;</span>
                              </li>
                            <li>电话：13212797551</li>
                            <li>座机：400-001-2806</li>
                            <li>合作邮箱：lijin@fulu.com</li>
                            <li>地址：武汉市光谷金融港B2栋</li>
                        </ul>
                    </div>
                    <div className="item">
                        <div className="title">客服微信</div>
                        <div className="wxplat">
                            <Image src="https://jucaisecond.fulu.com/images/wechat-1.png" width={130} height={130}/>
                            <p className="txt">聚采商城-数字企采平台</p>
                            <p className="txt">为您提供1V1专属服务</p>
                        </div>
                    </div>

                </div>

                <div className="footBot">
                    <div className="copyright">
                        <p>友链：福禄网络集团官网</p>

                        <p>Copyright© 2009-2022 武汉福禄网络科技有限公司 ALL RIGHTS RESERVED   ·  ICP备案号：鄂ICP备10020006号  ·  鄂网文【2019】2201-114号</p>    
                        
                        <p>鄂公网安备 42018502000236号  ·  电信增值许可证：鄂B2-20130116   ·  营业执照</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="fix-nav">
            <div className="tips">
                <div className="tipsPopover"><span>因支付管控，4月10日后将不再支持支付宝及微信支付，带来不便敬请谅解！</span>
                <span className="closeBtn">
                <span role="img" aria-label="close-circle" className="anticon anticon-close-circle">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                    </span></span>
                </div>
            </div>

            <div className="item online" onClick={()=>toPage('onlinekefu')}>
                <div className="bg"></div>
                <span>在线客服</span>
            </div>

            <div className="item enquiry" onClick={()=>toPage('xunjia')}>
                <div className="bg"></div>
                <span>在线询价</span>
            </div>
               
            <div className="item tel">
                <div className="bg"></div>
                <span>电话咨询</span>
                <div className="tel-box">
                    <div className="fl">
                        <span>客服热线: </span>
                        <div className="txt">
                            <p>13212797551</p>
                            <p>400-001-2806</p>
                        </div>
                    </div>
                    <div className="fr">
                        <span className="ant-tooltip-arrow">
                            <span className="ant-tooltip-arrow-content"></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="item wechat" id="wechat">
                <div className="bg"></div>
                <span>添加微信</span>
                <div className="wechat-box">
                    <div className="wechat-box-title">
                        <p>聚采商城</p>
                        <p>为你提供VIP服务</p>
                    </div>
                    <div className="wechat-code">
                        <Image src="https://fuluapiosstest2018.oss-cn-hangzhou.aliyuncs.com/banner/wechat-20220507.png" width={135} height={135}/>
                        <p>微信扫一扫 享1对1咨询</p>
                    </div>
                    <div className="enquiry-box" onClick={()=>toPage('xunjia')}>
                        <button type="button" className="ant-btn enquiry-btn"><p>去询价</p></button>
                    </div>
                </div>
            </div>
            <div className="item back" onClick={()=>{toPage('top')}}>
                <div className="bg"></div>
                <span>返回顶部</span>
            </div>
            </div>

    </footer>
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
    } else if(type === "zixun"){
      window.open('https://www8c1.53kf.com/webCompany.php?arg=10441351&kf_sign=zU2NTMTY1MMzMTI0NTgxOTg4MDkwODcyNDQxMzUx&style=1')
    } else if(type === "form"){
      window.open('http://form.53kf.com/visitor/10441351/43cc53dca112dd41cae06d00ec0febfa')
    } else if(type === "onlinekefu"){
      window.open('https://www8c1.53kf.com/webCompany.php?arg=10441351&kf_sign=zg3OTMTY1McxMTI0NTgxOTg4MDkwODcyNDQxMzUx&style=1')
    } else if(type === "xunjia"){
      window.open('https://form.53kf.com/visitor/10441351/80d4d1f0d8a960c21007fabcc4fb480a')
    }
  }

export default Footer
