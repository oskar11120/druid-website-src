"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"influx",title:"InfluxDB Line Protocol Parser"},l=void 0,p={unversionedId:"development/extensions-contrib/influx",id:"development/extensions-contrib/influx",title:"InfluxDB Line Protocol Parser",description:"\x3c!--",source:"@site/docs/28.0.1/development/extensions-contrib/influx.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/influx",permalink:"/docs/28.0.1/development/extensions-contrib/influx",draft:!1,tags:[],version:"current",frontMatter:{id:"influx",title:"InfluxDB Line Protocol Parser"}},c={},u=[{value:"Line Protocol",id:"line-protocol",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use this Apache Druid extension, ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-influx-extensions")," in the extensions load list."),(0,i.kt)("p",null,"This extension enables Druid to parse the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v1.5/write_protocols/line_protocol_tutorial/"},"InfluxDB Line Protocol"),", a popular text-based timeseries metric serialization format."),(0,i.kt)("h2",{id:"line-protocol"},"Line Protocol"),(0,i.kt)("p",null,"A typical line looks like this:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cpu,application=dbhost=prdb123,region=us-east-1 usage_idle=99.24,usage_user=0.55 1520722030000000000")),(0,i.kt)("p",null,"which contains four parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"measurement: A string indicating the name of the measurement represented (e.g. cpu, network, web_requests)"),(0,i.kt)("li",{parentName:"ul"},"tags: zero or more key-value pairs (i.e. dimensions)"),(0,i.kt)("li",{parentName:"ul"},"measurements: one or more key-value pairs; values can be numeric, boolean, or string"),(0,i.kt)("li",{parentName:"ul"},"timestamp: nanoseconds since Unix epoch (the parser truncates it to milliseconds)")),(0,i.kt)("p",null,"The parser extracts these fields into a map, giving the measurement the key ",(0,i.kt)("inlineCode",{parentName:"p"},"measurement")," and the timestamp the key ",(0,i.kt)("inlineCode",{parentName:"p"},"_ts"),". The tag and measurement keys are copied verbatim, so users should take care to avoid name collisions. It is up to the ingestion spec to decide which fields should be treated as dimensions and which should be treated as metrics (typically tags correspond to dimensions and measurements correspond to metrics)."),(0,i.kt)("p",null,"The parser is configured like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"parser": {\n      "type": "string",\n      "parseSpec": {\n        "format": "influx",\n        "timestampSpec": {\n          "column": "__ts",\n          "format": "millis"\n        },\n        "dimensionsSpec": {\n          "dimensionExclusions": [\n            "__ts"\n          ]\n        },\n        "whitelistMeasurements": [\n          "cpu"\n        ]\n      }\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"whitelistMeasurements")," field is an optional list of strings. If present, measurements that do not match one of the strings in the list will be ignored."))}f.isMDXComponent=!0}}]);