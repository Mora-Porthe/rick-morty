(this.webpackJsonpevaluacion=this.webpackJsonpevaluacion||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c(11),s=c.n(r),i=c(4),o=(c(18),c(9)),h=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,image:e.image,origin:e.origin.name,episodes:e.episode.length}}))}))},u=(c(19),function(e){return Object(a.jsx)("li",{className:"character",children:Object(a.jsxs)(i.b,{to:"/character/".concat(e.character.name),children:[Object(a.jsx)("img",{className:"character__img",src:e.character.image,alt:e.character.name,title:e.character.name}),Object(a.jsx)("h2",{className:"character__name",children:e.character.name}),Object(a.jsx)("p",{className:"character__species",children:e.character.species})]})})}),l=(c(25),function(e){var t=e.characters.map((function(e){return Object(a.jsx)(u,{character:e},e.id)}));return Object(a.jsx)("section",{className:"character__container",children:Object(a.jsx)("ul",{className:"character__list",children:t})})}),m=c.p+"static/media/logoRM.de13d484.png",j=(c(26),function(){return Object(a.jsx)("header",{className:"header",role:"banner",children:Object(a.jsx)("img",{className:"header__logo",src:m,alt:"Rick and Morty Logo",title:"Rick and Morty search your character"})})}),d=(c(27),function(e){return Object(a.jsxs)("form",{className:"form",children:[Object(a.jsx)("label",{className:"form__title-name",htmlFor:"name",children:"\xbfWho are you looking for?"}),Object(a.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",placeholder:"Search here: Beth Smith",onChange:function(t){e.handleFilter({value:t.target.value,key:"character"})}})]})}),f=(c(28),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),u=i[0],m=i[1];Object(n.useEffect)((function(){h().then((function(e){return r(e)}))}),[]);var f=c.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())})),b=f.length>0?Object(a.jsx)(l,{characters:f}):Object(a.jsx)("p",{className:"form__notFound",children:"Upps! There are no characters with the word  ".concat(u,". Try another!")});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(d,{handleFilter:function(e){m(e.value)}}),b]})}),b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),b()}},[[29,1,2]]]);
//# sourceMappingURL=main.e85f0071.chunk.js.map