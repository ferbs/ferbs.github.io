(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(148),l=(n(186),n(7)),c=n.n(l),o=n(187),i=n.n(o),s=(n(219),function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){new i.a({element:"#gradient-canvas",name:"granim",opacity:[1,1],states:{"default-state":{gradients:[["#0f194d","#0a332c"],["#400d19","#15400d"],["#370d40","#0a332c"],["#0a1f33","#33052b"]]}},loop:!0})},n.render=function(){return a.createElement("div",{className:"ferbasaurus container"},a.createElement("canvas",{id:"gradient-canvas"}),a.createElement("h1",null,"Ferbasaurus"),a.createElement(m,{word:"ferbasaurus"},a.createElement("li",null,"a reference source in print or electronic form containing ferbonyms"),a.createElement("li",null,"An overweight Ferber")),a.createElement(m,{word:"ferbify"},a.createElement("li",null,"to do as a Ferber would do")),a.createElement(m,{word:"ferbivore"},a.createElement("li",null,"Those who eat what Ferbers eat")),a.createElement(m,{word:"ferbography"},a.createElement("li",null,"study of location of all Ferber's in the world")),a.createElement(m,{word:"ferbonomy"},a.createElement("li",null,"the search for extra-terrestrial Ferbers")),a.createElement(m,{word:"ferbtastic"},a.createElement("li",null,"this needs no definition. It is ferbtastic.")),a.createElement(m,{word:"ferbble"},a.createElement("li",null,"to overwhelm a non-Ferber with strong Ferber personality")),a.createElement(m,{word:"ferbose"},a.createElement("li",null,"Using more words than what a Ferber will sit through")),a.createElement(m,{word:"ferbonym"},a.createElement("li",null,"a word having the same or nearly the same meaning as another in Ferbish, ie Ferbtastic, Ferbcellent.")),a.createElement(m,{word:"ferberite"},a.createElement("li",null,"a mineral FeWO4 consisting of a valuable ferrous tungstate occurring in black granular masses"),a.createElement("li",null,"a Ferber under four feet tall"),a.createElement("li",null,"Ferber kryptonite: Hungarian desserts (kremes, gesztenyepüré, etc)")))},t}(a.Component));function m(e){var t=e.word,n=e.children;return a.createElement("div",{className:"card"},a.createElement("dl",null,a.createElement("dt",null,t),a.createElement("dd",null,a.createElement("ol",null,n))))}t.default=function(e){return a.createElement(r.a,{pageName:"home"},a.createElement(s,null))}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Jeff Ferber",baseUrl:"https://ferbs.com"}}}}},147:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),o=n(56),i=n(2),s=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,n){"use strict";var a=n(146),r=n(0),l=n.n(r),c=n(149),o=n.n(c),i=(n(151),n(152)),s=n.n(i),m=n(4),u=n.n(m),f=(n(33),n(145),l.a.createContext({})),p=function(e){return l.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func};n(153),n(154);function d(e){var t={class:[e.pageName+"-page",e.bodyClass||""].join(" ").trim()},n={style:"background-color: yellow"};return l.a.createElement(p,{query:"2069409925",render:function(e){var a=s.a.get(e,"site.siteMetadata");return l.a.createElement(o.a,{bodyAttributes:t,htmlAttributes:n},l.a.createElement("html",{lang:"en"}),l.a.createElement("title",null,a.title),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.a.createElement("meta",{property:"robots",content:"noarchive"}),l.a.createElement("meta",{property:"og:locale",content:"en_US"}),l.a.createElement("meta",{property:"og:url",content:a.baseUrl}),l.a.createElement("meta",{property:"og:title",content:a.title}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/favicons/apple-touch-icon-60x60.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/favicons/apple-touch-icon-76x76.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/favicons/apple-touch-icon-120x120.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/favicons/apple-touch-icon-152x152.png"}),l.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon-180x180.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),l.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),l.a.createElement("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),l.a.createElement("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#5bbad5"}),l.a.createElement("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),l.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),l.a.createElement("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),l.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))},data:a})}t.a=function(e){var t=e.children,n=e.pageName;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{pageName:n}),l.a.createElement("div",{className:"page-content"},t))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-71ee325b81d90228d454.js.map