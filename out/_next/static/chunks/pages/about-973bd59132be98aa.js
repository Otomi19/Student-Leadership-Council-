(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(6075)}])},1031:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(2185);function i(e){var t=e.children,n=e.breadcrumb;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("br",{}),n&&(0,r.jsx)(o.Z,{}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{className:"-mt-[20px] link link--metis text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-12 ml-2",children:t})]})})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},s=n(6273),l=n(387),u=n(7190);var c={};function f(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),i=a.default.useMemo((function(){var t=o(s.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?s.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),d=i.href,p=i.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var g=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,x=o(u.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],S=a.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);a.default.useEffect((function(){var e=w&&n&&s.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,o=c[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,w,b,n,r]);var _={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:a}))}(e,r,d,p,m,v,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:r&&r.locale,C=r&&r.isLocaleDomain&&s.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);_.href=C||s.addBasePath(s.addLocale(p,E,r&&r.defaultLocale))}return a.default.cloneElement(t,_)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,u=i.useRef(),c=o(i.useState(!1),2),f=c[0],d=c[1],p=o(i.useState(t?t.current:null),2),h=p[0],m=p[1],v=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]);return i.useEffect((function(){if(!s&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){t&&m(t.current)}),[t]),[v,f]};var i=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map},6075:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(6503),i=n(1031),a=(n(3788),n(2379)),s=n(9718);t.default=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(i.Z,{breadcrumb:!0,children:"Who We Are"}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:" row shadow-big min-h-[150px] m-auto self-center rounded-10 pt-3",children:(0,r.jsxs)("div",{className:"justify-content-center align-self-center text-center",children:[(0,r.jsxs)("p",{className:"text-2xl lg:text-3xl",children:["The purpose of the Student Leadership Council (SLC) is ",(0,r.jsx)("b",{children:"two-fold:"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"(1)"})," To enrich the campus experience of Koppelman School of Business students and promote their involvement in activities designed to enhance their professional and personal development and ",(0,r.jsx)("b",{children:"(2)"})," to help raise the visibility of the Koppelman School of Business."]})})]})}),(0,r.jsx)("br",{}),(0,r.jsx)(s.Z,{title:"Team Work",image:"/assets/promotion/community.jpg",content:"The growth of the Student Leadership Council is in part facilitated by the diverse blend of ideas and unique talents of all its members. Much of the SLC's success can be attributed to its executive board and members at large who continually strive to increase its visibility and influence."}),(0,r.jsx)("br",{}),(0,r.jsx)(a.Z,{title:"Build Skills",image:"/assets/promotion/initiative.jpg",content:"The Student Leadership Council offers a unique opportunity for Brooklyn College undergraduate and graduate business majors to build tangible leadership skills, connect with the student body, and cultivate long-lasting relationships with professionals."}),(0,r.jsx)("br",{}),(0,r.jsx)(s.Z,{title:"Events and Clubs",image:"/assets/promotion/business-matters.jpg",content:"Throughout the academic year, we offer support and guidance to fellow business clubs and organizations. Our signature events are the Business Matters! Symposium and the KSB Summit."})]})]})})}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[335,774,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);