(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},22:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(13),s=a.n(o),r=(a(20),a(1)),c=a(2),d=a(4),l=a(3),u=a(5),m=(a(22),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderCardText",value:function(){var e=this.props,t=e.cardText,a=e.cardHTML;return console.log("CARD",a),a?i.a.createElement("div",{className:"toc-card-html",dangerouslySetInnerHTML:{__html:a}}):i.a.createElement("div",{className:"toc-card-text"},t)}},{key:"render",value:function(){var e=this.props,t=(e.cardText,{backgroundColor:e.cardColor});return i.a.createElement("div",{className:"toc-card-container",style:t},i.a.createElement("div",{className:"toc-card"},i.a.createElement("div",{className:"toc-card-text"},this.renderCardText())))}}]),t}(n.Component));m.defaultProps={cardText:"I'm a card. Please add text to me.",cardColor:"#2A5ACD"};var g=m,p=a(6),f=a(10),S=a.n(f),h=(a(31),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderHeader",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.stageDesc,a=e.stageTitle,n=e.noHeader;e.numOfSections;return n?i.a.createElement("div",null):i.a.createElement("h2",{className:"toc-stage-title",title:t},a)}},{key:"getSectionProperty",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props).sectionConfigs[e][t]}},{key:"generateLoopArray",value:function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t}},{key:"getCardsBySection",value:function(e,t){return t.filter(function(t){return t.section===e})}},{key:"renderCardsBySection",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,a=t.stageCards,n=t.numOfSections;t.sectionConfigs;return this.generateLoopArray(n).map(function(t,n){var o=t+1,s=e.getSectionProperty(o,"height"),r=e.getSectionProperty(o,"color"),c={minHeight:"".concat(s,"px")};return i.a.createElement("div",{key:n},i.a.createElement(S.a,{maxWidth:991},i.a.createElement("div",{className:"toc-stage-section"},e.getCardsBySection(o,a).map(function(e,t){return i.a.createElement(g,Object.assign({cardColor:r,key:"".concat(t,"_mobile")},e))}))),i.a.createElement(S.a,{minWidth:992},i.a.createElement("div",{className:"toc-stage-section",style:c},e.getCardsBySection(o,a).map(function(e,t){return i.a.createElement(g,Object.assign({key:"".concat(t,"_normal"),cardColor:r},e))}))))})}},{key:"render",value:function(){return i.a.createElement(p.Col,{lg:!0},i.a.createElement("div",{className:"toc-stage-container"},this.renderHeader(),this.renderCardsBySection()))}}]),t}(n.Component));h.defaultProps={stageCards:[]};var v=h,C=(a(33),function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getCardsByStage",value:function(e,t){return t.filter(function(t){return t.cardStage===e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.stages,o=t.cards,s=t.numOfSections,r=t.sectionConfigs;return i.a.createElement("div",{className:"toc-board-container"},i.a.createElement("div",{className:"toc-board-title-wrapper"},i.a.createElement("div",{className:"toc-board-title-container"},i.a.createElement("h1",{className:"toc-board-title"},a),i.a.createElement("img",{src:"assets/Humaaans/sitting-3.png"}))),i.a.createElement("div",{className:"toc-stages-container"},i.a.createElement(p.Grid,{fluid:!0},i.a.createElement(p.Row,null,n.map(function(t,a){var n=e.getCardsByStage(t.id,o);return i.a.createElement(v,Object.assign({key:a,sectionConfigs:r,numOfSections:s,stageCards:n},t))})))))}}]),t}(n.Component)),T={id:"problem",SINGULAR:{en:"Problem",es:"Problema/Necesidad"},PLURAL:{en:"Problems",es:"Problemas"},DESCRIPTION:{en:"I got 99 problems...",es:"I got 99 problemas..."}},y={id:"input",SINGULAR:{en:"Inputs/Activitys",es:"Insumos/Actividades"},PLURAL:{en:"Inputs/Activities",es:"Insumos/Actividades"},DESCRIPTION:{en:"Insert coin here.",es:"Insert euro here."}},I={id:"output",SINGULAR:{en:"Output",es:"Producto"},PLURAL:{en:"Outputs",es:"Productos"},DESCRIPTION:{en:"Point this way forward.",es:"Point this way Castellano"}},b={id:"int_outcome",SINGULAR:{en:"Intermediate Outcome",es:"Resultado Intermedio"},PLURAL:{en:"Intermediate Outcomes",es:"Resultados intermedios"},DESCRIPTION:{en:"Short-term gain.",es:"Short-term gain."}},O={id:"final_outcome",SINGULAR:{en:"Final Outcome",es:"Resultado Final"},PLURAL:{en:"Final Outcomes",es:"Resultados Finales"},DESCRIPTION:{en:"Long-term profit.",es:"Long-term profit. ES"}};var E={title:{en:"San Fermin Library - Co-Creation",es:"Biblioteca de San Fermin - Co-Creaci\xf3n"},numOfSections:4,style:"default",sectionConfigs:{1:{height:75,color:"rgba(38, 86, 208, 1)"},2:{height:150,color:"rgba(238, 132, 52, 1)"},3:{height:285,color:"rgba(201, 93, 99, 1)"},4:{height:150,color:"rgba(113, 126, 195, 1)"}},cards:[{cardStage:T.id,cardText:{en:"Policy in San Fermin does not reflect local knowledge (municipal officials lack knowledge of citizens needs and preferences)",es:"Pol\xedtica local no incorpora el conocimiento local de los vecinos sobre sus necesidades y preferencias  (conocimiento que reside en la ciudadan\xeda no es la administraci\xf3n)"},section:1},{cardStage:y.id,cardText:{en:"Constitute the Steering Committee",es:"Constituci\xf3n del Grupo Motor"},section:1},{cardStage:y.id,cardText:{en:"Steering Committee identifes key stakeholders with local knowledge.",es:"Grupo Motor identifica actores relevantes con conocimiento local"},section:1},{cardStage:y.id,cardText:{en:"Steering Committee develops questionnaire for needs assesment and ran survey",es:"Grupo Motor desarrolla cuestionario de diagn\xf3stico de necesidades"},section:2},{cardStage:y.id,cardHTML:{en:"<ul>Citizens provide ideas in co-creation workshops with:<li>Children</li><li>Youth</li><li>Organized and not organized neighbors</li></ul>",es:"<ul>Vecinos proveen sus ideas en talleres de co-creaci\xf3n con:<li>Ni\xf1os</li><li>J\xf3venes</li><li>Vecinos organizados y no organizados</li></ul>"},cardText:{en:"Citizens provide ideas in co-creation workshops",es:"Citizens provide ideas in co-creation workshops Castellano"},section:3},{cardStage:y.id,cardText:{en:"Dinamizadores facilitate the process",es:"Dinamizadores moderan el proceso"},section:3},{cardStage:y.id,cardText:{en:"Technical profile staff/participants translate ideas into design",es:"Personal t\xe9cnico traduce ideas a dise\xf1o"},section:3},{cardStage:y.id,cardText:{en:"Conduct outreach and provide information on the process",es:"Administraci\xf3n y Grupo Motor difunden y proveen informaci\xf3n sobre el proceso"},section:4},{cardStage:I.id,cardText:{en:"Steering Committee is constituted",es:"Grupo Motor constituido"},section:1},{cardStage:I.id,cardText:{en:"Map of relevant stakeholders",es:"Mapeo de actores"},section:1},{cardStage:I.id,cardText:{en:"Needs assesment developed",es:"Diagn\xf3stico complete"},section:2},{cardStage:I.id,cardText:{en:"Workshops & co-creation activties conducted",es:"Talleres y actividades de co-creaci\xf3n implentadas"},section:3},{cardStage:I.id,cardText:{en:"Citizens\u2019 ideas collected",es:"Ideas de los vecinos recogidas"},section:3},{cardStage:I.id,cardText:{en:"Ideas systematized and translated into a design",es:"Ideas sistematizadas y traducidas a dise\xf1o t\xe9cnico"},section:3},{cardStage:I.id,cardText:{en:"Information disseminated",es:"Informaci\xf3n difundida"},section:4},{cardStage:b.id,cardText:{en:"Continued Committment",es:"Compromiso continuado"},section:1},{cardStage:b.id,cardText:{en:"Steering Committee knows the reality of the neighborhood",es:"Grupo Motor conoce realidad del barrio"},section:1},{cardStage:b.id,cardText:{en:"Stakeholders map represents neighborhood",es:"Mapeo de actores es representativo del vecindario"},section:1},{cardStage:b.id,cardText:{en:"Citizens partcipate in needs assesment",es:"Vecinos participan del diagn\xf3stico"},section:2},{cardStage:b.id,cardText:{en:"Needs assessment accurately captures needs",es:"Diagn\xf3stico recoge con fidelidad las necesidades"},section:2},{cardStage:b.id,cardText:{en:"Workshop participants are representative of target population",es:"Participantes en los talleres son representativos de los vecinos"},section:3},{cardStage:b.id,cardText:{en:"Sustained engagement",es:"Sustained engagement ES"},section:3},{cardStage:b.id,cardText:{en:"Quality of facilitation",es:"Calidad de la moderaci\xf3n"},section:3},{cardStage:b.id,cardText:{en:"Originality of solutions",es:"Originalidad de las soluciones"},section:3},{cardStage:b.id,cardText:{en:"Feasibility of solutions",es:"Factibilidad de las soluciones"},section:3},{cardStage:b.id,cardText:{en:"End-user value of solutions",es:"Valor para el usuario de las soluciones"},section:3},{cardStage:b.id,cardText:{en:"Neighbors are informed about the process",es:"Vecinos informados sobre el proceso"},section:4},{cardStage:b.id,cardText:{en:"Influence and credibility",es:"Influencia y credibilidad"},section:4},{cardStage:O.id,cardText:{en:"Policy reflects local knowledge, needs, and preferences",es:"Pol\xedtica local incorpora el conocimiento local de los vecinos sobre sus necesidades y preferencias  (conocimiento que reside en la ciudadan\xeda no es la administraci\xf3n)"},section:1}],stages:[{order:1,id:T.id,stageTitle:{en:T.SINGULAR.en,es:T.SINGULAR.es},stageDesc:{en:T.DESCRIPTION.en,es:T.DESCRIPTION.es}},{order:2,id:y.id,stageTitle:{en:y.PLURAL.en,es:y.PLURAL.es},stageDesc:{en:y.DESCRIPTION.en,es:y.DESCRIPTION.es}},{order:3,id:I.id,stageTitle:{en:I.PLURAL.en,es:I.PLURAL.es},stageDesc:{en:I.DESCRIPTION.en,es:I.DESCRIPTION.es}},{order:4,id:b.id,stageTitle:{en:b.PLURAL.en,es:b.PLURAL.es},stageDesc:{en:b.DESCRIPTION.en,es:b.DESCRIPTION.es}},{order:5,id:O.id,stageTitle:{en:O.SINGULAR.en,es:O.SINGULAR.es},stageDesc:{en:O.DESCRIPTION.en,es:O.DESCRIPTION.es}}]};var P=["es","en"],N=["en"],x=(a(35),a(37),P),L=N,R=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=function(e,t,a){var n=e.pathname.match(RegExp("/("+a.join("|")+")"));return console.log(n),n?n[1]:t}(window.location,L,x),t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",a=e.sectionConfigs,n=e.title,i=e.cards,o=e.stages;return{numOfSections:e.numOfSections,sectionConfigs:a,title:n[t],cards:i.map(function(e){var a=e.cardStage,n=e.cardText,i=e.cardHTML,o=e.section;return{cardStage:a,cardText:n[t],cardHTML:(i||{})[t],section:o}}),stages:o.map(function(e){var a=e.order,n=e.id,i=e.stageTitle,o=e.stageDesc;return{order:a,id:n,stageTitle:i[t],stageDesc:o[t]}})}}(E,e);return i.a.createElement("div",{className:"App"},i.a.createElement(C,Object.assign({currentLocale:e},t)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.9dbed0bd.chunk.js.map