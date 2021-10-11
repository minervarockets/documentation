---
id: spi
title: SPI
sidebar_label: SPI
---

*Escrito por Carolina Branquinho*

## Definição
 É um protocolo de dados seriais síncronos usado por microcontroladores para comunicar-se com um ou mais dispositivos SPIs em curtas distâncias.
 Tipo de comunicação serial síncrona que faz uso do conceito mestre-escravo (master-slave).
 O gerador dos sinal de sincronismo é definido como mestre e os dispositivos que utilizam o sinal de sincronismo gerado são definidos como escravos. 

![img](/img/docs/glossario/protocolos/spi/master_slave.png)

Trabalha em regime de comunicação full-duplex, toda troca de dados acontece sempre em ambas as direções. Ou seja, cada bit trocado entre do Master para um Slave traz um bit do Slave para  o Master. 

## Pinos básicos de comunicação entre dispositivos SPI

| Pino                  | Nome Padrão        | Significado               |
|-----------------------|--------------------|---------------------------|
| Do Master para o Slave| MOSI               | Master Output Slave Input |
| Do Slave para o Master| MISO               | Master Input Slave Output |
| Clock                 | SCLK               | Serial Clock              |
| Seleção de Slaves     | SS                 | Slave Select              |

## Polarização do Clock e fases
De um modo geral, existem quatro modos de transmissão. Esses modos controlam se os dados são deslocados para dentro e para fora na borda de subida ou de descida do sinal do clock (chamada de fase do clock) e se o clock está ocioso quando alto ou baixo (chamada de polaridade do clock). Os quatro modos combinam polaridade e fase de acordo com esta tabela:

| Modo     | CPOL| CPHA| Borda de Saída| Captura de dados|
|----------|-----|-----|---------------|-----------------|
| SPI_MODE0| 0   | 0   | Descida       | Subida          |
| SPI_MODE1| 0   | 1   | Subida        | Descida         |
| SPI_MODE2| 1   | 0   | Subida        | Descida         |
| SPI_MODE3| 1   | 1   | Descida       | Subida          |

### Polaridade do Clock (CPOL)
- A polaridade do clock pode ser 0 ou 1.

**Ex:** se setar polaridade como clock em 0, ele iniciará em 0 enquanto não ocorrer a comunicação e subirá para 1 quando precisar transmitir algum dado. Na imagem abaixo o clock (SCLK) foi setado com polaridade 0 e começa a transmitir dados quando o Clock (SCLK) sobre para 1.

![img](/img/docs/glossario/protocolos/spi/spi.JPG)

### Fase do Clock (CPHA)
Se CPHA = 0,  a informação será gravada durante a "subida" do clock (de 0 para 1).  E na "descida" do clock ocorrerá a saída da comunicação (de 1 para 0).
E, se CPHA = 1, será o contrário: a informação será gravada durante a "descida" do clock (de 1 para 0).  E na "subida" do clock ocorrerá a saída da comunicação (de 0 para 1).

![img](/img/docs/glossario/protocolos/spi/fase_do_clock.JPG)

Na imagem acima podemos ver os dois exemplos de polaridade do clock, quando CPOL = 0 e CPOL = 1.
Além disso, o sinal de SS, que funciona como seleção de escravo, é um sinal ativo em nível baixo.  Isto que significa que o dispositivo é selecionado quando este pino se encontra em nível lógico baixo, como podemos perceber pela imagem acima.

Todas as possibilidades de arranjo entre fase e polarização do clock estão explicitadas na figura abaixo:

![img](/img/docs/glossario/protocolos/spi/fase_e_polarização.JPG)

### Exemplo 
No exemplo abaixo o Clock (CPOL) está polarizado em 0 e sua fase (CPHA) é igual a 0. Então a entrada da informação é recebida durante a subida do clock e a saída, durante a descida do clock.

![img](/img/docs/glossario/protocolos/spi/spi_exemplo.JPG)

