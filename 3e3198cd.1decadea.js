(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{179:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return b}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),m=function(e){var a=o.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=m(e.components);return o.a.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},p=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(t),p=n,b=u["".concat(i,".").concat(p)]||u[p]||d[p]||r;return t?o.a.createElement(b,l(l({ref:a},c),{},{components:t})):o.a.createElement(b,l({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return u}));var n=t(3),o=t(7),r=(t(0),t(179)),i=["components"],l={id:"rtos",title:"RTOS",sidebar_label:"RTOS"},s={unversionedId:"aurorav2/software/rtos",id:"aurorav2/software/rtos",isDocsHomePage:!1,title:"RTOS",description:"Escrito por Gabriel Aleksandravicius",source:"@site/docs/aurorav2/software/rtos.md",slug:"/aurorav2/software/rtos",permalink:"/documentation/docs/aurorav2/software/rtos",editUrl:"https://github.com/minervarockets/documentation/edit/master/my-website/docs/aurorav2/software/rtos.md",version:"current",sidebar_label:"RTOS",sidebar:"Docs",previous:{title:"Protocolo de Comunica\xe7\xe3o",permalink:"/documentation/docs/aurorav2/software/protocolodecomm"},next:{title:"Arquitetura",permalink:"/documentation/docs/quimera/arquitetura"}},c=[{value:"Apresenta\xe7\xe3o",id:"apresenta\xe7\xe3o",children:[]},{value:"Multitasking no Arduino vanilla",id:"multitasking-no-arduino-vanilla",children:[{value:"Piscando com <code>delay()</code>",id:"piscando-com-delay",children:[]},{value:"Piscando sem <code>delay()</code>",id:"piscando-sem-delay",children:[]}]},{value:"Multitasking com RTOS",id:"multitasking-com-rtos",children:[{value:"O que \xe9 um RTOS?",id:"o-que-\xe9-um-rtos",children:[]},{value:"Por que usar um sistema operacional?",id:"por-que-usar-um-sistema-operacional",children:[]},{value:"Exemplo",id:"exemplo",children:[]}]},{value:"Refer\xeancias",id:"refer\xeancias",children:[]}],m={toc:c};function u(e){var a=e.components,t=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Escrito por Gabriel Aleksandravicius")),Object(r.b)("h2",{id:"apresenta\xe7\xe3o"},"Apresenta\xe7\xe3o"),Object(r.b)("p",null,"O prop\xf3sito dessa p\xe1gina \xe9:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Apresentar multitasking com Arduino vanilla"),Object(r.b)("li",{parentName:"ul"},"Apresentar conceito de RTOS",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Definir sistema operacional"),Object(r.b)("li",{parentName:"ul"},"Definir multitasking"),Object(r.b)("li",{parentName:"ul"},"Fornecer casos de uso"))),Object(r.b)("li",{parentName:"ul"},"Comparar esses dois conceitos, trazendo vantagens e desvantagens deles",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Concluir se \xe9 v\xe1lido implementar RTOS nos nossos projetos"))),Object(r.b)("li",{parentName:"ul"},"Avaliar RTOS que podemos implementar e como faz\xea-lo",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"RTOS + state machine")))),Object(r.b)("h2",{id:"multitasking-no-arduino-vanilla"},"Multitasking no Arduino vanilla"),Object(r.b)("p",null,"Quando come\xe7amos nosso aprendizado com Arduino, geralmente realizamos tarefas simples e vamos tornando-a mais complexa com o tempo. Come\xe7amos com o 'hello world' do mundo dos embarcados, que \xe9 piscar um LED em uma frequ\xeancia determinada. Depois, adicionamos mais LEDs. Em seguida podemos testar outras coisas, como atuar um servo ou fazer leituras com um sensor. Por fim, o pr\xf3ximo desafio \xe9, naturalmente, testar fazer tudo isso ao mesmo tempo. E como fazemos isso?"),Object(r.b)("p",null,"Pra responder a essa pergunta, vejamos um exemplo mais simples: como piscar dois leds em frequ\xeancias diferentes."),Object(r.b)("h3",{id:"piscando-com-delay"},"Piscando com ",Object(r.b)("inlineCode",{parentName:"h3"},"delay()")),Object(r.b)("p",null,"O c\xf3digo b\xe1sico dentro de ",Object(r.b)("inlineCode",{parentName:"p"},"loop()")," para piscar um LED se parece com isso:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n    digitalWrite(led, HIGH);\n    delay(1000);\n    digitalWrite(led, LOW);\n    delay(1000);\n}\n")),Object(r.b)("h3",{id:"piscando-sem-delay"},"Piscando sem ",Object(r.b)("inlineCode",{parentName:"h3"},"delay()")),Object(r.b)("p",null,"Essa estrutura \xe9 fact\xedvel para c\xf3digos simples, por\xe9m um grande problema reside no uso da fun\xe7\xe3o ",Object(r.b)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/time/delay/"},Object(r.b)("inlineCode",{parentName:"a"},"delay()")),": ela interrompe a execu\xe7\xe3o de praticamente qualquer outro bloco de c\xf3digo. Portanto, n\xe3o podemos piscar dois LEDs com frequ\xeancias diferentes. "),Object(r.b)("p",null,"A solu\xe7\xe3o fornecida na ",Object(r.b)("a",{parentName:"p",href:"https://www.arduino.cc/en/Tutorial/BuiltInExamples/BlinkWithoutDelay"},"pr\xf3pria documenta\xe7\xe3o do Arduino")," \xe9 a seguinte:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"// Blink without delay\nint red = 5;\nint blue = 7;\n\nunsigned long previousTimeRed;\nunsigned long previousTimeBlue;\n\nunsigned long intervalRed = 1000;\nunsigned long intervalBlue = 500;\n\nint ledStateRed = LOW; \nint ledStateBlue = LOW; \n\nvoid setup() {\n    pinMode(red, OUTPUT);\n    pinMode(blue, OUTPUT);\n}\n\nvoid loop() {\n    unsigned long currentTime = millis();\n\n    // interval/2 = intervalo do blink (acende e apaga)\n    if (currentTime - previousTimeRed >= (intervalRed/2)) {\n        previousTimeRed = currentTime;\n        \n        if (ledStateRed == LOW) {\n            ledStateRed = HIGH; \n        } else {\n            ledStateRed = LOW; \n        }\n\n        digitalWrite(red, ledStateRed);\n    }\n\n    if (currentTime - previousTimeBlue >= (intervalBlue/2)) {\n        previousTimeBlue = currentTime;\n        \n        if (ledStateBlue == LOW) {\n            ledStateBlue = HIGH; \n        } else {\n            ledStateBlue = LOW; \n        }\n\n        digitalWrite(blue, ledStateBlue);\n    }    \n\n}\n")),Object(r.b)("p",null,"Deixamos de usar a fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"delay()")," e, no lugar, implementamos a contagem de tempo com ",Object(r.b)("inlineCode",{parentName:"p"},"millis()"),". Temos uma vari\xe1vel global, ",Object(r.b)("inlineCode",{parentName:"p"},"intervalRed"),", respons\xe1vel por determinar o intervalo do LED vermelho. Tamb\xe9m temos uma vari\xe1vel respons\xe1vel por armazenar o \xfaltimo momento em que o LED mudou de estado (",Object(r.b)("inlineCode",{parentName:"p"},"previousTimeRed"),") e uma vari\xe1vel para armazenar o estado (",Object(r.b)("inlineCode",{parentName:"p"},"ledStateRed"),"). O mesmo vale para o outro LED. Dentro de ",Object(r.b)("inlineCode",{parentName:"p"},"loop()")," a fun\xe7\xe3o ",Object(r.b)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/time/millis/"},Object(r.b)("inlineCode",{parentName:"a"},"millis()"))," \xe9 chamada e seu valor de retorno (quantidade de tempo passado desde o in\xedcio do programa) \xe9 armazenado em ",Object(r.b)("inlineCode",{parentName:"p"},"currentTime"),". O bloco de c\xf3digo a seguir faz a verifica\xe7\xe3o do tempo, checando se o tempo passado desde a \xfaltima mudan\xe7a de estado j\xe1 \xe9 maior ou igual ao intervalo pr\xe9-estabelecido pro LED. Se sim, o estado do LED \xe9 alterado."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"dica")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Embora tenha resolvido o problema do delay, o c\xf3digo ficou muito repetitivo dessa forma. Veja uma solu\xe7\xe3o mais elegante ",Object(r.b)("a",{parentName:"p",href:"https://github.com/gabrielaleks/DesafiosCapacitacao_Gabarito/blob/master/2.1-blink_diff_freq_multiple.cpp"},"aqui"),"."))),Object(r.b)("h2",{id:"multitasking-com-rtos"},"Multitasking com RTOS"),Object(r.b)("p",null,"A solu\xe7\xe3o empregada no t\xf3pico anterior \xe9 v\xe1lida e muito pode ser feito seguindo o mesmo princ\xedpio - poder\xedamos trocar os LEDs por sensores que fazem a leitura em frequ\xeancias diferentes, por exemplo. Ent\xe3o por que usar um RTOS? Pra responder a isso, primeiro vejamos ",Object(r.b)("strong",{parentName:"p"},"o que")," \xe9 um RTOS."),Object(r.b)("h3",{id:"o-que-\xe9-um-rtos"},"O que \xe9 um RTOS?"),Object(r.b)("h3",{id:"por-que-usar-um-sistema-operacional"},"Por que usar um sistema operacional?"),Object(r.b)("h3",{id:"exemplo"},"Exemplo"),Object(r.b)("h2",{id:"refer\xeancias"},"Refer\xeancias"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://learn.adafruit.com/multi-tasking-the-arduino-part-1"},"Learn Adafruit: Multi-tasking the Arduino")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://roboticsbackend.com/how-to-do-multitasking-with-arduino/"},"The Robotics Back-End: How to do multitasking with Arduino")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://sergioprado.org/sistemas-de-tempo-real-part-1/"},"Sistemas de tempo real")),Object(r.b)("li",{parentName:"ul"},"RTOS Fundamentals",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.freertos.org/implementation/a00004.html"},"Multitasking")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.freertos.org/implementation/a00005.html"},"Scheduling")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.freertos.org/implementation/a00006.html"},"Context Switching")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.freertos.org/implementation/a00007.html"},"Real Time Applications")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.freertos.org/implementation/a00008.html"},"Real Time Scheduling")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.filipeflop.com/blog/freertos-para-arduino/"},"Filipe Flop: FreeRTOS para Arduino")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.embarcados.com.br/rtos-para-iniciantes-com-arduino-e-freertos/"},"Embarcados: Principais conceitos de RTOS com Arduino"))))}u.isMDXComponent=!0}}]);