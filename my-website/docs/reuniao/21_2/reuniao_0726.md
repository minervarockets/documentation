---
id: 0726r
title: Reunião 26/07/21
sidebar_label: 26/07/21
---

## Informes
- SIAC deve ocorrer na segunda quinzena de novembro. Todos os subsistemas devem apresentar pelo menos um trabalho autoral.

- Reunião de sexta passada para quinta. Ela será feita logo após o sprint retrospective.

- Entrega do Quimera em dezembro. Levando esse prazo em consideração, focaremos apenas no essencial - PSCS - e, uma vez que ele já tenha sido entregue, trabalharemos nos extras - ACS, AoA.

- Correção: pro MOSFET controlar a solenóide de forma contínua ele deve permanecer aberto, o que pode ser implementado via software.
    - Prestar atenção no duty cicle da solenóide: (ON time)/((ON + OFF) time).

- Como aprender: quando pegar o PSCS, por exemplo, para estudar, primeiro veja todos os seus componentes e estude-os individualmente. Entenda o que é e como funcionam as válvulas solenóides, as válvulas esferas, termopares, transdutores de pressão etc. Depois disso o esquemático ficará muito mais claro. Ou então, caso você esteja fazendo o design de um sistema novo, os próximos passos ficarão menos nebulosos.

- Roadmap breve: próximas duas semanas serão dedicadas à definição final de componentes do Quimera. Também será reavaliado o design do sistema e o arranjo de placas. Depois, as mudanças que surgirem serão propagadas para as placas no Altium. 

## Feedback
### Carol
- Leu doc do Matheus
- Revisou as placas do Quimera e definiu, com Daniel, AS-IS e TO-BE do PSCS

### Daniel
- Estudou circuitos de teste de continuidade dos skibs
- Definiu, com Carol, AS-IS e TO-BE do PSCS

### Fábio
- Escreveu doc de UART
- Começou pesquisa de como resetar componentes I2C e SPI

### Gabriel
- Soldou componentes na CAM
- Escreveu 'Contribuindo com a Documentação'
- Continuou estudos sobre SoC e padrões no software; começou pesquisa de RTOS
- Apresentou projeto da aviônica no híbrido para o André, Jonas e Kaio
- Selecionou conectores da linha de fogo

### Matheus
- Terminou de escrever 'Protoclo I2C' e 'Design, Test & Evaluation Guide'
- Leu doc da Carol
- Revisou as placas do Quimera

## Novas tarefas
### Carol
- Definir solenóide
- Estudar possível arranjo de placas no PSCS

### Daniel
- Calcular resistência no circuito de continuity check
- Definir solenóide
- Estudar possível arranjo de placas no PSCS

### Fábio
- Definir servo motor
- Definir termopar + interface com uC
- Finalizar documentação de UART
- Continuar pesquisa de como resetar componentes I2C e SPI

### Gabriel
- Montar orçamento
- Soldar REC, RECB e EPS
- Ir ao laboratório na quarta apresentar projeto a aviônica

### Matheus
- Estudar design de recebimento de sinal com o ground system
- Definir válvula esfera
- Definir servo motor