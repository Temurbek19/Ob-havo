(this["webpackJsonpob-havo"]=this["webpackJsonpob-havo"]||[]).push([[0],{50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(25),n=a.n(i),r=a(26),d=a(2),h=a(9),j=a(11),l=a.n(j),m=(a(50),a(0)),o=function(e){var t=e.cityName,a=e.onClick,c=e.active;return Object(m.jsx)("button",{className:"city-switcher-btn ".concat(c?"active":""),onClick:a,children:t})},b=(a(52),["tashkent","seul","oslo","paris","rim","moscow","canada","minsk","berlin"]),u=function(e){var t=e.activeCity,a=e.setActiveCity;return Object(m.jsx)("div",{className:"city-switcher",children:b.map((function(e,c){return Object(m.jsx)(o,{cityName:e,onClick:function(){return a(e)},active:t==e},c)}))})},x=a.p+"static/media/Clear.f287b3b2.svg",O=a.p+"static/media/Atmosphere.2d361135.svg",p=a.p+"static/media/Thunderstrom.28a7ec1b.svg",v=a.p+"static/media/Drizzle.82db518e.svg",f=a.p+"static/media/Rain.6dcfb8a4.svg",w=a.p+"static/media/Snow.790a7333.svg",N=a.p+"static/media/Cloud.f8218436.svg",y=function(e){switch(!0){case 200<=e&&e<=232:return p;case 300<=e&&e<=321:return v;case 500<=e&&e<=521:return f;case 600<=e&&e<=622:return w;case 701<=e&&e<=781:return O;case 800==e:return x;case 801<=e&&e<=804:return N;default:return"Zato osmonimiz musaffo"}},g=(a(53),function(){var e=Object(c.useState)("tashkent"),t=Object(h.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({isFachet:!1,data:{},error:null}),n=Object(h.a)(i,2),r=n[0],d=n[1];return Object(c.useEffect)((function(){l.a.get("https://api.openweathermap.org/data/2.5/forecast",{params:{q:a,appid:"25d70e7e4d3a402638d192b0000714fc",units:"metric"}}).then((function(e){d({isFachet:!0,data:e.data,error:!1})})).catch((function(e){d({isFachet:!0,data:{},error:e})})).then((function(){}))}),[a]),Object(m.jsxs)("div",{className:"city",children:[Object(m.jsx)(u,{setActiveCity:s,activeCity:a}),Object(m.jsx)("div",{className:"text",children:r.isFachet?Object(m.jsxs)("div",{className:"text-item",children:[Object(m.jsx)("h1",{className:"city-name",children:r.data.city.name}),Object(m.jsxs)("div",{className:"weather-days",children:[Object(m.jsxs)("div",{className:"day",children:[Object(m.jsx)("img",{className:"weather-icon",src:y(r.data.list[0].weather[0].id)}),Object(m.jsxs)("h1",{children:[Math.ceil(r.data.list[0].main.temp)," \xb0C"]}),Object(m.jsx)("h3",{children:r.data.list[0].dt_txt})]}),Object(m.jsxs)("div",{className:"day",children:[Object(m.jsx)("img",{className:"weather-icon",src:y(r.data.list[6].weather[0].id)}),Object(m.jsxs)("h1",{children:[Math.ceil(r.data.list[6].main.temp)," \xb0C"]}),Object(m.jsx)("h3",{children:r.data.list[6].dt_txt})]}),Object(m.jsxs)("div",{className:"day",children:[Object(m.jsx)("img",{className:"weather-icon",src:y(r.data.list[14].weather[0].id)}),Object(m.jsxs)("h1",{children:[Math.ceil(r.data.list[14].main.temp)," \xb0C"]}),Object(m.jsx)("h3",{children:r.data.list[14].dt_txt})]}),Object(m.jsxs)("div",{className:"day",children:[Object(m.jsx)("img",{className:"weather-icon",src:y(r.data.list[22].weather[0].id)}),Object(m.jsxs)("h1",{children:[Math.ceil(r.data.list[22].main.temp)," \xb0C"]}),Object(m.jsx)("h3",{children:r.data.list[22].dt_txt})]}),Object(m.jsxs)("div",{className:"day",children:[Object(m.jsx)("img",{className:"weather-icon",src:y(r.data.list[30].weather[0].id)}),Object(m.jsxs)("h1",{children:[Math.ceil(r.data.list[30].main.temp)," \xb0C"]}),Object(m.jsx)("h3",{children:r.data.list[30].dt_txt})]}),Object(m.jsxs)("div",{className:"day",children:[Object(m.jsx)("img",{className:"weather-icon",src:y(r.data.list[37].weather[0].id)}),Object(m.jsxs)("h1",{children:[Math.ceil(r.data.list[37].main.temp)," \xb0C"]}),Object(m.jsx)("h3",{children:r.data.list[37].dt_txt})]})]})]}):Object(m.jsx)("h1",{children:"Loading..."})})]})}),C=function(){return Object(m.jsx)("h1",{})},F=(a(54),function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({isFetchet:!1,name:"",weather:[],temp:{},error:null}),n=Object(h.a)(i,2),r=n[0],d=n[1];return Object(c.useEffect)((function(){l.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:a,appid:"25d70e7e4d3a402638d192b0000714fc",units:"metric"}}).then((function(e){d({isFachet:!0,name:e.data.name,weather:e.data.weather,temp:e.data.main,error:!1})})).catch((function(e){d({isFachet:!0,name:"",weather:[],temp:{},error:e})})).then((function(){}))}),[a]),Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{children:"Header"}),Object(m.jsxs)("div",{className:"search-input",children:[Object(m.jsx)("input",{type:"text",placeholder:"Find your city",value:a,onChange:function(e){return s(e.target.value)}}),a.length>1?Object(m.jsx)("div",{className:"search-result",children:r.isFachet?Object(m.jsx)("div",{className:"search-result-card",children:r.weather.length>0?Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("h3",{children:r.name}),Object(m.jsxs)("h3",{children:[r.temp.temp," \xb0C"]})]}):Object(m.jsx)("h3",{children:"City not found"})}):Object(m.jsx)("h5",{children:"Loading..."})}):Object(m.jsx)("div",{})]})]})});var k=function(){return Object(m.jsxs)(r.a,{children:[Object(m.jsx)(F,{}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/",component:g}),Object(m.jsx)(d.a,{exact:!0,path:"/city/:cityName",component:C})]})]})};a(60);n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.b841b1c3.chunk.js.map