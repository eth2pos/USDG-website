(this["webpackJsonpeusdg-website"]=this["webpackJsonpeusdg-website"]||[]).push([[0],{133:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(19),s=a.n(r),i=(a(133),a(26)),l=a(27),o=a(30),b=a(29),j=a(99),d=a(3),p=a(25),h=(a(212),a(82)),m=a(17),O=(a(104),a(78)),u=/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/,x=function(e,t){var a=0===e.name.indexOf("title")?"h1":"div";a=e.href?"a":a;var c="string"===typeof e.children&&e.children.match(u)?n.a.createElement("img",{src:e.children,alt:"img"}):e.children;return 0===e.name.indexOf("button")&&"object"===typeof e.children&&(c=n.a.createElement(O.a,Object(d.a)({},e.children))),n.a.createElement(a,Object(d.a)({key:t.toString()},e),c)},g=a(2),f=h.a.Item,v=h.a.SubMenu,w=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).phoneClick=function(){var e=!c.state.phoneOpen;c.setState({phoneOpen:e})},c.state={phoneOpen:void 0},c}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.dataSource,c=t.isMobile,n=Object(p.a)(t,["dataSource","isMobile"]),r=this.state.phoneOpen,s=a.Menu.children.map((function(e){var t=e.children,a=e.subItem,c=Object(p.a)(e,["children","subItem"]);return a?Object(g.jsx)(v,Object(d.a)(Object(d.a)({},c),{},{title:Object(g.jsx)("div",Object(d.a)(Object(d.a)({},t),{},{className:"header0-item-block ".concat(t.className).trim(),children:t.children.map(x)})),popupClassName:"header0-item-child",children:a.map((function(e,t){var a=e.children,c=a.href?Object(g.jsx)("a",Object(d.a)(Object(d.a)({},a),{},{children:a.children.map(x)})):Object(g.jsx)("div",Object(d.a)(Object(d.a)({},a),{},{children:a.children.map(x)}));return Object(g.jsx)(f,Object(d.a)(Object(d.a)({},e),{},{children:c}),e.name||t.toString())}))}),e.name):Object(g.jsx)(f,Object(d.a)(Object(d.a)({},c),{},{children:Object(g.jsx)("a",Object(d.a)(Object(d.a)({},t),{},{className:"header0-item-block ".concat(t.className).trim(),children:t.children.map(x)}))}),e.name)})),i=void 0===r?300:null;return Object(g.jsx)(m.a,Object(d.a)(Object(d.a)(Object(d.a)({component:"header",animation:{opacity:0,type:"from"}},a.wrapper),n),{},{children:Object(g.jsxs)("div",Object(d.a)(Object(d.a)({},a.page),{},{className:"".concat(a.page.className).concat(r?" open":""),children:[Object(g.jsx)(m.a,Object(d.a)(Object(d.a)({animation:{x:-30,type:"from",ease:"easeOutQuad"}},a.logo),{},{children:Object(g.jsx)("img",{width:"100%",src:a.logo.children,alt:"img"})})),c&&Object(g.jsxs)("div",Object(d.a)(Object(d.a)({},a.mobileMenu),{},{onClick:function(){e.phoneClick()},children:[Object(g.jsx)("em",{}),Object(g.jsx)("em",{}),Object(g.jsx)("em",{})]})),Object(g.jsx)(m.a,Object(d.a)(Object(d.a)({},a.Menu),{},{animation:c?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:i,reverse:!!r,children:Object(g.jsx)(h.a,{mode:c?"inline":"horizontal",defaultSelectedKeys:["sub0"],theme:"dark",children:s})}))]}))}))}}]),a}(n.a.Component),N=a(216),k=a(23),y=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,Object(g.jsxs)("div",Object(d.a)(Object(d.a)(Object(d.a)({},e),t.wrapper),{},{children:[Object(g.jsxs)(k.a,Object(d.a)(Object(d.a)({type:["bottom","top"],delay:200},t.textWrapper),{},{children:[Object(g.jsx)("div",Object(d.a)(Object(d.a)({},t.title),{},{children:"string"===typeof t.title.children&&t.title.children.match(u)?Object(g.jsx)("img",{src:t.title.children,width:"100%",alt:"img"}):t.title.children}),"title"),Object(g.jsx)("div",Object(d.a)(Object(d.a)({},t.content),{},{children:t.content.children}),"content"),Object(g.jsx)(O.a,Object(d.a)(Object(d.a)({ghost:!0},t.button),{},{children:t.button.children}),"button")]}),"QueueAnim"),Object(g.jsx)(m.a,{animation:{y:"-=20",yoyo:!0,repeat:-1,duration:1e3},className:"banner0-icon",children:Object(g.jsx)(N.a,{})},"icon")]}))}}]),a}(n.a.PureComponent),S=(a(63),a(37)),W=(a(64),a(24)),M=a(28),D=a.n(M),C=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dataSource,a=(e.isMobile,Object(p.a)(e,["dataSource","isMobile"])),c=t.wrapper,n=t.titleWrapper,r=t.page,s=t.OverPack,i=t.childWrapper;return Object(g.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},a),c),{},{children:Object(g.jsxs)("div",Object(d.a)(Object(d.a)({},r),{},{children:[Object(g.jsx)("div",Object(d.a)(Object(d.a)({},n),{},{children:n.children.map(x)})),Object(g.jsx)(D.a,Object(d.a)(Object(d.a)({},s),{},{children:Object(g.jsx)(k.a,{type:"bottom",leaveReverse:!0,component:S.a,componentProps:i,children:i.children.map((function(e,t){var a=e.children,c=Object(p.a)(e,["children"]);return Object(g.jsx)(W.a,Object(d.a)(Object(d.a)({},c),{},{children:Object(g.jsx)("div",Object(d.a)(Object(d.a)({},a),{},{children:a.children.map(x)}))}),t.toString())}))},"block")}))]}))}))}}]),a}(n.a.PureComponent),_=(a(197),a(127)),U=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).onTitleClick=function(e,t){r.carouselRef.current.childRefs.carousel.goTo(t)},r.onBeforeChange=function(e,t){r.setState({current:t})},r.getChildrenToRender=function(e){var t=r.state.current,a=e.Carousel,n=e.childWrapper,s=a.children,i=(a.wrapper,Object(p.a)(a,["children","wrapper"])),l=s.titleWrapper,o=s.children,b=Object(p.a)(s,["titleWrapper","children"]),j=(l.barWrapper,l.title),h=Object(p.a)(l,["barWrapper","title"]),m=[],O=o.map((function(e,a){var n=e.title,s=e.children,i=Object(p.a)(e,["title","children"]);o.length>1&&m.push(Object(c.createElement)("div",Object(d.a)(Object(d.a)({},n),{},{key:a.toString(),onClick:function(e){r.onTitleClick(e,a)},className:a===t?"".concat(n.className||""," active"):n.className}),n.children));var l=s.map((function(e,t){var a=e.children,n=e.arrow,r=Object(p.a)(e,["children","arrow"]),s=Object.assign({},a);return Object(c.createElement)(W.a,Object(d.a)(Object(d.a)({},r),{},{key:t.toString()}),Object(g.jsx)("div",Object(d.a)(Object(d.a)({},s),{},{children:a.children.map(x)})),n&&Object(g.jsx)("div",Object(d.a)(Object(d.a)({},n),{},{children:Object(g.jsx)("img",{src:n.children,alt:"img"})})))}));return Object(g.jsx)("div",{children:Object(g.jsx)(k.a,Object(d.a)(Object(d.a)({component:S.a,type:"bottom",componentProps:{type:"flex"}},i),{},{children:l}))},a.toString())}));return Object(g.jsxs)(k.a,Object(d.a)(Object(d.a)({type:"bottom",ref:r.carouselRef},b),{},{children:[o.length>1&&Object(c.createElement)("div",Object(d.a)(Object(d.a)({},h),{},{key:"title"}),Object(g.jsx)("div",Object(d.a)(Object(d.a)({},j),{},{children:m}))),Object(g.jsx)(_.a,Object(d.a)(Object(d.a)({},i),{},{infinite:!1,beforeChange:r.onBeforeChange,children:O}),"carousel"),Object(g.jsx)("div",Object(d.a)(Object(d.a)({},n),{},{children:n.children.map(x)}),"button")]}),"queue")},r.carouselRef=n.a.createRef(),r.state={current:0},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.dataSource,a=(e.isMobile,Object(p.a)(e,["dataSource","isMobile"])),c=t.titleWrapper;return Object(g.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},a),t.wrapper),{},{children:Object(g.jsxs)("div",Object(d.a)(Object(d.a)({},t.page),{},{children:[Object(g.jsx)("div",Object(d.a)(Object(d.a)({},t.titleWrapper),{},{children:c.children.map(x)})),Object(g.jsx)(D.a,Object(d.a)(Object(d.a)({},t.OverPack),{},{children:this.getChildrenToRender(t)}))]}))}))}}]),a}(n.a.PureComponent);var T=function(e){var t=Object.assign({},e),a=t.dataSource,c=t.isMobile;delete t.dataSource,delete t.isMobile;var n={queue:c?"bottom":"right",one:c?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"-=30",opacity:0,type:"from",ease:"easeOutQuad"}};return Object(g.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},t),a.wrapper),{},{children:Object(g.jsxs)(D.a,Object(d.a)(Object(d.a)({},a.OverPack),{},{component:S.a,children:[Object(g.jsx)(m.a,Object(d.a)(Object(d.a)({animation:n.one,resetStyle:!0},a.imgWrapper),{},{component:W.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs},children:Object(g.jsx)("span",Object(d.a)(Object(d.a)({},a.img),{},{children:Object(g.jsx)("img",{src:a.img.children,width:"100%",alt:"img"})}))}),"img"),Object(g.jsxs)(k.a,Object(d.a)(Object(d.a)({type:n.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},a.textWrapper),{},{component:W.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs},children:[Object(g.jsx)("h2",Object(d.a)(Object(d.a)({},a.title),{},{children:a.title.children}),"h1"),Object(g.jsx)("div",Object(d.a)(Object(d.a)({},a.content),{},{children:a.content.children}),"p")]}),"text")]}))}))};var P=function(e){var t=Object.assign({},e),a=t.dataSource,c=t.isMobile;delete t.dataSource,delete t.isMobile;var n={queue:c?"bottom":"left",one:c?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"+=30",opacity:0,type:"from",ease:"easeOutQuad"}},r=Object(g.jsx)(m.a,Object(d.a)(Object(d.a)({animation:n.one,resetStyle:!0},a.imgWrapper),{},{component:W.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs},children:Object(g.jsx)("span",Object(d.a)(Object(d.a)({},a.img),{},{children:Object(g.jsx)("img",{src:a.img.children,width:"100%",alt:"img"})}))}),"img");return Object(g.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},t),a.wrapper),{},{children:Object(g.jsxs)(D.a,Object(d.a)(Object(d.a)({},a.OverPack),{},{component:S.a,children:[c&&r,Object(g.jsxs)(k.a,Object(d.a)(Object(d.a)({type:n.queue,leaveReverse:!0,ease:["easeOutCubic","easeInCubic"]},a.textWrapper),{},{component:W.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs},children:[Object(g.jsx)("h2",Object(d.a)(Object(d.a)({},a.title),{},{children:a.title.children}),"h1"),Object(g.jsx)("div",Object(d.a)(Object(d.a)({},a.content),{},{children:a.content.children}),"p")]}),"text"),!c&&r]}))}))};var E,G=function(e){var t=Object.assign({},e),a=t.dataSource,c=t.isMobile;delete t.dataSource,delete t.isMobile;var n={queue:c?"bottom":"right",one:c?{scaleY:"+=0.3",opacity:0,type:"from",ease:"easeOutQuad"}:{x:"-=30",opacity:0,type:"from",ease:"easeOutQuad"}};return Object(g.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},t),a.wrapper),{},{children:Object(g.jsxs)(D.a,Object(d.a)(Object(d.a)({},a.OverPack),{},{component:S.a,children:[Object(g.jsx)(m.a,Object(d.a)(Object(d.a)({animation:n.one,resetStyle:!0},a.imgWrapper),{},{component:W.a,componentProps:{md:a.imgWrapper.md,xs:a.imgWrapper.xs},children:Object(g.jsx)("span",Object(d.a)(Object(d.a)({},a.img),{},{children:Object(g.jsx)("img",{src:a.img.children,width:"100%",alt:"img"})}))}),"img"),Object(g.jsxs)(k.a,Object(d.a)(Object(d.a)({type:n.queue,leaveReverse:!0,ease:["easeOutQuad","easeInQuad"]},a.textWrapper),{},{component:W.a,componentProps:{md:a.textWrapper.md,xs:a.textWrapper.xs},children:[Object(g.jsx)("h2",Object(d.a)(Object(d.a)({},a.title),{},{children:a.title.children}),"h1"),Object(g.jsx)("div",Object(d.a)(Object(d.a)({},a.content),{},{children:a.content.children}),"p")]}),"text")]}))}))},z=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=Object.assign({},this.props),t=e.dataSource;return delete e.dataSource,delete e.isMobile,Object(g.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({},e),t.wrapper),{},{children:Object(g.jsx)(D.a,Object(d.a)(Object(d.a)({},t.OverPack),{},{children:Object(g.jsx)(m.a,Object(d.a)(Object(d.a)({animation:{y:"+=30",opacity:0,type:"from"}},t.copyright),{},{children:t.copyright.children}),"footer")}))}))}}]),a}(n.a.PureComponent),H={wrapper:{className:"header0 home-page-wrapper"},page:{className:"home-page"},logo:{className:"header0-logo",children:"https://i.imgur.com/Zcg5WF6.png"},Menu:{className:"header0-menu",children:[{name:"item0",className:"header0-item",children:{href:"#",children:[{children:"\u5bfc\u822a\u4e00",name:"text"}],className:"knda9g3gv4q-editor_css"},subItem:[{name:"sub0",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}},{name:"sub1",className:"item-sub",children:{className:"item-sub-item",children:[{name:"image0",className:"item-image",children:"https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg"},{name:"title",className:"item-title",children:"Ant Design"},{name:"content",className:"item-content",children:"\u4f01\u4e1a\u7ea7 UI \u8bbe\u8ba1\u4f53\u7cfb"}]}}]}]},mobileMenu:{className:"header0-mobile-menu"}},F={wrapper:{className:"banner0"},textWrapper:{className:"banner0-text-wrapper"},title:{className:"banner0-title knda9jm8rrj-editor_css",children:"https://i.imgur.com/8oebPjS.png"},content:{className:"banner0-content",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"A Stablecoin Backed by ETH2.0 Staking and Staking Rewards"})})})},button:{className:"banner0-button",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{children:"USDG\xa0"}),Object(g.jsx)("span",{children:"Whitepaper"})]})})})})}),type:"default",href:"https://github.com/eth2pos/usdg-whitepaper/blob/main/USDG-whitepaper.pdf",target:"_blank"}},I={wrapper:{className:"home-page-wrapper content0-wrapper"},page:{className:"home-page content0"},OverPack:{playScale:.3,className:""},titleWrapper:{className:"title-wrapper",children:[{name:"title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"What is USDG"})})}]},childWrapper:{className:"content0-block-wrapper",children:[{name:"block0",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/money-bag_1f4b0.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"1:1 USD Geg"})})})})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"USDG is a stablecoin cryptocurrency 1:1 pegged to USD. You can trade USDG just like USDT or USDC in any exchanges."})})})}]}},{name:"block1",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/gem-stone_1f48e.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"ETH Collateralized"})})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsxs)("p",{children:["Each USDG is minted from the same dollar worth collateralized ETH.\xa0",Object(g.jsx)("span",{children:"Users who deposit $1000 worth ETH can mint the 1000 USDG."})]})})})})}]}},{name:"block2",className:"content0-block",md:8,xs:24,children:{className:"content0-block-item",children:[{name:"image",className:"content0-block-icon",children:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/party-popper_1f389.png"},{name:"title",className:"content0-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Mining While Holding"})})})})},{name:"content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Whenever a new USDG is minted, previous holders could get rewards. Rewards come from the new ETH produced in ETH2.0 staking program.\xa0"})})}]}}]}},Q={wrapper:{className:"home-page-wrapper feature8-wrapper kndbmzgjit-editor_css"},page:{className:"home-page feature8"},OverPack:{playScale:.3},titleWrapper:{className:"feature8-title-wrapper",children:[{name:"title",className:"feature8-title-h1",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"How to Get USDG"})})})})},{name:"content",className:"feature8-title-content",children:Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:[Object(g.jsx)("p",{children:"USDG Dapp is hosted on IPFS, which can never be shutdown"}),Object(g.jsx)("p",{children:"contract address:\xa00xbd62253c8033f3907c0800780662eab7378a4b96"})]})})}]},childWrapper:{className:"feature8-button-wrapper",children:[{name:"button",className:"feature8-button",children:{href:"https://bafybeifsnmhtjifvls5x6f2kajzld457o2bjgcksn5z6s7olx7m72l7lke.ipfs.cf-ipfs.com/#/",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Go to Dapp"})})}}]},Carousel:{dots:!1,className:"feature8-carousel",wrapper:{className:"feature8-block-wrapper"},children:{className:"feature8-block",titleWrapper:{className:"feature8-carousel-title-wrapper",title:{className:"feature8-carousel-title"}},children:[{name:"block0",className:"feature8-block-row kndbliybd6b-editor_css",gutter:120,title:{className:"feature8-carousel-title-block",children:"\u5e73\u53f0\u81ea\u4e3b\u8bad\u7ec3\u6d41\u7a0b"},children:[{className:"feature8-block-col",md:6,xs:24,name:"child0",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Visit USDG Dapp"})})})}]}},{className:"feature8-block-col",md:6,xs:24,name:"child1",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Connect wallet"})})})})}]}},{className:"feature8-block-col",md:6,xs:24,name:"child2",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Exchange USDG with ETH"})})})})}]}},{className:"feature8-block-col",md:6,xs:24,name:"child3",arrow:{className:"feature8-block-arrow",children:"https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg"},children:{className:"feature8-block-child",children:[{name:"image",className:"feature8-block-image",children:"https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg"},{name:"title",className:"feature8-block-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Start using USDG"})})}]}}]}]}}},R={wrapper:{className:"home-page-wrapper content1-wrapper"},OverPack:{className:"home-page content1",playScale:.3},imgWrapper:{className:"content1-img",md:10,xs:24},img:{children:"https://cdn.shopifycdn.net/s/files/1/1061/1924/products/Money_with_Wings_Emoji_large.png?v=1571606064"},textWrapper:{className:"content1-text",md:14,xs:24},title:{className:"content1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"USDG Price Stability"})})},content:{className:"content1-content",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Ethereum core developer team is upgrading ETH to make it more scalable, more secure and more sustainable. The Beacon Chain is the first addition to ETH2.0 network, transferring from PoW to PoS. The official ETH2.0 staking reward is 8.1%, and produces new ETH every 6 minutes. The staked ETH and newly produced ETH become the value backing USDG.\xa0"})})}},q={wrapper:{className:"home-page-wrapper content2-wrapper"},OverPack:{className:"home-page content2",playScale:.3},imgWrapper:{className:"content2-img",md:10,xs:24},img:{children:"https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png"},textWrapper:{className:"content2-text",md:14,xs:24},title:{className:"content2-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Mining While Holding"})})})})})})})},content:{className:"content2-content",children:Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:[Object(g.jsxs)("p",{children:["In the traditional financial world, newly issued currencies create inflation, which results in the reduction of purchasing power per unit of money. Every holder of that currency suffers from a loss of real value."," "]}),Object(g.jsx)("p",{children:"Instead of reducing purchasing power, whenever a new USDG is minted, previous holders could get reward. Again, the rewards are backed by new ETH generated from ETH2.0 staking program. USDG team also creates a model of FTC to further accomplish the goal.\xa0"})]})})}},A={wrapper:{className:"home-page-wrapper content1-wrapper"},OverPack:{className:"home-page content1",playScale:.3},imgWrapper:{className:"content1-img",md:10,xs:24},img:{children:"https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png"},textWrapper:{className:"content1-text",md:14,xs:24},title:{className:"content1-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"First Transfer Contract (FTC)"})})})},content:{className:"content1-content",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:[Object(g.jsx)("p",{children:"After the transfer is broadcasted, the mutual relationship between you and your recipient is forever locked on the blockchain by FTC, and the\xa0hierarchy is up to 6 levels.\xa0"}),Object(g.jsx)("p",{children:"You will get bonus rewards from total USDG of the 6 levels below, currently at 1% APY."}),Object(g.jsx)("p",{children:"Through involving more people in USDG, you could take the bonus in miniting every additional USDG."}),Object(g.jsx)("p",{children:Object(g.jsx)("br",{})})]})})})})})})}},B={wrapper:{className:"home-page-wrapper content2-wrapper"},OverPack:{className:"home-page content2",playScale:.3},imgWrapper:{className:"content2-img",md:10,xs:24},img:{children:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/currency-exchange_1f4b1.png"},textWrapper:{className:"content2-text",md:14,xs:24},title:{className:"content2-title",children:Object(g.jsx)("span",{children:Object(g.jsx)("p",{children:"Exchange of USDG"})})},content:{className:"content2-content",children:Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:[Object(g.jsxs)("p",{children:["As a stablecoin, USDG is designed as an USD peg. You can exchange USDG like any other stablecoins like USDT, USDC or DAI in all major exchanges."," "]}),Object(g.jsx)("p",{children:"The official way to burn USDG is to exchange USDG to ETH through the official website. There are two exchange options."}),Object(g.jsx)("p",{children:"Option 1: exchange immediately, and there will be a 10% fee. "}),Object(g.jsx)("p",{children:"Option 2: Be in the line, and there will be 0 fee."}),Object(g.jsx)("p",{children:"\xa0"})]})})}},Y={wrapper:{className:"home-page-wrapper footer0-wrapper"},OverPack:{className:"home-page footer0",playScale:.05},copyright:{className:"copyright",children:Object(g.jsx)("span",{children:Object(g.jsx)("span",{children:"\xa92021 USDG\xa0All Rights Reserved"})})}};a(210);Object(j.enquireScreen)((function(e){E=e}));var K=("undefined"!==typeof window?window:{}).location,J=void 0===K?{}:K,V=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state={isMobile:E,show:!J.port},c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(j.enquireScreen)((function(t){e.setState({isMobile:!!t})})),J.port&&setTimeout((function(){e.setState({show:!0})}),500)}},{key:"render",value:function(){var e=this,t=[Object(g.jsx)(w,{id:"Nav0_0",dataSource:H,isMobile:this.state.isMobile},"Nav0_0"),Object(g.jsx)(y,{id:"Banner0_0",dataSource:F,isMobile:this.state.isMobile},"Banner0_0"),Object(g.jsx)(C,{id:"Content0_0",dataSource:I,isMobile:this.state.isMobile},"Content0_0"),Object(g.jsx)(U,{id:"Feature8_1",dataSource:Q,isMobile:this.state.isMobile},"Feature8_1"),Object(g.jsx)(T,{id:"Content1_0",dataSource:R,isMobile:this.state.isMobile},"Content1_0"),Object(g.jsx)(P,{id:"Feature2_0",dataSource:q,isMobile:this.state.isMobile},"Feature2_0"),Object(g.jsx)(G,{id:"Feature1_0",dataSource:A,isMobile:this.state.isMobile},"Feature1_0"),Object(g.jsx)(P,{id:"Feature2_1",dataSource:B,isMobile:this.state.isMobile},"Feature2_1"),Object(g.jsx)(z,{id:"Footer0_0",dataSource:Y,isMobile:this.state.isMobile},"Footer0_0")];return Object(g.jsx)("div",{className:"templates-wrapper",ref:function(t){e.dom=t},children:this.state.show&&t})}}]),a}(n.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,218)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root")),L()}},[[211,1,2]]]);
//# sourceMappingURL=main.69f58dfb.chunk.js.map