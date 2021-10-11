---
id: fresadora
title: Uso da Fresadora PCB-Proto
sidebar_label: Uso da Fresadora PCB-Proto
---

*Autor: Daniel Relva | Originalmente escrito em 31/08/20* 

## Programas
Além do Altium, dois softwares são utilizados no processo de prototipagem: 
- PCB Proto Studio: Utilizado para gerar, a partir dos arquivos gerados no Altium, os arquivos que serão lidos pela fresadora.
- PCB Proto Interface: Utilizado para comandar a fresadora.

Os dois podem ser encontrados [aqui](https://drive.google.com/drive/folders/1GY1ISUg-SnS6vbzS-CC62xDb-ym06xY9).

## Índice
1) Roteiro (seguindo as orientações do fabricante)

- a) Botões da Fresadora
- b) Como preparar o arquivo da PCB
- c) Iniciando a Fresadora
- d) Preparando a PCB
- e) Escolha da ferramenta
- f) Desenho das trilhas e alterações da altura da - ferramenta
- g) Furo das placas

2) Adaptando o programa 

3) Detalhes adicionais

## Roteiro (seguindo as orientações do fabricante) 

### Botões da Fresadora
A Fresadora PCB-Proto possui 3 botões: um vermelho de emergência; um switch on-off; e um azul.
O Switch serve para ligar e desligar a máquina.
O vermelho serve para desligar a fresadora em caso de urgência. Por exemplo, caso ocorra um mal funcionamento que pode comprometer o status da máquina. Para desativar o botão, é só gira-lo.
O azul irá destravar os motores após a tampa for fechada. Toda a vez que a tampa for aberta, deve-se apertar este botão para que a fresa possa funcionar.

### Como preparar o arquivo das PCBs
  Abra o FlatCAM e vá em File->Open Gerber. Nas 3 primeiras opções, selecione os arquivos GBL (bottom layer), GTL (Top Layer) e GKO. Na 4°, selecione o arquivo .txt. 
Feito isso, clique em gerar objeto e verifique se está como foi projetado. Salve.

### Iniciando a Fresadora
Ligue a fresadora. Abra a PCB-Proto Interface e clique em Conectar.
 
![img](/img/docs/aurora/hardware/fresadora/fresadora1.jpg)

Aperte o botão azul e espere ela orientar os seus eixos. Feito isso, clique em ejetar para o próximo passo.

### Preparando a PCB
Pegue a PCB e prenda fita dupla face na sua superfície. Abra a tampa da fresadora e cole a PCB na mesa de sacrifício (Tente colar o mais perpendicular possível). Feche a tampa, aperte o botão azul e, no programa, mande a fresadora localizar a placa.

### Escolha da ferramenta
A máquina aceita alguns tipos de ferramenta: piramidal, engraving, topo reto e brocas. Sendo piramidais e engraving para desenhos, topo reto para tirar o cobre e brocas para furos.

Para colocá-la na fresadora, você deve selecionar o tipo desejado e clicar em
Trocar Ferramenta. Isso fará com que a máquina vá para uma posição melhor. Após trocar, clique em altura de zeramento para que você possa ajustar para a melhor altura.

![img](/img/docs/aurora/hardware/fresadora/fresadora2.jpg)

Para ajustar a altura de brocas e topos retos, basta apenas encostá-los na mesa de sacrifício. 
 
A piramidal é um caso à parte: antes de colocá-la na altura de zeramento, certifique-se que ela esteja mais alta que o sensor. Ao zerar a altura, deixe a piramidal o mais próximo possível da mesa, mas não encoste. 
Uma dica é passar uma fita por baixo. Se arranhar, a altura está adequada.


### Desenho das trilhas e alterações da altura da ferramenta
Carregue o arquivo e envie. Observe como está a espessura das trilhas. 

Caso estiverem muito rasas, edite o código no bloco de notas e procure pela linha "G01 Z-0.0400". Esta linha é a responsável pela altura da ferramenta durante a fresa, especialmente o valor após Z. Copie ela e vá em  Editar -> Substituir. Altere 0.0400 para um valor maior e clique em “Substituir tudo”.

![img](/img/docs/aurora/hardware/fresadora/fresadora3.jpg)

Salve, carregue o programa, e teste novamente. Continue alterando o código até atingir uma altura satisfatória.

### Furo das placas 
Caso for usar apenas um lado da PCB, apenas carregue o arquivo dos furos. Caso contrário, será necessária uma etapa a mais.

Quando se utiliza ambos os lados, o programa irá gerar um arquivo que vai fazer 4 furos nas bordas. Carregue ele e prenda um prego em pelo menos dois desses furos. Vire a placa e coloque-a novamente na mesa, utilizando os pregos como referência.

## Adaptando o programa para PCBs pequenas
Em alguns casos, a PCB-Proto não irá aceitar fresar por falta de espaço para a margem. Para contornar isso, vamos precisar alterar dois arquivos gerados ao localizar a placa. 

Primeiro, mandaremos a fresadora localizar a placa. Após isso, abra os arquivos last.loc e last.map. 
    
Para alterar o arquivo last.map, basta apenas abrir o arquivo Hack.

Já o last.loc, será necessário identificar os valores referentes às dimensões da placa e substituí-los pelos valores desejados.
 
O modelo de last.loc é:
**, **, **, **, **, aa, bb, cc, dd, ee, ff, **
Ignorando os valores representados por "*" e usando um eixo (x,y) de coordenadas, teremos:
(a,b) -> Tamanho da placa
(c,d) -> Ponto de origem da placa
(e,f) -> Final da placa

## Detalhes adicionais
Furo de 1.4 - PCB Proto Studio
Dimensões 31,5 x 31,5 mm