---
id: diagramadeclasses
title: UML e Diagrama de Classes
sidebar_label: UML e Diagrama de Classes
---

*Escrito por Fábio Procaci*

## O que é um diagrama UML?

A Linguagem de Modelagem Unificada (UML) foi criada para estabelecer uma linguagem de modelagem visual comum, semanticamente e sintaticamente rica, para arquitetura, design e implementação de sistemas de software complexos, tanto estruturalmente quanto para comportamentos. Além do desenvolvimento de software, a UML tem aplicações em fluxos do processo na fabricação.

É análoga aos modelos utilizados em outros campos, e é composta por diferentes tipos de diagramas. De modo geral, diagramas UML descrevem o limite, a estrutura e o comportamento do sistema e os objetos nele contidos.

A UML não é uma linguagem de programação, mas existem ferramentas que podem ser usadas para gerar código em várias linguagens por meio de diagramas UML (StarUML, por exemplo). A UML tem uma relação direta com a análise e o design orientados a objetos.

A UML usa elementos e os associa de diferentes maneiras para formar diagramas que representam aspectos estáticos ou estruturais de um sistema, além de formar diagramas comportamentais, que registram os aspectos dinâmicos de um sistema.

## Diagrama de Classes

O diagrama que nos interessa é o Diagrama de Classes. É o diagrama UML mais usado, e a principal base de qualquer solução orientada a objetos. Classes dentro de um sistema, atributos e operações, e a relação entre cada classe. Classes são agrupadas para criar diagramas de classes quando há uma diagramação de grandes sistemas.

Uma classe num Diagrama de Classes (ou até mesmo no código fonte) é apenas um conceito. Um conceito em forma de desenho (se num diagrama) ou texto (se em código fonte).
Quando a Classe é materializada através de um software, (quando o software está “rodando”) torna-se um objeto (isso se dá quando é alocado um ponteiro de memória para esta classe).

O diagrama de classes ilustra graficamente como será a estrutura do software (em nível micro ou macro), e como cada um dos componentes da sua estrutura estarão interligados.

### Principais elementos

![img](/img/docs/glossario/diagramadeclasses/diagclas1.png)

#### Class (Classe)
É a classe propriamente dita. Usamos este elemento quando queremos demonstrar visualmente a classe no diagrama 


#### Association (Associação – conector sem pontas)
É um tipo de relacionamento usado entre classes. Aplicável a classes que são independentes (vivem sem dependência umas das outras), mas que em algum momento no ciclo de vida do software (enquanto ele está em execução) podem ter alguma relação conceitual.


#### Generalization (Herança – conector com seta em uma das pontas)
É um tipo de relacionamento onde a classe generalizada (onde a “ponta da seta” do conector fica) fornece recursos para a classe especializada (herdeira). Excetuando conceitos mais avançados (como padrões de projeto, interfaces, visibilidades específicas etc.), tudo que a classe mãe (generalizada) tem, a filha (especializada) terá.


#### Compose (Composição – conector com um “diamante” hachurado na ponta)
É um tipo de relacionamento onde a classe composta depende de outras classes para “existir”. Por exemplo, a classe “CorpoHumano” possui um composição com a classe “Coracao”. Sem a classe “Coracao”, a classe “CorpoHumano” não pode existir.

#### Aggregate (Agregação – conector com um “diamante” vazado na ponta)
É um tipo de relacionamento onde a classe agregada usa outra classes para “existir”, mas pode viver sem ela. Por exemplo, a classe “CorpoHumano” possui uma agregação com a classe “Mao”. Sem a “Mao” a classe “CorpoHumano” pode existir.

Exemplo de uso:

![img](/img/docs/glossario/diagramadeclasses/diagclas2.png)

Uma classe, na UML (e na Orientação a Objetos também) possui três compartimentos, sendo para: Nome (primeiro), Atributos (segundo) e Operações (terceiro).

### Níveis de complexidade

![img](/img/docs/glossario/diagramadeclasses/diagclas3.png)

No diagrama acima temos relacionamentos de Associação, Agregação, Composição e Generalização (Herança). A explicação a seguir aplica-se a todos os três exemplos, pois foca apenas nos relacionamentos:

- Cozinha pode ter ou não uma PortaCozinha, podendo existir se não tiver (Agregação)

- PortaCozinha generaliza Porta, possuindo todas as características que Porta têm, além das suas específicas (Generalização)

- Quarto deve ter PortaQuarto, não podendo existir se não tiver (Composição)

- PortaQuarto generaliza Porta, que tem todas as características que Porta têm, além das suas específicas (Generalização)

- Sala deve ter PortaSala, não podendo existir se não tiver (Composição)

- PortaSala generaliza Porta, que tem todas as características que Porta têm, além das suas específicas (Generalização)

- Sala pode ter ou não uma Porta que não seja uma PortaSala, mas se tiver ou não isso não fará diferença, pois Porta pode existir sem Sala, e Sala pode existir sem Porta (Associação).

Mas o mesmo diagrama de classes pode ser representado com mais detalhes , aumentando o seu nível de complexidade:

![img](/img/docs/glossario/diagramadeclasses/diagclas4.png)

## Conclusão

O diagrama de classes UML é uma ferramenta espetacular para auxiliar os profissionais de produção de software no entendimento sobre o que  deve ser feito e como deve ser feito.
Saber utilizá-lo da maneira correta e com bom senso auxilia em qualquer tipo de projeto.

