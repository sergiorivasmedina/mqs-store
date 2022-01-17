(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[30],{997:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(47),r=a(58),s=a(1109),o=a(1026),l=a(1149),d=a(172),j=a(106),b=a(176),h=a(1);const x=Object(d.a)(s.a)((()=>({display:"flex",alignItems:"center",minHeight:b.c,"@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}}))),m=Object(d.a)("div")((()=>({width:"100%",display:"flex",alignItems:"center",padding:"0px 1rem",maxWidth:"1170px",margin:"0 auto"})));var p=()=>{const e=Object(j.a)(),{settings:t}=Object(r.a)(),a=t.themes[t.footer.theme]||e;return Object(h.jsx)(o.a,{theme:a,children:Object(h.jsx)(l.a,{color:"primary",position:"static",sx:{zIndex:96},children:Object(h.jsx)(x,{children:Object(h.jsxs)(m,{children:[Object(h.jsx)(n.f,{sx:{m:"auto"}}),Object(h.jsx)(n.d,{sx:{m:0},children:"Maquisoporte 2022"})]})})})})},O=a(52),u=a(295),g=a(471),f=a(114),y=a(21),w=a(461),v=a(142),S=a(74),k=a(1030),C=a(1211),I=a(1027),z=a(1221),D=a(980);const L=Object(d.a)(k.a)((e=>{let{theme:t}=e;return{"& span":{color:t.palette.text.primary},"& #disable":{color:t.palette.text.disabled}}})),R=Object(d.a)("div")((e=>{let{theme:t}=e;return{height:"100%",display:"flex",flexDirection:"column",width:b.a}})),T=Object(d.a)("div")((()=>({padding:"4px",paddingLeft:"16px",display:"flex",alignItems:"center",boxShadow:v.b[6],height:b.c,"& h5":{marginTop:0,marginBottom:0,marginLeft:"16px",fontWeight:"500"}}))),N=Object(d.a)("div")((()=>({display:"flex",alignItems:"center",padding:"8px 8px",transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}))),B=Object(d.a)("img")((()=>({width:48}))),P=Object(d.a)("div")((()=>({marginRight:"8",textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column","& h6":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block",width:120,marginBottom:"4px"}})));let _=!1;var H=function(e){let{container:t}=e;const[a,c]=Object(i.useState)(0),[s,l]=Object(i.useState)(!1),d=Object(w.b)(),b=Object(y.h)(),{user:x}=Object(u.a)(),{cartList:m}=Object(w.c)((e=>e.ecommerce)),{settings:p}=Object(r.a)(),O=Object(j.a)().palette.text.secondary;_||(d(Object(S.j)(x.id)),_=!0);const f=()=>{l(!s)};Object(i.useEffect)((()=>{let e=0;m.forEach((t=>{e+=t.price*t.amount})),c(e)}),[m]);const{palette:v}=Object(j.a)(),H=v.text.primary;return Object(h.jsxs)(i.Fragment,{children:[Object(h.jsx)(k.a,{onClick:f,children:Object(h.jsx)(C.a,{color:"secondary",badgeContent:m.length,children:Object(h.jsx)(I.a,{sx:{color:H},children:"shopping_cart"})})}),Object(h.jsx)(o.a,{theme:p.themes[p.activeTheme],children:Object(h.jsx)(z.a,{container:t,variant:"temporary",anchor:"right",open:s,onClose:f,ModalProps:{keepMounted:!0},children:Object(h.jsxs)(R,{children:[Object(h.jsxs)(T,{children:[Object(h.jsx)(I.a,{color:"primary",children:"shopping_cart"}),Object(h.jsx)("h5",{children:"Cart"})]}),Object(h.jsx)(g.a,{flexGrow:1,overflow:"auto",children:m.map((e=>Object(h.jsxs)(N,{children:[Object(h.jsxs)(g.a,{mr:"4px",display:"flex",flexDirection:"column",children:[Object(h.jsx)(L,{size:"small",onClick:()=>d(Object(S.k)(x.id,e.id,e.amount+1)),children:Object(h.jsx)(I.a,{sx:{cursor:"pinter"},children:"keyboard_arrow_up"})}),Object(h.jsx)(L,{disabled:!(e.amount-1),size:"small",onClick:()=>d(Object(S.k)(x.id,e.id,e.amount-1)),children:Object(h.jsx)(I.a,{id:!(e.amount-1)&&"disable",children:"keyboard_arrow_down"})})]}),Object(h.jsx)(g.a,{mr:1,children:Object(h.jsx)(B,{src:e.imgUrl,alt:e.title})}),Object(h.jsxs)(P,{children:[Object(h.jsx)(n.c,{children:e.title}),Object(h.jsxs)(n.e,{sx:{color:O},children:["$",e.price," x ",e.amount]})]}),Object(h.jsx)(L,{size:"small",onClick:()=>d(Object(S.i)(x.userId,e.id)),children:Object(h.jsx)(I.a,{fontSize:"small",children:"clear"})})]},e.id)))}),Object(h.jsxs)(D.a,{sx:{width:"100%",borderRadius:0},variant:"contained",color:"primary",onClick:()=>{a>0&&(b("/ecommerce/checkout"),l(!1))},children:["Checkout ($",a.toFixed(2),")"]})]})})})]})},M=a(1078),G=a(1008),W=a(1020),E=a(1023);const F=Object(d.a)(k.a)((e=>{let{theme:t}=e;return{color:t.palette.text.primary}})),U=Object(d.a)("div")((e=>{let{theme:t}=e;return{top:0,zIndex:96,transition:"all 0.3s ease",boxShadow:v.b[8],height:b.c}})),A=Object(d.a)(g.a)((e=>{let{theme:t}=e;return{padding:"8px",paddingLeft:18,paddingRight:20,height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:t.palette.primary.main,[t.breakpoints.down("sm")]:{paddingLeft:16,paddingRight:16},[t.breakpoints.down("xs")]:{paddingLeft:14,paddingRight:16}}})),X=Object(d.a)(g.a)((()=>({display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}}))),q=Object(d.a)(M.a)((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",minWidth:185,"& a":{width:"100%",display:"flex",alignItems:"center",textDecoration:"none"},"& span":{marginRight:"10px",color:t.palette.text.primary}}})),J=()=>{const e=Object(j.a)(),{settings:t,updateSettings:a}=Object(r.a)(),{logout:i,user:c}=Object(u.a)(),s=Object(G.a)(e.breakpoints.down("md"));return Object(h.jsx)(U,{children:Object(h.jsxs)(A,{children:[Object(h.jsx)(g.a,{display:"flex",children:Object(h.jsx)(F,{onClick:()=>{let e,{layout1Settings:i}=t;var c;e=s?"close"===i.leftSidebar.mode?"mobile":"close":"full"===i.leftSidebar.mode?"close":"full",c={mode:e},a({layout1Settings:{leftSidebar:{...c}}})},children:Object(h.jsx)(I.a,{children:"menu"})})}),Object(h.jsxs)(g.a,{display:"flex",alignItems:"center",children:[Object(h.jsx)(H,{}),Object(h.jsxs)(f.h,{menuButton:Object(h.jsxs)(X,{children:[Object(h.jsx)(W.a,{xsDown:!0,children:Object(h.jsxs)(n.f,{children:["Hola ",Object(h.jsx)("strong",{children:c.name})]})}),Object(h.jsx)(E.a,{src:c.avatar,sx:{cursor:"pointer"}})]}),children:[Object(h.jsx)(q,{children:Object(h.jsxs)(O.b,{to:"/",children:[Object(h.jsx)(I.a,{children:" home "}),Object(h.jsx)(n.f,{children:" Home "})]})}),Object(h.jsx)(q,{children:Object(h.jsxs)(O.b,{to:"/page-layouts/user-profile",children:[Object(h.jsx)(I.a,{children:" person "}),Object(h.jsx)(n.f,{children:" Profile "})]})}),Object(h.jsxs)(q,{onClick:i,children:[Object(h.jsx)(I.a,{children:" power_settings_new "}),Object(h.jsx)(n.f,{children:" Logout "})]})]})]})]})})};var $=c.a.memo(J);const Y=Object(d.a)(g.a)((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 18px 20px 29px"}})),K=Object(d.a)(n.f)((e=>{let{theme:t,mode:a}=e;return{fontSize:18,marginLeft:".5rem",display:"compact"===a?"none":"block"}}));var Q=e=>{let{children:t}=e;const{settings:a}=Object(r.a)(),i=a.layout1Settings.leftSidebar,{mode:c}=i;return Object(h.jsxs)(Y,{children:[Object(h.jsxs)(g.a,{display:"flex",alignItems:"center",children:[Object(h.jsx)(f.g,{}),Object(h.jsx)(K,{mode:c,className:"sidenavHoverShow",children:"Maquisoporte"})]}),Object(h.jsx)(g.a,{className:"sidenavHoverShow",sx:{display:"compact"===c?"none":"block"},children:t||null})]})},V=a(133),Z=a(298),ee=a.n(Z),te=a(370);const ae=Object(d.a)(ee.a)((()=>({paddingLeft:"1rem",paddingRight:"1rem",position:"relative"}))),ie=Object(d.a)("div")((e=>{let{theme:t}=e;return{position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1,[t.breakpoints.up("lg")]:{display:"none"}}}));var ce=e=>{let{children:t}=e;const{settings:a,updateSettings:c}=Object(r.a)();return Object(h.jsxs)(i.Fragment,{children:[Object(h.jsxs)(ae,{options:{suppressScrollX:!0},children:[t,Object(h.jsx)(f.l,{items:te.a})]}),Object(h.jsx)(ie,{onClick:()=>(e=>{let t=a.activeLayout+"Settings",i=a[t];c({...a,[t]:{...i,leftSidebar:{...i.leftSidebar,...e}}})})({mode:"close"})})]})},ne=a(1110);const re=Object(d.a)(g.a)((e=>{let{theme:t,width:a,primaryBg:i,bgImgURL:c}=e;return{position:"fixed",top:0,left:0,height:"100vh",width:a,boxShadow:v.b[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.palette.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(i,", 0.96), rgba(").concat(i,", 0.96)), url(").concat(c,")"),"&:hover":{width:b.a,"& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}})),se=Object(d.a)(g.a)((()=>({height:"100%",display:"flex",flexDirection:"column"}))),oe=()=>{const e=Object(j.a)(),{settings:t,updateSettings:a}=Object(r.a)(),i=t.layout1Settings.leftSidebar,{mode:c,bgImgURL:n}=i,s=Object(V.a)(e.palette.primary.main);return Object(h.jsx)(re,{bgImgURL:n,primaryBg:s,width:"compact"===c?b.b:b.a,children:Object(h.jsxs)(se,{children:[Object(h.jsx)(Q,{children:Object(h.jsx)(W.a,{smDown:!0,children:Object(h.jsx)(ne.a,{onChange:()=>{var e;e={mode:"compact"===c?"full":"compact"},a({layout1Settings:{leftSidebar:{...e}}})},checked:"full"!==i.mode,color:"secondary",size:"small"})})}),Object(h.jsx)(ce,{})]})})};var le=c.a.memo(oe),de=a(38);var je=e=>{let{children:t}=e;const a=Object(de.a)(),{settings:i}=Object(r.a)(),c=i.themes[i.layout1Settings.leftSidebar.theme]||a;return Object(h.jsx)(o.a,{theme:c,children:t})},be=a(7),he=a(1111);const xe=Object(d.a)("div")((()=>({position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}})));var me=()=>{const{settings:e,updateSettings:t}=Object(r.a)(),a=()=>{t({secondarySidebar:{open:!e.secondarySidebar.open}})},{palette:i}=Object(j.a)(),c=i.primary.contrastText;return Object(h.jsxs)(xe,{className:Object(be.a)({open:e.secondarySidebar.open}),children:[e.secondarySidebar.open&&Object(h.jsx)(k.a,{onClick:a,size:"small","aria-label":"toggle",children:Object(h.jsx)(I.a,{sx:{color:c},children:"close"})}),!e.secondarySidebar.open&&Object(h.jsx)(he.a,{color:"primary","aria-label":"expand",onClick:a,children:Object(h.jsx)(I.a,{sx:{color:c},children:"settings"})})]})};var pe=Object(d.a)(C.a)((()=>({top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}))),Oe=a(1091),ue=a(1034),ge=a(1222);const fe=Object(d.a)(n.f)((e=>{let{theme:t}=e;return{color:t.palette.secondary.main,backgroundColor:t.palette.primary.dark,fontWeight:700,transform:"rotate(90deg)",marginBottom:"2.5rem",padding:".25rem .5rem",borderRadius:"4px",cursor:"pointer",letterSpacing:"1.5px",fontSize:"1rem","&:hover, &.open":{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText}}})),ye=Object(d.a)("div")((e=>{let{theme:t}=e;return{height:"100vh",width:320,position:"fixed",top:0,right:0,zIndex:50,display:"flex",flexDirection:"column",paddingBottom:"32px",boxShadow:v.b[12],background:t.palette.background.default,"& .helpText":{margin:"0px .5rem 1rem"}}})),we=Object(d.a)(pe)((()=>({width:"100%",height:"152px !important",cursor:"pointer",marginTop:"12px",marginBottom:"12px","& .layout-name":{display:"none"},"&:hover .layout-name":{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"rgba(0,0,0,0.3)",zIndex:12}}))),ve=Object(d.a)("div")((()=>({minHeight:58,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",boxShadow:v.b[6]}))),Se=Object(d.a)("img")((()=>({width:"100%"}))),ke=Object(d.a)(ee.a)((()=>({paddingLeft:"16px",paddingRight:"16px"}))),Ce=[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98},topbar:{theme:"blueDark",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"whiteBlue",fixed:!0}}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"blueDark",fixed:!0}}}}];var Ie=()=>{const[e,t]=Object(i.useState)(!1),[a,c]=Object(i.useState)(0),{settings:s,updateSettings:l}=Object(r.a)(),d=Object(j.a)().palette.text.secondary,b=()=>{t(!e)},x=e=>{c(e)};let m={...s.themes[s.activeTheme]};return Object(h.jsxs)(i.Fragment,{children:[Object(h.jsx)(Oe.a,{title:"Theme Settings",placement:"left",children:Object(h.jsx)(fe,{className:"open",onClick:b,children:"DEMOS"})}),Object(h.jsx)(o.a,{theme:m,children:Object(h.jsx)(z.a,{anchor:"right",open:e,variant:"temporary",onClose:b,ModalProps:{keepMounted:!0},children:Object(h.jsxs)(ye,{children:[Object(h.jsxs)(ve,{children:[Object(h.jsxs)(g.a,{display:"flex",children:[Object(h.jsx)(I.a,{className:"icon",color:"primary",children:"settings"}),Object(h.jsx)(n.b,{sx:{ml:1,fontSize:"1rem"},children:"Theme Settings"})]}),Object(h.jsx)(k.a,{onClick:b,children:Object(h.jsx)(I.a,{className:"icon",children:"close"})})]}),Object(h.jsxs)(g.a,{px:3,mb:2,display:"flex",children:[Object(h.jsx)(D.a,{variant:"outlined",color:0===a?"secondary":"primary",onClick:()=>x(0),sx:{mr:2},children:"Demos"}),Object(h.jsx)(D.a,{variant:"outlined",color:1===a?"secondary":"primary",onClick:()=>x(1),children:"Settings"})]}),Object(h.jsxs)(ke,{options:{suppressScrollX:!0},children:[0===a&&Object(h.jsxs)(g.a,{sx:{mb:4,mx:3},children:[Object(h.jsx)(g.a,{sx:{color:d},children:"Layouts"}),Object(h.jsx)(g.a,{display:"flex",flexDirection:"column",children:Ce.map((e=>Object(h.jsx)(we,{color:"secondary",badgeContent:"Pro",invisible:!e.isPro,children:Object(h.jsxs)(ue.a,{sx:{position:"relative"},onClick:()=>l(e.options),elevation:4,children:[Object(h.jsx)(g.a,{sx:{overflow:"hidden"},className:"layout-name",children:Object(h.jsx)(D.a,{variant:"contained",color:"secondary",children:e.name})}),Object(h.jsx)(Se,{src:e.thumbnail,alt:e.name})]})},e.name)))})]}),1===a&&Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"helpText",children:["We used React context API to control layout. Check out the"," ",Object(h.jsx)(ge.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank",children:"Documentation"})]})})]})]})})})]})};const ze=Object(d.a)("div")((e=>{let{theme:t,width:a}=e;return{position:"fixed",height:"100vh",width:a,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:t.shadows[8],backgroundColor:t.palette.primary.main,zIndex:98,transition:"all 0.15s ease",color:t.palette.text.primary,"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:e=>e.width},".matx-customizer":{right:e=>e.width}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:e=>"calc(100% - ".concat(e.width,")")}}}}}));var De=()=>{const{palette:e}=Object(j.a)(),t=e.primary.contrastText;return Object(h.jsxs)(ze,{width:"50px",className:"secondary-sidebar",children:[Object(h.jsx)(n.f,{sx:{m:"auto"}}),Object(h.jsx)(Ie,{}),Object(h.jsx)(H,{}),Object(h.jsx)(f.c,{icon:Object(h.jsx)(k.a,{sx:{my:"12px",color:t},size:"small",children:Object(h.jsx)(I.a,{children:"comments"})}),children:Object(h.jsx)(f.d,{})}),Object(h.jsx)(n.f,{sx:{m:"auto"}})]})};var Le=e=>{let{theme:t,classes:a,children:i,open:c}=e;return Object(h.jsx)(o.a,{theme:t,children:i})};var Re=()=>{const{settings:e}=Object(r.a)(),t=e.themes[e.secondarySidebar.theme];return Object(h.jsxs)(Le,{theme:t,children:[e.secondarySidebar.open&&Object(h.jsx)(De,{}),Object(h.jsx)(me,{})]})};const Te=Object(d.a)(g.a)((e=>{let{theme:t}=e;return{display:"flex",background:t.palette.background.default}})),Ne=Object(d.a)(g.a)((()=>({height:"100%",display:"flex",overflowY:"auto",overflowX:"hidden",flexDirection:"column",justifyContent:"space-between"}))),Be=Object(d.a)(ee.a)((()=>({height:"100%",position:"relative",display:"flex",flexGrow:"1",flexDirection:"column"}))),Pe=Object(d.a)(g.a)((e=>{let{width:t,secondarySidebar:a}=e;return{height:"100vh",display:"flex",flexGrow:"1",flexDirection:"column",verticalAlign:"top",marginLeft:t,position:"relative",overflow:"hidden",transition:"all 0.3s ease",marginRight:a.open?50:0}})),_e=()=>{const{settings:e,updateSettings:t}=Object(r.a)(),{layout1Settings:a,secondarySidebar:c}=e,n=e.themes[a.topbar.theme],{leftSidebar:{mode:s,show:l}}=a,d=(()=>{switch(s){case"full":return b.a;case"compact":return b.b;default:return"0px"}})(),x=Object(j.a)(),m=Object(G.a)(x.breakpoints.down("md")),O=Object(i.useRef)({isMdScreen:m,settings:e}),u="theme-".concat(x.palette.type);return Object(i.useEffect)((()=>{let{settings:e}=O.current,a=e.layout1Settings.leftSidebar.mode;if(e.layout1Settings.leftSidebar.show){t({layout1Settings:{leftSidebar:{mode:m?"close":a}}})}}),[m]),Object(h.jsxs)(Te,{className:u,children:[l&&"close"!==s&&Object(h.jsx)(je,{children:Object(h.jsx)(le,{})}),Object(h.jsxs)(Pe,{width:d,secondarySidebar:c,children:[a.topbar.show&&a.topbar.fixed&&Object(h.jsx)(o.a,{theme:n,children:Object(h.jsx)($,{fixed:!0,className:"elevation-z8"})}),e.perfectScrollbar&&Object(h.jsxs)(Be,{children:[a.topbar.show&&!a.topbar.fixed&&Object(h.jsx)(o.a,{theme:n,children:Object(h.jsx)($,{})}),Object(h.jsx)(g.a,{flexGrow:1,position:"relative",children:Object(h.jsx)(f.j,{children:Object(h.jsx)(y.b,{})})}),e.footer.show&&!e.footer.fixed&&Object(h.jsx)(p,{})]}),!e.perfectScrollbar&&Object(h.jsxs)(Ne,{children:[a.topbar.show&&!a.topbar.fixed&&Object(h.jsx)(o.a,{theme:n,children:Object(h.jsx)($,{})}),Object(h.jsx)(g.a,{flexGrow:1,position:"relative",children:Object(h.jsx)(f.j,{children:Object(h.jsx)(y.b,{})})}),e.footer.show&&!e.footer.fixed&&Object(h.jsx)(p,{})]}),e.footer.show&&e.footer.fixed&&Object(h.jsx)(p,{})]}),e.secondarySidebar.show&&Object(h.jsx)(Re,{})]})};t.default=c.a.memo(_e)}}]);