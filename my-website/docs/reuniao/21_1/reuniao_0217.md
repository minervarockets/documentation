---
id: 0217r
title: Reunião 17/02/21
sidebar_label: 17/02/21
---

## Informativos
- Recuperação do v2 será com skibs.
- Páginas de Manufacturing Breakdown e Testing Breakdown.

## Feedback Tarefas

### Daniel
- Fez circuito da REC mas não achou a .lib do MOSFET

### Fábio
- Preencheu planilha de Design Breakdown

### Gabriel
- Teste das câmeras

## Novas Tarefas
### Daniel
- Fazer teste com novo sistema da REC (Até 19/02)
    - Estudar CD4075B e verificar se realmente conseguimos utilizá-lo a partir dos sinais recebidos pelo teensy e pelos altímetros COTS.
- Fazer planilha de consumo do Quimera. Levar em consideração tensões necessárias para cada sistema e escolher componente que faça a conversão.
- Desenvolver PDR do PSCS (falar das diferentes possibilidades de sensores e válvulas, explicar o porquê de termos escolhido o que escolhemos etc).

### Fábio
- Entrar em contato com o pessoal de estruturas (Júlia) da sats pra pegar o assembly das estrutura da Aviônica. 
- Instalar o Solid.
    - Se não conseguir, usar TeamViewer.
- Integrar arquivos .step das placas (CDHS, EPS, REC, RECB, CAM).
- Desenvolver PDR do ACS e NovaREC ([referência de skibs](https://github.com/a-duen/Ematch-Igniter/wiki)).

### Gabriel
- Testar câmeras enquanto ligadas ao PC.
- Teste de leitura e escrita do cartão microSD.
- Gerar arquivo atualizado das placas.
- Desenvolver PDR (introdução, AoA, ignition sensing).

### Todos
- Dar git clone do repositório do [pmmTeensy](https://github.com/minervarockets/pmmTeensy)
- Instalar bibliotecas necessárias pro desenvolvimento:
    - Adafruit BMP3xx
    - Adafruit BMP280
    - Adafruit GPS
    - Adafruit INA219
    - Bolder Flight MPU9250
    - RadioHead

- Workshop de Altium Segunda 17:00. Temas:
    - Gerar uma libsch
    - Gerar uma libpcb e unir com ela a libsch do componente
    - Fazer um esquemático
    - Gerar a Board a partir do esquematico
    - Modificar dimensões da placa
    - Ferramentas gerais

