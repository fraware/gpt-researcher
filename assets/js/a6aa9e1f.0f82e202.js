"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89],{8665:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7294),n=a(6010),r=a(7019),s=a(9960);const i="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",c="sidebarItem_cjdF",d="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs";var p=a(5999);function u(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}const E=function(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(7294),n=a(2263),r=a(8665),s=a(8561),i=a(9960),m=a(5999);const o=function(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(i.Z,{className:"pagination-nav__link",to:a},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.createElement(i.Z,{className:"pagination-nav__link",to:n},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(9521);const d=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:m}}=(0,n.Z)(),{blogDescription:d,blogTitle:g,permalink:p}=t,u="/"===p?m:g;return l.createElement(r.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:i},a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o,{metadata:t}))}},8561:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(7294),n=a(6010),r=a(3905),s=a(5999),i=a(9960),m=a(4996),o=a(9521),c=a(7707),d=a(6753);const g="blogPostTitle_d4p0",p="blogPostData_-Im+",u="blogPostDetailsFull_xD8n";var E=a(62);const h="image_9q7L";const b=function(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:s}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:h,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},v="authorCol_8c0z";function _(e){let{authors:t,assets:a}=e;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>l.createElement("div",{className:(0,n.Z)("col col--6",v),key:t},l.createElement(b,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const N=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.C)(),{children:h,frontMatter:b,assets:v,metadata:N,truncated:Z,isBlogPostPage:f=!1}=e,{date:k,formattedDate:P,permalink:T,tags:w,readingTime:L,title:I,editUrl:y,authors:C}=N,M=v.image??b.image,x=!f&&Z,B=w.length>0;return l.createElement("article",{className:f?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=f?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g,itemProp:"headline"},f?I:l.createElement(i.Z,{itemProp:"url",to:T},I)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==L&&l.createElement(l.Fragment,null," \xb7 ",t(L))),l.createElement(_,{authors:C,assets:v}))})(),M&&l.createElement("meta",{itemProp:"image",content:a(M,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:c.Z},h)),(B||Z)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[u]:f})},B&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":x})},l.createElement(E.Z,{tags:w})),f&&y&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:y})),x&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":B})},l.createElement(i.Z,{to:N.permalink,"aria-label":`Read more about ${I}`},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),n=a(5999),r=a(7462),s=a(6010);const i="iconEdit_mS5F",m=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(9521);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(9960);const s="tag_WK-t",i="tagRegular_LXbV",m="tagWithCount_S5Zl";const o=function(e){const{permalink:t,name:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[i]:!o,[m]:o})},a,o&&l.createElement("span",null,o))}},62:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(5999),s=a(7774);const i="tags_NBRY",m="tag_F03v";function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:m},l.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);