"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[377],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,h=u["".concat(d,".").concat(c)]||u[c]||p[c]||o;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},92934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"data-management-api",title:"Data management API",sidebar_label:"Data management"},d=void 0,l={unversionedId:"api-reference/data-management-api",id:"api-reference/data-management-api",title:"Data management API",description:"\x3c!--",source:"@site/docs/28.0.1/api-reference/data-management-api.md",sourceDirName:"api-reference",slug:"/api-reference/data-management-api",permalink:"/docs/28.0.1/api-reference/data-management-api",draft:!1,tags:[],version:"current",frontMatter:{id:"data-management-api",title:"Data management API",sidebar_label:"Data management"},sidebar:"docs",previous:{title:"Retention rules",permalink:"/docs/28.0.1/api-reference/retention-rules-api"},next:{title:"Automatic compaction",permalink:"/docs/28.0.1/api-reference/automatic-compaction-api"}},m={},u=[{value:"Note for Coordinator&#39;s POST and DELETE APIs",id:"note-for-coordinators-post-and-delete-apis",level:2}],p={toc:u},c="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document describes the data management API endpoints for Apache Druid. This includes information on how to mark segments as ",(0,o.kt)("inlineCode",{parentName:"p"},"used")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"unused")," and delete them from Druid."),(0,o.kt)("h2",{id:"note-for-coordinators-post-and-delete-apis"},"Note for Coordinator's POST and DELETE APIs"),(0,o.kt)("p",null,"While segments may be enabled by issuing POST requests for the datasources, the Coordinator may again disable segments if they match any configured ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/operations/rule-configuration#drop-rules"},"drop rules"),". Even if segments are enabled by these APIs, you must configure a ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/operations/rule-configuration#load-rules"},"load rule")," to load them onto Historical processes. If an indexing or kill task runs at the same time these APIs are invoked, the behavior is undefined. Some segments might be killed and others might be enabled. It's also possible that all segments might be disabled, but the indexing task can still read data from those segments and succeed."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," Avoid using indexing or kill tasks and these APIs at the same time for the same datasource and time chunk.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /druid/coordinator/v1/datasources/{dataSourceName}")),(0,o.kt)("p",null,"Marks as used all segments belonging to a datasource. Returns a JSON object of the form\n",(0,o.kt)("inlineCode",{parentName:"p"},'{"numChangedSegments": <number>}')," with the number of segments in the database whose state has been changed (that is,\nthe segments were marked as used) as the result of this API call."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /druid/coordinator/v1/datasources/{dataSourceName}/segments/{segmentId}")),(0,o.kt)("p",null,"Marks as used a segment of a datasource. Returns a JSON object of the form ",(0,o.kt)("inlineCode",{parentName:"p"},'{"segmentStateChanged": <boolean>}')," with\nthe boolean indicating if the state of the segment has been changed (that is, the segment was marked as used) as the\nresult of this API call."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /druid/coordinator/v1/datasources/{dataSourceName}/markUsed")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /druid/coordinator/v1/datasources/{dataSourceName}/markUnused")),(0,o.kt)("p",null,"Marks segments (un)used for a datasource by interval or set of segment Ids. When marking used only segments that are not overshadowed will be updated."),(0,o.kt)("p",null,"The request payload contains the interval or set of segment IDs to be marked unused.\nEither interval or segment IDs should be provided, if both or none are provided in the payload, the API would throw an error (400 BAD REQUEST)."),(0,o.kt)("p",null,"Interval specifies the start and end times as IS0 8601 strings. ",(0,o.kt)("inlineCode",{parentName:"p"},"interval=(start/end)")," where start and end both are inclusive and only the segments completely contained within the specified interval will be disabled, partially overlapping segments will not be affected."),(0,o.kt)("p",null,"JSON Request Payload:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"interval")),(0,o.kt)("td",{parentName:"tr",align:null},"The interval for which to mark segments unused"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"2015-09-12T03:00:00.000Z/2015-09-12T05:00:00.000Z"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"segmentIds")),(0,o.kt)("td",{parentName:"tr",align:null},"Set of segment IDs to be marked unused"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'["segmentId1", "segmentId2"]'))))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /druid/coordinator/v1/datasources/{dataSourceName}")),(0,o.kt)("p",null,"Marks as unused all segments belonging to a datasource. Returns a JSON object of the form\n",(0,o.kt)("inlineCode",{parentName:"p"},'{"numChangedSegments": <number>}')," with the number of segments in the database whose state has been changed (that is,\nthe segments were marked as unused) as the result of this API call."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /druid/coordinator/v1/datasources/{dataSourceName}/intervals/{interval}"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"@Deprecated. /druid/coordinator/v1/datasources/{dataSourceName}?kill=true&interval={myInterval}")),(0,o.kt)("p",null,"Runs a ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/tasks"},"Kill task")," for a given interval and datasource."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /druid/coordinator/v1/datasources/{dataSourceName}/segments/{segmentId}")),(0,o.kt)("p",null,"Marks as unused a segment of a datasource. Returns a JSON object of the form ",(0,o.kt)("inlineCode",{parentName:"p"},'{"segmentStateChanged": <boolean>}')," with\nthe boolean indicating if the state of the segment has been changed (that is, the segment was marked as unused) as the\nresult of this API call."))}h.isMDXComponent=!0}}]);