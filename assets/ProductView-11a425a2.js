import{N as v}from"./NavBar-5d87a3dc.js";import{F as f,c as y}from"./FrontFooter-91979706.js";import{_ as T,a as C,r as d,o as i,b as r,e as a,d as t,F as p,j as h,w as _,t as e,k as S,bs as w,bh as P,f as I,g as u}from"./index-cf66e0ec.js";import"./swalToast-f80a10dc.js";const{VITE_APP_URL:V,VITE_APP_PATH:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},D={data(){return{product:{},tempQty:1,mainImg:""}},methods:{getProduct(){const{id:l}=this.$route.params;this.$http.get(`${V}/api/${k}/product/${l}`).then(o=>{this.product=o.data.product,this.mainImg=o.data.product.imageUrl})},...C(y,["addToCart"]),showImg(l){this.mainImg=l}},components:{NavBar:v,FrontFooter:f},mounted(){this.getProduct()}},N={class:"container mt-md-5",style:{"padding-top":"90px","padding-bottom":"6vh"}},E={class:"row mx-4"},F={class:"col-lg-5"},A={class:"text-center overflow-hidden"},U=["src"],B={class:"row my-4"},j={class:"col-3 text-center overflow-hidden"},L=["src"],R=["src","onClick"],Q={class:"col-lg-7"},H={"aria-label":"breadcrumb"},M={class:"breadcrumb bg-white px-0 mb-0 pb-3 Serif-TC"},O={class:"breadcrumb-item neutral-300"},q={class:"breadcrumb-item neutral-300"},z={class:"breadcrumb-item neutral-300"},G={class:"breadcrumb-item active neutral-500","aria-current":"page"},J={class:"fw-bold h1 mb-3 Serif-TC"},K={class:"d-flex mb-2"},W=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec"},"產地",-1),X={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1"},Y={class:"d-flex mb-2"},Z=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec"},"品種",-1),$={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1"},tt={class:"d-flex mb-2"},st=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec"},"香氣",-1),et={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1"},ot={class:"d-flex mb-2"},ct=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec"},"滋味",-1),lt={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1"},it={class:"d-flex mb-2"},rt=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec"},"茶乾",-1),at={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1"},nt={class:"d-flex mb-2"},dt=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec d-flex align-items-center"},"說明",-1),pt={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 w-75"},_t={class:"mt-3 Sans-TC"},ut={key:0,class:"fs-5 mb-0 text-muted"},mt={class:"fs-3 fw-bold text-primary"},ht={class:"my-3 col-12 col-md-6 qty-pe"},bt=t("p",{class:"fs-5 Serif-TC"},"數量",-1),xt=["value"],gt={class:"row align-items-center p-0"},vt=t("div",{class:"col-6"},[t("button",{class:"btn btn-outline-n500 Serif-TC letter-spacing w-100"},"加入收藏")],-1),ft={class:"col-6"},yt={class:"mt-3 mx-4 row justify-content-between"},Tt=I('<div class="accordion col-12 col-md-5 py-0 px-2"><h2 class="accordion-header"><button class="accordion-button Serif-TC fs-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDelivery" aria-expanded="false" aria-controls="collapseExample"> 送貨方式 </button></h2><div class="collapse" id="collapseDelivery"><div class="card card-body border-0 Sans-TC px-0"><ul><li>新竹物流宅配</li><li>黑貓宅配 (商品含茶點建議選用)</li><li>黑貓宅配_貨到付款 (商品含茶點建議選用)</li><li>7-11 取貨不付款</li><li>7-11 取貨付款</li><li>全家 取貨不付款</li><li>全家 取貨付款</li><li>跨境宅配</li><li>7-11 跨境門市取貨不付款</li><li>郵局航空包裹</li><li>郵局宅配（台灣離島地區）</li></ul></div></div></div>',1),Ct={class:"accordion col-12 col-md-7 py-0 px-2"},St=t("h2",{class:"accordion-header"},[t("button",{class:"accordion-button Serif-TC fs-4",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseDescription","aria-expanded":"true","aria-controls":"collapseDescription"}," 產品描述 ")],-1),wt={class:"collapse show",id:"collapseDescription"},Pt={class:"card card-body border-0 Sans-TC"};function It(l,o,Vt,kt,s,m){const b=d("NavBar"),n=d("router-link"),x=d("FrontFooter");return i(),r(p,null,[a(b),t("div",N,[t("div",E,[t("div",F,[t("div",A,[t("img",{src:s.mainImg,class:"card-img-top rounded-0 object-cover mainImg"},null,8,U)]),t("div",B,[t("div",j,[t("img",{src:s.product.imageUrl,class:"card-img-top rounded-0 object-cover smImg",onClick:o[0]||(o[0]=()=>m.showImg(s.product.imageUrl))},null,8,L)]),(i(!0),r(p,null,h(s.product.imagesUrl,(c,g)=>(i(),r("div",{class:"col-3 text-center overflow-hidden",key:g},[t("img",{src:c,class:"card-img-top rounded-0 object-cover smImg",onClick:()=>m.showImg(c)},null,8,R)]))),128))])]),t("div",Q,[t("nav",H,[t("ol",M,[t("li",O,[a(n,{to:"/products",class:"text-muted"},{default:_(()=>[u("全部產品")]),_:1})]),t("li",q,[a(n,{to:"/tea-intro",class:"text-muted"},{default:_(()=>[u("茶品介紹")]),_:1})]),t("li",z,[a(n,{to:`/category/${s.product.category}`,class:"text-muted"},{default:_(()=>[u(e(s.product.category),1)]),_:1},8,["to"])]),t("li",G,e(s.product.title),1)])]),t("h2",J,e(s.product.title),1),t("div",K,[W,t("p",X,e(s.product.origin_place),1)]),t("div",Y,[Z,t("p",$,e(s.product.variety),1)]),t("div",tt,[st,t("p",et,e(s.product.aroma),1)]),t("div",ot,[ct,t("p",lt,e(s.product.taste),1)]),t("div",it,[rt,t("p",at,e(s.product.tea_dried),1)]),t("div",nt,[dt,t("p",pt,e(s.product.content),1)]),t("div",_t,[s.product.origin_price!==s.product.price?(i(),r("p",ut,[t("del",null,"NT$ "+e(s.product.origin_price),1)])):S("",!0),t("p",mt,"NT$ "+e(s.product.price),1)]),t("div",ht,[bt,w(t("select",{class:"form-select Sans-TC","aria-label":"Default select example","onUpdate:modelValue":o[1]||(o[1]=c=>s.tempQty=c)},[(i(),r(p,null,h(20,c=>t("option",{value:c,key:`${c}45678`},e(c),9,xt)),64))],512),[[P,s.tempQty]])]),t("div",gt,[vt,t("div",ft,[t("button",{class:"btn btn-custom Serif-TC letter-spacing w-100 text-white",onClick:o[2]||(o[2]=()=>l.addToCart(s.product.id))},"加入購物車")])])])]),t("div",yt,[Tt,t("div",Ct,[St,t("div",wt,[t("div",Pt,e(s.product.description),1)])])])]),a(x)],64)}const At=T(D,[["render",It]]);export{At as default};
