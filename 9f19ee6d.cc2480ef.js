(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{131:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return d})),t.d(a,"default",(function(){return u}));var r=t(3),o=t(7),s=(t(0),t(181)),n=["components"],i={id:"bms",title:"BMS - Battery Management System",sidebar_label:"BMS"},c={unversionedId:"glossario/bms",id:"glossario/bms",isDocsHomePage:!1,title:"BMS - Battery Management System",description:"Escrito por Carolina Branquinho",source:"@site/docs/glossario/bms.md",slug:"/glossario/bms",permalink:"/documentation/docs/glossario/bms",editUrl:"https://github.com/minervarockets/documentation/edit/master/my-website/docs/glossario/bms.md",version:"current",sidebar_label:"BMS",sidebar:"Docs",previous:{title:"M\xe1quina de Estados",permalink:"/documentation/docs/glossario/maquinadeestados"},next:{title:"PS 2021.2",permalink:"/documentation/docs/ps/2021.2"}},d=[{value:"Associa\xe7\xe3o de Baterias",id:"associa\xe7\xe3o-de-baterias",children:[]},{value:"O que \xe9 o BMS?",id:"o-que-\xe9-o-bms",children:[]},{value:"Porque usar o BMS",id:"porque-usar-o-bms",children:[]},{value:"State of Charge (SoC)",id:"state-of-charge-soc",children:[]},{value:"State of Health (SoH)",id:"state-of-health-soh",children:[]},{value:"Componentes do circuito:",id:"componentes-do-circuito",children:[]},{value:"M\xe9todos de Balanceamento de Cargas",id:"m\xe9todos-de-balanceamento-de-cargas",children:[]},{value:"M\xe9todo de Balancemento de Cargas com o uso de rel\xe9s",id:"m\xe9todo-de-balancemento-de-cargas-com-o-uso-de-rel\xe9s",children:[]},{value:"Circuito na Placa de Rel\xe9s",id:"circuito-na-placa-de-rel\xe9s",children:[]},{value:"Desenvolvimento do Software",id:"desenvolvimento-do-software",children:[]},{value:"Refer\xeancias",id:"refer\xeancias",children:[]}],l={toc:d};function u(e){var a=e.components,i=Object(o.a)(e,n);return Object(s.b)("wrapper",Object(r.a)({},l,i,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Escrito por Carolina Branquinho")," "),Object(s.b)("h2",{id:"associa\xe7\xe3o-de-baterias"},"Associa\xe7\xe3o de Baterias"),Object(s.b)("p",null,"Em diversas aplica\xe7\xf5es \xe9 \xfatil fazer associa\xe7\xf5es de baterias quer em paralelo para aumentar a capacidade, quer em s\xe9rie para aumentar a tens\xe3o em seus terminais. Durante o carregamento, se uma c\xe9lula atingir sua carga completa antes que as outras, sofrer\xe1 sobrecarga enquanto as demais c\xe9lulas atingem sua carga total. Da mesma forma, a c\xe9lula com menor capacidade ir\xe1 descarregar antes das outras. "),Object(s.b)("p",null,"Para reduzir esse efeito e prolongar a vida \xfatil da bateria, deve ser desenvolvido um mecanismo eficaz de balanceamento de c\xe9lulas que mantenha os n\xedveis de capacidade das c\xe9lulas individuais em uma bateria o mais pr\xf3ximo poss\xedvel. "),Object(s.b)("h2",{id:"o-que-\xe9-o-bms"},"O que \xe9 o BMS?"),Object(s.b)("p",null,Object(s.b)("img",{alt:"BMS1",src:t(306).default})),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://www.lojadarobotica.com.br/placa-de-protecao-para-bateria-3s-20a-18650-bms?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gclid=Cj0KCQjw5JSLBhCxARIsAHgO2SdSJh1Xfgiisi42U23zpf_a8J7SernpVDGMAT6KXLcjCDBYvvWQz4IaAonSEALw_wcB"},"Exemplo de um m\xf3dulo comercial 3s (3 c\xe9lulas em s\xe9rie) de BMS"),"  "),Object(s.b)("p",null,"\xc9 um sistema que faz a gest\xe3o energ\xe9tica das baterias, seu objetivo \xe9 garantir a sa\xfade de cada c\xe9lula, garantindo que estas carreguem e descarreguem na mesma medida."),Object(s.b)("p",null,"Seu objetivo \xe9:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Monitorar o estado de carga e estado de sa\xfade das baterias;"),Object(s.b)("li",{parentName:"ul"},"Fazer a equaliza\xe7\xe3o de carga das baterias;"),Object(s.b)("li",{parentName:"ul"},"Monitorar os par\xe2metros (tens\xe3o, corrente e temperatura) destas. ")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Inputs:"),"  valor da tens\xe3o de cada c\xe9lula, tens\xe3o do conjunto de baterias, temperatura das baterias e corrente. "),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Outputs:")," estado de carga(State of Charge), estado de sa\xfade (State of Health)"),Object(s.b)("h2",{id:"porque-usar-o-bms"},"Porque usar o BMS"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"As c\xe9lulas perdem naturalmente o seu balanceamento (ou seja, ter\xe3o estados diferentes de carga e tens\xe3o) ap\xf3s alguns ciclos de carga."),Object(s.b)("li",{parentName:"ul"},"Realizando-se ensaios em diferentes packs de baterias Li-Ion com diferentes n\xedveis de desbalanceamento de c\xe9lulas conclui-se que quanto maior for o desbalanceamento das c\xe9lulas num pack, maior ser\xe1 a perda de capacidade ap\xf3s alguns ciclos de carga e descarga.")),Object(s.b)("p",null,Object(s.b)("img",{alt:"BMS6",src:t(307).default})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Se durante o descarregamento uma bateria atingir n\xedveis de tens\xe3o abaixo da tens\xe3o de corte m\xednima, isso pode resultar em danos a bateria e diminui\xe7\xe3o de sua vida \xfatil.Sempre que a primeira c\xe9lula atinge a tens\xe3o m\xednima de corte, a placa BMS vai cortar o circuito de descarga e interromper a descarga da bateria. Isto protege as c\xe9lulas da bateria de serem descarregadas al\xe9m do m\xednimo o que produziria danos irrepar\xe1veis. A desconex\xe3o na descarga impede que as c\xe9lulas mais fortes empurrem a c\xe9lula mais fraca para polaridade inversa."),Object(s.b)("li",{parentName:"ul"},"O circuito de prote\xe7\xe3o tamb\xe9m protege a bateria de corrente de carga excessiva.Passar qualquer quantidade de tempo acima da tens\xe3o m\xe1xima causar\xe1 danos irrepar\xe1veis para as c\xe9lulas"),Object(s.b)("li",{parentName:"ul"},"O desbalanceamento de c\xe9lulas \xe9 tamb\xe9m uma condi\xe7\xe3o degenerativa. Como as c\xe9lulas tornam-se desequilibradas, eles suportam uma quantidade desproporcional da carga, que faz com que elas se tornem mais desequilibradas at\xe9 que a bateria se destr\xf3i.")),Object(s.b)("p",null,"O BMS protege as baterias, evitando:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A sobre corrente;"),Object(s.b)("li",{parentName:"ul"},"A sobre tens\xe3o (durante o carregamento);"),Object(s.b)("li",{parentName:"ul"},"A sob tens\xe3o (durante descarga);"),Object(s.b)("li",{parentName:"ul"},"Temperaturas excessivas;"),Object(s.b)("li",{parentName:"ul"},"Curto-circuitos na descarga (Short Circuit in Discharge \u2013 SCD);"),Object(s.b)("li",{parentName:"ul"},"Sobrecorrente no processo de descarga (Overcurrent in Discharge \u2013 OCD).")),Object(s.b)("h2",{id:"state-of-charge-soc"},"State of Charge (SoC)"),Object(s.b)("p",null,"O Estado de Carga (SoC \u2013 State of Charge) define a capacidade dispon\xedvel na bateria relativamente \xe0 sua capacidade nominal. \xc9 fundamental para otimizar a utiliza\xe7\xe3o das baterias, caso o estado de carga n\xe3o seja determinado com exatid\xe3o e as baterias forem carregadas mais vezes que o necess\xe1rio, as baterias podem se deteriorar mais rapidamente. "),Object(s.b)("p",null,"M\xe9todos de determina\xe7\xe3o do estado de carga:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Medi\xe7\xe3o direta;"),Object(s.b)("li",{parentName:"ul"},"Medi\xe7\xe3o da tens\xe3o;"),Object(s.b)("li",{parentName:"ul"},"Book Keeping System; "),Object(s.b)("li",{parentName:"ul"},"Filtros adaptativos; "),Object(s.b)("li",{parentName:"ul"},"Contagem de Coulomb. ")),Object(s.b)("h2",{id:"state-of-health-soh"},"State of Health (SoH)"),Object(s.b)("p",null,"O Estado de Sa\xfade (SoH \u2013 State of Health) de uma bateria \xe9 definido como a capacidade de armazenar energia, fornecer e receber corrente e reter carga, com rela\xe7\xe3o \xe0 sua capacidade inicial. \xc0 medida que a bateria \xe9 usada, ela envelhece e sua performance diminui ao longo do tempo. Detectar o SoH \xe9 essencial para previnir poss\xedveis falhas ou mau funcionamento devido ao desgate da bateria."),Object(s.b)("p",null,"Poss\xedveis aproxima\xe7\xf5es para determina\xe7\xe3o do Estado de Carga: "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Medi\xe7\xe3o da imped\xe2ncia a uma frequ\xeancia \xfanica (geralmente 1 kHz), que pode permitir identificar c\xe9lulas defeituosas;"),Object(s.b)("li",{parentName:"ul"},"Medi\xe7\xe3o da capacidade da bateria e c\xe1lculo da rela\xe7\xe3o entre a capacidade atual e a capacidade nominal da mesma indicada pelo fabricante. ")),Object(s.b)("h2",{id:"componentes-do-circuito"},"Componentes do circuito:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Aquisi\xe7\xe3o de Tens\xe3o "),Object(s.b)("li",{parentName:"ul"},"Sensor de corrente "),Object(s.b)("li",{parentName:"ul"},"Sensor de temperatura "),Object(s.b)("li",{parentName:"ul"},"Microcontrolador"),Object(s.b)("li",{parentName:"ul"},"Grava\xe7\xe3o de dados "),Object(s.b)("li",{parentName:"ul"},"Controladores de seguran\xe7a/carga/descarga (Circuito de Interrup\xe7\xe3o e Balanceamento de cargas com rel\xe9s)"),Object(s.b)("li",{parentName:"ul"},"Interface do usu\xe1rio")),Object(s.b)("p",null,Object(s.b)("img",{alt:"BMS2",src:t(308).default})),Object(s.b)("p",null,"Exemplo retirado da refer\xeancia ",Object(s.b)("a",{parentName:"p",href:"http://tede.unioeste.br/handle/tede/5113#preview-link0"},"[3]"),"."),Object(s.b)("h2",{id:"m\xe9todos-de-balanceamento-de-cargas"},"M\xe9todos de Balanceamento de Cargas"),Object(s.b)("p",null,"Os principais m\xe9todos de balanceamento de c\xe9lulas podem ser separados em tr\xeas tipos: "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Dissipativo;"),Object(s.b)("li",{parentName:"ul"},"N\xe3o dissipativo;"),Object(s.b)("li",{parentName:"ul"},"Por chaveamento. ")),Object(s.b)("p",null,"Os m\xe9todos dissipativos possuem baixa efici\xeancia, pois utilizam-se elementos resistivos para igualar a tens\xe3o nas c\xe9lulas, extraindo o excesso de energia das c\xe9lulas e dissipando-o na forma de calor, por meio dos resistores. J\xe1 os m\xe9todos n\xe3o dissipativos s\xe3o considerados mais eficientes, visto que utilizam transformadores, indutores ou capacitores para transmitir a energia em excesso de uma c\xe9lula para outra com menos energia, at\xe9 que ambas atinjam a mesma tens\xe3o."),Object(s.b)("p",null,"O m\xe9todo de balanceamento de cargas por chaveamento consiste em fazer uso de FET'sou rel\xe9s como se fossem chaves liga-desliga, que podem desviar parte da corrente de cada c\xe9lula, tanto na carga como na descarga."),Object(s.b)("h2",{id:"m\xe9todo-de-balancemento-de-cargas-com-o-uso-de-rel\xe9s"},"M\xe9todo de Balancemento de Cargas com o uso de rel\xe9s"),Object(s.b)("p",null,Object(s.b)("img",{alt:"BMS3",src:t(309).default})),Object(s.b)("p",null,"Exemplo retirado da refer\xeancia ",Object(s.b)("a",{parentName:"p",href:"http://tede.unioeste.br/handle/tede/5113#preview-link0"},"[3]"),"."),Object(s.b)("p",null,"Os rel\xe9s normalmente fechados (NF), conectados nos polos positivo (rel\xe9 C+) e negativo (rel\xe9 C-) da c\xe9lula, estariam sendo controlados pelo BMS. Caso alguma condi\xe7\xe3o anormal durante a descarga fosse identificada, os rel\xe9s C+ e C- mudariam sua condi\xe7\xe3o para NA.\nSe o rel\xe9 Dsv for tamb\xe9m controlado pelo BMS, \xe9 poss\xedvel, isolar uma c\xe9lula durante o processo de descarga, enquanto o sistema continua fornecendo energia \xe0 carga em quest\xe3o, com a tens\xe3o do barramento de sa\xedda estabilizada por meio de um conversor CC/CC. Esta situa\xe7\xe3o poderia ser \xfatil em caso de uma c\xe9lula do arranjo em s\xe9rie alcan\xe7ar sua tens\xe3o de corte inferior, enquanto as outras ainda podem ser descarregadas.\nPara balancear as c\xe9lulas sem a necessidade de um circuito externo de dissipa\xe7\xe3o, ou ent\xe3o de conversores para controlar o fluxo de energia entre c\xe9lulas, os rel\xe9s Crg+ e Crg- podem carregar o arranjo de c\xe9lulas em s\xe9rie modificando para um arranjo em paralelo. Para isso, os rel\xe9s C+, C-, Dsv estariam abertos, e o processo de carregamento teria de seguir o perfil de tens\xe3o constante com corrente m\xe1xima limitada pela fonte CC. "),Object(s.b)("p",null,"Resumo:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Durante carga:")," os rel\xe9s Crg+ e Crg- fechados e rel\xe9s C+, C-, Dsv estariam abertos"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Durante descarga:")," rel\xe9s C+ e C- fechados, caso uma c\xe9lula atinja a tens\xe3o de corte inferior, rel\xe9 Dsv seria fechado"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Em caso de anormalidade no sistema:")," rel\xe9s C+ e C- abertos")),Object(s.b)("h2",{id:"circuito-na-placa-de-rel\xe9s"},"Circuito na Placa de Rel\xe9s"),Object(s.b)("p",null,Object(s.b)("img",{alt:"BMS4",src:t(310).default})),Object(s.b)("p",null,"Exemplo retirado da refer\xeancia ",Object(s.b)("a",{parentName:"p",href:"http://tede.unioeste.br/handle/tede/5113#preview-link0"},"[3]"),"."),Object(s.b)("p",null,"O circuito de controle respons\xe1vel pelo acionamento do rel\xe9 \xe9 composto por um optoacoplador 4N25, para isola\xe7\xe3o do circuito de pot\xeancia, com led indicando visualmente o acionamento. Para n\xe3o usar as portas do microcontrolador como fonte de energia para acionar o rel\xe9, foram utilizados transistores NPN BC547, deste modo as portas eram usadas apenas como sinaliza\xe7\xe3o para o funcionamento como chave do transistor. Para prote\xe7\xe3o do transistor foi utilizado o diodo 1N4148 em paralelo aos pinos da bobina do rel\xe9, com polaridade invertida."),Object(s.b)("h2",{id:"desenvolvimento-do-software"},"Desenvolvimento do Software"),Object(s.b)("p",null,"Para o BMS \xe9 preciso desenvolver um software que monitore constantemente o Estado de Carga e Estado de Sa\xfade do sistema e par\xe2metros limites (como tens\xe3o m\xednima, tens\xe3o m\xe1xima e temperatura). Esse circuito ser\xe1 respons\xe1vel por garantir o bom funcionamento do BMS, agindo no balancemaneto de cargas e evitando o funcionamento do sistema em condi\xe7\xf5es fora das ideais. Abaixo encontra-se um exemplo de algoritmo para o software do BMS.  "),Object(s.b)("p",null,Object(s.b)("img",{alt:"BMS5",src:t(311).default})),Object(s.b)("p",null,"Exemplo retirado da refer\xeancia ",Object(s.b)("a",{parentName:"p",href:"http://tede.unioeste.br/handle/tede/5113#preview-link0"},"[3]"),"."),Object(s.b)("h2",{id:"refer\xeancias"},"Refer\xeancias"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"http://repositorium.sdum.uminho.pt/bitstream/1822398471Disserta%c3%a7%c3%a3o_Bruno%20Duarte_2013.pdf"},"Disserta\xe7\xe3o Bruno Duarte")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"https://repositorio.ufsc.br/bitstream/handle/123456789/222222/TCC%20Vilson%20Garcia.pdf?sequence=3&isAllowed=y"},"Disserta\xe7\xe3o de Vilson Garcia (UFSC)")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"http://tede.unioeste.br/handle/tede/5113#preview-link0"},"Disserta\xe7\xe3o de Giovane Sylvestrin (Unioeste)")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"https://www.sta-eletronica.com.br/artigos/baterias-em-geral/packs-de-baterias/protecao-de-packs-de-baterias-placas-bmspcm-e-balanceamento"},"Prote\xe7\xe3o de packs de baterias"))))}u.isMDXComponent=!0},181:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return p}));var r=t(0),o=t.n(r);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),l=function(e){var a=o.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=l(e.components);return o.a.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},b=o.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,n=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,p=u["".concat(n,".").concat(b)]||u[b]||m[b]||s;return t?o.a.createElement(p,i(i({ref:a},d),{},{components:t})):o.a.createElement(p,i({ref:a},d))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,n=new Array(s);n[0]=b;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var d=2;d<s;d++)n[d]=t[d];return o.a.createElement.apply(null,n)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},306:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/BMS1-ed43a21ed846a9d4c160d54ffd1ca551.JPG"},307:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/BMS6-420007f266d5621e4eb9c4685918b6d6.JPG"},308:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/BMS2-421ad060e6e4d3cde8f8c0fc5eb5a1c8.JPG"},309:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/BMS3-91f7af70dcdee87d1604d8b97f4a2b43.JPG"},310:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/BMS4-0671c3c4367061f1a7d8a57f3c169dab.JPG"},311:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/BMS5-b9bc198ba031bf144428469e44d4c20b.JPG"}}]);