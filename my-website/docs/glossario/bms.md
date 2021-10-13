---
id: bms
title: BMS - Battery Management System
sidebar_label: BMS
---
*Escrito por Carolina Branquinho* 

Referências: 
[[1]](http://repositorium.sdum.uminho.pt/bitstream/1822398471Disserta%c3%a7%c3%a3o_Bruno%20Duarte_2013.pdf); [[2]](https://repositorio.ufsc.br/bitstream/handle/123456789/222222/TCC%20Vilson%20Garcia.pdf?sequence=3&isAllowed=y); [[3]](http://tede.unioeste.br/handle/tede/5113#preview-link0); [[4]](https://www.sta-eletronica.com.br/artigos/baterias-em-geral/packs-de-baterias/protecao-de-packs-de-baterias-placas-bmspcm-e-balanceamento)

## Associação de Baterias 
Em diversas aplicações é útil fazer associações de baterias quer em paralelo para aumentar a capacidade, quer em série para aumentar a tensão em seus terminais. Durante o carregamento, se uma célula atingir sua carga completa antes que as outras, sofrerá sobrecarga enquanto as demais células atingem sua carga total. Da mesma forma, a célula com menor capacidade irá descarregar antes das outras. 

Para reduzir esse efeito e prolongar a vida útil da bateria, deve ser desenvolvido um mecanismo eficaz de balanceamento de células que mantenha os níveis de capacidade das células individuais em uma bateria o mais próximo possível. 


## O que é o BMS?
![BMS1](img/docs/glossario/BMS/BMS1.JPG)

[Exemplo de um módulo comercial 3s (3 células em série) de BMS](https://www.lojadarobotica.com.br/placa-de-protecao-para-bateria-3s-20a-18650-bms?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gclid=Cj0KCQjw5JSLBhCxARIsAHgO2SdSJh1Xfgiisi42U23zpf_a8J7SernpVDGMAT6KXLcjCDBYvvWQz4IaAonSEALw_wcB)  

É um sistema que faz a gestão energética das baterias, seu objetivo é garantir a saúde de cada célula, garantindo que estas carreguem e descarreguem na mesma medida.

Seu objetivo é:

- Monitorar o estado de carga e estado de saúde das baterias;
- Fazer a equalização de carga das baterias;
- Monitorar os parâmetros (tensão, corrente e temperatura) destas. 

__Inputs:__  valor da tensão de cada célula, tensão do conjunto de baterias, temperatura das baterias e corrente. 

__Outputs:__ estado de carga(State of Charge), estado de saúde (State of Health)

### Proteção
O BMS protege as baterias, evitando:
- A sobre corrente;
- A sobre tensão (durante o carregamento);
- A sob tensão (durante descarga);
- Temperaturas excessivas;
- Curto-circuitos na descarga (Short Circuit in Discharge – SCD);
- Sobrecorrente no processo de descarga (Overcurrent in Discharge – OCD).

## State of Charge (SoC)
O Estado de Carga (SoC – State of Charge) define a capacidade disponível na bateria relativamente à sua capacidade nominal. É fundamental para otimizar a utilização das baterias, caso o estado de carga não seja determinado com exatidão e as baterias forem carregadas mais vezes que o necessário, as baterias podem se deteriorar mais rapidamente. 

Métodos de determinação do estado de carga:
- Medição direta;
- Medição da tensão;
- Book Keeping System; 
- Filtros adaptativos; 
- Contagem de Coulomb. 

## State of Health (SoH)
O Estado de Saúde (SoH – State of Health) de uma bateria é definido como a capacidade de armazenar energia, fornecer e receber corrente e reter carga, com relação à sua capacidade inicial. À medida que a bateria é usada, ela envelhece e sua performance diminui ao longo do tempo. Detectar o SoH é essencial para previnir possíveis falhas ou mau funcionamento devido ao desgate da bateria.

Possíveis aproximações para determinação do Estado de Carga: 
- Medição da impedância a uma frequência única (geralmente 1 kHz), que pode permitir identificar células defeituosas;
- Medição da capacidade da bateria e cálculo da relação entre a capacidade atual e a capacidade nominal da mesma indicada pelo fabricante. 

## Componentes do circuito:
- Aquisição de Tensão 
- Sensor de corrente 
- Sensor de temperatura 
- Microcontrolador
- Gravação de dados 
- Controladores de segurança/carga/descarga (Circuito de Interrupção e Balanceamento de cargas com relés)
- Interface do usuário

![BMS2](img/docs/glossario/BMS/BMS2.JPG)

Exemplo retirado da referência [[3]](http://tede.unioeste.br/handle/tede/5113#preview-link0).


## Métodos de Balanceamento de Cargas
Os principais métodos de balanceamento de células podem ser separados em três tipos: 
- Dissipativo;
- Não dissipativo;
- Por chaveamento. 

Os métodos dissipativos possuem baixa eficiência, pois utilizam-se elementos resistivos para igualar a tensão nas células, extraindo o excesso de energia das células e dissipando-o na forma de calor, por meio dos resistores. Já os métodos não dissipativos são considerados mais eficientes, visto que utilizam transformadores, indutores ou capacitores para transmitir a energia em excesso de uma célula para outra com menos energia, até que ambas atinjam a mesma tensão.

O método de balanceamento de cargas por chaveamento consiste em fazer uso de FET'sou relés como se fossem chaves liga-desliga, que podem desviar parte da corrente de cada célula, tanto na carga como na descarga.

## Método de Balancemento de Cargas com o uso de relés

![BMS3](img/docs/glossario/BMS/BMS3.JPG)

Exemplo retirado da referência [[3]](http://tede.unioeste.br/handle/tede/5113#preview-link0).

Os relés normalmente fechados (NF), conectados nos polos positivo (relé C+) e negativo (relé C-) da célula, estariam sendo controlados pelo BMS. Caso alguma condição anormal durante a descarga fosse identificada, os relés C+ e C- mudariam sua condição para NA.

Se o relé Dsv for também controlado pelo BMS, é possível, isolar uma célula durante o processo de descarga, enquanto o sistema continua fornecendo energia à carga em questão, com a tensão do barramento de saída estabilizada por meio de um conversor CC/CC. Esta situação poderia ser útil em caso de uma célula do arranjo em série alcançar sua tensão de corte inferior, enquanto as outras ainda podem ser descarregadas.

Para balancear as células sem a necessidade de um circuito externo de dissipação, ou então de conversores para controlar o fluxo de energia entre células, os relés Crg+ e Crg- podem carregar o arranjo de células em série modificando para um arranjo em paralelo. Para isso, os relés C+, C-, Dsv estariam abertos, e o processo de carregamento teria de seguir o perfil de tensão constante com corrente máxima limitada pela fonte CC. 

Resumo:

- __Durante carga:__ os relés Crg+ e Crg- fechados e relés C+, C-, Dsv estariam abertos
- __Durante descarga:__ relés C+ e C- fechados, caso uma célula atinja a tensão de corte inferior, relé Dsv seria fechado
- __Em caso de anormalidade no sistema:__ relés C+ e C- abertos

## Circuito na Placa de Relés
![BMS4](img/docs/glossario/BMS/BMS4.JPG)

Exemplo retirado da referência [[3]](http://tede.unioeste.br/handle/tede/5113#preview-link0).

O circuito de controle responsável pelo acionamento do relé é composto por um optoacoplador 4N25, para isolação do circuito de potência, com led indicando visualmente o acionamento. Para não usar as portas do microcontrolador como fonte de energia para acionar o relé, foram utilizados transistores NPN BC547, deste modo as portas eram usadas apenas como sinalização para o funcionamento como chave do transistor. Para proteção do transistor foi utilizado o diodo 1N4148 em paralelo aos pinos da bobina do relé, com polaridade invertida.

## Desenvolvimento do Software

Para o BMS é preciso desenvolver um software que monitore constantemente o Estado de Carga e Estado de Saúde do sistema e parâmetros limites (como tensão mínima, tensão máxima e temperatura). Esse circuito será responsável por garantir o bom funcionamento do BMS, agindo no balancemaneto de cargas e evitando o funcionamento do sistema em condições fora das ideais. Abaixo encontra-se um exemplo de algoritmo para o software do BMS.  

![BMS5](img/docs/glossario/BMS/BMS5.JPG)

Exemplo retirado da referência [[3]](http://tede.unioeste.br/handle/tede/5113#preview-link0).
