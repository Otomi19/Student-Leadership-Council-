(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{661:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/contact",function(){return r(1149)}])},2185:function(e,n,r){"use strict";var t=r(5893),a=r(7294),s=r(1163),l=r(1664);function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.Z=function(){var e=(0,s.useRouter)(),n=(0,a.useState)(null),r=n[0],i=n[1];return(0,a.useEffect)((function(){if(e){var n=e.asPath.split("/");n.shift();var r=n.map((function(e,r){return{breadcrumb:e,href:"/"+n.slice(0,r+1).join("/")}}));r.splice(-1),i(r)}}),[e]),r?(0,t.jsx)("nav",{"aria-label":"breadcrumbs",children:(0,t.jsxs)("ol",{className:"breadcrumb bg-white",children:[(0,t.jsx)("li",{className:"text-xl font-bold text-decoration-none ",children:(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("a",{className:"text-decoration-none text-secondary hover:text-black",children:"Home"})})}),r.map((function(e,n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"text-xl font-bold text-decoration-none text-secondary ",children:"\xa0/\xa0"}),(0,t.jsx)("li",{className:"text-xl font-bold text-decoration-none ",children:(0,t.jsx)(l.default,{href:e.href,children:(0,t.jsx)("a",{className:"text-decoration-none text-secondary hover:text-black",children:o((r=e.breadcrumb,r.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc")))})})},e.href)]});var r}))]})}):null}},6503:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(5893),a=(r(7294),r(1664)),s=r(1163),l=r(5697),o=r.n(l);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e){var n=e.href,r=e.exact,l=e.children,o=d(e,["href","exact","children"]),i=(0,s.useRouter)().pathname;return(r?i===n:i.startsWith(n))&&(o.className+=" active"),(0,t.jsx)(a.default,{href:n,children:(0,t.jsx)("a",c({},o,{children:l}))})}function m(e){e.container;return(0,t.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark no-flow",children:(0,t.jsxs)("div",{className:"container-fluid ",children:[(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{className:"navbar-brand",href:"#",children:(0,t.jsx)("img",{src:"/assets/logo.png",width:128,height:52})})}),(0,t.jsx)("button",{className:"navbar-toggler border-none",align:"right",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("span",{className:"navbar-toggler-icon"})}),(0,t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,t.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0 nav ms-auto no-flow",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(u,{href:"/about",className:"link-light nav-link ",children:"About"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(u,{href:"/calendar",className:"nav-link link-light",children:"KSB Calendar"})}),(0,t.jsxs)("li",{className:"nav-item dropdown",children:[(0,t.jsx)(u,{href:"/events",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Events"}),(0,t.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,t.jsx)(u,{href:"/events/business-matters",className:"dropdown-item",children:"Business Matters"}),(0,t.jsx)(u,{href:"/events/summit",className:"dropdown-item",children:"KSB Summit"}),(0,t.jsx)(u,{href:"/events/learn-more",className:"dropdown-item",children:"Learn More"})]})]}),(0,t.jsxs)("li",{className:"nav-item dropdown",children:[(0,t.jsx)(u,{href:"/community",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Our Community"}),(0,t.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,t.jsx)(u,{href:"/community/team",className:"dropdown-item",children:"Our Team"}),(0,t.jsx)(u,{href:"/community/clubs",className:"dropdown-item",children:"KSB Clubs"}),(0,t.jsx)(u,{href:"/community/contact",className:"dropdown-item",children:"Contact Us"})]})]}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{className:"btn btn-outline-light hover:bg-[#AD4C66] hover:border-[#AD4C66] ml-2",href:"https://form.typeform.com/to/ImW405p0",target:"_blank",rel:"noopener noreferrer",children:"Subscribe Us"})})]})})]})})}function h(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("footer",{className:"py-5 bg-dark",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("p",{className:"m-0 text-center text-white",children:"Copyright \xa9 Koppelman SLC 2022"})})})})}u.propTypes={href:o().string.isRequired,exact:o().bool},u.defaultProps={exact:!1};var x=r(9008);function p(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(x.default,{children:[(0,t.jsx)("link",{rel:"icon",href:"slc-icon32x32.ico"}),(0,t.jsx)("title",{children:"Koppelman Student Leadership Council"}),(0,t.jsx)("meta",{name:"keywords",content:"slc, brooklyn, brooklyn college, cuny, Koppelman student leader council, brooklyn student leadership council, brooklyn college business, brooklyn college leadership, koppelman school of business"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,t.jsx)("meta",{name:"description",content:"The SLC aims to inspire and encourage students to take the lead in their personal and professional lives. We aim to ensure students are equipped with the resources and knowledge they need to dive into their professional careers."}),(0,t.jsx)("meta",{name:"author",content:"Koppelman Student Leadership Council"})]}),(0,t.jsxs)("body",{className:"pb-5",children:[(0,t.jsx)(m,{}),(0,t.jsx)("div",{className:" container mx-auto px-5",children:e.children})]}),"  ",(0,t.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"}),(0,t.jsx)(h,{})]})}},634:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(5893);function a(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{className:"btn-slc",rel:"noopener noreferrer",target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLScUevWRKsB14P99PNQrV5r6k9jpnTUCs4vI1YJVMGO5YzOg4w/viewform?fbclid=IwAR00LbEcQzNEP34fCCUy11zlH6CkwbZsJPBm8J0XfIHdZJn1ahKHnOnyC7o",children:(0,t.jsx)("span",{children:"Join Us "})}),(0,t.jsx)("div",{align:"center",className:"socialbtns"})]})}},1031:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(5893),a=r(2185);function s(e){var n=e.children,r=e.breadcrumb;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("br",{}),r&&(0,t.jsx)(a.Z,{}),(0,t.jsx)("br",{}),(0,t.jsx)("h1",{className:"-mt-[20px] link link--metis text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-12 ml-2",children:n})]})})}},1149:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p}});var t=r(4051),a=r.n(t),s=r(5893),l=r(6503),o=r(1031),i=r(1676),c=r(3680),d=(r(7294),r(3458)),u=(0,d.WS)((0,d.OI)((function(e){return(0,s.jsx)(d.b6,{defaultZoom:15,defaultCenter:{lat:40.63123560034159,lng:-73.95241238859913},children:e.isMarkerShown&&(0,s.jsx)(d.Jx,{position:{lat:40.63123560034159,lng:-73.95241238859913}})})}))),m=r(9101),h=r(634);function x(e,n,r,t,a,s,l){try{var o=e[s](l),i=o.value}catch(c){return void r(c)}o.done?n(i):Promise.resolve(i).then(t,a)}var p=function(){var e=function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:event.preventDefault(),m.ZP.sendForm("service_3wgvjnc","template_cgpz9g9",n.target,"user_bUjdCRqLeJSakqKuFlLB7").then((function(e){window.location.reload()}),(function(e){console.log(e.text)}));case 2:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function l(e){x(s,t,a,l,o,"next",e)}function o(e){x(s,t,a,l,o,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(o.Z,{breadcrumb:!0,children:"Contact  "}),(0,s.jsxs)("span",{className:"float-right",children:[(0,s.jsx)(h.Z,{})," "]}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["Complete the form below or email us at ",(0,s.jsx)("b",{children:"brooklynslcouncil@gmail.com"})]}),(0,s.jsxs)(i.Z,{onSubmit:e,action:"https://brooklynslcouncil.com/mail/contact_me.php",children:[(0,s.jsxs)(i.Z.Group,{children:[(0,s.jsx)(i.Z.Label,{children:"Name"}),(0,s.jsx)(i.Z.Control,{id:"name",required:!0,className:"dark-focus",type:"text",placeholder:"John Doe"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(i.Z.Group,{controlId:"formBasicEmail",children:[(0,s.jsx)(i.Z.Label,{children:"Email address"}),(0,s.jsx)(i.Z.Control,{id:"email",required:!0,className:"dark-focus",type:"email",placeholder:"johndoe@gmail.com"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(i.Z.Group,{children:[(0,s.jsx)(i.Z.Label,{children:"Phone Number"}),(0,s.jsx)(i.Z.Control,{id:"phone",required:!0,className:"dark-focus",type:"number",placeholder:"Interview Request"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(i.Z.Group,{children:[(0,s.jsx)(i.Z.Label,{children:"Message"}),(0,s.jsx)(i.Z.Control,{id:"message",className:"dark-focus",as:"textarea",rows:3,placeholder:"Message."})]}),(0,s.jsx)("br",{}),(0,s.jsx)(c.Z,{type:"submit",className:"black-text",children:"SUBMIT"})]}),(0,s.jsxs)("div",{className:"mt-5 mb-3",align:"center",children:[(0,s.jsx)("b",{children:" Mailing Address"})," ",(0,s.jsx)("br",{}),"2900 Bedford Ave. ",(0,s.jsx)("br",{}),"Brooklyn, NY 11210 ",(0,s.jsx)("br",{})]}),(0,s.jsx)("div",{className:"mb-5 ",children:(0,s.jsx)(u,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAHedcWWJ17w-V1js7ERyz3USvPosmjNKQ",containerElement:(0,s.jsx)("div",{style:{height:"400px"}}),mapElement:(0,s.jsx)("div",{style:{height:"100%"}}),loadingElement:(0,s.jsx)("div",{children:"Loading"}),isMarkerShown:!0})})]})})}}},function(e){e.O(0,[726,324,774,888,179],(function(){return n=661,e(e.s=n);var n}));var n=e.O();_N_E=n}]);