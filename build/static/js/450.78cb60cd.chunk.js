"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[450,247,186],{247:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(116),s=r(184);function i(e){var t=e.credits;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",width:"1200px",gap:"25px"},children:t&&t.cast.map((function(e){return(0,s.jsxs)("li",{children:[e.profile_path?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+e.profile_path,alt:""}):(0,s.jsx)("img",{src:n,alt:"",width:200,height:300}),(0,s.jsx)("p",{children:e.name})]},e.id)}))})})}},450:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(861),s=r(152),i=r(757),a=r.n(i),c=r(871),l=r(504),d=r(791),p=r(247),u=r(186),h=r(184);function o(e){var t=(0,c.UO)().movieId,r=(0,d.useState)([]),i=(0,s.Z)(r,2),o=i[0],f=i[1],x=(0,d.useState)("https://image.tmdb.org/t/p/w500"),j=(0,s.Z)(x,2),m=j[0];j[1];return(0,d.useEffect)((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var r,n,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","39268a7cf0f5a62bddedb30e59a8c087",r=new URLSearchParams({api_key:"39268a7cf0f5a62bddedb30e59a8c087"}),n="".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?").concat(r,"&append_to_response=credits,reviews"),e.next=6,fetch(n);case 6:return s=e.sent,e.next=9,s.json();case 9:return i=e.sent,console.log(i),e.abrupt("return",f(i));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:m+o.poster_path,alt:""}),(0,h.jsx)("h1",{children:o.title||o.name}),o.genres&&(0,h.jsxs)("p",{children:["\u0416\u0430\u043d\u0440\u044b: ",o.genres.map((function(e){return e.name+", "}))," "]}),(0,h.jsx)("p",{children:o.overview}),(0,h.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430: ",o.release_date]}),(0,h.jsx)("br",{}),(0,h.jsx)(l.OL,{to:"cast",children:"Cast "}),(0,h.jsx)(l.OL,{to:"reviews",children:"Reviews"}),(0,h.jsx)("br",{}),(0,h.jsx)(d.Suspense,{fallback:(0,h.jsx)("h1",{children:"LOADING..."}),children:(0,h.jsxs)(c.Z5,{children:[(0,h.jsx)(c.AW,{path:"cast",element:(0,h.jsx)(p.default,{credits:o.credits})}),(0,h.jsx)(c.AW,{path:"reviews",element:(0,h.jsx)(u.default,{reviews:o.reviews})})]})}),(0,h.jsx)("p",{children:"..."})]})}},186:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(184);function s(e){var t=e.reviews;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",width:"1200px",gap:"25px"},children:t.results.length>0?t.results.map((function(e){return(0,n.jsxs)("li",{children:[(0,n.jsx)("p",{children:e.author}),(0,n.jsx)("p",{children:e.content})]},e.id)})):(0,n.jsx)("p",{children:"There is not reviews"})})})}},116:function(e,t,r){e.exports=r.p+"static/media/instagram-g6f508c30b_640.4cf853548f782eab3666.png"}}]);
//# sourceMappingURL=450.78cb60cd.chunk.js.map