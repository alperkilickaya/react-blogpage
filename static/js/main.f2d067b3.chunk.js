(this["webpackJsonpregister-form-validation"]=this["webpackJsonpregister-form-validation"]||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),s=(a(140),a(141),a(51)),o=a(25),l=a(17),d=a(36),u=a.n(d),j=a(57),h=a(44),b=(a(146),a(147),h.a.initializeApp({apiKey:"AIzaSyA5bJGRVva4FQaHT2-QWxCCJil_2s6K1zY",authDomain:"react-blogpage.firebaseapp.com",projectId:"react-blogpage",storageBucket:"react-blogpage.appspot.com",messagingSenderId:"116206546480",appId:"1:116206546480:web:dedc02a5d8ce100e2a87f5"})),p=function(){var e=Object(j.a)(u.a.mark((function e(t,a,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.auth().createUserWithEmailAndPassword(t,a);case 3:return r=h.a.auth().currentUser,e.next=6,r.updateProfile({username:n});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Bu mail ile daha \xf6nce kay\u0131t olu\u015fturulmu\u015f!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),x=function(e,t){return h.a.auth().signInWithEmailAndPassword(e,t)},g=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.auth().onAuthStateChanged((function(e){t(e||null)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new h.a.auth.GoogleAuthProvider).setCustomParameters({prompt:"select_account"}),h.a.auth().signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.auth().signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=b,v=a(4),w=Object(n.createContext)();var C=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){g(c)}),[]),Object(v.jsx)(w.Provider,{value:{currentUser:r},children:e.children})},k=a(90),y=a(124);function S(e){var t=e.component,a=Object(y.a)(e,["component"]),r=Object(n.useContext)(w).currentUser;return console.log(r),Object(v.jsx)(o.b,Object(k.a)(Object(k.a)({},a),{},{render:function(e){return r?Object(v.jsx)(t,Object(k.a)({},e)):Object(v.jsx)(o.a,{to:"/login"})}}))}var W=a.p+"static/media/logo.6ce24c58.svg",I=a(226),E=a(245),N=a(244),P=a(246),z=a(248),A=a(247),L=a(116),B=a.n(L),F=a(240),q=a(238),T=Object(I.a)({toolbar:{backgroundColor:"#1B6682"},logo:{width:"60px"}}),G=function(){var e=Object(o.g)(),t=Object(n.useContext)(w).currentUser,a=r.a.useState(!0),c=Object(l.a)(a,2),i=(c[0],c[1],r.a.useState(null)),s=Object(l.a)(i,2),d=s[0],u=s[1],j=T();return Object(v.jsx)(N.a,{sx:{flexGrow:1},children:Object(v.jsx)(E.a,{position:"static",className:j.appbar,children:Object(v.jsxs)(P.a,{className:j.toolbar,children:[Object(v.jsx)(A.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:function(){return e.push("/")},children:Object(v.jsx)("img",{src:W,alt:"",className:j.logo})}),Object(v.jsx)(z.a,{align:"start",variant:"h6",component:"div",sx:{cursor:"pointer"},onClick:function(){return e.push("/")},children:Object(v.jsx)("span",{children:"Tatangalar"})}),Object(v.jsx)(z.a,{align:"start",variant:"h6",component:"div",sx:{flexGrow:1}}),Object(v.jsx)(A.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit",children:Object(v.jsx)(B.a,{})}),Object(v.jsx)(q.a,{id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(d),onClose:function(){u(null)},children:t?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(F.a,{children:"Profile"}),Object(v.jsx)(F.a,{onClick:function(){return e.push("/newblog")},children:"Add Blog"}),Object(v.jsx)(F.a,{onClick:function(){m(),e.push("/")},children:"Logout"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(F.a,{onClick:function(){return e.push("/login")},children:"Login"}),Object(v.jsx)(F.a,{onClick:function(){return e.push("/register")},children:"Register"})]})})]})})})},H=a(235),R=a(249),U=a(237),J=a(241),D=a(117),K=a.n(D),M=a(87),Q=a.n(M),_=Object(I.a)({container:{backgroundImage:"url(".concat("https://picsum.photos/1200/900",")"),backgroundSize:"100% 100%",minWidth:"100%",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},formLogin:{maxWidth:"350px",minHeight:"20vh",background:"white",borderRadius:"10px",padding:"10px",boxShadow:"10px 10px 5px 0px rgb(0 0 0 / 75%)"},paper:{padding:20,height:"70vh",width:"380px",margin:"20px auto"},avatar:{backgroundColor:"#1B6682",width:"100px",height:"100px"},google:{color:"red"}}),V=function(){var e=Object(o.g)(),t=_(),a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),d=Object(l.a)(s,2),h=d[0],b=d[1],p=function(){var t=Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={email:c,password:h},t.prev=1,t.next=4,x(a.email,a.password);case 4:e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert("Kullan\u0131c\u0131 Ad\u0131 veya \u015eifre Hatal\u0131!");case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return Object(v.jsx)(H.a,{className:t.container,children:Object(v.jsxs)(H.a,{container:!0,spacing:3,className:t.formLogin,children:[Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsxs)(H.a,{align:"center",children:[Object(v.jsx)(R.a,{className:t.avatar,children:Object(v.jsx)(K.a,{sx:{fontSize:50}})}),Object(v.jsx)("h2",{children:"Sign In"})]})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",type:"email",label:"Email",variant:"standard",placeholder:"Enter Email",fullWidth:!0,required:!0,onChange:function(e){return i(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",label:"Password",variant:"standard",placeholder:"Enter Password",type:"password",fullWidth:!0,required:!0,onChange:function(e){return b(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(J.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,onClick:p,children:"Login"})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(J.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,onClick:function(){return e.push("/register")},children:"REGISTER"})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(J.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(v.jsx)(Q.a,{}),onClick:function(){O()},children:"Continue with Google"})})]})})},Y=a(243),X=a(250),Z=a(251),$=a(252),ee=a(253),te=a(254),ae=a(118),ne=a.n(ae),re=a(119),ce=a.n(re),ie=[1,2,3,4,5,6,7],se=Object(I.a)({blogContainer:{backgroundImage:"url(".concat("https://picsum.photos/1200/900",")"),backgroundSize:"100% 100%"}});function oe(){var e=se();return Object(v.jsx)(Y.a,{container:!0,spacing:0,className:e.blogContainer,children:ie.map((function(e,t){return Object(v.jsx)(Y.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)("div",{style:{padding:"40px"},children:Object(v.jsxs)(X.a,{children:[Object(v.jsx)(Z.a,{}),Object(v.jsx)($.a,{component:"img",height:"194",image:"/static/images/cards/paella.jpg",alt:"Paella dish"}),Object(v.jsx)(ee.a,{children:Object(v.jsx)(z.a,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),Object(v.jsxs)(te.a,{disableSpacing:!0,children:[Object(v.jsx)(A.a,{"aria-label":"add to favorites",children:Object(v.jsx)(ne.a,{})}),Object(v.jsx)(A.a,{"aria-label":"share",children:Object(v.jsx)(ce.a,{})})]})]},t)})})}))})}var le=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(G,{}),Object(v.jsx)(oe,{})]})},de=a(120),ue=a.n(de),je=Object(I.a)({container:{backgroundImage:"url(".concat("https://picsum.photos/1200/900",")"),backgroundSize:"100% 100%",minWidth:"100%",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},formLogin:{maxWidth:"350px",minHeight:"20vh",background:"white",borderRadius:"10px",padding:"10px",boxShadow:"10px 10px 5px 0px rgb(0 0 0 / 75%)"},paper:{padding:20,height:"70vh",width:"380px",margin:"20px auto"},avatar:{backgroundColor:"#1B6682",width:"100px",height:"100px"},google:{color:"red"}}),he=function(){var e=Object(o.g)(),t=je(),a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),d=Object(l.a)(s,2),u=d[0],j=d[1],h=Object(n.useState)(""),b=Object(l.a)(h,2),x=b[0],g=b[1],m=Object(n.useState)(""),f=Object(l.a)(m,2),w=f[0],C=f[1];return Object(v.jsx)(H.a,{className:t.container,children:Object(v.jsxs)(H.a,{container:!0,spacing:3,className:t.formLogin,children:[Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsxs)(H.a,{align:"center",children:[Object(v.jsx)(R.a,{className:t.avatar,children:Object(v.jsx)(ue.a,{sx:{fontSize:50}})}),Object(v.jsx)("h2",{children:"Sign UP"})]})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",type:"text",label:"Firstname",variant:"standard",placeholder:"Enter Firstname",fullWidth:!0,required:!0,onChange:function(e){return i(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",type:"text",label:"Lastname",variant:"standard",placeholder:"Enter Lastname",fullWidth:!0,required:!0,onChange:function(e){return j(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",type:"email",label:"Email",variant:"standard",placeholder:"Enter Email",fullWidth:!0,required:!0,onChange:function(e){return g(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",label:"Password",variant:"standard",placeholder:"Enter Password",type:"password",fullWidth:!0,required:!0,onChange:function(e){return C(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(J.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,onClick:function(){var t={firstName:c,lastName:u,email:x,password:w},a="".concat(c," ").concat(u);p(t.email,t.password,a),e.push("/")},children:"SIGN UP"})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(J.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(v.jsx)(Q.a,{}),onClick:function(){O(),e.push("/")},children:"Register with Google"})})]})})},be=a(122),pe=a.n(be),xe=a(121),ge=a.n(xe),Oe=Object(I.a)({container:{backgroundImage:"url(".concat("https://picsum.photos/1200/900",")"),backgroundSize:"100% 100%",minWidth:"100%",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},formLogin:{maxWidth:"400px",minHeight:"20vh",background:"white",borderRadius:"10px",padding:"10px",boxShadow:"10px 10px 5px 0px rgb(0 0 0 / 75%)"},paper:{padding:20,height:"70vh",width:"380px",margin:"20px auto"},avatar:{backgroundColor:"#1B6682",width:"100px",height:"100px"},google:{color:"red"}}),me=function(){var e=Object(o.g)(),t=Oe(),a=Object(n.useState)(""),r=Object(l.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),d=Object(l.a)(s,2),u=d[0],j=d[1],h=Object(n.useState)(""),b=Object(l.a)(h,2),p=b[0],x=b[1];return Object(v.jsx)(H.a,{className:t.container,children:Object(v.jsxs)(H.a,{container:!0,spacing:3,className:t.formLogin,children:[Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsxs)(H.a,{align:"center",children:[Object(v.jsx)(R.a,{className:t.avatar,children:Object(v.jsx)(pe.a,{sx:{fontSize:50}})}),Object(v.jsx)("h2",{children:"Add Blog"})]})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",type:"text",label:"Title",variant:"outlined",placeholder:"Enter Title",fullWidth:!0,required:!0,onChange:function(e){return i(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",variant:"outlined",placeholder:"Enter Image",type:"file",fullWidth:!0,required:!0,onChange:function(e){return j(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(U.a,{id:"standard-basic",multiline:!0,rows:8,label:"Write Content",variant:"outlined",placeholder:"Enter Content",fullWidth:!0,required:!0,onChange:function(e){return x(e.target.value)}})}),Object(v.jsx)(H.a,{item:!0,xs:12,children:Object(v.jsx)(J.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,onClick:function(t){t.preventDefault();var a={id:ge()(),title:c,image:u,content:p};e.push("/"),function(e){f.database().ref("blog").push(e)}(a)},children:"Add Blog"})})]})})},fe=function(){return Object(v.jsx)(s.a,{children:Object(v.jsx)(C,{children:Object(v.jsxs)(o.d,{children:[Object(v.jsx)(S,{path:"/newblog",component:me}),Object(v.jsx)(o.b,{exact:!0,path:"/",component:le}),Object(v.jsx)(o.b,{path:"/login",component:V}),Object(v.jsx)(o.b,{path:"/register",component:he})]})})})};var ve=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(fe,{})})},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,259)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(ve,{})}),document.getElementById("root")),we()}},[[158,1,2]]]);
//# sourceMappingURL=main.f2d067b3.chunk.js.map