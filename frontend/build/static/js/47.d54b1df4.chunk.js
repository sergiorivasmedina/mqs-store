(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[47],{1245:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(1077),l=a(1068),r=a(992),s=a(1058),o=a(1078),d=a(1079),j=a(1080),b=a(1081),u=a(1029),O=a(1026),x=a(1018),h=a(1092),m=a(1082),p=a(1023),g=a(1239),v=a(1066),f=a(1083),C=a(980),S=a(172),y=a(471),_=a(141),k=a(1);const A=Object(S.a)(c.a)((e=>{let{theme:t}=e;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0}}}}})),N=i.a.forwardRef((function(e,t){return Object(k.jsx)(l.a,{direction:"up",ref:t,...e})})),R=Object(S.a)(r.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}})),w=Object(S.a)(s.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}}));var B=e=>{let{users:t,setUsers:a,roleSuggestion:i,brandsAvailable:c}=e;const[l,s]=Object(n.useState)(""),[S,B]=Object(n.useState)(""),[I,E]=Object(n.useState)(""),[U,L]=Object(n.useState)(""),[M,T]=Object(n.useState)(""),[W,q]=Object(n.useState)(""),[F,J]=Object(n.useState)(""),[V,z]=Object(n.useState)("Activo"),[D,G]=Object(n.useState)(!1),[P,H]=Object(n.useState)(1),[K,Q]=Object(n.useState)(null),[X,Y]=Object(n.useState)([]),[Z,$]=Object(n.useState)([]),[ee,te]=Object(n.useState)(!1);function ae(){s(""),B(""),E(""),L(""),q(""),T(""),J(""),H(1),Y([]),Q(null),G(!1)}function ne(e){B(e.target.value)}function ie(e){L(e.target.value)}function ce(e){E(e.target.value)}function le(e){T(e.target.value)}function re(e){q(e.target.value)}function se(e){J(e.target.value)}function oe(){const e={name:S,lastName:I,email:U,cellphone:M,companyName:W,ruc:F,status:P,idRole:K,availableBrands:X};_.a.put("/api/v1/user/"+l,e).then((e=>{let n=e.data,i=t.findIndex((e=>e._id===l)),c=t.slice();c[i]=n,a(c),ae()})).catch((e=>{alert("No se pudo editar. Contactar administrador"),console.log(e)}))}function de(){s(""),B(""),L(""),te(!1)}function je(){_.a.delete("/api/v1/user/"+l).then((e=>{console.info("Se elimin\xf3 usuario con id: ".concat(l))}));let e=t.slice();e=e.filter((e=>e._id!==l)),a(e),de()}return Object(k.jsx)(y.a,{width:"100%",overflow:"auto",children:Object(k.jsxs)(A,{children:[Object(k.jsx)(o.a,{children:Object(k.jsxs)(d.a,{children:[Object(k.jsx)(j.a,{children:"Nombre"}),Object(k.jsx)(j.a,{children:"Apellido"}),Object(k.jsx)(j.a,{children:"Correo"}),Object(k.jsx)(j.a,{children:"Celular"}),Object(k.jsx)(j.a,{children:"Empresa"}),Object(k.jsx)(j.a,{children:"RUC"}),Object(k.jsx)(j.a,{children:"Rol"}),Object(k.jsx)(j.a,{children:"Estado"}),Object(k.jsx)(j.a,{children:"Acci\xf3n"})]})}),Object(k.jsx)(b.a,{children:t&&t.map(((e,t)=>{return Object(k.jsxs)(d.a,{children:[Object(k.jsx)(j.a,{align:"left",children:e.name}),Object(k.jsx)(j.a,{children:e.lastName}),Object(k.jsx)(j.a,{children:e.email}),Object(k.jsx)(j.a,{children:e.cellphone}),Object(k.jsx)(j.a,{children:e.companyName}),Object(k.jsx)(j.a,{children:e.ruc}),Object(k.jsx)(j.a,{children:e.role.description}),Object(k.jsx)(j.a,{children:(a=e.status,1===a?"Activo":0===a?"Inactivo":"Estado desconocido")}),Object(k.jsxs)(j.a,{children:[Object(k.jsx)(u.a,{onClick:()=>function(e){s(e._id),B(e.name),E(e.lastName),L(e.email),q(e.companyName),T(e.cellphone),J(e.ruc),H(e.status),Y(e.availableBrands);let t=c.filter((function(t){return 0===e.availableBrands.filter((function(e){return e._id===t._id})).length}));$(t);let a=e.status?"Activo":"Inactivo";z(a),Q(e.role),G(!0)}(e),children:Object(k.jsx)(O.a,{color:"secondary",children:"edit"})}),Object(k.jsx)(u.a,{onClick:()=>function(e){s(e._id),B(e.name),L(e.email),te(!0)}(e),children:Object(k.jsx)(O.a,{color:"delete",children:"delete"})})]}),Object(k.jsxs)(x.a,{open:D,TransitionComponent:N,keepMounted:!0,onClose:ae,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(k.jsx)(h.a,{id:"alert-dialog-slide-title",children:"Modificar usuario"}),Object(k.jsx)(m.a,{children:Object(k.jsxs)(p.a,{container:!0,spacing:6,children:[Object(k.jsxs)(p.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(k.jsx)(R,{id:"outlined-basic",label:"Nombre",variant:"outlined",value:S,onChange:ne}),Object(k.jsx)("br",{}),Object(k.jsx)(R,{id:"outlined-basic",label:"Apellido",variant:"outlined",value:I,onChange:ce}),Object(k.jsx)("br",{}),Object(k.jsx)(R,{id:"outlined-basic",label:"Correo",variant:"outlined",type:"email",value:U,onChange:ie}),Object(k.jsx)("br",{})]}),Object(k.jsxs)(p.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(k.jsx)(R,{id:"outlined-basic",label:"Celular",variant:"outlined",value:M,onChange:le}),Object(k.jsx)("br",{}),Object(k.jsx)(R,{id:"outlined-basic",label:"Nombre de empresa",variant:"outlined",value:W,onChange:re}),Object(k.jsx)("br",{}),Object(k.jsx)(R,{id:"outlined-basic",label:"RUC",variant:"outlined",value:F,onChange:se}),Object(k.jsx)("br",{})]}),Object(k.jsxs)(p.a,{item:!0,lg:12,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(k.jsx)(n.Fragment,{children:Object(k.jsx)(g.a,{isOptionEqualToValue:(e,t)=>e._id===t._id,value:K,options:i,getOptionLabel:e=>e.description,onChange:(e,t)=>{Q(t||null)},renderInput:e=>Object(k.jsx)(r.a,{...e,label:"Rol",variant:"outlined",fullWidth:!0})})}),Object(k.jsx)("br",{}),Object(k.jsx)(g.a,{multiple:!0,id:"tags-standard",options:Z,getOptionLabel:e=>e.description,value:X,onChange:(e,t)=>{Y(t);let a=c.filter((function(e){return 0===t.filter((function(t){return t._id===e._id})).length}));$(a)},renderInput:e=>Object(k.jsx)(r.a,{...e,variant:"standard",label:"Marcas habilitadas",placeholder:"Buscar",fullWidth:!0})}),Object(k.jsx)("br",{}),Object(k.jsx)(w,{control:Object(k.jsx)(v.a,{checked:P,onChange:()=>(z(P?"Inactivo":"Activo"),void H(!P)),value:"checkedB",color:"primary"}),label:V})]})]})}),Object(k.jsxs)(f.a,{children:[Object(k.jsx)(C.a,{onClick:ae,color:"secondary",children:"Cancelar"}),Object(k.jsx)(C.a,{onClick:oe,color:"primary",children:"Actualizar"})]})]}),Object(k.jsxs)(x.a,{open:ee,TransitionComponent:N,keepMounted:!0,onClose:de,"aria-labelledby":"alert-dialog-delete","aria-describedby":"alert-dialog-delete-description",children:[Object(k.jsx)(h.a,{id:"alert-dialog-slide-title",children:'Desea eliminar usuario "'.concat(S," (").concat(U,')" ?')}),Object(k.jsxs)(f.a,{children:[Object(k.jsx)(C.a,{onClick:de,color:"secondary",children:"Cancelar"}),Object(k.jsx)(C.a,{onClick:je,color:"primary",children:"Eliminar"})]})]})]},t);var a}))})]})})},I=a(114);const E=i.a.forwardRef((function(e,t){return Object(k.jsx)(l.a,{direction:"up",ref:t,...e})})),U=Object(S.a)(C.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}})),L=Object(S.a)(r.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}})),M=Object(S.a)(s.a)((e=>{let{theme:t}=e;return{margin:t.spacing(1)}}));function T(e){let{users:t,setUsers:a,roleSuggestion:i,brandsAvailable:c}=e;const[l,s]=Object(n.useState)(!1),[o,d]=Object(n.useState)(""),[j,b]=Object(n.useState)(""),[u,O]=Object(n.useState)(""),[S,y]=Object(n.useState)(""),[A,N]=Object(n.useState)(""),[R,w]=Object(n.useState)(""),[B,I]=Object(n.useState)(""),[T,W]=Object(n.useState)("Activo"),[q,F]=Object(n.useState)(1),[J,V]=Object(n.useState)(null),[z,D]=Object(n.useState)([]),[G,P]=Object(n.useState)([]);function H(){s(!1),d(""),b(""),O(""),y(""),N(""),w(""),I(""),W("Activo"),F(1),V(null),D([]),P(c)}return Object(k.jsxs)("div",{children:[Object(k.jsx)(U,{variant:"contained",color:"primary",onClick:function(){P(c),s(!0)},children:"Agregar"}),Object(k.jsxs)(x.a,{open:l,TransitionComponent:E,keepMounted:!0,onClose:H,"aria-labelledby":"create_user-dialog","aria-describedby":"create_user-dialog-description",children:[Object(k.jsx)(h.a,{id:"create_user-dialog",children:"Agregar un nuevo usuario"}),Object(k.jsx)(m.a,{children:Object(k.jsxs)(p.a,{container:!0,spacing:6,children:[Object(k.jsxs)(p.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(k.jsx)(L,{id:"outlined-basic",label:"Nombre",variant:"outlined",value:o,onChange:(e,t)=>{d(e.target.value)}}),Object(k.jsx)("br",{}),Object(k.jsx)(L,{id:"outlined-basic",label:"Apellido",variant:"outlined",value:j,onChange:(e,t)=>{b(e.target.value)}}),Object(k.jsx)("br",{}),Object(k.jsx)(L,{id:"outlined-basic",label:"Correo",variant:"outlined",type:"email",value:u,onChange:(e,t)=>{O(e.target.value)}}),Object(k.jsx)("br",{}),Object(k.jsx)(L,{id:"outlined-basic",label:"Contrase\xf1a",variant:"outlined",value:S,onChange:(e,t)=>{y(e.target.value)}})]}),Object(k.jsxs)(p.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(k.jsx)(L,{id:"outlined-basic",label:"Celular",variant:"outlined",value:A,onChange:(e,t)=>{N(e.target.value)}}),Object(k.jsx)("br",{}),Object(k.jsx)(L,{id:"outlined-basic",label:"Nombre de empresa",variant:"outlined",value:R,onChange:(e,t)=>{w(e.target.value)}}),Object(k.jsx)("br",{}),Object(k.jsx)(L,{id:"outlined-basic",label:"RUC",variant:"outlined",value:B,onChange:(e,t)=>{I(e.target.value)}}),Object(k.jsx)("br",{}),Object(k.jsx)(n.Fragment,{children:Object(k.jsx)(g.a,{isOptionEqualToValue:(e,t)=>e._id===t._id,value:J,options:i,getOptionLabel:e=>e.description,onChange:(e,t)=>{V(t)},renderInput:e=>Object(k.jsx)(r.a,{...e,label:"Rol",variant:"outlined",fullWidth:!0})})})]}),Object(k.jsxs)(p.a,{item:!0,lg:12,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(k.jsx)("br",{}),Object(k.jsx)(g.a,{multiple:!0,id:"tags-standard",options:G,getOptionLabel:e=>e.description,value:z,onChange:(e,t)=>{D(t);let a=c.filter((function(e){return 0===t.filter((function(t){return t._id===e._id})).length}));P(a)},renderInput:e=>Object(k.jsx)(r.a,{...e,variant:"standard",label:"Marcas habilitadas",placeholder:"Buscar",fullWidth:!0})}),Object(k.jsx)("br",{}),Object(k.jsx)(M,{control:Object(k.jsx)(v.a,{checked:q,onChange:()=>(W(q?"Inactivo":"Activo"),void F(!q)),value:"checkedB",color:"primary"}),label:T})]})]})}),Object(k.jsxs)(f.a,{children:[Object(k.jsx)(C.a,{onClick:H,color:"secondary",children:"Cancelar"}),Object(k.jsx)(C.a,{onClick:function(){if(o&&u&&S&&q&&J){const e={name:o,lastName:j,mail:u,password:S,cellphone:A,companyName:R,ruc:B,status:q,idRole:J._id,availableBrands:z};_.a.post("/api/v1/user",e).then((e=>{const n={_id:e.data._id,name:e.data.name,lastName:e.data.lastName,email:e.data.mail,cellphone:e.data.cellphone,companyName:e.data.companyName,ruc:e.data.ruc,role:{_id:e.data.idRole,description:J.description},status:e.data.status};let i=t.slice();i.unshift(n),a(i),H()}))}else alert("Por favor llenar campos requeridos: nombre, correo, contrase\xf1a, rol.")},color:"primary",children:"Crear"})]})]})]})}const W=Object(S.a)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));t.default=()=>{const[e,t]=Object(n.useState)([]),[a,i]=Object(n.useState)([]),[c,l]=Object(n.useState)([]);return Object(n.useEffect)((()=>{_.a.get("/api/v1/users").then((e=>{t(e.data)})),_.a.get("/api/v1/roles").then((e=>{i(e.data)})),_.a.get("/api/v1/brands").then((e=>{l(e.data)}))}),[]),Object(k.jsxs)(W,{children:[Object(k.jsx)(T,{users:e,setUsers:t,roleSuggestion:a,brandsAvailable:c}),Object(k.jsx)(I.l,{title:"Gesti\xf3n de usuarios",children:Object(k.jsx)(B,{users:e,setUsers:t,roleSuggestion:a,brandsAvailable:c})}),Object(k.jsx)(y.a,{py:"12px"})]})}}}]);