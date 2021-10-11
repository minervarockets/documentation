---
id: 0719r
title: Reunião 19/07/21
sidebar_label: 19/07/21
---

## Informes
- Criar [conta educacional](https://www.onshape.com/en/education/#form-container) no OneShape

## Feedback
### Carol
- Completou as tarefas da semana passada sem problemas, tendo feito a documentação do [Protocolo SPI](/docs/glossario/protocolos/spi) e das [Rules & Requirements](/docs/competicoes/sacup/rulesnrequirements) da SA CUP.

### Daniel
- Pesquisou sobre como implementar verificação do estado dos skibs usando o INA219.

### Fábio
- Escreveu documentação do Protocolo UART. Ainda falta adicionar mais informações relevantes e fazer o pull request.

### Gabriel
- Adicionou as seguintes páginas aos docs: 'Home', 'Glossário Ágil' e 'Como as reuniões funcionam'. Falta 'Contribuindo com a documentação'.
- Determinou próximas tarefas do v2, v3 e software. Datas do cronograma de software serão determinadas após o novo estudo da arquitetura.

### Matheus
- Escreveu documentação do Protocolo I2C e do Design, Test & Evaluation Guide. Ainda falta adicionar mais informações relevantes e fazer o pull request.

## Novas tarefas
### Carol
- Ler doc da SA CUP escrito pelo Matheus.
- Revisar placas (com foco no PSCS).
- Analisar status AS-IS e TO-BE do PSCS
    - Entregável: doc com AS-IS e TO-BE do sistema, apontando pontos que devem ser mais desenvolvidos e indicando os próximos passos.

### Daniel
- Avaliar as duas possibilidades de circuito de detecção dos skibs: com INA219 (sensoreando a corrente) e com optoacoplador + pinos (testando continuidade). Desenhar ambos os circuitos.
    - Entregáveis: matriz de decisão, esquemático dos circuitos.
- Analisar status do PSCS
    - Entregável: doc com AS-IS e TO-BE do sistema, apontando pontos que devem ser mais desenvolvidos e indicando os próximos passos.

### Fábio
- Terminar de escrever e fazer o pull request dos docs 'Protocolo UART'.
- Analisar status do ACS
    - Entregável: doc com AS-IS e TO-BE do sistema, apontando pontos que devem ser mais desenvolvidos e indicando os próximos passos.
- Pesquisar maneiras de resetar componentes I2C e SPI individualmente e/ou coletivamente.
    - Entregável: doc descrevendo se é possível. Se sim, explicar como fazer isso no código.

### Gabriel
- Terminar de escrever 'Contribuindo com a documentação'.
- Soldar protótipos da REC, RECB, CAM e EPS.
- Continuar estudo sobre SoC e padrões implementados ao software da aviônica.

### Matheus
- Terminar de escrever e fazer o pull request dos docs 'Protocolo I2C' e 'Design, Test & Evaluation Guide'.
- Ler doc da SA CUP escrito pela Carol.
- Revisar placas (com foco no ACS).
- Analisar status do ACS
    - Entregável: doc com AS-IS e TO-BE do sistema, apontando pontos que devem ser mais desenvolvidos e indicando os próximos passos.

## Referências úteis
- [Repositório](https://github.com/a-duen/Ematch-Igniter) contendo esquemático e código do circuito de ignição feito pela equipe UBC Rocket. Eles detectam o estado do skib por teste de continuidade.
- [Arquitetura](/docs/quimera/arquitetura) do v3.
- [Revisão pré-CDR](https://docs.google.com/document/d/1lP0ljBXa-yACRFt1iANj9G7lLX5fjQX20hAe-ozBEJ4/edit) do v3.