"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[9],{9009:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});var r=n(2791),a=n(4420),s=n(3553),c=function(t){return t.filter},i=function(t){return t.contacts.error},u=function(t){return t.contacts.isLoading},l=(0,s.P1)([function(t){return t.contacts.items},c],(function(t,e){if(!e)return t;var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),o=n(5523),d="ContactList_list__csErn",m="ContactList_text__+NWAW",f=n(184),h=function(){var t=(0,a.I0)(),e=(0,a.v9)(l),n=e.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,f.jsxs)("li",{className:d,children:[(0,f.jsxs)("p",{className:m,children:[r,": ",a]}),(0,f.jsx)("button",{type:"button",onClick:function(){return function(e){t((0,o.GK)(e))}(n)},children:"Delete"})]},n)}));return(0,f.jsx)("ul",{children:n})},x=n(9439),_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},v="ContactForm_form__dhl+T",b="ContactForm_form_input__juvV+",j="ContactForm_btn__wll+u",p="ContactForm_label__-cVXI",C=function(){var t=(0,a.I0)(),e=_(),n=_(),s=(0,r.useState)(""),c=(0,x.Z)(s,2),i=c[0],u=c[1],l=(0,r.useState)(""),d=(0,x.Z)(l,2),m=d[0],h=d[1],C=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":u(r);break;case"number":h(r);break;default:return}};return(0,f.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault();var n={name:i,number:m};t((0,o.uK)(n)),u(""),h("")},children:[(0,f.jsxs)("div",{className:b,children:[(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("label",{htmlFor:e,children:"Name"}),(0,f.jsx)("input",{type:"text",name:"name",value:i,onChange:C,id:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("label",{htmlFor:n,children:"Number"}),(0,f.jsx)("input",{type:"tel",name:"number",value:m,onChange:C,id:n,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0})]})]}),(0,f.jsx)("button",{className:j,type:"submit",children:"Add contact"})]})},N=n(7127),F="Filter_label__vEd1E",g=function(){var t=(0,a.v9)(c),e=(0,a.I0)();return(0,f.jsx)("div",{children:(0,f.jsxs)("label",{className:F,children:["Find contacts by name",(0,f.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){e((0,N.T)(t.target.value))},required:!0})]})})},k=n(4393),w={box:"Contacts_box__L7FJb",title:"Contacts_title__-mq9F",subtitle:"Contacts_subtitle__GxPSr"},y=function(){var t=(0,a.I0)(),e=(0,a.v9)(u),n=(0,a.v9)(i);return(0,r.useEffect)((function(){t((0,o.yF)())}),[t]),(0,f.jsxs)("div",{className:w.box,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:w.title,children:"Phonebook"}),(0,f.jsx)(C,{})]}),(0,f.jsxs)("div",{className:w.boxContacts,children:[(0,f.jsx)("h2",{className:w.subtitle,children:"Contacts"}),(0,f.jsx)(g,{}),e&&(0,f.jsx)(k.Z,{}),n&&(0,f.jsx)("p",{children:n}),(0,f.jsx)(h,{})]})]})},A=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(y,{})})}}}]);
//# sourceMappingURL=9.47c99e7e.chunk.js.map