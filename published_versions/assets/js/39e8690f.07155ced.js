"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8225],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var i=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,u=g["".concat(l,".").concat(m)]||g[m]||c[m]||r;return t?i.createElement(u,o(o({ref:n},d),{},{components:t})):i.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>g});var i=t(58168),a=t(98587),r=(t(96540),t(15680)),o=["components"],s={id:"partitioning",title:"Partitioning",sidebar_label:"Partitioning",description:"Describes time chunk and secondary partitioning in Druid. Provides guidance to choose a secondary partition dimension."},l=void 0,p={unversionedId:"ingestion/partitioning",id:"ingestion/partitioning",title:"Partitioning",description:"Describes time chunk and secondary partitioning in Druid. Provides guidance to choose a secondary partition dimension.",source:"@site/docs/29.0.0/ingestion/partitioning.md",sourceDirName:"ingestion",slug:"/ingestion/partitioning",permalink:"/docs/29.0.0/ingestion/partitioning",draft:!1,tags:[],version:"current",frontMatter:{id:"partitioning",title:"Partitioning",sidebar_label:"Partitioning",description:"Describes time chunk and secondary partitioning in Druid. Provides guidance to choose a secondary partition dimension."},sidebar:"docs",previous:{title:"Rollup",permalink:"/docs/29.0.0/ingestion/rollup"},next:{title:"Task reference",permalink:"/docs/29.0.0/ingestion/tasks"}},d={},g=[{value:"Time chunk partitioning",id:"time-chunk-partitioning",level:2},{value:"Secondary partitioning",id:"secondary-partitioning",level:2},{value:"Partitioning and sorting",id:"partitioning-and-sorting",level:2},{value:"How to configure partitioning",id:"how-to-configure-partitioning",level:2},{value:"Learn more",id:"learn-more",level:2}],c={toc:g},m="wrapper";function u(e){var n=e.components,t=(0,a.A)(e,o);return(0,r.yg)(m,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can use segment partitioning and sorting within your Druid datasources to reduce the size of your data and increase performance."),(0,r.yg)("p",null,"One way to partition is to load data into separate datasources. This is a perfectly viable approach that works very well when the number of datasources does not lead to excessive per-datasource overheads."),(0,r.yg)("p",null,"This topic describes how to set up partitions within a single datasource. It does not cover how to use multiple datasources. See ",(0,r.yg)("a",{parentName:"p",href:"/docs/29.0.0/querying/multitenancy"},"Multitenancy considerations")," for more details on splitting data into separate datasources and potential operational considerations."),(0,r.yg)("h2",{id:"time-chunk-partitioning"},"Time chunk partitioning"),(0,r.yg)("p",null,"Druid always partitions datasources by time into ",(0,r.yg)("em",{parentName:"p"},"time chunks"),". Each time chunk contains one or more segments. This partitioning happens for all ingestion methods based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"segmentGranularity")," parameter in your ingestion spec ",(0,r.yg)("inlineCode",{parentName:"p"},"dataSchema")," object."),(0,r.yg)("p",null,"Partitioning by time is important for two reasons:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Queries that filter by ",(0,r.yg)("inlineCode",{parentName:"li"},"__time")," (SQL) or ",(0,r.yg)("inlineCode",{parentName:"li"},"intervals")," (native) are able to use time partitioning to prune the set of segments to consider."),(0,r.yg)("li",{parentName:"ol"},"Certain data management operations, such as overwriting and compacting existing data, acquire exclusive write locks on time partitions."),(0,r.yg)("li",{parentName:"ol"},"Each segment file is wholly contained within a time partition. Too-fine-grained partitioning may cause a large number\nof small segments, which leads to poor performance.")),(0,r.yg)("p",null,"The most common choices to balance these considerations are ",(0,r.yg)("inlineCode",{parentName:"p"},"hour")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"day"),". For streaming ingestion, ",(0,r.yg)("inlineCode",{parentName:"p"},"hour")," is especially\ncommon, because it allows compaction to follow ingestion with less of a time delay."),(0,r.yg)("h2",{id:"secondary-partitioning"},"Secondary partitioning"),(0,r.yg)("p",null,"Druid can partition segments within a particular time chunk further depending upon options that vary based on the ingestion type you have chosen. In general, secondary partitioning on a particular dimension improves locality. This means that rows with the same value for that dimension are stored together, decreasing access time."),(0,r.yg)("p",null,'To achieve the best performance and smallest overall footprint, partition your data on a "natural"\ndimension that you often use as a filter when possible. Such partitioning often improves compression and query performance. For example, some cases have yielded threefold storage size decreases.'),(0,r.yg)("h2",{id:"partitioning-and-sorting"},"Partitioning and sorting"),(0,r.yg)("p",null,'Partitioning and sorting work well together. If you do have a "natural" partitioning dimension, consider placing it first in the ',(0,r.yg)("inlineCode",{parentName:"p"},"dimensions")," list of your ",(0,r.yg)("inlineCode",{parentName:"p"},"dimensionsSpec"),". This way Druid sorts rows within each segment by that column. This sorting configuration frequently improves compression more than using partitioning alone."),(0,r.yg)("p",null,"Note that Druid always sorts rows within a segment by timestamp first, even before the first dimension listed in your ",(0,r.yg)("inlineCode",{parentName:"p"},"dimensionsSpec"),". This sorting can preclude the efficacy of dimension sorting. To work around this limitation if necessary, set your ",(0,r.yg)("inlineCode",{parentName:"p"},"queryGranularity")," equal to ",(0,r.yg)("inlineCode",{parentName:"p"},"segmentGranularity")," in your ",(0,r.yg)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/ingestion-spec#granularityspec"},(0,r.yg)("inlineCode",{parentName:"a"},"granularitySpec")),". Druid will set all timestamps within the segment to the same value, letting you identify a ",(0,r.yg)("a",{parentName:"p",href:"/docs/29.0.0/ingestion/schema-design#secondary-timestamps"},"secondary timestamp"),' as the "real" timestamp.'),(0,r.yg)("h2",{id:"how-to-configure-partitioning"},"How to configure partitioning"),(0,r.yg)("p",null,"Not all ingestion methods support an explicit partitioning configuration, and not all have equivalent levels of flexibility. If you are doing initial ingestion through a less-flexible method like\nKafka), you can use ",(0,r.yg)("a",{parentName:"p",href:"/docs/29.0.0/data-management/update#reindex"},"reindexing")," or ",(0,r.yg)("a",{parentName:"p",href:"/docs/29.0.0/data-management/compaction"},"compaction")," to repartition your data after initial ingestion. This is a powerful technique you can use to optimally partition any data older than a certain time threshold while you continuously add new data from a stream."),(0,r.yg)("p",null,"The following table shows how each ingestion method handles partitioning:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Method"),(0,r.yg)("th",{parentName:"tr",align:null},"How it works"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/ingestion/native-batch"},"Native batch")),(0,r.yg)("td",{parentName:"tr",align:null},"Configured using ",(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/ingestion/native-batch#partitionsspec"},(0,r.yg)("inlineCode",{parentName:"a"},"partitionsSpec"))," inside the ",(0,r.yg)("inlineCode",{parentName:"td"},"tuningConfig"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/multi-stage-query/"},"SQL")),(0,r.yg)("td",{parentName:"tr",align:null},"Configured using ",(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/multi-stage-query/concepts#partitioning"},(0,r.yg)("inlineCode",{parentName:"a"},"PARTITIONED BY"))," and ",(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/multi-stage-query/concepts#clustering"},(0,r.yg)("inlineCode",{parentName:"a"},"CLUSTERED BY")),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/ingestion/hadoop"},"Hadoop")),(0,r.yg)("td",{parentName:"tr",align:null},"Configured using ",(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/ingestion/hadoop#partitionsspec"},(0,r.yg)("inlineCode",{parentName:"a"},"partitionsSpec"))," inside the ",(0,r.yg)("inlineCode",{parentName:"td"},"tuningConfig"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/ingestion/kafka-ingestion"},"Kafka indexing service")),(0,r.yg)("td",{parentName:"tr",align:null},"Kafka topic partitioning defines how Druid partitions the datasource. You can also ",(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/data-management/update#reindex"},"reindex")," or ",(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/data-management/compaction"},"compact")," to repartition after initial ingestion.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/ingestion/kinesis-ingestion"},"Kinesis indexing service")),(0,r.yg)("td",{parentName:"tr",align:null},"Kinesis stream sharding defines how Druid partitions the datasource. You can also ",(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/data-management/update#reindex"},"reindex")," or ",(0,r.yg)("a",{parentName:"td",href:"/docs/29.0.0/data-management/compaction"},"compact")," to repartition after initial ingestion.")))),(0,r.yg)("h2",{id:"learn-more"},"Learn more"),(0,r.yg)("p",null,"See the following topics for more information:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/29.0.0/ingestion/native-batch#partitionsspec"},(0,r.yg)("inlineCode",{parentName:"a"},"partitionsSpec"))," for more detail on partitioning with Native Batch ingestion."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/29.0.0/data-management/update#reindex"},"Reindexing")," and ",(0,r.yg)("a",{parentName:"li",href:"/docs/29.0.0/data-management/compaction"},"Compaction")," for information on how to repartition existing data in Druid.")))}u.isMDXComponent=!0}}]);