webpackJsonp([16],{2177:function(e,t,n){"use strict";e.exports=n(2179)},2178:function(e,t,n){"use strict";var r=n(25),o=n(2181);r.Observable.prototype.distinct=o.distinct},2179:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return a.default.createElement("div",{className:s.default.container},a.default.createElement("a",{href:"/"},a.default.createElement(i.default,{type:"logo",className:s.default.logo})),a.default.createElement("p",{className:s.default.text},"Make something awesome"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var l=n(1),a=r(l),u=n(21),i=r(u),c=n(2180),s=r(c)},2180:function(e,t){e.exports={container:"_2WMKE",logo:"_1Ig-9",text:"_1cQDt"}},2181:function(e,t,n){"use strict";function r(e,t){return this.lift(new u(e,t))}var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},l=n(431),a=n(432);t.distinct=r;var u=function(){function e(e,t){this.compare=e,this.flushes=t}return e.prototype.call=function(e,t){return t._subscribe(new i(e,this.compare,this.flushes))},e}(),i=function(e){function t(t,n,r){e.call(this,t),this.values=[],"function"==typeof n&&(this.compare=n),r&&this.add(a.subscribeToResult(this,r))}return o(t,e),t.prototype.notifyNext=function(e,t,n,r,o){this.values.length=0},t.prototype.notifyError=function(e,t){this._error(e)},t.prototype._next=function(e){var t=!1,n=this.values,r=n.length;try{for(var o=0;o<r;o++)if(this.compare(n[o],e))return void(t=!0)}catch(e){return void this.destination.error(e)}this.values.push(e),this.destination.next(e)},t.prototype.compare=function(e,t){return e===t},t}(l.OuterSubscriber);t.DistinctSubscriber=i},2188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TEST_ATTRIBUTE="page-header-title"},2189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.title,n=e.className,r=e.children;return a.default.createElement("div",{className:(0,i.default)(s.default.container,n)},a.default.createElement("div",{className:s.default.containerPageHeader},a.default.createElement("h1",{className:s.default.title,"data-test":d.TEST_ATTRIBUTE},t),a.default.createElement("div",{className:s.default.children},r)))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var l=n(1),a=r(l),u=n(2),i=r(u),c=n(2193),s=r(c),d=n(2188);o.propTypes={title:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.element]).isRequired,className:l.PropTypes.string,children:l.PropTypes.element}},2190:function(e,t,n){"use strict";e.exports=n(2189)},2193:function(e,t){e.exports={container:"_2v9nm _1iK9o _22ZDn dvlCB",containerPageHeader:"gyGom _22ZDn dvlCB CTQC5",title:"_1GUcz _2lCRJ",children:"_3NchO _2W2Kx _30lHv _1vc38 G9m3o"}},2219:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.CollectionFeed=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),s=o(c),d=n(6),f=n(25);n(175),n(176),n(424),n(262),n(2178),n(177),n(136);var p=n(441),h=n(15),m=r(h),y=n(91),v=o(y),_=n(2235),b=n(5),P=n(67),T=n(2222),E=o(T),g=n(2226),C=o(g),O=n(2224),w=o(O),M=n(2230),F=o(M),k=n(2228),x=o(k),j=n(260),N=o(j),R=n(2177),S=o(R),q=n(2236),A=o(q),D=(0,P.normalizeResponse)("collectionList"),B="CollectionFeed",U={type:c.PropTypes.oneOf(["all","curated","featured","user"]),collections:c.PropTypes.array,handleFetch:c.PropTypes.func,maxPage:c.PropTypes.number,perPage:c.PropTypes.number.isRequired,location:c.PropTypes.object.isRequired,lastPageFetched:c.PropTypes.number,showPlaceholder:c.PropTypes.bool,updateData:c.PropTypes.func.isRequired,addCollectionsToCollectionFeed:c.PropTypes.func.isRequired},L={collections:[],handleFetch:null,intialPage:2,showPlaceholder:!1},I="collectionFeedLoaded",z="collectionFeedMounted",Z=t.CollectionFeed=function(e){function t(){l(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.measured=!1,e}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this.addScrollSubscription(),_.userTiming.mark(z)}},{key:"componentDidUpdate",value:function(e){var t=e.showPlaceholder&&!this.props.showPlaceholder,n=!e.showPlaceholder;if(!this.measured&&(t||n)){_.userTiming.mark(I);var r={start:z,end:I};(0,_.measureMarks)(r),(0,_.getMeasureAndReport)(r),this.measured=!0}}},{key:"componentWillUnmount",value:function(){this.removeScrollSubscription()}},{key:"addScrollSubscription",value:function(){var e=this,t=f.Observable.fromEvent(window,"scroll").filter(function(){return(0,b.shouldFetchMoreContent)()}).map(function(){return e.props.lastPageFetched}).distinct();this.scrollSubscription=t.subscribe(this.fetchCollections.bind(this)),this.fetchCollections()}},{key:"removeScrollSubscription",value:function(){this.scrollSubscription&&this.scrollSubscription.unsubscribe(),this.fetchSubscription&&this.fetchSubscription.unsubscribe()}},{key:"fetchCollections",value:function(){var e=this.props,t=e.handleFetch,n=e.maxPage,r=e.location,o=e.lastPageFetched,l=e.perPage,a=e.updateData,u=e.addCollectionsToCollectionFeed;if(t&&!(o>n)){var i=o+1,c=f.Observable.defer(function(){return t(i,l).then(p.toJson).then(D)}).retry(3).take(1);this.fetchSubscription=c.subscribe(function(e){var t=e.entities,n=e.result;(0,b.trackPageView)(r),a(t),u({collectionIds:n,lastPageFetched:i})},function(e){v.default.captureException(e,{tags:{component:"CollectionFeed"}})})}}},{key:"renderSpinnerOrEndContent",value:function(){var e=this.props,t=e.maxPage,n=e.lastPageFetched;return n<t?s.default.createElement(N.default,null):s.default.createElement(S.default,null)}},{key:"renderCollectionType",value:function(){var e=this.props,t=e.type,n=e.collections;switch(t){case"curated":return s.default.createElement(w.default,{collections:n});case"featured":return s.default.createElement(C.default,{collections:n});case"user":return s.default.createElement(F.default,{collections:n});case"all":return s.default.createElement(E.default,{collections:n});default:return v.default.captureException("unexpected collection feed type",{tags:{component:"CollectionFeed"}}),null}}},{key:"render",value:function(){var e=this.props,t=e.showPlaceholder,n=e.type;return t?s.default.createElement(x.default,{type:n}):s.default.createElement("div",{className:A.default.container},this.renderCollectionType(),this.renderSpinnerOrEndContent())}}]),t}(c.Component);Z.propTypes=U,Z.defaultProps=L,Z.displayName=B;var G={updateData:m.updateData,addCollectionsToCollectionFeed:m.addCollectionsToCollectionFeed};t.default=(0,d.connect)(null,G)(Z)},2220:function(e,t,n){"use strict";e.exports=n(2219)},2221:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,l=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw l}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=n(1),a=r(l),u=n(2240),i=r(u),c=n(430),s=r(c),d=n(423),f=r(d),p="CollectionFeedAll",h={collections:l.PropTypes.array.isRequired},m=function(e){var t=e.collections,n=(0,i.default)(t,8);return a.default.createElement("div",null,n.map(function(e,t){var n=(0,s.default)(e,"curated"),r=o(n,2),l=r[0],u=r[1];return a.default.createElement("div",{key:t},a.default.createElement("div",null,l.map(function(e,t){return a.default.createElement(f.default,{key:t,collection:e,columns:2})})),a.default.createElement("div",null,u.map(function(e,t){return a.default.createElement(f.default,{key:t,collection:e,columns:3})})))}))};m.displayName=p,m.propTypes=h,t.default=m},2222:function(e,t,n){"use strict";e.exports=n(2221)},2223:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=r(o),a=n(423),u=r(a),i="CollectionFeedCurated",c={collections:o.PropTypes.array.isRequired},s=function(e){var t=e.collections,n=t.map(function(e,t){var n=t<=1?1:2;return l.default.createElement(u.default,{key:t,collection:e,columns:n})});return l.default.createElement("div",null,n)};s.displayName=i,s.propTypes=c,t.default=s},2224:function(e,t,n){"use strict";e.exports=n(2223)},2225:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=r(o),a=n(423),u=r(a),i="CollectionFeedFeatured",c={collections:o.PropTypes.array.isRequired},s=function(e){var t=e.collections;return l.default.createElement("div",null,t.map(function(e,t){return l.default.createElement(u.default,{key:t,collection:e,columns:3})}))};s.displayName=i,s.propTypes=c,t.default=s},2226:function(e,t,n){"use strict";e.exports=n(2225)},2227:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),a=r(l),u=n(34),i=r(u),c=n(35),s=r(c),d=n(37),f=r(d),p=n(2237),h=r(p),m=(0,i.default)((0,s.default)("CollectionFeedPlaceholder"),(0,f.default)({type:l.PropTypes.oneOf(["all","curated","featured","user"])})),y={all:8,curated:5,featured:9,user:4};t.default=m(function(e){var t=e.type,n="user"===t,r="all"===t,l="curated"===t,u=[].concat(o(Array(y[t]).keys()));return a.default.createElement("div",{className:h.default.container},u.map(function(e,t){return r&&t<2||n?a.default.createElement("div",{key:t,className:h.default.halfContainer},a.default.createElement("div",{className:h.default.half})):l&&t<2?a.default.createElement("div",{key:t,className:h.default.fullContainer},a.default.createElement("div",{className:h.default.full})):a.default.createElement("div",{key:t,className:h.default.thirdContainer},a.default.createElement("div",{className:h.default.third}))}))})},2228:function(e,t,n){"use strict";e.exports=n(2227)},2229:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,l=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw l}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=n(1),a=r(l),u=n(430),i=r(u),c=n(423),s=r(c),d=n(2238),f=r(d),p="CollectionFeedUser",h={collections:l.PropTypes.array.isRequired},m=function(e){var t=e.collections,n=(0,i.default)(t,"curated"),r=o(n,2),l=r[0],u=r[1];return a.default.createElement("div",{className:f.default.container},a.default.createElement("div",null,l.map(function(e,t){return a.default.createElement(s.default,{key:t,collection:e,columns:1})})),a.default.createElement("div",null,u.map(function(e,t){return a.default.createElement(s.default,{key:t,collection:e,columns:2})})))};m.displayName=p,m.propTypes=h,t.default=m},2230:function(e,t,n){"use strict";e.exports=n(2229)},2235:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getMeasureAndReport=t.reportMeasure=t.getMeasuresByName=t.measureMarks=t.getMeasureName=t.userTiming=void 0;var o=n(439),l=r(o),a=t.userTiming={mark:function(e){var t=window,n=t.performance;if(n&&n.mark)return n.mark(e)},measure:function(e,t,n){var r=window,o=r.performance;if(o&&o.measure)return o.measure(e,t,n)},getEntriesByType:function(e){var t=window,n=t.performance;return n&&n.getEntriesByType?n.getEntriesByType(e):[]}},u=t.getMeasureName=function(e){var t=e.start,n=e.end;return t+"-"+n},i=(t.measureMarks=function(e){var t=e.start,n=e.end;a.measure(u({start:t,end:n}),t,n)},t.getMeasuresByName=function(e){return a.getEntriesByType("measure").filter(function(t){return t.name===e})}),c=t.reportMeasure=function(e){var t="Test",n=e.name,r=e.duration;window.ga("send","timing",t,n,r)};t.getMeasureAndReport=function(e){var t=u(e),n=i(t),r=(0,l.default)(n);if(void 0!==r){var o=r;c(o)}}},2236:function(e,t){e.exports={container:"_3iqYm _22ZDn dvlCB"}},2237:function(e,t){e.exports={container:"rjSA7 _1iK9o _22ZDn dvlCB _3vG8-",fullContainer:"_2q62V _13jTO CTQC5 _1vc38",halfContainer:"vlmaW _13jTO _3kobr _1vc38",thirdContainer:"_1I7kb _13jTO _3kobr _2axTb _1vc38",full:"_1uq5P",half:"_1DUUw",third:"GwVdi",placeholderAnimation:"_9zdd9"}},2238:function(e,t){e.exports={container:"_2UD1L _22ZDn dvlCB"}},2240:function(e,t,n){function r(e,t){t=u(l(t),0);var n=e?e.length:0;if(!n||t<1)return[];for(var r=0,i=-1,c=Array(a(n/t));r<n;)c[++i]=o(e,r,r+=t);return c}var o=n(438),l=n(266),a=Math.ceil,u=Math.max;e.exports=r},2323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.TEST_ATTRIBUTE="collections-route"},2324:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=r(o),a=n(35),u=r(a),i=n(37),c=r(i),s=n(34),d=r(s),f=n(5),p=n(2190),h=r(p),m=n(2327),y=r(m),v=n(2337),_=r(v),b=n(2323),P=(0,d.default)((0,u.default)("CollectionShowcase"),(0,c.default)({children:o.PropTypes.element.isRequired,location:o.PropTypes.object.isRequired}));t.default=P(function(e){return l.default.createElement("div",{className:_.default.container,"data-test":b.TEST_ATTRIBUTE},l.default.createElement(h.default,{title:"Collections"},l.default.createElement("p",null,"Explore the world through collections of beautiful photos free to use under the ",l.default.createElement("a",{href:(0,f.railsUrl)()+"/license"},"Unsplash License"),".")),l.default.createElement(y.default,null),l.default.createElement("div",null,e.children))})},2325:function(e,t,n){"use strict";e.exports=n(2324)},2326:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),l=r(o),a=n(35),u=r(a),i=n(37),c=r(i),s=n(34),d=r(s),f=n(433),p=r(f),h=n(2338),m=r(h),y=(0,d.default)((0,u.default)("PageLink"),(0,c.default)({label:o.PropTypes.string.isRequired,pathname:o.PropTypes.string.isRequired}))(function(e){var t=e.label,n=e.pathname;return l.default.createElement(p.default,{to:{pathname:n},className:m.default.pageLink,activeClassName:m.default.activePageLink},t)}),v=(0,d.default)((0,u.default)("CollectionShowcaseNav"));t.default=v(function(){return l.default.createElement("div",{className:m.default.container},l.default.createElement(y,{label:"All",pathname:"/collections"}),l.default.createElement(y,{label:"Curated",pathname:"/collections/curated"}),l.default.createElement(y,{label:"Featured",pathname:"/collections/featured"}))})},2327:function(e,t,n){"use strict";e.exports=n(2326)},2330:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),d=o(s),f=n(6),p=n(134),h=o(p),m=n(22),y=o(m),v=n(15),_=r(v),b=n(28),P=o(b),T=n(111),E=n(5),g=n(67),C=n(181),O=n(275),w=n(2325),M=o(w),F=n(2220),k=o(F),x=n(2331),j=(0,g.normalizeResponse)("collectionList"),N={all:"custom.listCuratedFeaturedCollections",featured:"collections.listFeaturedCollections",curated:"collections.listCuratedCollections"},R="CollectionChildRoute",S={location:s.PropTypes.object.isRequired,routeName:s.PropTypes.string.isRequired,collectionFeed:s.PropTypes.object,collections:s.PropTypes.array,serverFetch:s.PropTypes.object.isRequired,updateData:s.PropTypes.func.isRequired,resetCollectionFeed:s.PropTypes.func.isRequired},q=function(e){function t(e){l(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleFetch=n.handleFetch.bind(n),n}return u(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateData,n=e.resetCollectionFeed,r=e.collectionFeed,o=e.serverFetch,l=e.routeName,a=r.perPage,u=void 0,i=N[l];if(!o[i]){var c=(0,y.default)(P.default,i);c(1,a).then(function(e){return u=Math.round(e.headers.get("x-total")/a),e}).then(b.toJson).then(j).then(function(e){var o=e.entities,l=e.result;t(o),n({collectionIds:l,orderBy:r.orderBy,lastPageFetched:1,perPage:a,maxPage:u})})}}},{key:"componentWillUnmount",value:function(){this.props.resetCollectionFeed()}},{key:"handleFetch",value:function(e,t){var n=this.props.routeName,r=N[n],o=(0,y.default)(P.default,r);return o(e,t)}},{key:"render",value:function(){var e=this.props,t=e.collectionFeed,n=e.collections,r=e.location,o=e.routeName,l=""+(0,E.nodeUrl)()+r.pathname,a=(0,y.default)(n,"[0].cover_photo"),u=0===n.length&&!t.maxPage,c=x.titles[o],s=x.descriptions[o],f=x.canonicals[o];return d.default.createElement(M.default,{location:r},d.default.createElement("div",null,d.default.createElement(h.default,{title:c,description:s,meta:(0,T.buildCollectionMetas)(a,c,s,l),link:(0,T.buildLinks)(f)}),d.default.createElement(k.default,i({},t,{showPlaceholder:u,type:o,collections:n,handleFetch:this.handleFetch,location:r}))))}}]),t}(s.Component);q.displayName=R,q.propTypes=S;var A=function(e){return{collections:(0,O.getDenormalizedCollections)(e),collectionFeed:(0,O.getCollectionFeed)(e),serverFetch:(0,C.getServerFetch)(e)}},D={updateData:_.updateData,resetCollectionFeed:_.resetCollectionFeed};t.default=(0,f.connect)(A,D)(q)},2331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.titles={all:"Collections",curated:"Curated Collections",featured:"Featured Collections"},t.descriptions={all:"Explore the world through community-created collections of beautiful photos free to use under the Unsplash License.",curated:"Every 10 days Unsplash features curated collections of 10 photos created by special guests.",featured:"Explore the world through community-created collections of beautiful photos free to use under the Unsplash License."},t.canonicals={all:"https://unsplash.com/collections",curated:"https://unsplash.com/collections/curated",featured:"https://unsplash.com/collections/featured"}},2332:function(e,t,n){"use strict";e.exports=n(2330)},2337:function(e,t){e.exports={container:"_3eaqv"}},2338:function(e,t){e.exports={container:"_3dEiM _22ZDn dvlCB",pageLink:"Cxg87 _21rCr",activePageLink:"uOBnF"}},2478:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){e.params,e.loadContext;return void t()}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),a=r(l),u=(n(28),n(67)),i=n(2332),c=r(i),s=((0,u.normalizeResponse)("collectionList"),"CollectionsAll"),d={location:l.PropTypes.object.isRequired},f=function(e){var t=e.location;return a.default.createElement(c.default,{location:t,routeName:"all"})};f.displayName=s,f.propTypes=d,f.loadProps=o,t.default=f},2479:function(e,t,n){"use strict";e.exports=n(2478)},2480:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2479),l=r(o);t.default={component:l.default}}});