Podemos perceber que a cada mudança do clock, o MOSI (Master Output Slave Input) transmite um bit do Mestre para o Escravo. Da mesma maneira, o escravo transmite informações para o mestre, caracteristico da comunicação full-duplex.
Neste exemplo, passamos como informação a letra "a" do mestre para o escravo. No alfabeto binário a letra "a" corresponde a 0110001. 

## Esquema Padrão de Ligação 

![img](/img/docs/glossario/protocolos/spi/esquema_padrão.png)

Nesta imagem podemos perceber o esquema padrão de Ligação da comunicação SPI. Os escravos (quadros verde, azul e roxo à direita) possuem os mesmos pinos SCLK, MOSI e MISO em comum, mas necessitam de um pino para o Slave Select (SS) para cada escravo. 

**OBS:** O pino SS (Slave Select), cuja função é selecionar um escravo, pode ser ligado a qualquer pino digital do Arduino (que faz o papel de SPI Master).

## Exemplo de Comunicação SPI com Micro SD Card Adaptor

![img](/img/docs/glossario/protocolos/spi/sdcard-diagrama-1.jpg)

| Pino Módulo | SD Pino Arduino      |
|-------------|----------------------|
| SS          | 4 (Jumper Amarelo)   |
| SCLK        | 13 (Jumper Marrom)   |
| MOSI        | 11 (Jumper Verde)    |
| MISO        | 12 (Jumper Laranja)  |
| VCC         | 5V (Jumper Vermelho) |
| GND         | GND (Jumper Preto)   |

```cpp
#include <SPI.h> //Inclusão da biblioteca SPI
#include <SD.h> //Inclusão da biblioteca SD
 
const int chipSelect = 4; //Pino Digital utilizado pelo terminal SS do Módulo
 
void setup(){
  Serial.begin(9600); //Inicializa a Serial
   while(!Serial){ //Espera pela conexão da porta serial(Apenas para Arduino Leonardo)
    ;
  }
  Serial.println("Inicializando o cartão de memória..."); //Imprime o texto no Monitor Serial
  Serial.println("********************************************"); //Imprime no Monitor Serial
  pinMode(SS, OUTPUT); //Define o Pino como Saída
  
  if(!SD.begin(chipSelect)){ //Se o Cartão de Memória não estiver presente ou falhar, faz
    Serial.println("Cartão de memória falhou ou não está presente!"); //Imprime no Monitor Serial
    return; //Não faz mais nada
  }
  Serial.println("Cartão de memória inicializado com sucesso!"); //Imprime no Monitor Serial
  Serial.println("********************************************"); //Imprime no Monitor Serial
  Serial.println("Mensagem do arquivo de texto que está no cartão de memória:"); //Imprime no Monitor Serial
  Serial.println(); //Quebra de linha no Monitor Serial
   
  SDFile dataFile = SD.open("arquivo.txt"); //dataFile receb o conteúdo do arquivo texto (abrir um  arquivo por vez)
 
  if(dataFile){ //Se existirem dados a serem lidos, faz
    while(dataFile.available()){ //Enquanto houver conteúdo a ser ido, faz
      Serial.write(dataFile.read()); //Escreve no Serial as informações do arquivo texto
    }
    dataFile.close(); //Encerra a leitura (sempre fechar o arquivo atual para abrir um novo arquivo)
  }
  else{ //Senão, faz
    Serial.println("Erro ao abrir o arquivo!"); //Imprime o texto no Monitor Serial
  } 
}
void loop(){
}
```

## Principais Funções da Biblioteca SPI
Para usar esta biblioteca:
```cpp
#include <SPI.h>
```
### SPISettings
O objeto SPISettings é usado para configurar a porta SPI para o seu dispositivo SPI.

```cpp
SPI.beginTransaction(SPISettings(speedMaximum,dataOrder,dataMode))
```
- speedMaximum: The maximum speed of communication. For a SPI chip rated up to 20 MHz, use 20000000.

- dataOrder: MSBFIRST or LSBFIRST.

- dataMode : SPI_MODE0, SPI_MODE1, SPI_MODE2, or SPI_MODE3.

