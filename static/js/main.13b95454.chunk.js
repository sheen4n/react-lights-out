(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(23)},15:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){},21:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(4),o=t.n(c),l=(t(15),t(5)),i=t(6),u=t(8),s=t(7),m=t(9),f=t(1),d=t(2),v=(t(17),function(e){var n=e.isLit,t=e.flipCellsAroundMe,a="Cell"+(n?" Cell-lit":"");return r.a.createElement("td",{className:a,onClick:t})}),p=(t(19),function(){var e=3,n=4,t=.5,c=Object(a.useState)(function(){for(var a=Object(d.a)(Array(e)).map(function(e){return Array(n)}),r=0;r<e;r++)for(var c=0;c<n;c++)a[r][c]=Math.random()<t;return a}()),o=Object(f.a)(c,2),l=o[0],i=o[1],u=Object(a.useState)(!1),s=Object(f.a)(u,2),m=s[0],p=s[1];return r.a.createElement("div",null,m?r.a.createElement("div",{className:"winner"},r.a.createElement("span",{className:"neon-orange"},"YOU"),r.a.createElement("span",{className:"neon-blue"},"WIN!")):r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),function(){var t=l.map(function(t,a){return r.a.createElement("tr",{key:a},t.map(function(t,c){return r.a.createElement(v,{key:"".concat(a,"-").concat(c),isLit:t,flipCellsAroundMe:function(){return function(t,a){var r=Object(d.a)(l),c=function(t,a){a>=0&&a<n&&t>=0&&t<e&&(r[t][a]=!l[t][a])};c(t,a),c(t,a+1),c(t,a-1),c(t-1,a),c(t+1,a);var o=l.every(function(e){return e.every(function(e){return!1===e})});i(r),p(o)}(a,c)}})}))});return r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,t))}()))}),b=(t(21),function(e){function n(){return Object(l.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.13b95454.chunk.js.map