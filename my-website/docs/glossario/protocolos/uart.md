---
id: uart
title: UART
sidebar_label: UART
---

*Escrito por Fábio Procaci*

## O que é o protocolo UART?

Universal asynchronous receiver-transmitter (UART) É um dispositivo de hardware para comunicação serial assíncrona em que o formato dos dados e as velocidades de transmissão são configuráveis. Ele envia os bits de dados um a um, do menos significativo ao mais significativo, definidos por bits de início e parada para que o tempo preciso seja controlado pelo canal de comunicação.

![img](/img/docs/glossario/protocolos/uart/1.png)

## Como funciona:

No protocolo UART (Universal Asynchronous Receiver/Transmitter) a comunicação é assíncrona, sem qualquer sinal de relógio. Os bits são enviados/recebidos a uma dada cadência acordada entre emissor e receptor a que se chama baudrate (medida em bits por segundo).

Os bits circulam por duas linhas (TX e RX, respetivamente de transmissão e recepção) o que permite uma comunicação simultânea nos dois sentidos
 

Na ausência de dados (Bus Idle) estas duas linhas apresentam o nível lógico 1. Os bits de dados são antecedidos por um Start Bit ao nível lógico 0, e terminados por um ou mais Stop Bits ao nível lógico 1. Os bits de dados (em geral 8) são enviados do menos para o mais significativo. Antes do envio dos Stop Bits (usualmente um) pode ainda ser enviado um bit de paridade: par (Even) ou ímpar (Odd), destinado à detecção de eventuais erros na comunicação.

![img](/img/docs/glossario/protocolos/uart/2.png)



## O que usa este protocolo?

É um protocolo utilizado por muitos microcontroladores, pois é responsável pela conversão da comunicação paralela em serial, que na maioria das vezes é convertida em outro protocolo como por exemplo o controlador da placa Blackboard ou Arduino Uno, que utiliza o protocolo UART mas tem o protocolo convertido para USB.


## Exemplo com a placa ChipKit Uno32

No caso da placa ChipKit Uno32, os pinos da interface necessários à implementação do protocolo UART são os pinos 0 (RX) e 1 (TX) sendo que estes já se encontram conetados ao circuito integrado FT232 da FTDI que os liga ao porto USB da placa, permitindo assim a comunicação da placa com o computador a que ela está ligada via USB.

![img](/img/docs/glossario/protocolos/uart/3.png)

### Projeto serialtest

No projeto serialtest vamos apresentar alguns dos métodos do objecto Serial, que implementa a comunicação série com a placa ChipKit Uno32:

![img](/img/docs/glossario/protocolos/uart/4.png)

Para que os pinos 0 e 1 sejam usados para implementar a comunicação UART, e não como simples portas digitais I/O, será necessário usar o método begin para iniciar a configuração indicando o respetivo baudrate (neste exemplo 9600 bit/s).

A transmissão de dados pode ser feita pelos métodos print ou println. Neste último caso, a transmissão é terminada com o envio dos caracteres “carriage return” (‘\r’, ASCII = 13) e “newline” (‘\n’, ASCII 10).

### Serial monitor

Uma vez programada a placa é possível receber as mensagens do lado do computador ao qual ela está ligada, abrindo um terminal série como o PuTTY.

O resultado será o seguinte:

![img](/img/docs/glossario/protocolos/uart/5.png)

### write
No próximo exemplo são apresentadas outras formas de envio, nomeadamente a que usa o método write.

![img](/img/docs/glossario/protocolos/uart/6.png)

O resultado será o seguinte:


![img](/img/docs/glossario/protocolos/uart/7.png)

### printf
Para enviar dados pela porta série há ainda a possibilidade de se usar o método printf já conhecido da linguagem C:


![img](/img/docs/glossario/protocolos/uart/8.png)

O resultado seria agora este:


![img](/img/docs/glossario/protocolos/uart/9.png)





