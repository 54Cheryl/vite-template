import{_ as d,m as r,r as i,o as p,c as m,b as n,a as s,t as e,F as _}from"./index-6e18c1cd.js";import{n as f}from"./newsStore-fffd52c3.js";import{N as h}from"./NavBar-65a2b86e.js";import{F as u}from"./FrontFooter-14f24043.js";import"./swalToast-11ead2c5.js";const g={data(){return{fullNews:{}}},components:{NavBar:h,FrontFooter:u},computed:{...r(f,["news"])},methods:{getNew(){const o=parseInt(this.$route.params.news_id);this.fullNews=this.news.find(a=>a.news_id===o)}},mounted(){this.getNew()}},v={class:"bg-sec",style:{"padding-top":"90px","padding-bottom":"6vh"}},w=s("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"180px"}},[s("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)","background-position":"center center",opacity:"1"}})],-1),y={class:"bg-sec tel-use"},x={class:"container py-5"},b={class:"row"},F={class:"col-12 col-md-5","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-delay":"100","data-aos-offset":"0"},N=["src","alt"],S={class:"tel-use mt-2"},B={class:"d-flex my-4 col-md-2","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-delay":"400","data-aos-offset":"0"},z={class:"col-auto ps-3 position-relative"},T=s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657190077.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KlWtrqmPixbMSIZMgexLakY33rh8Np7Ltcbo79AMG2%2FWgSprUf9%2BmfPpSRYYkhtMQp%2BJDTZaUPzN%2FhqTuuvU2dT8Yir0eJzJ9RFPV7cYJoJ4tzXlwZUXq%2BeTBA3sMox9pw5jGngU6Y8DM%2BTo8cFK%2BTJFzbUm2GULC%2FpheeRdRX6TVSd5g4O5tlITEJ4o%2BVHerWlptyUPASQufdWdZlZQs3mq3ea%2FbthMUDcJpFyRXllC3EIIod3juzbrVPY2GVlSIo2PX%2FW8Rx6QjqpHR9FnZaKLbQnUvBWEgrDi%2FwMC%2BNM9amzSX9x%2Bjap2h7fHzd6pjdRL79n9YpUjRfUrx9PJUw%3D%3D",alt:"title-icon-img",class:"position-absolute",style:{left:"-0.1rem",top:"-1rem"}},null,-1),M={class:"letter-spacing Serif-TC mb-0 neutral-900"},C={class:"text-center fs-7 Serif-TC mt-4 neutral-900"},G=s("div",{class:"col m-auto ps-3"},[s("p",{class:"bg-n500 m-auto",style:{height:"1px"}})],-1),D={class:"col-12 col-md-auto my-auto p-0","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-delay":"400","data-aos-offset":"0"},I={class:"bg-opacity-80 px-4"},U={class:"Sans-TC pt-4 m-0 neutral-700 fs-5 writing-lr"},j={class:"Sans-TC py-4 m-0 neutral-500 writing-lr"},A={class:"bg-sec other-use"},J={class:"container pt-5"},R={class:"row flex-row-reverse justify-content-evenly my-5 position-relative"},X={class:"col-lg-6 col-md-10 my-auto p-0 position-relative appeal-img","data-aos":"fade-right","data-aos-duration":"1000","data-aos-delay":"100"},E=["src","alt"],K={class:"col-lg-6 col-md-10 p-0 d-flex justify-content-evenly position-relative appeal-top",style:{"max-height":"450px",height:"55vh","z-index":"2"}},L={class:"mx-4 col-md-auto"},Y={class:"d-flex position-relative","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-offset":"0"},q=s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678657173971.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MHd4mGdFGGnSsP3GSFLQgsEvfMKifxctn3GQ1CEIU0aYouK%2FDr3MraqmFSb8Kfgf6kVLn9R%2BIpITyDkjrM%2FcoTtyhCvARZDUOEcG3MSnHESIp%2FtH6Iutscaa1UKCtMLg9XyVtAgqUv08h%2FjYlRiSdbr8mzWrlFuTbPth3J8NJaRa51BlW5WiIGFwgzuDr2DqtbhcAuJyYmm5N642IXaALlXAhvoGBhSX0MB5xp4ITp2fI%2BZE0wxP9ANdTCp%2BbrQz2zStXlNu71VJTLfAGn4eL28yl8qriMAJZKi1mRxsXcTdjKLiK%2BZjKpb9HXaiaKBME0oAi7JzB3oDyJGMB9qC3A%3D%3D",alt:"title-icon-img",class:"position-absolute",style:{right:"0.5rem",top:"-0.2rem"}},null,-1),P={class:"letter-spacing Serif-TC mt-3 mx-0 writing-lr neutral-900"},V={class:"text-center fs-7 Serif-TC writing-lr mt-3 neutral-900","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-offset":"0"},k=s("p",{class:"bg-n500 m-auto",style:{width:"1px",height:"15vh"},"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-offset":"0","data-aos-delay":"100"},null,-1),H={class:"col-md-auto bg-opacity-80 writing-lr my-4","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-delay":"100","data-aos-offset":"0"},W={class:"letter-spacing Sans-TC neutral-700 fs-5 mt-4","data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-delay":"300","data-aos-offset":"0"},Z={class:"lh-lg Sans-TC neutral-500 mb-4 mt-4",style:{"letter-spacing":"0.3rem"},"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-sine","data-aos-delay":"400","data-aos-offset":"0"},Q=s("div",{class:"pt-5 pb-4 text-center"},[s("a",{href:"/vite-template/#/news",class:"Serif-TC letter-spacing text-center btn btn-outline-custom m-auto",style:{"padding-left":"2rem"}},"消息總覽")],-1);function O(o,a,$,ss,t,ts){const l=i("NavBar"),c=i("FrontFooter");return p(),m(_,null,[n(l),s("div",v,[w,s("div",y,[s("div",x,[s("div",b,[s("div",F,[s("img",{src:t.fullNews.news_img,alt:t.fullNews.news_title,class:"object-cover",style:{height:"35vh",width:"100%"}},null,8,N)]),s("div",S,[s("div",B,[s("div",z,[T,s("h3",M,e(t.fullNews.news_title),1),s("span",C,e(t.fullNews.en_title),1)]),G]),s("div",D,[s("div",I,[s("p",U,e(t.fullNews.content_title),1),s("p",j,e(t.fullNews.news_content),1)])])])])])]),s("div",A,[s("div",J,[s("div",R,[s("div",X,[s("img",{src:t.fullNews.news_img,alt:t.fullNews.news_title,class:"object-cover",style:{height:"55vh",width:"45vw"}},null,8,E)]),s("div",K,[s("div",L,[s("div",Y,[q,s("h3",P,e(t.fullNews.news_title),1),s("span",V,e(t.fullNews.en_title),1)]),k]),s("div",H,[s("p",W,e(t.fullNews.content_title),1),s("p",Z,e(t.fullNews.news_content),1)])])]),Q])])]),n(c)],64)}const ls=d(g,[["render",O]]);export{ls as default};
