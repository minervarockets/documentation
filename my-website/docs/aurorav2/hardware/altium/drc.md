---
id: drc
title: Design Rule Check (DRC)
sidebar_label: Design Rule Check (DRC)
---

*Autor: Gabriel Aleksandravicius | Originalmente escrito em 17/08/20*

As design rules são limitações impostas para uma PCB (Printed Circuit Board) durante sua confecção.  Ele existe para impedir que os criadores das placas cometam erros, tornando desse modo o projeto mais confiável. É chamado Design Rule Checking (DRC) o processo de verificação dessas limitações, ou seja, checa-se se o projeto está de acordo com as regras físicas e lógicas previamente estabelecidas como necessárias para um projeto funcional.

O software que utilizamos para a criação e edição de nossas PCBs, Altium Designer 19, possui funções para a criação das regras e posterior análise do projeto. O tutorial abaixo foi feito baseado na documentação das [Design Rules](https://www.altium.com/documentation/altium-designer/constraining-the-design-design-rules-ad?version=19.0), do [editor de Regras e Limitações](https://www.altium.com/documentation/altium-designer/pcb-dlg-form-designrulespcb-rules-and-constraints-editor-ad?version=19.0) e do [Design Checking](https://www.altium.com/documentation/altium-designer/design-rule-checking-ad?version=19.0).

## Criando as regras no Altium
As regras de design são criadas e editadas em *Design » Rules…* . A caixa de diálogo que abrir terá duas seções. Na esquerda está a árvore de opções que representam as diferentes categorias em que regras podem ser aplicadas (ex: roteamento). Na direita estão as informações referentes à categoria selecionada. Essas informações são: o nome da regra, sua prioridade (sendo 1 a maior), seu estado (se está ativa ou não), seu tipo, sua categoria, seu escopo e seus atributos.

![img](/img/docs/aurora/hardware/altium/drc/drc1.png)
*Editor disponível no Altium para a criação e edição de regras de design da PCB*

Para criar uma nova regra, selecione a categoria que ela deverá fazer parte na seção esquerda e clique no botão new rule. A caixa de diálogo que aparecer te permite editar as características da regra. Aqui você irá:
- Nomear a regra
- Adicionar um comentário (descrevendo as especificidades da regra)
- Definir um ID único para a regra - útil quando ela é criada a partir do arquivo do .schdoc. Dessa maneira a regra será importada para o .pcbdoc, permitindo não só que ela seja usada a partir desse arquivo como que quaisquer mudanças feitas em seus parâmetros sejam atualizadas automaticamente nos dois arquivos. Você não precisa definir o ID manualmente, ele é criado automaticamente.
- Ver as test queries, que mostram o número de objetos afetados pela regra.
- Definir o escopo da regra, ou seja, onde ela será aplicada.
- Definir as restrições que essa regra terá.

Exemplo: Suponhamos que você queira criar uma regra que se aplique às trilhas dos pinos de 9V sabendo que a corrente máxima que passará por elas será de 7A. Existe uma espessura ideal para as trilhas em função da corrente, temperatura e espessura do cobre - assunto que discutiremos mais à frente. Para este exemplo vamos assumir a temperatura máxima de 10 ºC. Isso corresponde a 2.8mm de espessura. Portanto, devemos criar no Altium uma regra desse tipo: 

![img](/img/docs/aurora/hardware/altium/drc/drc2.png)

Observação: Caso a restrição que você precisa não exista na lista disponibilizada, você pode criar sua própria ao clicar em *Where The Object Matches » Custom Query*:

![img](/img/docs/aurora/hardware/altium/drc/drc3.png)

Aqui você consegue definir suas regras mais livremente. Vamos supor que queremos que a limitação de antes seja aplicada apenas a trilhas da camada superior da PCB. Podemos então escrever:

![img](/img/docs/aurora/hardware/altium/drc/drc4.png)

Uma ferramenta útil nesse processo é a Query Helper, que nos auxilia na escrita da regra ao nos mostrar os termos e operadores que o Altium utiliza. Você pode ver mais sobre isso na [documentação](https://www.altium.com/documentation/altium-designer/scoping-design-rules-ad?version=19.0) do Altium.
É muito importante para o funcionamento correto das nossas regras que utilizemos corretamente o sistema de prioridades. 

![img](/img/docs/aurora/hardware/altium/drc/drc5.png)

Nossa nova regra está com uma prioridade menor que a regra padrão para trilhas - que determina espessura de 0.254mm - e, portanto, não será aplicada. Para corrigir isso devemos acessar a janela de edição de prioridades, que está marcada com uma seta vermelha na imagem acima. Nessa janela nós podemos aumentar e diminuir prioridades de regras específicas:

![img](/img/docs/aurora/hardware/altium/drc/drc6.png)

Outra questão importante é a verificação da aplicação correta das regras aos objetos que elas deveriam limitar. O Altium nos fornece dois métodos para isso:
- a) Podemos selecionar o objeto e verificar as regras que se aplicam a ele. Clique no objeto que você deseja com o botão direito do mouse e selecione a opção Applicable Unary Rules. Você verá todas as regras de design aplicáveis a este objeto e elas estão sendo aplicadas ou não. Por exemplo, se seguirmos este procedimento para uma trilha que criarmos a partir de um pino de 9V:

![img](/img/docs/aurora/hardware/altium/drc/drc7.png)

A cruz vermelha em uma das regras do item *Width Constraint* mostra que ela foi substituída por outra que tem maior prioridade.
Também podemos escolher a opção *Applicable Binary Rules* e verificar quais regras se aplicam entre dois objetos posicionados.

- b) Podemos selecionar a regra e verificar quais objetos se submetem a ela. Isso pode ser acessado através do PCB Rules and Violations, que pode ser acessado através de View » Panels » PCB Rules And Violations. Nesse painel, além de todas as regras existentes, podemos também checar se alguma violação está ocorrendo. Para verificar em que objetos determinada regra está aplicada, selecione a regra e clique em apply. Os objetos que que utilizam a regra serão selecionados.

