(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=a(30),i=(a(75),a(76),a(77),a(111)),s=a(113),m=a(112),u=a(110),d=a(62),h=a(61),p=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{bg:"light",expand:"lg"},r.a.createElement(i.a.Brand,{href:"/react-crud-shop/"},"React-Bootstrap"),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(s.a.Link,{href:"#home"},"Home"),r.a.createElement(s.a.Link,{href:"#link"},"Link"),r.a.createElement(m.a,{title:"Dropdown",id:"basic-nav-dropdown"},r.a.createElement(m.a.Item,{href:"#action/3.1"},"Action"),r.a.createElement(m.a.Item,{href:"#action/3.2"},"Another action"),r.a.createElement(m.a.Item,{href:"#action/3.3"},"Something"),r.a.createElement(m.a.Divider,null),r.a.createElement(m.a.Item,{href:"#action/3.4"},"Separated link"))),r.a.createElement(u.a,{inline:!0},r.a.createElement(d.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(h.a,{variant:"outline-success"},"Search")))))},E=a(109),f=function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement("h1",null,"Hello, world!"),r.a.createElement("p",null,"his is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),r.a.createElement(l.c,{to:"/products"},"View products")))},v=a(24),g=a(114),b=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{variant:"warning"},r.a.createElement(g.a.Heading,null,"Oh snap! You got an error!"),r.a.createElement("p",null,"Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.")))},w=a(65),k=a(66),y=a(68),j=a(67),O=a(69),L=function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,products:[]},a}return Object(O.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/DanielSadovskiy/react-crud-shop/db").then(function(e){return e.json()}).then(function(t){e.setState({products:t,isLoading:!1})}),Object.keys(this.state.products).map(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Products"),this.state.isLoading?r.a.createElement("h2",null,"Loading products..."):Object.keys(this.state.products.map(function(e){return r.a.createElement("h1",null,e)})))}}]),t}(n.Component);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement("main",{className:"container"},r.a.createElement(l.b,{basename:"/react-crud-shop"},r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:f}),r.a.createElement(v.a,{exact:!0,path:"/products",component:L}),r.a.createElement(v.a,{path:"*",component:b})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,a){e.exports=a(106)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.3023e282.chunk.js.map