---
id: i2c
title: I2C
sidebar_label: I2C
---

*Escrito por Matheus Parracho*

## O que é?
O barramento de circuito integrado (I2C) é uma interface serial de dois fios desenvolvida originalmente pela Phillips Corporation no início da década de 90. Ele é utilizado para a comunicação entre dispositivos de maneira bem eficiente e rápida.

## Hardware
O barramento I2C é composto de dois fios, chamados de SDA (Serial Data) e SCL (Serial Clock) , além de sua alimentação (VCC), tipicamente de 3.3V ou 5V.

Este protocolo especifica dois sinais de comunicação, um com o sinal de clock - SCL (gerado pelo mestre), e outro de dados - SDA, bidirecional.

Os dispositivos são reconhecidos através de endereços, que podem ser de 7 bits, 10 bits e até 16 bits. Assim já é possível identificar uma limitação no número de dispositivos.

Além disso, outro fator complicante se torna que a montagem não pode ultrapassar poucos metros de fios, pois a capacitância total máxima, em torno de 400pf, impede o funcionamento correto do barramento nessas distâncias.

![img](/img/docs/glossario/protocolos/i2c/estrutura.png)

## Como funciona a comunicação?
No estado neutro do barramento I2C,  o valor high é mantido em ambas as linhas de comunicação. Para se iniciar a comunicação, SDA é trazido para o valor low pelo mestre. Para escrever dados no barramento, SCL pulsa, e a cada pulso, o valor em SDA é lido como um bit, começando do LSB (Least Significant Bit - Bit menos significativo).

Logo após SDA ser trazida pra baixo, o mestre escreve o endereço do dispositivo que ele deseja se comunicar, por exemplo 0xC0, caso o dispositivo exista, ele responderá como um ACK (Acknowledgement - Reconhecimento), um pulso na linha SCL. Então começa a transferência de dados, o mestre escreve o endereço do registrador no escravo que ele deseja ler ou escrever (R/W) e opera então, em sequencia, podendo ler/escrever um ou mais registrador.

![img](/img/docs/glossario/protocolos/i2c/comunicacao.png)

## No Arduino
Para a comunicação com o arduino, basta ligarmos a porta A5 no SCL e o A4 no SDA, como mostrado na figura abaixo:

![img](/img/docs/glossario/protocolos/i2c/arduino_i2c.jpg)

A documentação da biblioteca responsável para a comunicação I2C pode ser encontrada na descrição do [Wire.h](https://www.arduino.cc/en/reference/wire).

E abaixo temos um exemplo mostrando a comunicação entre Arduinos utilizando o protocolo I2C.
É responsável por alterar o estado do LED conectado a placa Slave quando o botao ligado a placa Master for pressionado.

Código do MASTER:
~~~cpp
#include "Wire.h"

#define buttonPin 4 // numero do pino onde o botao esta conectado
  
  
// endereco do modulo slave que pode ser um valor de 0 a 255
#define slaveAdress 0x08

boolean buttonState;             // estado atual do botao
boolean lastButtonState = LOW;   // valor da ultima leitura do botao
boolean ledState = HIGH;         // estado atual do LED

// as variaveis a seguir sao do tipo long por conta que o tempo, medido 
// em milessegundos alcancara rapidamente um numero grande demais para 
// armazenar em uma variavel do tipo int
unsigned long lastDebounceTime = 0;  // tempo da ultima modificacao do estado do LED

// tempo de debounce; aumentar se o LED oscilar; espera-se que o LED acenda
// apenas se o botao for pressionado por mais de 50ms
unsigned long debounceDelay = 50;    

void setup() {
  Wire.begin(); // ingressa ao barramento I2C
  
  // configura o pino do botao como entrada com resistor de pullup interno
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // le o estado do botao e salva em uma variavel local
  int reading = digitalRead(buttonPin);

  // verifica se voce apenas apertou o botao (i.e. se a entrada foi de LOW 
  // to HIGH), e se ja esperou tempo suficiente para ignorar qualquer ruido

  // se a entrada foi alterada devido ao ruido ou botao ter sido pressionado:
  if (reading != lastButtonState) {
    // reseta o tempo do debounce
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    // qualquer que seja a leitura atual, ela se manteve por um tempo maior
    // que o nosso debounce delay, então atualizemos o estado atual:

    // se o estado do botao foi alterado:
    if (reading != buttonState) {
      buttonState = reading;

      // apenas altera o estado do LED se o novo estado do botao e HIGH
      if (buttonState == HIGH) {
        ledState = !ledState;
        // incia a transmissao para o endereco 0x08 (slaveAdress)
        Wire.beginTransmission(slaveAdress);
        Wire.write(ledState); // envia um byte contendo o estado do LED
        Wire.endTransmission(); // encerra a transmissao
      }
    }
  }
  // salva a leitura. No proximo laco este sera o ultimo 
  // estado do botao (lastButtonState)
  lastButtonState = reading;
}
~~~

Código do SLAVE:
~~~cpp
#include "Wire.h"

#define ledPin 7 // numero do pino onde o LED esta conectado
  
  
// endereco do modulo slave que pode ser um valor de 0 a 255
#define myAdress 0x08

void setup() {
  // ingressa ao barramento I2C com o endereço definido no myAdress (0x08)
  Wire.begin(myAdress);

  //Registra um evento para ser chamado quando chegar algum dado via I2C
  Wire.onReceive(receiveEvent);

  pinMode(ledPin, OUTPUT);  // configura o pino do LED como saida
}

void loop() {
  // nada para ser exexutado
}

// funcao executada sempre que algum dado e recebido no barramento I2C
// vide "void setup()"
void receiveEvent(int howMany) {
  // verifica se existem dados para serem lidos no barramento I2C
  if (Wire.available()) {
    // le o byte recebido
    char received = Wire.read();

    // se o byte recebido for igual a 0, apaga o LED
    if (received == 0) {
      digitalWrite(ledPin, LOW);
    }

    // se o byte recebido for igual a 1 acende o LED
    if (received == 1) {
      digitalWrite(ledPin, HIGH);
    }
  }
}
~~~
