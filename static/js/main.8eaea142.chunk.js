(window["webpackJsonpboards-app"]=window["webpackJsonpboards-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/logo.f6f012d7.svg"},function(e,a,t){e.exports=t.p+"static/media/settigns-icon.50fd70b9.svg"},function(e,a,t){e.exports=t.p+"static/media/user-icon.0fe516fe.svg"},function(e,a,t){e.exports=t.p+"static/media/arrow.b6065243.svg"},function(e,a,t){e.exports=t.p+"static/media/user-avatar.42a40d48.svg"},function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(3),s=t.n(i),c=(t(14),t(4)),m=t.n(c),r=function(){return n.a.createElement("div",{className:"logo"},n.a.createElement("a",null,n.a.createElement("img",{src:m.a,alt:"logo"})))},u=function(){return n.a.createElement("header",{className:"header"},n.a.createElement(r,null))},o=t(5),d=t.n(o),f=t(6),g=[{id:1,title:"Personal settings",text:["Profile details","Account info","Email preferences","Work schedule","Password & security","Apps access"],img:t.n(f).a},{id:2,title:"Account managment",text:["Subscription","Billing","Users & groups","Request form builder","Custom workflows","Activity reports","Calendars","Account settings","Advanced security"],img:d.a}],p=(t(15),function(){return n.a.createElement("aside",{className:"side-menu"},g.map((function(e){return n.a.createElement("nav",null,n.a.createElement("ul",{key:e.id,className:"side-menu__list"},e.title&&n.a.createElement("li",{className:"side-menu__title"},n.a.createElement("img",{className:"side-menu__icon",src:e.img,alt:"icon"}),e.title),e.text.map((function(e){return n.a.createElement("li",{className:"side-menu__item",tabIndex:1},n.a.createElement("a",{href:"#",className:"side-menu__link"},e))}))))})))}),_=(t(16),function(e){return n.a.createElement("main",{className:"main"},e.children)}),E=(t(17),t(1)),b=t.n(E),V=t(7),x=t.n(V),N=(t(18),function(e){return n.a.createElement("div",{className:"select-box"},n.a.createElement("div",{className:"select-box__current",tabIndex:1},n.a.createElement("span",{className:"select-box__label"},e.selectedTitle),e.data.map((function(e){return n.a.createElement("div",{key:e.id,className:"select-box__value"},n.a.createElement("input",{className:"select-box__input",type:"radio",id:e.id,value:e.id,name:e.name,checked:!0,onChange:function(){return console.log("hello")}}),n.a.createElement("p",{className:"select-box__input-text"},e.selectValue?e.selectValue:"Empty text"))})),n.a.createElement("img",{className:"select-box__icon",src:x.a,alt:"Arrow Icon","aria-hidden":"true"})),n.a.createElement("ul",{className:"select-box__list"},e.data.map((function(e){return n.a.createElement(n.a.Fragment,null,e.selectValue&&n.a.createElement("li",{key:e.id,className:b()("select-box__item",{})},n.a.createElement("label",{className:"select-box__option",htmlFor:e.id,"aria-hidden":!0},e.selectValue)))}))))}),h=(t(19),function(e){var a=Object(l.useRef)();return n.a.createElement("div",{className:"input-box"},n.a.createElement("input",{ref:a,id:e.id,type:e.type||"text",className:"input-box__input",required:!0,placeholder:e.labelValue||e.placeholder,defaultValue:e.defaultValue,onChange:function(e){""===e.target.value&&a.current.classList.add("input-box__input_error"),""!==e.target.value&&a.current.classList.remove("input-box__input_error")},disabled:e.disabled}),n.a.createElement("label",{htmlFor:e.id,className:"input-box__label"},e.labelValue))}),v=(t(20),function(e){return n.a.createElement("div",{className:"input-toggle"},n.a.createElement("input",{type:"checkbox",id:e.id,name:e.name,value:"checkbox",className:"input-toggle__input"}),n.a.createElement("label",{htmlFor:e.id,className:"input-toggle__label input-toggle__label_checkbox",tabIndex:1},e.text))}),T=[{id:1,selectValue:"Deutsch",name:"language"},{id:"language",selectValue:"English",name:"language"},{id:3,selectValue:"Espa\xf1ol",name:"language"},{id:4,selectValue:"Fran\xe7ais",name:"language"},{id:5,selectValue:"Italiano",name:"language"},{id:6,selectValue:"Portugu\xeas (Brasil)",name:"language"},{id:7,selectValue:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",name:"language"},{id:8,selectValue:"\u65e5\u672c\u8a9e",name:"language"},{id:9,selectValue:"\u4e2d\u6587 (\u4e2d\u56fd)",name:"language"}],M=[{id:10,selectValue:"(GMT-07:00) Pacific Time (US & Canada)",name:"time"},{id:20,selectValue:"(GMT-06:00) Mountain Time (US & Canada)",name:"time"},{id:30,selectValue:"(GMT+03:00) Moscow",name:"time"},{id:40,selectValue:"(GMT-11:00) Midway Island",name:"time"},{id:50,selectValue:"(GMT-11:00) Samoa",name:"time"},{id:60,selectValue:"(GMT-10:00) Hawaii",name:"time"},{id:70,selectValue:"(GMT-08:00) Alaska",name:"time"},{id:80,selectValue:"(GMT-07:00) Arizona",name:"time"},{id:90,selectValue:"(GMT-07:00) Baja",name:"time"},{id:100,selectValue:"(GMT-07:00) Chihuahua",name:"time"},{id:110,selectValue:"(GMT-07:00) Los Angeles",name:"time"},{id:120,selectValue:"(GMT-07:00) Mazatlan",name:"time"},{id:130,selectValue:"(GMT-07:00) Pacific Time (US & Canada)",name:"time"},{id:140,selectValue:"(GMT-07:00) Tijuana",name:"time"},{id:150,selectValue:"(GMT-06:00) Guatemala City",name:"time"},{id:160,selectValue:"(GMT-06:00) Managua (Nicaragua)",name:"time"},{id:170,selectValue:"(GMT-06:00) Mexico City",name:"time"},{id:180,selectValue:"(GMT-06:00) Monterrey",name:"time"},{id:190,selectValue:"(GMT-06:00) Mountain Time (US & Canada)",name:"time"},{id:200,selectValue:"(GMT-06:00) San Jos\xe9 (Costa Rica)",name:"time"},{id:210,selectValue:"(GMT-06:00) San Salvador",name:"time"},{id:220,selectValue:"(GMT-06:00) Saskatchewan",name:"time"},{id:230,selectValue:"(GMT-06:00) Tegucigalpa (Honduras)",name:"time"},{id:240,selectValue:"(GMT-05:00) Bogota",name:"time"}],w=[{id:1e3,selectValue:"Starting today",name:"task"},{id:2e3,selectValue:"Backlogged",name:"task"}],k=(t(21),t(8)),G=t.n(k),y=function(e){return n.a.createElement("div",{className:"avatar-box"},n.a.createElement("a",{className:"avatar-box__loader",href:"#"},n.a.createElement("img",{className:"avatar-box__picture",src:e.userAvatarImg||G.a,alt:"your avatar"}),n.a.createElement("span",null,"upload")),n.a.createElement("div",{className:"avatar-box__info"},n.a.createElement("p",{className:"avatar-box__user-name"},e.userName),n.a.createElement("p",{className:"avatar-box__staff"},e.userStuff," "," "," (",e.userTeam," Team)")))},S=(t(22),function(e){return n.a.createElement("button",{type:"button",className:b()("button",{button_text:e.isTextBtn,button_outline:e.isOutline}),disabled:e.disabled},e.textBtn)}),C=function(){return l.createElement(l.Fragment,null,l.createElement(u,null),l.createElement(p,null),l.createElement(_,null,l.createElement("div",{className:"profile"},l.createElement("h1",{className:"profile__title"},"Profile details"),l.createElement(y,{userAvatarImg:"http://heyanton.com/_images/userpics/all/49.jpg",userName:"Jhon Smith",userStuff:"UI developer",userTeam:"crafting"}),l.createElement("form",{action:"",className:"profile__form-info"},l.createElement("fieldset",{className:"profile__fiedset"},l.createElement("div",{className:"profile__fiedset-wrap"},l.createElement(h,{id:"name",labelValue:"First name",defaultValue:"Jhon"}),l.createElement(h,{id:"name",labelValue:"Last name",defaultValue:"Smith"}),l.createElement(h,{id:"name",labelValue:"Company name",defaultValue:"Wrike"}),l.createElement(h,{id:"name",labelValue:"Job title",defaultValue:"UI Developer (crafting team)"}),l.createElement(h,{id:"name",labelValue:"Location",defaultValue:"Saint-Petersburg"}),l.createElement(h,{id:"name",labelValue:"Phone number",defaultValue:"+7 (923) 345-34-32"}))),l.createElement(S,{textBtn:"Save changes"}),l.createElement(S,{isTextBtn:!0,textBtn:"Cancel"})),l.createElement("h2",{className:"profile__title"},"Workspace settings"),l.createElement("form",{action:"",className:"profile__form-workplace"},l.createElement("fieldset",{className:"profile__fiedset  profile__fiedset_big-margin"},l.createElement("div",{className:"profile__fiedset-wrap"},l.createElement(N,{selectedTitle:"Time Zone",data:M}),l.createElement(N,{selectedTitle:"Language",data:T}),l.createElement(N,{selectedTitle:"New task created by default as",data:w}))),l.createElement("fieldset",{className:"profile__fiedset"},l.createElement(v,{id:"suggest",name:"suggest",text:"Show pop-up with suggestion to align the dates of tasks and subtasks."}),l.createElement("a",{href:"#",className:"profile__link",tabIndex:1},"How does subtask alignment work?")),l.createElement(S,{textBtn:"Save settings",disabled:!0})))))},A=(t(23),function(){return n.a.createElement("div",{className:"App"},n.a.createElement(C,null))});t(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8eaea142.chunk.js.map