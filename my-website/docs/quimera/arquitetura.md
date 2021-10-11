---
id: arquitetura
title: Arquitetura
sidebar_label: Arquitetura
---

:::caution Atenção
Página desatualizada!
:::

## Introdução
Após muitos anos desenvolvendo apenas foguetes de combustível sólido, em 2021 a Minerva Rockets estabeleceu como novo objetivo projetar, construir e, posteriormente, lançar um foguete híbrido. Para poder atender aos novos requisitos, mudanças se fazem necessárias na aviônica. O objetivo deste texto é apresentar os novos requisitos e as soluções encontradas pela equipe da aviônica para atendê-los.  

## Requisitos
Dividimos os requisitos de missão em duas categorias: os fundamentais e os benéficos. Enquanto que os fundamentais são práticas internas tornadas obrigatórias ou são cruciais para o sucesso da missão, os benéficos são aqueles requisitos que gostaríamos de ver sendo atendidos porém não necessariamente conseguiremos fazê-lo. 

### Fundamentais
É de extrema importância para todas as fases do vôo que tenhamos êxito nas seguintes atividades: manipulação de dados, comando e controle. Além disso, continuamos com nossa arquitetura modular (já iniciada em projetos anteriores) e procuramos manter ao máximo o uso de técnicas já validadas pela equipe. 

#### Manipulação de Dados
A manipulação dos dados consiste de 3 eventos: **aquisição**, **salvamento** e **transmissão**. A aquisição é feita pelos sensores a bordo do foguete. Esses dados são recebidos pelo microcontrolador do módulo da aviônica central e processados. Para futura análise, eles são salvos em um cartão microSD ao mesmo tempo em que são transmitidos via telemetria wireless para nossa equipe de solo.

#### Comando
O evento de ignição depende do controle de válvulas presentes no foguete híbrido. Portanto, é necessário que comandos de open/close cheguem às válvulas. Entretanto, existem dois requisitos que surgem por questões de segurança, tanto dos operadores quanto da missão:
- Deve existir uma distância considerável entre os operadores e o foguete.  
- A comunicação que envia os comandos para as válvulas não pode ser feita via wireless.

Além disso, a partir da leitura dos dados adquiridos através dos sensores a eletrônica embarcada deve ser capaz de executar comandos de forma autônoma e sem interferência humana.

#### Controle
Os sinais de comando devem ser executados de forma correta. Essas atividades são: 
- Ejeção de cada um dos paraquedas nos momentos corretos.
- Abertura do air brake no ângulo ideal para que o apogeu atingido seja o mais próximo possível do objetivo.
- Atuação das válvulas do tanque de oxidante (momento de fill e/ou de abort) e da câmara de combustão (ignição).

### Benéficos
#### Modularidade
A modularidade é um requisito antigo dentro da equipe e gostaríamos de continuar mantendo-a assim. Sua vantagem é a facilidade que temos de integração de módulos já projetados em novos designs.
#### Simplicidade
Trazemos como conceito geral para o projeto o princípio de design *KISS* (Keep It Simple, Stupid). De acordo com ele, nossos sistemas devem ser o mais simples possível, evitando complexidades desnecessárias que só trarão dificuldades no futuro. É importante lembrar que *simples* não significa fácil ou simplório. Na verdade, é possível que o design mais simples acabe sendo complexo - e não há problemas nisso. Entretanto, o simples eventualmente caminha para algo mais fácil do que aquilo que é desnecessariamente intrincado.
#### Preço Baixo
Nossos recursos são escassos, portanto devemos sempre optar pelo ponto ótimo entre as soluções favoráveis financeiramente e as soluções que têm melhor desempenho. Buscaremos utilizar componentes já possuídos pela equipe e, quando isso não for possível, faremos uma pesquisa ampla sobre qual componente escolher em função do custo-benefício.
## Arquitetura
A eletrônica embarcada do Aurora v2 contava com os seguintes sistemas: 
- Electrical Power System (EPS): sistema responsável pelo fornecimento de energia.
- Command and Data Handling System (CDHS): sistema contendo os sensores de pressão, temperatura, posição e movimento inercial; contém também o microcontrolador responsável pelo processamento desses dados, o transmissor deles e o adaptador do cartão microSD onde eles são salvos.
- Recovery (REC): sistema contendo os altímetros Off The Shelf e o mecanismo responsável pelo controle dos motores.
- Camboards (CAM): sistema responsável pelo controle das câmeras.

