---
id: leituraescrita
title: Teste de Leitura e Escrita do SD
sidebar_label: Leitura e Escrita
---

*Ver [glossário](/documentation/docs/glossario/testes/leituraescrita) para mais informações sobre o teste*

O teste de leitura e escrita foi feito usando a biblioteca *SdFat*. São escritas 20000 linhas de dados de 2 bytes (short), 4 bytes (int) e float. 

## Teste 1 - Arduino
```cpp
FreeStack: 1037
Type is FAT32
Starting print test.  Please wait.

Test of println(uint16_t)
Time 5.84 sec
File size 128.89 KB
Write 22.06 KB/sec
Maximum latency: 11296 usec, Minimum Latency: 112 usec, Avg Latency: 281 usec

Test of printField(uint16_t, char)
Time 1.93 sec
File size 128.89 KB
Write 66.68 KB/sec
Maximum latency: 39052 usec, Minimum Latency: 36 usec, Avg Latency: 85 usec

Test of println(uint32_t)
Time 9.09 sec
File size 200.00 KB
Write 22.00 KB/sec
Maximum latency: 42996 usec, Minimum Latency: 380 usec, Avg Latency: 443 usec

Test of printField(uint32_t, char)
Time 2.67 sec
File size 200.00 KB
Write 75.05 KB/sec
Maximum latency: 46644 usec, Minimum Latency: 64 usec, Avg Latency: 122 usec

Test of println(float)
Time 9.96 sec
File size 149.00 KB
Write 14.95 KB/sec
Maximum latency: 43052 usec, Minimum Latency: 376 usec, Avg Latency: 487 usec

Test of printField(float, char)
Time 3.81 sec
File size 149.00 KB
Write 39.10 KB/sec
Maximum latency: 46360 usec, Minimum Latency: 124 usec, Avg Latency: 179 usec

Done!
```

## Teste 2 - Teensy
Embora o teste acima tenha rodado bem no Arduino, não obtivemos sucesso nenhum no uso do microSD com o Teensy no CDHS prototipado. Em toda inicialização uma exceção era lançada e códigos de erro distintos eram printados (como 0X55,0XFF, 0X30,0X3F, 0X25,0XFF). O provável responsável por esse problema é o ruído na linha de SPI, principalmente porque a placa prototipada possui um jumper na trilha de clock. Após leitura de algumas referências sobre SPI (entre elas este ótimo artigo: *[What Could Go Wrong: SPI](https://hackaday.com/2016/07/01/what-could-go-wrong-spi/)*), percebemos que a frequência de SPI poderia estar correlacionada com esse problema. De fato, quando diminuímos a frequência de 50MHz para 1MHz o código rodou sem problemas. 

Fomos aumentando a frequência até chegar ao máximo de 29MHz. Acima disso o problema volta a se manifestar. Abaixo estão os resultados para diferentes frequências de SPI.

*Obs: outra coisa que pode ser feita para aumentar ainda mais a velocidade de salvamento é mudar o argumento em file.open() de 'FILE_WRITE' para 'O_WRITE | O_CREAT'*

## SPI 1MHz
```cpp
FreeStack: 256284
Type is FAT32
Starting print test.  Please wait.

Test of println(uint16_t)
Time 1.88 sec
File size 128.89 KB
Write 68.70 KB/sec
Maximum latency: 102578 usec, Minimum Latency: 7 usec, Avg Latency: 91 usec

Test of printField(uint16_t, char)
Time 1.84 sec
File size 128.89 KB
Write 70.24 KB/sec
Maximum latency: 95043 usec, Minimum Latency: 4 usec, Avg Latency: 89 usec

Test of println(uint32_t)
Time 2.70 sec
File size 200.00 KB
Write 74.21 KB/sec
Maximum latency: 91455 usec, Minimum Latency: 8 usec, Avg Latency: 132 usec

Test of printField(uint32_t, char)
Time 2.65 sec
File size 200.00 KB
Write 75.39 KB/sec
Maximum latency: 109861 usec, Minimum Latency: 5 usec, Avg Latency: 130 usec

Test of println(float)
Time 2.60 sec
File size 149.00 KB
Write 57.33 KB/sec
Maximum latency: 253807 usec, Minimum Latency: 23 usec, Avg Latency: 127 usec

Test of printField(float, char)
Time 2.09 sec
File size 149.00 KB
Write 71.16 KB/sec
Maximum latency: 142674 usec, Minimum Latency: 6 usec, Avg Latency: 102 usec
```

## SPI 10MHz
```cpp
FreeStack: 256284
Type is FAT32
Starting print test.  Please wait.

Test of println(uint16_t)
Time 0.69 sec
File size 128.89 KB
Write 188.16 KB/sec
Maximum latency: 9667 usec, Minimum Latency: 7 usec, Avg Latency: 33 usec

Test of printField(uint16_t, char)
Time 0.75 sec
File size 128.89 KB
Write 171.17 KB/sec
Maximum latency: 123769 usec, Minimum Latency: 4 usec, Avg Latency: 36 usec

Test of println(uint32_t)
Time 1.07 sec
File size 200.00 KB
Write 187.62 KB/sec
Maximum latency: 101671 usec, Minimum Latency: 8 usec, Avg Latency: 52 usec

Test of printField(uint32_t, char)
Time 1.00 sec
File size 200.00 KB
Write 199.80 KB/sec
Maximum latency: 97328 usec, Minimum Latency: 5 usec, Avg Latency: 49 usec

Test of println(float)
Time 1.21 sec
File size 149.00 KB
Write 123.24 KB/sec
Maximum latency: 90452 usec, Minimum Latency: 23 usec, Avg Latency: 59 usec

Test of printField(float, char)
Time 0.81 sec
File size 149.00 KB
Write 184.18 KB/sec
Maximum latency: 86870 usec, Minimum Latency: 6 usec, Avg Latency: 39 usec
```

## SPI 25MHz
```cpp
FreeStack: 256284
Type is FAT32
Starting print test.  Please wait.

Test of println(uint16_t)
Time 0.73 sec
File size 128.89 KB
Write 175.84 KB/sec
Maximum latency: 105129 usec, Minimum Latency: 7 usec, Avg Latency: 35 usec

Test of printField(uint16_t, char)
Time 0.58 sec
File size 128.89 KB
Write 222.99 KB/sec
Maximum latency: 10464 usec, Minimum Latency: 4 usec, Avg Latency: 28 usec

Test of println(uint32_t)
Time 1.14 sec
File size 200.00 KB
Write 175.13 KB/sec
Maximum latency: 123833 usec, Minimum Latency: 8 usec, Avg Latency: 49 usec

Test of printField(uint32_t, char)
Time 0.94 sec
File size 200.00 KB
Write 211.86 KB/sec
Maximum latency: 123710 usec, Minimum Latency: 5 usec, Avg Latency: 46 usec

Test of println(float)
Time 1.06 sec
File size 149.00 KB
Write 140.57 KB/sec
Maximum latency: 3031 usec, Minimum Latency: 23 usec, Avg Latency: 52 usec

Test of printField(float, char)
Time 0.76 sec
File size 149.00 KB
Write 195.28 KB/sec
Maximum latency: 101357 usec, Minimum Latency: 6 usec, Avg Latency: 37 usec
```

