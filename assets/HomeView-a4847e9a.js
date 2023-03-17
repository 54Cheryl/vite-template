import{m as B,a as F,_ as h,r as p,o as v,b as u,d as s,n as t,e as a,w as i,t as m,F as S,f as b,g as r}from"./index-cf66e0ec.js";import{c as g,F as w}from"./FrontFooter-91979706.js";import"./swalToast-f80a10dc.js";const T="/vite-template/assets/logo-37c60227.svg",C={data(){return{isScrolled:!1,isOpen:!1}},computed:{...B(g,["cartNum"])},mounted(){window.addEventListener("scroll",this.handleScroll),this.getCarts()},methods:{handleScroll(){const o=window.innerHeight*.88;window.pageYOffset>o?this.isScrolled=!0:this.isScrolled=!1},openHb(){this.isOpen!==!0?this.isOpen=!0:this.isOpen=!1},...F(g,["getCarts"])},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}},_={class:"container"},D=s("a",{class:"navbar-brand pb-0",href:"#"},[s("img",{src:T,alt:""})],-1),z={class:"collapse navbar-collapse",id:"navbarNav"},A={class:"navbar-nav ms-auto pt-3 Serif-TC endHeight"},J={class:"nav-item px-3 hb"},M={class:"nav-item px-3 hb"},I={class:"nav-item px-3 hb"},G={class:"nav-item px-3 hb"},k={class:"d-flex"},j={class:"col-10 endflex"},U={class:"position-relative"},R={class:"position-absolute topNegative start-50 translate-middle badge rounded-pill bg-danger fs-sm"},X={class:"col-auto m-auto endNegative"},N={class:"badge rounded bg-danger"};function E(o,n,x,f,e,d){const l=p("router-link");return v(),u("nav",{class:t(["navbar navbar-expand-lg fixed-top py-2 desktopPx",{"bg-opacity-20":!e.isScrolled,"bg-white":e.isScrolled||e.isOpen,"navbar-light":e.isScrolled,"navbar-dark":!e.isScrolled}])},[s("div",_,[D,s("button",{class:"navbar-toggler btn text-white border-0 rounded-0 position-relative",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:n[0]||(n[0]=(...c)=>d.openHb&&d.openHb(...c))},[s("i",{class:t(["bi bi-list fs-1",{"d-none":e.isOpen}])},null,2),s("i",{class:t(["bi bi-x fs-1",{"neutral-900":e.isOpen,"d-none":!e.isOpen}])},null,2),s("span",{class:t(["position-absolute translate-middle p-1 bg-danger border border-light rounded-circle",{"d-none":!o.cartNum||e.isOpen}]),style:{"z-index":"2",top:"25%",left:"70%"}},null,2)]),s("div",z,[s("ul",A,[s("li",J,[a(l,{to:"/tea-intro",class:"nav-link writing-nav"},{default:i(()=>[s("span",{class:t(["d-block letter-spacing",{"hb-navColor":e.isOpen}])},"茶品介紹",2),s("span",{class:t(["d-block",{"hb-navColor":e.isOpen}])},"Tea Intro",2)]),_:1})]),s("li",M,[a(l,{to:"/news",class:"nav-link writing-nav"},{default:i(()=>[s("span",{class:t(["d-block letter-spacing",{"hb-navColor":e.isOpen}])},"別茶消息",2),s("span",{class:t(["d-block",{"hb-navColor":e.isOpen}])},"News",2)]),_:1})]),s("li",I,[a(l,{to:"/about",class:"nav-link writing-nav"},{default:i(()=>[s("span",{class:t(["d-block letter-spacing",{"hb-navColor":e.isOpen}])},"關於別茶",2),s("span",{class:t(["d-block",{"hb-navColor":e.isOpen}])},"About",2)]),_:1})]),s("li",G,[a(l,{to:"/cart",class:"nav-link"},{default:i(()=>[s("div",k,[s("div",j,[s("span",U,[s("span",R,m(o.cartNum),1),s("span",{class:t(["d-block writing-nav letter-spacing",{"hb-navColor":e.isOpen}])}," 購物車 ",2)]),s("span",{class:t(["d-block writing-nav",{"hb-navColor":e.isOpen}])},"Cart",2)]),s("div",X,[s("span",N,m(o.cartNum),1)])])]),_:1})])])])])],2)}const H=h(C,[["render",E]]);const P={components:{HomeNav:H,FrontFooter:w}},q=b('<div class="pt-5" style="background-image:url(https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80);background-position:center center;opacity:1;height:100vh;"><div class="text-center"><div class="p-2 d-inline-block" style="border:4px solid rgb(255, 255, 255, 0.8);margin-top:20vh;box-sizing:border-box;writing-mode:vertical-lr;"><div class="text-white fs-1 Serif-TC bg-opacity-20 pt-5" style="letter-spacing:1rem;border:1px solid rgb(255, 255, 255, 0.8);vertical-align:middle;box-sizing:border-box;"><p class="">坐酌泠泠水，</p><p class="">看煎瑟瑟塵。</p><p class="">無由持一碗，</p><p class="">寄與愛茶人。</p></div></div></div><div class="position-relative text-center" style="top:-3rem;"><p class="bg-white mx-auto" style="width:1px;height:90px;"></p><span class="text-white letter-spacing Serif-TC ps-2">滾動觀看更多</span><i class="bi bi-chevron-down text-white d-block downFrames"></i></div></div><div class="bg-sec tel-use"><div class="container py-5"><div class="row"><div class="col-12 col-md-5"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="" class="img-fluid"></div><div class="tel-use mt-2"><div class="d-flex my-4 col-md-2"><div class="col-auto ps-3 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="" class="position-absolute" style="left:-0.1rem;top:-1rem;"><h3 class="letter-spacing Serif-TC mb-0 neutral-900">品牌理念</h3><span class="text-center fs-7 Serif-TC mt-4 neutral-900">Brand Appeal</span></div><div class="col m-auto ps-3"><p class="bg-n500 m-auto" style="height:1px;"></p></div></div><div class="col-12 col-md-auto my-auto p-0"><div class="bg-opacity-80 px-4"><p class="Sans-TC pt-4 m-0 neutral-700 fs-5 writing-lr">別茶寄與愛茶人</p><p class="Sans-TC py-4 m-0 neutral-300 writing-lr">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p></div></div></div></div></div></div><div class="bg-sec other-use"><div class="container py-5"><div class="row flex-row-reverse justify-content-evenly my-5 position-relative"><div class="col-lg-6 col-md-10 my-auto p-0 position-relative appeal-img"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678386479583.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=BgjYYRaG8DhhUI78tq8bmjolmvX4CB%2B8bpWCrZXW5x4Xc59Pd%2Ffn%2B%2BOA6MA3Z%2FouJLmBQfbkdRPeTIhsQ01QlRbHmbszQMDxTj08xp35CW3LRg5iYGPXvDANAl4ElEAfZNI98QGmtFJIM3XbXHx86S3AA2DLXJJ%2Bbpjd6%2FMV%2BhJYu7LOX966w2Z5%2BxWpDw5JbbNC95O3pnJoGZVKDcNiS998PgHG1ii7a6swGBi7HhzqQ63ipTWJFy8c8jNK4HT8Kq2duI%2Fcq%2FgIWynloH%2BDsCONAUf5xYkQuRfPtdd%2FApwwqi33ZgvaBIXHlyhRyznTdl5WxVCznkjaVptbsE8eig%3D%3D" alt="" class="img-fluid"></div><div class="col-lg-6 col-md-10 p-0 d-flex justify-content-evenly position-relative appeal-top" style="max-height:450px;height:55vh;z-index:2;"><div class="mx-4 col-md-auto"><div class="d-flex position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="" class="position-absolute" style="right:0.5rem;top:-0.2rem;"><h3 class="letter-spacing Serif-TC mt-3 mx-0 writing-lr neutral-900">品牌理念 </h3><span class="text-center fs-7 Serif-TC writing-lr mt-3 neutral-900">Brand Appeal</span></div><p class="bg-n500 m-auto" style="width:1px;height:15vh;"></p></div><div class="col-md-auto bg-opacity-80 writing-lr my-4"><p class="letter-spacing Sans-TC neutral-700 fs-5 mt-4">別茶寄與愛茶人</p><p class="letter-spacing Sans-TC neutral-300 mb-0 mt-4">品牌名稱取自於《謝李六郎中寄新蜀茶》詩中的尾句「別茶人」，即專業的茶葉品評師。我們像白居易一樣，熱愛茶文化，將最好的茶葉帶給每位愛茶人。別茶二字象徵著我們對茶葉的鑑賞、了解和熱愛。我們期待與您分享這份熱情，為您帶來最美好的品茶體驗。無論您是在家中享用或與好友分享，我們的使命就是為您提供最好的茶葉。讓我們一起品嚐這份美好，享受別具風味的茶葉文化。</p></div></div></div></div></div><div class="container"><div class="row pb-4 pt-5 px-0"><div class="tel-use"><div class="d-flex col-md-2"><div class="col-auto ps-3 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="" class="position-absolute" style="left:-0.1rem;top:-1rem;"><h3 class="letter-spacing Serif-TC mb-0 neutral-900">別茶消息</h3><span class="text-center fs-7 Serif-TC mt-4 neutral-900">News</span></div><div class="col m-auto ps-3"><p class="bg-n500 m-auto" style="height:1px;"></p></div></div></div><div class="row col-md-9 d-flex justify-content-left pt-5 m-auto"><div class="col-12 col-md-6 col-lg-4 position-relative"><div class="position-absolute bg-opacity-100" style="writing-mode:vertical-lr;z-index:2;left:2rem;top:-1rem;border:1px solid #BB0000;"><p class="text-white Serif-TC letter-spacing px-1 pt-3 pb-2 m-1" style="background:#E52E2E;"> 新品上架 </p></div><div class="card mb-4 mx-auto" style="max-width:22rem;"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678648054156.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=PW4bi0hxb9ycCFLT6eQUXJCoqw0GVy8yErDD57OJV9yPRgp1aF3k5BWhAev7w7G9utoG%2FORYFFelcJ8VXfewdq2YzJC5hVq1E17b8m9nhH6HhDbx9TTjZeQ%2Bt7G1N7mzhFHAP64aAetngbLBBuFq4wsHbJF2M2gbpJ8IVeVk%2BmRxSqfmXdpKoGZOHNs7b092TtZG1%2FeM5%2B3aspWJ5SwBfhPAPpks8m1NAdx4o27%2F2c%2F1CfH0CDD0jkkp8ft4uonK%2Bh2nY%2FoEnn4OWMAv2gipkZpwXKNe10p%2Bz9U8fTs%2FyqnozWxEgfOWAHdHjt791JwNexVI8fNVkk%2BiG%2BWHdhpTsA%3D%3D" class="card-img-top rounded-0 object-cover" alt="" style="height:200px;"><div class="card-body"><h5 class="card-title Serif-TC neutral-900">梨山翠峰</h5><p class="fs-sm neutral-300 Sans-TC">2022年11月30日</p><p class="card-text Serif-TC multiline-ellipsis neutral-500">我們很榮幸向您介紹我們最新的茶葉產品 - 梨山翠峰！這款茶葉來自台灣高山茶區，以其清新香氣和淡雅口感而聞名。這種茶葉是由精選的嫩芽和葉製成，具有淡綠色的外觀和優雅的香氣。品嚐梨山翠峰，您會感受到茶葉的清新和柔和，並且留下持久的甘甜口感。無論您是茶葉愛好者還是想要嚐試新口味的人，梨山翠峰都是您不可錯過的茶葉之一。立即瀏覽我們的網站，了解更多關於梨山翠峰的詳細資訊，並在家中享受最好的品質和味道。</p><a href="/vite-template/#/news" class="link-primary text-decoration-none Serif-TC">瞭解更多</a></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="card mb-4 mx-auto" style="max-width:22rem;"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678648579838.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=KzyYtLglR69iKpV6EYcng16Wc5g6eoGZhQy5iGKDwxJjhCh4gM%2FktPIolpxYG9SZAxzcZaqM0xFbjhkEp7HWUvsly%2FKK6rgoF47%2F8azRm%2BP4wInR%2Bu%2FKRvXnOA9HqY6TWrc%2Fyj5XaAHdd%2BQAKkwLc69FNLXJMnKodRa97she7Hwt5pC6CIZM0UQxtIFYFehZc5EWS%2ByadlhMwPVQ5jQqi%2Bx8LkRQqWxOZq4G1Rm%2B8b%2BmAh%2FO9lxHvMw0NdYAsyBYYtgUhYdPsRpdz6Zzh7zUgXswk54dO025B3biZUkMwzE31E9QawxofAPnrWn6zuTjG4hRjFy51cRaDGjom%2FDvcQ%3D%3D" class="card-img-top rounded-0 object-cover" alt="" style="height:200px;"><div class="card-body"><h5 class="card-title Serif-TC neutral-900">2022年最受歡迎的商品</h5><p class="fs-sm neutral-300 Sans-TC">2022年12月12日</p><p class="card-text Serif-TC multiline-ellipsis neutral-500">「品味絕佳，享受舌尖饗宴」。阿里山烏龍茶將帶你走進一場味覺盛宴。我們獨家挑選高山茶園最優質的茶葉，以傳統烘焙技法製成，帶有獨特的花香和果香，入口柔和順滑，回甘悠長。適合搭配各式美食，讓你的餐桌增添無限美味。現在購買，還可享受限時優惠！趕快選購，開啟美味之旅！</p><a href="/vite-template/#/news" class="link-primary text-decoration-none Serif-TC">瞭解更多</a></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="card mb-4 mx-auto" style="max-width:22rem;"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678649830585.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=Df4NIesJG1a2lfCuUQ%2F44I1mx7%2FsQgzo6XvudjtIp132XCJRzwtfW8EW4r7NZiDsQa70apDDYZ9f3GzBS7K75UtCQHMAd0KHh%2Bqrchy4UecstdfBk77vJC0PyNPF2rGjaEYXTPYxT2iN3sBoS2F4oqMvuyAkeaOKyRHZ%2BUZdoQcMdZ%2BX91J%2F7h9O7oxZL3ii%2BM6J8F74aqpgwfR6y4nX%2FU5hh9IVntNG7hbit6iFu%2BL7iKJimpeqWKWV774uZ6NYtSb9nlOvwVIbPyyYLi48JxpkkP5Ae0Af1oyKoliHMvLfnufKr4prBG9NXOrwca7DT4swZbx8%2BqN0lW6jXuiamA%3D%3D" class="card-img-top rounded-0 object-cover" alt="" style="height:200px;"><div class="card-body"><h5 class="card-title Serif-TC neutral-900">癸卯新春禮盒上市</h5><p class="fs-sm neutral-300 Sans-TC">2023年01月16日</p><p class="card-text Serif-TC multiline-ellipsis neutral-500">「祝福新年，品味好茶」。癸卯新春禮盒上市啦！我們精選高山茶、烏龍茶、普洱茶等多種茶葉，以精美包裝送至你手中。每一口，都是對新年美好祝福的傳遞。無論是與摯愛分享，還是獨自品味，都能感受茶香濃郁，韻味無窮。趕快選購，與親朋好友一起開啟幸福新年！</p><a href="/vite-template/#/news" class="link-primary text-decoration-none Serif-TC">瞭解更多</a></div></div></div></div><div class="col-md-auto px-0 other-use"><div class="d-flex" style="max-height:40vh;"><div class="me-4 pe-5"><div class="d-flex position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="" class="position-absolute" style="right:0.5rem;top:0.3rem;"><h3 class="letter-spacing Serif-TC mt-4 mx-0 writing-lr neutral-900">別茶消息 </h3><span class="text-left fs-7 Serif-TC writing-lr mt-4 pt-4 neutral-900">News</span></div><p class="bg-n500 m-auto" style="width:1px;height:15vh;"></p></div></div></div></div><div class="py-4 mb-4 text-center"><a href="/vite-template/#/news" class="Serif-TC letter-spacing text-center btn btn-outline-custom m-auto" style="padding-left:2rem;">更多消息</a></div></div>',4),K={class:"container"},Z={class:"row pb-4 pt-4 px-0"},L=b('<div class="tel-use"><div class="d-flex col-md-2"><div class="col-auto ps-3 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="" class="position-absolute" style="left:-0.1rem;top:-1rem;"><h3 class="letter-spacing Serif-TC mb-0 neutral-900">茶品介紹</h3><span class="text-center fs-7 Serif-TC mt-4 neutral-900">Tea Intro</span></div><div class="col m-auto ps-3"><p class="bg-n500 m-auto" style="height:1px;"></p></div></div></div><div class="col-md-auto other-use px-0"><div class="d-flex" style="max-height:40vh;"><div class="ms-4 ps-5"><div class="d-flex position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="" class="position-absolute" style="right:0.5rem;top:0.3rem;"><h3 class="letter-spacing Serif-TC mt-4 mx-0 writing-lr neutral-900">茶品介紹 </h3><span class="text-left fs-7 Serif-TC writing-lr mt-4 pt-4 neutral-900">Tea Intro</span></div><p class="bg-n500 m-auto" style="width:1px;height:15vh;"></p></div></div></div>',2),Y={class:"row col-md-9 d-flex justify-content-left pt-5 m-auto"},W={class:"col-12 col-md-6 col-lg-3 d-flex align-items-stretch"},V={class:"card mb-4 mx-auto",style:{"max-width":"20rem"}},Q=s("div",{class:"position-relative"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678654028165.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LC47Shpv7K0%2FUpSJj72%2FsN9PAazDh6lruK68PZAkTxZhw6YJb0rJybX1990%2FsoCdFdh9GcYehIqXyGvMSReYqdEuYtTvnJasnz6ED9E%2FPjquJ8N%2BhLtNsRIcqbdHbr8jvccHdsQTsLMlbtzmzJjf283PvoJWo2ZDHoj0L6wa%2FdkgLZ4SAq5lsqKLivUik%2F8%2B3f5Wq%2FXD0T2K9%2Fe2oi%2Fg4xwqSXat4frAJ%2FiK7mSal7vdm6df9WDT%2BPQyrrtIusdw1l4IOIHjczB0LNHS9mkBmDYNak9PawHpUc8iW49ZmVWc%2BRKKEDheCjp64gc4a4tmM6NTj0sQIRJt7nPfMN0SaA%3D%3D",class:"card-img-top rounded-0 object-cover",alt:"",style:{height:"180px"}}),s("div",{class:"position-absolute border border-white translate-middle top-50",style:{"z-index":"2",left:"50%","writing-mode":"vertical-lr"}},[s("p",{class:"text-white fs-4 Serif-TC letter-spacing m-0 px-1 pb-2 pt-3"},"紅茶")])],-1),O={class:"card-body d-flex flex-column"},$=s("p",{class:"card-text Serif-TC neutral-500"},"紅茶在六大茶系當中是屬於近全發酵的茶款，其製茶流程從採茶後進行萎凋，後續進行發酵工藝至全發酵狀態。常見的阿薩姆紅茶、錫蘭紅茶、紅玉等皆紅茶系茶款。",-1),ss={class:"align-self-start mt-auto mx-auto"},es={class:"col-12 col-md-6 col-lg-3 d-flex align-items-stretch"},ts={class:"card mb-4 mx-auto",style:{"max-width":"20rem"}},as=s("div",{class:"position-relative"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678650979468.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fAjYNK5UZjaErisWaxDZ460vHOyR6P6Ul5mOjDKFDM7WM5gH%2B88SlxbrZOxiVmaPdi598CcskFMbNc04%2BVJ8LCylzMlXy8naQjLdiR2yPaWPF3Ib4eZCvv8cw8qD0cItPMmnFKTlVdNPuS6HMV6%2Bp1eB%2BLIxoPLUMvXhJ%2FHSu5qGHk%2FSytgUnGatTlT%2B8ODy4pCqtgL0JkWpbGoj94Tws4CAD3Oi8cRhA5BiuxS%2B3LeBKjPO1OpzvD%2BXZjZuUuQFVKtqEJ7gBRB7veAiUiF6%2BHFJaLThLSsrwkh4csDdG%2FlRj5xMSTtDUgJu6z7KKBvZfg1o19gY79i2iCZT0JUWfQ%3D%3D",class:"card-img-top rounded-0 object-cover",alt:"",style:{height:"180px"}}),s("div",{class:"position-absolute border border-white translate-middle top-50",style:{"z-index":"2",left:"50%","writing-mode":"vertical-lr"}},[s("p",{class:"text-white fs-4 Serif-TC letter-spacing m-0 px-1 pb-2 pt-3"},"綠茶")])],-1),is={class:"card-body d-flex flex-column"},os=s("p",{class:"card-text Serif-TC neutral-500"},"綠茶在六大茶系當中是屬於不發酵的茶款，其製茶流程採茶後立刻進行殺青破壞酵素。台灣經典的綠茶款如三峽碧螺春、龍井即為綠茶系茶款。",-1),ls={class:"align-self-start mt-auto mx-auto"},cs={class:"col-12 col-md-6 col-lg-3 d-flex align-items-stretch"},rs={class:"card mb-4 mx-auto",style:{"max-width":"20rem"}},ps=s("div",{class:"position-relative"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678650992588.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NkkQix5293%2B0%2BWvMgu9qRuspvSeMQ0hI43EJp%2BO%2BN7dybDdclMXgI53spyqi7oi2mUDT8USlrYE1rYs2Z%2FC1BIftZDpy8E3BH7RS97fhE9bHnHtJNpRRRhKc7SGcFgL08O7sDNKKPnTJqDbeRBUBq16J03401YPftRkIC4QdALrl%2FWwMh%2BabCfswpfbODGRf7YBMWKq8diyFY2m%2F%2BzlCPSA%2BoeTqwxiCkey3snbEV9AJEPfI7hSB%2Ba8NeBahBuxVCLWBUkccfJxINCBcVfGM%2FaZVn5M8j1qXV1ljGu9%2BjmqGmchJ99yfxQLVESyAXvxXUbvk88wKEzStqxWXdex%2BAw%3D%3D",class:"card-img-top rounded-0 object-cover",alt:"",style:{height:"180px"}}),s("div",{class:"position-absolute border border-white translate-middle top-50",style:{"z-index":"2",left:"50%","writing-mode":"vertical-lr"}},[s("p",{class:"text-white fs-4 Serif-TC letter-spacing m-0 px-1 pb-2 pt-3"},"青茶")])],-1),ns={class:"card-body d-flex flex-column"},ds=s("p",{class:"card-text Serif-TC neutral-500"},"青茶又被廣稱作烏龍茶，青茶在六大茶系當中是屬於部分發酵的茶款，發酵程度是介於綠茶與紅茶之間。台灣常見如：凍頂烏龍、阿里山烏龍、梨山烏龍等皆青茶系茶款。",-1),ms={class:"align-self-start mt-auto mx-auto"},gs={class:"col-12 col-md-6 col-lg-3 d-flex align-items-stretch"},hs={class:"card mb-4 mx-auto",style:{"max-width":"20rem"}},vs=s("div",{class:"position-relative"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678651005190.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jCRrwj3Drnr6MdBDaIqkPsGUVI45F9bYjMgffYUzQyLVzYb8w0CANrNGMfOurvatlPU6kS6E1QbOJP1WKSIPmpDHtb6qEbUdZLQRk1BG6b7GUhpK8yX3S%2F4Hp0FewVnDwmdDxvVwP3ielBFJMws3WV%2FuQijktcb%2Fu6tTMUdMrZs6hI%2FF5oz6E7gPUUtwZgFfUG2tER9rJfZI9wfsTc3haCS753LrCzeX7ML%2BYT1HJij0oJbita4cCsqzqNFt9Ur%2BF9z%2Fmypc75F3WOwDX6CaYxLJrm1Lz4YCJIRV8TW3XoC6nxEQwxN%2Fpg%2BCqVrhXpBICvInXJpVwa%2FD0cK54Fc72Q%3D%3D",class:"card-img-top rounded-0 object-cover",alt:"",style:{height:"180px"}}),s("div",{class:"position-absolute border border-white translate-middle top-50",style:{"z-index":"2",left:"50%","writing-mode":"vertical-lr"}},[s("p",{class:"text-white fs-4 Serif-TC letter-spacing m-0 px-1 pb-2 pt-3"},"黑茶")])],-1),us={class:"card-body d-flex flex-column"},bs=s("p",{class:"card-text Serif-TC neutral-500"},"黑茶在六大茶系中，屬於100%發酵的茶款，在茶葉進行加工後堆積發酵的時間較長，讓茶葉呈現為暗褐色的樣態。常見茶款如：普洱茶。",-1),xs={class:"align-self-start mt-auto mx-auto"},fs=s("div",{class:"pt-4 pb-5 mb-5 text-center"},[s("a",{href:"/vite-template/#/products",class:"Serif-TC letter-spacing text-center btn btn-outline-custom m-auto",style:{"padding-left":"2rem"}},"產品總覽")],-1);function ys(o,n,x,f,e,d){const l=p("HomeNav"),c=p("router-link"),y=p("FrontFooter");return v(),u(S,null,[a(l),q,s("div",K,[s("div",Z,[L,s("div",Y,[s("div",W,[s("div",V,[Q,s("div",O,[$,s("div",ss,[a(c,{to:"/category/紅茶",class:"link-primary text-decoration-none Serif-TC"},{default:i(()=>[r("前往選購")]),_:1})])])])]),s("div",es,[s("div",ts,[as,s("div",is,[os,s("div",ls,[a(c,{to:"/category/綠茶",class:"link-primary text-decoration-none Serif-TC"},{default:i(()=>[r("前往選購")]),_:1})])])])]),s("div",cs,[s("div",rs,[ps,s("div",ns,[ds,s("div",ms,[a(c,{to:"/category/青茶",class:"link-primary text-decoration-none Serif-TC"},{default:i(()=>[r("前往選購")]),_:1})])])])]),s("div",gs,[s("div",hs,[vs,s("div",us,[bs,s("div",xs,[a(c,{to:"/category/黑茶",class:"link-primary text-decoration-none Serif-TC"},{default:i(()=>[r("前往選購")]),_:1})])])])])])]),fs]),a(y)],64)}const ws=h(P,[["render",ys]]);export{ws as default};
