import{_ as E,m as I,f as P,r as d,o as r,c as i,b as a,a as e,F as x,j as U,k as f,t as c,bs as b,bi as h,w as g,bv as A,d as T,n as p}from"./index-b22403d0.js";import{F as B,c as w}from"./FrontFooter-6bd33997.js";import{T as C,S as v}from"./swalToast-f80a10dc.js";import{N as j}from"./NavBar-632e2643.js";const{VITE_APP_URL:V,VITE_APP_PATH:S}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},M={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:"couponAll8"}},computed:{...I(w,["getCart","cartNum","loadingItem"])},methods:{...P(w,["getCarts","plusCartQty","minusCartQty","updateCartItem","deleteCartItem","deleteCarts"]),addCouponCode(){if(this.cartNum){const s={code:this.coupon_code};this.$http.post(`${V}api/${S}/coupon`,{data:s}).then(o=>{C.fire({icon:"success",title:"套用優惠券"}),this.getCarts()}).catch(o=>{v.fire({icon:"error",title:o.response.data.message})})}else C.fire({icon:"warning",title:"請先選購產品"})},isPhone(s){return/^(09)[0-9]{8}$/.test(s)?!0:"須為正確的手機號碼 (ex：0912345678)"},createOrder(){const s=this.form;this.$http.post(`${V}api/${S}/order`,{data:s}).then(o=>{C.fire({icon:"success",title:o.data.message}),this.$refs.form.resetForm(),this.form.message="",this.coupon_code="",this.getCarts()}).catch(()=>{this.cartNum===0?v.fire({icon:"error",title:"您尚未選購產品",text:"請您將產品加入購物車後，再次送出訂單，謝謝!"}):v.fire({icon:"error",title:"客戶資訊漏填",text:"請將客戶資訊填寫完整後，再次送出訂單，謝謝!"})})}},components:{NavBar:j,FrontFooter:B},mounted(){this.getCarts()}},q={class:"",style:{"padding-top":"90px","padding-bottom":"4vh"}},D=e("div",{class:"position-relative d-flex align-items-center justify-content-center",style:{"min-height":"180px"}},[e("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)","background-position":"center center",opacity:"1"}})],-1),H={class:"container"},O={class:"row justify-content-center pt-5"},L={class:"col-md-6 bg-all"},Q=e("h2",{class:"text-center Serif-TC my-4"},"購物車列表",-1),R={class:"text-end pt-2 px-3"},z=["src"],G={class:"w-100 p-3 position-relative Sans-TC"},W=["onClick","disabled"],Y=e("i",{class:"fas fa-times"},null,-1),J=[Y],K={class:"mb-0 fw-bold"},X={class:"mb-0 mt-1 neutral-500",style:{"font-size":"14px"}},Z={key:0,class:"text-success"},$={key:1},ee={class:"d-flex justify-content-between align-items-center w-100"},te={class:"input-group w-50 align-items-center"},se={class:"input-group-prepend pe-1"},oe=["disabled","onClick"],ae=e("i",{class:"fas fa-minus"},null,-1),le=[ae],ne=["onUpdate:modelValue","disabled","onChange"],re={class:"input-group-append ps-1"},ie=["disabled","onClick"],de=e("i",{class:"fas fa-plus"},null,-1),ce=[de],me={class:"mb-0 ms-auto"},pe={key:1,class:"px-3 mt-4 Sans-TC"},ue={class:"px-3"},_e={class:"table mt-4 neutral-500 Sans-TC"},fe=e("th",{scope:"row",class:"border-0 px-0 font-weight-normal"},"小計",-1),be={class:"text-end border-0 px-0"},he={key:0},ge=e("th",{scope:"row",class:"border-0 px-0 pt-0 font-weight-normal"},"折扣金額",-1),Ce={class:"text-end accent-color border-0 px-0 pt-0"},ve={class:"input-group mb-3 input-group-sm ms-auto"},ye={class:"input-group-append"},xe={class:"d-flex justify-content-between mt-4 mb-4 Sans-TC"},Te=e("p",{class:"mb-0 h4 fw-bold"},"總計",-1),we={class:"mb-0 h4 fw-bold"},Ve={class:"col-12 col-md-6 bg-sec"},Se=e("h2",{class:"text-center Serif-TC my-4"},"客戶資訊",-1),ke={class:"pb-3"},Ne={class:"mb-3"},Fe=e("label",{for:"email",class:"form-label Serif-TC"},"Email",-1),Ee={class:"mb-3"},Ie=e("label",{for:"name",class:"form-label Serif-TC"},"收件人姓名",-1),Pe={class:"mb-3"},Ue=e("label",{for:"tel",class:"form-label Serif-TC"},"收件人電話",-1),Ae={class:"mb-3"},Be=e("label",{for:"address",class:"form-label Serif-TC"},"收件人地址",-1),je={class:"mb-3"},Me=e("label",{for:"message",class:"form-label Serif-TC"},"留言",-1),qe={class:"row justify-content-between px-0",style:{"padding-top":"4vh"}};function De(s,o,He,Oe,l,m){const k=d("NavBar"),y=d("router-link"),u=d("VField"),_=d("ErrorMessage"),N=d("VForm"),F=d("FrontFooter");return r(),i(x,null,[a(k),e("div",q,[D,e("div",H,[e("div",O,[e("div",L,[Q,e("div",R,[e("button",{style:{"padding-left":"1.5rem"},class:"btn btn-outline-accent Serif-TC",type:"button",onClick:o[0]||(o[0]=(...t)=>s.deleteCarts&&s.deleteCarts(...t))}," 清空購物車 ")]),s.getCart.carts?(r(!0),i(x,{key:0},U(s.getCart.carts,t=>(r(),i("div",{class:"d-flex mt-4 bg-white",key:t.id},[a(y,{to:`/product/${t.product.id}`,class:"text-decoration-none"},{default:g(()=>[e("img",{class:"object-cover",src:t.product.imageUrl,alt:"",style:{width:"120px",height:"120px"}},null,8,z)]),_:2},1032,["to"]),e("div",G,[e("button",{class:"btn text-primary p-0 position-absolute border-0",style:{top:"16px",right:"16px"},onClick:()=>s.deleteCartItem(t),disabled:t.id===s.loadingItem},J,8,W),e("p",K,c(t.product.title),1),e("p",X,[t.product.price!==t.product.origin_price?(r(),i("small",Z,"促銷價：")):(r(),i("small",$,"單價：")),T(c(t.product.price),1)]),e("div",ee,[e("div",te,[e("div",se,[e("button",{class:p(["btn px-0 text-primary border-0",{"disabled text-secondary":t.qty===1}]),disabled:t.id===s.loadingItem,onClick:()=>s.minusCartQty(t)},le,10,oe)]),b(e("input",{type:"number",class:"form-control border-0 text-center my-auto shadow-none bg-white px-0",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":n=>t.qty=n,min:"1",disabled:t.id===s.loadingItem,onChange:()=>s.updateCartItem(t)},null,40,ne),[[h,t.qty,void 0,{number:!0}]]),e("div",re,[e("button",{class:"btn px-0 text-primary border-0",disabled:t.id===s.loadingItem,onClick:()=>s.plusCartQty(t)},ce,8,ie)])]),e("p",me,"NT$ "+c(t.total),1)])])]))),128)):f("",!0),s.cartNum?f("",!0):(r(),i("div",pe," 您目前尚未選購產品 ")),e("div",ue,[e("table",_e,[e("tbody",null,[e("tr",null,[fe,e("td",be,"NT$ "+c(s.getCart.total),1)]),s.getCart.total!==s.getCart.final_total?(r(),i("tr",he,[ge,e("td",Ce,"-"+c(s.getCart.total-s.getCart.final_total),1)])):f("",!0)])]),e("div",ve,[b(e("input",{type:"text",class:"form-control Sans-TC","onUpdate:modelValue":o[1]||(o[1]=t=>l.coupon_code=t),placeholder:"請輸入優惠碼",style:{"border-top-left-radius":"0","border-bottom-left-radius":"0"}},null,512),[[h,l.coupon_code]]),e("div",ye,[e("button",{style:{"padding-left":"1.5rem"},class:"btn btn-custom Serif-TC",type:"button",onClick:o[2]||(o[2]=(...t)=>m.addCouponCode&&m.addCouponCode(...t))}," 套用優惠碼 ")])]),e("div",xe,[Te,e("p",we,"NT$ "+c(s.getCart.final_total),1)])])]),e("div",Ve,[Se,e("div",ke,[a(N,{ref:"form",class:"px-3 m-auto"},{default:g(({errors:t})=>[e("div",Ne,[Fe,a(u,{id:"email",name:"email",type:"email",class:p(["form-control Sans-TC",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":o[3]||(o[3]=n=>l.form.user.email=n)},null,8,["class","modelValue"]),a(_,{name:"email",class:"invalid-feedback"})]),e("div",Ee,[Ie,a(u,{id:"name",name:"姓名",type:"text",class:p(["form-control Sans-TC",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":o[4]||(o[4]=n=>l.form.user.name=n)},null,8,["class","modelValue"]),a(_,{name:"姓名",class:"invalid-feedback"})]),e("div",Pe,[Ue,a(u,{id:"tel",name:"電話",type:"number",class:p(["form-control Sans-TC",{"is-invalid":t.電話}]),placeholder:"請輸入手機號碼",rules:m.isPhone,modelValue:l.form.user.tel,"onUpdate:modelValue":o[5]||(o[5]=n=>l.form.user.tel=n)},null,8,["class","rules","modelValue"]),a(_,{name:"電話",class:"invalid-feedback"})]),e("div",Ae,[Be,a(u,{id:"address",name:"地址",type:"text",class:p(["form-control Sans-TC",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":o[6]||(o[6]=n=>l.form.user.address=n)},null,8,["class","modelValue"]),a(_,{name:"地址",class:"invalid-feedback"})]),e("div",je,[Me,b(e("textarea",{id:"message",class:"form-control Sans-TC",cols:"30",rows:"5","onUpdate:modelValue":o[7]||(o[7]=n=>l.form.message=n)},null,512),[[h,l.form.message]])])]),_:1},512)])])]),e("div",qe,[a(y,{to:"/products",class:"btn btn-outline-n500 Serif-TC letter-spacing col-6 col-md-auto",style:{"padding-left":"2rem"}},{default:g(()=>[T("繼續購物")]),_:1}),e("button",{onClick:o[8]||(o[8]=A((...t)=>m.createOrder&&m.createOrder(...t),["prevent"])),class:"btn btn-custom Serif-TC letter-spacing col-6 col-md-auto"},"送出訂單")])])]),a(F)],64)}const Ge=E(M,[["render",De]]);export{Ge as default};
