"use strict";(self.webpackChunkreact_homework_templa=self.webpackChunkreact_homework_templa||[]).push([[247],{2247:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(6187),r=a(9439),s=a(6351),c=a(2791),l=a(9434),o=a(8547),i="ContactForm_form__dhl+T",u="ContactForm_label__-cVXI",m="ContactForm_full__ZH46S",d="ContactForm_add__2y4N5",h=a(8174),_=a(3329),b=function(){var e=(0,l.v9)(s.K2),t=(0,l.I0)(),a=(0,c.useState)(""),n=(0,r.Z)(a,2),b=n[0],f=n[1],p=(0,c.useState)(""),x=(0,r.Z)(p,2),v=x[0],j=x[1],C=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":f(n);break;case"number":j(n);break;default:return}},N=function(){f(""),j("")};return(0,_.jsxs)("form",{className:i,onSubmit:function(a){a.preventDefault(),function(a,n){null!==e&&void 0!==e&&e.find((function(e){return e.name===a}))?h.Am.error("".concat(a," is already in contacts")):t((0,o.el)({name:a,number:n}))}(b,v),N()},children:[(0,_.jsx)("label",{title:"Name",htmlFor:"name",className:u,children:"Name"}),(0,_.jsx)("input",{className:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:C,value:b,required:!0}),(0,_.jsx)("label",{htmlFor:"number",className:u,children:"Number"}),(0,_.jsx)("input",{className:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:C,value:v,required:!0}),(0,_.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})},f="ContactList_item__EZYHO",p="ContactList_btn__6Piat",x=function(){var e=(0,l.v9)(s.F4),t=(0,l.I0)();(0,c.useEffect)((function(){t((0,o.yF)())}),[t]);var a=function(e){t((0,o.GK)(e.target.dataset.id))};return(0,_.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,_.jsxs)("li",{className:f,children:[(0,_.jsx)("p",{children:"".concat(n,": ").concat(r)}),(0,_.jsx)("button",{className:p,onClick:a,type:"button","data-id":t,children:"Delete"})]},t)}))})},v=a(3002),j="Filter_full__ozpba",C="Filter_label__vEd1E",N=function(){var e=(0,l.v9)(s.zK),t=(0,l.I0)();return(0,_.jsxs)("label",{className:C,children:["Find contacts by name",(0,_.jsx)("input",{className:j,type:"text",name:"filter",value:e,onChange:function(e){t((0,v.CR)(e.target.value))}})]})},F="ContactsPage_box__hZjJ3";function y(){return(0,_.jsx)(n.x,{children:(0,_.jsxs)("div",{className:F,children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(b,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(N,{}),(0,_.jsx)(x,{})]})})}}}]);
//# sourceMappingURL=247.7b4c36a9.chunk.js.map