"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9847],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,y=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},91504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],u={id:"tutorial-jupyter-index",title:"Jupyter Notebook tutorials",sidebar_label:"Jupyter Notebook tutorials"},s=void 0,l={unversionedId:"tutorials/tutorial-jupyter-index",id:"tutorials/tutorial-jupyter-index",title:"Jupyter Notebook tutorials",description:"\x3c!--",source:"@site/docs/28.0.1/tutorials/tutorial-jupyter-index.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-jupyter-index",permalink:"/docs/28.0.1/tutorials/tutorial-jupyter-index",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-jupyter-index",title:"Jupyter Notebook tutorials",sidebar_label:"Jupyter Notebook tutorials"},sidebar:"docs",previous:{title:"Query from deep storage",permalink:"/docs/28.0.1/tutorials/tutorial-query-deep-storage"},next:{title:"Docker for tutorials",permalink:"/docs/28.0.1/tutorials/tutorial-jupyter-docker"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Python API for Druid",id:"python-api-for-druid",level:2},{value:"Tutorials",id:"tutorials",level:2}],c={toc:d},h="wrapper";function y(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)(h,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can try out the Druid APIs using the Jupyter Notebook-based tutorials. These\ntutorials provide snippets of Python code that you can use to run calls against\nthe Druid API to complete the tutorial."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The simplest way to get started is to use Docker. In this case, you only need to set up Docker Desktop.\nFor more information, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/28.0.1/tutorials/tutorial-jupyter-docker"},"Docker for Jupyter Notebook tutorials"),"."),(0,a.kt)("p",null,"Otherwise, you can install the prerequisites on your own. Here's what you need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An available Druid instance."),(0,a.kt)("li",{parentName:"ul"},"Python 3.7 or later"),(0,a.kt)("li",{parentName:"ul"},"JupyterLab (recommended) or Jupyter Notebook running on a non-default port.\nBy default, Druid and Jupyter both try to use port ",(0,a.kt)("inlineCode",{parentName:"li"},"8888"),", so start Jupyter on a different port."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"requests")," Python package"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"druidapi")," Python package")),(0,a.kt)("p",null,"For setup instructions, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/28.0.1/tutorials/tutorial-jupyter-docker#tutorial-setup-without-using-docker"},"Tutorial setup without using Docker"),".\nIndividual tutorials may require additional Python packages, such as for visualization or streaming ingestion."),(0,a.kt)("h2",{id:"python-api-for-druid"},"Python API for Druid"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"druidapi")," Python package is a REST API for Druid.\nOne of the notebooks shows how to use the Druid REST API. The others focus on other\ntopics and use a simple set of Python wrappers around the underlying REST API. The\nwrappers reside in the ",(0,a.kt)("inlineCode",{parentName:"p"},"druidapi")," package within the notebooks directory. While the package\ncan be used in any Python program, the key purpose, at present, is to support these\nnotebooks. See\n",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/druid/master/examples/quickstart/jupyter-notebooks/notebooks/01-introduction/01-druidapi-package-intro.ipynb"},"Introduction to the Druid Python API"),"\nfor an overview of the Python API."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"druidapi")," package is already installed in the custom Jupyter Docker container for Druid tutorials."),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("p",null,"The notebooks are located in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/tree/master/examples/quickstart/jupyter-notebooks/"},"apache/druid repo"),". You can either clone the repo or download the notebooks you want individually."),(0,a.kt)("p",null,"The links that follow are the raw GitHub URLs, so you can use them to download the notebook directly, such as with ",(0,a.kt)("inlineCode",{parentName:"p"},"wget"),", or manually through your web browser. Note that if you save the file from your web browser, make sure to remove the ",(0,a.kt)("inlineCode",{parentName:"p"},".txt")," extension."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/apache/druid/master/examples/quickstart/jupyter-notebooks/notebooks/04-api/00-getting-started.ipynb"},"Introduction to the Druid REST API")," walks you through some of the\nbasics related to the Druid REST API and several endpoints."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/apache/druid/master/examples/quickstart/jupyter-notebooks/notebooks/01-introduction/01-druidapi-package-intro.ipynb"},"Introduction to the Druid Python API")," walks you through some of the\nbasics related to the Druid API using the Python wrapper API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/apache/druid/master/examples/quickstart/jupyter-notebooks/notebooks/03-query/00-using-sql-with-druidapi.ipynb"},"Learn the basics of Druid SQL")," introduces you to the unique aspects of Druid SQL with the primary focus on the SELECT statement."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/apache/druid/master/examples/quickstart/jupyter-notebooks/notebooks/02-ingestion/01-streaming-from-kafka.ipynb"},"Ingest and query data from Apache Kafka")," walks you through ingesting an event stream from Kafka.")))}y.isMDXComponent=!0}}]);