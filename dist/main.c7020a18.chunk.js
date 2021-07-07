(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{35:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n={};c.r(n),c.d(n,"getWeatherAction",(function(){return A})),c.d(n,"setWeatherAction",(function(){return C})),c.d(n,"geoPointAction",(function(){return R})),c.d(n,"errorAction",(function(){return H}));var r,a=c(0),i=c.n(a),s=c(17),o=c.n(s),l=c(8),d=c(12),u=c(16),h=c.n(u),j=c(23),b=c(13),f=c(26),m=c(10);!function(e){e.GET_WEATHER="GET_WEATHER",e.GEO_POINT="GEO_POINT",e.FETCH_ERROR="FETCH_ERROR"}(r||(r={}));var O={weather:[],center:null,errorState:{message:"",error:!1}},x=JSON.parse(localStorage.getItem("weatherReducer")||"{}"),v=Object.assign({},O,x),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.GET_WEATHER:return Object(m.a)(Object(m.a)({},e),{},{weather:t.weather});case r.GEO_POINT:return Object(m.a)(Object(m.a)({},e),{},{center:t.center,weather:t.weather});case r.FETCH_ERROR:return Object(m.a)(Object(m.a)({},e),{},{errorState:t.errorState});default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,c=p(e,t);return localStorage.setItem("weatherReducer",JSON.stringify(c)),c},g=Object(b.b)({weather:w}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c,N=[f.a];var y,E=Object(b.d)(g,y,_(b.a.apply(void 0,N))),T="9f2283a8fb67caf1c20ddf2bc5f705b6",S="http://api.openweathermap.org/data/2.5/weather",A=function(e){return function(){var t=Object(j.a)(h.a.mark((function t(c){var n,a,i,s,o,l,d,u;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(S,"?q=").concat(e,"&appid=").concat(T));case 3:return n=t.sent,t.next=6,n.json();case 6:"404"===(a=t.sent).cod&&(i={type:r.FETCH_ERROR,errorState:{message:a.message,error:!0}},c(i)),s=E.getState().weather.weather,o={id:a.id,city:a.name,country:a.sys.country,celsius:I(a.main.temp),feelsLike:I(a.main.feels_like),humidity:a.main.humidity,description:P(a.weather[0].description),main:a.weather[0].main,visibility:k(a.visibility),pressure:a.main.pressure,speed:a.wind.speed,dewPoint:M(I(a.main.temp),a.main.humidity),rangeId:a.weather[0].id,icon:a.weather[0].icon,order:s.length},l=s.findIndex((function(e){return e.id===o.id})),d=-1===l?s.concat(o):z(s,l,o),u={type:r.GET_WEATHER,weather:d},c(u),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log("error:",t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return{type:r.GET_WEATHER,weather:e}},R=function(e){return function(){var t=Object(j.a)(h.a.mark((function t(c){var n,a,i,s,o,l,d,u;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(S,"?lat=").concat(e.latitude,"&lon=").concat(e.longitude,"&appid=").concat(T));case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,i=E.getState().weather.weather,s={id:a.id,city:a.name,country:a.sys.country,celsius:I(a.main.temp),feelsLike:I(a.main.feels_like),humidity:a.main.humidity,description:P(a.weather[0].description),main:a.weather[0].main,visibility:k(a.visibility),pressure:a.main.pressure,speed:a.wind.speed,dewPoint:M(I(a.main.temp),a.main.humidity),rangeId:a.weather[0].id,icon:a.weather[0].icon,order:i.length},o=i.findIndex((function(e){return e.id===s.id})),l=-1===o?i.concat(s):i,d={type:r.GEO_POINT,center:e,weather:l},c(d),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),u=t.t0.response,console.log("error:",u);case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()};function H(e){return{type:r.FETCH_ERROR,errorState:e}}function z(e,t,c){return[].concat(Object(d.a)(e.slice(0,t)),[c],Object(d.a)(e.slice(t+1)))}function I(e){return Math.floor(e-273.15)}function k(e){return Number((e/1e3).toFixed(1))}function P(e){return e.charAt(0).toUpperCase()+e.slice(1)}function M(e,t){var c=Math.log(t/100)+17.269*e/(237.3+e),n=237.3*c/(17.269-c);return Math.round(n)}var W={weather:n},L=c(9),D=c(3),F=(c(35),c(1));function B(e){var t=e.weather;return Object(F.jsx)("div",{className:"container",children:Object(F.jsx)("div",{className:"row",children:t.sort((function(e,t){return e.order-t.order})).map((function(e,t){return Object(F.jsx)("div",{className:"col col-4",children:Object(F.jsxs)("div",{className:"weather-box",children:[Object(F.jsxs)("div",{className:"weather-box__title",children:[Object(F.jsxs)("span",{children:[e.city,", ",e.country]}),0===t&&Object(F.jsx)(L.b,{to:"/settings",children:Object(F.jsx)("svg",{className:"settings-icon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true","aria-describedby":"mui-19791",children:Object(F.jsx)("path",{d:"M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})})})]}),Object(F.jsxs)("div",{className:"weather-box__condition",children:[Object(F.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png"),alt:"",className:"weather-box__img"}),Object(F.jsxs)("div",{className:"weather-box__celsius",children:[e.celsius," \xb0 c"]})]}),Object(F.jsx)("div",{className:"weather-box__info",children:Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col col-12",children:Object(F.jsxs)("div",{className:"weather-box__text desc",children:["Feels like ",e.feelsLike," \xb0 C. ",e.description,". ",e.main,"."]})}),Object(F.jsx)("div",{className:"col col-6",children:Object(F.jsxs)("div",{className:"weather-box__content",children:[Object(F.jsx)("svg",{className:"weather-box__icon rotate",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true","aria-describedby":"mui-53193",children:Object(F.jsx)("path",{d:"M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"})}),Object(F.jsxs)("div",{children:[e.speed,"m/s"]})]})}),Object(F.jsx)("div",{className:"col col-6",children:Object(F.jsxs)("div",{className:"weather-box__content",children:[Object(F.jsx)("svg",{className:"weather-box__icon",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true","aria-describedby":"mui-67105",children:Object(F.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"})}),Object(F.jsxs)("div",{children:[e.pressure,"hPa"]})]})}),Object(F.jsx)("div",{className:"col col-6",children:Object(F.jsxs)("div",{className:"weather-box__text",children:["Humidity: ",e.humidity,"%"]})}),Object(F.jsx)("div",{className:"col col-6",children:Object(F.jsxs)("div",{className:"weather-box__text",children:["Dew point: ",e.dewPoint," \xb0 C"]})}),Object(F.jsx)("div",{className:"col col-6",children:Object(F.jsxs)("div",{className:"weather-box__text",children:["Visibility: ",e.visibility,"km"]})})]})})]})},e.id)}))})})}var G=Object(l.b)((function(e){return{weather:e.weather.weather}}))((function(e){var t=e.weather;return Object(F.jsx)(B,{weather:t})})),V=c(20);c(39);function J(e){var t=e.inputValue,c=e.onChange,n=e.addItem;return Object(F.jsxs)("div",{className:"city-creator",children:[Object(F.jsx)("div",{className:"city-creator__title",children:"Add location:"}),Object(F.jsxs)("div",{className:"city-creator__row",children:[Object(F.jsx)("input",{className:"city-creator__input",type:"text",value:t,onChange:c}),Object(F.jsx)("div",{className:"city-creator__btn",onClick:n,children:Object(F.jsx)("svg",{className:"city-creator__icon",focusable:"false",viewBox:"0 0 24 24",children:Object(F.jsx)("path",{d:"M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"})})})]})]})}var U=Object(l.b)(null,(function(e){return{getWeatherAction:function(t){return e(W.weather.getWeatherAction(t))}}}))((function(e){var t=e.getWeatherAction,c=Object(a.useState)(""),n=Object(V.a)(c,2),r=n[0],i=n[1];return Object(F.jsx)(J,{inputValue:r,onChange:function(e){i(e.target.value)},addItem:function(){t(r),i("")}})}));c(40);function X(e){var t=e.weather,c=e.deleteItem,n=e.handleDrag,r=e.handleDrop;return Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col col-12",children:Object(F.jsxs)("div",{className:"settings",children:[Object(F.jsxs)("div",{className:"settings__head",children:[Object(F.jsx)("span",{children:"Settings"}),Object(F.jsx)(L.b,{to:"/",children:Object(F.jsx)("svg",{className:"settings__close",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",children:Object(F.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})})})]}),Object(F.jsx)("ul",{className:"settings__row",children:t.sort((function(e,t){return e.order-t.order})).map((function(e){return Object(F.jsxs)("li",{className:"settings__item",id:e.id.toString(),draggable:!0,onDragOver:function(e){return e.preventDefault()},onDragStart:n,onDrop:r,children:[Object(F.jsx)("svg",{className:"settings__icon",focusable:"false",viewBox:"0 0 24 24",children:Object(F.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})}),Object(F.jsxs)("span",{draggable:!1,children:[e.city,", ",e.country]}),Object(F.jsx)("svg",{className:"settings__icon delete",focusable:"false",viewBox:"0 0 24 24",onClick:function(){return c(e)},children:Object(F.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"})})]},"settings-list-".concat(e.id))}))})]})}),Object(F.jsx)("div",{className:"col col-12",children:Object(F.jsx)(U,{})})]})})}var q=Object(l.b)((function(e){return{weather:e.weather.weather}}),(function(e){return{setWeatherAction:function(t){return e(W.weather.setWeatherAction(t))}}}))((function(e){var t=e.weather,c=e.setWeatherAction,n=Object(a.useState)(null),r=Object(V.a)(n,2),i=r[0],s=r[1];return Object(F.jsx)(X,{weather:t,deleteItem:function(e){var n=t.findIndex((function(t){return t.id===e.id})),r=function(e,t){return[].concat(Object(d.a)(e.slice(0,t)),Object(d.a)(e.slice(t+1)))}(t,n);c(r)},setWeatherAction:function(e){return c(e)},handleDrag:function(e){s(e.currentTarget.id)},handleDrop:function(e){if(i){var n=t.find((function(e){return e.id==i})),r=t.find((function(t){return t.id==e.currentTarget.id})),a=n&&n.order,s=r&&r.order,o=t.map((function(t){return t.id==i&&(t.order=s),t.id==e.currentTarget.id&&(t.order=a),t}));c(o)}}})}));c(41);function K(e){var t=e.open,c=e.message,n=e.onClose,r=e.type;return Object(a.useEffect)((function(){!0===t&&setTimeout((function(){n()}),5e3)}),[t,n]),Object(F.jsx)(F.Fragment,{children:t&&Object(F.jsxs)("div",{className:"alert ".concat(t?"show":"hide"," ").concat(r),children:[Object(F.jsx)("div",{children:c}),Object(F.jsx)("svg",{onClick:n,className:"alert__close",focusable:"false",viewBox:"0 0 24 24",children:Object(F.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})})]})})}c(42);var Q=Object(l.b)((function(e){return{errorState:e.weather.errorState,weather:e.weather.weather}}),(function(e){return{geoPointAction:function(t){return e(W.weather.geoPointAction(t))},errorAction:function(t){return e(W.weather.errorAction(t))}}}))((function(e){var t=e.geoPointAction,c=e.errorState,n=e.errorAction,r=e.weather;return Object(a.useEffect)((function(){0===r.length&&navigator.geolocation.getCurrentPosition((function(e){var c={latitude:e.coords.latitude,longitude:e.coords.longitude};t(c)}),(function(e){console.error("Error Code = "+e.code+" - "+e.message)}))}),[t]),Object(F.jsxs)(L.a,{children:[Object(F.jsxs)(D.c,{children:[Object(F.jsx)(D.a,{path:"/",component:G,exact:!0}),Object(F.jsx)(D.a,{path:"/settings",component:q,exact:!0})]}),Object(F.jsx)(K,{open:c.error,onClose:function(){n({message:"",error:!1})},message:c.message,type:"error"})]})})),Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};function Z(){return Object(F.jsx)(l.a,{store:E,children:Object(F.jsx)(L.a,{children:Object(F.jsx)(D.c,{children:Object(F.jsx)(D.a,{path:"/",component:Q})})})})}o.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(Z,{})}),document.getElementById("weatherWidget")),Y()}},[[43,1,2]]]);
//# sourceMappingURL=main.c7020a18.chunk.js.map