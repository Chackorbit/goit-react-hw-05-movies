"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[108,247,186],{247:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var n=r(116),s=r(184);function i(e){var t=e.credits;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",width:"1200px",gap:"25px"},children:t&&t.cast.map((function(e){return(0,s.jsxs)("li",{children:[e.profile_path?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+e.profile_path,alt:""}):(0,s.jsx)("img",{src:n,alt:"",width:200,height:300}),(0,s.jsx)("p",{children:e.name})]},e.id)}))})})}},108:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),s=r(885),i=r(757),a=r.n(i),c=r(501),d=r(871),l=r(791),u=r(247),p=r(186),h=r(184),o=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("button",{children:"Go back"})})};function x(e){var t=(0,d.UO)().movieId,r=(0,l.useState)([]),i=(0,s.Z)(r,2),x=i[0],f=i[1],j=(0,l.useState)("https://image.tmdb.org/t/p/w500"),m=(0,s.Z)(j,2),v=m[0];m[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var r,n,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","39268a7cf0f5a62bddedb30e59a8c087",r=new URLSearchParams({api_key:"39268a7cf0f5a62bddedb30e59a8c087"}),n="".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?").concat(r,"&append_to_response=credits,reviews"),e.next=6,fetch(n);case 6:return s=e.sent,e.next=9,s.json();case 9:return i=e.sent,e.abrupt("return",f(i));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{}),(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:v+x.poster_path,alt:""}),(0,h.jsx)("h1",{children:x.title||x.name}),x.genres&&(0,h.jsxs)("p",{children:["\u0416\u0430\u043d\u0440\u044b: ",x.genres.map((function(e){return e.name+", "}))," "]}),(0,h.jsx)("p",{children:x.overview}),(0,h.jsxs)("p",{children:["\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430: ",x.release_date]}),(0,h.jsx)("br",{}),(0,h.jsx)(c.OL,{to:"cast",children:"Cast "}),(0,h.jsx)(c.OL,{to:"reviews",children:"Reviews"}),(0,h.jsx)("br",{}),(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)("h1",{children:"LOADING..."}),children:(0,h.jsxs)(d.Z5,{children:[(0,h.jsx)(d.AW,{path:"cast",element:(0,h.jsx)(u.default,{credits:x.credits})}),(0,h.jsx)(d.AW,{path:"reviews",element:(0,h.jsx)(p.default,{reviews:x.reviews})})]})}),(0,h.jsx)("p",{children:"..."})]})]})}},186:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(184);function s(e){var t=e.reviews;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",width:"1200px",gap:"25px"},children:t.results.length>0?t.results.map((function(e){return(0,n.jsxs)("li",{children:[(0,n.jsx)("p",{children:e.author}),(0,n.jsx)("p",{children:e.content})]},e.id)})):(0,n.jsx)("p",{children:"There is not reviews"})})})}},116:function(e,t,r){e.exports=r.p+"static/media/instagram-g6f508c30b_640.4cf853548f782eab3666.png"}}]);
//# sourceMappingURL=108.756123ee.chunk.js.map