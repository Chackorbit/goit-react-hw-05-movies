"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[108,247,186],{247:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(116),s=r(184);function i(e){var t=e.credits;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",width:"1200px",gap:"25px"},children:t&&t.cast.map((function(e){return(0,s.jsxs)("li",{children:[e.profile_path?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+e.profile_path,alt:""}):(0,s.jsx)("img",{src:n,alt:"",width:200,height:300}),(0,s.jsx)("p",{children:e.name})]},e.id)}))})})}},108:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),s=r(885),i=r(757),a=r.n(i),c=r(501),l=r(871),o=r(791),d=r(247),u=r(186),p=r(184),h=function(e){var t=e.location,r=(0,l.s0)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("button",{type:"button",onClick:function(){var e,n;r(null!==(e=null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/")},children:"Go back"})})};function f(e){var t,r,i,f,x=(0,l.UO)().movieId,v=(0,o.useState)([]),j=(0,s.Z)(v,2),m=j[0],g=j[1],w=(0,l.TH)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var t,r,n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","39268a7cf0f5a62bddedb30e59a8c087",t=new URLSearchParams({api_key:"39268a7cf0f5a62bddedb30e59a8c087"}),r="".concat("https://api.themoviedb.org/3/","movie/").concat(x,"?").concat(t,"&append_to_response=credits,reviews"),e.next=6,fetch(r);case 6:return n=e.sent,e.next=9,n.json();case 9:return s=e.sent,e.abrupt("return",g(s));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h,{location:w}),(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+m.poster_path,alt:""}),(0,p.jsx)("h1",{children:m.title||m.name}),m.genres&&(0,p.jsxs)("p",{children:["\u0416\u0430\u043d\u0440\u044b: ",m.genres.map((function(e){return e.name+", "}))," "]}),(0,p.jsx)("p",{children:m.overview}),(0,p.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430: ",m.release_date]}),(0,p.jsx)("br",{}),(0,p.jsxs)(c.OL,{to:"cast",state:{from:null!==(t=null===w||void 0===w||null===(r=w.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:["Cast"," "]}),(0,p.jsx)(c.OL,{to:"reviews",state:{from:null!==(i=null===w||void 0===w||null===(f=w.state)||void 0===f?void 0:f.from)&&void 0!==i?i:"/"},children:"Reviews"}),(0,p.jsx)("br",{}),(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)("h1",{children:"LOADING..."}),children:(0,p.jsxs)(l.Z5,{children:[(0,p.jsx)(l.AW,{path:"cast",element:(0,p.jsx)(d.default,{credits:m.credits})}),(0,p.jsx)(l.AW,{path:"reviews",element:(0,p.jsx)(u.default,{reviews:m.reviews})})]})}),(0,p.jsx)("p",{children:"..."})]})]})}},186:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(184);function s(e){var t=e.reviews;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",width:"1200px",gap:"25px"},children:t.results.length>0?t.results.map((function(e){return(0,n.jsxs)("li",{children:[(0,n.jsx)("p",{children:e.author}),(0,n.jsx)("p",{children:e.content})]},e.id)})):(0,n.jsx)("p",{children:"There is not reviews"})})})}},116:function(e,t,r){e.exports=r.p+"static/media/instagram-g6f508c30b_640.4cf853548f782eab3666.png"}}]);
//# sourceMappingURL=108.f98710e8.chunk.js.map