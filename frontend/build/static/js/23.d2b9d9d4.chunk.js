(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[23],{1059:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(75),i=n(93);function o(e){return Object(a.a)("MuiDialogTitle",e)}const r=Object(i.a)("MuiDialogTitle",["root"]);t.a=r},1063:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(75),i=n(93);function o(e){return Object(a.a)("MuiListItemText",e)}const r=Object(i.a)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.a=r},1064:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(75),i=n(93);function o(e){return Object(a.a)("MuiListItemIcon",e)}const r=Object(i.a)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.a=r},1075:function(e,t,n){"use strict";var a=n(4),i=n(2),o=n(0),r=(n(8),n(7)),c=n(141),s=n(957),l=n(5),d=n(12),p=n(290),b=n(1021),j=n(76),u=n(32),x=n(465),m=n(1064),O=n(1063),g=n(75),f=n(93);function h(e){return Object(g.a)("MuiMenuItem",e)}var v=Object(f.a)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),y=n(1);const S=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],w=Object(l.a)(b.a,{shouldForwardProp:e=>Object(l.b)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:n}=e;return Object(i.a)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat(t.palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:t.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(v.selected)]:{backgroundColor:Object(s.a)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(v.focusVisible)]:{backgroundColor:Object(s.a)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(v.selected,":hover")]:{backgroundColor:Object(s.a)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Object(s.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(v.focusVisible)]:{backgroundColor:t.palette.action.focus},["&.".concat(v.disabled)]:{opacity:t.palette.action.disabledOpacity},["& + .".concat(x.a.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(x.a.inset)]:{marginLeft:52},["& .".concat(O.a.root)]:{marginTop:0,marginBottom:0},["& .".concat(O.a.inset)]:{paddingLeft:36},["& .".concat(m.a.root)]:{minWidth:36}},!n.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},n.dense&&Object(i.a)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(m.a.root," svg")]:{fontSize:"1.25rem"}}))})),C=o.forwardRef((function(e,t){const n=Object(d.a)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:l="li",dense:b=!1,divider:x=!1,disableGutters:m=!1,focusVisibleClassName:O,role:g="menuitem",tabIndex:f}=n,v=Object(a.a)(n,S),C=o.useContext(p.a),k={dense:b||C.dense||!1,disableGutters:m},E=o.useRef(null);Object(j.a)((()=>{s&&E.current&&E.current.focus()}),[s]);const I=Object(i.a)({},n,{dense:k.dense,divider:x,disableGutters:m}),T=(e=>{const{disabled:t,dense:n,divider:a,disableGutters:o,selected:r,classes:s}=e,l={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",a&&"divider",r&&"selected"]},d=Object(c.a)(l,h,s);return Object(i.a)({},s,d)})(n),M=Object(u.a)(E,t);let R;return n.disabled||(R=void 0!==f?f:-1),Object(y.jsx)(p.a.Provider,{value:k,children:Object(y.jsx)(w,Object(i.a)({ref:M,role:g,tabIndex:R,component:l,focusVisibleClassName:Object(r.a)(T.focusVisible,O)},v,{ownerState:I,classes:T}))})}));t.a=C},1085:function(e,t,n){"use strict";var a=n(2),i=n(4),o=n(0),r=(n(8),n(468)),c=n(289),s=n(32),l=n(38),d=n(53),p=n(81),b=n(220),j=n(1);const u=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function x(e,t,n){var a;const i=function(e,t,n){const a=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),o=Object(b.a)(t);let r;if(t.fakeTransform)r=t.fakeTransform;else{const e=o.getComputedStyle(t);r=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let c=0,s=0;if(r&&"none"!==r&&"string"===typeof r){const e=r.split("(")[1].split(")")[0].split(",");c=parseInt(e[4],10),s=parseInt(e[5],10)}return"left"===e?"translateX(".concat(i?i.right+c-a.left:o.innerWidth+c-a.left,"px)"):"right"===e?"translateX(-".concat(i?a.right-i.left-c:a.left+a.width-c,"px)"):"up"===e?"translateY(".concat(i?i.bottom+s-a.top:o.innerHeight+s-a.top,"px)"):"translateY(-".concat(i?a.top-i.top+a.height-s:a.top+a.height-s,"px)")}(e,t,"function"===typeof(a=n)?a():a);i&&(t.style.webkitTransform=i,t.style.transform=i)}const m={enter:d.c.easeOut,exit:d.c.sharp},O={enter:d.b.enteringScreen,exit:d.b.leavingScreen},g=o.forwardRef((function(e,t){const{addEndListener:n,appear:d=!0,children:g,container:f,direction:h="down",easing:v=m,in:y,onEnter:S,onEntered:w,onEntering:C,onExit:k,onExited:E,onExiting:I,style:T,timeout:M=O,TransitionComponent:R=r.a}=e,N=Object(i.a)(e,u),L=Object(l.a)(),z=o.useRef(null),B=Object(s.a)(g.ref,z),D=Object(s.a)(B,t),F=e=>t=>{e&&(void 0===t?e(z.current):e(z.current,t))},V=F(((e,t)=>{x(h,e,f),Object(p.b)(e),S&&S(e,t)})),G=F(((e,t)=>{const n=Object(p.a)({timeout:M,style:T,easing:v},{mode:"enter"});e.style.webkitTransition=L.transitions.create("-webkit-transform",Object(a.a)({},n)),e.style.transition=L.transitions.create("transform",Object(a.a)({},n)),e.style.webkitTransform="none",e.style.transform="none",C&&C(e,t)})),W=F(w),A=F(I),H=F((e=>{const t=Object(p.a)({timeout:M,style:T,easing:v},{mode:"exit"});e.style.webkitTransition=L.transitions.create("-webkit-transform",t),e.style.transition=L.transitions.create("transform",t),x(h,e,f),k&&k(e)})),J=F((e=>{e.style.webkitTransition="",e.style.transition="",E&&E(e)})),P=o.useCallback((()=>{z.current&&x(h,z.current,f)}),[h,f]);return o.useEffect((()=>{if(y||"down"===h||"right"===h)return;const e=Object(c.a)((()=>{z.current&&x(h,z.current,f)})),t=Object(b.a)(z.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[h,y,f]),o.useEffect((()=>{y||P()}),[y,P]),Object(j.jsx)(R,Object(a.a)({nodeRef:z,onEnter:V,onEntered:W,onEntering:G,onExit:H,onExited:J,onExiting:A,addEndListener:e=>{n&&n(z.current,e)},appear:d,in:y,timeout:M},N,{children:(e,t)=>o.cloneElement(g,Object(a.a)({ref:D,style:Object(a.a)({visibility:"exited"!==e||y?void 0:"hidden"},T,g.props.style)},t))}))}));t.a=g},1119:function(e,t,n){"use strict";var a=n(4),i=n(2),o=n(0),r=(n(8),n(7)),c=n(141),s=n(5),l=n(12),d=n(75),p=n(93);function b(e){return Object(d.a)("MuiDialogContent",e)}Object(p.a)("MuiDialogContent",["root","dividers"]);var j=n(1059),u=n(1);const x=["className","dividers"],m=Object(s.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dividers&&t.dividers]}})((e=>{let{theme:t,ownerState:n}=e;return Object(i.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}:{[".".concat(j.a.root," + &")]:{paddingTop:0}})})),O=o.forwardRef((function(e,t){const n=Object(l.a)({props:e,name:"MuiDialogContent"}),{className:o,dividers:s=!1}=n,d=Object(a.a)(n,x),p=Object(i.a)({},n,{dividers:s}),j=(e=>{const{classes:t,dividers:n}=e,a={root:["root",n&&"dividers"]};return Object(c.a)(a,b,t)})(p);return Object(u.jsx)(m,Object(i.a)({className:Object(r.a)(j.root,o),ownerState:p,ref:t},d))}));t.a=O},1120:function(e,t,n){"use strict";var a=n(4),i=n(2),o=n(0),r=(n(8),n(7)),c=n(141),s=n(5),l=n(12),d=n(75),p=n(93);function b(e){return Object(d.a)("MuiDialogActions",e)}Object(p.a)("MuiDialogActions",["root","spacing"]);var j=n(1);const u=["className","disableSpacing"],x=Object(s.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return Object(i.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=o.forwardRef((function(e,t){const n=Object(l.a)({props:e,name:"MuiDialogActions"}),{className:o,disableSpacing:s=!1}=n,d=Object(a.a)(n,u),p=Object(i.a)({},n,{disableSpacing:s}),m=(e=>{const{classes:t,disableSpacing:n}=e,a={root:["root",!n&&"spacing"]};return Object(c.a)(a,b,t)})(p);return Object(j.jsx)(x,Object(i.a)({className:Object(r.a)(m.root,o),ownerState:p,ref:t},d))}));t.a=m},1248:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(1024),r=n(172),c=n(47),s=n(471),l=n(1076),d=n(1034),p=n(977),b=n(978),j=n(971),u=n(1075),x=n(1077),m=n(1078),O=n(1079),g=n(1080),f=n(1030),h=n(1027),v=n(980),y=n(38),S=n(964),w=n(1258),C=n(473),k=n(1028),E=n(1112),I=n.n(E),T=n(1113),M=n.n(T),R=n(1109),N=n.n(R),L=n(1);var z=function(e){let{endpoint:t,photos:n,description:i,price:o,brandName:r,componentName:c}=e;const s=i+" - S/ "+o+" ("+r+", "+c+")",l=Object(y.a)(),[d,p]=Object(a.useState)(0),b=n.length;return Object(L.jsxs)(S.a,{sx:{maxWidth:400,flexGrow:1},children:[Object(L.jsx)(C.a,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:Object(L.jsx)(k.a,{children:s})}),Object(L.jsx)(N.a,{axis:"rtl"===l.direction?"x-reverse":"x",index:d,onChangeIndex:e=>{p(e)},enableMouseEvents:!0,children:n.map(((e,n)=>Object(L.jsx)("div",{children:Math.abs(d-n)<=2?Object(L.jsx)(S.a,{component:"img",sx:{maxHeight:300,display:"block",maxWidth:800,overflow:"hidden"},src:t+e.replace("/","%2F"),alt:t+e.replace("/","%2F")}):null},t+e.replace("/","%2F"))))}),Object(L.jsx)(w.a,{steps:b,position:"static",activeStep:d,nextButton:Object(L.jsxs)(v.a,{size:"small",onClick:()=>{p((e=>e+1))},disabled:d===b-1,children:["Next","rtl"===l.direction?Object(L.jsx)(I.a,{}):Object(L.jsx)(M.a,{})]}),backButton:Object(L.jsxs)(v.a,{size:"small",onClick:()=>{p((e=>e-1))},disabled:0===d,children:["rtl"===l.direction?Object(L.jsx)(M.a,{}):Object(L.jsx)(I.a,{}),"Back"]})})]})},B=n(1085),D=n(1018),F=n(1119),V=n(1120),G=n(115);const W=Object(r.a)("div")((()=>({paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",display:"flex",alignItems:"center",justifyContent:"normal"}))),A=Object(r.a)("span")((()=>({fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}))),H=Object(r.a)(l.a)((()=>({minWidth:400,whiteSpace:"pre","& small":{height:15,width:50,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}))),J=i.a.forwardRef((function(e,t){return Object(L.jsx)(B.a,{direction:"up",ref:t,...e})}));var P=()=>{const e="http://3.82.209.241:8080/api/v1/images/",[t,n]=Object(a.useState)(e),[i,o]=Object(a.useState)(!1),[r,l]=Object(a.useState)([]),[y,S]=Object(a.useState)(""),[w,C]=Object(a.useState)([]),k={photos:[],description:null,price:null,brand:{description:null},component:{description:null}},[E,I]=Object(a.useState)(k);function T(){G.a.get("/api/v1/component-details/brand/"+localStorage.getItem("brandSelected")).then((e=>{C(e.data)}))}function M(){I(k),o(!1)}return Object(a.useEffect)((()=>{G.a.get("/api/v1/components").then((e=>{l(e.data)})),T()}),[]),Object(L.jsxs)(d.a,{elevation:3,sx:{pt:"20px",mb:3},children:[Object(L.jsx)(W,{children:Object(L.jsxs)(p.a,{sx:{m:1,minWidth:200},children:[Object(L.jsx)(b.a,{id:"select-helper-label-component",children:"Filtrar por componente"}),Object(L.jsxs)(j.a,{labelId:"select-helper-label-component",id:"select-helper",label:"Age",value:y,onChange:function(e){let t=e.target.value;S(t),console.info("componentId: ".concat(JSON.stringify(t))),t?G.a.get("/api/v1/component-details/brand/"+localStorage.getItem("brandSelected")+"/component/"+t).then((e=>{C(e.data)})):T()},children:[Object(L.jsx)(u.a,{value:"",children:Object(L.jsx)("em",{children:"Mostrar Todo"})}),r.map(((e,t)=>Object(L.jsx)(u.a,{value:e._id,children:e.description},t)))]})]})}),Object(L.jsx)(W,{children:Object(L.jsx)(A,{children:"Cat\xe1logo de productos"})}),Object(L.jsx)(s.a,{overflow:"auto",children:Object(L.jsxs)(H,{children:[Object(L.jsx)(x.a,{children:Object(L.jsxs)(m.a,{children:[Object(L.jsx)(O.a,{sx:{px:3},colSpan:2,children:"C\xf3digo"}),Object(L.jsx)(O.a,{sx:{px:0},colSpan:2,children:"Descripci\xf3n"}),Object(L.jsx)(O.a,{sx:{px:0},colSpan:2,children:"Marca"}),Object(L.jsx)(O.a,{sx:{px:0},colSpan:2,children:"Componente"}),Object(L.jsx)(O.a,{sx:{px:0},colSpan:2,children:"Precio"}),Object(L.jsx)(O.a,{sx:{px:0},colSpan:2,children:"Foto"})]})}),Object(L.jsx)(g.a,{children:w.map(((a,r)=>Object(L.jsxs)(m.a,{hover:!0,children:[Object(L.jsx)(O.a,{align:"left",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:a._id}),Object(L.jsx)(O.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(L.jsx)(s.a,{display:"flex",alignItems:"center",children:Object(L.jsx)(c.d,{sx:{m:0,ml:0},children:a.description})})}),Object(L.jsx)(O.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(L.jsx)(s.a,{display:"flex",alignItems:"center",children:Object(L.jsx)(c.d,{sx:{m:0,ml:0},children:a.brand.description})})}),Object(L.jsx)(O.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(L.jsx)(s.a,{display:"flex",alignItems:"center",children:Object(L.jsx)(c.d,{sx:{m:0,ml:0},children:a.component.description})})}),Object(L.jsxs)(O.a,{align:"left",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:["S/ ",a.price.toFixed(2)]}),Object(L.jsx)(O.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(L.jsx)(f.a,{onClick:()=>function(t){let a=JSON.parse(JSON.stringify(t));0===t.photos.length?(a.photos.push(""),n("http://3.82.209.241:3000/assets/images/mqs/image_not_available.png")):n(e),I(a),o(!0)}(a),children:Object(L.jsx)(h.a,{color:"primary",children:"photo"})})}),Object(L.jsxs)(D.a,{open:i,TransitionComponent:J,keepMounted:!0,onClose:M,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(L.jsx)(F.a,{children:Object(L.jsx)(z,{endpoint:t,photos:E.photos,description:E.description,price:E.price,brandName:E.brand.description,componentName:E.component.description})}),Object(L.jsx)(V.a,{children:Object(L.jsx)(v.a,{onClick:M,color:"secondary",children:"Cerrar"})})]})]},r)))})]})})]})},_=n(21);const Y=Object(r.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"}}}));t.default=function(){const{state:e}=Object(_.g)();return console.log(e),Object(L.jsx)(a.Fragment,{children:Object(L.jsx)(Y,{className:"analytics",children:Object(L.jsx)(o.a,{container:!0,spacing:3,children:Object(L.jsx)(o.a,{item:!0,lg:12,md:8,sm:12,xs:512,children:Object(L.jsx)(P,{})})})})})}}}]);