### begin()
Inicializa o barramento SPI configurando SCK, MOSI e SS para saídas, puxando SCK e MOSI para baixo e SS para alto.

```cpp
SPI.begin()
```
### end()
Desativa o barramento SPI (deixando os modos de pino inalterados).

```cpp
SPI.end()
```
### beginTransaction()
Inicializa o barramento SPI usando as configurações SPISettings.

```cpp
SPI.beginTransaction(mySettings);
```
### endTransaction()
Pare de usar o SPI bus. Normalmente, isso é chamado depois de cancelar a seleção do chip, para permitir que outras bibliotecas usem o barramento SPI.

```cpp
SPI.endTransaction()
```
### setBitOrder()
Define a ordem dos bits deslocados de e para o barramento SPI, LSBFIRST (o bit menos significativo primeiro) ou MSBFIRST (o bit mais significativo primeiro).

```cpp
SPI.setBitOrder(order)
```
- order: LSBFIRST ou MSBFIRST

### setClockDivider() 
Define o divisor de clock SPI em relação ao clock do sistema. Em placas baseadas em AVR, os divisores disponíveis são 2, 4, 8, 16, 32, 64 ou 128. A configuração padrão é SPI_CLOCK_DIV4, que define o clock SPI para um quarto da frequência do clock do sistema (4 Mhz para as placas a 16 MHz).

```cpp
SPI.setClockDivider(divider)
```
- divider:	
  - SPI_CLOCK_DIV2
  - SPI_CLOCK_DIV4
  - SPI_CLOCK_DIV8
  - SPI_CLOCK_DIV16
  - SPI_CLOCK_DIV32
  - SPI_CLOCK_DIV64
  - SPI_CLOCK_DIV128

### setDataMode()
Define o modo de dados SPI: ou seja, polaridade e fase do clock. Consulte o artigo da Wikipedia sobre SPI para obter detalhes.

```cpp
SPI.setDataMode(mode)
```
- mode:	
  - SPI_MODE0
  - SPI_MODE1
  - SPI_MODE2
  - SPI_MODE3

### transfer(), transfer16()
A transferência SPI é baseada em um envio e recebimento simultâneos: os dados recebidos são retornados em recebidosVal (ou recebidosVal16). No caso de transferências de buffer, os dados recebidos são armazenados no buffer local (os dados antigos são substituídos pelos dados recebidos).

```cpp
receivedVal = SPI.transfer(val)
receivedVal16 = SPI.transfer16(val16)
SPI.transfer(buffer, size)
```
- val: the byte to send out over the bus

- val16: the two bytes variable to send out over the bus

- buffer: the array of data to be transferred

### usingInterrupt()
Se o seu programa for realizar transações SPI dentro de uma interrupção, chame esta função para registrar o número ou nome da interrupção na biblioteca SPI. Isso permite que SPI.beginTransaction() evite conflitos de uso. Observe que a interrupção especificada na chamada de usingInterrupt() será desabilitada em uma chamada para beginTransaction() e reativada em endTransaction().

```cpp
SPI.usingInterrupt(interruptNumber)
```

- interruptNumber: the associated interrupt number.

## Vantagens e Desvantagens
### Vantagens
- O protocolo (interpretação dos dados) pode ser definido livremente, o que facilita a implementação.
- Comunicação full-duplex (comunicação mais rápida).
- Os escravos não precisam de osciladores, já que utilizam o clock do mestre.
- Os escravos não precisam de endereços únicos, como ocorre no I2C.
- Não é necessário utilizar transceivers para “decodificar”/”codificar” os dados que estão sendo enviados/recebidos.

### Desvantagens
- São necessários muitos pinos na comunicação (um para cada Slave).
- Não é ideal para longas distâncias. O SPI é um protocolo focado em uso dentro do próprio aparelho, entre integrados ou entre placas internas. Para transpor distâncias mais longas, um repetidor geralmente é necessário por causa da atenuação devido ao aumento da resistência da linha de cabos longos
- Não tem um sistema de detecção de escravos no hardware. Logo, o mestre pode enviar dados para um escravo que não existe e não saber disto.
