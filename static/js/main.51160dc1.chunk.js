(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},23:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),i=a.n(o),c=(a(21),a(1)),s=a(2),l=a(4),u=a(3),d=a(5);function m(e,t,a){var n=e.pathname.match(RegExp("/("+a.join("|")+")"));return n?n[1]:t}var g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!0,a._route=function(e){var t=e.pathname.match(RegExp("[^/]+(?=/$|$)"));return t&&["san-fermin","participatory-budget"].includes(t[0])?t[0]:"/"}(window.location),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children;return console.log("ROUTE: ",this._route),r.a.Children.toArray(t).filter(function(t){return t.props.route===e._route})}}]),t}(n.Component);g.defaultProps={route:"/"};a(23);var p=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderCardText",value:function(){var e=this.props,t=e.cardText,a=e.cardHTML;return a?r.a.createElement("div",{className:"toc-card-html",dangerouslySetInnerHTML:{__html:a}}):r.a.createElement("div",{className:"toc-card-text"},t)}},{key:"render",value:function(){var e=this.props,t=(e.cardText,{backgroundColor:e.cardColor});return r.a.createElement("div",{className:"toc-card-container",style:t},r.a.createElement("div",{className:"toc-card"},r.a.createElement("div",{className:"toc-card-text"},this.renderCardText())))}}]),t}(n.Component);p.defaultProps={cardText:"I'm a card. Please add text to me.",cardColor:"#2A5ACD"};var f=p,h=a(6),E=a(10),S=a.n(E),v=(a(32),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderHeader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.stageDesc,a=e.stageTitle,n=e.noHeader;e.numOfSections;return n?r.a.createElement("div",null):r.a.createElement("h2",{className:"toc-stage-title",title:t},a)}},{key:"getSectionProperty",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props).sectionConfigs[e][t]}},{key:"generateLoopArray",value:function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t}},{key:"getCardsBySection",value:function(e,t){return t.filter(function(t){return t.section===e})}},{key:"renderCardsBySection",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,a=t.stageCards,n=t.numOfSections;t.sectionConfigs;return this.generateLoopArray(n).map(function(t,n){var o=t+1,i=e.getSectionProperty(o,"height"),c=e.getSectionProperty(o,"color"),s={minHeight:"".concat(i,"px")};return r.a.createElement("div",{key:n},r.a.createElement(S.a,{maxWidth:991},r.a.createElement("div",{className:"toc-stage-section"},e.getCardsBySection(o,a).map(function(e,t){return r.a.createElement(f,Object.assign({cardColor:c,key:"".concat(t,"_mobile")},e))}))),r.a.createElement(S.a,{minWidth:992},r.a.createElement("div",{className:"toc-stage-section",style:s},e.getCardsBySection(o,a).map(function(e,t){return r.a.createElement(f,Object.assign({key:"".concat(t,"_normal"),cardColor:c},e))}))))})}},{key:"render",value:function(){return r.a.createElement(h.Col,{lg:!0},r.a.createElement("div",{className:"toc-stage-container"},this.renderHeader(),this.renderCardsBySection()))}}]),t}(n.Component));v.defaultProps={stageCards:[]};var O=v,C=(a(34),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getCardsByStage",value:function(e,t){return t.filter(function(t){return t.cardStage===e})}},{key:"renderstageCards",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,a=(t.title,t.stages),n=t.cards,o=t.numOfSections,i=t.sectionConfigs;return a.map(function(t,a){var c=e.getCardsByStage(t.id,n);return r.a.createElement(O,Object.assign({key:a,sectionConfigs:i,numOfSections:o,stageCards:c},t))})}},{key:"render",value:function(){var e=this.props.title;return r.a.createElement("div",{className:"toc-board-container"},r.a.createElement("div",{className:"toc-board-title-wrapper"},r.a.createElement("div",{className:"toc-board-title-container"},r.a.createElement("h1",{className:"toc-board-title"},e),r.a.createElement("img",{src:"".concat("/theory-of-change-app","/assets/Humaaans/sitting-3.png")}))),r.a.createElement("div",{className:"toc-stages-container"},r.a.createElement(h.Grid,{fluid:!0},r.a.createElement(h.Row,null,this.renderstageCards(this.props)))))}}]),t}(n.Component));C.defaultProps={title:"",stages:[],cards:[],numOfSections:1,sectionConfigs:{}};var b=C,I={id:"problem",SINGULAR:{en:"Problem",es:"Problema"},PLURAL:{en:"Problems",es:"Problemas"},DESCRIPTION:{en:"I got 99 problems...",es:"I got 99 problemas..."}},y={id:"input",SINGULAR:{en:"Input",es:"Insumo"},PLURAL:{en:"Inputs-Activities",es:"Insumos-Actividades"},DESCRIPTION:{en:"Insert coin here.",es:"Insert euro here."}},P={id:"output",SINGULAR:{en:"Output",es:"Producto"},PLURAL:{en:"Outputs",es:"Productos"},DESCRIPTION:{en:"Point this way forward.",es:"Point this way Castellano"}},L={id:"int_outcome",SINGULAR:{en:"Intermediate Outcome",es:"Resultado Intermedio"},PLURAL:{en:"Intermediate Outcomes",es:"Resultados intermedios"},DESCRIPTION:{en:"Short-term gain.",es:"Short-term gain."}},T={id:"final_outcome",SINGULAR:{en:"Final Outcome",es:"Resultado Final"},PLURAL:{en:"Final Outcomes",es:"Resultados Finales"},DESCRIPTION:{en:"Long-term profit.",es:"Long-term profit. ES"}},N=a(14),R=a.n(N),A=I,j=y,D=P,k=L,w=T;function U(e,t,a){return e||console.log("WHERE'S THE FILE"),R.a.parse(e,{download:!0,header:!0,dynamicTyping:!0,error:function(e){console.log("THERE WAS AN ERROR")},complete:function(e,n){var r=function(e,t){return t.cards=e.map(function(e){return console.log(e),{cardStage:e["Card Stage"],cardText:{en:e["Card Text EN"]||"",es:e["Card Text ES"]||""},cardHTML:{en:e["Card HTML EN"]||"",es:e["Card HTML ES"]||""},section:e.Section}}),t}(e.data,t);return a(r)}})}var _=[{order:1,id:A.id,stageTitle:{en:A.SINGULAR.en,es:A.SINGULAR.es},stageDesc:{en:A.DESCRIPTION.en,es:A.DESCRIPTION.es}},{order:2,id:j.id,stageTitle:{en:j.PLURAL.en,es:j.PLURAL.es},stageDesc:{en:j.DESCRIPTION.en,es:j.DESCRIPTION.es}},{order:3,id:D.id,stageTitle:{en:D.PLURAL.en,es:D.PLURAL.es},stageDesc:{en:D.DESCRIPTION.en,es:D.DESCRIPTION.es}},{order:4,id:k.id,stageTitle:{en:k.PLURAL.en,es:k.PLURAL.es},stageDesc:{en:k.DESCRIPTION.en,es:k.DESCRIPTION.es}},{order:5,id:w.id,stageTitle:{en:w.SINGULAR.en,es:w.SINGULAR.es},stageDesc:{en:w.DESCRIPTION.en,es:w.DESCRIPTION.es}}],x={title:{en:"San Fermin Library - Co-Creation",es:"Biblioteca de San Fermin - Co-Creaci\xf3n"},numOfSections:4,style:"default",sectionConfigs:{1:{height:180,color:"rgba(38, 86, 208, 1)"},2:{height:125,color:"rgba(238, 132, 52, 1)"},3:{height:295,color:"rgba(201, 93, 99, 1)"},4:{height:150,color:"rgba(113, 126, 195, 1)"}},stages:_},H={title:{en:"Participatory Budgeting",es:"Presupuestos Participativos"},numOfSections:2,style:"default",sectionConfigs:{1:{height:475,color:"rgba(38, 86, 208, 1)"},2:{height:325,color:"rgba(201, 93, 99, 1)"}},stages:_},B=["es","en"],F=["en"],M=B,G=F,W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={boardData:{}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props;U(t.dataPath,t.config,function(t){var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=e.sectionConfigs,n=e.title,r=e.cards,o=e.stages;return{numOfSections:e.numOfSections,sectionConfigs:a,title:n[t],cards:r.map(function(e){var a=e.cardStage,n=e.cardText,r=e.cardHTML,o=e.section;return console.log(e),{cardStage:a,cardText:n[t],cardHTML:(r||{})[t],section:o}}),stages:o.map(function(e){var a=e.order,n=e.id,r=e.stageTitle,o=e.stageDesc;return{order:a,id:n,stageTitle:r[t],stageDesc:o[t]}})}}(t,m(window.location,G,M));e.setState({boardData:a})})}},{key:"render",value:function(){var e=this.state.boardData;return r.a.createElement("div",{className:"App"},r.a.createElement(b,e))}}]),t}(n.Component);function $(e,t){return function(a){return r.a.createElement(W,Object.assign({dataPath:e,config:t},a))}}var z=$("".concat("/theory-of-change-app","/data/san_fermin_data.csv"),x),J=$("".concat("/theory-of-change-app","/data/pb_data.csv"),H),Z={HOME:{TITLE:{es:"CrowdLaw Teoria del cambio",en:"CrowdLaw Theory of Change"}},CASE_STUDIES:{SAN_FERMIN:{es:"Biblioteca de San Fermin",en:"San Fermin Library"},PB:{en:"Participatory Budgeting",es:"Presupuestos Participativos"},FOROS_LOCALES:{en:"Local Forums",es:"Foros Locales"},PLAZA_DE_ESPANA:{en:"Plaza de Espa\xf1a",es:"Plaza de Espa\xf1a"}}},q=(a(36),B),K=F,Q=m(window.location,K,q);var V=function(e){return r.a.createElement("div",{className:"toc-home-page"},r.a.createElement("h1",null,Z.HOME.TITLE[Q]),r.a.createElement("div",{className:"toc-tiles"},r.a.createElement(h.Grid,{fluid:!0},r.a.createElement(h.Row,null,[{name:Z.CASE_STUDIES.SAN_FERMIN[Q],link:"./san-fermin"},{name:Z.CASE_STUDIES.PB[Q],link:"./participatory-budget"},{name:Z.CASE_STUDIES.PLAZA_DE_ESPANA[Q],link:""},{name:Z.CASE_STUDIES.FOROS_LOCALES[Q],link:""}].map(function(e,t){var a=e.name,n=e.link;return r.a.createElement(h.Col,{lg:3,key:t},r.a.createElement("div",{className:"toc-tile"},r.a.createElement("a",{href:n},r.a.createElement("div",{className:"toc-tile-name"},a))))})))))},X=(a(38),a(40),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement(V,{route:"/"}),r.a.createElement(z,{route:"san-fermin"}),r.a.createElement(J,{route:"participatory-budget"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.51160dc1.chunk.js.map