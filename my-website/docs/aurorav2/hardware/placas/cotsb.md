---
id: cotsb
title: COTS/B
sidebar_label: COTS/B
---

## Objetivo
A segunda placa responsável pelos componentes COTS é a COTS/B. Ela se comunica com a COTS/A através de um barramento diferente daquele utilizado pelas demais placas. Essa placa possui duas baterias de lithium-ion (li-ion) modelo 18650 e de voltagem nominal 3.7v em paralelo e um TP4056 cuja função é carregar as baterias. Além disso, a placa também contém o módulo COTS Featherweight GPS Tracker. A antena omnidirecional deste módulo será realocada de modo a ficar paralela ao corpo do foguete.

## Componentes
|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       2       | Barramento secundário |
| 18650 Battery             |       2       | 3.7V |
| Battery Holder            |       1       | - |
| TP4056                    |       1       | - |
| U3V70F9                   |       1       | Bateria dos COTS |
| Mini-Lock Connector       |       1       | Carregamento da bateria |
| Featherweight GPS         |       1       | GPS COTS |

## Esquemático
![img](/img/docs/aurora/hardware/placas/cotsb/cotsb_schem.jpg)

## PCB
### Versão do protótipo
![img](/img/docs/aurora/hardware/placas/cotsb/cotsb_pcb_prot.jpg)

### Versão oficial
![img](/img/docs/aurora/hardware/placas/cotsb/cotsb_pcb_oficial.png)
