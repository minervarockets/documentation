---
id: 0902r
title: Reunião 02/09/21
sidebar_label: 02/09/21
---

## Informes
- Semana dos membros:
    - Matheus e Fábio tem prova sábado e teste no domingo.

- Reunião com estruturas. Encaminhamentos (todas as nossas pendências já foram cumpridas):
    - Câmeras:
        - Passar dimensões da câmera e das lentes pra str
        - Passar referências de outras equipes pra str
        - 2 semanas de pesquisa: devemos ter go/no-go sobre design e implementação
    - Sampling holes:
        - Passar dados sobre o altimeter port sizing
        - Revisar e fazer as devidas correções nos furos já existentes
    - RBF:
        - Passar para str dimensões da chave
        - Verificar uso da porca rebite ou outros métodos

- Apresentação pré-CDR foi feita. Comentários principais (todos estão disponíveis [aqui](https://docs.google.com/document/d/1FOdUbB0-hpIeRkQnTEUqmBAPiRvT0XnsFPU_h56aj1k/edit)):
    - Elogios ao formato da apresentação, independência entre sistemas SRAD e COTS, wiki, intenções ao software, intenções para a SIAC, aproveitamento do heritage da aviônica.
    - Pendente: câmeras, montagem mecânica atualizada.
    - Estrutura deverá ser impressa em 3D. Aviônica pode ser prototipada com dimensões PC104 e integrada com essa estrutura.
    - Principal: devemos investigar solução _fail-safe_ do RBF.

- Reunião de segunda que vem (06/09) cancelada. Faremos a reunião da semana no dia 09/09.

## Feedback
### Carol
- Viu requisitos de software.
- Revisou máquina de estados. Mudanças feitas no [doc](https://docs.google.com/document/d/1P074SXchUvsx4eciMq08heqMpALU0Cfx/edit).
- Auxiliou a montar apresentação pré-CDR.
- Participou da reunião com str.
- Instalou Mathcad. Tentativas de instalação do Orcad.

### Daniel
- Começou a escrever roteiro para vídeo do marketing.
- Auxiliou a montar apresentação pré-CDR.
- Participou da reunião com str.

### Fábio
- Estudou sobre sampling ports; encontrou cálculo a ser feito e passou para str.
- Participou da reunião com str.

### Gabriel
- Participou da reunião com str e reuniu dados necessários para que eles consigam trabalhar os tópicos comentados.
    - Mediu e passou dimensões da câmera e referências de outras equipes.
    - Mediu dimensões da chave usada no RBF.
- Montou apresentação pré-CDR e apresentou.
- Junto com Matheus, refez placa da REC e implementou COTS/A e COTS/B.
- Atualizou wiki com novas placas, simulações, diagramas.

### Matheus
- Junto com Gabriel, refez placa da REC e implementou COTS/A e COTS/B.

## Novas tarefas
### Carol
- Instalar Orcad.
- Atualizar PBS
    - Atualizar REC.
    - Mudar RECB para COTS/B.
    - Inserir COTS/A.

### Daniel
- Finalizar roteiro do vídeo do marketing.

### Fábio
- Estudar implementação de RBF safety.

### Gabriel
- Estudar RTOS e FreeRTOS.

### Matheus
- Fazer trilhas da REC e COTS/A
- Atualizar barramento.
- Adicionar bendal no orçamento.