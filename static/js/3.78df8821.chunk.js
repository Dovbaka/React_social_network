(this["webpackJsonptest-site"]=this["webpackJsonptest-site"]||[]).push([[3],{289:function(e,s,r){e.exports={item:"SearchUser_item__203KF",container:"SearchUser_container__Z6cfB",usersAvatar:"SearchUser_usersAvatar__1JQhi",users:"SearchUser_users__DDg4v",info:"SearchUser_info__IdHGH",location:"SearchUser_location__3fKF-",sub:"SearchUser_sub__b9eBu",status:"SearchUser_status__11Xfg"}},290:function(e,s,r){e.exports={paginator:"Pagination_paginator__3g7Vn",pageNumbers:"Pagination_pageNumbers__agwzU",selectedPage:"Pagination_selectedPage__Npemx"}},291:function(e,s,r){"use strict";r.r(s);var t=r(21),n=r(22),a=r(24),i=r(23),u=r(25),c=r(0),o=r.n(c),l=r(11),b=r(289),p=r.n(b),g=r(15),m=r(31),h=r.n(m);var f=function(e){return o.a.createElement("div",{className:p.a.item},o.a.createElement("div",{className:p.a.usersAvatar},o.a.createElement("div",null,o.a.createElement(g.c,{to:"/profile/"+e.user.id},o.a.createElement("img",{src:null==e.user.photos.small?h.a:e.user.photos.small,alt:"img"})))),o.a.createElement("div",{className:p.a.users},o.a.createElement("span",{className:p.a.info},o.a.createElement("div",null,e.user.name),o.a.createElement("div",{className:p.a.status},e.user.status?"Status: "+e.user.status:"")),o.a.createElement("span",{className:p.a.location},o.a.createElement("div",null,"From City"),o.a.createElement("div",null,"Country")),o.a.createElement("div",{className:p.a.sub},e.user.followed?o.a.createElement("button",{disabled:e.subInProgress.some((function(s){return s===e.user.id})),onClick:function(){e.unsubscribeUser(e.user.id)}}," Unsubscribe "):o.a.createElement("button",{disabled:e.subInProgress.some((function(s){return s===e.user.id})),onClick:function(){e.subscribeUser(e.user.id)}}," Subscribe "))))};var d=function(e){return o.a.createElement("div",{className:p.a.container},e.users.map((function(s){return o.a.createElement(f,{key:s.id,user:s,subInProgress:e.subInProgress,subscribeUser:e.subscribeUser,unsubscribeUser:e.unsubscribeUser})})))},U=r(128),P=r(71),_=function(e){return e.searchUserPage.users},v=function(e){return e.searchUserPage.pageSize},E=function(e){return e.searchUserPage.totalUsersCount},S=function(e){return e.searchUserPage.currentPage},C=function(e){return e.searchUserPage.isFetching},N=function(e){return e.searchUserPage.subInProgress},I=r(58),j=r(290),z=r.n(j);var O=function(e){for(var s=Math.ceil(e.totalItemsCount/e.pageSize),r=[],t=0;t<s;t++)r.push(t+1);var n,a,i=Math.ceil(s/e.portionSize),u=Object(c.useState)(1),l=Object(I.a)(u,2),b=l[0],p=l[1],g=(b-1)*e.portionSize+1,m=b*e.portionSize;return o.a.createElement("div",{className:z.a.paginator},n=!(b>1),o.a.createElement("button",{disabled:n,onClick:function(){p(b-1)}}," < "),o.a.createElement("div",{className:z.a.pageNumbers},r.filter((function(e){return e>=g&&e<=m})).map((function(s){return o.a.createElement("span",{key:s,className:e.currentPage===s?z.a.selectedPage:"",onClick:function(){e.onPageChange(s)}}," ",s," ")}))),a=!(i>b),o.a.createElement("button",{disabled:a,onClick:function(){p(b+1)}}," > "))},k=function(e){function s(){var e,r;Object(t.a)(this,s);for(var n=arguments.length,u=new Array(n),c=0;c<n;c++)u[c]=arguments[c];return(r=Object(a.a)(this,(e=Object(i.a)(s)).call.apply(e,[this].concat(u)))).onPageChange=function(e){r.props.getUsers(e,r.props.pageSize)},r}return Object(u.a)(s,e),Object(n.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,portionSize:20}),this.props.isFetching?o.a.createElement(P.a,null):o.a.createElement(d,{users:this.props.users,unsubscribeUser:this.props.unsubscribeUser,subscribeUser:this.props.subscribeUser,subscribeInProgress:this.props.subscribeInProgress,subInProgress:this.props.subInProgress}))}}]),s}(o.a.Component);s.default=Object(l.b)((function(e){return{users:_(e),pageSize:v(e),totalUsersCount:E(e),currentPage:S(e),isFetching:C(e),subInProgress:N(e)}}),(function(e){return{subscribeUser:function(s){e(Object(U.d)(s))},unsubscribeUser:function(s){e(Object(U.e)(s))},subscribeInProgress:function(s,r){e(Object(U.c)(s,r))},getUsers:function(s,r){e(Object(U.b)(s,r))}}}))(k)}}]);
//# sourceMappingURL=3.78df8821.chunk.js.map