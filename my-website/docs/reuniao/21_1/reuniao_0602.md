---
id: 0602r
title: Reunião 02/06/21
sidebar_label: 02/06/21
---

## Informes
- Nenhum informe geral relevente

## Feedback Tarefas
### Fábio
- Pesquisou sobre servo motores no site da Robotis. Melhor modelo disponível considerando preço e configurações: [XL430-W250-T](http://en.robotis.com/shop_en/item.php?it_id=902-0135-000#sit_inf). Outras opções com torque maior: [MX-28R](http://en.robotis.com/shop_en/item.php?it_id=902-0064-000#sit_inf); [MX-106T](http://en.robotis.com/shop_en/item.php?it_id=902-0061-000).
    - O primeiro servo possui menor preço, porém seu torque é inferior ao necessário para a atuação das válvulas esfera. Podemos usar esse modelo para o air brake e escolher um mais caro, porém de torque maior, para a válvula.

- Pesquisou sobre válvulas esferas da Swagelok. Modelos considerados: [SS-43GS4-1466](https://products.swagelok.com/en/c/2-way-straight-pattern/p/SS-43GS4-1466?q=ball%20valve%201/2). Outros modelos não foram encontrados no site, porém a Swagelok Brasil disponibiliza: [SS-83KS8](https://products.swagelok.com/en/c/2-way-straight-pattern/p/SS-83KS8), 63TS8.

- Pesquisou sobre válvulas solenóide: [HP-DA014B010P-012DC](https://tameson.com/valves/solenoid-valve/2-way/brass/hp-da014b010p-012dc-solenoid-valve-2way-014inch-brass-0p0-75bar-ptfe.html)
    - Questionar propulsão sobre a temperatura mínima da solenóide e valor.

- Baixou placas do Quimera, porém não começou a revisão ainda.

### Gabriel
- Soldou duas placas e meia, falta a terceira. Uma trilha do EPS ficou fina e saiu quando a placa estava sendo soldada.

- Software: Terminou Ina e validação da inicialização.

## Novas Tarefas
### Fábio
- Marcar reunião com prop pra discutir novos componentes (solenóide, válvula esfera e termopares). Ver sobre quantos termopares serão necessários (2? 3?)

- O que atualizar na apresentação:
    - Depois de conversar com prop, inserir informações sobre os novos componentes.
    - Fazer slide indicando taxas de leitura/salvamento e envio de dados (depois do slide de Manipulação de Dados). [Referência](https://gabrielaleks.github.io/avionicsdocumentation/docs/reuniao/21/0503i)
    - Fazer, depois dos slides de CDHS e EPS, slides indicando os componentes de cada uma dessas placas
    - Fazer slide apresentando brevemente o protocolo de comunicação que vamos usar ([referência](https://gabrielaleks.github.io/avionicsdocumentation/docs/reuniao/21/0503i)). Colocar depois do slide do CDHS
    - Após slide da Checkpoint Board adicionar informações técnicas.

### Gabriel
- Fresar novo EPS com pads e trilhas mais largas

- Terminar de soldar placas

- Software: Começar barômetros; aprimorar classe de Log.

## Semana que vem
- Marcar reunião com estruturas pra ver sobre fixação das câmeras. 
- Adicionar seção de código no texto do filtro de kalman