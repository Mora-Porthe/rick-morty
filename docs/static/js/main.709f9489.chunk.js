(this.webpackJsonpevaluacion=this.webpackJsonpevaluacion||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(3),i=c.n(s),o=(c(10),c(4)),u=(c(11),function(e){return Object(n.jsxs)("li",{className:"character",children:[Object(n.jsx)("img",{className:"character__img",src:e.character.image,alt:e.character.name,title:e.character.name}),Object(n.jsx)("h2",{className:"character__name",children:e.character.name}),Object(n.jsx)("p",{className:"character__species",children:e.character.species})]})}),h=(c(12),function(e){var t=e.characters.map((function(e){return Object(n.jsx)(u,{character:e},e.id)}));return Object(n.jsx)("section",{className:"character__container",children:Object(n.jsx)("ul",{className:"character__list",children:t})})}),l=c.p+"static/media/logoRM.de13d484.png",m=(c(13),function(){return Object(n.jsx)("header",{className:"header",role:"banner",children:Object(n.jsx)("img",{className:"header__logo",src:l,alt:"Rick and Morty Logo",title:"Rick and Morty search your character"})})}),j=(c(14),function(){return Object(n.jsxs)("form",{className:"form",children:[Object(n.jsx)("label",{className:"form__title-name",htmlFor:"name",children:"\xbfWho are you looking for?"}),Object(n.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name"})]})}),d=(c(15),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,image:e.image,origin:e.origin.name,episodes:e.episode.length}}))}))}),f=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){d().then((function(e){return r(e)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{}),Object(n.jsx)(j,{}),Object(n.jsx)(h,{characters:c})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),b()}],[[16,1,2]]]);
//# sourceMappingURL=main.709f9489.chunk.js.map