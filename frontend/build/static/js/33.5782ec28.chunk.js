(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[33],{1231:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1024),i=a(172),l=a(47),s=a(471),r=a(1065),o=a(1034),x=a(977),d=a(978),j=a(971),p=a(1078),b=a(1066),h=a(1067),m=a(1068),O=a(1069),g=a(1023),f=a(115),S=a(1);const u=Object(i.a)("div")((()=>({paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",display:"flex",alignItems:"center",justifyContent:"normal"}))),v=Object(i.a)("span")((()=>({fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}))),y=Object(i.a)(r.a)((()=>({minWidth:400,whiteSpace:"pre","& small":{height:15,width:50,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}})));var I=()=>{const[e,t]=Object(c.useState)([]),[a,n]=Object(c.useState)(""),[i,r]=Object(c.useState)([]);function I(){f.a.get("/api/v1/component-details/brand/"+localStorage.getItem("brandSelected")).then((e=>{r(e.data)}))}return Object(c.useEffect)((()=>{f.a.get("/api/v1/components").then((e=>{t(e.data)})),I()}),[]),Object(S.jsxs)(o.a,{elevation:3,sx:{pt:"20px",mb:3},children:[Object(S.jsx)(u,{children:Object(S.jsxs)(x.a,{sx:{m:1,minWidth:200},children:[Object(S.jsx)(d.a,{id:"select-helper-label-component",children:"Filtrar por componente"}),Object(S.jsxs)(j.a,{labelId:"select-helper-label-component",id:"select-helper",label:"Age",value:a,onChange:function(e){let t=e.target.value;n(t),console.info("componentId: ".concat(JSON.stringify(t))),t?f.a.get("/api/v1/component-details/brand/"+localStorage.getItem("brandSelected")+"/component/"+t).then((e=>{r(e.data)})):I()},children:[Object(S.jsx)(p.a,{value:"",children:Object(S.jsx)("em",{children:"Mostrar Todo"})}),e.map(((e,t)=>Object(S.jsx)(p.a,{value:e._id,children:e.description},t)))]})]})}),Object(S.jsx)(u,{children:Object(S.jsx)(v,{children:"Cat\xe1logo de productos"})}),Object(S.jsx)(s.a,{overflow:"auto",children:Object(S.jsxs)(y,{children:[Object(S.jsx)(b.a,{children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(m.a,{sx:{px:3},colSpan:2,children:"C\xf3digo"}),Object(S.jsx)(m.a,{sx:{px:0},colSpan:2,children:"Descripci\xf3n"}),Object(S.jsx)(m.a,{sx:{px:0},colSpan:2,children:"Marca"}),Object(S.jsx)(m.a,{sx:{px:0},colSpan:2,children:"Componente"}),Object(S.jsx)(m.a,{sx:{px:0},colSpan:2,children:"Precio"}),Object(S.jsx)(m.a,{sx:{px:0},colSpan:2,children:"Foto"})]})}),Object(S.jsx)(O.a,{children:i.map(((e,t)=>Object(S.jsxs)(h.a,{hover:!0,children:[Object(S.jsx)(m.a,{align:"left",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:e._id}),Object(S.jsx)(m.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(S.jsx)(s.a,{display:"flex",alignItems:"center",children:Object(S.jsx)(l.d,{sx:{m:0,ml:0},children:e.description})})}),Object(S.jsx)(m.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(S.jsx)(s.a,{display:"flex",alignItems:"center",children:Object(S.jsx)(l.d,{sx:{m:0,ml:0},children:e.brand.description})})}),Object(S.jsx)(m.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(S.jsx)(s.a,{display:"flex",alignItems:"center",children:Object(S.jsx)(l.d,{sx:{m:0,ml:0},children:e.component.description})})}),Object(S.jsxs)(m.a,{align:"left",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:["S/ ",e.price.toFixed(2)]}),Object(S.jsx)(m.a,{colSpan:2,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(S.jsx)(s.a,{display:"flex",alignItems:"center",children:Object(S.jsx)(g.a,{src:e.imgUrl})})})]},t)))})]})})]})},z=a(21);const T=Object(i.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"}}}));t.default=function(){const{state:e}=Object(z.g)();return console.log(e),Object(S.jsx)(c.Fragment,{children:Object(S.jsx)(T,{className:"analytics",children:Object(S.jsx)(n.a,{container:!0,spacing:3,children:Object(S.jsx)(n.a,{item:!0,lg:12,md:8,sm:12,xs:512,children:Object(S.jsx)(I,{})})})})})}}}]);