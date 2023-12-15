"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=i,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||n;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(87462),i=r(63366),n=(r(67294),r(3905)),o=["components"],s={id:"druid-vs-redshift",title:"Apache Druid vs Redshift"},d=void 0,l={unversionedId:"comparisons/druid-vs-redshift",id:"comparisons/druid-vs-redshift",title:"Apache Druid vs Redshift",description:"\x3c!--",source:"@site/docs/28.0.1/comparisons/druid-vs-redshift.md",sourceDirName:"comparisons",slug:"/comparisons/druid-vs-redshift",permalink:"/docs/28.0.1/comparisons/druid-vs-redshift",draft:!1,tags:[],version:"current",frontMatter:{id:"druid-vs-redshift",title:"Apache Druid vs Redshift"}},u={},c=[{value:"How does Druid compare to Redshift?",id:"how-does-druid-compare-to-redshift",level:3},{value:"Real-time data ingestion",id:"real-time-data-ingestion",level:3},{value:"Druid is a read oriented analytical data store",id:"druid-is-a-read-oriented-analytical-data-store",level:3},{value:"Data distribution model",id:"data-distribution-model",level:3},{value:"Replication strategy",id:"replication-strategy",level:3},{value:"Indexing strategy",id:"indexing-strategy",level:3}],p={toc:c},m="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"how-does-druid-compare-to-redshift"},"How does Druid compare to Redshift?"),(0,n.kt)("p",null,"In terms of drawing a differentiation, Redshift started out as ParAccel (Actian), which Amazon is licensing and has since heavily modified."),(0,n.kt)("p",null,"Aside from potential performance differences, there are some functional differences:"),(0,n.kt)("h3",{id:"real-time-data-ingestion"},"Real-time data ingestion"),(0,n.kt)("p",null,"Because Druid is optimized to provide insight against massive quantities of streaming data; it is able to load and aggregate data in real-time."),(0,n.kt)("p",null,"Generally traditional data warehouses including column stores work only with batch ingestion and are not optimal for streaming data in regularly."),(0,n.kt)("h3",{id:"druid-is-a-read-oriented-analytical-data-store"},"Druid is a read oriented analytical data store"),(0,n.kt)("p",null,"Druid\u2019s write semantics are not as fluid and does not support full joins (we support large table to small table joins). Redshift provides full SQL support including joins and insert/update statements."),(0,n.kt)("h3",{id:"data-distribution-model"},"Data distribution model"),(0,n.kt)("p",null,'Druid\u2019s data distribution is segment-based and leverages a highly available "deep" storage such as S3 or HDFS. Scaling up (or down) does not require massive copy actions or downtime; in fact, losing any number of Historical processes does not result in data loss because new Historical processes can always be brought up by reading data from "deep" storage.'),(0,n.kt)("p",null,"To contrast, ParAccel\u2019s data distribution model is hash-based. Expanding the cluster requires re-hashing the data across the nodes, making it difficult to perform without taking downtime. Amazon\u2019s Redshift works around this issue with a multi-step process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"set cluster into read-only mode"),(0,n.kt)("li",{parentName:"ul"},"copy data from cluster to new cluster that exists in parallel"),(0,n.kt)("li",{parentName:"ul"},"redirect traffic to new cluster")),(0,n.kt)("h3",{id:"replication-strategy"},"Replication strategy"),(0,n.kt)("p",null,"Druid employs segment-level data distribution meaning that more processes can be added and rebalanced without having to perform a staged swap. The replication strategy also makes all replicas available for querying. Replication is done automatically and without any impact to performance."),(0,n.kt)("p",null,"ParAccel\u2019s hash-based distribution generally means that replication is conducted via hot spares. This puts a numerical limit on the number of nodes you can lose without losing data, and this replication strategy often does not allow the hot spare to help share query load."),(0,n.kt)("h3",{id:"indexing-strategy"},"Indexing strategy"),(0,n.kt)("p",null,"Along with column oriented structures, Druid uses indexing structures to speed up query execution when a filter is provided. Indexing structures do increase storage overhead (and make it more difficult to allow for mutation), but they also significantly speed up queries."),(0,n.kt)("p",null,"ParAccel does not appear to employ indexing strategies."))}f.isMDXComponent=!0}}]);