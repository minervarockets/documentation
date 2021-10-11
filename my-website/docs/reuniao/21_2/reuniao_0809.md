---
id: 0809r
title: Reunião 09/08/21
sidebar_label: 09/08/21
---

## Informes
- Vídeo do marketing p/ próxima sprint.
- Disponibilidade dos membros: 
    - Gabriel: semana bem complicada, tarefas provavelmente serão arrastadas p/ semana que vem.
    - Matheus: atividade no sábado.
    - Carol e Daniel: provas só a partir da semana que vem.

## Feedback
### Carol
- Questionou prop sobre requisito de temperatura da solenóide.
- Estudou melhor arranjo para obtenção de 12V. Representação [neste diagrama](https://drive.google.com/file/d/1KBKzyxlANMXbrPO3WR4wuCbtDfEJysVW/view).

### Daniel
- Começou pesquisa sobre conectores para o skib.
- Estudou melhor arranjo para obtenção de 12V.

### Fábio
- Ausente.

### Gabriel
- Validou as placas, fazendo testes de continuidade e refazendo pontos de solda necessários.
- Fez modificações no projeto do CDHS no Altium, modificando posição do LoRa e refazendo algumas trilhas.

### Matheus
- Fez [planilha de válvulas](https://docs.google.com/spreadsheets/d/12U718Zyx1rFen22L8Ka3ZR8k6AX5HVbOgBPnEpBW3T0/edit#gid=1209481729)
    - Torque, pressão, Cv, tipo de conexão.
    - Melhores são da série 45: bom Cv e torque coerente com o servo escolhido.
    - [Orçou](https://drive.google.com/file/d/14WzAy-Z06k5PzXJA_EuKPSb0FgvvXNh-/view) válvulas esfera na Swagelok. Preços altíssimos, uma nova busca por fornecedores deverá ser feita.
- Realizou pesquisa sobre protocolos de comunicação via cabo: RS232, RS422 e RS485. RS485 parece ser a melhor opção pra gente.

## Novas tarefas
### Carol
- Fazer esquemático preliminar do PSCS considerando novo arranjo de baterias. Devem existir as seguintes linhas de potência:
    - 12V (transdutores de pressão, solenóide, servo).
    - 5V (termopares (e possivelmente Teensy + RS485 + microSD adapter)).

### Daniel
- Finalizar pesquisa sobre conector dos skibs.
- Ajudar Carol na tarefa do esquemático preliminar do PSCS.

### Fábio
- Continuar tarefas da semana passada: definir termopar + interface com uC.

### Gabriel
- Finalizar validação do EPS.
- Validar pPMM.

### Matheus
- Validar uso do módulo conversor RS485: somos capazes de utilizá-lo na comunicação com a instrumentação? Devemos ser capazes de:
    - Receber sinais de atuação do servo e da solenóide.
    - Transmitir status das válvulas (open/closed).
    - Transmitir leituras de pressão e temperatura (3 termopares + 2 transdutores de pressão).