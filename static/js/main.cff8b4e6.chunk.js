(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(7),i=n.n(o),a=(n(12),n(4)),r=n(6),u=(n(13),n(0));function d(){return Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Tasks ToDo"})})}var l=function(){var t=Object(c.useState)([{text:"First Task",done:!1},{text:"Second Task",done:!1},{text:"Third Task",done:!1}]),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),l=i[0],j=i[1],b=function(t){t.preventDefault(),l&&(p(l),j(""))},p=function(t){var e={text:t,done:!1},c=Object(a.a)(n);c.unshift(e),s(c)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{}),Object(u.jsxs)("div",{className:"main card",children:[Object(u.jsxs)("form",{onSubmit:b,className:"input-group input",children:[Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Add Task",value:l,onChange:function(t){return j(t.target.value)}}),Object(u.jsx)("div",{className:"input-group-append",children:Object(u.jsx)("button",{id:"add",className:"btn btn-outline-success",type:"button",onClick:b,children:"Add"})})]}),Object(u.jsx)("ul",{className:"list-group list-group-flush",children:n.map((function(t,e){return Object(u.jsxs)("li",{className:t.done?"list-group-item strike":"list-group-item",children:[t.text,Object(u.jsx)("button",{id:"delete",className:"btn button",onClick:function(){return function(t){var e=Object(a.a)(n);e.splice(t,1),s(e)}(e)},children:"Delete"}),Object(u.jsx)("button",{id:"done",className:"btn button",onClick:function(){return function(t){var e=Object(a.a)(n);e[t].done=!e[t].done,s(e)}(e)},children:t.done?"Not Done":"Done"})]},e)}))})]})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cff8b4e6.chunk.js.map