![img](/img/docs/aurora/hardware/altium/drc/drc8.png)

Devemos, por fim, gerar um *Design Rules Report*. Esse relatório pode conter todas as categorias de regras, alguma categoria específica ou apenas uma regra específica. Para gerar o relatório primeiro acesse *Design » Rules…* . A seguir, selecione o escopo daquilo que você quer gerar o relatório com o botão direito do mouse e escolha *Report…* . Uma página contendo todas as informações pertinentes da(s) regra(s) será mostrada. Exemplo:

![img](/img/docs/aurora/hardware/altium/drc/drc9.png)
*Gerando um relatório da categoria ‘Routing’, que contém nosso exemplo da trilha de 9V*

![img](/img/docs/aurora/hardware/altium/drc/drc10.png)
*Relatório gerado. Podemos imprimi-lo ou exportá-lo como PDF.*

## Realizando o Design Rule Checking
Agora que suas regras personalizadas já foram criadas podemos executar o *Design Rule Checking*. Essa ferramenta do Altium - acessada através de *Tools » Design Rule Check…* - nos permite checar o projeto inteiro. Qualquer violação existente aparecerá na aba *Messages* e no *Report File* que é possível gerar com a ferramenta. 
Podemos definir as características do relatório em *Report Options* e determinar quais regras ficarão ativadas/desativadas no modo Online e no modo Batch.

![img](/img/docs/aurora/hardware/altium/drc/drc11.png)
*Janela do Design Rule Checker. Aqui você configura o relatório que será gerado após executar o Design Rule Check*

![img](/img/docs/aurora/hardware/altium/drc/drc12.png)
*Janela do Design Rule Checker. Aqui você configura quais regras estão no modo Online e quais estão no modo Batch*

O modo online é executado em tempo real, portanto caso alguma violação seja cometida o usuário é avisado imediatamente. Por outro lado, o modo batch deve ser executado manualmente. O output dele é obtido quando você seleciona Run Design Rule Check… no canto inferior esquerdo da caixa de diálogo (as violações aparecem na aba Messages e, caso o usuário queira, no relatório).

## Regras Importantes
Agora que já sabemos como criar regras e executar a checagem de violações, veremos quais regras são essenciais. Antes, vejamos duas regras que são importantes no momento da encomenda da placa:

