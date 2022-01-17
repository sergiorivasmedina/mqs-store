(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[6],{1036:function(e,t,a){"use strict";var o=a(0);const n=o.createContext();t.a=n},1044:function(e,t,a){"use strict";var o=a(0);const n=o.createContext();t.a=n},1065:function(e,t,a){"use strict";var o=a(4),n=a(2),c=a(0),r=(a(8),a(7)),i=a(141),s=a(1044),l=a(12),d=a(5),b=a(75),p=a(93);function j(e){return Object(b.a)("MuiTable",e)}Object(p.a)("MuiTable",["root","stickyHeader"]);var u=a(1);const O=["className","component","padding","size","stickyHeader"],m=Object(d.a)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:a}=e;return Object(n.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),h="table",g=c.forwardRef((function(e,t){const a=Object(l.a)({props:e,name:"MuiTable"}),{className:d,component:b=h,padding:p="normal",size:g="medium",stickyHeader:x=!1}=a,v=Object(o.a)(a,O),f=Object(n.a)({},a,{component:b,padding:p,size:g,stickyHeader:x}),y=(e=>{const{classes:t,stickyHeader:a}=e,o={root:["root",a&&"stickyHeader"]};return Object(i.a)(o,j,t)})(f),k=c.useMemo((()=>({padding:p,size:g,stickyHeader:x})),[p,g,x]);return Object(u.jsx)(s.a.Provider,{value:k,children:Object(u.jsx)(m,Object(n.a)({as:b,role:b===h?null:"table",ref:t,className:Object(r.a)(y.root,d),ownerState:f},v))})}));t.a=g},1066:function(e,t,a){"use strict";var o=a(2),n=a(4),c=a(0),r=(a(8),a(7)),i=a(141),s=a(1036),l=a(12),d=a(5),b=a(75),p=a(93);function j(e){return Object(b.a)("MuiTableHead",e)}Object(p.a)("MuiTableHead",["root"]);var u=a(1);const O=["className","component"],m=Object(d.a)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),h={variant:"head"},g="thead",x=c.forwardRef((function(e,t){const a=Object(l.a)({props:e,name:"MuiTableHead"}),{className:c,component:d=g}=a,b=Object(n.a)(a,O),p=Object(o.a)({},a,{component:d}),x=(e=>{const{classes:t}=e;return Object(i.a)({root:["root"]},j,t)})(p);return Object(u.jsx)(s.a.Provider,{value:h,children:Object(u.jsx)(m,Object(o.a)({as:d,className:Object(r.a)(x.root,c),ref:t,role:d===g?null:"rowgroup",ownerState:p},b))})}));t.a=x},1067:function(e,t,a){"use strict";var o=a(2),n=a(4),c=a(0),r=(a(8),a(7)),i=a(141),s=a(957),l=a(1036),d=a(12),b=a(5),p=a(75),j=a(93);function u(e){return Object(p.a)("MuiTableRow",e)}var O=Object(j.a)("MuiTableRow",["root","selected","hover","head","footer"]),m=a(1);const h=["className","component","hover","selected"],g=Object(b.a)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((e=>{let{theme:t}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(O.hover,":hover")]:{backgroundColor:t.palette.action.hover},["&.".concat(O.selected)]:{backgroundColor:Object(s.a)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(s.a)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}}})),x="tr",v=c.forwardRef((function(e,t){const a=Object(d.a)({props:e,name:"MuiTableRow"}),{className:s,component:b=x,hover:p=!1,selected:j=!1}=a,O=Object(n.a)(a,h),v=c.useContext(l.a),f=Object(o.a)({},a,{component:b,hover:p,selected:j,head:v&&"head"===v.variant,footer:v&&"footer"===v.variant}),y=(e=>{const{classes:t,selected:a,hover:o,head:n,footer:c}=e,r={root:["root",a&&"selected",o&&"hover",n&&"head",c&&"footer"]};return Object(i.a)(r,u,t)})(f);return Object(m.jsx)(g,Object(o.a)({as:b,ref:t,className:Object(r.a)(y.root,s),role:b===x?null:"row",ownerState:f},O))}));t.a=v},1068:function(e,t,a){"use strict";var o=a(4),n=a(2),c=a(0),r=(a(8),a(7)),i=a(141),s=a(957),l=a(9),d=a(1044),b=a(1036),p=a(12),j=a(5),u=a(75),O=a(93);function m(e){return Object(u.a)("MuiTableCell",e)}var h=Object(O.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),g=a(1);const x=["align","className","component","padding","scope","size","sortDirection","variant"],v=Object(j.a)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["size".concat(Object(l.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(l.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(l.a)(a.align))],a.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:a}=e;return Object(n.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(s.e)(Object(s.a)(t.palette.divider,1),.88):Object(s.b)(Object(s.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&{padding:"6px 16px",["&.".concat(h.paddingCheckbox)]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:t.palette.background.default})})),f=c.forwardRef((function(e,t){const a=Object(p.a)({props:e,name:"MuiTableCell"}),{align:s="inherit",className:j,component:u,padding:O,scope:h,size:f,sortDirection:y,variant:k}=a,C=Object(o.a)(a,x),w=c.useContext(d.a),M=c.useContext(b.a),R=M&&"head"===M.variant;let T;T=u||(R?"th":"td");let S=h;!S&&R&&(S="col");const H=k||M&&M.variant,z=Object(n.a)({},a,{align:s,component:T,padding:O||(w&&w.padding?w.padding:"normal"),size:f||(w&&w.size?w.size:"medium"),sortDirection:y,stickyHeader:"head"===H&&w&&w.stickyHeader,variant:H}),N=(e=>{const{classes:t,variant:a,align:o,padding:n,size:c,stickyHeader:r}=e,s={root:["root",a,r&&"stickyHeader","inherit"!==o&&"align".concat(Object(l.a)(o)),"normal"!==n&&"padding".concat(Object(l.a)(n)),"size".concat(Object(l.a)(c))]};return Object(i.a)(s,m,t)})(z);let A=null;return y&&(A="asc"===y?"ascending":"descending"),Object(g.jsx)(v,Object(n.a)({as:T,ref:t,className:Object(r.a)(N.root,j),"aria-sort":A,scope:S,ownerState:z},C))}));t.a=f},1069:function(e,t,a){"use strict";var o=a(2),n=a(4),c=a(0),r=(a(8),a(7)),i=a(141),s=a(1036),l=a(12),d=a(5),b=a(75),p=a(93);function j(e){return Object(b.a)("MuiTableBody",e)}Object(p.a)("MuiTableBody",["root"]);var u=a(1);const O=["className","component"],m=Object(d.a)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),h={variant:"body"},g="tbody",x=c.forwardRef((function(e,t){const a=Object(l.a)({props:e,name:"MuiTableBody"}),{className:c,component:d=g}=a,b=Object(n.a)(a,O),p=Object(o.a)({},a,{component:d}),x=(e=>{const{classes:t}=e;return Object(i.a)({root:["root"]},j,t)})(p);return Object(u.jsx)(s.a.Provider,{value:h,children:Object(u.jsx)(m,Object(o.a)({className:Object(r.a)(x.root,c),as:d,ref:t,role:d===g?null:"rowgroup",ownerState:p},b))})}));t.a=x},1220:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(1065),r=a(1066),i=a(1067),s=a(1068),l=a(1069),d=a(1030),b=a(1027),p=a(172),j=a(471),u=a(980),O=a(1018),m=a(1151),h=a(1150),g=a(1188),x=a(1110),v=a(1096),f=a(992),y=a(1070),k=a(115),C=a(1);const w=Object(p.a)(c.a)((e=>{let{theme:t}=e;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),M=n.a.forwardRef((function(e,t){return Object(C.jsx)(v.a,{direction:"up",ref:t,...e})})),R=Object(p.a)(f.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}})),T=Object(p.a)(y.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}}));var S=e=>{let{components:t,setComponents:a}=e;const[n,c]=Object(o.useState)(!1),[p,v]=Object(o.useState)(!0),[f,y]=Object(o.useState)("Activo"),[S,H]=Object(o.useState)(""),[z,N]=Object(o.useState)(null);function A(){H(""),N(null),c(!1)}function B(){if(S.length>0&&(o=S,(e=z).description!==o.description||e.status!==o.status)){const e={description:S,status:p?1:0};k.a.put("/api/v1/component/"+z._id,e).then((e=>{let o=e.data,n=t.findIndex((e=>e._id===z._id)),c=t.slice();c[n].description=o.description,c[n].status=o.status,a(c)}))}var e,o;N(null),c(!1)}function I(e){H(e.target.value)}return Object(C.jsx)(j.a,{width:"100%",overflow:"auto",children:Object(C.jsxs)(w,{children:[Object(C.jsx)(r.a,{children:Object(C.jsxs)(i.a,{children:[Object(C.jsx)(s.a,{children:"Nombre"}),Object(C.jsx)(s.a,{children:"Estado"}),Object(C.jsx)(s.a,{children:"Acci\xf3n"})]})}),Object(C.jsx)(l.a,{children:t&&t.map(((e,t)=>{return Object(C.jsxs)(i.a,{children:[Object(C.jsx)(s.a,{align:"left",children:e.description}),Object(C.jsx)(s.a,{children:(a=e.status,1===a?"Activo":0===a?"Inactivo":"Estado desconocido")}),Object(C.jsx)(s.a,{children:Object(C.jsx)(d.a,{onClick:()=>function(e){H(e.description),v(e.status);let t=e.status?"Activo":"Inactivo";y(t),N(e),c(!0)}(e),children:Object(C.jsx)(b.a,{color:"primary",children:"edit"})})}),Object(C.jsxs)(O.a,{open:n,TransitionComponent:M,keepMounted:!0,onClose:A,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(C.jsx)(g.a,{id:"alert-dialog-slide-title",children:"Modificar componente"}),Object(C.jsxs)(h.a,{children:[Object(C.jsx)(R,{id:"outlined-basic",label:"Nombre",variant:"outlined",value:S,onChange:I}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(T,{control:Object(C.jsx)(x.a,{checked:p,onChange:()=>(y(p?"Inactivo":"Activo"),void v(!p)),value:"checkedB",color:"primary"}),label:f})]}),Object(C.jsxs)(m.a,{children:[Object(C.jsx)(u.a,{onClick:A,color:"secondary",children:"Cancelar"}),Object(C.jsx)(u.a,{onClick:B,color:"primary",children:"Actualizar"})]})]})]},t);var a}))})]})})},H=a(114);const z=n.a.forwardRef((function(e,t){return Object(C.jsx)(v.a,{direction:"up",ref:t,...e})})),N=Object(p.a)(u.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}})),A=Object(p.a)(f.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}})),B=Object(p.a)(y.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}}));function I(e){let{components:t,setComponents:a}=e;const[n,c]=Object(o.useState)(!1),[r,i]=Object(o.useState)(!0),[s,l]=Object(o.useState)("Activo"),[d,b]=Object(o.useState)("");function p(){b(""),c(!1)}return Object(C.jsxs)("div",{children:[Object(C.jsx)(N,{variant:"contained",color:"primary",onClick:function(){c(!0)},children:"Agregar"}),Object(C.jsxs)(O.a,{open:n,TransitionComponent:z,keepMounted:!0,onClose:p,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(C.jsx)(g.a,{id:"alert-dialog-slide-title",children:"Agregar un nuevo componente"}),Object(C.jsxs)(h.a,{children:[Object(C.jsx)(A,{id:"outlined-basic",label:"Nombre",variant:"outlined",value:d,onChange:function(e){b(e.target.value)}}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(B,{control:Object(C.jsx)(x.a,{checked:r,onChange:()=>(l(r?"Inactivo":"Activo"),void i(!r)),value:"checkedB",color:"primary"}),label:s})]}),Object(C.jsxs)(m.a,{children:[Object(C.jsx)(u.a,{onClick:p,color:"secondary",children:"Cancelar"}),Object(C.jsx)(u.a,{onClick:function(){if(d.length>0){const e={description:d,status:r?1:0};k.a.post("/api/v1/component",e).then((e=>{const o={_id:e.data._id,description:e.data.description,status:e.data.status};let n=t.slice();n.unshift(o),a(n),p()}))}else console.log("Completar nombre del componente")},color:"primary",children:"Crear"})]})]})]})}const _=Object(p.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));t.default=()=>{const[e,t]=Object(o.useState)([]);return Object(o.useEffect)((()=>{k.a.get("/api/v1/components").then((e=>{t(e.data)}))}),[]),Object(C.jsxs)(_,{children:[Object(C.jsx)(I,{components:e,setComponents:t}),Object(C.jsx)(H.m,{title:"Gesti\xf3n de Componentes",children:Object(C.jsx)(S,{components:e,setComponents:t})}),Object(C.jsx)(j.a,{py:"12px"})]})}}}]);