Todos eles estarão presentes no Aurora v3 - e daí percebemos a importância da modularidade em nossos projetos. Entretanto, para atender aos novos requisitos um dos sistemas será modificado e outros serão adicionados. Veja a lista dessas novas adições:
- Recovery (REC): o objetivo do sistema ainda é o mesmo, porém no v3 o subsistema da Recuperação fará a ejeção dos paraquedas de modo pirotécnico. Para atender a isso, o sistema deve ser capaz de fornecer a corrente correta para os skibs (ou e-matches) e a placa deve possuir os conectores necessários para eles.
- Apogee Control System (ACS): este sistema lida com a acepção de dados de pressão e temperatura que servirão na determinação da velocidade do foguete e de sua altitude. Eles serão processados e, através de um algoritmo desenvolvido por nós, serão utilizados para atuar um mecanismo de lâminas - chamado de air brake - cujo objetivo é aumentar o arrasto aerodinâmico do foguete. Dessa maneira teremos maior controle sobre a altura do apogeu alcançado.
- Propulsion Sensing and Control System (PSCS): este sistema é responsável pela acepção dos dados de pressão e temperatura do tanque de oxidante e da câmara de combustão. Além disso, ele faz a interface com as válvulas desses recipientes, permitindo que sejam controladas em solo para que seja feito o abort/fill/ignição.

Um sensor adicional mas que não faz parte de nenhum desses sistemas é o sensor de AoA (Angle of Attack). Com ele nós podemos determinar o ângulo entre o nariz do foguete e o vetor do fluxo relativo do ar.

Além disso, outros detalhes tiveram que ser observados:
- Quick-release da coifa com a aviônica
- Cabo umbilical + Quick-release do datalogger com o foguete

Veja abaixo a arquitetura completa da eletrônica do Quimera:

![img](/img/docs/quimera/arquitetura/fullrocket.png)

A interface entre o ACS, o PSCS e a aviônica é feita através de *checkpoint boards*. O objetivo dessas placas é:
- fazer o fornecimento de energia para os sensores e motores
- realizar a comunicação com os componentes distantes através de conectores
- realizar a comunicação com o teensy através do barramento principal

Ou seja, essas placas possuirão baterias, reguladores de tensão adequados, conectores mini-fit e conectores de 40 pinos. Veja abaixo o diagrama dos sistemas com o interfaceamento realizado pelas checkpoint boards.

![img](/img/docs/quimera/arquitetura/boardslayout.png)
## Nova REC
![img](/img/docs/quimera/arquitetura/rocketREC.png)

Os paraquedas no Aurora eram acionados através da ação de motores controlados pela aviônica. No Quimera os motores serão substituídos por Electric Matches - também chamados de e-matches ou skibs. De acordo com as informações do fabricante dos skibs que nós utilizamos, a corrente necessária para ativá-los é de 400 mA. Como verificamos no projeto passado que a corrente que seria utilizada pelos motores era de 450 mA, ou seja, maior, e que nós já éramos capazes de fornecer isso, podemos inferir que não haverá problemas no novo design.

Um outro detalhe no uso dos skibs é a boa-prática de se colocar resistores de pulldown nos pinos de entrada. Isso evita que a tensão nesses pinos flutue e o skib seja acionado inadvertidamente.

O subsistema de Recuperação exige apenas dois skibs, um para cada paraquedas. Para isso, utilizaremos dois conectores de duas vias na placa da REC. 

## Apogee Control System (ACS)
![img](/img/docs/quimera/arquitetura/rocketACS.png)
### ACS - Pitot Tube
O tubo de Pitot fica na coifa do foguete e serve para calcular a velocidade de deslocamento, o que permite à aviônica se orientar e poder controlar de forma eficiente o air brake.

Utilizando o príncipio de Bernoulli podemos obter o valor da velocidade através de duas medidas distintas: a pressão estática e a pressão total - ou seja, a pressão do fluido não sofrendo ação da velocidade do foguete e a pressão com ação da velocidade. 

O modelo utilizado no Aurora Quimera é bem simples: dois sensores de pressão medindo cada tipo de pressão e um sensor de temperatura para controle de dados. Todos estes sensores são conectados à PMM, onde o Teensy irá calcular a velocidade e trabalhar em cima disso. 

Até o momento não nos foram apresentados os requisitos para o sensor de pressão - o subsistema de Aerodinâmica ainda está trabalhando nisso. Entretanto, podemos destacar alguns candidatos a sensores. Para pressões menores que 700KPa e temperaturas de até 120°C, podemos utilizar sensores de pressão absoluta da familia MPX. Já para pressões e temperaturas maiores, podemos utilizar transdutores de pressão, cuja desvantagem é seu tamanho bem superior aos dos MTX.

A temperatura será medida por um termopar tipo K e um  módulo Max6675. Ele utiliza funciona com 5V, 50mA e se comunica via SPI.