**Board Thickness** (espessura da placa): 1.6 mm (de acordo com o [padrão PC104](https://pc104.org/wp-content/uploads/2015/02/PC104_Spec_v2_6.pdf))

**Copper Weight** (espessura do cobre): 1 oz 

Para muitas das regras podemos usar como referência as (informações fornecidas)[https://jlcpcb.com/capabilities/Capabilities] pela JLCPCB, a principal fabricante de PCBs da equipe. Para outras, vamos nos basear naquilo que é importante para o projeto. Vejamos quais são os parâmetros para regras em função do local em que elas podem ser definidas dentro de *Rules and Constraints*.

### *Manufacturing » Hole Size*
**Drill Hole Size** (tamanho do furo mecânico):
- 0.20 mm - 6.30 mm	

![img](/img/docs/aurora/hardware/altium/drc/drc13.png)

**Via Hole Size** (tamanho do furo da via):
- Mínimo: 0.3 mm	

### *Routing » Routing Via Style*
**Via Hole Size** (tamanho da via):
- Tamanho mínimo: 0.3 mm
	
**Via Diameter** (diâmetro da via):
- Diâmetro mínimo: 0.6 mm

### *Manufacturing » Minimum Annular Ring*
**Minimum Annular Ring**:
- Tamanho mínimo (via): 0.13 mm

![img](/img/docs/aurora/hardware/altium/drc/drc14.png)


- Tamanho mínimo (pad): 0.3 mm (Custom Query: IsPad)

(Bom tamanho para as vias: Diâmetro 0.6 mm e Hole Size 0.3 mm)

### *Manufacturing » Hole to Hole Clearance*
**Hole to hole clearance**:
- Hole to Hole Clearance: 0.54 mm (Custom Query nos dois objetos: IsPad) 

![img](/img/docs/aurora/hardware/altium/drc/drc15.png)


- Via to Via Clearance: 0.254 mm (Custom Query nos dois objetos: IsVia)

### *Manufacturing » Minimum Solder Mask Sliver*
**Pad to Pad Clearance**:
- Minimum Solder Mask Sliver: 0.54mm (Pad Class and Layer > All Pads, Multi-Layer)

![img](/img/docs/aurora/hardware/altium/drc/drc16.png)

### *Electrical » Clearance*
**Via to Track**:
- Via x Track: 0.254 mm

**PTH to Track**:
- TH Pad x Track: 0.33 mm

**NPTH to Track**
- Hole x Track: 0.254 mm

![img](/img/docs/aurora/hardware/altium/drc/drc17.png)

**SMD Pad to SMD Pad**:
- SMD Pad x SMD Pad: 0.127 mm

![img](/img/docs/aurora/hardware/altium/drc/drc18.png)

**Minimum Spacing**:
- Track x Track: 0.2 mm

![img](/img/docs/aurora/hardware/altium/drc/drc21.png)

### *Manufacturing » Silk To Solder Mask Clearance*
**Pad To Silkscreen**:
- Silkscreen To Object Minimum Clearance: 0.15 mm

![img](/img/docs/aurora/hardware/altium/drc/drc19.png)

### *Manufacturing » Board Outline Clearance*
**Trace to Outline**:
- Minimum Clearance: 0.2 mm

![img](/img/docs/aurora/hardware/altium/drc/drc20.png)

### *Mask » Solder Mask Expansion*
**Trace to Outline**:
- Expansion Top: 0.05 mm

![img](/img/docs/aurora/hardware/altium/drc/drc22.png)

### *Routing » Width*
**Minimum Trace Width**
- Min. Width: A espessura da trilha deve mudar em função da corrente que passa por ela. Além disso, o ideal é levar em consideração o aumento de temperatura esperado na trilha. Utilize a imagem abaixo para determinar a espessura.

![img](/img/docs/aurora/hardware/altium/drc/drc23.png)

Caso o aumento de temperatura seja de 10 ºC (normal para a maior parte das aplicações):

![img](/img/docs/aurora/hardware/altium/drc/drc24.png)

Todas as regras comentadas foram utilizadas na confecção das placas do Aurora v2. Elas podem ser encontradas [nesta pasta](https://drive.google.com/drive/u/1/folders/1NlARz-iSZpqst5JnE4Xp6-IWxfrMm1uJ) no arquivo chamado *StandardRules.RUL*. Para incluí-las no seu projeto basta abrir o editor de regras e clicar com o botão esquerdo em *Design Rules » Import Rules*. Depois é só selecionar o arquivo baixado.

## Anexo I - PARÂMETROS DRC PARA FRESADORA PCB-PROTO-1S

**Tabela**: Características técnicas limites da Fresadora PCB Proto 1S.

| Parâmetro | Mínimo |
| --------- | ------ |
| Trilha entre Trilha | 0.2 mm (8 mils) |
| Furo | 0.3 mm |
| Board Thickness | 1.6 mm |
| Copper Weight | 1 oz |
| Maximum Dimensions | 150 x 200 mm |
| Maximum Layers | 2 (top + bottom) |

| Parâmetro | Mínimo | Recomendado |
| --------- | ------ | ----------- |
| Drill Hole Size | 0.3 mm | 0.4 mm |
| Via Hole Size | 0.3 mm | 0.4 mm |
| Via Diameter | 0.7 mm | 1.0 mm |
| Minimum Annular Ring | 0.2 mm | 0.4 mm |
| Hole to Hole Clearance |0.6 mm | 1.6 mm |
| Pad to Pad Clearance | 0.2 mm | 0.4 mm |
| Via to Track | 0.4 mm | 0.8 mm |
| PTH to Track | 0.4 mm | 0.8 mm |
| NPTH to Track | 0.4 mm | 0.8 mm |
| SMD Pad to SMD Pad | 0.2 mm | 0.4 mm |
| Pad to Silkscreen | 0.2 mm | 0.4 mm |
| Trace to Outline Clearance | 0.2 mm | 0.4 mm |
| Minimum Spacing Track to Track | 0.2 mm | 0.4 mm |
| Minimum Trace Width | 0.2 mm (8 mils) | 0.4 mm (16 mils) |

