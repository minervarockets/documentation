---
id: cotsa
title: COTS/A
sidebar_label: COTS/A
---

## Objetivo
Esta placa tem como objetivo abrigar os altímetros COTS utilizados pela aviônica. Além desses componentes, ela abriga o conector de 40 pinos do barramento secundário utilizado na comunicação com a COTS/B (placa de fornecimento de energia para os componentes COTS), o conector do RBF e bornes. 

São 8 bornes, 4 para cada altímetro. Os bornes de RBF recebem o sinal pelo conector minilock e transmitem um para cada altímetro. Os bornes da bateria recebem a potência através do barramento. Os bornes de drogue e main estão conectados pelo conector frontal aos altímetros; já na parte superior eles estarão conectados à placa da REC, que tem bornes na mesma disposição para receber esses sinais.

## Componentes

|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       2       | Barramento secundário |
| StratoLogger              |       1       | Altímetro COTS |
| Pion Altimeter            |       1       | Altímetro COTS |
| Mini-lock Connector       |       1       | RBF |
| Borne                     |       8       | 2x RBF, 2x Bat, 2x Main, 2x Drogue |

## Esquemático
![img](/img/docs/aurora/hardware/placas/cotsa/cotsa_schem.jpg)

## PCB
![img](/img/docs/aurora/hardware/placas/cotsa/cotsa_pcb.png)

## Wiring
![img](/img/docs/aurora/hardware/placas/cotsa/cotsa_wiring.png)
