(this.webpackJsonpreferrals=this.webpackJsonpreferrals||[]).push([[0],{65:function(e,t,a){e.exports=a(92)},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),o=a.n(i),s=(a(70),a(16)),l=a(17),c=a(19),m=a(18),u=(a(71),a(72),a(29)),d=a(13),h=a(24),g=a(38),v=a.n(g);a(76),a(78);v.a.initializeApp({apiKey:"AIzaSyAAx_KB8yB_BBO2qVEDhFKcLB1scs_Xkns",authDomain:"referee-42ffa.firebaseapp.com",databaseURL:"https://referee-42ffa.firebaseio.com",projectId:"referee-42ffa",storageBucket:"referee-42ffa.appspot.com",messagingSenderId:"527189579972",appId:"1:527189579972:web:74e964b67554da94d15191"});var p=new v.a.auth.GoogleAuthProvider,f=v.a.auth(),E=v.a.database(),b=(v.a,function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleLogout=function(){n.setState({isLoggedIn:!1,activeUser:null}),f.signOut(),n.props.setActiveUser(null)},n.state={},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{bg:"light",expand:"lg"},r.a.createElement(u.a.Brand,null,r.a.createElement("img",{src:"https://live.staticflickr.com/65535/49968029767_6d56a52575_o.png",width:"70px",height:"70px",alt:"logo"})),r.a.createElement(u.a.Brand,{href:"#home"},"REFERee"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement("div",null,r.a.createElement(h.b,{to:"/home",style:{paddingRight:15}}," Home"),r.a.createElement(h.b,{to:"/about",style:{paddingRight:15}},"About Us"),this.props.isAdmin?r.a.createElement(h.b,{to:"/admin",style:{paddingRight:10}},"Admin Dashboard"):"")),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(d.a,{onClick:this.handleLogout,variant:"outline-danger"},"Sign out"))))}}]),a}(r.a.Component)),y=a(27),k=a(12),w=a(11),x=[{q:"How can I refer my friends?",a:"All you have to do is send them your referral link! For extra convenience, you can also use our buttons to invite your friends using email."},{q:"What can I redeem with my points?",a:"We offer numerous rewards: entry to an exclusive Facebook group, various merch, and for the extremely dedicated, even some shoes from our unreleased lineup!"},{q:"I love this! How can I make a new account?",a:"Wait... it shouldn't be possible for you to be here without an account! Please go back to our sign in screen and log in with our quick-and-easy Google authentication."},{q:"This app is amazing, can I ask who made this?",a:"That would be Team REFERee; we are group 3-1 in the Software Engineering track and our goal is to give our clients the best possible product we can make!"}],A=function(e){return e.isLoggedIn?r.a.createElement("div",null,r.a.createElement(b,{isAdmin:e.isAdmin,activeUser:e.activeUser,setActiveUser:e.setActiveUser}),r.a.createElement("div",{className:"about",style:{backgroundColor:"#FAD29E"}},r.a.createElement(y.a,{style:{marginBottom:"1vh",marginTop:"1vh"}},r.a.createElement(k.a,{xs:"5"},r.a.createElement("img",{src:"https://live.staticflickr.com/65535/49970101703_5e7002749a_o.png"})),r.a.createElement(k.a,{style:{marginTop:"30vh"}},r.a.createElement("h1",null,"Hi, we're Sneak Co. "),r.a.createElement("h3",null," We're proud to craft sleek, smart, and sustainable shoes that help you move effortlessly wherever you go. ")))),r.a.createElement("div",{className:"moreAbout",style:{backgroundColor:"#E0DFE2"}},r.a.createElement(y.a,{style:{marginBottom:"5vh"}},r.a.createElement(k.a,{xs:"6",style:{marginTop:"13vh"}},r.a.createElement("h3",null,"What We Do"),r.a.createElement("h5",null,"At Sneak Co. we transform sustainable materials into comfortable and versatile shoes that are both stylish and eco-friendly. Our products are made to last and built with materials that can easily be recycled.")),r.a.createElement(k.a,null,r.a.createElement("img",{src:"https://live.staticflickr.com/65535/49971026832_6be1e52ae5_z.jpg"}))),r.a.createElement(y.a,{style:{marginBottom:"5vh"}},r.a.createElement(k.a,{xs:"6"},r.a.createElement("img",{src:"https://live.staticflickr.com/65535/49970751621_d2e8e5acfe_z.jpg"})),r.a.createElement(k.a,{style:{marginTop:"15vh"}},r.a.createElement("h3",null,"Why We Do It"),r.a.createElement("h5",null,"We are driven to create a better tomorrow. It is no longer acceptable for products to sit in a landfill for a hundred years\u2014 that is why we are committed to creating sustainably-sourced shoes with end-of-life in mind. "))),r.a.createElement(y.a,{style:{marginBottom:"5vh"}},r.a.createElement(k.a,{xs:"6",style:{marginTop:"13vh"}},r.a.createElement("h3",null,"Full Circle Footwear"),r.a.createElement("h5",null,"Every pair of Sneak Co. shoes is backed by our commitment to building a better future. We\u2019ve designed our shoes with materials that can be easily reclaimed for recycling, so when you\u2019re done with yours, we\u2019ll be here to take them back and keep them out of landfills. Send them back to our address with our pre-paid shipping label, and we\u2019ll give you a discount on your next Sneak Co. purchase. ")),r.a.createElement(k.a,null,r.a.createElement("img",{src:"https://live.staticflickr.com/65535/49970781866_a62e0b682a_z.jpg"})))),r.a.createElement("div",{className:"FAQ",style:{backgroundColor:"#37496D"}},r.a.createElement("h1",{style:{marginBottom:20}},"FAQs"),r.a.createElement("h4",{style:{marginBottom:40}},"If you still have more questions, please contact our team through email!"),x.map((function(e){return r.a.createElement("div",{style:{paddingBottom:20}},r.a.createElement("h4",null,e.q),r.a.createElement("p",null,e.a))})))):r.a.createElement(w.a,{to:"/home"})},U=a(51),S=(a(86),a(10)),C=a(63),j=a(40),O=["Facebook group","Sneak co. stickers","Sneak co. T-shirt","Unreleased shoes"],I={10:"being added to the exclusive Facebook Group",25:"getting custom Sneak co. stickers in the mail",50:"receiving a custom  Sneak co. T-shirt",100:"receiving your own pair of not-yet-released Sneak co. sneakers"};function B(e){var t=Object(n.useState)(0),a=Object(U.a)(t,2),i=a[0],o=a[1],s=Object(n.useState)(5),l=Object(U.a)(s,2),c=l[0],m=l[1],u=Object(n.useState)(e.activeUser),d=Object(U.a)(u,2),h=d[0];d[1];return Object(n.useEffect)((function(e){null!==h&&E.ref("userData/".concat(h)).on("value",(function(e){if(e&&e.exists()){var t=e.val().referrals;o(t),m(t<10?10:t<25?25:t<50?50:100)}}))})),r.a.createElement("div",{className:"progressbar"},r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement(S.a,{className:"PCard"},r.a.createElement(S.a.Title,{className:"Title"},"Your Progress"),r.a.createElement(S.a.Body,null,r.a.createElement("div",{className:"Milestones"},r.a.createElement("div",null,"0"),r.a.createElement("div",{style:{marginLeft:"8vw"}},"10"),r.a.createElement("div",{style:{marginLeft:"8vw"}},"25"),r.a.createElement("div",{style:{marginLeft:"8vw"}},"50"),r.a.createElement("div",{style:{marginLeft:"8vw"}},"100")),r.a.createElement(C.a,{striped:!0,now:i,className:"ProgressBar",label:i}),r.a.createElement("div",{className:"Milestones"},r.a.createElement("div",null,"Rewards"),O.map((function(e){return r.a.createElement("div",{style:{marginLeft:"3vw"},className:"Rewards"},e)})))))),r.a.createElement(k.a,null,r.a.createElement(S.a,{className:"Message"},r.a.createElement(S.a.Body,{style:{marginTop:"6vh"}},i<100?"You are ".concat(c-i%c," referrals away from the next prize,\n                                which is ").concat(I[c],"!!"):"You have gained every possible reward!")))),r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement("div",{className:"carousel"},r.a.createElement(j.a,{indicators:!1},r.a.createElement(j.a.Item,null,r.a.createElement("img",{class:"d-block mx-auto",src:"https://live.staticflickr.com/65535/49968391176_5810f896e5_o.png",width:"280px",height:"280px",alt:"FaceBookGroup"})),r.a.createElement(j.a.Item,null,r.a.createElement("img",{class:"d-block mx-auto",src:"https://live.staticflickr.com/65535/49968391076_1e2941b92d_o.png",width:"280px",height:"280px",alt:"Sticker"})),r.a.createElement(j.a.Item,null,r.a.createElement("img",{class:"d-block mx-auto",src:"https://live.staticflickr.com/65535/49968658347_90e8b3770c_o.png",width:"280px",height:"280px",alt:"T-Shirt"})),r.a.createElement(j.a.Item,null,r.a.createElement("img",{class:"d-block mx-auto",src:"https://live.staticflickr.com/65535/49968658267_051134fdbf_o.png",width:"280px",height:"280px",alt:"Sneaker"})))))))}a(87);var L=a(39),T=["https://cdn2.hubspot.net/hubfs/521324/App-Icon-1200x1200-gmail.png","https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png","https://live.staticflickr.com/65535/49967495518_10d097dfe5_o.png"],D=["I\u2019m inviting you to check out Sneak Co! Sneak Co. is an up-and-coming brand dedicated to creating stylish, sustainable shoes. Sneak Co. products are made to last and built with easily-recyclable materials for a future-friendly shoe. Sign up and stay in the loop with the link below and start earning points towards Sneak Co. exclusive rewards!","Hey everyone, check out Sneak Co! Sneak Co. is an up-and-coming brand dedicated to creating stylish, sustainable shoes. Sneak Co. products are made to last and built with easily-recyclable materials for a future-friendly shoe. Sign up and stay in the loop here with the link below and start earning points towards Sneak Co. exclusive rewards!"],_=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).copyTextToClipboard=function(){var e=document.getElementById("link");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),alert("Copied the text: "+e.value)},n.gmailMessage=function(){var e=document.getElementById(D[0]);e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),alert("Your message has been copied!")},n.publicMessage=function(){var e=document.getElementById("shareText");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),alert("Your message has been copied!")},n.handleShowEmail=function(){n.setState({show:!0,public:!1})},n.handleShow=function(){n.setState({show:!0,public:!0})},n.handleClose=function(){n.setState({show:!1})},n.state={activeUser:null,show:!1,public:!0},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.activeUser!==e.activeUser&&this.setState({activeUser:this.props.activeUser})}},{key:"componentDidMount",value:function(){this.setState({activeUser:this.props.activeUser})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ref"},r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement(S.a,{style:{margin:"0 auto",width:"45vw",height:"19vh",marginTop:"2vh",marginBottom:"2vh",float:"none",marginLeft:"10vw"}},r.a.createElement(S.a.Header,null,"Your Referral Link:",r.a.createElement("div",{style:{float:"right"}},r.a.createElement(d.a,{variant:"outline-secondary",size:"sm",onClick:function(){return e.copyTextToClipboard()}},"Copy to Clipboard"))),r.a.createElement(S.a.Body,{class:"h5 text-center",style:{margin:"0 auto",marginTop:"3vh",marginLeft:"3vh",marginRight:"3vh",float:"none"}},r.a.createElement("textarea",{id:"link",value:"alex-shen1.github.io".concat("/REFERee","/#/ref/").concat(this.props.activeUser)})))),r.a.createElement(k.a,null,r.a.createElement(S.a,{style:{margin:"0 auto",width:"20vw",height:"19vh",marginTop:"2vh",marginBottom:"2vh",float:"none"}},r.a.createElement(S.a.Header,null,"Refer a friend!"),r.a.createElement(S.a.Body,{style:{textAlign:"center",justifyContent:"space-between"}},r.a.createElement(d.a,{variant:"light",onClick:function(){return e.handleShowEmail()}},r.a.createElement("img",{src:T[0],width:"40px",height:"40px"})),r.a.createElement(d.a,{variant:"light",onClick:function(){return e.handleShow()}},r.a.createElement("img",{src:T[1],width:"40px",height:"40px"})),r.a.createElement(d.a,{variant:"light",onClick:function(){return e.handleShow()}},r.a.createElement("img",{src:T[2],width:"40px",height:"40px"})))))),r.a.createElement(L.a,{show:this.state.show,onHide:this.handleClose,size:"lg"},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement(L.a.Title,null,"Refer your friends and family!")),r.a.createElement(L.a.Body,null,r.a.createElement("textArea",{id:"shareText",style:{width:"49vw",height:"30vh"}},this.state.public?D[1]:D[0],"\n\nalex-shen1.github.io".concat("/REFERee","/#/ref/").concat(this.props.activeUser))),r.a.createElement(L.a.Footer,null,r.a.createElement(d.a,{variant:"primary",onClick:function(){return e.publicMessage()}},"Copy Text"))))}}]),a}(r.a.Component);function N(e){return e.isLoggedIn?r.a.createElement("div",{className:"homepage"},r.a.createElement(b,{isAdmin:e.isAdmin,activeUser:e.activeUser,setActiveUser:e.setActiveUser}),r.a.createElement("img",{src:"https://live.staticflickr.com/65535/49971709937_f7a58c3476_o.png"}),r.a.createElement(_,{activeUser:e.activeUser}),r.a.createElement(B,{activeUser:e.activeUser})):r.a.createElement(w.a,{to:"/login"})}a(88);var R=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setActiveUser=function(e){n.setState({activeUser:e})},n.handleGoogleLogin=function(){f.signInWithPopup(p).then((function(e){console.log(e);var t=e.user;n.props.setActiveUser(t.uid),E.ref("userData").once("value",(function(e){if(e&&e.exists()){var a=!1;if(Object.keys(e.val()).map((function(e){t.uid===e&&(a=!0,console.log("".concat(e," exists")))})),!a){var r={name:t.displayName,referrals:0,email:t.email,created:(new Date).toLocaleString("en-US",{timezone:"UTC-8"})};E.ref("userData/".concat(t.uid)).set(r),null!=n.props.referrer&&n.creditReferrer()}}}))})).catch((function(e){return console.log(e)}))},n.creditReferrer=function(){var e=n.props.referrer,t=E.ref("userData/".concat(e));t.once("value",(function(e){if(e&&e.exists()){console.log(e.val());var a=e.val();a.referrals++,console.log(a),t.set(a)}})).catch((function(e){return console.log(e)}))},n.creditReferrer=function(){var e=n.props.referrer,t=E.ref("userData/".concat(e));t.once("value",(function(e){if(e&&e.exists()){console.log(e.val());var a=e.val();a.referrals++,console.log(a),t.set(a)}}))},n.handleLogout=function(){console.log("logging out"),n.setState({isLoggedIn:!1,activeUser:null}),n.props.setActiveUser(null),f.signOut()},n.state={},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"login"},this.props.isLoggedIn?r.a.createElement(w.a,{to:"/home"}):r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(u.a.Brand,null,r.a.createElement("img",{src:"https://live.staticflickr.com/65535/49968029767_6d56a52575_o.png",width:"70px",height:"70px",alt:"logo"})),r.a.createElement(u.a.Brand,null,"REFERee")),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"https://live.staticflickr.com/65535/49968206482_048c35a16a_o.png",width:"1000px",height:"518px",alt:"shoes"})),this.props.isLoggedIn?r.a.createElement(S.a,{bg:"secondary",text:"light",style:{margin:"0 auto",width:"10vw",height:"5vh",marginTop:"3vh",marginBottom:"3vh",float:"none"}},'Hello, "NAME"'):r.a.createElement(S.a,{style:{margin:"0 auto",width:"70vw",height:"15vh",marginTop:"3vh",marginBottom:"3vh",float:"none"}},r.a.createElement(S.a.Body,{class:"h4 text-center",style:{marginTop:"2vh"}},"stay in the loop:"),r.a.createElement(d.a,{variant:"outline-dark",style:{margin:"0 auto",marginTop:"1vh",marginBottom:"1vh",float:"none"},onClick:this.handleGoogleLogin},"Sign in with Google")),this.props.isLoggedIn?r.a.createElement(d.a,{variant:"outline-info",onClick:this.handleLogout},"Sign out"):""))}}]),a}(r.a.Component),F=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){E.ref("userData/".concat(n.props.id)).once("value",(function(e){e&&e.exists()&&n.setState({referrersName:e.val().name})}))},n.state={referrersName:""},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Referred by:",this.state.referrersName,r.a.createElement(R,{isLoggedIn:this.props.isLoggedIn,referrer:this.props.id,setActiveUser:this.props.setActiveUser}))}}]),a}(n.Component),W=a(47),M=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).sortUsers=function(e){var t,a=n.state.userData;switch(e){case"Name (A-Z)":t=function(e,t){return e.name.localeCompare(t.name)};break;case"Date created":t=function(e,t){return e.created.localeCompare(t.created)};break;case"Points (Ascending)":t=function(e,t){return e.referrals-t.referrals};break;case"Points (Descending)":t=function(e,t){return-(e.referrals-t.referrals)};break;default:console.log("no sort")}return console.log("sorting by ".concat(e)),a.sort(t),a},n.state={userData:null,sortField:"Name (A-Z)"},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.ref("userData").on("value",(function(t){t&&t.exists()&&e.setState({userData:Object.values(t.val())})}))}},{key:"render",value:function(){var e=this;return this.props.isAdmin?r.a.createElement("div",{className:"adminpage"},r.a.createElement(b,{isAdmin:this.props.isAdmin,activeUser:this.props.activeUser,setActiveUser:this.props.setActiveUser}),r.a.createElement(W.a,null,r.a.createElement(W.a.Toggle,null,"Sort by..."),r.a.createElement(W.a.Menu,null,["Name (A-Z)","Date created","Points (Descending)","Points (Ascending)"].map((function(t){return r.a.createElement(W.a.Item,{onClick:function(){return e.setState({sortField:t})}},t)})))),null!=this.state.userData?this.sortUsers(this.state.sortField).map((function(e){return r.a.createElement(S.a,null,r.a.createElement(S.a.Title,null,e.name),r.a.createElement(S.a.Text,null,"Points: ".concat(e.referrals)," ",r.a.createElement("br",null),"Email: ".concat(e.email)," ",r.a.createElement("br",null),"Account created: ".concat(e.created)))})):""):r.a.createElement(w.a,{to:"login"})}}]),a}(n.Component),P={EsmTKQcSgtVIreazD9ZY4nNEYK42:{name:"Alex Shen",referrals:2},kcEgNwSW3ZN10k8BwXJG0fPxylr2:{name:"Alan Li",referrals:3}},z=(a(90),a(91),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).resetFirebase=function(){Object.keys(P).map((function(e){E.ref("userData/".concat(e)).set(P[e])}))},n.printUser=function(){f.onAuthStateChanged((function(e){e?console.log(e):console.log("no user")}))},n.setActiveUser=function(e){n.setState({activeUser:e,isLoggedIn:null!=e}),E.ref("admins").once("value",(function(t){t&&t.exists()&&Object.values(t.val()).map((function(t){e===t&&n.setState({isAdmin:!0})}))}))},n.state={activeUser:null,isLoggedIn:!1,allUsers:null,isAdmin:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.onAuthStateChanged((function(t){t?e.setActiveUser(t.uid):console.log("no user")})),E.ref("userData").on("value",(function(t){t&&t.exists()&&e.setState({allUsers:Object.keys(t.val())})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(h.a,null,r.a.createElement(w.d,null,r.a.createElement(w.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(w.a,{to:"/login"})}}),r.a.createElement(w.b,{exact:!0,path:"/home",render:function(t){return r.a.createElement(N,Object.assign({},t,{activeUser:e.state.activeUser,isLoggedIn:e.state.isLoggedIn,setActiveUser:e.setActiveUser,isAdmin:e.state.isAdmin}))}}),r.a.createElement(w.b,{exact:!0,path:"/about",render:function(t){return r.a.createElement(A,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn,setActiveUser:e.setActiveUser,isAdmin:e.state.isAdmin}))}}),r.a.createElement(w.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(R,Object.assign({},t,{isLoggedIn:e.state.isLoggedIn,referrer:null,setActiveUser:e.setActiveUser}))}}),this.state.allUsers?this.state.allUsers.map((function(t){return r.a.createElement(w.b,{exact:!0,path:"/ref/".concat(t),render:function(a){return r.a.createElement(F,Object.assign({},a,{isLoggedIn:e.state.isLoggedIn,id:t,setActiveUser:e.setActiveUser}))}})})):"",r.a.createElement(w.b,{exact:!0,path:"/admin",render:function(t){return r.a.createElement(M,Object.assign({},t,{activeUser:e.state.activeUser,setActiveUser:e.setActiveUser,isAdmin:e.state.isAdmin}))}}))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.fb989559.chunk.js.map