(this.webpackJsonpemphasoft=this.webpackJsonpemphasoft||[]).push([[0],{82:function(n,e,t){n.exports=t(95)},95:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(74),s=t.n(i),o=t(59),c=t(3),u=t(5),l={breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200}},m=t(7),p=t(49),f=t(17),d=t(81),h=t(58),b=t.n(h),x={username:"",password:""},v=t(64),g=v.a().shape({username:v.b().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:v.b().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e").min(4,"\u0423 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430")});function E(){var n=Object(m.a)(["\n.form {\n    font-family: Arial, Helvetica, sans-serif;\n    max-width: 400px;\n    padding: 24px;\n    margin: 10px auto 0;\n    border: solid 1px #eee;\n    border-radius: 24px;\n}\n\n.input {\n    display: block;\n    width: 100%;\n    box-sizing: border-box;\n    line-height: 1.5em;\n    border-radius: 4px;\n    border: solid 1px #eee;\n    padding: 4px 6px;\n}\n\n.error {\n    color: red;\n    font-weight: 700;\n    font-size: 12px;\n}\n"]);return E=function(){return n},n}var j=u.c.div(E()),O=function(n){var e=n.submitAuth;return r.a.createElement(j,null,r.a.createElement(d.a,{initialValues:x,validationSchema:g,validateOnBlur:!0,onSubmit:function(n){!function(n){fetch("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({username:n.username,password:n.password})}).then((function(n){if(n.status>=200&&n.status<300)return n;var e=new Error(n.statusText);throw e.response=n,e})).then((function(n){return n.json()})).then((function(n){b.a.set("token",n.token),e()}))}(n)}},(function(n){var e=n.values,t=n.errors,a=n.touched,i=n.handleChange,s=n.handleBlur,o=n.isValid,c=n.handleSubmit,u=n.dirty;return r.a.createElement("div",{className:"form"},r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"username"},"\u041b\u043e\u0433\u0438\u043d"),r.a.createElement("input",{className:"input",type:"text",name:"username",onChange:i,onBlur:s,value:e.username})),a.username&&t.username&&r.a.createElement("p",{className:"error"},t.username),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("input",{className:"input",type:"password",name:"password",onChange:i,onBlur:s,value:e.password})),a.password&&t.password&&r.a.createElement("p",{className:"error"},t.password),r.a.createElement("button",{disabled:!o&&!u,onClick:c,type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))})))};function w(){var n=Object(m.a)(["\n                  font-size: 18px;\n                  margin: 7px 0 0 0;  \n                "]);return w=function(){return n},n}function y(){var n=Object(m.a)(["\n                  font-size: 18px;\n                  margin: 7px 0 0 0;  \n                "]);return y=function(){return n},n}function k(){var n=Object(m.a)(["\n                  font-size: 24px;  \n                "]);return k=function(){return n},n}function z(){var n=Object(m.a)(["\n           font-size: 28px;  \n           text-align: left; \n          "]);return z=function(){return n},n}function _(){var n=Object(m.a)(["\nfont-family: Arial, Helvetica, sans-serif;\nlist-style: none;\npadding: 0;\n\n.title {\n    text-align: center;\n  font-weight: 900;\n  font-size: 36px;\n\n  ","\n}\n\n.user-item {\nmargin-top: 60px;\n\n&:first-of-type {\n    margin-top: 0;\n}\n\n    &__title {\n        margin: 0;\n        padding: 0;\n        font-size: 32px;\n        font-weight: 700;\n        overflow-wrap: break-word;\n\n        ","\n    }\n\n    &__id {\n        padding: 0;\n        margin: 15px 0 0 0;\n        font-size: 24px;\n\n        ","\n    }\n\n    &__username {\n        padding: 0;\n        margin: 15px 0 0 0;\n        font-size: 28px;\n        font-style: italic;\n\n        ","\n    }\n}\n"]);return _=function(){return n},n}var N=u.c.ul(_(),Object(f.a)("xs","md")(z()),Object(f.a)("xs","md")(k()),Object(f.a)("xs","md")(y()),Object(f.a)("xs","md")(w())),S=function(n){var e=n.users,t=n.title;return r.a.createElement(N,null,r.a.createElement("h2",{className:"title"},t),e.map((function(n){return r.a.createElement("li",{key:n.id,className:"user-item"},r.a.createElement("h2",{className:"user-item__title"},n.first_name," ",n.last_name),r.a.createElement("p",{className:"user-item__id"},"ID - ",n.id),r.a.createElement("p",{className:"user-item__username"},"\u041b\u043e\u0433\u0438\u043d - ",n.username))})))};function A(){var n=Object(m.a)(["\n            margin-bottom: 10px;  \n          "]);return A=function(){return n},n}function B(){var n=Object(m.a)(["\n  margin-bottom: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 20px;\n  ","\n"]);return B=function(){return n},n}var C=u.c.input(B(),Object(f.a)("xs","md")(A())),H=function(n){return r.a.createElement(C,n)};function T(){var n=Object(m.a)(["\n                padding: 10px 0;\n            "]);return T=function(){return n},n}function J(){var n=Object(m.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 30px;\n    \n    ","\n\n    .success-auth {\n        text-align: center;\n        font-size: 36px;\n    }\n\n    .auth-link {\n        margin: 0;\n        padding: 0;\n        font-size: 18px;\n        text-align: center;\n        a {\n\n            color:#c93030;\n            transition: color 0.2s;\n\n            &:hover {\n                color: red;\n            }\n        }\n        \n}\n"]);return J=function(){return n},n}var q=u.c.div(J(),Object(f.a)("xs","md")(T())),F=function(){var n=Object(a.useState)(!1),e=Object(p.a)(n,2),t=e[0],i=e[1],s=function(){i(!0)};return r.a.createElement(q,null,t?r.a.createElement("p",{className:"success-auth"},"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b!"):r.a.createElement(O,{submitAuth:s}),t&&r.a.createElement("p",{className:"auth-link"},r.a.createElement(o.b,{to:"/users"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439")))},I=t(50),V=t.n(I),W=t(70),D=t(71);function L(){var n=Object(m.a)(["\n    font-size: 16px;\n  "]);return L=function(){return n},n}function M(){var n=Object(m.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18px;\n  color: #c93030;\n  margin: 0;\n\n  ","\n"]);return M=function(){return n},n}function P(){var n=Object(m.a)(["\n          padding: 10px 0;  \n        "]);return P=function(){return n},n}function $(){var n=Object(m.a)(["\n  padding: 30px;\n  ","\n"]);return $=function(){return n},n}var G=b.a.get("token");function K(){return Q.apply(this,arguments)}function Q(){return(Q=Object(W.a)(V.a.mark((function n(){var e;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://emphasoft-test-assignment.herokuapp.com/api/v1/users/",{headers:{Authorization:"Token ".concat(G)}});case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var R=u.c.div($(),Object(f.a)("xs","md")(P())),U=u.c.p(M(),Object(f.a)("xs","md")(L())),X=function(){var n=Object(a.useState)([]),e=Object(p.a)(n,2),t=e[0],i=e[1],s=Object(a.useState)(""),o=Object(p.a)(s,2),c=o[0],u=o[1];Object(a.useEffect)((function(){function n(){return(n=Object(W.a)(V.a.mark((function n(){var e;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K();case 2:e=n.sent,i(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);return r.a.createElement(R,null,r.a.createElement(H,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",onChange:function(n){n.persist(),Object(D.debounce)((function(){u(n.target.value)}),500)()}}),function(){var n=Object(D.sortBy)(t.filter((function(n){return n.username.toLowerCase().includes(c)})),"id");return n.length>0?r.a.createElement(S,{title:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",users:n}):r.a.createElement(U,null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")}())},Y=function(){return r.a.createElement(o.a,{basename:"/emphasoft"},r.a.createElement(u.a,{theme:l},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:F}),r.a.createElement(c.a,{path:"/users",component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[82,1,2]]]);
//# sourceMappingURL=main.2e9a08a8.chunk.js.map