(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,o){},15:function(e,n,o){},16:function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),i=o(2),r=o.n(i),c=(o(14),o(3)),l=o(4),s=o(6),u=o(5),d=o(7),m=(o(15),function(e){function n(e){var o;return Object(c.a)(this,n),(o=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={name:"Home",color:"grey",img:"home.jpg"},o}return Object(d.a)(n,e),Object(l.a)(n,[{key:"clicked",value:function(e){this.setState({name:e.name,color:e.color,img:e.img})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"app"},a.a.createElement("nav",{className:"nav"},this.props.items.map(function(n,o){var t="menu";return e.state.color===n.color&&(t="".concat(t," is-active")),a.a.createElement("a",{className:t+" "+n.color,onClick:e.clicked.bind(e,n),key:o},n.name)})),a.a.createElement("div",{className:"info"},"ini adalah ",a.a.createElement("span",{className:"selected "+this.state.color},this.state.color),a.a.createElement("br",null),a.a.createElement("img",{src:this.state.img,width:"240"})))}}]),n}(t.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(m,{items:[{name:"Red",color:"Merah",img:"redberry.jpg"},{name:"Yellow",color:"Kuning",img:"yellrose.jpg"},{name:"Green",color:"Hijau",img:"green.jpg"},{name:"Blue",color:"Biru",img:"blueberry.jpg"}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pulsaulil",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pulsaulil","/service-worker.js");g?(function(e,n){fetch(e).then(function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):f(n,e)})}}()},8:function(e,n,o){e.exports=o(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.2a96dab9.chunk.js.map