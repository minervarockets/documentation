---
id: cargaedescarga
title: Carga e Descarga das Baterias
sidebar_label: Carga e Descarga das Baterias
---

*Escrito por Daniel Relva*

## Objetivo
Uma vez que o EPS tenha sido fabricado, podemos integrá-lo a outros subsistemas e determinar por quanto tempo ele mantém a PMM alimentada. Assumindo que a bateria não esteja vazia, iremos carregá-la completamente antes de iniciar os testes.

## Método
### Conectado a uma carga
Conectamos uma carga (um resistor, por exemplo) na bateria, e, com um multímetro, medimos as variações de corrente em relação ao tempo.
Essa carga deve ser equivalente ao restante do circuito das placas.

### Multímetro acoplado à PMM
Nesse método prendemos o multímetro nos conectores da bateria, de forma a monitorar a corrente. Também será acionado um dos leds do CDHS, que irá indicar os momentos em que o circuito está alimentado.
Este método pode ser utilizado na carga também. Se utilizarmos a fonte do laboratório (que já indica a variação da corrente. podemos substituir o multímetro.

### INA219 
De forma análoga ao método 1.2, podemos usar o INA para monitorar o consumo de corrente. Como estamos utilizando o Teensy para transmitir/armazenar, podemos interfaceá-lo com um computador e fazer a leitura simultânea dos dados do INA.