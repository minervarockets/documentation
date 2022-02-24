---
id: oop
title: Programação Orientada a Objetos
sidebar_label: Programação Orientada a Objetos
---
*Escrito por Nicolas Danielski*

Um paradigma de programação é uma forma de classificar linguagens de programação baseada em suas funcionalidades. Uma linguagem pode ser inserida em mais de um paradigma. Os paradigmas mais comuns são a programação imperativa, em que o programa é instruído a como mudar seus estados, e a declarativa, em que o programa sabe as propriedades de seus estados. A programação orientada a objetos é um paradigma dentro da programação imperativa.

## Conceitos base

A orientação a objetos é um paradigma que circula o conceito de objetos, que contém dados e código. Os dados de um objeto são dados por seus atributos, e seu código é dado por seus métodos.


As linguagens mais usadas que seguem este paradigma também implementam o conceito de classes. Classes são como o esquemático de um objeto, dizendo como o computador pode construir instâncias de um objeto a partir de seu ideal. Uma classe em si não é um objeto, ela (no geral) não possui atributos nem métodos sobre o qual pode operar, mas dentro de uma classe é indicado todos os atributos e métodos que irão pertencer a um objeto. 


Num exemplo prático, um programa poderia ter uma classe Cachorro e uma instância dessa classe, um objeto, seria beagle. Cachorros no geral possuem uma idade, um peso, uma personalidade, e tudo isso seriam dados de um objeto, e portanto seus atributos. Cachorros também podem executar funções como latir, passear, fazer truques, tudo isso seriam métodos dos objetos da classe Cachorro.

## Encapsulação

Encapsulação é uma escolha de design em que dados de um determinado objeto só podem ser acessados por métodos relacionados a esse objeto, de forma a evitar mal-uso. Encapsulação altera a visibilidade de certos atributos e é uma funcionalidade pertencente a diversas linguagens. Os três níveis de visibilidade mais comum são:
* private - atributos só podem ser acessados por métodos dentro de uma classe.
* public - atributos podem ser acessados em qualquer local do códgio.
* protected - atributos podem ser acessados pela mesma classe ou subclasses,

Esses níveis de visibilidade podem ser associados tanto a atributos quanto a métodos. 

Diferentes linguagens lidam com encapsulação de formas variadas.
	
## Composição e herança

Um conceito interessante é que objetos podem conter outros objetos como seus atributos, gerando uma composição de objetos. Por exemplo, (quase) toda pessoa possui um endereço, então todo objeto pessoa tem um objeto endereço. Composição é definida como uma relação do tipo “tem-um”.

Muitas linguagens que suportam classes suportam herança, ou alguma variação desse conceito. Herança é um tipo de hierarquia entre classes que representa a relação “é-um-tipo-de”. Por exemplo, uma classe Empregado pode herdar de uma classe Pessoa, pois todo empregado é um tipo de pessoa. Todos os métodos e atributos da classe Pessoa também estarão presentes na classe Empregado, em conjunto com atributos e métodos específicos da classe Empregado. Em outras palavras, todos os métodos e atributos da classe parente estarão presente na classe filha com os mesmos nomes e visibilidade. 

Essa técnica contrasta com o paradigma procedural, facilitando o uso e reuso de mesmo trechos de código. Além de um potencial espelhamento do mundo real nas relações entre classes.

Subclasses podem sobrescrever métodos da classe parente. Algumas linguagens também permitem o uso de herança múltipla, onde uma classe é subclasse de dois ou mais parentes, o que pode tornar a sobrescrita de métodos complicado.

Classes abstratas são um tipo de classe especial que não podem ser instanciadas em objetos, de forma que elas só existem para serem herdadas em outras classes não-abstratas. Cada linguagem pode implementar isso de forma diferentes.

Algumas linguagens, no entanto, não aceitam o conceito de herança, implementando no lugar composições. Dessa forma, uma classe Empregado não seria do tipo Pessoa, mas a classe Empregado possuiria um objeto da classe Pessoa como atributo.

## Polimorfismo

Polimorfismo se refere a como métodos podem ser chamados em cima de classes diferentes dentro de uma mesma hierarquia de herança. 
	
Um exemplo são classes do tipo Quadrado e Círculo, ambas herdariam de uma classe Forma que possuiria um método desenhar, mas ao chamar esse método com diferentes objetos a forma como seria desenhado variaria.

## Conclusão

Orientação a objetos é um paradigma de linguagem de programação muito poderoso. Ela requer ponderamentos sobre a estrutura do programa e planejamento antes de começar a programar. Olhar para como quebrar os requerimentos do código em classes simples e reusáveis que podem ser usadas como esquemático para instância de objetos.

No geral, o uso de orientação a objetos permite para estruturas de dados mais bem organizadas e reusabilidade de códigos, salvando tempo e espaço.

## Referências
- https://en.wikipedia.org/wiki/Programming_paradigm
- https://en.wikipedia.org/wiki/Object-oriented_programming
- https://www.tutorialspoint.com/What-is-object-oriented-programming-OOP
- https://www.indeed.com/career-advice/career-development/what-is-object-oriented-programming
