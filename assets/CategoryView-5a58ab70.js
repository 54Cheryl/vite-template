import{S as C}from"./swalToast-c6d407d2.js";import{_ as w,q as T,m as P,g,r as p,o as u,c as _,b as o,w as s,a as t,t as i,F as m,i as S,d as n}from"./index-1109a932.js";import{L as k,P as L}from"./PaginationView-192c2fc5.js";import{N as F}from"./NavBar-590e3298.js";import{F as B,c as V}from"./FrontFooter-0d1b9f7d.js";import{f}from"./favoritesStore-220e4d69.js";const{VITE_APP_URL:A,VITE_APP_PATH:N}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{products:[],pagination:{},isLoading:!1,fullPage:!0,pageCategory:""}},components:{RouterLink:T,Loading:k,NavBar:F,FrontFooter:B,Pagination:L},computed:{...P(f,["favoritesList"])},watch:{favoritesList:{handler(){localStorage.setItem("favoritesList",JSON.stringify(this.favoritesList))},deep:!0}},methods:{getProducts(l=1){this.isLoading=!0;const{category:c}=this.$route.params;this.pageCategory=c,this.$http.get(`${A}/api/${N}/products/?page=${l}&category=${c}`).then(d=>{this.isLoading=!1,this.products=d.data.products,this.pagination=d.data.pagination}).catch(d=>{C.fire({icon:"error",title:d.response.data.message,confirmButtonColor:"#ab7e52"})})},...g(V,["addToCart"]),...g(f,["isFavorite","toggleFavorite","removeFavorite"])},mounted(){this.getProducts()}},D=t("div",{class:"loadingio-spinner-spin-ekq2gap1645"},[t("div",{class:"ldio-kyayy0fncmo"},[t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")])])],-1),H={class:"bg-all",style:{"padding-top":"90px","padding-bottom":"6vh"}},I=t("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"180px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)","background-position":"center center",opacity:"1"}})],-1),M={class:"container mt-4"},R={"aria-label":"breadcrumb"},U={class:"breadcrumb bg-all px-0 mb-0 pb-3"},$={class:"breadcrumb-item Serif-TC"},j={class:"breadcrumb-item Serif-TC"},q={class:"breadcrumb-item dropdown Serif-TC"},O={class:"text-decoration-none neutral-300 dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},G={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},J={class:"row"},W={class:"card border-0 rounded-0 position-relative",style:{width:"18rem"}},Y={class:"text-danger"},z=["onClick"],K=["onClick"],Q=t("div",{class:"prodHover"},[t("p",{class:"Sans-TC fs-4 text-center px-3 py-2 neutral-300 letter-spacing bg-opacity-80"},"點擊查看")],-1),X=["src","alt"],Z={class:"mb-0 neutral-900 Serif-TC text-center pb-2 pt-1"},tt={class:"p-1"},et={class:"d-flex px-2 mb-2"},ot=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"品種",-1),st={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},at={class:"d-flex px-2 mb-2"},it=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"香氣",-1),nt={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},lt={class:"d-flex px-2 mb-2"},rt=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"滋味",-1),ct={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},dt={class:"flex-grow-1 d-flex align-items-end"},pt={class:"accent-color Sans-TC mb-0 px-3 pt-1 pb-2 fs-5"},ut=["onClick"];function _t(l,c,d,gt,r,h){const v=p("Loading"),b=p("NavBar"),a=p("router-link"),x=p("Pagination"),y=p("FrontFooter");return u(),_(m,null,[o(v,{active:r.isLoading,"onUpdate:active":c[0]||(c[0]=e=>r.isLoading=e),"can-cancel":!0,"is-full-page":r.fullPage},{default:s(()=>[D]),_:1},8,["active","is-full-page"]),o(b),t("div",H,[I,t("div",M,[t("nav",R,[t("ol",U,[t("li",$,[o(a,{class:"neutral-300 text-decoration-none",to:"/products"},{default:s(()=>[n("全部產品")]),_:1})]),t("li",j,[o(a,{class:"neutral-300 text-decoration-none",to:"/tea-intro"},{default:s(()=>[n("茶品介紹")]),_:1})]),t("li",q,[t("a",O,i(r.pageCategory),1),t("ul",G,[t("li",null,[o(a,{to:"/category/紅茶",class:"dropdown-item neutral-500"},{default:s(()=>[n("紅茶")]),_:1})]),t("li",null,[o(a,{to:"/category/綠茶",class:"dropdown-item neutral-500"},{default:s(()=>[n("綠茶")]),_:1})]),t("li",null,[o(a,{to:"/category/青茶",class:"dropdown-item neutral-500"},{default:s(()=>[n("青茶")]),_:1})]),t("li",null,[o(a,{to:"/category/黑茶",class:"dropdown-item neutral-500"},{default:s(()=>[n("黑茶")]),_:1})])])])])]),t("div",J,[(u(!0),_(m,null,S(r.products,e=>(u(),_("div",{class:"col-lg-3 col-md-4 mb-5 d-flex align-items-stretch justify-content-center",key:e.id,"data-aos":"fade-up","data-aos-duration":"400"},[t("div",W,[t("a",Y,[l.isFavorite(e)?(u(),_("i",{key:0,onClick:()=>l.toggleFavorite(e),class:"bi bi-heart-fill fs-4 position-absolute",style:{right:"16px",top:"16px"}},null,8,z)):(u(),_("i",{key:1,onClick:()=>l.toggleFavorite(e),class:"bi bi-heart fs-4 position-absolute",style:{right:"16px",top:"16px"}},null,8,K))]),o(a,{to:`/product/${e.id}`,class:"card-body d-flex flex-column text-decoration-none p-0 position-relative"},{default:s(()=>[Q,t("img",{src:e.imageUrl,class:"card-img-top object-cover productsImg",alt:e.title},null,8,X),t("h5",Z,i(e.title),1),t("div",tt,[t("div",et,[ot,t("p",st,i(e.variety),1)]),t("div",at,[it,t("p",nt,i(e.aroma),1)]),t("div",lt,[rt,t("p",ct,i(e.taste),1)])]),t("div",dt,[t("p",pt,[n("NT$ "+i(e.price),1),t("small",null," /"+i(e.unit),1)])])]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-custom Serif-TC letter-spacing w-100",onClick:()=>l.addToCart(e.id)},"加入購物車",8,ut)])]))),128))]),o(x,{pages:r.pagination,onChangePage:h.getProducts},null,8,["pages","onChangePage"])])]),o(y)],64)}const yt=w(E,[["render",_t]]);export{yt as default};
