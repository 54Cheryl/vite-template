import{_ as g,m as f,r as n,o,c as a,b as r,a as t,F as c,j as h,k as v,h as x,t as i,w as _,d as b}from"./index-55fdc880.js";import{n as w}from"./newsStore-35aeddd8.js";import{N as y}from"./NavBar-99755290.js";import{F as T}from"./FrontFooter-2cdf8590.js";import"./swalToast-f3e6e5bc.js";function S(){const s=navigator.userAgent||navigator.vendor||window.opera;return console.log(navigator.userAgent),console.log(navigator.platform),/iPad|iPhone|iPod/.test(s)&&!window.MSStream?"mobile"+navigator.maxTouchPoints:navigator.userAgent.match(/(iPad)/)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?"tablet"+navigator.maxTouchPoints:/android/i.test(s)||/mobile/i.test(s)?"mobile"+navigator.maxTouchPoints:"desktop"}const B={data(){return{deviceType:"unknown"}},components:{NavBar:y,FrontFooter:T},computed:{...f(w,["news"])},mounted(){this.deviceType=S()}},F={class:"bg-sec",style:{"padding-top":"90px","padding-bottom":"4vh"}},M=t("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"180px"}},[t("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)","background-position":"center center",opacity:"1"}})],-1),z={class:"container pb-5 pt-4"},P={class:"row py-4 px-0"},k=v('<div class="tel-use" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="100" data-aos-offset="0"><div class="d-flex col-md-2"><div class="col-auto ps-3 position-relative"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D" alt="title-icon-img" class="position-absolute" style="left:-0.1rem;top:-1rem;"><h3 class="letter-spacing Serif-TC mb-0 neutral-900">別茶消息</h3><span class="text-center fs-7 Serif-TC mt-4 neutral-900">News</span></div><div class="col m-auto ps-3"><p class="bg-n500 m-auto" style="height:1px;"></p></div></div></div><div class="col-md-auto other-use px-0"><div class="d-flex" style="max-height:40vh;"><div class="ms-4 ps-5"><div class="d-flex position-relative" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0"><img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D" alt="title-icon-img" class="position-absolute" style="right:0.5rem;top:0.3rem;"><h3 class="letter-spacing Serif-TC mt-4 mx-0 writing-lr neutral-900">別茶消息 </h3><span class="text-left fs-7 Serif-TC writing-lr mt-4 pt-4 neutral-900" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0">News</span></div><p class="bg-n500 m-auto" style="width:1px;height:15vh;" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-offset="0" data-aos-delay="100"></p></div></div></div>',2),A={class:"row col-md-9 d-flex justify-content-left pt-5 m-auto","data-aos":"fade-up","data-aos-duration":"1000"},C={key:0,class:"position-absolute bg-opacity-100",style:{"writing-mode":"vertical-lr","z-index":"2",left:"2rem",top:"-1rem",border:"1px solid #BB0000"}},N=t("p",{class:"text-white Serif-TC letter-spacing px-1 pt-3 pb-2 m-1",style:{background:"#E52E2E"}}," 新品上架 ",-1),D=[N],G={class:"card rounded-0 border-0 shadow-custom mb-4 mx-auto",style:{"max-width":"22rem"}},I=["src"],U={class:"card-body d-flex flex-column justify-content-between"},j={class:"mb-3"},J={class:"card-title Serif-TC neutral-900"},E={class:"neutral-300 Sans-TC",style:{"font-size":"0.8rem"}},V={class:"card-text Serif-TC multiline-ellipsis neutral-500"};function R(s,l,L,X,d,K){const p=n("NavBar"),m=n("router-link"),u=n("FrontFooter");return o(),a(c,null,[r(p),t("div",F,[M,t("div",z,[t("div",P,[k,t("div",A,[(o(!0),a(c,null,h(s.news,e=>(o(),a("div",{class:"col-12 col-md-6 col-lg-4 position-relative d-flex align-items-stretch",key:e.news_id},[e.new_arrivals?(o(),a("div",C,D)):x("",!0),t("div",G,[t("img",{src:e.news_img,class:"card-img-top rounded-0 object-cover",alt:"別茶消息",style:{height:"200px"}},null,8,I),t("div",U,[t("div",j,[t("h5",J,i(e.news_title),1),t("p",E,i(e.news_date)+" "+i(d.deviceType),1),t("p",V,i(e.news_content),1)]),t("div",null,[r(m,{to:`/news/${e.news_id}`,class:"stretched-link link-primary text-decoration-none Serif-TC"},{default:_(()=>[b("瞭解更多")]),_:2},1032,["to"])])])])]))),128))])])])]),r(u)],64)}const Q=g(B,[["render",R]]);export{Q as default};
