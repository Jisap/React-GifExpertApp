(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(2),u=n(10),o=n(8),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})})};j.prototype={setCategories:n.n(o).a.func.isRequired};var d=n(11),l=n(6),p=n.n(l),f=n(9),b=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=mEJajYAkrA8rijbYc4hR6mEUxKHEg9pc"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.id,n=e.title,c=e.url;return console.log(t,n,c),Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:c,alt:n}),Object(a.jsx)("p",{children:n})]})},h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),a}(t),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(a.jsx)(m,Object(d.a)({},e),e.id)}))})]})},O=function(){var e=Object(c.useState)(["OnePunch"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(h,{category:e},e)}))})]})};n(20);i.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.476d583f.chunk.js.map