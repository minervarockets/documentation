---
id: eps
title: EPS - Electrical Power System
sidebar_label: EPS
---

## Objetivo
Duas funções são exercidas simultaneamente nesta placa: (1) fornecimento de energia e (2) regulação desta energia. 
    
1. Duas baterias de lithium-ion (li-ion) modelo 18650 e de voltagem nominal 3.7v são usadas em paralelo. Em conjunto, um módulo TP4056 é usado para a recarga desse conjunto de baterias. É utilizado também um módulo sensor de corrente (INA219) para que sejam avaliadas a todo momento a corrente e a tensão geradas para o circuito.
    
2. Três tensões diferentes são utilizadas por componentes da aviônica. Essas tensões são obtidas no EPS através de três diferentes reguladores de tensão. São utilizados o step-up regulator U3V709 para gerar 9V, o regulador de tensão LM7805 para gerar 5V e o regulador de tensão LD1117V33 para gerar 3.3V. 

Há também um sistema com dois MOSFETs e duas chaves, uma interna ao circuito e outra externa ao foguete. É a partir desse sistema, chamado de Remove Before Flight (RBF), que a aviônica pode ser mantida desligada enquanto estiver dentro do foguete e só seja acionada no momento do lançamento.

## Componentes
Os componentes da placa são:

|  Componente               |      Qtd      |  Obs  |
| -------------             |  -----------  |  ------ |
| 40 pins flat connector    |       1       | Barramento principal |
| TP4056                    |       1       | Carrega baterias |
| Battery Holder            |       1       | - |
| 18650 Battery             |       2       | 3.7V |
| Mini-lock connector       |       2       | Para carregar baterias e RBF |
| Slide switch              |       1       | On/Off/RBF |
| MOSFETs                   |       2       | 1x P55N06, 1x IRF9530 |
| INA219                    |       1       | Mede tensão e corrente |
| U3V709                    |       1       | Step-up 3.7V -> 9V |
| LM7085M                   |       1       | Step-down 9V -> 5V |
| LD1117V33                 |       1       | Step-down 9V -> 3.3V |
| Resistor                  |       4       | 3x 10kΩ, 1x 100Ω |
| Capacitor                 |       5       | 1x 33uF, 1x 0.22uF, 1x 0.1uF, 1x 100uF, 1x 10uF |

## Esquemático
![img](/img/docs/aurora/hardware/placas/eps/eps_schem.jpg)

## PCB
### Versão do Protótipo
![img](/img/docs/aurora/hardware/placas/eps/eps_protpcb.png)

### Versão Atual
![img](/img/docs/aurora/hardware/placas/eps/eps_pcb.png)

## RBF
O Remove Before Flight, também chamado de RBF, é um dispositivo comum no meio da aviação cuja função é manter certa parte do circuito desligado enquanto a aeronave estiver no chão. Ele é retirado apenas no último momento, quando o vôo estiver prestes a acontecer. No caso da aviônica, nós utilizamos esse dispositivo para manter toda a eletrônica embarcada desligada antes do lançamento do foguete. Isso é necessário porque há um longo período entre a montagem final do foguete e o seu lançamento, portanto devemos evitar o gasto desnecessário das baterias e previnir quaisquer falhas de acontecerem.

Isso é feito da seguinte maneira: a aviônica é interna ao foguete, portanto para ligá-la é necessário algum dispositivo cuja localização seja externa. Temos para isso uma chave que fica montada na estrutura do foguete. Isso permite ligar e desligar a eletrônica embarcada após o foguete já ter sido preparado. O nome 'Remove Before Flight' indica que aquilo que chaveia o circuito é removido, e de fato muitas equipes fazem dessa maneira com algo [assim](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYddVzTJxSCTpANgKBw8WQMHFPr7dKNnCbQ&usqp=CAU). No entanto, para o Aurora v2 nós utilizaremos uma chave comum:

![img](/img/docs/aurora/hardware/placas/eps/rbfexternal.jpg)

Dimensões da chave:
- Diâmetro da fechadura: 1.5 cm
- Comprimento total: 2.3 cm
- Diâmetro da rosca: 1 cm

### Circuito
Como visto acima no esquemático completo, os 3v7 provenientes da bateria são enviados para dois lugares: para o regulador de tensão de 9v e para um switch. O objetivo do RBF é usar chavear os 9v, pois eles são usados por todo o restante do circuito: são usados para gerar 5v, 3v3 e usados diretamente para acionar os skibs. A chave possui 3 posições: 'on', 'off' e 'RBF'. No modo 'on' ela fecha o circuito sem ter que passar pela chave RBF externa, portanto é ideal para testes de bancada. No modo 'off' o circuito permanece desligado. No modo 'RBF' é necessário que a chave externa seja usada para fechar o circuito. Nesse caso, um conector mini-lock foi colocado para comunicar a placa com a chave, que estará na estrutura do foguete.

![img](/img/docs/aurora/hardware/placas/eps/rbf_circuit01.jpg)

O circuito possui dois MOSFETs: um tipo N (nMOS) e outro tipo P (pMOS), com o primeiro fazendo o drive do segundo. Isso foi feito porque a tensão de drive (3v7) é menor que a tensão de load (9v). Caso ela fosse maior, como 12v, poderia ter sido implementada uma configuração low-side com apenas um pMOS. Como esse não é o caso, um segundo MOSFET teve que ser adicionado. Ambos os tipos de MOSFET conduzem quando há um potencial grande o suficiente entre o gate e o source (chamado de Vgs). A diferença é que no nMOS esse potencial deve ser positivo, já no pMOS ele deve ser negativo. Portanto, podemos "desligar" os MOSFETs aplicando a mesma tensão no gate e no source. Quando o sinal lógico alto (3v7) é aplicado no gate do nMOS, ele puxa o gate do pMOS para um nível desejado. No caso, temos um divisor resistivo que nos dá 4.5v. Isso fecha a chave. Quando o sinal lógico é baixo (0v), tanto o gate quando o source do pMOS são 9v, portanto a chave fica aberta. 

