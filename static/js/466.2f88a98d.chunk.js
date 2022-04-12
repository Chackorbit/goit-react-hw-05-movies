"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[466],{922:function(e,t,n){n.d(t,{tQ:function(){return o},M5:function(){return p},jE:function(){return f},Gv:function(){return h}});var r,a,c,i,s=n(168),u=n(31),o=u.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  width: 1400px;\n  flex-wrap: wrap;\n  margin-right: auto;\n  margin-left: auto;\n"]))),p=u.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 40px;\n\n  padding: 40px 0;\n"]))),f=u.ZP.li(c||(c=(0,s.Z)(["\n  width: 300px;\n  height: 600px;\n  gap: 20px;\n  overflow: hidden;\n  transition: transform 250ms ease;\n\n  -webkit-box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.84);\n  box-shadow: -1px 2px 10px 3px rgba(0, 0, 0, 0.84);\n\n  :hover {\n    transform: scale(1.1);\n  }\n"]))),h=u.ZP.p(i||(i=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n"])))},466:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(885),a=n(791),c=n(501),i=n(871),s=n(922),u={SearchForm:"MoviePage_SearchForm__y3Idt",SearchForm_button:"MoviePage_SearchForm_button__7MDRG",SearchForm_input:"MoviePage_SearchForm_input__1XRSc"},o=n(116),p=n(0),f=n(850),h=n(184);function d(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=(t[0],t[1]),d=(0,a.useState)([]),l=(0,r.Z)(d,2),m=l[0],x=l[1],v=(0,c.lr)(),g=(0,r.Z)(v,2),b=g[0],_=g[1],w=(0,i.TH)();return(0,a.useEffect)((function(){if(null!=b.get("query")){var e=b.get("query"),t=w.search;(0,f.nP)(e,t).then((function(e){return x(e)}))}}),[]),(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{className:u.SearchForm,onSubmit:function(e){e.preventDefault();var t=w.search;(0,f.nP)(b,t).then((function(e){return x(e)}))},children:[(0,h.jsxs)("button",{type:"submit",className:u.SearchForm_button,children:[(0,h.jsx)("span",{className:u.button_label}),(0,h.jsx)(p.Vph,{})]}),(0,h.jsx)("input",{value:null===b.get("query")?"":b.get("query"),onChange:function(e){n(e.target.value),""!==e.target.value?_({query:e.target.value}):_({})},className:u.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Film"})]}),(0,h.jsx)(s.tQ,{children:(0,h.jsx)(s.M5,{children:m.results&&m.results.map((function(e){var t;return(0,h.jsx)(c.rU,{to:"".concat(e.id),state:{from:w},children:(0,h.jsxs)(s.jE,{id:e.id,children:[e.poster_path?(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+e.poster_path,alt:""}):(0,h.jsx)("img",{src:o,alt:"",width:320,height:450}),(0,h.jsxs)(s.Gv,{children:[null!==(t=e.name)&&void 0!==t?t:e.title," "]}),(0,h.jsx)("p",{children:e.overview})]})},e.id)}))})})]})}},850:function(e,t,n){n.d(t,{jC:function(){return i},nP:function(){return u},XT:function(){return p}});var r=n(861),a=n(757),c=n.n(a);function i(e){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(t){var n,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","39268a7cf0f5a62bddedb30e59a8c087",n=new URLSearchParams({api_key:"39268a7cf0f5a62bddedb30e59a8c087"}),r="".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?").concat(n,"&append_to_response=credits,reviews"),e.next=6,fetch(r);case 6:return a=e.sent,e.next=9,a.json();case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(t,n){var r,a,i,s,u,o,p,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="https://api.themoviedb.org/3/",i="39268a7cf0f5a62bddedb30e59a8c087",t){e.next=4;break}return e.abrupt("return");case 4:return s=null!==(r=new URLSearchParams(n).get("query"))&&void 0!==r?r:"",u=new URLSearchParams({api_key:i,query:s,page:1,include_adult:!1}),o="".concat(a,"search/movie?").concat(u),e.next=9,fetch(o);case 9:return p=e.sent,e.next=12,p.json();case 12:return f=e.sent,e.abrupt("return",f);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/","39268a7cf0f5a62bddedb30e59a8c087",t=new URLSearchParams({api_key:"39268a7cf0f5a62bddedb30e59a8c087",page:1}),n="".concat("https://api.themoviedb.org/3/","trending/all/day?").concat(t),e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a.results);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},116:function(e,t,n){e.exports=n.p+"static/media/instagram-g6f508c30b_640.4cf853548f782eab3666.png"}}]);
//# sourceMappingURL=466.2f88a98d.chunk.js.map