---
id: maquinadeestados
title: Máquina de Estados
sidebar_label: Máquina de Estados
---

*Escrito por Daniel Relva*

Durante a execução de um software podem ser encontradas situações em que o sistema está realizando funções além do necessário, ocupando memória e aumentando a incidência de erros. Para contornar isso, é utilizada uma máquina de estados.

## Conceito

Uma máquina de estados finita ou autômato finito é um modelo matemático usado para representar programas de computadores ou circuitos lógicos. O conceito é concebido como uma máquina abstrata que deve estar em um de um número finito de estados. Por exemplo, uma porta possui apenas dois estados (aberta e fechada) e duas transições (abrir e fechar).

![img](/img/docs/glossario/maquinadeestados/maquinadeestados1.jpg)

## Aplicação em software
Durante a execução de um software nós temos diversas funções ocorrendo simultaneamente. Ao utilizarmos uma máquina de estados, podemos destacar as funções utilizadas em determinado estado e descartar as outras, de forma a alocação desnecessária de memória. 

Reutilizando o exemplo da porta, podemos pensar num código para ela. Neste código, teremos funções responsáveis pelos estados e pelas transições. Também teremos uma função responsável por contar quantas pessoas passam pela porta. Sabendo que só passam pessoas nos momentos em que a porta está aberta, não faz sentido gastar processamento (e bateria, dependendo do sistema) contando quantas pessoas passam por uma porta fechada. Logo, esta função não estará presente durante o estado “Fechada”.
