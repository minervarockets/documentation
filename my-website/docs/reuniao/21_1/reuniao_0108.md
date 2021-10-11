---
id: 0108r
title: Reunião 08/01/21
sidebar_label: 08/01/21
---

## 1 - Boas vindas

## 2 - Discussão
### Definição do horário das reuniões semanais
- Horário decidido: Quarta 17h;

### Ferramentas da equipe
- Slack e Drive;

### Clube do Livro de Controle
- Daniel já vai participar;
- Fábio vai ver se consegue participar;
- Gabriel não vai conseguir participar, mas vai fazer a leitura de forma independente;


### Atividades
#### Aurora
- EPS e CDHS
    - Terminar testes nas placas de forma individual e depois fazer os testes de integração; 
    - Daniel: Instalar PlatformIO e testar com ele;

- Câmeras 
    - Pegar câmeras na salinha e testá-las;
    - Usar LEDs da câmera na definição de on/off;
    - Na Camboard devem ter conectores para on, rec e off;
    - A ideia de 5 câmeras era excessiva. Novo objetivo: duas câmeras;
    - Usar baterias dedicadas para as câmeras;

- Rec
    - Resolver questão do MOSFET (possível solução: colocar step-up antes do mosfet e usar essa nova tensão mais alta, permitindo que a V<sub>th</sub> seja maior e facilitando que encontremos um MOSFET);
    - Aprovar solução do CI de porta OR;
    - Pegar confirmação com o Igor da utilização de Skibs na rec;

- Código
    - Escrever cronograma de desenvolvimento do código;
    - Checar [software requirements](https://docs.google.com/spreadsheets/d/1Oi8ACvgf7rLMSR-AzCxozJbaNmCjdgQ7rskL8Q67J9A/edit?usp=drive_web&ouid=104407959702814414449);

#### Quimera
- Reunião semana que vem para decidir como será de forma geral;
- Necessário para fim de janeiro:
    - Slide de apresentação;
    - Mathcad geral;
    - Planilha de componentes (orçamento e onde comprar);

### Nova forma de documentação
- Utilizar markdown na documentação;
- Docusaurus, MkDocs, ...
- Geração de PDFs;

## 3 - Tarefas
### Todos
- Mandar foto do horário de aulas;


### Daniel
- Instalar PlatformIO e ver se funciona;
    - Validar componentes das placas;
- Ver sobre regulador de tensão antes do MOSFET;
### Fábio
- Pesquisar sobre protocolos de comunicação:
    - [I2C](https://www.circuitbasics.com/basics-of-the-i2c-communication-protocol/);
    - [SPI](https://www.circuitbasics.com/basics-of-the-spi-communication-protocol);
    - [Serial UART](https://www.circuitbasics.com/basics-uart-communication/);
- Pesquisar sobre [Arduino](https://www.arduino.cc/reference/pt/);
- Instalar PlatformIO;

### Gabriel
- Elaborar nova forma de documentação;
- Elaborar cronograma semanal do Aurora e do Quimera;
    - Fazer cronograma de elaboração do código em função dos requirements;
- Ver sobre [câmeras](https://org-info.mobi/manual/sq13pt.htmhttps://org-info.mobi/manual/sq13pt.htm) e [skibs](https://github.com/a-duen/Ematch-Igniter);
