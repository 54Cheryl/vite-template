import{_ as y,p as v,g as C,r,o as _,c as u,b as o,a as t,w as a,t as n,F as g,k as P,d as i}from"./index-d9871a00.js";import{L as T,P as w}from"./PaginationView-361d24a4.js";import{N as L}from"./NavBar-cc0de891.js";import{F as S,c as k}from"./FrontFooter-d675c593.js";import"./swalToast-f80a10dc.js";const{VITE_APP_URL:V,VITE_APP_PATH:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},B={data(){return{products:[],pagination:{},isLoading:!1,fullPage:!0,pageCategory:""}},components:{RouterLink:v,Loading:T,NavBar:L,FrontFooter:S,Pagination:w},methods:{getProducts(d=1){this.isLoading=!0;const{category:c}=this.$route.params;this.pageCategory=c,this.$http.get(`${V}/api/${A}/products/?page=${d}&category=${c}`).then(p=>{this.isLoading=!1,this.products=p.data.products,this.pagination=p.data.pagination})},...C(k,["addToCart"])},mounted(){this.getProducts()}},F={class:"bg-all",style:{"padding-top":"90px","padding-bottom":"6vh"}},E=t("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"180px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)","background-position":"center center",opacity:"1"}})],-1),N={class:"container mt-4"},D={"aria-label":"breadcrumb"},I={class:"breadcrumb bg-all px-0 mb-0 pb-3"},M={class:"breadcrumb-item Serif-TC"},H={class:"breadcrumb-item Serif-TC"},R={class:"breadcrumb-item dropdown Serif-TC"},U={class:"text-decoration-none neutral-300 dropdown-toggle",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},$={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},j={class:"row"},G={class:"card border-0 rounded-0 position-relative",style:{width:"18rem"}},O=t("a",{href:"#",class:"text-danger"},null,-1),q=["src"],W={class:"mb-0 neutral-900 Serif-TC text-center pb-2 pt-1"},Y={class:"p-1"},z={class:"d-flex px-2 mb-2"},J=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"品種",-1),K={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},Q={class:"d-flex px-2 mb-2"},X=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"香氣",-1),Z={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},tt={class:"d-flex px-2 mb-2"},et=t("p",{class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 bg-sec col-auto d-flex align-items-center"},"滋味",-1),ot={class:"card-text neutral-500 mb-0 Sans-TC px-3 py-1 col-10"},st={class:"flex-grow-1 d-flex align-items-end"},at={class:"accent-color Sans-TC mb-0 px-3 pt-1 pb-2 fs-5"},nt=["onClick"];function it(d,c,p,lt,l,m){const h=r("Loading"),f=r("NavBar"),s=r("router-link"),b=r("Pagination"),x=r("FrontFooter");return _(),u(g,null,[o(h,{active:l.isLoading,"onUpdate:active":c[0]||(c[0]=e=>l.isLoading=e),"can-cancel":!0,"is-full-page":l.fullPage},null,8,["active","is-full-page"]),o(f),t("div",F,[E,t("div",N,[t("nav",D,[t("ol",I,[t("li",M,[o(s,{class:"neutral-300 text-decoration-none",to:"/products"},{default:a(()=>[i("全部產品")]),_:1})]),t("li",H,[o(s,{class:"neutral-300 text-decoration-none",to:"/tea-intro"},{default:a(()=>[i("茶品介紹")]),_:1})]),t("li",R,[t("a",U,n(l.pageCategory),1),t("ul",$,[t("li",null,[o(s,{to:"/category/紅茶",class:"dropdown-item neutral-500"},{default:a(()=>[i("紅茶")]),_:1})]),t("li",null,[o(s,{to:"/category/綠茶",class:"dropdown-item neutral-500"},{default:a(()=>[i("綠茶")]),_:1})]),t("li",null,[o(s,{to:"/category/青茶",class:"dropdown-item neutral-500"},{default:a(()=>[i("青茶")]),_:1})]),t("li",null,[o(s,{to:"/category/黑茶",class:"dropdown-item neutral-500"},{default:a(()=>[i("黑茶")]),_:1})])])])])]),t("div",j,[(_(!0),u(g,null,P(l.products,e=>(_(),u("div",{class:"col-lg-3 col-md-4 mb-5 d-flex align-items-stretch justify-content-center",key:e.id},[t("div",G,[O,o(s,{to:`/product/${e.id}`,class:"card-body d-flex flex-column text-decoration-none p-0"},{default:a(()=>[t("img",{src:e.imageUrl,class:"card-img-top object-cover productsImg",alt:"Card Image"},null,8,q),t("h5",W,n(e.title),1),t("div",Y,[t("div",z,[J,t("p",K,n(e.variety),1)]),t("div",Q,[X,t("p",Z,n(e.aroma),1)]),t("div",tt,[et,t("p",ot,n(e.taste),1)])]),t("div",st,[t("p",at,[i("NT$ "+n(e.price),1),t("small",null," /"+n(e.unit),1)])])]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-custom Serif-TC letter-spacing w-100",onClick:()=>d.addToCart(e.id)},"加入購物車",8,nt)])]))),128))]),o(b,{pages:l.pagination,onChangePage:m.getProducts},null,8,["pages","onChangePage"])])]),o(x)],64)}const ut=y(B,[["render",it]]);export{ut as default};