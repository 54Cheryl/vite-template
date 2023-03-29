import{P as L,L as V}from"./PaginationView-417c11f0.js";import{m as E,D as S}from"./DelModal-5210110b.js";import{_ as $,o as l,c as n,a as e,t as o,h as y,bu as M,bg as x,F as b,p as v,r as _,b as h,w as U,d as k}from"./index-592f32af.js";import{S as u,T as O}from"./swalToast-9a7242d6.js";const A={props:{order:{}},data(){return{modal:"",tempOrder:{}}},watch:{order(){this.tempOrder=this.order}},mixins:[E],emits:["cancel-order","update-order"]},T={class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},B={class:"modal-dialog modal-xl"},I={class:"modal-content"},N=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),R={class:"modal-body"},q={class:"row"},j={class:"col-4"},F=e("h3",null,"用戶資料",-1),H={class:"table"},z={key:0},G=e("th",null,"姓名",-1),J=e("th",null,"Email",-1),K=e("th",null,"電話",-1),Q=e("th",null,"地址",-1),W={key:0},X=e("th",null,"留言",-1),Y={class:"col-8"},Z=e("h3",null,"訂單細節",-1),ee={class:"table"},te=e("th",null,"訂單編號",-1),se=e("th",null,"下單時間",-1),de=e("th",null,"付款時間",-1),oe={key:0},le={key:1},ne=e("th",null,"付款狀態",-1),re={class:"form-check form-switch"},ie=["for"],ae={key:0,class:"text-success"},ce={key:1,class:"text-danger"},pe=["id"],_e=e("th",null,"總金額",-1),he=e("h3",null,"購買品項",-1),ue={class:"table"},me={class:"text-end"},fe={class:"modal-footer"};function be(d,t,g,c,s,a){return l(),n("div",T,[e("div",B,[e("div",I,[N,e("div",R,[e("div",q,[e("div",j,[F,e("table",H,[s.tempOrder.user?(l(),n("tbody",z,[e("tr",null,[G,e("td",null,o(s.tempOrder.user.name),1)]),e("tr",null,[J,e("td",null,o(s.tempOrder.user.email),1)]),e("tr",null,[K,e("td",null,o(s.tempOrder.user.tel),1)]),e("tr",null,[Q,e("td",null,o(s.tempOrder.user.address),1)]),s.tempOrder.message?(l(),n("tr",W,[X,e("td",null,o(s.tempOrder.message),1)])):y("",!0)])):y("",!0)])]),e("div",Y,[Z,e("table",ee,[e("tbody",null,[e("tr",null,[te,e("td",null,o(s.tempOrder.id),1)]),e("tr",null,[se,e("td",null,o(d.$filters.date(s.tempOrder.create_at)),1)]),e("tr",null,[de,e("td",null,[s.tempOrder.paid_date?(l(),n("span",oe,o(s.tempOrder.paid_date),1)):(l(),n("span",le,"時間不正確"))])]),e("tr",null,[ne,e("td",null,[e("template",re,[e("label",{class:"form-check-label",for:`paidSwitch${s.tempOrder.id}`},[s.tempOrder.is_paid?(l(),n("strong",ae,"已付款")):(l(),n("strong",ce,"未付款"))],8,ie),M(e("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${s.tempOrder.id}`,"onUpdate:modelValue":t[0]||(t[0]=i=>s.tempOrder.is_paid=i)},null,8,pe),[[x,s.tempOrder.is_paid]])])])]),e("tr",null,[_e,e("td",null," $ "+o(d.$filters.currency(s.tempOrder.total)),1)])])]),he,e("table",ue,[e("tbody",null,[(l(!0),n(b,null,v(s.tempOrder.products,i=>(l(),n("tr",{key:i.id},[e("th",null,o(i.product.title),1),e("td",null,o(i.qty)+" / "+o(i.product.unit),1),e("td",me," $ "+o(d.$filters.currency(i.final_total)),1)]))),128))])])])])]),e("div",fe,[e("button",{type:"button",class:"btn btn-outline-n500","data-bs-dismiss":"modal",onClick:t[1]||(t[1]=()=>d.$emit("cancel-order"))},"取消"),e("button",{type:"button",class:"btn btn-custom",style:{"padding-left":"1.5rem"},onClick:t[2]||(t[2]=()=>d.$emit("update-order"))},"確認")])])])],512)}const ge=$(A,[["render",be]]);const{VITE_APP_URL:m,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"cheryl-hexschool",BASE_URL:"/vite-template/",MODE:"production",DEV:!1,PROD:!0},Oe={props:["token"],data(){return{orders:[],pagination:{},tempOrder:{},isLoading:!1,fullPage:!0}},methods:{getOrders(d=1){this.isLoading=!0,this.$http.get(`${m}api/${f}/admin/orders/?page=${d}`).then(t=>{this.isLoading=!1,this.orders=t.data.orders,this.pagination=t.data.pagination}).catch(t=>{u.fire({icon:"error",title:t.response.data.message})})},updatePaid(d){if(d.is_paid){const c=new Date().toLocaleDateString();d.paid_date=c}else d.paid_date="";const t={is_paid:d.is_paid,paid_date:d.paid_date};O.fire({icon:"success",title:"已更新訂單資訊"});const g=`${m}api/${f}/admin/order/${d.id}`;this.$http.put(g,{data:t}).then(c=>{this.getOrders()}).catch(c=>{u.fire({icon:"error",title:c.response.data.message})})},openOrder(d,t){d==="edit"?(this.tempOrder={...t},this.$refs.orderModal.showModal()):d==="delete"&&(this.tempOrder={...t},this.$refs.deleteModal.showModal())},cancelOrder(){this.tempOrder={},this.$refs.OrderModal.hideModal()},updateOrder(){const d=`${m}api/${f}/admin/order/${this.tempOrder.id}`;if(this.tempOrder.is_paid){const t=new Date().toLocaleDateString();this.tempOrder.paid_date=t}else this.tempOrder.paid_date="";this.$http.put(d,{data:this.tempOrder}).then(t=>{this.$refs.orderModal.hideModal(),this.tempOrder={},this.getOrders(),O.fire({icon:"success",title:t.data.message})}).catch(t=>{u.fire({icon:"error",title:t.response.data.message})})},deleteOrder(){const d=`${m}api/${f}/admin/order/${this.tempOrder.id}`;this.$http.delete(d).then(t=>{this.$refs.deleteModal.hideModal(),this.getOrders(),O.fire({icon:"success",title:t.data.message})}).catch(t=>{u.fire({icon:"error",title:t.response.data.message})})}},components:{Pagination:L,DelModal:S,OrderModal:ge,Loading:V},mounted(){this.getOrders()}},ve=e("div",{class:"loadingio-spinner-spin-ekq2gap1645"},[e("div",{class:"ldio-kyayy0fncmo"},[e("div",null,[e("div")]),e("div",null,[e("div")]),e("div",null,[e("div")]),e("div",null,[e("div")]),e("div",null,[e("div")]),e("div",null,[e("div")]),e("div",null,[e("div")]),e("div",null,[e("div")])])],-1),ye={class:"container",style:{"margin-top":"7vh"}},ke={class:"pt-5"},$e={class:"mb-0 px-2 d-flex align-items-center"},Me={class:"table table-hover mt-2"},xe=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",{class:"backend-use"},"購買品項"),e("th",{class:"backend-use"},"應付金額"),e("th",null,"是否付款"),e("th",{class:"text-center"},"編輯")])],-1),Pe={class:"backend-use"},we={class:"list-unstyled"},De={class:"col"},Ce={class:"col"},Le={class:"backend-use"},Ve={class:"form-check form-switch d-flex justify-content-center p-0"},Ee=["id","onUpdate:modelValue","onChange"],Se=["for"],Ue={key:0},Ae={key:1},Te={class:"d-flex justify-content-evenly"},Be=["onClick"],Ie=["onClick"],Ne={class:"row"},Re={class:"col"};function qe(d,t,g,c,s,a){const i=_("Loading"),P=_("Pagination"),w=_("OrderModal"),D=_("DelModal");return l(),n(b,null,[h(i,{active:s.isLoading,"onUpdate:active":t[0]||(t[0]=r=>s.isLoading=r),"can-cancel":!0,"is-full-page":s.fullPage},{default:U(()=>[ve]),_:1},8,["active","is-full-page"]),e("div",ye,[e("div",ke,[e("p",$e,[k("本頁有 "),e("span",null,o(s.orders.length),1),k(" 張訂單")]),e("table",Me,[xe,e("tbody",null,[(l(!0),n(b,null,v(s.orders,r=>(l(),n("tr",{key:r.id},[e("td",null,o(d.$filters.date(r.create_at)),1),e("td",null,o(r.user.email),1),e("td",Pe,[e("ul",we,[(l(!0),n(b,null,v(r.products,(p,C)=>(l(),n("li",{key:C,class:"row mb-1"},[e("span",De,o(p.product.title),1),e("span",Ce," 數量 : "+o(p.qty)+" "+o(p.product.unit),1)]))),128))])]),e("td",Le," $ "+o(r.total),1),e("td",null,[e("div",Ve,[M(e("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${r.id}`,"onUpdate:modelValue":p=>r.is_paid=p,onChange:()=>a.updatePaid(r)},null,40,Ee),[[x,r.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${r.id}`},[r.is_paid?(l(),n("span",Ue,"已付款")):(l(),n("span",Ae,"未付款"))],8,Se)])]),e("td",null,[e("div",Te,[e("button",{type:"button",class:"btn btn-outline-main btn-sm",onClick:()=>a.openOrder("edit",r)},"檢視",8,Be),e("button",{type:"button",class:"btn btn-outline-accent btn-sm",onClick:()=>a.openOrder("delete",r),style:{padding:"0.25rem 0.5rem"}},"刪除",8,Ie)])])]))),128))])]),e("div",Ne,[e("div",Re,[h(P,{pages:s.pagination,onChangePage:a.getOrders},null,8,["pages","onChangePage"])]),h(w,{order:s.tempOrder,ref:"orderModal",onUpdateOrder:a.updateOrder,onCancelOrder:a.cancelOrder},null,8,["order","onUpdateOrder","onCancelOrder"]),h(D,{"temp-data":s.tempOrder,ref:"deleteModal",onDelData:a.deleteOrder},null,8,["temp-data","onDelData"])])])])],64)}const Ge=$(Oe,[["render",qe]]);export{Ge as default};