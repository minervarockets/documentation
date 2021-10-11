---
id: rtos
title: RTOS
sidebar_label: RTOS
---

_Escrito por Gabriel Aleksandravicius_

## Apresentação

O propósito dessa página é:
- Apresentar multitasking com Arduino vanilla
- Apresentar conceito de RTOS
    - Definir sistema operacional
    - Definir multitasking
    - Fornecer casos de uso
- Comparar esses dois conceitos, trazendo vantagens e desvantagens deles
    - Concluir se é válido implementar RTOS nos nossos projetos
- Avaliar RTOS que podemos implementar e como fazê-lo
    - RTOS + state machine

## Multitasking no Arduino vanilla
Quando começamos nosso aprendizado com Arduino, geralmente realizamos tarefas simples e vamos tornando-a mais complexa com o tempo. Começamos com o 'hello world' do mundo dos embarcados, que é piscar um LED em uma frequência determinada. Depois, adicionamos mais LEDs. Em seguida podemos testar outras coisas, como atuar um servo ou fazer leituras com um sensor. Por fim, o próximo desafio é, naturalmente, testar fazer tudo isso ao mesmo tempo. E como fazemos isso?

Pra responder a essa pergunta, vejamos um exemplo mais simples: como piscar dois leds em frequências diferentes.

### Piscando com `delay()`
O código básico dentro de ```loop()``` para piscar um LED se parece com isso:

```cpp
void loop() {
    digitalWrite(led, HIGH);
    delay(1000);
    digitalWrite(led, LOW);
    delay(1000);
}
```

### Piscando sem `delay()`
Essa estrutura é factível para códigos simples, porém um grande problema reside no uso da função [```delay()```](https://www.arduino.cc/reference/en/language/functions/time/delay/): ela interrompe a execução de praticamente qualquer outro bloco de código. Portanto, não podemos piscar dois LEDs com frequências diferentes. 

A solução fornecida na [própria documentação do Arduino](https://www.arduino.cc/en/Tutorial/BuiltInExamples/BlinkWithoutDelay) é a seguinte:

```cpp
// Blink without delay
int red = 5;
int blue = 7;

unsigned long previousTimeRed;
unsigned long previousTimeBlue;

unsigned long intervalRed = 1000;
unsigned long intervalBlue = 500;

int ledStateRed = LOW; 
int ledStateBlue = LOW; 

void setup() {
    pinMode(red, OUTPUT);
    pinMode(blue, OUTPUT);
}

void loop() {
    unsigned long currentTime = millis();

    // interval/2 = intervalo do blink (acende e apaga)
    if (currentTime - previousTimeRed >= (intervalRed/2)) {
        previousTimeRed = currentTime;
        
        if (ledStateRed == LOW) {
            ledStateRed = HIGH; 
        } else {
            ledStateRed = LOW; 
        }

        digitalWrite(red, ledStateRed);
    }

    if (currentTime - previousTimeBlue >= (intervalBlue/2)) {
        previousTimeBlue = currentTime;
        
        if (ledStateBlue == LOW) {
            ledStateBlue = HIGH; 
        } else {
            ledStateBlue = LOW; 
        }

        digitalWrite(blue, ledStateBlue);
    }    

}
```

Deixamos de usar a função ```delay()``` e, no lugar, implementamos a contagem de tempo com ```millis()```. Temos uma variável global, `intervalRed`, responsável por determinar o intervalo do LED vermelho. Também temos uma variável responsável por armazenar o último momento em que o LED mudou de estado (`previousTimeRed`) e uma variável para armazenar o estado (`ledStateRed`). O mesmo vale para o outro LED. Dentro de `loop()` a função [`millis()`](https://www.arduino.cc/reference/en/language/functions/time/millis/) é chamada e seu valor de retorno (quantidade de tempo passado desde o início do programa) é armazenado em `currentTime`. O bloco de código a seguir faz a verificação do tempo, checando se o tempo passado desde a última mudança de estado já é maior ou igual ao intervalo pré-estabelecido pro LED. Se sim, o estado do LED é alterado.

:::tip dica
Embora tenha resolvido o problema do delay, o código ficou muito repetitivo dessa forma. Veja uma solução mais elegante [aqui](https://github.com/gabrielaleks/DesafiosCapacitacao_Gabarito/blob/master/2.1-blink_diff_freq_multiple.cpp).
:::

## Multitasking com RTOS
A solução empregada no tópico anterior é válida e muito pode ser feito seguindo o mesmo princípio - poderíamos trocar os LEDs por sensores que fazem a leitura em frequências diferentes, por exemplo. Então por que usar um RTOS? Pra responder a isso, primeiro vejamos **o que** é um RTOS.

### O que é um RTOS?

### Por que usar um sistema operacional?

### Exemplo



## Referências
- [Learn Adafruit: Multi-tasking the Arduino](https://learn.adafruit.com/multi-tasking-the-arduino-part-1)
- [The Robotics Back-End: How to do multitasking with Arduino](https://roboticsbackend.com/how-to-do-multitasking-with-arduino/)
- [Sistemas de tempo real](https://sergioprado.org/sistemas-de-tempo-real-part-1/)
- RTOS Fundamentals
  - [Multitasking](https://www.freertos.org/implementation/a00004.html)
  - [Scheduling](https://www.freertos.org/implementation/a00005.html)
  - [Context Switching](https://www.freertos.org/implementation/a00006.html)
  - [Real Time Applications](https://www.freertos.org/implementation/a00007.html)
  - [Real Time Scheduling](https://www.freertos.org/implementation/a00008.html)
- [Filipe Flop: FreeRTOS para Arduino](https://www.filipeflop.com/blog/freertos-para-arduino/)
- [Embarcados: Principais conceitos de RTOS com Arduino](https://www.embarcados.com.br/rtos-para-iniciantes-com-arduino-e-freertos/)