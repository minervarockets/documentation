---
id: 0407r
title: Reunião 07/04/21
sidebar_label: 07/04/21
---
## Informativos
- Novo [cronograma](https://docs.google.com/spreadsheets/d/13qKBAYcTGG8PJqeEM_EExLm43UqIcl2GsDyZCErJj1k/edit#gid=598607884) do projeto
- Compras chegaram!
- Necessário montar [apresentação](https://docs.google.com/presentation/d/1AsW86TPXRB374yOl4DFC_aSDflvZj5Jopi1SAYcKe7E/edit#slide=id.gade73bc0f6_1_0) para a GFRJ

## Feedback Tarefas
### Daniel
- Fez diagrama da máquina de estados
- Preencheu parte das planilhas de PBS v2.5 e v3
- Documentou máquina de estados

### Fábio
- Documentou diagrama de classes
- Fez determinação das constantes
- Fez revisão da IGSW e DISPPL 
- Continuou pesquisa de filtro de Kalman

### Gabriel
- Terminou PDR
- Terminou simulações do v3, esquemáticos e boards
- Documentou teste de escrita e leitura do SD
- Começou diagrama de classes

## Novas Tarefas
### Daniel
- Determinar constantes do Ina, Lora e GPS
- Diagrama de classes ficou bom, falta apenas incluir:
    - Inputs necessários em mudança de estado
    - Diminuir número de estados pré-lançamento. Pensar se faz sentido todos aqueles estados ou se é melhor incluir um estado de inicialização
    - Incluir estados de erro e pensar em como fazer
- Continuar preenchimento do PBS. Comentários:
    - Perguntar pro Igor como preencher a Manufacturing Breakdown
    - Incluir testes já feitos
    - Adicionar 40 pin e mini-lock; adicionar capacitores do LM, adicionar conector do mini din (air brake), adicionar mini-lock onde falta. *Obs: ver PDR para nova versão das placas*
- Ir na salinha 13h sexta pra testar rec/recb e pegar código do macete da fresadora
- Definir o conector do prato da recuperação ([referência](https://minervarockets.github.io/documentation/docs/reuniao/21/0401i))
- Atualizar documento de apresentação da GFRJ:
    - PSCS Valvulas
    - PSCS Sensores
    - PSCS Power
    - PSCS Ignition Sensing

### Fábio
- Verificar placas da instrumentação com as novas regras. Rodar Design Rule Check
- Fazer revisão da IGFR
    - Considerar PCB e distâncias, plano de ground, verificar se trilhas saem pela layer de baixo.
- Continuar pesquisas de kalman Filter e fazer documentação
- Elaborar CAD preliminar da estrutura
- Atualizar documento de apresentação da GFRJ:
    - Nova Rec
    - Pitot
    - Air Brake
    - AoA

### Gabriel
- Finalizar diagrama de classes
- Adicionar metas de software e outros detalhes no cronograma
- Revisar placas da instrumentação
- Ir na salinha 13h sexta pra testar rec/recb e pegar código do macete da fresadora
- Simular rec com mais skibs
- Atualizar documento de apresentação da GFRJ:
    - Introdução
    - Requisitos
    - Sistemas Antigos
    - Placa de Checkpoint