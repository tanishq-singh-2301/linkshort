(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){},23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(16),o=n.n(s),i=(n(23),n(9)),a=(n(24),n(1));var d=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{id:"header",children:Object(a.jsx)("nav",{children:Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("div",{class:"text-center",children:Object(a.jsx)("i",{class:"nav-brand text-dark",children:"LinkShort"})})})})})})};n(14);var l=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{class:"container",style:{paddingTop:"30vh"},children:n?Object(a.jsx)("form",{method:"POST",id:"update_user",children:Object(a.jsxs)("div",{class:"new_user",children:[Object(a.jsx)("div",{class:"form-group",children:Object(a.jsx)("input",{type:"text",value:n,id:"copyurl",autoComplete:"off"})}),Object(a.jsx)("div",{class:"form-group",children:Object(a.jsx)("button",{type:"button",onClick:function(){document.querySelector("#copyurl").select(),document.execCommand("copy"),document.querySelector("#copybtn").innerText="Copied"},id:"copybtn",class:"btn text-dark update",children:"Copy URL"})})]})}):Object(a.jsx)("form",{method:"POST",id:"update_user",children:Object(a.jsxs)("div",{class:"new_user",children:[Object(a.jsx)("div",{class:"form-group",children:Object(a.jsx)("input",{type:"text",name:"url",id:"url",autoComplete:"off",placeholder:"https://linkshort.vercel.app"})}),Object(a.jsx)("div",{class:"form-group",children:Object(a.jsx)("button",{type:"button",onClick:function(){var e=document.querySelector("#url");e.value&&fetch("https://linkshort-backend.vercel.app/api/set",{method:"POST",body:JSON.stringify({url:e.value}),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return r("https://linkshort.vercel.app/v/".concat(e))})),e.innerText=""},class:"btn text-dark update",children:"Add"})})]})})})]})};var u=function(e){var t=Object(c.useState)(0),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){fetch("https://linkshort-backend.vercel.app/api/find/".concat(e.match.params.url)).then((function(e){return e.json()})).then((function(e){e?(s(e.url),window.location.replace(e.url)):(document.querySelector("#redirectBtn").innerText="URL does not exits",alert("URL does not exits"))}))}),[]),console.log(r),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{webname:"Home"}),Object(a.jsx)("main",{id:"site-main",children:Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("form",{method:"POST",id:"update_user",children:Object(a.jsx)("div",{class:"new_user",style:{paddingTop:"20vh"},children:Object(a.jsx)("div",{class:"form-group",children:Object(a.jsx)("button",{type:"button",onClick:function(){fetch("https://linkshort-backend.vercel.app/api/find/".concat(e.match.params.url)).then((function(e){return e.json()})).then((function(e){window.location.replace(e.url)}))},id:"redirectBtn",class:"btn text-dark update",children:"Click here if you not get redirect"})})})})})})})]})},j=n(17),h=n(2);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(h.a,{exact:!0,path:"/",component:l}),Object(a.jsx)(h.a,{path:"/v/:url",component:u})]})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a1d723b4.chunk.js.map