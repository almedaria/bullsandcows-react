(this.webpackJsonpbullsandcows=this.webpackJsonpbullsandcows||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),a=r(6),c=r.n(a),i=(r(12),r(7)),l=r(2),o=(r(13),r(0)),u=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Bulls and Cows"})})},d=function(){var e=[1,2,3,4,5,6,7,8,9],t=Math.floor(Math.random()*e.length),r=e.splice(t,1)[0];e.push(0);for(var n=0;n<3;n++)t=Math.floor(Math.random()*e.length),r=10*r+e.splice(t,1)[0];return r},j=function(e,t){var r=0,n=0;e=e.toString(),t=t.toString(),console.log(e);for(var s=[],a=0;a<e.length;a++)e[a]===t[a]?r+=1:s.push(t[a]);for(var c=0;c<s.length;c++)e.includes(s[c])&&(n+=1);return r+" Bulls "+n+" Cows"};var b=function(e){var t=Object(o.jsx)("div",{});return"WIN"===e.gameState?t=Object(o.jsxs)("div",{className:"game-over",children:["Good job! ",e.secretNumber," is the correct answer!"]}):"LOSE"===e.gameState&&(t=Object(o.jsxs)("div",{className:"game-over",children:[" ","Try Again! The correct answer is ",e.secretNumber]})),Object(o.jsx)("div",{children:t})},h=function(e){return Object(o.jsxs)("div",{className:"attempt-container",children:[Object(o.jsxs)("div",{className:"attempt-individual",children:[Object(o.jsx)("div",{className:"attempt-title",children:"Attempt "}),Object(o.jsx)("div",{className:"attempt-title",children:"Guess"}),Object(o.jsx)("div",{className:"attempt-title",children:"Bulls & Cows"})]}),e.logs.map((function(e,t){return Object(o.jsxs)("div",{className:"attempt-individual",children:[Object(o.jsxs)("div",{className:"attempt-details",children:["Number ",t+1," "]}),Object(o.jsx)("div",{className:"attempt-details",children:e[0]}),Object(o.jsx)("div",{className:"attempt-details",children:e[1]})]},t)}))]})},m=function(e){var t=Object(o.jsx)("div",{className:"alerts",children:"\xa0"});return e.error&&(t=Object(o.jsx)("div",{className:"alerts",children:e.error})),Object(o.jsx)("div",{children:t})};var O=function(){var e=Object(n.useState)(Array.from(Array(12),(function(){return[]}))),t=Object(l.a)(e,2),r=t[0],s=t[1],a=Object(n.useState)(d()),c=Object(l.a)(a,2),O=c[0],v=c[1],f=Object(n.useState)(""),N=Object(l.a)(f,2),x=N[0],g=N[1],p=Object(n.useState)("IN PROGRESS"),S=Object(l.a)(p,2),w=S[0],I=S[1],E=Object(n.useState)(""),R=Object(l.a)(E,2),A=R[0],y=R[1];function C(){try{if(!function(e){e=e.toString();var t=new Set;if("0"===e[0])return!1;for(var r=0;r<e.length;r++){if(t.has(e[r])||isNaN(e[r]))return!1;t.add(e[r])}return 4===t.size}(x))throw new Error("INVALID DATA ENTRY! Item must contain 4 unique digits and must not start with 0.");if(function(e,t){for(var r=0;r<e.length;r++)if(e[r][0]===t)return!0;return!1}(r,x))throw new Error("INVALID DATA ENTRY! You already tried that combination.");var e=function(){for(var e=Object(i.a)(r),t=0;t<12;t++)if(0===e[t].length){e[t]=[x,j(O,x)];break}return e}();s(e),g(""),I(function(e){for(var t=0;t<12;t++){if("4 Bulls 0 Cows"===e[t][1])return"WIN";if(0===e[t].length)return"IN PROGRESS"}return"LOSE"}(e)),y(null)}catch(t){g(""),y(t.message)}}return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(u,{}),Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("input",{id:"numberInput",type:"number",onKeyPress:function(e){"Enter"===e.key&&C()},onChange:function(e){g(e.target.value)},value:x,disabled:"IN PROGRESS"!==w?"disabled":"",placeholder:"Enter 4 unique digits here",className:"input-text"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{disabled:"IN PROGRESS"!==w?"disabled":"",onClick:function(){return C()},className:"guess-button",children:"Guess"}),Object(o.jsx)("button",{className:"reset-button",onClick:function(){return s(Array.from(Array(12),(function(){return[]}))),v(d()),g(""),y(""),void I("IN PROGRESS")},children:"Reset"})]})]}),Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)(m,{error:A}),Object(o.jsx)(h,{logs:r})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(b,{gameState:w,secretNumber:O})})]})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.a79fd3b6.chunk.js.map