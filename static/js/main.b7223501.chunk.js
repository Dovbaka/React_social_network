(this["webpackJsonptest-site"]=this["webpackJsonptest-site"]||[]).push([[0],{12:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c}));var n=a(135),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"ce2d0101-43a5-42ad-a2b2-99a0005fc482"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},deleteSub:function(e){return r.delete("follow/".concat(e))},postSub:function(e){return r.post("follow/".concat(e))}},s={getProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileInfo:function(e){return r.put("profile",e)}},i={getAuth:function(){return r.get("auth/me")},login:function(e,t,a,n){return r.post("auth/login",{email:e,password:t,rememberMe:a,captchaText:n})},logout:function(){return r.delete("auth/login")},getCaptchaUrl:function(){return r.get("security/get-captcha-url")}},c={startMess:function(e){return r.put("dialogs/".concat(e))},sendMess:function(e,t){return r.post("dialogs/".concat(e,"/messages"),{body:t})},getMess:function(e){return r.get("dialogs/".concat(e,"/messages"))},getDialogs:function(){return r.get("dialogs")}}},128:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return E})),a.d(t,"d",(function(){return A})),a.d(t,"e",(function(){return g}));var n=a(5),r=a.n(n),o=a(42),s=a(10),i=a(12),c="SEARCH-USER/SUBSCRIBE",l="SEARCH-USER/UNSUBSCRIBE",u="SEARCH-USER/SET-USERS",m={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,subInProgress:[]};function p(e,t,a,n){return e.map((function(e){return e[a]===t?Object(s.a)({},e,{},n):e}))}function f(e){return{type:"SEARCH-USER/TOGGLE-IS-FETCHING",isFetching:e}}function d(e,t){return{type:"SEARCH-USER/SUBSCRIBE-IN-PROGRESS",InProgress:e,userId:t}}var E=function(e,t){return function(a){var n;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a(f(!0)),a({type:"SEARCH-USER/SET-CURRENT-PAGE",page:e}),o.next=4,r.a.awrap(i.d.getUsers(e,t));case 4:n=o.sent,a(f(!1)),a((s=n.items,{type:u,users:s})),a({type:"SEARCH-USER/SET-TOTAL-COUNT",count:n.totalCount});case 8:case"end":return o.stop()}var s}))}},A=function(e){return function(t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t(d(!0,e)),a.next=3,r.a.awrap(i.d.postSub(e));case 3:0===a.sent.data.resultCode&&t({type:c,userId:e}),t(d(!1,e));case 6:case"end":return a.stop()}}))}},g=function(e){return function(t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t(d(!0,e)),a.next=3,r.a.awrap(i.d.deleteSub(e));case 3:0===a.sent.data.resultCode&&t({type:l,userId:e}),t(d(!1,e));case 6:case"end":return a.stop()}}))}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(s.a)({},e,{users:p(e.users,t.userId,"id",{followed:!0})});case l:return Object(s.a)({},e,{users:p(e.users,t.userId,"id",{followed:!1})});case u:return Object(s.a)({},e,{users:t.users});case"SEARCH-USER/SET-CURRENT-PAGE":return Object(s.a)({},e,{currentPage:t.page});case"SEARCH-USER/SET-TOTAL-COUNT":return Object(s.a)({},e,{totalUsersCount:t.count});case"SEARCH-USER/TOGGLE-IS-FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"SEARCH-USER/SUBSCRIBE-IN-PROGRESS":return Object(s.a)({},e,{subInProgress:t.InProgress?[].concat(Object(o.a)(e.subInProgress),[t.userId]):e.subInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},136:function(e,t,a){e.exports=a.p+"static/media/loading.39e1ce1a.svg"},163:function(e,t,a){e.exports=a(288)},168:function(e,t,a){},17:function(e,t,a){e.exports={app_nav:"NavBar_app_nav__2dKqp",item:"NavBar_item__3vCS-",activeLink:"NavBar_activeLink__3C1Ub",friends:"NavBar_friends__1u9x-",online:"NavBar_online__1ct_I"}},20:function(e,t,a){e.exports={dialogues:"Dialogues_dialogues__3HTY6",dialogues_items:"Dialogues_dialogues_items__ZkocV",dialogue:"Dialogues_dialogue__28Qme",active:"Dialogues_active__2ovdr",imgContainer:"Dialogues_imgContainer__1BjYn",textContainer:"Dialogues_textContainer__f3sym",message_box:"Dialogues_message_box__10k-5",vl:"Dialogues_vl__2V8oZ",messages_items:"Dialogues_messages_items__3tPFl",input:"Dialogues_input__GWN-5"}},288:function(e,t,a){"use strict";a.r(t);a(97),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),o=a(69),s=a.n(o),i=a(21),c=a(22),l=a(24),u=a(23),m=a(25),p=(a(168),a(37)),f=a(15),d=a(20),E=a.n(d);var A=function(e){var t=e.to,a=e.exact,n=e.children,o=e.divStyle,s=e.divActiveStyle;return r.a.createElement(p.b,{path:t,exact:a,children:function(e){var a=e.match;return r.a.createElement("div",{className:a?o+" "+s:o},r.a.createElement(f.b,{to:t},n))}})};var g=function(e){return r.a.createElement("div",null,r.a.createElement(A,{to:"/dialogues/"+e.path,divStyle:E.a.dialogue,divActiveStyle:E.a.active},r.a.createElement("div",{className:E.a.imgContainer},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:E.a.avatar})),r.a.createElement("div",{className:E.a.textContainer},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Last seen: ",e.lastActivityDate))))},v=a(50),b=a.n(v);var h=function(e){return r.a.createElement("div",{className:b.a.bubbleWrapper},r.a.createElement("div",{className:e.senderId!==e.userId?b.a.recipientContainer:b.a.senderContainer},r.a.createElement("div",{className:b.a.bubble},r.a.createElement("div",{className:b.a.messageInfoBox},r.a.createElement("h3",null,e.senderName),r.a.createElement("h2",null,e.time)),r.a.createElement("div",null,r.a.createElement("p",null,e.message)))))},S=a(129),U=a(130);var _=Object(U.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:E.a.input},r.a.createElement(S.a,{component:"textarea",name:"newMessageBody",placeholder:"Enter your message"}),r.a.createElement("button",null,"Send")))})),P=Object(p.f)((function(e){var t=r.a.createRef(),a=Number(e.location.pathname.replace("dialogues","").replace(/[/]/g,"")),o=e.baseDialogues.map((function(e){return r.a.createElement(g,{key:e.id,name:e.userName,path:e.id,avatar:e.photos.small,lastActivityDate:e.lastDialogActivityDate.substring(0,e.lastDialogActivityDate.lastIndexOf("T")).split("-").reverse().join(".")})})),s=e.baseTexts.map((function(t){return r.a.createElement(h,{key:t.id,message:t.body,senderName:t.senderName,senderId:t.senderId,userId:e.userId,time:t.addedAt.substr(t.addedAt.lastIndexOf("T")+1,5)})}));return Object(n.useEffect)((function(){a>0&&e.setMessages(a)}),[a]),Object(n.useEffect)((function(){t.current.scrollIntoView({behavior:"smooth"})})),r.a.createElement("div",{className:E.a.dialogues},r.a.createElement("div",{className:E.a.dialogues_items},o),r.a.createElement("div",{className:E.a.messages_items},r.a.createElement("div",{className:E.a.vl}),r.a.createElement("div",{className:E.a.message_box},s,r.a.createElement("div",{ref:t})),a>0?r.a.createElement(_,{onSubmit:function(t){e.sendMessage(a,t.newMessageBody),e.clearForm("dialogAddMessageForm")}}):null))})),F=a(5),O=a.n(F),C=a(42),I=a(10),R=a(12),j={baseDialogues:[],baseTexts:[],startMessSuccess:[]};function N(e,t){return{type:"START-MESSAGING-IN-PROGRESS",InProgress:e,userId:t}}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGUES/SEND-MESSAGE":return Object(I.a)({},e,{baseTexts:[].concat(Object(C.a)(e.baseTexts),[t.payload])});case"DIALOGUES/SET-DIALOGUES":return Object(I.a)({},e,{baseDialogues:t.dialogues});case"DIALOGUES/SET-MESSAGES":return Object(I.a)({},e,{baseTexts:t.messages});case"START-MESSAGING-IN-PROGRESS":return Object(I.a)({},e,{startMessSuccess:t.InProgress?[].concat(Object(C.a)(e.startMessSuccess),[t.userId]):[]});case"DIALOGUES/CLEAR-MESSAGES":return Object(I.a)({},e,{baseTexts:[]});default:return e}},w=a(11),B=function(e){return{isAuth:e.authentication.isAuth}},D=a(9),x=a(27),T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.clearMessages(),this.props.setDialogues()}},{key:"render",value:function(){return r.a.createElement(P,this.props)}}]),t}(r.a.Component),M=Object(D.d)(Object(w.b)((function(e){return{baseDialogues:e.messagePage.baseDialogues,baseTexts:e.messagePage.baseTexts,newMessageText:e.messagePage.newMessageText,userId:e.authentication.userId}}),(function(e){return{sendMessage:function(t,a){var n,r;e((n=t,r=a,function(e){var t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(R.b.sendMess(n,r));case 2:0===(t=a.sent).data.resultCode&&e({type:"DIALOGUES/SEND-MESSAGE",payload:t.data.data.message});case 4:case"end":return a.stop()}}))}))},setDialogues:function(){e((function(e){var t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(R.b.getDialogs());case 2:t=a.sent,e({type:"DIALOGUES/SET-DIALOGUES",dialogues:t.data}),e(N(!1,0));case 5:case"end":return a.stop()}}))}))},setMessages:function(t){e(function(e){return function(t){var a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(R.b.getMess(e));case 2:a=n.sent,t({type:"DIALOGUES/SET-MESSAGES",messages:a.data.items});case 4:case"end":return n.stop()}}))}}(t))},clearMessages:function(){e({type:"DIALOGUES/CLEAR-MESSAGES"})},clearForm:function(t){e(Object(x.a)(t))}}})),(function(e){var t=function(t){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(p.a,{to:"/login"})}}]),a}(r.a.Component);return Object(w.b)(B)(t)}))(T),k="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nisi mi, nec cursus lacus accumsan eu. Sed ut dictum justo. Donec non enim mi. Sed fringilla sed ante varius semper. Praesent semper nunc id leo tempus, in iaculis nibh dapibus. Praesent dictum urna quis urna vestibulum, at molestie magna porta.",K={basePosts:[{id:3,text:k,date:"7/10/2019",time:"11:12",likes:21},{id:2,text:k,date:"3/8/2019",time:"13:42",likes:1},{id:1,text:k,date:"1/1/2019",time:"16:33",likes:34}],newPostText:"",profile:null,status:""};var L=function(){var e=new Date;return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()},Q=function(){var e=new Date;return e.getHours()+":"+e.getMinutes()};function H(e){return{type:"PROFILE/SET-USER-STATUS",status:e}}function G(e){return{type:"PROFILE/SET-USER-PHOTO",photo:e}}var W=function(e){return function(t){var a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(R.c.getProfile(e));case 2:a=n.sent,t({type:"PROFILE/SET-USER-PROFILE",profile:a});case 4:case"end":return n.stop()}}))}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/ADD-POST-CONTENT":var a={id:e.basePosts.length+1,text:t.newPostBody,date:L(),time:Q(),likes:0};return Object(I.a)({},e,{basePosts:[a].concat(Object(C.a)(e.basePosts))});case"PROFILE/SET-USER-PROFILE":return Object(I.a)({},e,{profile:t.profile});case"PROFILE/SET-USER-STATUS":return Object(I.a)({},e,{status:t.status});case"PROFILE/SET-USER-PHOTO":return Object(I.a)({},e,{profile:Object(I.a)({},e.profile,{photos:t.photo})});case"PROFILE/DELETE-POST":return Object(I.a)({},e,{basePosts:e.basePosts.filter((function(e){return e.id!==t.id}))});default:return e}},q=a(43),X=a.n(q),z=a(51),V=a.n(z),Y=a(31),Z=a.n(Y);var $=function(e){return r.a.createElement("div",{className:V.a.item},r.a.createElement("div",{className:V.a.avatar},r.a.createElement("img",{src:null==e.profile.photos.small?Z.a:e.profile.photos.small,alt:"Avatar"})),r.a.createElement("div",{className:V.a.info},r.a.createElement("h3",null,e.profile.fullName),r.a.createElement("p",null,e.date," in ",e.time)),r.a.createElement("div",{className:V.a.text},r.a.createElement("p",null,e.userText)),r.a.createElement("div",{className:V.a.likes},r.a.createElement("img",{src:"http://icons.iconarchive.com/icons/iconsmind/outline/512/Heart-2-icon.png",alt:"like"}),"\xa0Likes: ",e.likeCount))},ee=function(e){if(!e)return"Field is required"},te=r.a.memo((function(e){if(!e.profile)return r.a.createElement("div",null);var t=e.basePosts.map((function(t){return r.a.createElement($,{userText:t.text,likeCount:t.likes,date:t.date,time:t.time,key:t.id,profile:e.profile})}));return r.a.createElement("div",{className:X.a.descriptionBlock},r.a.createElement(ae,{onSubmit:function(t){e.addNewPost(t.newPostBody),e.clearForm("profileAddPostForm")},profile:e.profile}),r.a.createElement("div",{className:X.a.posts},r.a.createElement("h2",null,"My posts"),t))})),ae=Object(U.a)({form:"profileAddPostForm"})((function(e){return e.profile?r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:X.a.add_post},r.a.createElement("div",{className:X.a.miniAvatar},r.a.createElement("img",{src:null==e.profile.photos.small?Z.a:e.profile.photos.small,alt:"Avatar"})),r.a.createElement("div",{className:X.a.inputPost},r.a.createElement(S.a,{component:"textarea",validate:[ee],name:"newPostBody",placeholder:"Enter your post text"})),r.a.createElement("hr",null),r.a.createElement("div",{className:X.a.buttonContainer},r.a.createElement("button",null,"Post")))):r.a.createElement("div",null)})),ne=te,re=Object(w.b)((function(e){return{basePosts:e.profilePage.basePosts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),(function(e){return{addNewPost:function(t){e({type:"PROFILE/ADD-POST-CONTENT",newPostBody:t})},clearForm:function(t){e(Object(x.a)(t))}}}))(ne),oe=a(58),se=a(8),ie=a.n(se),ce=a(71);var le=function(e){var t=Object(n.useState)(!1),a=Object(oe.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(e.status),c=Object(oe.a)(i,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){u(e.status)}),[e.status]),r.a.createElement("div",null,!o&&r.a.createElement("div",{className:ie.a.status},r.a.createElement("span",{onDoubleClick:e.isOwner?function(){s(!0)}:null},e.status?"Status: "+e.status:"Change status"," ")),o&&r.a.createElement("div",{className:ie.a.status},"Status: ",r.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateUserStatus(l)},onChange:function(e){u(e.currentTarget.value)},value:l})))},ue=function(e){var t=e.contactTitle;return r.a.createElement("div",{className:ie.a.field},r.a.createElement("label",{htmlFor:t},r.a.createElement("b",null,t+":")),r.a.createElement(S.a,{component:"input",name:"contacts."+t}))},me=Object(U.a)({form:"edit-profile"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:ie.a.infoForm},r.a.createElement("div",{className:ie.a.aboutMe},r.a.createElement("h3",null,"About me")),r.a.createElement("div",{className:ie.a.field},r.a.createElement("label",{htmlFor:"fullName"},r.a.createElement("b",null,"Full name:")),r.a.createElement(S.a,{component:"input",name:"fullName"})),r.a.createElement("div",{className:ie.a.field},r.a.createElement("label",{htmlFor:"AboutMe"},r.a.createElement("b",null,"Description:")),r.a.createElement(S.a,{component:"input",name:"aboutMe"})),r.a.createElement("div",{className:ie.a.field},r.a.createElement("label",{htmlFor:"lookingForAJob"},r.a.createElement("b",null,"Looking for a job:")),r.a.createElement(S.a,{component:"input",name:"lookingForAJob",type:"checkbox"})),r.a.createElement("div",{className:ie.a.field},r.a.createElement("label",{htmlFor:"JobDescription"},r.a.createElement("b",null,"Job description:")),r.a.createElement(S.a,{component:"input",name:"lookingForAJobDescription"})),r.a.createElement("div",{className:ie.a.aboutMe},r.a.createElement("h3",null,"Contacts")),r.a.createElement("div",{className:ie.a.descriptionBlock},Object.keys(e.profile.contacts).map((function(e){return r.a.createElement(ue,{key:e,contactTitle:e})}))),r.a.createElement("div",{className:ie.a.editButton},r.a.createElement("button",null,"Save")))})),pe=function(e){return null!=e&&""!==e};var fe=function(e){var t=e.contactTitle,a=e.contactValue;return r.a.createElement("p",null,t+": "," ",r.a.createElement("a",{href:a},a))},de=function(e){return r.a.createElement("div",{className:ie.a.descriptionBlock},r.a.createElement("div",{className:ie.a.aboutMe},r.a.createElement("h3",null,"About me")),r.a.createElement("p",null,pe(e.profile.aboutMe)?"Description: "+e.profile.aboutMe:null),r.a.createElement("p",null,"Looking for a job: ",e.profile.lookingForAJob?"Yes":"No"),r.a.createElement("p",null,pe(e.profile.lookingForAJobDescription)?"Job Description: "+e.profile.lookingForAJobDescription:null),r.a.createElement("div",{className:ie.a.aboutMe},r.a.createElement("h3",null,"Contacts")),r.a.createElement("div",{className:ie.a.contacts},Object.keys(e.profile.contacts).map((function(t){return pe(e.profile.contacts[t])?r.a.createElement(fe,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]}):null}))),e.isOwner&&r.a.createElement("div",{className:ie.a.editButton},r.a.createElement("button",{onClick:e.setEditMode},"Edit")))},Ee=function(e){var t=Object(n.useState)(!1),a=Object(oe.a)(t,2),o=a[0],s=a[1];return e.profile?r.a.createElement("div",null,e.startMessSuccess.some((function(t){return t===e.profile.userId}))?r.a.createElement(p.a,{to:"/dialogues/".concat(e.profile.userId)}):null,r.a.createElement("div",{className:ie.a.avatarContainer},r.a.createElement("div",{className:ie.a.avatar},r.a.createElement("img",{src:null==e.profile.photos.large?Z.a:e.profile.photos.large,alt:"Avatar"})),e.isOwner?r.a.createElement("div",{className:ie.a.buttonContainer},r.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.updateUserPhoto(t.target.files[0])},id:ie.a.customFileInput}),r.a.createElement("label",{htmlFor:ie.a.customFileInput},"Upload photo")):r.a.createElement("div",{className:ie.a.buttonContainer},r.a.createElement("button",{onClick:function(){return e.startMessaging(e.profile.userId)}},"Start messaging"))),r.a.createElement("div",{className:ie.a.allInfoContainer},r.a.createElement("div",{className:ie.a.topInfo},r.a.createElement("h2",null,e.profile.fullName),r.a.createElement(le,{status:e.status,updateUserStatus:e.updateUserStatus,isOwner:e.isOwner})),r.a.createElement("div",null,o?r.a.createElement(me,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfileInfo(t),s(!1)}}):r.a.createElement(de,{profile:e.profile,isOwner:e.isOwner,setEditMode:function(){s(!0)}})))):r.a.createElement(ce.a,{marginTopValue:200})};var Ae=Object(w.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.authentication.userId,startMessSuccess:e.messagePage.startMessSuccess}}),(function(e){return{updateUserStatus:function(t){var a;e((a=t,function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.awrap(R.c.updateStatus(a));case 2:0===t.sent.data.resultCode&&e(H(a));case 4:case"end":return t.stop()}}))}))},updateUserPhoto:function(t){e(function(e){return function(t){var a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(R.c.updatePhoto(e));case 2:0===(a=n.sent).data.resultCode&&t(G(a.data.data.photos));case 4:case"end":return n.stop()}}))}}(t))},saveProfileInfo:function(t){e(function(e){return function(t,a){var n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=a().authentication.userId,r.next=3,O.a.awrap(R.c.saveProfileInfo(e));case 3:0===r.sent.data.resultCode&&t(W(n));case 5:case"end":return r.stop()}}))}}(t))},startMessaging:function(t){e(function(e){return function(t){return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(R.b.startMess(e));case 2:0===a.sent.data.resultCode&&t(N(!0,e));case 4:case"end":return a.stop()}}))}}(t))}}}))((function(e){return r.a.createElement("div",null,r.a.createElement(Ee,e))}));var ge=function(e){return r.a.createElement("div",null,r.a.createElement(Ae,{isOwner:e.isOwner}),r.a.createElement(re,null))},ve=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;this.props.setUserProfile(e),this.props.setUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ge,{isOwner:this.props.match.params.userId==this.props.userId}))}}]),t}(r.a.Component),be=Object(D.d)(Object(w.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.authentication.userId}}),(function(e){return{setUserProfile:function(t){e(W(t))},setUserStatus:function(t){var a;e((a=t,function(e){var t;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(R.c.getStatus(a));case 2:t=n.sent,e(H(t.data));case 4:case"end":return n.stop()}}))}))}}})),p.f)(ve),he=a(52),Se=a.n(he);var Ue=function(e){return r.a.createElement("header",{className:Se.a.app_header},r.a.createElement("div",{className:Se.a.loginBlock}),r.a.createElement("img",{src:"https://www.pngkey.com/png/full/342-3429274_horde-technology-react-js-project.png",className:Se.a.App_logo,alt:"logo"}),r.a.createElement("div",{className:Se.a.loginBlock},e.isAuth?r.a.createElement("div",{className:Se.a.auth}," ",e.login," ",r.a.createElement("p",{onClick:e.logout}," Log out")):r.a.createElement(f.c,{to:"/login"},"Login")))},_e={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null};function Pe(e,t,a,n){return{type:"AUTH/SET-USER-DATA",data:{userId:e,email:t,login:a,isAuth:n}}}function Fe(e){return{type:"AUTH/GET-CAPTCHA-URL-SUCCESS",captchaUrl:e}}var Oe=function(){return function(e){var t,a,n,r,o;return O.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,O.a.awrap(R.a.getAuth());case 2:0===(t=s.sent).data.resultCode&&(a=t.data.data,n=a.id,r=a.email,o=a.login,e(Pe(n,r,o,!0)));case 4:case"end":return s.stop()}}))}},Ce=function(){return function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.awrap(R.a.logout());case 2:0===t.sent.data.resultCode&&e(Pe(null,null,null,!1));case 4:case"end":return t.stop()}}))}},Ie=function(){return function(e){var t,a;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.awrap(R.a.getCaptchaUrl());case 2:t=n.sent,a=t.data.url,e(Fe(a));case 5:case"end":return n.stop()}}))}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET-USER-DATA":return Object(I.a)({},e,{},t.data);case"AUTH/GET-CAPTCHA-URL-SUCCESS":return Object(I.a)({},e,{captchaUrl:t.captchaUrl});default:return e}},je=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Ue,this.props)}}]),t}(r.a.Component),Ne=Object(w.b)((function(e){return{userId:e.authentication.userId,isAuth:e.authentication.isAuth,login:e.authentication.login}}),(function(e){return{logout:function(){e(Ce())}}}))(je),ye=a(17),we=a.n(ye),Be=a(95),De=a.n(Be);var xe=function(e){var t=e.base.map((function(e){return r.a.createElement("span",{key:e.id},r.a.createElement("img",{src:e.avatar,alt:"avatar"}),r.a.createElement("div",{className:De.a.caption},e.name))}));return r.a.createElement("div",{className:De.a.friends_online},t)},Te=Object(w.b)((function(e){return{base:e.friendsBar.friend}}),(function(e){return{}}))(xe);var Me,ke=function(e){return r.a.createElement("nav",{className:we.a.app_nav},r.a.createElement("div",{className:we.a.item},r.a.createElement(f.c,{to:e.userId?"/profile/"+e.userId:"/login",activeClassName:we.a.activeLink}," Profile ")),r.a.createElement("div",{className:we.a.item},r.a.createElement(f.c,{to:"/dialogues",activeClassName:we.a.activeLink}," Messages ")),r.a.createElement("div",{className:we.a.item},r.a.createElement(f.c,{to:"/search",activeClassName:we.a.activeLink}," Search users ")),r.a.createElement("div",{className:we.a.item},"News"),r.a.createElement("div",{className:we.a.item},"Music"),r.a.createElement("div",{className:we.a.item},"Settings"),r.a.createElement("div",{className:we.a.item+" "+we.a.friends},"Friends ",r.a.createElement("span",{className:we.a.online},"online"),r.a.createElement(Te,null)))},Ke=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(ke,this.props)}}]),t}(r.a.Component),Le=Object(w.b)((function(e){return{userId:e.authentication.userId}}))(Ke),Qe=a(44),He=a.n(Qe),Ge=a(96),We=a(38),Je=a.n(We),qe=function(e){var t=e.input,a=e.meta,n=Object(Ge.a)(e,["input","meta"]),o=a.touched&&a.error;return r.a.createElement("div",{className:Je.a.formControl+" "+(o?Je.a.error:void 0)},r.a.createElement("div",{className:Je.a.tooltip},o?r.a.createElement("span",{className:Je.a.tooltiptext+" "+Je.a.inputTooltipPosition},a.error):""),r.a.createElement("input",Object.assign({},t,n)))},Xe=(Me=35,function(e){if(e&&e.length>Me)return"Max length is ".concat(Me," symbols")});var ze=Object(U.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:He.a.container},r.a.createElement("div",{className:He.a.field},r.a.createElement("label",{htmlFor:"uname"},r.a.createElement("b",null,"Username")),r.a.createElement(S.a,{component:qe,validate:[ee,Xe],type:"text",placeholder:"Enter Username",name:"email",required:!0})),r.a.createElement("div",{className:He.a.field},r.a.createElement("label",{htmlFor:"psw"},r.a.createElement("b",null,"Password")),r.a.createElement(S.a,{component:qe,validate:[ee,Xe],type:"password",placeholder:"Enter Password",name:"password",required:!0}),e.captchaUrl&&r.a.createElement("img",{src:e.captchaUrl}),e.captchaUrl&&r.a.createElement(S.a,{component:qe,validate:[ee],type:"text",placeholder:"Enter captcha",name:"captchaText",required:!0})),r.a.createElement("button",{type:"submit"},"Login"),e.error&&r.a.createElement("div",{className:He.a.formSummeryTooltipPosition},e.error),r.a.createElement("label",null,r.a.createElement(S.a,{component:"input",type:"checkbox",name:"rememberMe"})," Remember me",r.a.createElement("span",{className:He.a.psw},r.a.createElement("a",{href:"https://social-network.samuraijs.com/signUp"},"Don't have an account?")))),r.a.createElement("div",{className:He.a.container,style:{backgroundColor:"#f1f1f1"}}))}));var Ve=function(e){return e.isAuth?r.a.createElement(p.a,{to:"/profile/"+e.userId}):r.a.createElement("div",null,r.a.createElement(ze,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captchaText)},captchaUrl:e.captchaUrl}))},Ye=Object(w.b)((function(e){return{isAuth:e.authentication.isAuth,userId:e.authentication.userId,captchaUrl:e.authentication.captchaUrl}}),(function(e){return{login:function(t,a,n,r){e(function(e,t,a,n){return function(r){var o,s;return O.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,O.a.awrap(R.a.login(e,t,a,n));case 2:0===(o=i.sent).data.resultCode?r(Oe()):(10===o.data.resultCode&&r(Ie()),s=o.data.messages.length>0?o.data.messages[0]:"Some Error",r(Object(x.b)("login",{_error:s})));case 4:case"end":return i.stop()}}))}}(t,a,n,r))},logout:function(){e(Ce())}}}))(Ve),Ze={initialized:!1};var $e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/IS-INITIALIZED":return Object(I.a)({},e,{initialized:!0});default:return e}},et={friend:[{id:1,name:"Arthur",avatar:Z.a},{id:2,name:"John",avatar:Z.a},{id:3,name:"Lenny",avatar:Z.a}]};var tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et;return arguments.length>1&&arguments[1],e},at=a(128),nt=a(131),rt=a(137),ot=Object(D.c)({profilePage:J,messagePage:y,friendsBar:tt,searchUserPage:at.a,authentication:Re,app:$e,form:nt.a}),st=Object(D.e)(ot,Object(D.a)(rt.a));window.storeRedux=st;var it=st,ct=r.a.lazy((function(){return a.e(3).then(a.bind(null,291))})),lt=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(Ne,null),r.a.createElement(Le,null),r.a.createElement("div",{className:"app_wrapper_content"},r.a.createElement(p.b,{path:"/dialogues",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(p.b,{path:"/search",render:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(ct,null))}}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(Ye,null)}}))):r.a.createElement(ce.a,{marginTopValue:250})}}]),t}(r.a.Component),ut=Object(D.d)(p.f,Object(w.b)((function(e){return{initialized:e.app.initialized,isAuth:e.authentication.isAuth}}),(function(e){return{initializeApp:function(){e((function(e){e(Oe()).then((function(){return e({type:"APP/IS-INITIALIZED"})}))}))}}})))(lt),mt=function(){return r.a.createElement(f.a,null,r.a.createElement(w.a,{store:it},r.a.createElement(ut,null)))};s.a.render(r.a.createElement(mt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,t){e.exports="data:image/png;base64,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"},38:function(e,t,a){e.exports={formControl:"FormControls_formControl__2_X7a",error:"FormControls_error__nnj5I",tooltip:"FormControls_tooltip__23ujo",tooltiptext:"FormControls_tooltiptext__3TyLf",inputTooltipPosition:"FormControls_inputTooltipPosition__2rukI",textareaTooltipPosition:"FormControls_textareaTooltipPosition__12Nnc"}},43:function(e,t,a){e.exports={descriptionBlock:"MyPosts_descriptionBlock__3XO16",posts:"MyPosts_posts__b9SiR",add_post:"MyPosts_add_post__11s9P",miniAvatar:"MyPosts_miniAvatar__1B3Tx",inputPost:"MyPosts_inputPost__1-0uV",buttonContainer:"MyPosts_buttonContainer__DwL1M"}},44:function(e,t,a){e.exports={container:"Login_container__Dwuhr",field:"Login_field__3F32u",psw:"Login_psw__31Wzy",formSummeryTooltipPosition:"Login_formSummeryTooltipPosition__3lx60"}},50:function(e,t,a){e.exports={bubbleWrapper:"Message_bubbleWrapper__2cBP4",messageInfoBox:"Message_messageInfoBox__h4bzp",recipientContainer:"Message_recipientContainer__2QtbC",senderContainer:"Message_senderContainer__DiAiL",bubble:"Message_bubble__4nUaD"}},51:function(e,t,a){e.exports={item:"Post_item__3STq5",info:"Post_info__3XUEt",avatar:"Post_avatar__3UNfP",likes:"Post_likes__-c3Xl",text:"Post_text__o-HrD"}},52:function(e,t,a){e.exports={app_header:"Header_app_header__1TsEK",App_logo:"Header_App_logo__ghhni",loginBlock:"Header_loginBlock__MyB_R",auth:"Header_auth__61PzQ"}},71:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(136),s=a.n(o);t.a=function(e){var t=e.marginTopValue;return r.a.createElement("div",null,r.a.createElement("img",{src:s.a,alt:"preloader",style:{marginLeft:"auto",marginRight:"auto",display:"block",marginTop:t?t+"px":"50px"}}))}},8:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2iF-o",topInfo:"ProfileInfo_topInfo__1mMjP",allInfoContainer:"ProfileInfo_allInfoContainer__3SwGw",avatarContainer:"ProfileInfo_avatarContainer__34qaf",avatar:"ProfileInfo_avatar__32OW6",customFileInput:"ProfileInfo_customFileInput__1_nLr",status:"ProfileInfo_status__38peY",field:"ProfileInfo_field__DHEZM",aboutMe:"ProfileInfo_aboutMe__3DcUB",editButton:"ProfileInfo_editButton__SM2ps",infoForm:"ProfileInfo_infoForm__3eEVZ",contacts:"ProfileInfo_contacts__3vBKY",buttonContainer:"ProfileInfo_buttonContainer__ny9mo"}},95:function(e,t,a){e.exports={friends_online:"Friends_friends_online__KiD3R",caption:"Friends_caption__1nMgc"}},97:function(e,t,a){}},[[163,1,2]]]);
//# sourceMappingURL=main.b7223501.chunk.js.map