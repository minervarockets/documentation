---
id: 0802r
title: Reunião 02/08/21
sidebar_label: 02/08/21
---

## Informes

## Feedback
### Carol
- Ela e Daniel perguntaram pro JG requisitos da solenóide, que passou faixas de pressão e temperatura: 0-5.8MPa / 58 Bar / 870 psi
    - Solenóide será normally open  para teste estático e normally closed para voo (também existirá uma válvula de segurança caso a aviônica falhe)
    - Manteremos a solenóide escolhida pelo Fábio: [HP-DA014B010P-012DC](https://tameson.com/valves/solenoid-valve/2-way/brass/hp-da014b010p-012dc-solenoid-valve-2way-014inch-brass-0p0-75bar-ptfe.html)
- Detalhou possíveis arranjos de placas no módulo da propulsão e na PMM

### Daniel
- Trabalhou junto com a Carol no estudo de solenóides
- Trabalhou junto com a Carol no estudo de arranjo de placas
- Fez cálculo das resistências no teste de continuidade

### Fábio
- Finalizou documentação de UART
- Finalizou estudo sobre reset de componentes I2C e SPI: nenhuma solução encontrada para reset individual além do que já é fornecido pela biblioteca do BMP280
- Apresentou servo p/ ser usado junto com a válvula esfera: [AME 218-2003](https://www.robotmarketplace.com/products/0-218-2003.html)

### Gabriel
- Soldou protótipos da EPS, REC e RECB
- Foi ao lab p/ reportagem sobre a Reditus
- Montou orçamento da PMM
- Continuou estudos preliminares sobre arquitetura de software e RTOS

### Matheus
- Começou pesquisa sobre válvula esfera

## Novas tarefas
### Carol
- Falar com o Jonas sobre temperatura de operação da válvula solenóide (-30 ou -40 ºC, diferença de preço de +200 dolares)
- Estudar melhor maneira de se obter 12V para alimentar solenóide e servo

### Daniel
- Estudar melhor maneira de se obter 12V para alimentar solenóide e servo
- Escolher novo conector dos skibs

### Fábio
- Definir termopar + interface com uC
- Ajudar Matheus na definição da válvula esfera

### Gabriel
- Fazer alterações no LoRa (Altium)
- Testar protótipos da REC, RECB, CAM e EPS

### Matheus
- Estudar design de recebimento de sinal com ground system (pesquisa de protocolos)
- Definir válvula esfera