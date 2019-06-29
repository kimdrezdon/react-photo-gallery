(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},38:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(38),a(10)),s=a(11),i=a(13),m=a(12),u=a(14),h=a(7),f=a(6),d="621c0916177d75bf0f1f23fbbcd38a6d",p=a(30),g=a.n(p),E=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/amalficoast"},"Amalfi Coast")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/hallstat"},"Hallstat")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/santorini"},"Santorini"))))},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.onSearchChange=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.query.value.toLowerCase();a.props.onSearch(t);var n="/search/".concat(t);a.props.history.push(n),e.currentTarget.reset()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(t){return e.query=t},placeholder:"Search for a destination",required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(n.Component),b=function(e){return r.a.createElement("div",{className:"nav-container"},r.a.createElement("h1",null,"Wanderlust"),r.a.createElement("h3",null,"A Photo Gallery to Inspire Your Travels"),r.a.createElement(v,{history:e.history,onSearch:e.onSearch}),r.a.createElement(E,null))},S=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.url,alt:e.title}))},w=function(){return r.a.createElement("li",{className:"no-results"},r.a.createElement("h3",null,"No Results Found!"),r.a.createElement("p",null,"Your search did not return any results. Please try again."))},y=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h3",null,"Loading..."))},j=function(e){var t,a=e.images;return t=e.loading?r.a.createElement(y,null):a.length>0?a.map(function(e){return r.a.createElement(S,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),title:e.title,key:e.id})}):r.a.createElement(w,null),r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,e.title),r.a.createElement("ul",null,t))},k=function(){return r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"404: Page Not Found!"),r.a.createElement("p",null,"Sorry, we could not find the page you were looking for."))},I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchImages:[],amalfiImages:[],hallstatImages:[],santoriniImages:[],loading:!0},a.performSearch=function(e){a.setState({loading:!0}),g.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(d,"&text=").concat(e,"&sort=interestingness-desc&safe_search=1&content_type=1&per_page=24&format=json&nojsoncallback=1")).then(function(t){var n=t.data.photos.photo;"amalfi%20coast"===e?a.setState({amalfiImages:n}):"hallstat"===e?a.setState({hallstatImages:n}):"santorini"===e?a.setState({santoriniImages:n}):a.setState({searchImages:n}),a.setState({loading:!1})}).catch(function(e){console.log("Error fetching data",e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.performSearch("amalfi%20coast"),this.performSearch("hallstat"),this.performSearch("santorini")}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(f.b,{path:"/",render:function(t){return r.a.createElement(b,Object.assign({},t,{onSearch:e.performSearch}))}}),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f.a,{to:"/hallstat"})}}),r.a.createElement(f.b,{path:"/amalficoast",render:function(){return r.a.createElement(j,{loading:e.state.loading,images:e.state.amalfiImages,title:"Amalfi Coast Photos"})}}),r.a.createElement(f.b,{path:"/hallstat",render:function(){return r.a.createElement(j,{images:e.state.hallstatImages,title:"hallstat Photos"})}}),r.a.createElement(f.b,{path:"/santorini",render:function(){return r.a.createElement(j,{images:e.state.santoriniImages,title:"Santorini Photos"})}}),r.a.createElement(f.b,{path:"/search/:topic",render:function(t){var a=t.match;return r.a.createElement(j,{loading:e.state.loading,images:e.state.searchImages,title:"".concat(a.params.topic," Photos")})}}),r.a.createElement(f.b,{component:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.742e88a9.chunk.js.map