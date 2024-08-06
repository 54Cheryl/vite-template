import{m as _,g as F,_ as y,r as g,o as r,c as d,a as s,n as t,b as o,w as i,t as m,h as f,p as C,i as T,F as b,j as z,k as u,d as p}from"./index-243bb871.js";import{n as D}from"./newsStore-b035f697.js";import{c as x,F as I}from"./FrontFooter-3fda9ae9.js";import"./swalToast-ae96fb99.js";const k="/vite-template/assets/logo-37c60227.svg";const J={data(){return{isScrolled:!1,isOpen:!1}},computed:{..._(x,["cartNum"])},mounted(){window.addEventListener("scroll",this.handleScroll),this.getCarts()},methods:{handleScroll(){const a=window.innerHeight*.88;window.pageYOffset>a?this.isScrolled=!0:this.isScrolled=!1},openHb(){this.isOpen!==!0?this.isOpen=!0:this.isOpen=!1},...F(x,["getCarts"])},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}},M=a=>(C("data-v-89f7209d"),a=a(),T(),a),A={class:"container"},j=M(()=>s("a",{class:"navbar-brand pb-0",href:"#"},[s("img",{src:k,alt:"BIECHA-logo"})],-1)),G={class:"collapse navbar-collapse",id:"navbarNav"},U={class:"navbar-nav ms-auto pt-3 Serif-TC endHeight"},N={class:"nav-item px-3 hb"},R={class:"nav-item px-3 hb"},X={class:"nav-item px-3 hb"},L={class:"nav-item px-3 hb"},E={class:"nav-item px-3 hb"},P={class:"d-flex"},H={class:"col-10 endflex"},q={class:"position-relative"},K={key:0,class:"position-absolute topNegative start-50 translate-middle badge rounded-pill bg-danger fs-sm"},Y={class:"col-auto m-auto endNegative"},Z={key:0,class:"badge rounded bg-danger"};function W(a,h,w,S,e,v){const l=g("router-link");return r(),d("nav",{class:t(["navbar navbar-expand-lg fixed-top py-2 desktopPx",{"bg-opacity-20":!e.isScrolled,"bg-white":e.isScrolled||e.isOpen,"navbar-light":e.isScrolled,"navbar-dark":!e.isScrolled}])},[s("div",A,[j,s("button",{type:"button",class:"navbar-toggler btn text-white border-0 rounded-0 position-relative","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:h[0]||(h[0]=(...c)=>v.openHb&&v.openHb(...c))},[s("i",{class:t(["bi bi-list fs-1",{"d-none":e.isOpen,"neutral-900":e.isScrolled}])},null,2),s("i",{class:t(["bi bi-x fs-1",{"neutral-900":e.isOpen,"d-none":!e.isOpen}])},null,2),s("span",{class:t(["position-absolute translate-middle p-1 bg-danger border border-light rounded-circle",{"d-none":!a.cartNum||e.isOpen}]),style:{"z-index":"2",top:"25%",left:"70%"}},null,2)]),s("div",G,[s("ul",U,[s("li",N,[o(l,{to:"/tea-intro",class:t(["nav-link writing-nav",{"nav-textshadow":!e.isScrolled}])},{default:i(()=>[s("span",{class:t(["d-block letter-spacing",{"hb-navColor":e.isOpen}])},"茶品介紹",2),s("span",{class:t(["d-block",{"hb-navColor":e.isOpen}])},"Tea Intro",2)]),_:1},8,["class"])]),s("li",R,[o(l,{to:"/news",class:t(["nav-link writing-nav",{"nav-textshadow":!e.isScrolled}])},{default:i(()=>[s("span",{class:t(["d-block letter-spacing",{"hb-navColor":e.isOpen}])},"別茶消息",2),s("span",{class:t(["d-block",{"hb-navColor":e.isOpen}])},"News",2)]),_:1},8,["class"])]),s("li",X,[o(l,{to:"/about",class:t(["nav-link writing-nav",{"nav-textshadow":!e.isScrolled}])},{default:i(()=>[s("span",{class:t(["d-block letter-spacing",{"hb-navColor":e.isOpen}])},"關於別茶",2),s("span",{class:t(["d-block",{"hb-navColor":e.isOpen}])},"About",2)]),_:1},8,["class"])]),s("li",L,[o(l,{to:"/favorites",class:t(["nav-link writing-nav",{"nav-textshadow":!e.isScrolled}])},{default:i(()=>[s("span",{class:t(["d-block letter-spacing",{"hb-navColor":e.isOpen}])},"收藏列表",2),s("span",{class:t(["d-block",{"hb-navColor":e.isOpen}])},"Favorites",2)]),_:1},8,["class"])]),s("li",E,[o(l,{to:"/cart",class:t(["nav-link",{"nav-textshadow":!e.isScrolled}])},{default:i(()=>[s("div",P,[s("div",H,[s("span",q,[a.cartNum!==0?(r(),d("span",K,m(a.cartNum),1)):f("",!0),s("span",{class:t(["d-block writing-nav letter-spacing",{"hb-navColor":e.isOpen}])}," 購物車 ",2)]),s("span",{class:t(["d-block writing-nav",{"hb-navColor":e.isOpen}])},"Cart",2)]),s("div",Y,[a.cartNum!==0?(r(),d("span",Z,m(a.cartNum),1)):f("",!0)])])]),_:1},8,["class"])])])])])],2)}const V=y(J,[["render",W],["__scopeId","data-v-89f7209d"]]);const Q={components:{HomeNav:V,FrontFooter:I},computed:{..._(D,["news"])}},O=u('<div class="pt-5" style="background-image:url(https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80);background-position:center center;opacity:1;height:100vh;background-size:cover;background-repeat:no-repeat;"><div class="text-center" data-aos="flip-left" data-aos-duration="2000"><div class="p-2 d-inline-block" style="border:4px solid rgb(255, 255, 255, 0.8);margin-top:17vh;box-sizing:border-box;writing-mode:vertical-lr;"><div class="text-white fs-1 Serif-TC bg-opacity-20 pt-5" style="letter-spacing:1rem;border:1px solid rgb(255, 255, 255, 0.8);vertical-align:middle;box-sizing:border-box;"><p class="">坐酌泠泠水，</p><p class="">看煎瑟瑟塵。</p><p class="">無由持一碗，</p><p class="">寄與愛茶人。</p></div></div></div><div class="position-relative text-center" style="top:-3rem;" data-aos="fade-down" data-aos-duration="1400"><p class="bg-white mx-auto" style="width:1px;height:90px;"></p><span class="text-white letter-spacing Serif-TC ps-2">滾動觀看更多</span><i class="bi bi-chevron-down text-white d-block downFrames"></i></div></div><div class="bg-sec tel-use"><div class="container py-5"><div class="row"><div class="col-12 col-md-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-offset="0"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="品牌理念" class="img-fluid"></div><div class="tel-use mt-2"><div class="d-flex my-4 col-md-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0"><div class="col-auto ps-3 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="title-icon-img" class="position-absolute" style="left:-0.1rem;top:-1rem;"><h3 class="letter-spacing Serif-TC mb-0 neutral-900">品牌理念</h3><span class="text-center fs-7 Serif-TC mt-4 neutral-900">Brand Appeal</span></div><div class="col m-auto ps-3"><p class="bg-n500 m-auto" style="height:1px;"></p></div></div><div class="col-12 col-md-auto my-auto p-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0"><div class="bg-opacity-80 px-4"><p class="Sans-TC pt-4 m-0 neutral-700 fs-5 writing-lr">別茶寄與愛茶人</p><p class="Sans-TC py-4 m-0 neutral-500 writing-lr">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p></div></div></div></div></div></div><div class="bg-sec other-use"><div class="container py-5"><div class="row flex-row-reverse justify-content-evenly my-5 position-relative"><div class="col-lg-6 col-md-10 my-auto p-0 position-relative appeal-img" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="品牌理念" class="img-fluid card-img"></div><div class="col-lg-6 col-md-10 p-0 d-flex justify-content-md-start justify-content-lg-center position-relative appeal-top" style="max-height:450px;height:55vh;z-index:2;"><div class="col-md-auto pe-md-4 pe-lg-0 mx-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0"><div class="d-flex position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="title-icon-img" class="position-absolute" style="right:0.5rem;top:-0.2rem;"><h3 class="letter-spacing Serif-TC mt-3 mx-0 writing-lr neutral-900">品牌理念 </h3><span class="text-center fs-7 Serif-TC writing-lr mt-3 neutral-900">Brand Appeal</span></div><p class="bg-n500 m-auto" style="width:1px;height:15vh;"></p></div><div class="col-md-auto bg-opacity-80 writing-lr my-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-offset="0"><p class="letter-spacing Sans-TC neutral-700 fs-5 mt-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="300" data-aos-offset="0">別茶寄與愛茶人</p><p class="lh-lg Sans-TC neutral-500 mb-4 mt-4" style="letter-spacing:0.3rem;" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p></div></div></div></div></div>',3),$={class:"container"},ss={class:"row pb-4 pt-5 px-0 justify-content-evenly"},es=u('<div class="tel-use" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0"><div class="d-flex col-md-2"><div class="col-auto ps-3 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="title-icon-img" class="position-absolute" style="left:-0.1rem;top:-1rem;"><h3 class="letter-spacing Serif-TC mb-0 neutral-900">別茶消息</h3><span class="text-center fs-7 Serif-TC mt-4 neutral-900">News</span></div><div class="col m-auto ps-3"><p class="bg-n500 m-auto" style="height:1px;"></p></div></div></div>',1),ts={class:"row col-md-10 pt-5 m-auto"},as={key:0,class:"position-absolute bg-opacity-100",style:{"writing-mode":"vertical-lr","z-index":"2",left:"2rem",top:"-1rem",border:"1px solid #BB0000"}},os=s("p",{class:"text-white Serif-TC letter-spacing px-1 pt-3 pb-2 m-1",style:{background:"#E52E2E"}}," 新品上架 ",-1),is=[os],ls={class:"card rounded-0 border-0 shadow-custom mb-4 mx-auto",style:{"max-width":"22rem"}},cs=["src"],ns={class:"card-body d-flex flex-column justify-content-between"},rs={class:"mb-3"},ds={class:"card-title Serif-TC neutral-900"},ps={class:"fs-sm neutral-300 Sans-TC"},ms={class:"card-text Serif-TC multiline-ellipsis neutral-500"},gs=u('<div class="col-md-auto px-0 other-use"><div class="d-flex" style="max-height:40vh;"><div class="me-4 pe-lg-5" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0"><div class="d-flex position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="title-icon-img" class="position-absolute" style="right:0.5rem;top:0.3rem;"><h3 class="letter-spacing Serif-TC mt-4 mx-0 writing-lr neutral-900">別茶消息 </h3><span class="text-left fs-7 Serif-TC writing-lr mt-4 pt-4 neutral-900">News</span></div><p class="bg-n500 m-auto" style="width:1px;height:15vh;"></p></div></div></div>',1),us=s("div",{class:"pb-4 mb-4 text-center","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-offset":"0"},[s("a",{href:"/vite-template/#/news",class:"Serif-TC letter-spacing text-center btn btn-outline-custom m-auto",style:{"padding-left":"2rem"}},"消息總覽")],-1),hs={class:"container"},vs={class:"row pb-4 pt-4 px-0"},fs=u('<div class="tel-use" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="400" data-aos-offset="0"><div class="d-flex col-md-2"><div class="col-auto ps-3 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="title-icon-img" class="position-absolute" style="left:-0.1rem;top:-1rem;"><h3 class="letter-spacing Serif-TC mb-0 neutral-900">茶品介紹</h3><span class="text-center fs-7 Serif-TC mt-4 neutral-900">Tea Intro</span></div><div class="col m-auto ps-3"><p class="bg-n500 m-auto" style="height:1px;"></p></div></div></div><div class="col-md-auto other-use px-0" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0"><div class="d-flex" style="max-height:40vh;"><div class="ms-4 ps-lg-5"><div class="d-flex position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="title-icon-img" class="position-absolute" style="right:0.5rem;top:0.3rem;"><h3 class="letter-spacing Serif-TC mt-4 mx-0 writing-lr neutral-900">茶品介紹 </h3><span class="text-left fs-7 Serif-TC writing-lr mt-4 pt-4 neutral-900">Tea Intro</span></div><p class="bg-n500 m-auto" style="width:1px;height:15vh;"></p></div></div></div>',2),bs={class:"row col-md-10 d-flex justify-content-left pt-5 m-auto"},xs={class:"col-12 col-md-6 col-lg-3 d-flex align-items-stretch","data-aos":"fade-up","data-aos-duration":"800"},_s={class:"card rounded-0 border-0 shadow-custom mb-4 mx-auto",style:{"max-width":"20rem"}},ys=s("div",{class:"position-relative"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678654028165.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LC47Shpv7K0%2FUpSJj72%2FsN9PAazDh6lruK68PZAkTxZhw6YJb0rJybX1990%2FsoCdFdh9GcYehIqXyGvMSReYqdEuYtTvnJasnz6ED9E%2FPjquJ8N%2BhLtNsRIcqbdHbr8jvccHdsQTsLMlbtzmzJjf283PvoJWo2ZDHoj0L6wa%2FdkgLZ4SAq5lsqKLivUik%2F8%2B3f5Wq%2FXD0T2K9%2Fe2oi%2Fg4xwqSXat4frAJ%2FiK7mSal7vdm6df9WDT%2BPQyrrtIusdw1l4IOIHjczB0LNHS9mkBmDYNak9PawHpUc8iW49ZmVWc%2BRKKEDheCjp64gc4a4tmM6NTj0sQIRJt7nPfMN0SaA%3D%3D",class:"card-img-top rounded-0 object-cover",alt:"紅茶",style:{height:"220px"}}),s("div",{class:"position-absolute border border-white translate-middle top-50",style:{"z-index":"2",left:"50%","writing-mode":"vertical-lr"}},[s("p",{class:"text-white fs-4 Serif-TC letter-spacing m-0 px-1 pb-2 pt-3"},"紅茶")])],-1),ws={class:"card-body d-flex flex-column"},Ss=s("p",{class:"card-text Serif-TC neutral-500"},"紅茶在六大茶系當中是屬於近全發酵的茶款，其製茶流程從採茶後進行萎凋，後續進行發酵工藝至全發酵狀態。常見的阿薩姆紅茶、錫蘭紅茶、紅玉等皆紅茶系茶款。",-1),Bs={class:"align-self-start mt-auto mx-auto"},Fs={class:"col-12 col-md-6 col-lg-3 d-flex align-items-stretch","data-aos":"fade-up","data-aos-delay":"100","data-aos-duration":"800"},Cs={class:"card rounded-0 border-0 shadow-custom mb-4 mx-auto",style:{"max-width":"20rem"}},Ts=s("div",{class:"position-relative"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678650979468.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fAjYNK5UZjaErisWaxDZ460vHOyR6P6Ul5mOjDKFDM7WM5gH%2B88SlxbrZOxiVmaPdi598CcskFMbNc04%2BVJ8LCylzMlXy8naQjLdiR2yPaWPF3Ib4eZCvv8cw8qD0cItPMmnFKTlVdNPuS6HMV6%2Bp1eB%2BLIxoPLUMvXhJ%2FHSu5qGHk%2FSytgUnGatTlT%2B8ODy4pCqtgL0JkWpbGoj94Tws4CAD3Oi8cRhA5BiuxS%2B3LeBKjPO1OpzvD%2BXZjZuUuQFVKtqEJ7gBRB7veAiUiF6%2BHFJaLThLSsrwkh4csDdG%2FlRj5xMSTtDUgJu6z7KKBvZfg1o19gY79i2iCZT0JUWfQ%3D%3D",class:"card-img-top rounded-0 object-cover",alt:"綠茶",style:{height:"220px"}}),s("div",{class:"position-absolute border border-white translate-middle top-50",style:{"z-index":"2",left:"50%","writing-mode":"vertical-lr"}},[s("p",{class:"text-white fs-4 Serif-TC letter-spacing m-0 px-1 pb-2 pt-3"},"綠茶")])],-1),zs={class:"card-body d-flex flex-column"},Ds=s("p",{class:"card-text Serif-TC neutral-500"},"綠茶在六大茶系當中是屬於不發酵的茶款，其製茶流程採茶後立刻進行殺青破壞酵素。台灣經典的綠茶款如三峽碧螺春、龍井即為綠茶系茶款。",-1),Is={class:"align-self-start mt-auto mx-auto"},ks={class:"col-12 col-md-6 col-lg-3 d-flex align-items-stretch","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"},Js={class:"card rounded-0 border-0 shadow-custom mb-4 mx-auto",style:{"max-width":"20rem"}},Ms=s("div",{class:"position-relative"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678650992588.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NkkQix5293%2B0%2BWvMgu9qRuspvSeMQ0hI43EJp%2BO%2BN7dybDdclMXgI53spyqi7oi2mUDT8USlrYE1rYs2Z%2FC1BIftZDpy8E3BH7RS97fhE9bHnHtJNpRRRhKc7SGcFgL08O7sDNKKPnTJqDbeRBUBq16J03401YPftRkIC4QdALrl%2FWwMh%2BabCfswpfbODGRf7YBMWKq8diyFY2m%2F%2BzlCPSA%2BoeTqwxiCkey3snbEV9AJEPfI7hSB%2Ba8NeBahBuxVCLWBUkccfJxINCBcVfGM%2FaZVn5M8j1qXV1ljGu9%2BjmqGmchJ99yfxQLVESyAXvxXUbvk88wKEzStqxWXdex%2BAw%3D%3D",class:"card-img-top rounded-0 object-cover",alt:"青茶",style:{height:"220px"}}),s("div",{class:"position-absolute border border-white translate-middle top-50",style:{"z-index":"2",left:"50%","writing-mode":"vertical-lr"}},[s("p",{class:"text-white fs-4 Serif-TC letter-spacing m-0 px-1 pb-2 pt-3"},"青茶")])],-1),As={class:"card-body d-flex flex-column"},js=s("p",{class:"card-text Serif-TC neutral-500"},"青茶又被廣稱作烏龍茶，青茶在六大茶系當中是屬於部分發酵的茶款，發酵程度是介於綠茶與紅茶之間。台灣常見如：凍頂烏龍、阿里山烏龍、梨山烏龍等皆青茶系茶款。",-1),Gs={class:"align-self-start mt-auto mx-auto"},Us={class:"col-12 col-md-6 col-lg-3 d-flex align-items-stretch","data-aos":"fade-up","data-aos-delay":"300","data-aos-duration":"800"},Ns={class:"card rounded-0 border-0 shadow-custom mb-4 mx-auto",style:{"max-width":"20rem"}},Rs=s("div",{class:"position-relative"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678651005190.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jCRrwj3Drnr6MdBDaIqkPsGUVI45F9bYjMgffYUzQyLVzYb8w0CANrNGMfOurvatlPU6kS6E1QbOJP1WKSIPmpDHtb6qEbUdZLQRk1BG6b7GUhpK8yX3S%2F4Hp0FewVnDwmdDxvVwP3ielBFJMws3WV%2FuQijktcb%2Fu6tTMUdMrZs6hI%2FF5oz6E7gPUUtwZgFfUG2tER9rJfZI9wfsTc3haCS753LrCzeX7ML%2BYT1HJij0oJbita4cCsqzqNFt9Ur%2BF9z%2Fmypc75F3WOwDX6CaYxLJrm1Lz4YCJIRV8TW3XoC6nxEQwxN%2Fpg%2BCqVrhXpBICvInXJpVwa%2FD0cK54Fc72Q%3D%3D",class:"card-img-top rounded-0 object-cover",alt:"黑茶",style:{height:"220px"}}),s("div",{class:"position-absolute border border-white translate-middle top-50",style:{"z-index":"2",left:"50%","writing-mode":"vertical-lr"}},[s("p",{class:"text-white fs-4 Serif-TC letter-spacing m-0 px-1 pb-2 pt-3"},"黑茶")])],-1),Xs={class:"card-body d-flex flex-column"},Ls=s("p",{class:"card-text Serif-TC neutral-500"},"黑茶在六大茶系中，屬於100%發酵的茶款，在茶葉進行加工後堆積發酵的時間較長，讓茶葉呈現為暗褐色的樣態。常見茶款如：普洱茶。",-1),Es={class:"align-self-start mt-auto mx-auto"},Ps=s("div",{class:"pb-5 mb-5 text-center","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-offset":"0"},[s("a",{href:"/vite-template/#/products",class:"Serif-TC letter-spacing text-center btn btn-outline-custom m-auto",style:{"padding-left":"2rem"}},"產品總覽")],-1);function Hs(a,h,w,S,e,v){const l=g("HomeNav"),c=g("router-link"),B=g("FrontFooter");return r(),d(b,null,[o(l),O,s("div",$,[s("div",ss,[es,s("div",ts,[(r(!0),d(b,null,z(a.news,n=>(r(),d("div",{class:"col-12 col-md-6 col-lg-4 position-relative d-flex align-items-stretch",key:n.news_id,"data-aos":"fade-up","data-aos-duration":"1000"},[n.new_arrivals?(r(),d("div",as,is)):f("",!0),s("div",ls,[s("img",{src:n.news_img,class:"card-img-top rounded-0 object-cover",alt:"別茶消息",style:{height:"200px"}},null,8,cs),s("div",ns,[s("div",rs,[s("h5",ds,m(n.news_title),1),s("p",ps,m(n.news_date),1),s("p",ms,m(n.news_content),1)]),s("div",null,[o(c,{to:`/news/${n.news_id}`,class:"link-primary text-decoration-none Serif-TC stretched-link"},{default:i(()=>[p("瞭解更多")]),_:2},1032,["to"])])])])]))),128))]),gs]),us]),s("div",hs,[s("div",vs,[fs,s("div",bs,[s("div",xs,[s("div",_s,[ys,s("div",ws,[Ss,s("div",Bs,[o(c,{to:"/category/紅茶",class:"link-primary text-decoration-none Serif-TC stretched-link"},{default:i(()=>[p("前往選購")]),_:1})])])])]),s("div",Fs,[s("div",Cs,[Ts,s("div",zs,[Ds,s("div",Is,[o(c,{to:"/category/綠茶",class:"link-primary text-decoration-none Serif-TC stretched-link"},{default:i(()=>[p("前往選購")]),_:1})])])])]),s("div",ks,[s("div",Js,[Ms,s("div",As,[js,s("div",Gs,[o(c,{to:"/category/青茶",class:"link-primary text-decoration-none Serif-TC stretched-link"},{default:i(()=>[p("前往選購")]),_:1})])])])]),s("div",Us,[s("div",Ns,[Rs,s("div",Xs,[Ls,s("div",Es,[o(c,{to:"/category/黑茶",class:"link-primary text-decoration-none Serif-TC stretched-link"},{default:i(()=>[p("前往選購")]),_:1})])])])])])]),Ps]),o(B)],64)}const Ws=y(Q,[["render",Hs]]);export{Ws as default};