#### Comunicação Coifa-Aviônica
O ACS-Pitot, presente na coifa, deve ser capaz de enviar os dados de temperatura e pressão para Teensy, presente no módulo central da aviônica. Entretanto, entre eles há o módulo da Recuperação. Isso inicialmente não parece um problema, já que podemos simplesmente colocar um cabo comunicando as eletrônicas e perpassando pela Recuperação. O problema surge quando consideramos que a coifa eventualmente será ejetada e o módulo da Recuperação, expandido. Conclusão: a comunicação coifa-aviônica deve ser feita com algum tipo de cabo com conector quick-release que se desconectará no momento em que o primeiro paraquedas for acionado. 

A solução encontrada foi utilizar um cabo com conectores mini-Din de 6 pinos - suficiente para o número de sinais desejado - e duas extremidades macho. Nas placas teremos os conectores fêmea. A vantagem desse conector é a facilidade com que ele é removido, portanto ideal para nosso problema.

### ACS - Air Brake
Uma das novidades do Quimera é a utilização do Air Brake, cuja função é auxiliar o foguete a atingir o apogeu desejado com maior precisão.

A partir dos dados coletados dos sensores são calculadas a velocidade e a posição do foguete. A partir dessas informações é determinado o apogeu esperado. Se esse apogeu for maior que o desejado, é acionado o motor que controla as lâminas do Air Brake e essas por sua vez se abrem na lateral do foguete, aumentando a força de arrasto e diminuindo o apogeu do foguete. Importante ressaltar que esse algoritmo só entra em ação quando o motor para de queimar.

O Air Brake também pode ser usado para diminuir a velocidade de queda na fase de recuperação do foguete.

O motor que vai controlar o Air Brake vai ser um servo motor com tensão de alimentação de 6v. Após um estudo de diferentes opções, chegamos em dois possíveis modelos: o Spektrum A6180 e o MG996R. O MG996R tem um torque de operação maior e é mais barato, no entanto sua documentação na internet é um pouco imprecisa comparada com a do Spektrum. Continuamos a pesquisa e percebemos que o MG996R atendia os nossos requisitos, portanto o escolhemos. 

O algoritmo de controle do Air Brake é sistema de controle de malha fechada, ou seja, a saída do sistema é utilizada como entrada, gerando um ciclo.

Aqui temos um fluxograma que resume como o algoritmo de controle do Air Brake vai funcionar.

![img](/img/docs/quimera/arquitetura/airbrakepseudo.png)

O estado do foguete é lido pelos sensores e depois passa por um filtro de Kalman, que prevê o comportamento do foguete e compara a previsão com os dados do sensor. Isso diminui os ruídos e mescla os dados do altímetro, do tubo de pitot e do acelerômetro pra ter um dado mais confiável  de modo a se chegar numa medição mais precisa. Esse estado do foguete é então comparado com valores experimentais pré-definidos de qual deve ser o ângulo de abertura do Air Brake. Esse valor é mandado pro motor, que gera um novo estado do foguete e o ciclo se repete.

## Propulsion Sensing and Control System (PSCS)
![img](/img/docs/quimera/arquitetura/rocketPSCS.png)
### PSCS - Sensors
O PSCS irá sensoriar tanto a pressão quanto a temperatura do tanque do oxidante e da câmara de combustão. Os dados obtidos servirão para que nosso microcontrolador possa controlar as válvulas de forma segura e eficiente. Além disso, esses dados servirão para análise e estudos futuros.

O tanque terá uma temperatura de ambiente (até 40° C) e uma pressão de 5 a 5,8 MPa. Por estas razões, foi escolhido um transdutor de pressão PFT que mede até 10MPa e funciona até 100°C. O PFT possui tensão de alimentação de 10 a 30V e utiliza 3 fios para comunicação.

A câmara possui condições mais extremas. Com a combustão, temos uma  temperatura de até 300°C e uma pressão que varia entre 3 MPa e 6 MPa. Por isso, foi utilizado um termopar tipo K com módulo interfaceador Max6675 para medição de temperatura. Já a medição de pressão será feita com um sensor que funciona em altas temperaturas, que você pode encontrar com o nome de Type 6025A. Também vimos alguns sensores da Omega, porém eles são consideravelmente caros.

### PSCS - Valves
A aviônica vai ser responsável pelo controle de duas válvulas: a da câmara de combustão e a válvula de vent.

A válvula de vent só precisa ser aberta ou fechada, ou seja, não é necessário modular o quanto de fluido que a atravessa. Por conta disso optamos pela utilização de uma válvula solenóide para o seu controle. A solenóide da Parker foi escolhida por ter um baixo consumo de potência aliado a uma pressão diferencial máxima alta.

A válvula da câmara de combustão, por outro lado, futuramente será modulada, portanto foi decidido que teríamos uma válvula esfera controlada por um motor. 

Pela necessidade de velocidade e precisão do controle foi escolhido um servo motor para fazer essa atuação. Foram consideradas válvulas esferas já motorizadas, entretanto as encontradas tem pressão máxima de operação muito baixas e tempo de abertura muito alto. Escolhemos uma válvula SS-45TF8 da Swagelok e um servomotor MG996R. Veja abaixo uma imagem exemplo desse servo atuando em uma válvula esfera. 

