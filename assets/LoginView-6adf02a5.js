import{S as c}from"./swalToast-f9f35499.js";import{_ as u,r as p,o as m,c as _,a as e,bu as a,bk as l,b as h,w as f,e as b,d as w}from"./index-d3c8b9c9.js";const{VITE_APP_URL:v}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},x={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${v}admin/signin`,this.user).then(o=>{const{token:s,expired:n}=o.data;document.cookie=`cherylToken=${s}; expires=${new Date(n)}`,this.$router.push("/admin")}).catch(o=>{c.fire({icon:"error",title:o.response.data.message})})}}},P={class:"container"},g={class:"col-md-6"},y=e("h1",{class:"h3 mb-3 font-weight-normal Serif-TC text-center"},"請先登入",-1),E={class:"mb-2"},T=e("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),V={class:"mb-2"},k=e("label",{for:"inputPassword",class:"sr-only"},"Password",-1),S={class:"text-end mt-4"},A=e("button",{type:"submit",class:"btn btn-lg btn-primary btn-block text-white w-100 rounded-0 Serif-TC mb-2",style:{"padding-left":"1.5rem"}}," 登入 ",-1);function C(o,s,n,D,r,i){const d=p("router-link");return m(),_("div",P,[e("form",{class:"row justify-content-center align-content-center pb-5",onSubmit:s[2]||(s[2]=b((...t)=>i.login&&i.login(...t),["prevent"])),style:{height:"100vh"}},[e("div",g,[y,e("div",E,[T,a(e("input",{type:"email",id:"inputEmail",class:"form-control rounded-0",placeholder:"Email address","onUpdate:modelValue":s[0]||(s[0]=t=>r.user.username=t),required:"",autofocus:""},null,512),[[l,r.user.username]])]),e("div",V,[k,a(e("input",{type:"password",id:"inputPassword",class:"form-control rounded-0","onUpdate:modelValue":s[1]||(s[1]=t=>r.user.password=t),placeholder:"Password",required:""},null,512),[[l,r.user.password]])]),e("div",S,[A,h(d,{to:"/",class:"btn btn-outline-n500 rounded-0 Serif-TC w-100 fs-5"},{default:f(()=>[w("回首頁")]),_:1})])])],32)])}const L=u(x,[["render",C]]);export{L as default};
