(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(46)},21:function(e,t,a){},23:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),s=(a(21),a(2)),i=a(3),l=a(5),u=a(4),d=a(6);function m(e,t,a){var n=e.pathname.match(RegExp("/("+a.join("|")+")"));return n?n[1]:t}var p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!0,a._route=function(e){var t=e.pathname.match(RegExp("[^/]+(?=/$|$)"));return t&&["san-fermin","participatory-budget"].includes(t[0])?t[0]:"/"}(window.location),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children;return console.log("ROUTE: ",this._route),r.a.Children.toArray(t).filter(function(t){return t.props.route===e._route})}}]),t}(n.Component);p.defaultProps={route:"/"};a(23);var g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderCardText",value:function(){var e=this.props,t=e.cardText,a=e.cardHTML;return a?r.a.createElement("div",{className:"toc-card-html",dangerouslySetInnerHTML:{__html:a}}):r.a.createElement("div",{className:"toc-card-text"},t)}},{key:"render",value:function(){var e=this.props,t=(e.cardText,{backgroundColor:e.cardColor});return r.a.createElement("div",{className:"toc-card-container",style:t},r.a.createElement("div",{className:"toc-card"},r.a.createElement("div",{className:"toc-card-text"},this.renderCardText())))}}]),t}(n.Component);g.defaultProps={cardText:"I'm a card. Please add text to me.",cardColor:"#2A5ACD"};var h=g,f=a(1),E=a(10),v=a.n(E),S=(a(32),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderHeader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.stageDesc,a=e.stageTitle,n=e.noHeader;e.numOfSections;return n?r.a.createElement("div",null):r.a.createElement("h2",{className:"toc-stage-title",title:t},a)}},{key:"getSectionProperty",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props).sectionConfigs[e][t]}},{key:"generateLoopArray",value:function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t}},{key:"getCardsBySection",value:function(e,t){return t.filter(function(t){return t.section===e})}},{key:"renderCardsBySection",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,a=t.stageCards,n=t.numOfSections;t.sectionConfigs;return this.generateLoopArray(n).map(function(t,n){var o=t+1,c=e.getSectionProperty(o,"height"),s=e.getSectionProperty(o,"color"),i={minHeight:"".concat(c,"px")};return r.a.createElement("div",{key:n},r.a.createElement(v.a,{maxWidth:991},r.a.createElement("div",{className:"toc-stage-section"},e.getCardsBySection(o,a).map(function(e,t){return r.a.createElement(h,Object.assign({cardColor:s,key:"".concat(t,"_mobile")},e))}))),r.a.createElement(v.a,{minWidth:992},r.a.createElement("div",{className:"toc-stage-section",style:i},e.getCardsBySection(o,a).map(function(e,t){return r.a.createElement(h,Object.assign({key:"".concat(t,"_normal"),cardColor:s},e))}))))})}},{key:"render",value:function(){return r.a.createElement(f.Col,{lg:!0},r.a.createElement("div",{className:"toc-stage-container"},this.renderHeader(),this.renderCardsBySection()))}}]),t}(n.Component));S.defaultProps={stageCards:[]};var C=S,O=(a(34),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getCardsByStage",value:function(e,t){return t.filter(function(t){return t.cardStage===e})}},{key:"renderstageCards",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,a=(t.title,t.stages),n=t.cards,o=t.numOfSections,c=t.sectionConfigs;return a.map(function(t,a){var s=e.getCardsByStage(t.id,n);return r.a.createElement(C,Object.assign({key:a,sectionConfigs:c,numOfSections:o,stageCards:s},t))})}},{key:"render",value:function(){var e=this.props.title;return r.a.createElement("div",{className:"toc-board-container"},r.a.createElement("div",{className:"toc-board-title-wrapper"},r.a.createElement("div",{className:"toc-board-title-container toc-container"},r.a.createElement("h1",{className:"toc-board-title"},e),r.a.createElement("img",{src:"".concat("/theory-of-change-app","/assets/Humaaans/sitting-3.png")}))),r.a.createElement("div",{className:"toc-stages-container"},r.a.createElement(f.Grid,{fluid:!0},r.a.createElement(f.Row,null,this.renderstageCards(this.props)))))}}]),t}(n.Component));O.defaultProps={title:"",stages:[],cards:[],numOfSections:1,sectionConfigs:{}};var y=O,b={id:"problem",SINGULAR:{en:"Problem",es:"Problema"},PLURAL:{en:"Problems",es:"Problemas"},DESCRIPTION:{en:"I got 99 problems...",es:"I got 99 problemas..."}},N={id:"input",SINGULAR:{en:"Input",es:"Insumo"},PLURAL:{en:"Inputs-Activities",es:"Insumos-Actividades"},DESCRIPTION:{en:"Insert coin here.",es:"Insert euro here."}},I={id:"output",SINGULAR:{en:"Output",es:"Producto"},PLURAL:{en:"Outputs",es:"Productos"},DESCRIPTION:{en:"Point this way forward.",es:"Point this way Castellano"}},L={id:"int_outcome",SINGULAR:{en:"Intermediate Outcome",es:"Resultado Intermedio"},PLURAL:{en:"Intermediate Outcomes",es:"Resultados intermedios"},DESCRIPTION:{en:"Short-term gain.",es:"Short-term gain."}},P={id:"final_outcome",SINGULAR:{en:"Final Outcome",es:"Resultado Final"},PLURAL:{en:"Final Outcomes",es:"Resultados Finales"},DESCRIPTION:{en:"Long-term profit.",es:"Long-term profit. ES"}},R=a(14),A=a.n(R),T=b,w=N,D=I,j=L,k=P;function _(e,t,a){return e||console.log("WHERE'S THE FILE"),A.a.parse(e,{download:!0,header:!0,dynamicTyping:!0,error:function(e){console.log("THERE WAS AN ERROR")},complete:function(e,n){var r=function(e,t){return t.cards=e.map(function(e){return console.log(e),{cardStage:e["Card Stage"],cardText:{en:e["Card Text EN"]||"",es:e["Card Text ES"]||""},cardHTML:{en:e["Card HTML EN"]||"",es:e["Card HTML ES"]||""},section:e.Section}}),t}(e.data,t);return a(r)}})}var U=[{order:1,id:T.id,stageTitle:{en:T.SINGULAR.en,es:T.SINGULAR.es},stageDesc:{en:T.DESCRIPTION.en,es:T.DESCRIPTION.es}},{order:2,id:w.id,stageTitle:{en:w.PLURAL.en,es:w.PLURAL.es},stageDesc:{en:w.DESCRIPTION.en,es:w.DESCRIPTION.es}},{order:3,id:D.id,stageTitle:{en:D.PLURAL.en,es:D.PLURAL.es},stageDesc:{en:D.DESCRIPTION.en,es:D.DESCRIPTION.es}},{order:4,id:j.id,stageTitle:{en:j.PLURAL.en,es:j.PLURAL.es},stageDesc:{en:j.DESCRIPTION.en,es:j.DESCRIPTION.es}},{order:5,id:k.id,stageTitle:{en:k.SINGULAR.en,es:k.SINGULAR.es},stageDesc:{en:k.DESCRIPTION.en,es:k.DESCRIPTION.es}}],x={title:{en:"San Fermin Library - Co-Creation",es:"Biblioteca de San Fermin - Co-Creaci\xf3n"},numOfSections:4,style:"default",sectionConfigs:{1:{height:180,color:"rgba(38, 86, 208, 1)"},2:{height:125,color:"rgba(238, 132, 52, 1)"},3:{height:295,color:"rgba(201, 93, 99, 1)"},4:{height:150,color:"rgba(113, 126, 195, 1)"}},stages:U},F={title:{en:"Participatory Budgeting",es:"Presupuestos Participativos"},numOfSections:2,style:"default",sectionConfigs:{1:{height:485,color:"rgba(38, 86, 208, 1)"},2:{height:325,color:"rgba(201, 93, 99, 1)"}},stages:U},H=["es","en"],B=["en"],M=H,G=B,W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={boardData:{}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props;_(t.dataPath,t.config,function(t){var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=e.sectionConfigs,n=e.title,r=e.cards,o=e.stages;return{numOfSections:e.numOfSections,sectionConfigs:a,title:n[t],cards:r.map(function(e){var a=e.cardStage,n=e.cardText,r=e.cardHTML,o=e.section;return console.log(e),{cardStage:a,cardText:n[t],cardHTML:(r||{})[t],section:o}}),stages:o.map(function(e){var a=e.order,n=e.id,r=e.stageTitle,o=e.stageDesc;return{order:a,id:n,stageTitle:r[t],stageDesc:o[t]}})}}(t,m(window.location,G,M));e.setState({boardData:a})})}},{key:"render",value:function(){var e=this.state.boardData;return r.a.createElement("div",{className:"App"},r.a.createElement(y,e))}}]),t}(n.Component);function z(e,t){return function(a){return r.a.createElement(W,Object.assign({dataPath:e,config:t},a))}}var Z=z("".concat("/theory-of-change-app","/data/san_fermin_data.csv"),x),$=z("".concat("/theory-of-change-app","/data/pb_data.csv"),F),J={HOME:{TITLE:{es:"CrowdLaw Teoria del Cambio",en:"CrowdLaw Theory of Change"}},CASE_STUDIES:{SAN_FERMIN:{es:"Biblioteca de San Fermin",en:"San Fermin Library"},PB:{en:"Participatory Budgeting",es:"Presupuestos Participativos"},FOROS_LOCALES:{en:"Local Forums",es:"Foros Locales"},PLAZA_DE_ESPANA:{en:"Plaza de Espa\xf1a",es:"Plaza de Espa\xf1a"}},HEADER:{LANGUAGE:{es:"Language",en:"Idioma"}}},Y={HOME:{en:"".concat("/theory-of-change-app","/"),es:"".concat("/theory-of-change-app","/es")},SAN_FERMIN:{en:"".concat("/theory-of-change-app","/san-fermin"),es:"".concat("/theory-of-change-app","/es/san-fermin")},PB:{en:"".concat("/theory-of-change-app","/participatory-budget"),es:"".concat("/theory-of-change-app","/es/participatory-budget")},PLAZA_DE_ESPANA:{en:"".concat("/theory-of-change-app","/plaza-de-espana"),es:"".concat("/theory-of-change-app","/es/plaza-de-espana")},FOROS_LOCALES:{en:"".concat("/theory-of-change-app","/local-forums"),es:"".concat("/theory-of-change-app","/es/local-forums")}},q=(a(36),H),K=B,Q=m(window.location,K,q);var V=function(e){return r.a.createElement("div",{className:"toc-home-page toc-container"},r.a.createElement("h1",null,J.HOME.TITLE[Q]),r.a.createElement("div",{className:"toc-tiles"},r.a.createElement(f.Grid,{fluid:!0},r.a.createElement(f.Row,null,[{name:J.CASE_STUDIES.SAN_FERMIN[Q],link:Y.SAN_FERMIN[Q]},{name:J.CASE_STUDIES.PB[Q],link:Y.PB[Q]},{name:J.CASE_STUDIES.PLAZA_DE_ESPANA[Q],link:""},{name:J.CASE_STUDIES.FOROS_LOCALES[Q],link:""}].map(function(e,t){var a=e.name,n=e.link;return r.a.createElement(f.Col,{lg:3,md:6,key:t},r.a.createElement("div",{className:"toc-tile"},r.a.createElement("a",{href:n},r.a.createElement("div",{className:"toc-tile-name"},a))))})))),r.a.createElement("section",{id:"isso-thread"}))},X=(a(38),function(e){var t="es"===e.currentLocale?"".concat("/theory-of-change-app","/es"):"/theory-of-change-app";return r.a.createElement("header",{className:"toc-header"},r.a.createElement("div",{className:"toc-container"},r.a.createElement(f.Grid,{fluid:!0},r.a.createElement(f.Row,null,r.a.createElement(f.Col,{lg:4},r.a.createElement("a",{className:"toc-site-title",rel:"author",href:t},r.a.createElement(f.Row,null,r.a.createElement(f.Col,null,r.a.createElement("img",{className:"header-logo",src:"".concat("/theory-of-change-app","/assets/header_image.png")})),r.a.createElement(f.Col,null,r.a.createElement("div",{className:"toc-site-title-text"},J.HOME.TITLE[e.currentLocale]))))),r.a.createElement(f.Col,{lg:8},r.a.createElement(f.Row,null,r.a.createElement(f.Col,{xsOffset:10},r.a.createElement("div",{className:"toc-localize-link"},"es"===e.currentLocale?r.a.createElement("a",{href:"".concat("/theory-of-change-app")},"English"):r.a.createElement("a",{href:"".concat("/theory-of-change-app","/es")},"Espa\xf1ol ")))))))))}),ee=(a(40),function(e){return r.a.createElement("footer",{className:"toc-footer"},r.a.createElement("div",{className:"toc-container"},r.a.createElement(f.Grid,{fluid:!0},r.a.createElement(f.Row,null,r.a.createElement("div",{className:"toc-footer-text-container"},"Header icon made by ",r.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))))}),te=(a(42),a(44),H),ae=B,ne=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=m(window.location,ae,te);return r.a.createElement("div",{className:"App toc-vertical-page-flex"},r.a.createElement("div",{className:"toc-outer-wrapper"},r.a.createElement(X,{currentLocale:e}),r.a.createElement("div",{className:"toc-inner-wrapper"},r.a.createElement(p,null,r.a.createElement(V,{route:"/"}),r.a.createElement(Z,{route:"san-fermin"}),r.a.createElement($,{route:"participatory-budget"})))),r.a.createElement(ee,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.cd1d1cf5.chunk.js.map