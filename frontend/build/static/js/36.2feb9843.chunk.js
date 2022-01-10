(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[36],{1195:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),r=a(470),s=a(1093),c=a.n(s),n=a(1133),j=a.n(n),d=a(1027),u=a(1023),b=a(1196),o=a(1);function x(){const[e,t]=i.a.useState(30);return Object(o.jsxs)(r.a,{width:200,children:[Object(o.jsx)(d.a,{id:"continuous-slider",gutterBottom:!0,children:"Volume"}),Object(o.jsxs)(u.a,{container:!0,spacing:2,children:[Object(o.jsx)(u.a,{item:!0,children:Object(o.jsx)(j.a,{})}),Object(o.jsx)(u.a,{item:!0,xs:!0,children:Object(o.jsx)(b.a,{value:e,onChange:(e,a)=>{t(a)},"aria-labelledby":"continuous-slider"})}),Object(o.jsx)(u.a,{item:!0,children:Object(o.jsx)(c.a,{})})]}),Object(o.jsx)(b.a,{disabled:!0,defaultValue:30,"aria-labelledby":"continuous-slider"})]})}var m=a(171);const O=Object(m.a)("div")((e=>{let{theme:t}=e;return{width:300,"& .margin":{height:t.spacing(3)}}})),h=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function p(e){return"".concat(e,"\xb0C")}function g(e){return h.findIndex((t=>t.value===e))+1}function v(){return Object(o.jsxs)(O,{children:[Object(o.jsx)(d.a,{id:"discrete-slider",gutterBottom:!0,children:"Temperature"}),Object(o.jsx)(b.a,{defaultValue:20,getAriaValueText:p,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0}),Object(o.jsx)("div",{className:"margin"}),Object(o.jsx)(d.a,{id:"discrete-slider-custom",gutterBottom:!0,children:"Custom marks"}),Object(o.jsx)(b.a,{defaultValue:20,getAriaValueText:p,"aria-labelledby":"discrete-slider-custom",step:10,valueLabelDisplay:"auto",marks:h}),Object(o.jsx)("div",{className:"margin"}),Object(o.jsx)(d.a,{id:"discrete-slider-restrict",gutterBottom:!0,children:"Restricted values"}),Object(o.jsx)(b.a,{defaultValue:20,valueLabelFormat:g,getAriaValueText:p,"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:h}),Object(o.jsx)("div",{className:"margin"}),Object(o.jsx)(d.a,{id:"discrete-slider-always",gutterBottom:!0,children:"Always visible"}),Object(o.jsx)(b.a,{defaultValue:80,getAriaValueText:p,"aria-labelledby":"discrete-slider-always",step:10,marks:h,valueLabelDisplay:"on"})]})}function y(e){return"".concat(e,"\xb0C")}function f(){const[e,t]=i.a.useState([20,37]);return Object(o.jsxs)(r.a,{width:300,children:[Object(o.jsx)(d.a,{id:"range-slider",gutterBottom:!0,children:"Temperature range"}),Object(o.jsx)(b.a,{value:e,onChange:(e,a)=>{t(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:y})]})}var V=a(964);function C(){const[e,t]=i.a.useState(30);return Object(o.jsxs)(r.a,{width:250,children:[Object(o.jsx)(d.a,{id:"input-slider",gutterBottom:!0,children:"Volume"}),Object(o.jsxs)(u.a,{container:!0,spacing:2,alignItems:"center",children:[Object(o.jsx)(u.a,{item:!0,children:Object(o.jsx)(c.a,{})}),Object(o.jsx)(u.a,{item:!0,xs:!0,children:Object(o.jsx)(b.a,{value:"number"===typeof e?e:0,onChange:(e,a)=>{t(a)},"aria-labelledby":"input-slider"})}),Object(o.jsx)(u.a,{item:!0,children:Object(o.jsx)(V.a,{value:e,margin:"dense",sx:{width:42},onChange:e=>{t(""===e.target.value?"":Number(e.target.value))},onBlur:()=>{e<0?t(0):e>100&&t(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}})})]})]})}function w(e){return"".concat(e,"\xb0C")}const B=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function T(){return Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)(d.a,{id:"vertical-slider",gutterBottom:!0,children:"Temperature"}),Object(o.jsxs)(r.a,{height:300,children:[Object(o.jsx)(b.a,{orientation:"vertical",getAriaValueText:w,defaultValue:30,"aria-labelledby":"vertical-slider"}),Object(o.jsx)(b.a,{disabled:!0,orientation:"vertical",getAriaValueText:w,defaultValue:30,"aria-labelledby":"vertical-slider"}),Object(o.jsx)(b.a,{orientation:"vertical",defaultValue:[20,37],"aria-labelledby":"vertical-slider",getAriaValueText:w,marks:B})]})]})}var k=a(114);const S=Object(m.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));t.default=()=>Object(o.jsxs)(S,{children:[Object(o.jsx)("div",{className:"breadcrumb",children:Object(o.jsx)(k.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Slider"}]})}),Object(o.jsx)(k.m,{title:"Continuous Slider",children:Object(o.jsx)(x,{})}),Object(o.jsx)(r.a,{py:"12px"}),Object(o.jsx)(k.m,{title:"Discrete Slider",children:Object(o.jsx)(v,{})}),Object(o.jsx)(r.a,{py:"12px"}),Object(o.jsx)(k.m,{title:"Range Slider",children:Object(o.jsx)(f,{})}),Object(o.jsx)(r.a,{py:"12px"}),Object(o.jsx)(k.m,{title:"Slider with Input",children:Object(o.jsx)(C,{})}),Object(o.jsx)(r.a,{py:"12px"}),Object(o.jsx)(k.m,{title:"Vertical Slider",children:Object(o.jsx)(T,{})})]})}}]);