---
id: cdhs
title: CDHS - Command Data Handling System
sidebar_label: CDHS
---

## Objetivo
A função desta placa é (1) realizar toda a aquisição e processamento de dados, (2) salvá-los em um cartão microSD e (3) enviá-los para nossa estação em terra. A primeira atividade é fundamental porque são os dados adquiridos pelos sensores que permitem à aviônica reconhecer sua posição no espaço, detectar o momento de apogeu e ativar o sistema de recuperação do foguete. Já no solo, são os dados fornecidos pelo GPS e enviados para a equipe de operações que possibilita que o foguete seja encontrado.

1. É utilizado um Inertial Measurement Unit (IMU), modelo GY-91, para a obtenção de uma grande gama de dados. O GY-91 contém dois sensores: o BMP280, que atua como barômetro; e o MPU-9250, um sensor que é simultaneamente um acelerômetro, giroscópio e magnetômetro - todos em 3 dimensões. Portanto, o GY-91 é um dispositivo que possui 10DOF (degrees of freedom). Adquirem-se também dados de pressão com outro sensor, o BMP388. Sua função no circuito é puramente experimental - seus dados serão comparados posteriormente aos obtidos pelo BMP280. 

2. Para que os dados sejam armazenados em tempo real durante o vôo é utilizado um breakout de microSD da SparkFun.

3. A transmissão dos dados obtidos em (a) é feito pelo módulo LoRa RFM95W associado a uma antena omnidirecional. Em terra, nossa antena direcional estará recebendo continuamente esses dados. Outro dispositivo cujo propósito é o envio de informações é o MTK3339 GPS Module, o GPS (Global Position System) utilizado para fornecer a posição do foguete e assim permitir que o time de operações o encontre depois que ele tenha pousado.
	
Todo o processamento dos dados obtidos e a tomada de decisões é feita pelo microcontrolador Teensy 3.5. Este microcontrolador foi escolhido por conta de seu grande poder de processamento. A placa conta também com LEDs de debugging e um buzzer, responsável pelo feedback auditivo necessário no momento da recuperação do foguete em solo.


## Componentes
Os componentes da placa são:

|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       1       | Barramento principal |
| Teensy 3.5                |       1       | - |
| GY-91                     |       1       | - |
| BMP388                    |       1       | - |
| GPS MTK3339               |       1       | - |
| LoRa RFM95W               |       1       | - |
| MicroSD Adapter           |       1       | - |
| LED                       |       4       | 3x Debugging, 1x GPS |
| Buzzer                    |       1       | Debugging |
| Resistor                  |       7       | 2x 4.7kΩ, 1x 72Ω, 3x 220Ω, 1x47Ω |
| Capacitor                 |       3       | 1x 47uF, 1x 10nF, 1x 0.1uF |

## Esquemático e PCB
### Versão do Protótipo
![img](/img/docs/aurora/hardware/placas/cdhs/cdhs_protschem.jpg)
![img](/img/docs/aurora/hardware/placas/cdhs/cdhs_protpcb.png)

### Versão atual
![img](/img/docs/aurora/hardware/placas/cdhs/cdhs_atualschem.jpg)
![img](/img/docs/aurora/hardware/placas/cdhs/cdhs_atualpcb.png)

## Testes no protótipo
### Componentes soldados
Para validar o CDHS antes de mandar fabricar, nós utilizamos a fresa do laboratório para fabricar um protótipo. Por limitações dos tamanhos de placas que tínhamos e da fresadora, esse protótipo tem dimensões 87x87. Abaixo estão imagens da placa após todos os componentes terem sido soldados.

#### Frente
![img](/img/docs/aurora/hardware/placas/cdhs/cdhs_protfront.jpeg)

#### Trás
![img](/img/docs/aurora/hardware/placas/cdhs/cdhs_protback.jpeg)

### Continuidade
Testamos a continuidade das linhas de potência que alimentam o teensy e os sensores. Todas elas chegam corretamente Também testamos a comunicação dos planos de ground. Como são muitos grounds diferentes e corremos o risco de esquecer algum nesse teste, uma boa estratégia é apertar ctrl+shift e selecionar algum pino de ground na Board no Altium. Dessa maneira, todos os grounds ficarão destacados e podemos checá-los um a um. Nenhum problema foi encontrado nos planos de ground. Além disso, foi testada a continuidade para os pinos de sinal. Todos eles estão corretos. 

:::important Jumpers
Percebemos que a trilha do pino D32 estava chegando no teensy pela layer de cima, enquanto que a solda foi feita na layer de baixo. Um jumper foi soldado na placa de forma a corrigir esse erro e uma via foi colocada no Altium. Além disso, quando fizemos o teste de integração percebemos que o pino D32 não era apropriado para o clock - deveria ter sido escolhido o D13 no lugar. Dois jumpers foram colocados na placa, trocando o D32 com o D13. Por fim, foi retirado da placa um par de resistores na linha I2C, pois apenas um era necessário.
Outro jumper foi colocado para corrigir a alimentação do GY-91, que havia sido feita no pino "Vin" mas devia ter sido feita no pino "3v3". Todas essas modificações também já foram feitas no Altium da placa.
:::