O sinal lógico desse circuito são os 3v7 aplicados no gate do nMOS tanto no modo 'on' quanto no modo 'RBF' da chave. Há um resistor de 100Ω e um de 10kΩ no meio do caminho. O gate de um MOSFET atua como um pequeno capacitor, portanto utilizamos um resistor de 100Ω para atenuar o pico de corrente que existe. O resistor de 10kΩ atua como pull-down: como nós estamos ligando o sistema com os 3v7, é imprescindível que na ausência dessa tensão ele seja desligado. Esses dois níveis devem estar bem definidos para um bom funcionamento do circuito. O resistor de pull-down "puxa" o input no gate para 0v quando a chave estiver aberta, assegurando que o gate do MOSFET está recebendo nível lógico baixo.

Entre o drain do nMOS e o gate do pMOS há um resistor de 10kΩ. Também nesse pino de gate há outro resistor de 10kΩ, que atua como divisor resistivo e está ligado aos 9V provenientes do regulador de tensão. Esses 9v são aplicados no source do pMOS. Já o drain dele é a tensão de load, ou seja, os 9v utilizados na alimentação do restante do circuito. Quando o sinal lógico é zero, a tensão de load também é zero. Quando é 3v7 (ou maior que a tensão de avalanche entre drain-source, que no caso do P55N06 é no máximo 2.5v), a tensão de load é 9v.

![img](/img/docs/aurora/hardware/placas/eps/rbf_circuit02.jpg)

O circuito completo fica dessa maneira:

![img](/img/docs/aurora/hardware/placas/eps/rbf_circuit03.jpg)

### Simulação
O circuito elaborado foi simulado para as situações de sinal lógico baixo e alto. Veja abaixo os resultados de corrente, tensão e potência.
#### RBF off
![img](/img/docs/aurora/hardware/placas/eps/eps_off.png)

#### RBF on
![img](/img/docs/aurora/hardware/placas/eps/eps_on.png)

### Validação do circuito
Após a simulação do circuito e validação teórica dele nós o testamos na protoboard. O circuito foi montado na protoboard da seguinte maneira:

![img](/img/docs/aurora/hardware/placas/eps/rbfteste_proto.png)

A bateria de 3v7 está ligada à chave, que tem 3 pinos. Quando a chave está no posição de cima, o pino da bateria fica em curto com o pino de cima, portanto fechando o circuito. Quando a chave está na posição de baixo, a bateria não se liga a nada, portanto essa posição representa a chave aberta. Temos embaixo o MOSFET tipo n P55N06 e em cima o MOSFET tipo p IRF9540N. O fio verde representa o output do circuito. Quando a chave está fechada, ele teoricamente deveria levar 9V. Já com a chave aberta, esse fio deveria levar aproximadamente 0V.

Veja abaixo o resultado do circuito experimental:

#### Chave aberta
![img](/img/docs/aurora/hardware/placas/eps/rbfteste_off.jpg)

#### Chave fechada
![img](/img/docs/aurora/hardware/placas/eps/rbfteste_on.jpg)

Os fios que vêm da pcb são os de 9v, 3v7 e gnd.

Conclusão: o slide switch segue o comportamento esperado.
## Testes no protótipo
### Componentes soldados
Para validar o EPS antes de mandar fabricar, nós utilizamos a fresa do laboratório para fabricar um protótipo. Por limitações dos tamanhos de placas que tínhamos e da fresadora, esse protótipo tem dimensões 87x87. Abaixo estão imagens da placa após todos os componentes terem sido soldados. Obs: essa versão do EPS ainda não possuía o RBF.

#### Frente
![img](/img/docs/aurora/hardware/placas/eps/eps_protfront.jpeg)

#### Trás
![img](/img/docs/aurora/hardware/placas/eps/eps_protback.jpeg)

### Continuidade
Testes de continuidade foram executados na EPS buscando encontrar trilhas mal-comunicadas e planos de ground isolados. Todas as trilhas estão corretas, porém a seção de ground envolvida no regulador de 3v3 não se comunicava com o resto. Para resolver isso foi soldado um jumper. Uma via comunicando esse plano de ground foi adicionada no projeto.

![img](/img/docs/aurora/hardware/placas/eps/eps_jumper.jpg)

### Linhas de potência
Temos 3 linhas de potência sendo geradas no EPS a partir dos reguladores de 
tensão: 3v3, 5v e 9v. Verificamos que elas estão de fato sendo geradas.

#### 3v3
![img](/img/docs/aurora/hardware/placas/eps/eps_3v3.jpg)

#### 5v
![img](/img/docs/aurora/hardware/placas/eps/eps_5v.jpg)

#### 9v
![img](/img/docs/aurora/hardware/placas/eps/eps_9v.jpg)

## Referências
- [MOSFET myths and misconceptions](https://www.baldengineer.com/7-mosfet-myths-and-misconceptions-addressed.html)
- [MOSFET as a switch: low-side vs high-side](https://www.baldengineer.com/low-side-vs-high-side-transistor-switch.html)