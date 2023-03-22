import{P as k,L as P}from"./PaginationView-de47dbe2.js";import{m as D,D as L}from"./DelModal-3b4cb62b.js";import{_ as w,o as l,c as d,a as t,bu as c,bk as u,bg as T,r,b as h,w as V,d as C,t as _,F as g,l as N}from"./index-c6534594.js";import{S as m,T as v}from"./swalToast-81f72c92.js";const U={props:{coupon:{},isNew:{}},data(){return{tempCoupon:{},modal:"",due_date:""}},watch:{coupon(){if(this.tempCoupon=this.coupon,this.tempCoupon.due_date){const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T",1)[0];this.due_date=s}},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[D],emits:["update-coupon"]},A={class:"modal fade",id:"couponModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},E={class:"modal-dialog"},S={class:"modal-content"},B={class:"modal-header bg-dark text-white"},I={class:"modal-title",id:"exampleModalLabel"},R={key:0},O={key:1},F=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),H={class:"modal-body"},j={action:""},q={class:"col"},z=t("label",{class:"form-label mt-2",for:"title"},"優惠券名稱",-1),G={class:"col"},J=t("label",{class:"form-label mt-2",for:"coupon_code"},"優惠代碼",-1),K={class:"col"},Q=t("label",{class:"form-label mt-2",for:"due_date"},"到期日",-1),W={class:"col"},X=t("label",{class:"form-label mt-2",for:"percent"},"折扣百分比",-1),Y={class:"col my-3"},Z=t("label",{class:"form-label ms-2",for:"is_enabled"},"是否啟用",-1),tt={class:"modal-footer"},et=t("button",{type:"button",class:"btn btn-outline-n500","data-bs-dismiss":"modal"},"取消",-1);function ot(s,e,p,y,o,a){return l(),d("div",A,[t("div",E,[t("div",S,[t("div",B,[t("h5",I,[p.isNew?(l(),d("span",R,"新增優惠券")):(l(),d("span",O,"編輯優惠券"))]),F]),t("div",H,[t("form",j,[t("div",q,[z,c(t("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入名稱","onUpdate:modelValue":e[0]||(e[0]=n=>o.tempCoupon.title=n)},null,512),[[u,o.tempCoupon.title]])]),t("div",G,[J,c(t("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入代碼","onUpdate:modelValue":e[1]||(e[1]=n=>o.tempCoupon.code=n)},null,512),[[u,o.tempCoupon.code]])]),t("div",K,[Q,c(t("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=n=>o.due_date=n)},null,512),[[u,o.due_date]])]),t("div",W,[X,c(t("input",{type:"number",min:"0",max:"100",class:"form-control",id:"percent",placeholder:"請輸入折扣百分比","onUpdate:modelValue":e[3]||(e[3]=n=>o.tempCoupon.percent=n)},null,512),[[u,o.tempCoupon.percent,void 0,{number:!0}]])]),t("div",Y,[c(t("input",{type:"checkbox",class:"form-check-input",id:"is_enabled","onUpdate:modelValue":e[4]||(e[4]=n=>o.tempCoupon.is_enabled=n),"true-value":1,"false-value":0},null,512),[[T,o.tempCoupon.is_enabled]]),Z])])]),t("div",tt,[et,t("button",{type:"button",class:"btn btn-custom",style:{"padding-left":"1.5rem"},onClick:e[5]||(e[5]=()=>s.$emit("update-coupon"))},"確認")])])])],512)}const st=w(U,[["render",ot]]),{VITE_APP_URL:f,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},nt={props:["token"],data(){return{coupons:[],pagination:{},isNew:!1,tempCoupon:{},isLoading:!1,fullPage:!0}},methods:{getCoupons(s=1){this.isLoading=!0,this.$http.get(`${f}api/${b}/admin/coupons/?page=${s}`).then(e=>{this.isLoading=!1,this.coupons=e.data.coupons,this.pagination=e.data.pagination}).catch(e=>{m.fire({icon:"error",title:e.response.data.message})})},openCoupon(s,e){s==="new"?(this.isNew=!0,this.tempCoupon={due_date:new Date().getTime()/1e3},this.$refs.couponModal.showModal()):s==="edit"?(this.isNew=!1,this.tempCoupon={...e},this.$refs.couponModal.showModal()):s==="delete"&&(this.tempCoupon={...e},this.$refs.deleteModal.showModal())},updateCoupon(){if(this.tempCoupon.percent>100||this.tempCoupon.percent<0)m.fire({icon:"error",title:"輸入錯誤",text:"折扣百分比只能為0~100"});else{let s=`${f}api/${b}/admin/coupon`,e="post";this.isNew||(s=`${f}api/${b}/admin/coupon/${this.tempCoupon.id}`,e="put"),this.$http[e](s,{data:this.tempCoupon}).then(p=>{v.fire({icon:"success",title:p.data.message}),this.tempCoupon={},this.$refs.couponModal.hideModal(),this.getCoupons()}).catch(p=>{m.fire({icon:"error",title:p.response.data.message})})}},deleteCoupon(){const s=`${f}api/${b}/admin/coupon/${this.tempCoupon.id}`;this.$http.delete(s).then(e=>{v.fire({icon:"success",title:e.data.message}),this.$refs.deleteModal.hideModal(),this.getCoupons()}).catch(e=>{m.fire({icon:"error",title:e.response.data.message})})}},components:{Pagination:k,DelModal:L,Loading:P,CouponModal:st},mounted(){this.getCoupons()}},it=t("div",{class:"loadingio-spinner-spin-ekq2gap1645"},[t("div",{class:"ldio-kyayy0fncmo"},[t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")]),t("div",null,[t("div")])])],-1),lt={class:"container",style:{"margin-top":"7vh"}},dt={class:"pt-5"},at={class:"d-flex justify-content-between"},pt={class:"mb-0 px-2 d-flex align-items-center"},ct={class:"text-end"},ut={class:"table table-hover mt-2"},rt=t("thead",null,[t("tr",null,[t("th",{width:"150"},"優惠券名稱"),t("th",{width:"120"},"折扣百分比"),t("th",{width:"120"},"到期日"),t("th",{width:"120"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),ht={width:"150"},_t={width:"120"},mt={width:"120"},ft={width:"120"},bt={key:0,class:"text-success"},Ct={key:1},gt={width:"120"},vt=["onClick"],wt=["onClick"],yt={class:"row"},Mt={class:"col"};function xt(s,e,p,y,o,a){const n=r("Loading"),M=r("Pagination"),x=r("CouponModal"),$=r("DelModal");return l(),d(g,null,[h(n,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=i=>o.isLoading=i),"can-cancel":!0,"is-full-page":o.fullPage},{default:V(()=>[it]),_:1},8,["active","is-full-page"]),t("div",lt,[t("div",dt,[t("div",at,[t("p",pt,[C("本頁有 "),t("span",null,_(o.coupons.length),1),C(" 項產品")]),t("div",ct,[t("button",{type:"button",class:"btn btn-custom text-light",onClick:e[1]||(e[1]=()=>a.openCoupon("new",s.item)),style:{"padding-left":"1.5rem"}},"新增優惠券")])]),t("table",ut,[rt,t("tbody",null,[(l(!0),d(g,null,N(o.coupons,i=>(l(),d("tr",{key:i.id},[t("td",ht,_(i.title),1),t("td",_t,_(i.percent),1),t("td",mt,_(s.$filters.date(i.due_date)),1),t("td",ft,[i.is_enabled?(l(),d("span",bt,"啟用")):(l(),d("span",Ct,"未啟用"))]),t("td",gt,[t("button",{type:"button",class:"btn btn-outline-main btn-sm me-2 backendBtn",onClick:()=>a.openCoupon("edit",i)},"編輯",8,vt),t("button",{type:"button",class:"btn btn-outline-accent btn-sm",onClick:()=>a.openCoupon("delete",i),style:{padding:"0.25rem 0.5rem"}},"刪除",8,wt)])]))),128))])]),t("div",yt,[t("div",Mt,[h(M,{pages:o.pagination,onChangePage:a.getCoupons},null,8,["pages","onChangePage"])]),h(x,{coupon:o.tempCoupon,isNew:o.isNew,ref:"couponModal",onUpdateCoupon:a.updateCoupon},null,8,["coupon","isNew","onUpdateCoupon"]),h($,{"temp-data":o.tempCoupon,ref:"deleteModal",onDelData:a.deleteCoupon},null,8,["temp-data","onDelData"])])])])],64)}const Lt=w(nt,[["render",xt]]);export{Lt as default};