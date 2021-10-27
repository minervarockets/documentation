(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return m}));var r=t(3),n=t(7),o=(t(0),t(181)),i=["components"],s={id:"dicasgerais",title:"Dicas gerais",sidebar_label:"Dicas gerais"},c={unversionedId:"outros/dicasgerais",id:"outros/dicasgerais",isDocsHomePage:!1,title:"Dicas gerais",description:"Altium",source:"@site/docs/outros/dicasgerais.md",slug:"/outros/dicasgerais",permalink:"/documentation/docs/outros/dicasgerais",editUrl:"https://github.com/minervarockets/documentation/edit/master/my-website/docs/outros/dicasgerais.md",version:"current",sidebar_label:"Dicas gerais",sidebar:"Docs",previous:{title:"Uso da Fresadora PCB-Proto",permalink:"/documentation/docs/outros/fresadora"},next:{title:"Ideias para o futuro",permalink:"/documentation/docs/outros/ideias"}},l=[{value:"Altium",id:"altium",children:[{value:"Imagens",id:"imagens",children:[]}]},{value:"VS Code",id:"vs-code",children:[{value:"Extens\xf5es",id:"extens\xf5es",children:[]}]}],u={toc:l};function m(e){var a=e.components,t=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"altium"},"Altium"),Object(o.b)("h3",{id:"imagens"},"Imagens"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'\xc9 poss\xedvel gerar uma imagem de alta qualidade da PCB 3D no Altium. Pra isso, dentro do arquivo .pcbdoc aperte ctrl+c. Uma janela intitulada "3D Snapshot Resolution" vai aparecer. Selecione a resolu\xe7\xe3o mais alta e aperte "OK". A imagem vai ficar na sua clipboard, pra visualiz\xe1-la abra o paint e aperte ctrl+v.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Geralmente queremos colocar uma imagem dos esquem\xe1ticos em nossos documentos. O problema \xe9 que um print resulta numa imagem de baixa qualidade que n\xe3o d\xe1 pra ser interpretada direito. Para resolver isso, exporte o esquem\xe1tico como PDF (File > Smart PDF) e depois converta o PDF pra JPG ",Object(o.b)("a",{parentName:"p",href:"https://pdftoimage.com/pt/"},"aqui"),". O resultado \xe9 uma imagem de resolu\xe7\xe3o muito superior ao print."))),Object(o.b)("h2",{id:"vs-code"},"VS Code"),Object(o.b)("h3",{id:"extens\xf5es"},"Extens\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'A extens\xe3o C/C++ \xe9 nativa ao VS Code e \xe9 ela que usamos quando desejamos formatar o c\xf3digo. Nesse caso, clicamos com o bot\xe3o direito na p\xe1gina e selecionamos a op\xe7\xe3o "Format Document". A indenta\xe7\xe3o ser\xe1 corrigida, espa\xe7os desnecess\xe1rios ser\xe3o removidos etc. O formato padr\xe3o dessa formata\xe7\xe3o dedica uma linha pra cada chaves:')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'void setup() \n{\n    Serial.begin(9600);\n    Serial.println("Chaves com linha exclusiva");\n}\n\nvoid loop()\n{\n    if (...)\n    {\n        ...\n    }\n    else\n    {\n        ...\n    }\n}\n')),Object(o.b)("p",null,"Para mudar isso e fazer com que as chaves fiquem na mesma linha v\xe1 em ",Object(o.b)("em",{parentName:"p"},"File > Preferences > Settings"),' e coloque "C_Cpp.clang_format_fallbackStyle" na barra de pesquisa. Um item chamado ',Object(o.b)("em",{parentName:"p"},"C_Cpp: Clang_format_fallback Style"),' vai aparecer. Troque "Visual Studio" por "{ BasedOnStyle: Google, IndentWidth: 4 }". Agora a formata\xe7\xe3o deixar\xe1 as chaves assim:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    Serial.begin(9600);\n    Serial.println("Chaves na mesma linha");\n}\n\nvoid loop() {\n    if (...) {\n        ...\n    } else {\n        ...\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("a",{parentName:"em",href:"https://stackoverflow.com/questions/46111834/format-curly-braces-on-same-line-in-c-vscode"},"Refer\xeancia"))))}m.isMDXComponent=!0},181:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return b}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),u=function(e){var a=n.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=u(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return t?n.a.createElement(b,s(s({ref:a},l),{},{components:t})):n.a.createElement(b,s({ref:a},l))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);