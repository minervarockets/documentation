---
id: rec
title: REC
sidebar_label: REC
---

## Objetivo
A função desta placa é ativar os skibs e, consequentemente, ejetar os paraquedas. Para isso, um sistema que recebe que recebe 3 sinais diferentes foi elaborado. Além disso, a placa possui também um circuito de teste continuidade, de modo que podemos determinar se os skibs foram acionados ou não.

A placa COTS/A contém dois altímetros Commercial Off-The-Shelf (COTS), o StratoLoggerCF (PerfectFlite) e o PION Altimeter Lite (Pion Labs). Ambos emitem sinais de ativação dos paraquedas drogue - quando reconhecem o apogeu - e main - quando reconhecem a altitude pré-determinada. Concomitante a esses sinais há os sinais que vêm do Teensy, localizado no CDHS. O sinal para deploy do drogue é enviado quando, através do processamento das informações dos barômetros, o apogeu é detectado. O sinal para deploy do main é enviado quando certo período de tempo pré-determinado passa*.

O mesmo processo ocorre na ativação dos dois paraquedas. Além disso, há uma chave RBF para que os dois altímetros COTS sejam ligados.

_*Este requisito deve ser confirmado. Devemos fazer um estudo de casos alternativos junto à Recuperação e Aerodinâmica._

## Componentes
|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       2       | Barramento principal |
| Borne                     |       4       | 1x Drogue (Strato), 1x Drogue (Pion), 1x Main (Strato), 1x Main (Pion) |
| MOSFET                    |       2       | P55N06 |
| Resistor                  |       10      | 2x 10kΩ, 2x 470Ω, 2x 1K6Ω, 2x 150Ω, 2x 3K3Ω |
| Diode                     |       2       | 3x 1N4007 |
| Bendal connector          |       2       | 1x E-matches Drogue, 1x E-matches Main |

## Esquemático
![img](/img/docs/aurora/hardware/placas/rec/rec_schem.jpg)

## PCB
![img](/img/docs/aurora/hardware/placas/rec/rec_pcb_oficial.png)

## Simulações
### Skibs em paralelo
![img](/img/docs/aurora/hardware/placas/rec/rec_sim_parallel.jpg)

### Skibs em série
![img](/img/docs/aurora/hardware/placas/rec/rec_sim_series.jpg)

## Testes
### Protoboard
Testes foram feitos para garantir que a ativação dos skibs pode ser feita com o circuito proposto de forma independente. A aviônica SRAD não pode interferir na aviônica COTS e vice-versa.
![img](/img/docs/aurora/hardware/placas/rec/rec_teste_proto.jpg)