![img](/img/docs/quimera/arquitetura/servoballvalve.png)

### PSCS - Ignition Sensing
Como comentado nos requisitos, o controle das válvulas não pode ser feito através de telemetria wireless por ser crucial para o sucesso da missão. Portanto, devem ter cabos entrando no foguete que se comunicam com a aviônica e controlam as válvulas. Escolhemos um cabo único e que possui múltiplas linhas dentro dele, afinal precisamos de sinal de ground, vent, abort e ignite. Além disso, esse cabo deve ser capaz de se desconectar facilmente do foguete após a ignição.

Esse cabo tem a mesma origem que o skib responsável pela ignição: o datalogger. Os comandos das válvulas são emitidos pela equipe de operação lá e transmitidos para o foguete. O comando de ignite possui uma peculiaridade: ele simultaneamente detonará o skib e abrirá a válvula da câmara de combustão. Esses dois eventos devem ocorrer ao mesmo tempo para que a ignição seja bem feita.

![img](/img/docs/quimera/arquitetura/ignitionsensing.png)

Veja abaixo o diagrama completo do PSCS:

![img](/img/docs/quimera/arquitetura/PSCSdiagram.png)

## Angle of Attack Sensor (AoA)
Será adicionado no Quimera um sensor de ângulo de ataque (AoA), cujo objetivo é determinar o ângulo entre a linha de referência do foguete e o vetor de movimento relativo entre o foguete e o ar. Nós nos baseamos no projeto feito por um grupo da Universidade de Washington para determinar a arquitetura. Como esse sistema é completamente independente dos outros, utilizaremos um arduino pro mini junto com dois BMP280, que medirão a pressão e a temperatura, e um encoder rotativo, que traduzirá o movimento mecânico do elemento mecânico exposto ao ar em pulsos elétricos, que por sua vez serão interpretados pelo arduino.

![img](/img/docs/quimera/arquitetura/aoasensor.png)

#### Temporário

![img](/img/docs/quimera/arquitetura/aoa1.png)
![img](/img/docs/quimera/arquitetura/aoa2.png)
![img](/img/docs/quimera/arquitetura/board_checkpoint.png)


## Anexos
### Componentes
Tabelas com os componentes principais em função do sistema:

| ACS |
| --- |
| Sensor de pressão (a definir) |
| [Termopar tipo K + max6675](https://www.baudaeletronica.com.br/modulo-sensor-de-temperatura-max6675-termopar-tipo-k.html) |
| [Servo motor MG996R](https://www.baudaeletronica.com.br/servo-mg996r-towerpro.html?gclid=Cj0KCQiA6t6ABhDMARIsAONIYywdoMVOYOYC5DlpasZksVzCao7QQ1go2BI-NW4f3LegV_NhCYTm_n0aAkR8EALw_wcB) |

| PSCS |
| ---- |
| 2x [Transdutor de pressão PX119-1KGI](https://www.omega.com/en-us/pressure-measurement/pressure-transducers/p/PX119) |
| 2x [Termopar tipo K + max6675](https://www.baudaeletronica.com.br/modulo-sensor-de-temperatura-max6675-termopar-tipo-k.html)      |
| [Válvula Solenóide U121V5595-492210C2](https://ph.parker.com/br/pt/parker-2-way-normally-closed-1-4-general-purpose-solenoid-valves/u121v5595-492210c2) |
| [Servo motor MG996R](https://www.baudaeletronica.com.br/servo-mg996r-towerpro.html?gclid=Cj0KCQiA6t6ABhDMARIsAONIYywdoMVOYOYC5DlpasZksVzCao7QQ1go2BI-NW4f3LegV_NhCYTm_n0aAkR8EALw_wcB) |
| [Válvula esfera SS-45TF8](https://www.swagelok.com/en/catalog/Product/Detail?part=SS-45TF8) |

| AoA |
| --- |
| [Arduino Pro Mini](https://www.filipeflop.com/produto/placa-pro-mini-atmega328p-5v-16mhz/) |
| [BMP280](https://www.filipeflop.com/produto/sensor-de-pressao-e-temperatura-bmp280/) |
| [Rotary Encoder](https://www.arducore.com.br/encoder-decoder-ky-040-rotacional?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gclid=Cj0KCQiA34OBBhCcARIsAG32uvOMu_4o9h9-uwOGpfsd3ZVaV6eMqMNjm266ZzAOhUxLJw_X3vcWvFQaAtHEEALw_wcB) |

### Referências
Medição de Temperatura da câmara de combustão: https://www.rocketryforum.com/threads/high-temperature-thermocouple-for-combustion-chamber.134580/


