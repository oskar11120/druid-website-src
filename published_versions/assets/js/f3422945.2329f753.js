"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4506],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(r),m=o,y=l["".concat(p,".").concat(m)]||l[m]||u[m]||s;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<s;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=r(58168),o=r(98587),s=(r(96540),r(15680)),a=["components"],i={id:"druid-aws-rds",title:"Druid AWS RDS Module"},p=void 0,d={unversionedId:"development/extensions-core/druid-aws-rds",id:"development/extensions-core/druid-aws-rds",title:"Druid AWS RDS Module",description:"\x3c!--",source:"@site/docs/29.0.0/development/extensions-core/druid-aws-rds.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/druid-aws-rds",permalink:"/docs/29.0.0/development/extensions-core/druid-aws-rds",draft:!1,tags:[],version:"current",frontMatter:{id:"druid-aws-rds",title:"Druid AWS RDS Module"}},c={},l=[],u={toc:l},m="wrapper";function y(e){var t=e.components,r=(0,o.A)(e,a);return(0,s.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://aws.amazon.com/rds/"},"AWS RDS")," is a managed service to operate relation databases such as PostgreSQL, Mysql etc. These databases could be accessed using static db password mechanism or via ",(0,s.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"},"AWS IAM")," temporary tokens. This module provides AWS RDS token ",(0,s.yg)("a",{parentName:"p",href:"/docs/29.0.0/operations/password-provider"},"password provider")," implementation to be used with ",(0,s.yg)("a",{parentName:"p",href:"/docs/29.0.0/development/extensions-core/mysql"},"mysql-metadata-store")," or ",(0,s.yg)("a",{parentName:"p",href:"/docs/29.0.0/development/extensions-core/postgresql"},"postgresql-metadata-store")," when mysql/postgresql is operated using AWS RDS."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{ "type": "aws-rds-token", "user": "USER", "host": "HOST", "port": PORT, "region": "AWS_REGION" }\n')),(0,s.yg)("p",null,"Before using this password provider, please make sure that you have connected all dots for db user to connect using token.\nSee ",(0,s.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html"},"AWS Guide"),"."),(0,s.yg)("p",null,"To use this extension, make sure you ",(0,s.yg)("a",{parentName:"p",href:"/docs/29.0.0/configuration/extensions#loading-extensions"},"include")," it in your config file along with other extensions e.g."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-aws-rds-extensions", "postgresql-metadata-storage", ...]\n')))}y.isMDXComponent=!0}}]);