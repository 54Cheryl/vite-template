import{S as _,T as x}from"./swalToast-f80a10dc.js";import{N as g}from"./NavBar-fb0186b1.js";import{F as S}from"./FrontFooter-2c8fd773.js";import{_ as C,r as h,o as c,c as n,b as p,a as s,F as m,k as w,t as o,bt as P,bi as k,d as f,h as N}from"./index-8fc65777.js";const{VITE_APP_URL:u,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},V={data(){return{order:{},orderId:"",user:{},payProducts:[],originTotal:0,payMethod:"請選擇付款方式",payStatus:!1}},computed:{},methods:{getOrder(){const{orderId:r}=this.$route.params;this.$http.get(`${u}api/${b}/order/${r}`).then(e=>{var l,t;this.order=e.data.order,this.orderId=e.data.order.id,this.user=e.data.order.user;const d=e.data.order.products;if(this.payProducts=Object.keys(d).map(function(a){return d[a]}),((t=(l=this.payProducts[0])==null?void 0:l.coupon)==null?void 0:t.percent)!==void 0){const a=this.payProducts[0].coupon.percent;this.originTotal=parseInt(this.order.total/a*100)}}).catch(e=>{_.fire({icon:"error",title:e.response.data.message})})},payConfirm(){this.order.is_paid?_.fire({icon:"warning",title:"您已付款完成"}):this.$http.post(`${u}api/${b}/pay/${this.orderId}`).then(r=>{x.fire({icon:"success",title:r.data.message}),this.payStatus=!0,this.getOrder()}).catch(r=>{_.fire({icon:"error",title:r.response.data.message})})}},components:{NavBar:g,FrontFooter:S},mounted(){this.getOrder()}},E={class:"",style:{"padding-top":"90px","padding-bottom":"6vh"}},I=s("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"180px"}},[s("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)","background-position":"center center",opacity:"1"}})],-1),A={class:"container"},M=s("div",{class:"row justify-content-between px-4 pt-5 mx-lg-5"},[s("h1",{class:"text-center Serif-TC letter-spacing m-0"},[s("i",{class:"bi bi-check2-circle text-success"}),f(" 訂單已成立")])],-1),B={class:"row justify-content-center pt-5 px-4 mx-lg-5"},F={class:"col-md-6 bg-all"},j=s("h2",{class:"text-center Serif-TC my-4"},"訂單明細",-1),D={class:"pe-2",style:{"max-height":"60vh","overflow-x":"hidden"}},L=["src"],O={class:"w-100 p-3 position-relative Sans-TC"},H={class:"mb-0 fw-bold"},U={class:"mb-0 mt-1 neutral-500",style:{"font-size":"14px"}},R=s("small",null,"售價：",-1),q={class:"d-flex justify-content-between mt-1"},G={class:"mb-0"},$={class:"mb-0"},z={class:"px-3"},W={class:"table mt-4 neutral-500 Sans-TC"},Y=s("th",{scope:"row",class:"border-0 px-0 font-weight-normal"},"小計",-1),J={key:0,class:"text-end border-0 px-0"},K={key:1,class:"text-end border-0 px-0"},Q=s("th",{scope:"row",class:"border-0 px-0 pt-0 font-weight-normal"},"折扣金額",-1),X={key:0,class:"text-end accent-color border-0 px-0 pt-0"},Z={key:1,class:"text-end accent-color border-0 px-0 pt-0"},ss={class:"d-flex justify-content-between mt-4 mb-4 Sans-TC"},ts=s("p",{class:"mb-0 h4 fw-bold"},"總計",-1),os={class:"mb-0 h4 fw-bold"},es={class:"col-12 col-md-6 bg-sec"},is=s("h2",{class:"text-center Serif-TC my-4"},"訂單資訊",-1),cs={class:"pb-3"},ns={class:"px-3 m-auto"},rs={class:"mb-3"},as=s("p",{class:"Serif-TC mb-1"},"訂單日期：",-1),ds={class:"Sans-TC"},ls={class:"mb-3"},_s=s("p",{class:"Serif-TC mb-1"},"訂單編號：",-1),hs={class:"Sans-TC"},ps={class:"mb-3"},ms=s("p",{class:"Serif-TC mb-1"},"付款狀態：",-1),us={class:"row"},bs={class:"col-auto"},fs={key:0,class:"Sans-TC text-success fs-5 m-0"},vs={key:1,class:"Sans-TC accent-color fs-5 m-0"},Ts={class:"col"},ys=N('<option selected disabled>請選擇付款方式</option><option value="貨到付款">貨到付款</option><option value="銀行轉帳/ATM">銀行轉帳/ATM</option><option value="信用卡">信用卡</option><option value="LINE_Pay">LINE Pay</option>',5),xs=[ys],gs={class:"col-auto"},Ss={class:"mb-3"},Cs=s("p",{class:"Serif-TC mb-1"},"訂單金額：",-1),ws={class:"Sans-TC"},Ps={class:"mb-3"},ks=s("p",{class:"Serif-TC mb-1"},"訂單備註：",-1),Ns={class:"Sans-TC"},Vs=s("h2",{class:"text-center Serif-TC my-4"},"客戶資訊",-1),Es={class:"pb-3"},Is={class:"px-3 m-auto"},As={class:"mb-3"},Ms=s("p",{class:"Serif-TC mb-1"},"Email：",-1),Bs={class:"Sans-TC"},Fs={class:"mb-3"},js=s("p",{class:"Serif-TC mb-1"},"收件人姓名：",-1),Ds={class:"Sans-TC"},Ls={class:"mb-3"},Os=s("p",{class:"Serif-TC mb-1"},"收件人電話：",-1),Hs={class:"Sans-TC"},Us={class:"mb-3"},Rs=s("p",{class:"Serif-TC mb-1"},"收件人地址：",-1),qs={class:"Sans-TC"};function Gs(r,e,d,l,t,a){const v=h("NavBar"),T=h("FrontFooter");return c(),n(m,null,[p(v),s("div",E,[I,s("div",A,[M,s("div",B,[s("div",F,[j,s("div",D,[(c(!0),n(m,null,w(t.order.products,(i,y)=>(c(),n("div",{class:"d-flex mt-4 bg-white",key:y},[s("img",{class:"object-cover",src:i.product.imageUrl,alt:"",style:{width:"120px",height:"120px"}},null,8,L),s("div",O,[s("p",H,o(i.product.title),1),s("p",U,[R,f(o(i.product.price)+" /"+o(i.product.unit),1)]),s("div",q,[s("p",G," 數量："+o(i.qty),1),s("p",$,"NT$ "+o(i.total),1)])])]))),128))]),s("div",z,[s("table",W,[s("tbody",null,[s("tr",null,[Y,t.originTotal!==0?(c(),n("td",J,"NT$ "+o(t.originTotal),1)):(c(),n("td",K,"NT$ "+o(t.order.total),1))]),s("tr",null,[Q,t.originTotal===0?(c(),n("td",X,"-0")):(c(),n("td",Z,o(t.order.total-t.originTotal),1))])])]),s("div",ss,[ts,s("p",os,"NT$ "+o(t.order.total),1)])])]),s("div",es,[is,s("div",cs,[s("div",ns,[s("div",rs,[as,s("p",ds,o(r.$filters.date(t.order.create_at)),1)]),s("div",ls,[_s,s("p",hs,o(t.order.id),1)]),s("div",ps,[ms,s("div",null,[s("div",us,[s("div",bs,[t.order.is_paid?(c(),n("p",fs,"付款完成")):(c(),n("p",vs,"尚未付款"))]),s("form",Ts,[P(s("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":e[0]||(e[0]=i=>t.payMethod=i),style:{"border-radius":"0"}},xs,512),[[k,t.payMethod]])]),s("div",gs,[s("button",{type:"button",class:"btn btn-sm btn-custom Sans-TC",style:{"padding-left":"1.5rem"},onClick:e[1]||(e[1]=(...i)=>a.payConfirm&&a.payConfirm(...i))},"確認付款")])])])]),s("div",Ss,[Cs,s("p",ws,"NT$ "+o(t.order.total),1)]),s("div",Ps,[ks,s("p",Ns,o(t.order.message),1)])])]),Vs,s("div",Es,[s("div",Is,[s("div",As,[Ms,s("p",Bs,o(this.user.email),1)]),s("div",Fs,[js,s("p",Ds,o(this.user.name),1)]),s("div",Ls,[Os,s("p",Hs,o(this.user.tel),1)]),s("div",Us,[Rs,s("p",qs,o(this.user.address),1)])])])])])])]),p(T)],64)}const Js=C(V,[["render",Gs]]);export{Js as default};
