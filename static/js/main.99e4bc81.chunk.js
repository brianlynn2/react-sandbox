(this["webpackJsonpreact-sandbox"]=this["webpackJsonpreact-sandbox"]||[]).push([[0],{28:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(20),c=n.n(s),r=(n(28),n(6)),i=n(7),o=n(9),h=n(8),u=n(11),l=n.n(u),b=n(21),d=n(22),j=n(3),m=n(23),p=n.n(m),O=n(0),v="Ready",g=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={name:"",message:""},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleChange=a.handleChange.bind(Object(j.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value,n=e.target.name;this.setState(Object(d.a)({},n,t)),console.log(this.state)}},{key:"handleSubmit",value:function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state,a=n.name,s=n.message,e.next=4,p.a.post("https://yciq2g0499.execute-api.us-east-2.amazonaws.com/mytest/",{key1:"".concat(a,", ").concat(s)});case 4:v="Submitted info",this.render();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{children:"Name:"}),Object(O.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),Object(O.jsx)("label",{children:"Message:"}),Object(O.jsx)("input",{type:"text",name:"message",onChange:this.handleChange,value:this.state.message}),Object(O.jsx)("button",{type:"submit",children:"Send"}),Object(O.jsx)("p",{id:"status",children:v})]})})}}]),n}(a.Component),x=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Leave your message here:"}),Object(O.jsx)(g,{})]})}}]),n}(a.Component),f=x;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(O.jsx)(f,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.99e4bc81.chunk.js.map