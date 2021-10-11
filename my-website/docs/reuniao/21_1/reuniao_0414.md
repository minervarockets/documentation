---
id: 0414r
title: Reunião 14/04/21
sidebar_label: 14/04/21
---

## Informes
- Reunião com GFRJ dia 12/04; nova reunião de apresentação técnica será marcada. Faremos uma apresentação interna amanhã (15/04) 20h.
- Reunião com Estruturas e Aerodinâmica 19h amanhã (15/04) 19h.
- Começaremos a escrita do PTR semana que vem. Todos devem ler documentos relevantes antes.

## Feedback Tarefas
### Daniel
- Continuou elaboração do diagrama de estados
- Preencheu parte do PBS   
- Foi na salinha fazer testes da rec e tentar fresar placas
- Definiu conector do prato da rec

### Fábio
- Fez a integração preliminar ECAD+MCAD
- Progresso no filtro de kalman

### Gabriel
- Roteou placas do v3
- Foi na salinha fazer testes da rec e tentar fresar placas
- Progresso no diagrama de classes
- Revisou placas da instrumentação
- Montou apresentação pra GFRJ

## Novas Tarefas
### Todos
- Ler [Rules and Requirements](https://www.soundingrocket.org/uploads/9/0/6/4/9064598/sa_cup_irec_rules___requirements_document_20201006_rev_e.pdf), seções 2.5, 2.6, 2.7.2.

- Ler [Evaluation Guide](https://www.soundingrocket.org/uploads/9/0/6/4/9064598/sa_cup_irec-design_test___evaluation_guide-v1.0-2021.pdf), seções 4, 6.1, 6.2, 6.3, 6.8, 6.9, 6.10, 6.11, 6.12, 6.13, 6.14, 6.15, 6.16, 6.18, Appendix B.

### Daniel
- Fazer software de teste da REC (output com base no aperto do botão)
- Adicionar informações novas no diagrama:
    - Colocar inputs que fazem as mudanças de fase
    - Elaborar comportamento da aviônica no caso de hot restart
- Ir à salinha sexta 13h pra testes strato+avionica+skibs e tentar fresar mais placas
- Ver solução pro número de vias do conector do prato de recuperação
- Fazer .h e .cpp do Ina
- Terminar 'conceitos' de teste de telemetria e teste do barômetro
- Terminar de preencher PBS
    - Usar [nota fiscal](https://drive.google.com/file/d/1OZPGnC0hekDqE63xLDzXUyq-syCRchcU/view) e [inventário](https://minervarockets.github.io/documentation/docs/outros/inventario/)

### Fábio
- Fazer versão final da integração com os arquivos .step novos
    - Aproveitar e ver fixação das câmeras
- Terminar revisão das placas (IGSW, DISPPL, IGFR e ValvesExpansion1)
- Finalizar documentação de filtro de Kalman
- Fazer .h e .cpp do Imu
- Começar pesquisa sobre isolamento do transdutor de pressão a altas temperaturas
- Terminar documentação do diagrama de classes

### Gabriel
- Ir à salinha sexta 13h pra testes strato+avionica+skibs e tentar fresar mais placas
- Terminar revisão das placas (ValvesExpansion2, COM, EXP)
- Pesquisar como implementar lib de watchdog e como usar a EEPROM no teensy
- Continuar diagrama de classes