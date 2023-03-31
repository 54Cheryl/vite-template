import{_ as y,q as C,m as w,g as _,r as d,o as p,c as u,b as o,w as a,a as t,F as m,i as P,d as l,t as r}from"./index-3e315e58.js";import{L as T,P as S}from"./PaginationView-d6d9f6e2.js";import{S as k}from"./swalToast-e65c17dd.js";import{F as L,c as F}from"./FrontFooter-74a177ac.js";import{f as g}from"./favoritesStore-a21df237.js";import{N as B}from"./NavBar-e4eb8e63.js";const{VITE_APP_URL:V,VITE_APP_PATH:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},N={data(){return{products:[],pagination:{},isLoading:!1,fullPage:!0}},components:{RouterLink:C,Loading:T,NavBar:B,FrontFooter:L,Pagination:S},computed:{...w(g,["favoritesList"])},watch:{favoritesList:{handler(){localStorage.setItem("favoritesList",JSON.stringify(this.favoritesList))},deep:!0}},methods:{getProducts(i=1){this.isLoading=!0,this.$http.get(`${V}/api/${A}/products/?page=${i}`).then(s=>{this.isLoading=!1,this.products=s.data.products,this.pagination=s.data.pagination}).catch(s=>{k.fire({icon:"error",title:s.response.data.message,confirmButtonColor:"#ab7e52"})})},..._(F,["addToCart"]),..._(g,["isFavorite","toggleFavorite","removeFavorite"])},mounted(){this.getProducts()}},E=t("div",{class:"loadingio-spinner-spin-ekq2gap1645"},[t("div",{class:"ldio-kyayy0fncmo"},[t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")])])],-1),D={class:"bg-all",style:{"padding-top":"90px","padding-bottom":"6vh"}},I=t("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"180px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)","background-position":"center center",opacity:"1"}})],-1),M={class:"container mt-4"},H={"aria-label":"breadcrumb"},R={class:"breadcrumb bg-all px-0 mb-0 pb-3"},U=t("li",{class:"breadcrumb-item text-primary Serif-TC","aria-current":"page"},"全部產品",-1),j={class:"breadcrumb-item Serif-TC"},$={class:"breadcrumb-item dropdown Serif-TC"},q=t("a",{class:"text-decoration-none neutral-300 dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"}," 茶品類別 ",-1),O={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},G={class:"row"},J={class:"card border-0 rounded-0 position-relative",style:{width:"18rem"}},W={class:"text-danger",style:{cursor:"pointer"}},Y=["onClick"],z=["onClick"],K=["src","alt"],Q={class:"mb-0 neutral-900 Serif-TC text-center pb-2 pt-1"},X={class:"p-1"},Z={class:"d-flex px-2 mb-2"},tt=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"品種",-1),et={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},ot={class:"d-flex px-2 mb-2"},st=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"香氣",-1),at={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},it={class:"d-flex px-2 mb-2"},nt=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"滋味",-1),lt={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},rt={class:"flex-grow-1 d-flex align-items-end"},ct={class:"accent-color Sans-TC mb-0 px-3 pt-1 pb-2 fs-5"},dt=["onClick"];function pt(i,s,ut,_t,c,f){const h=d("Loading"),b=d("NavBar"),n=d("router-link"),v=d("Pagination"),x=d("FrontFooter");return p(),u(m,null,[o(h,{active:c.isLoading,"onUpdate:active":s[0]||(s[0]=e=>c.isLoading=e),"can-cancel":!0,"is-full-page":c.fullPage},{default:a(()=>[E]),_:1},8,["active","is-full-page"]),o(b),t("div",D,[I,t("div",M,[t("nav",H,[t("ol",R,[U,t("li",j,[o(n,{class:"neutral-300 text-decoration-none",to:"/tea-intro"},{default:a(()=>[l("茶品介紹")]),_:1})]),t("li",$,[q,t("ul",O,[t("li",null,[o(n,{to:"/category/紅茶",class:"dropdown-item neutral-300"},{default:a(()=>[l("紅茶")]),_:1})]),t("li",null,[o(n,{to:"/category/綠茶",class:"dropdown-item neutral-300"},{default:a(()=>[l("綠茶")]),_:1})]),t("li",null,[o(n,{to:"/category/青茶",class:"dropdown-item neutral-300"},{default:a(()=>[l("青茶")]),_:1})]),t("li",null,[o(n,{to:"/category/黑茶",class:"dropdown-item neutral-300"},{default:a(()=>[l("黑茶")]),_:1})])])])])]),t("div",G,[(p(!0),u(m,null,P(c.products,e=>(p(),u("div",{class:"col-lg-3 col-md-4 mb-5 d-flex align-items-stretch justify-content-center",key:e.id,"data-aos":"fade-up","data-aos-duration":"400"},[t("div",J,[t("a",W,[i.isFavorite(e)?(p(),u("i",{key:0,onClick:()=>i.toggleFavorite(e),class:"bi bi-heart-fill fs-4 position-absolute",style:{right:"16px",top:"16px"}},null,8,Y)):(p(),u("i",{key:1,onClick:()=>i.toggleFavorite(e),class:"bi bi-heart fs-4 position-absolute",style:{right:"16px",top:"16px"}},null,8,z))]),o(n,{to:`/product/${e.id}`,class:"card-body d-flex flex-column text-decoration-none p-0"},{default:a(()=>[t("img",{src:e.imageUrl,class:"card-img-top object-cover productsImg",alt:e.title},null,8,K),t("h5",Q,r(e.title),1),t("div",X,[t("div",Z,[tt,t("p",et,r(e.variety),1)]),t("div",ot,[st,t("p",at,r(e.aroma),1)]),t("div",it,[nt,t("p",lt,r(e.taste),1)])]),t("div",rt,[t("p",ct,[l("NT$ "+r(e.price),1),t("small",null," /"+r(e.unit),1)])])]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-custom Serif-TC letter-spacing w-100",onClick:()=>i.addToCart(e.id)},"加入購物車",8,dt)])]))),128))]),o(v,{pages:c.pagination,onChangePage:f.getProducts},null,8,["pages","onChangePage"])])]),o(x)],64)}const xt=y(N,[["render",pt]]);export{xt as default};
