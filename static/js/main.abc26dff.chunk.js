(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},21:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),s=n.n(o),i=(n(21),n(1)),c=n(2),d=n(4),l=n(3),u=n(5),m=(n(23),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderCardText",value:function(){var e=this.props,t=e.cardText,n=e.cardHTML;return console.log("CARD",n),n?r.a.createElement("div",{className:"toc-card-html",dangerouslySetInnerHTML:{__html:n}}):r.a.createElement("div",{className:"toc-card-text"},t)}},{key:"render",value:function(){var e=this.props,t=(e.cardText,{backgroundColor:e.cardColor});return r.a.createElement("div",{className:"toc-card-container",style:t},r.a.createElement("div",{className:"toc-card"},r.a.createElement("div",{className:"toc-card-text"},this.renderCardText())))}}]),t}(a.Component));m.defaultProps={cardText:"I'm a card. Please add text to me.",cardColor:"#2A5ACD"};var g=m,f=n(6),p=n(10),h=n.n(p),v=(n(32),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderHeader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.stageDesc,n=e.stageTitle,a=e.noHeader;e.numOfSections;return a?r.a.createElement("div",null):r.a.createElement("h2",{className:"toc-stage-title",title:t},n)}},{key:"getSectionProperty",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props).sectionConfigs[e][t]}},{key:"generateLoopArray",value:function(e){for(var t=[],n=0;n<e;n++)t.push(n);return t}},{key:"getCardsBySection",value:function(e,t){return t.filter(function(t){return t.section===e})}},{key:"renderCardsBySection",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=t.stageCards,a=t.numOfSections;t.sectionConfigs;return this.generateLoopArray(a).map(function(t,a){var o=t+1,s=e.getSectionProperty(o,"height"),i=e.getSectionProperty(o,"color"),c={minHeight:"".concat(s,"px")};return r.a.createElement("div",{key:a},r.a.createElement(h.a,{maxWidth:991},r.a.createElement("div",{className:"toc-stage-section"},e.getCardsBySection(o,n).map(function(e,t){return r.a.createElement(g,Object.assign({cardColor:i,key:"".concat(t,"_mobile")},e))}))),r.a.createElement(h.a,{minWidth:992},r.a.createElement("div",{className:"toc-stage-section",style:c},e.getCardsBySection(o,n).map(function(e,t){return r.a.createElement(g,Object.assign({key:"".concat(t,"_normal"),cardColor:i},e))}))))})}},{key:"render",value:function(){return r.a.createElement(f.Col,{lg:!0},r.a.createElement("div",{className:"toc-stage-container"},this.renderHeader(),this.renderCardsBySection()))}}]),t}(a.Component));v.defaultProps={stageCards:[]};var S=v,C=(n(34),function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getCardsByStage",value:function(e,t){return t.filter(function(t){return t.cardStage===e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.stages,o=t.cards,s=t.numOfSections,i=t.sectionConfigs;return r.a.createElement("div",{className:"toc-board-container"},r.a.createElement("div",{className:"toc-board-title-wrapper"},r.a.createElement("div",{className:"toc-board-title-container"},r.a.createElement("h1",{className:"toc-board-title"},n),r.a.createElement("img",{src:"assets/Humaaans/sitting-3.png"}))),r.a.createElement("div",{className:"toc-stages-container"},r.a.createElement(f.Grid,{fluid:!0},r.a.createElement(f.Row,null,a.map(function(t,n){var a=e.getCardsByStage(t.id,o);return r.a.createElement(S,Object.assign({key:n,sectionConfigs:i,numOfSections:s,stageCards:a},t))})))))}}]),t}(a.Component));C.defaultProps={title:"",stages:[],cards:[],numOfSections:1,sectionConfigs:{}};var E=C,I={id:"problem",SINGULAR:{en:"Problem",es:"Problema/Necesidad"},PLURAL:{en:"Problems",es:"Problemas"},DESCRIPTION:{en:"I got 99 problems...",es:"I got 99 problemas..."}},O={id:"input",SINGULAR:{en:"Inputs/Activitys",es:"Insumos/Actividades"},PLURAL:{en:"Inputs/Activities",es:"Insumos/Actividades"},DESCRIPTION:{en:"Insert coin here.",es:"Insert euro here."}},b={id:"output",SINGULAR:{en:"Output",es:"Producto"},PLURAL:{en:"Outputs",es:"Productos"},DESCRIPTION:{en:"Point this way forward.",es:"Point this way Castellano"}},R={id:"int_outcome",SINGULAR:{en:"Intermediate Outcome",es:"Resultado Intermedio"},PLURAL:{en:"Intermediate Outcomes",es:"Resultados intermedios"},DESCRIPTION:{en:"Short-term gain.",es:"Short-term gain."}},L={id:"final_outcome",SINGULAR:{en:"Final Outcome",es:"Resultado Final"},PLURAL:{en:"Final Outcomes",es:"Resultados Finales"},DESCRIPTION:{en:"Long-term profit.",es:"Long-term profit. ES"}},y=n(14),N=n.n(y),T=I,P=O,A=b,D=R,j=L;var k={title:{en:"San Fermin Library - Co-Creation",es:"Biblioteca de San Fermin - Co-Creaci\xf3n"},numOfSections:4,style:"default",sectionConfigs:{1:{height:180,color:"rgba(38, 86, 208, 1)"},2:{height:125,color:"rgba(238, 132, 52, 1)"},3:{height:295,color:"rgba(201, 93, 99, 1)"},4:{height:150,color:"rgba(113, 126, 195, 1)"}},stages:[{order:1,id:T.id,stageTitle:{en:T.SINGULAR.en,es:T.SINGULAR.es},stageDesc:{en:T.DESCRIPTION.en,es:T.DESCRIPTION.es}},{order:2,id:P.id,stageTitle:{en:P.PLURAL.en,es:P.PLURAL.es},stageDesc:{en:P.DESCRIPTION.en,es:P.DESCRIPTION.es}},{order:3,id:A.id,stageTitle:{en:A.PLURAL.en,es:A.PLURAL.es},stageDesc:{en:A.DESCRIPTION.en,es:A.DESCRIPTION.es}},{order:4,id:D.id,stageTitle:{en:D.PLURAL.en,es:D.PLURAL.es},stageDesc:{en:D.DESCRIPTION.en,es:D.DESCRIPTION.es}},{order:5,id:j.id,stageTitle:{en:j.SINGULAR.en,es:j.SINGULAR.es},stageDesc:{en:j.DESCRIPTION.en,es:j.DESCRIPTION.es}}]};var w=["es","en"],U=["en"],x=(n(36),n(38),w),H=U,B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={boardData:{}},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t,n,a=this;t=k,n=function(e){console.log(e);var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",n=e.sectionConfigs,a=e.title,r=e.cards,o=e.stages;return{numOfSections:e.numOfSections,sectionConfigs:n,title:a[t],cards:r.map(function(e){var n=e.cardStage,a=e.cardText,r=e.cardHTML,o=e.section;return{cardStage:n,cardText:a[t],cardHTML:(r||{})[t],section:o}}),stages:o.map(function(e){var n=e.order,a=e.id,r=e.stageTitle,o=e.stageDesc;return{order:n,id:a,stageTitle:r[t],stageDesc:o[t]}})}}(e,function(e,t,n){var a=e.pathname.match(RegExp("/("+n.join("|")+")"));return a?a[1]:t}(window.location,H,x));console.log(t),a.setState({boardData:t})},(e="data/san_fermin_data.csv")||console.log("WHERE'S THE FILE"),N.a.parse(e,{download:!0,header:!0,dynamicTyping:!0,error:function(e){console.log("THERE WAS AN ERROR")},complete:function(e,a){var r=function(e,t){return t.cards=e.map(function(e){return{cardStage:e["Card Stage"],cardText:{en:e["Card Text EN"]||"",es:e["Card Text ES"]||""},cardHTML:{en:e["Card HTML EN"]||"",es:e["Card HTML ES"]||""},section:e.Section}}),t}(e.data,t);return n(r)}})}},{key:"render",value:function(){var e=this.state.boardData;return r.a.createElement("div",{className:"App"},r.a.createElement(E,e))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.abc26dff.chunk.js.map