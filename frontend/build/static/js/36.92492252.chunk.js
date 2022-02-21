(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[36],{1236:function(e,c,a){"use strict";a.r(c);var t=a(0),l=a.n(t),n=a(1117),o=a(1);function j(){const[e,c]=l.a.useState({checkedA:!0,checkedB:!0,checkedF:!0}),a=a=>t=>{c({...e,[a]:t.target.checked})};return Object(o.jsxs)("div",{children:[Object(o.jsx)(n.a,{checked:e.checkedA,onChange:a("checkedA"),value:"checkedA",inputProps:{"aria-label":"primary checkbox"}}),Object(o.jsx)(n.a,{checked:e.checkedB,onChange:a("checkedB"),value:"checkedB",color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),Object(o.jsx)(n.a,{value:"checkedC",inputProps:{"aria-label":"uncontrolled-checkbox"}}),Object(o.jsx)(n.a,{disabled:!0,value:"checkedD",inputProps:{"aria-label":"disabled checkbox"}}),Object(o.jsx)(n.a,{disabled:!0,checked:!0,value:"checkedE",inputProps:{"aria-label":"disabled checked checkbox"}}),Object(o.jsx)(n.a,{checked:e.checkedF,onChange:a("checkedF"),value:"checkedF",indeterminate:!0,inputProps:{"aria-label":"indeterminate checkbox"}}),Object(o.jsx)(n.a,{defaultChecked:!0,color:"default",value:"checkedG",inputProps:{"aria-label":"checkbox with default color"}})]})}var s=a(5),r=a(111),b=a(1081),d=a(1065),i=a(1146),h=a.n(i),x=a(1148),O=a.n(x),k=a(1145),u=a.n(k),m=a(1147),p=a.n(m);const v=Object(s.a)(n.a)((()=>({color:r.a[400],"&$checked":{color:r.a[600]}})));function g(){const[e,c]=l.a.useState({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),a=a=>t=>{c({...e,[a]:t.target.checked})};return Object(o.jsxs)(b.a,{row:!0,children:[Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:e.checkedA,onChange:a("checkedA"),value:"checkedA"}),label:"Secondary"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:e.checkedB,onChange:a("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{value:"checkedC"}),label:"Uncontrolled"}),Object(o.jsx)(d.a,{disabled:!0,control:Object(o.jsx)(n.a,{value:"checkedD"}),label:"Disabled"}),Object(o.jsx)(d.a,{disabled:!0,control:Object(o.jsx)(n.a,{checked:!0,value:"checkedE"}),label:"Disabled"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:e.checkedF,onChange:a("checkedF"),value:"checkedF",indeterminate:!0}),label:"Indeterminate"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(v,{color:"default",checked:e.checkedG,onChange:a("checkedG"),value:"checkedG"}),label:"Custom color"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{icon:Object(o.jsx)(u.a,{}),checkedIcon:Object(o.jsx)(h.a,{}),value:"checkedH"}),label:"Custom icon"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{icon:Object(o.jsx)(p.a,{fontSize:"small"}),checkedIcon:Object(o.jsx)(O.a,{fontSize:"small"}),value:"checkedI"}),label:"Custom size"})]})}var C=a(976),f=a(1014);var y=function(){const[e,c]=l.a.useState("female");return Object(o.jsxs)(C.a,{component:"fieldset",children:[Object(o.jsx)(f.a,{component:"legend",children:"labelPlacement"}),Object(o.jsxs)(b.a,{"aria-label":"position",name:"position",value:e,onChange:function(e){c(e.target.value)},row:!0,children:[Object(o.jsx)(d.a,{value:"top",control:Object(o.jsx)(n.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),Object(o.jsx)(d.a,{value:"start",control:Object(o.jsx)(n.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),Object(o.jsx)(d.a,{value:"bottom",control:Object(o.jsx)(n.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),Object(o.jsx)(d.a,{value:"end",control:Object(o.jsx)(n.a,{color:"primary"}),label:"End",labelPlacement:"end"})]})]})},P=a(172),B=a(978);const w=Object(P.a)("div")((e=>{let{theme:c}=e;return{display:"flex","& .formControl":{margin:c.spacing(2)}}}));function A(){const[e,c]=l.a.useState({gilad:!0,jason:!1,antoine:!1}),a=a=>t=>{c({...e,[a]:t.target.checked})},{gilad:t,jason:j,antoine:s}=e,r=2!==[t,j,s].filter((e=>e)).length;return Object(o.jsxs)(w,{children:[Object(o.jsxs)(C.a,{component:"fieldset",className:"formControl",children:[Object(o.jsx)(f.a,{component:"legend",children:"Assign responsibility"}),Object(o.jsxs)(b.a,{children:[Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:t,onChange:a("gilad"),value:"gilad"}),label:"Gilad Gray"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:j,onChange:a("jason"),value:"jason"}),label:"Jason Killian"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:s,onChange:a("antoine"),value:"antoine"}),label:"Antoine Llorca"})]}),Object(o.jsx)(B.a,{children:"Be careful"})]}),Object(o.jsxs)(C.a,{required:!0,error:r,component:"fieldset",className:"formControl",children:[Object(o.jsx)(f.a,{component:"legend",children:"Pick two"}),Object(o.jsxs)(b.a,{children:[Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:t,onChange:a("gilad"),value:"gilad"}),label:"Gilad Gray"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:j,onChange:a("jason"),value:"jason"}),label:"Jason Killian"}),Object(o.jsx)(d.a,{control:Object(o.jsx)(n.a,{checked:s,onChange:a("antoine"),value:"antoine"}),label:"Antoine Llorca"})]}),Object(o.jsx)(B.a,{children:"You can display an error"})]})]})}var G=a(114),F=a(470);const S=Object(P.a)("div")((e=>{let{theme:c}=e;return{margin:"30px",[c.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[c.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));c.default=()=>Object(o.jsxs)(S,{children:[Object(o.jsx)("div",{className:"breadcrumb",children:Object(o.jsx)(G.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Chckbox"}]})}),Object(o.jsx)(G.l,{title:"simple checkbox",children:Object(o.jsx)(j,{})}),Object(o.jsx)(F.a,{py:"12px"}),Object(o.jsx)(G.l,{title:"Checkbox with Label",children:Object(o.jsx)(g,{})}),Object(o.jsx)(F.a,{py:"12px"}),Object(o.jsx)(G.l,{title:"Checkbox with Form Group",children:Object(o.jsx)(A,{})}),Object(o.jsx)(F.a,{py:"12px"}),Object(o.jsx)(G.l,{title:"Checkbox with Different Label Placement",children:Object(o.jsx)(y,{})})]})}}]);