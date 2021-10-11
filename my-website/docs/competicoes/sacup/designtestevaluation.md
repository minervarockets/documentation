---
id: designtestevaluation
title: Design, Test & Evaluation Guide
sidebar_label: Design, Test & Evaluation Guide
---

*Escrito por Matheus Parracho*

Esse texto é um resumo da sessão de [Design, Test & Evaluation Guide](https://www.soundingrocket.org/uploads/9/0/6/4/9064598/sa_cup_irec-design_test___evaluation_guide-v1.0-2021.pdf), que define os critérios de design, teste e validação para a SA Cup.

## Introdução e Pressupostos
Spaceport America Cup (SA Cup) são uma série de eventos, estes que duram 1 semana, responsáveis por possibilitar a estrutura e o contexto responsável pela maior competição de engenharia de foguetes do planeta. O evento é apoiado pela Experimental Sounding Rocket Association (ESRA) e New Mexico Spaceport Authority (NMSA).

O clima da competição de fato motiva estudantes a seguir carreira na área de ciência e tecnologia. Um trabalho além da sala de aula!

Proposta e escopo - O documento define o design mínimo, teste e critérios de validação para promover um voo seguro. O lançamento fora dos padrões desse documento serão penalizados.

Convenções e Notação do documento oficial: 

- "Shall": Requerimento mandatório.
- "Should": Requerimento não mandatório.
- "Will": Declarar fatos e declarações.


Status de Voo - refere-se ao status do voo; que pode ser: "nominal", "provisional" e "denied".


- Nominal - AExcede os requisitos mínimos e não compromete a segurança no voo.
- Provisional - Projeto excede os requisitos mínimos 
                porém compromete em algum aspecto a segurança no voo. 
                Assim é necessário alguma modificação para que entre ao acordo.
- Denied - Falha ao cumprir requisitos mínimos e de segurança.

## GPS
Todas as equipes deverão ter uma solução de GPS nos foguetes.

Os times são testados se a solução de GPS realmente funciona durante o "Team Check-In" na segunda-feira e novamente no check final antes de proceder ao pad de lançamento.


### Gerenciamento de Frequência
O MCC começará a coordenar a atribuição de frequências para times nos meses que antecederam a competição

- Motivação: não haver interferências.
- Os times deverão conseguir trocar as frequências rapidamente nos transmissores e receptores.
- Os times serão testados para verificar se realmente o MCC está recebendo a telemetria do GPS.
- O time que não estiver transmitindo a frequência será penalizado.


### Redundância de GPS
O time pode ter mais de um sistema de GPS no foguete, mas todos devem estar documentados de acordo.

### Dispositivos COTS recomendados:

- TeleGPS, TeleMega, etc 
- Beeline GPS 
- Featherweight GPS 

### Opções de GPS trackers
Range de frequência de 900MHz não necessita de licença HAM.

70cm/APRS necessita de licença HAM.


### Sistemas de foguete GPS em vários estágios
 As equipes com vários estágios ou implantáveis ​​são incentivados a
use as unidades de GPS Big Red Bee 70cm em cada um dos estágios do foguete e/ou implantáveis.


### Suporte APRS 
GPSPara soluções GPS de 70 cm, as soluções APRS são ALTAMENTE RECOMENDADAS


### Sistemas de rastreamento SRAD GPS
As soluções SRAD GPS são aprovadas, mas exigem um acréscimo significativo
documentação e testes. Aqui estão os requisitos adicionais para o rastreamento GPS desenvolvido pela SRAD
sistemas:

- Deve ser capaz de alterar a frequência de maneira fácil e rápida

- O protocolo APRS é ALTAMENTE RECOMENDADO para SRAD GPS Tracking. 

- Transmit rep deve ser definido como 2 seg. Transmissões na mesma frequência de diferentes
estágios (transmissores) devem ser mudados usando o timeslot de GPS.

- A solução deve ser testada completa e com sucesso para:

    - Para voos de 10k - 2 milhas (linha de visão no solo)

    - Para voos de 30k 'ou mais - 3 milhas (linha de visão no solo).

- Vídeos de teste de rastreamento GPS devem ser incluídos em seus feeds de mídia social e links em seu
relatório final.




## Propulsão

### Motores COTS
A lista dos motores aprovados podem ser encontrados em:
http://www.nar.org/SandT/pdf/CombinedMotorsByImpulse.pdf


### Motores SRAD
Motores SRAD serão explicitados com mais características a seguir, mas todos deverão ser de acionamento estático e bem caracterizados antes da chegada ao
concorrência. Nenhum motor de terceiros é permitido em nenhuma circunstância.

### Sistema Líquido
Um motor líquido SRAD é formado pelos times e é um motor projetado com combustível armazenado
e oxidante armazenado no estado líquido. Todos os propelentes líquidos devem ser não tóxicos, conforme será definido a seguir. Todos os motores líquidos devem ser estáticos.

### Sistema Híbrido
Um motor híbrido é formado pelos times e é um motor projetado com  uma combinação
de propulsores sólidos e líquidos ou gasosos.

### Propelentes não tóxicos
Os veículos lançadores inscritos no IREC devem usar propelentes não tóxicos.
Propelente composto de perclorato de amônio (APCP), nitrato de potássio e açúcar (também conhecido como "foguete
doce "), óxido nitroso, oxigênio líquido (LOX), peróxido de hidrogênio, querosene, propano, álcool e
substâncias semelhantes, são todas consideradas não tóxicas. Propelentes tóxicos são definidos como aqueles que requerem
aparelho respiratório, armazenamento exclusivo e infraestrutura de transporte, ampla proteção individual
equipamento (EPI).

### Proteção e Arme do Sistema de Propulsão
Um sistema de propulsão é considerado armado se apenas um
a ação (por exemplo, um sinal de ignição) deve ocorrer para que o(s) propelente(s) se acendam.

Verificar página 13 a 46 do documento oficial.


### Arme do Circuito de Ignição de Partida à Terra
Ignição de todo o sistema de propulsão iniciado à terra
circuitos/sequências não devem ser "armados" até que todo o pessoal esteja a pelo menos 50 pés (15 m) de distância
o veículo de lançamento.


- O sistema de controle de lançamento fornecido pela ESRA satisfaz este requisito ao implementar um
sequência remota “Pad HOT” iniciada a partir do LCO.


### Arme do circuito de ignição por estágio/partida a ar 
Todos os sistemas de propulsão de estágio superior (ou seja, partidas a ar)
deve ser projetado para evitar a ignição do motor durante a armação no solo, inibir a ignição do motor
no caso de um vôo não nominal, e ser capaz de ser desarmado caso o foguete seja
não lançado.


### Descarregamento do propelente após o aborto do lançamento
Os sistemas de propulsão híbridos e líquidos devem
implementar um meio para ventilação ou descarga controlada remotamente de todos os líquidos e gases
propelentes em caso de abortamento do lançamento.


### Eletrônica do circuito de ignição por estágio/partida a ar 
Todos os sistemas de ignição de estágio superior devem estar em conformidade com
os mesmos requisitos e objetivos para “fiação crítica de segurança” dos sistemas de recuperação.

- Os voos encenados devem ter uma relação empuxo-peso mínima de 8 no boost.

- O sustentador deve ter uma relação empuxo-peso mínima de 3.

- Os foguetes agrupados devem ter uma relação empuxo-peso mínima de 6 em qualquer motor que seja
acendeu na plataforma (ou seja, o foguete deve ser capaz de voar com segurança se apenas um dos vários
luzes de motores).


### Requisitos do computador para a ignição por estágio/partida a ar 
A ignição dos motores air-start deve ser
realizado usando um computador de vôo COTS que tem a capacidade de realizar um "check de altitude" que pode inibir a ignição da partida abaixo de uma altitude pré-selecionada.

Os atuais aprovados estão no documento oficial.


### Voos Air-Start/Staged
Todos os projetos devem ter disposições capazes de
impedir a ignição do motor de partida a ar no solo.

- Uma provisão para abrir o circuito entre o computador de vôo e o iniciador durante
a inicialização do computador de vôo é obrigatória.

- Shunts são recomendados, mas não são obrigatórios. Exemplos de troca recomendada
projetos são fornecidos no Apêndice D.

- Os computadores de vôo não devem ser armados até que o foguete esteja na posição vertical.

- A configuração eletrônica deve ser projetada de tal forma que a provisão usada para abrir o
circuito para o iniciador pode ser usado para abrir novamente o circuito para o iniciador no evento
que o foguete não foi lançado.


### Inibição Durante o vôo 
O computador de vôo que controla o air-start
a ignição do motor deve ser configurado para inibir a ignição do motor de partida a ar, a menos que o reforço
burnout foi detectado e o foguete atingiu uma altitude de pelo menos 80% do
altitude simulada no momento em que o disparo do iniciador é desejado.

- O computador de vôo deve ser configurado para evitar que o motor de partida a ar atire em um
mais tarde, se o limite de altitude não foi alcançado.


### Teste do Sistema de Propulsão SRAD
As equipes devem cumprir todas as regras, regulamentos e melhores
práticas impostas pelas autoridades em seus locais de teste escolhidos.

- Os requisitos a seguir referem-se ao teste de verificação do sistema desenvolvido pelo time (SRAD) e os sistemas modificados de propulsão disponíveis no mercado (COTS).

- A ESRA recomenda que as equipes concluam esses testes até 1º de abril do ano de competição.

### Teste de pressão da câmara de combustão
SRAD e sistemas de propulsão COTS modificados devem ser projetados e testados de acordo com o vaso de pressão SRAD a partir dos
requisitos definidos.

### Teste de Tanque de Sistema de Propulsão Híbrido e Líquido
Sistemas que usam propelente(s) líquido(s) devem com sucesso (sem anomalias significativas) completar
teste de carregamento e descarregamento do propelente em "configuração de lançamento".

- Este teste pode ser conduzido usando propelente(s) real(is) ou fluidos substitutos adequados.

- Links para vídeos e dados de teste devem ser publicados em seu relatório final.

### Teste estático
Os sistemas de propulsão SRAD devem ser bem-sucedidos (sem
anomalias com pressão e/ou empuxo da câmara) no teste estático de fogo quente antes do IREC.

- As equipes SRAD Solid devem fornecer um arquivo BurnSim de seu motor SRAD pretendido
junto com dados de teste estático e que inclui um gráfico de pressão e empuxo
hora extra.

- Um link para um vídeo de teste bem-sucedido deve ser incluído em seu terceiro progresso
relatório.

- Todos os motores SRAD devem ser projetados e fabricados pela equipe.

- O motor de vôo deve representar o motor de teste estático em todos os aspectos.

- Quaisquer alterações no motor de vôo SRAD devem ser testadas e reenviadas. Sem
Exceções.

## Recuperação

### Recuperação em Paraquedas
Cada lançamento recuperado de forma independente.
A carroceria do veículo deve atingir um apogeu acima de 1.500 pés (457 m) acima do nível do solo
(AGL) deve seguir um conceito de operações de recuperação de "evento duplo" (CONOPS).

- A recuperação de Dual Event envolve um evento de implantação inicial com um pára-quedas drogue
implantação (ou um pára-quedas principal de recife) no ou próximo ao apogeu seguido por um principal
evento de implantação em uma altitude muito mais baixa.

- Corpos recuperados de forma independente (cargas úteis), cujo apogeu não deve ultrapassar
AGL de 1.500 pés (457 m) estão isentos de implantação dupla e podem apresentar apenas um
evento de implantação único/principal.

- O Jolly Logic Chute Release (JLCR) NÃO é considerado "eletrônicos redundantes"
e não será permitido o uso para qualquer pára-quedas principal com mais de 48 ”de diâmetro.

- Tender Descender e outros sistemas de "cortador de cabos" que são adequadamente classificados para
grandes pára-quedas são aceitáveis, desde que tenham sido exaustivamente testados.

### Evento de implantação inicial

O evento de implantação inicial deve ocorrer no ou próximo ao apogeu para
estabilizar a atitude do veículo para prevenir ou eliminar a reentrada balística.

- O chute drogue também é utilizado para reduzir a taxa de descida do foguete o suficiente para permitir um
evento de implantação principal bem-sucedido, mas não tanto a ponto de exacerbar a deriva do vento.

- As velocidades de descida adequadas sob drogue devem estar entre 75 e 150 pés/s (23-46 m/s).

### Evento de implantação principal 

O evento de implantação principal deve ocorrer em uma altitude não
superior a 1.500 pés (457 m) AGL e reduzir a taxa de descida do veículo o suficiente para
evitar danos excessivos no impacto com o solo (<30 pés/s ou 9 m/s).

- Nota importante - O Jolly Logic Chute Release (JLCR) NÃO é considerado
"Eletrônica redundante" e não será permitida a utilização para qualquer pára-quedas principal ou
outro evento de recuperação. Não foi projetado para funcionar com pára-quedas com mais de 48 ”de diâmetro.

### Proteção do Gás de Ejeção
 O sistema de recuperação deve implementar proteção adequada (por exemplo
material resistente ao fogo, pistões, defletores, etc ...) para evitar gases de ejeção quentes (se
implementado) de causar queimaduras em cordas de retenção, pára-quedas e outros
componentes vitais conforme as demandas de design específico.

### Links giratórios de paraquedas 
O aparelhamento do sistema de recuperação (por exemplo, cabos de pára-quedas, risers, choque
cordas, etc ...) devem implementar links giratórios adequadamente classificados nas conexões para aliviar
torção/torção conforme as demandas específicas do projeto.

- Isso irá mitigar o risco de cargas de torque desenroscar conexões aparafusadas durante
recuperação

### Coloração e marcações de paraquedas
Quando paraquedas separados são usados ​​para o
e eventos principais de implantação, esses paraquedas devem ser muito diferentes de um
outro visualmente.

- Isso normalmente é obtido usando paraquedas cujas cores primárias contrastam com as do
outra rampa.

- Isso permitirá que observadores em terra caracterizem mais facilmente os eventos de implantação
com ótica de alta potência.


### Sistemas de recuperação sem paraquedas/Parafoil
Equipes explorando outros (ou seja, sem pára-quedas
ou baseados em parafina) os métodos de recuperação devem notificar a ESRA das suas intenções o mais rapidamente
possível oportunidade e manter a ESRA informada da situação à medida que o seu trabalho progride.

- A ESRA pode fazer solicitações adicionais de informações e elaborar requisitos exclusivos
dependendo da implementação de design específico da equipe.

- O pessoal de segurança de alcance pode considerar o projeto como inseguro se sentirem que há uma possibilidade
a recuperação pode ser possível sair da área de recuperação

### Eletrônica redundante
Os veículos lançadores devem implementar totalmente independentes e
sistemas de recuperação redundantes para incluir: interruptor de armar, sensores/computadores de vôo, energia
fornecimento, energética e "iniciadores elétricos".

- Pelo menos um dos sistemas deve incluir um computador de vôo COTS.

- Os sistemas devem ser projetados de tal forma que, se o sistema primário falhar, o sistema de backup
irá garantir uma recuperação segura do veículo de lançamento.

- Neste contexto, iniciador elétrico é o dispositivo energizado pela eletrônica do sensor, que
em seguida, inicia alguma outra liberação de energia mecânica ou química para implantar sua porção de
o sistema de recuperação (ou seja, fósforos elétricos, fio de nicromo, etc ...).

### Redundant COTS Recovery Electronics 
Pelo menos um sistema de recuperação redundante
subsistema eletrônico deve implementar um computador de vôo COTS (por exemplo, StratoLogger, G-Wiz,
Raven, Parrot, AIM, EasyMini, TeleMetrum, RRC3, etc…).

- Este computador de vôo também pode servir como o sistema oficial de registro de altitude
especificado na Seção 2.5 do Documento de Regras e Requisitos IREC.

- O computador de vôo COTS também deve disparar o energético primário ou de reserva
sistema.

- Para ser considerado COTS, o computador de voo (incluindo o software de voo) deve
foram desenvolvidos e validados por um terceiro comercial.

- "Kits" de computador de vôo comercialmente projetados (por exemplo, o Eggtimer ou similar) são
não permitido como COTS.

- Os “kits” do computador de vôo podem ser usados ​​como eletrônicos secundários ou terciários. Se algum aluno desenvolveu um computador de voo montado a partir de componentes COTS separados
não será considerado um sistema COTS.

- Da mesma forma, qualquer microcontrolador COTS executando software de voo desenvolvido por um aluno
não será considerado um sistema COTS.

- Modificações do aluno no software ou hardware de base de um voo COTS
controlador será considerado uma atualização SRAD. Como tal, o computador de vôo irá
deixar de ser considerado COTS.


### Eletrônica de recuperação SRAD
As equipes são incentivadas a desenvolver seu próprio voo
computadores, no entanto os computadores de vôo SRAD devem ser bem documentados e fornecer
prova de função.

- Isso deve incluir testes de solo, bem como testes de voo antes da competição


### Fiação crítica de segurança para motores AIR-Start

A fiação crítica de segurança é definida como elétrica
fiação associada a eventos de implantação de sistema de recuperação e qualquer foguete "air started"
motores.

- Além das seguintes declarações de requisitos, toda a fiação crítica de segurança deve
siga as diretrizes de fiação de segurança crítica descritas no Apêndice B do documento completo.


### Gerenciamento de cabos 
Toda a fiação crítica de segurança deve implementar um gerenciamento de cabos
solução (por exemplo, abraçadeiras, fiação, chicotes, canais de cabos) que evitará o emaranhamento
e movimento livre excessivo de comprimentos significativos de fiação/cabo devido ao lançamento esperado
carrega.

- Este requisito não se destina a negar a pequena quantidade de folga necessária em tudo
conexões/terminais para evitar desacoplamento não intencional devido às cargas de lançamento esperadas
transferidos para fiação/cabos em interfaces físicas.


### Conexões de fiação seguras 
Todas as conexões críticas de fiação/cabo devem ser
suficientemente seguro para evitar a desconexão devido às cargas de lançamento esperadas.

- Isso será avaliado por um "teste de tração", em que a conexão é suave, mas firme
"puxado" com a mão para verificar se é improvável que se solte durante o vôo.


### Dispositivos Energéticos do Sistema de Recuperação
Todos os dispositivos de energia armazenada (também conhecidos como energéticos) usados ​​em
os sistemas de recuperação devem cumprir os requisitos do dispositivo energético definidos no documento.


### Teste do sistema de recuperação 
As equipes devem cumprir todas as regras, regulamentos e o melhor
práticas impostas pelas autoridades em seus locais de teste escolhidos.

- Os requisitos a seguir referem-se ao teste de verificação de todos os sistemas de recuperação. ESRA
recomenda que as equipes concluam esses testes até 01 de abril.

- Embora não seja um requisito, esta data é recomendada para garantir que as equipes estejam preparadas para
o IREC.


### Demonstração de teste de solo
Todos os mecanismos do sistema de recuperação devem ser bem-sucedidos
(sem anomalias significativas) testado antes do IREC, seja por teste de voo, ou
através de um ou mais testes de solo de subsistemas chave.

- No caso de tais testes de solo, os componentes eletrônicos do sensor serão funcionalmente incluídos no
demonstração simulando as condições ambientais sob as quais seus
função de implantação é acionada.

- Um link para todos os vídeos do (s) ciclo (s) de teste deve ser incluído no relatório final.


### Demonstração de teste de voo opcional 
Embora não seja necessária, uma demonstração de teste de voo
pode ser usado no lugar do teste de solo.

- No caso de tal teste de vôo, o sistema de recuperação utilizado irá verificar o pretendido
projetar implementando os mesmos componentes principais do subsistema (por exemplo, computadores de vôo
e pára-quedas), como será integrado ao veículo de lançamento destinado ao IREC (ou seja, um
reforço substituto pode ser usado).

- Um link para um vídeo do voo de teste deve ser incluído no relatório final.


## Sistemas de controle de vôo ativo (ACS)

### Funcionalidade de controle restrito 
Os sistemas de controle de vôo ativo do veículo lançador devem ser
opcionalmente implementado estritamente para aumento de estabilidade de inclinação e/ou rotação, ou para
"travagem" aerodinâmica.

- Sob nenhuma circunstância um veículo de lançamento inscrito no IREC será guiado ativamente
em direção a um alvo espacial designado.

- A ESRA pode fazer solicitações adicionais de informações e elaborar requisitos exclusivos
dependendo da implementação de design específico da equipe.


### Desnecessário para um vôo estável 
Os veículos lançadores que implementam controles de vôo ativos devem
ser naturalmente estável sem que esses controles sejam implementados (por exemplo, o veículo de lançamento
pode ser voado com o sistema de atuador de controle [CAS] - incluindo quaisquer superfícies de controle -
removido ou tornado inerte e mecanicamente travado, sem se tornar instável
durante a subida).

- Os sistemas de controle de atitude (ACS) servirão apenas para mitigar as pequenas perturbações que
afetam a trajetória de um foguete estável que implementa apenas superfícies aerodinâmicas fixas
para estabilidade.

- A estabilidade é definida na Seção 10.2 deste documento. ESRA pode fazer pedidos adicionais
para obter informações e elaborar requisitos exclusivos, dependendo do projeto específico da equipe
implementação.


### Projetado para falhar com segurança 
Sistemas atuadores de controle (CAS) devem travar mecanicamente em um
estado neutro sempre que um sinal de aborto for recebido por qualquer motivo, sistema primário
a potência foi perdida ou a atitude do veículo lançador excedeu 30 ° de sua altitude de lançamento.

- Qualquer uma dessas condições atendida acionará o estado do sistema neutro e à prova de falhas. UMA
estado neutro é definido como aquele que não se aplica a nenhum momento ao veículo de lançamento
(por exemplo, superfícies aerodinâmicas aparadas ou retraídas, jatos de gás desligados, etc ...).


### Fase de reforço de dormência 
CAS deve travar mecanicamente em um estado neutro - definido em
neste documento - até que a fase de reforço da missão tenha terminado (ou seja, todos
estágios de propulsão cessaram de produzir empuxo), o veículo lançador cruzou o
ponto de pressão aerodinâmica máxima (também conhecido como Q máximo) em sua trajetória, ou o lançamento
veículo atingiu uma altitude de 20.000 pés (6.096 m) AGL.

- Qualquer uma dessas condições sendo atendida permitirá o estado do sistema ativo.

- Um estado neutro é definido como aquele que não se aplica a nenhum momento para o lançamento
veículo (por exemplo, superfícies aerodinâmicas aparadas ou retraídas, jatos de gás desligados, etc ...).


### Eletrônica do Sistema de Controle de Voo Ativo 
Sempre que possível, todos os sistemas de controle ativo
deve estar em conformidade com os requisitos e objetivos para "componentes eletrônicos redundantes" e "segurança
fiação crítica "como sistemas de recuperação - entendendo que, neste caso," iniciação "se refere a
Comando CAS em vez de um evento de recuperação.

- Os sistemas de controle de voo estão isentos do requisito de redundância COTS, dado
que tais componentes geralmente não estão disponíveis como COTS para o amador de alta potência
comunidade de foguetes.


### Energética do Sistema de Controle de Voo Ativo
Todos os dispositivos de energia armazenada usados ​​em um sistema ativo
sistema de controle de vôo (também conhecido como energético) deve estar em conformidade com os requisitos de dispositivo energético definidos neste documento.


## Requisitos de Fiação
Todos os fios devem ser trançados, isolados, 22 AWG ou maior. Os fios devem ser de cobre, revestidos com
prata ou estanho (fio inteiro, não apenas as pontas).

- Quando um componente disponível no mercado inclui fios elétricos suspensos, esses fios podem ser usados ​​sem modificações.
Por exemplo, um fósforo E pode conter fio sólido, um conector de bateria pode integrar 26 AWG
fio, etc.

- Fio trançado de tamanhos menores que 22 AWG pode ser usado apenas quando necessário por um padrão
componente. Por exemplo, se o bloco de terminais de um altímetro for dimensionado para aceitar fios 24 AWG
então esse é o tamanho do fio que deve ser usado para essa parte do circuito.

- Os fios de fio nunca devem ser removidos para permitir que um fio caiba em um orifício menor ou
terminal. Use um fio menor para essa finalidade.

- O fio deve ser descascado apenas com uma ferramenta para descascar fio do calibre correto. Quaisquer fios cortados
deve ser motivo de rejeição.

- Cada extremidade de um fio deve ser terminada em um dos seguintes métodos aprovados, com exceções nos parágrafos 4 e 5 abaixo:

    - Crimpado em um terminal crimpado (de preferência). Isso inclui terminais de crimpagem em conectores multicondutores, como conectores D-sub de 9 pinos (consulte a tabela abaixo).

    - Aparafusado em um terminal de parafuso de ligação (aceitável).

    - Os fios devem ser terminados em um bloco de terminais, apenas se for um pedaço de prateleira equipamento (ou seja, um altímetro) possui blocos de terminais integrados e, portanto, não há outra escolha.

Os blocos de terminais de duas peças devem ser fixados positivamente juntos - o ajuste por fricção é
insuficiente.

- Os fios devem ser terminados por solda, apenas se for um equipamento de prateleira (ou seja, um chave de arme) possui terminais de solda embutidos e, portanto, não há outra escolha.

- A confiabilidade das juntas de solda não pode ser estabelecida apenas pela inspeção visual.

- Todas as operações de crimpagem devem ser realizadas com as ferramentas corretas, usando terminais de crimpagem dimensionados para a bitola de fio apropriada.

- Onde vários fios são crimpados em um único terminal, calcule a bitola efetiva (para exemplo, dois 22 AWG são efetivamente 19 AWG).

- Terminais com luvas de plástico isoladas (geralmente codificados por cores para indicar o tamanho do cilindro) não devem ser frisados.

- Se um terminal for fornecido com uma luva de plástico isolada, ela deve ser removida antes do uso. Isto pode ser necessário ajustar a ferramenta de crimpagem para obter um aperto mais apertado.

- A qualidade de crimpagem dos terminais isolados é difícil de inspecionar.

- Normalmente não há necessidade de isolamento quando os terminais são montados corretamente em blocos de barreira. Se for necessário isolamento, adicione tubulação termorretrátil transparente.

- Quando um fio desencapado é mantido pressionado por um terminal de parafuso de ligação, o fio deve fazer um ângulo de 180 graus gancho, e os fios devem ser visíveis saindo da cabeça do parafuso. Apenas um fio deve ser permitido por parafuso.

- A curva do fio deve ser no sentido horário, para que aperte quando o parafuso for apertado.

- Quando os terminais de anel ou espada são pressionados por terminais de parafuso de ligação, um máximo de dois terminais são permitidos por parafuso.

- No máximo três fios devem ser cravados em um único cilindro de terminal. Terminais de união de topo são considerados como tendo barris separados em cada extremidade.

- Se dois ou mais fios devem ser unidos, um dos seguintes métodos aprovados deve ser usado:
    - Prenda um terminal em anel em cada fio e, em seguida, parafuse-os em um bloco de barreira. Adicionar peças de jumper de bloco de barreira aprovadas se muitos fios devem ser unidos.
    - Aparafuse os fios desencapados sob os parafusos de cabeça de ligação em um bloco de barreira. Adicionar barreira aprovada bloqueie as peças do jumper se muitos fios precisarem ser unidos.
    - Crimpe os fios em um terminal de emenda de topo não isolado e, em seguida, isole com tubos termorretráteis.
    - Qualquer método de emenda com torção de arame (incluindo porcas de arame) é expressamente proibido. Esqueço tudo o que você sabe sobre fiação doméstica. Casas não veem vibração de lançamento!

- Todos os tubos isolantes (geralmente termorretráteis) devem ser transparentes. Isso permite a inspeção do hardware subjacente.

- Nenhuma fita, cola ou RTV deve ser usado para isolar ou amarrar qualquer elemento do chicote de fios.

- As seguintes regras se aplicam aos conectores:
    - Devem usar contatos crimpados, pois a soldagem é proibida.
    - Eles devem usar um mecanismo de travamento positivo para manter as duas metades acopladas sob vibração e tensão. O ajuste por fricção sozinho não é aceitável.
    - Travas de conector de plástico não devem ser usadas (como as encontradas em automóveis aplicações), mas os conectores circulares com porcas de acoplamento de plástico são aceitáveis.

- Fios individuais devem ser agrupados para fazer um chicote (fiação multicondutor de fábrica em uma jaqueta externa comum também é aceitável).

- O arnês de segurança crítica deve ser mantido separado do arnês de carga útil (se houver).

- O empacotamento deve ser realizado por:

    - Uma leve mudança (apenas por motivos mecânicos, nenhuma mitigação EMC é pretendida).
    - Comprimentos curtos (1 cm) de tubo transparente termorretrátil ou zíper a cada 5 cm.
    - Manga de malha de arame, desde que permita a inspeção da fiação interna.

- O arnês deve ser apoiado por grampos P de plástico. Não deve ser permitido tocar em qualquer borda afiada ou rosca de parafuso.

- Todos os itens que são conectados pelo arnês (blocos de barreira, sensores, baterias, atuadores, interruptores, etc.) devem ser rigidamente fixados à estrutura do foguete para que não possam se mover.

- A fixação rígida implica a fixação com fixadores roscados ou cola sólida. Braçadeiras e/ou fitas não são exemplos aceitáveis ​​de fixação rígida.

- Nenhum fio deve ser apertado. Todo fio deve ter alguma folga, demonstrada por uma curva em seu terminação.

- As baterias devem ser conectadas de forma adequada:
    - Baterias de transistor de 9 V devem ser presas em clipes e conectadas usando o encaixe adequado terminais.
    - Baterias de célula de gel devem ser presas com grampos e conectadas usando crimpagem “faston” terminais.
    - Pilhas cilíndricas (AAA, AA, C, D, etc) devem ser montadas em suportes comerciais.

Os suportes devem ser fixados rigidamente à estrutura, e as baterias devem ser amarrado nos suportes.

### Peças Recomendadas

|                   Peça                   |                             Número                             |
|:----------------------------------------:|:--------------------------------------------------------------:|
| Fio                                      | Digikey A5855W-100-ND                                          |
| Fio                                      | Digikey C2016L-100-ND                                          |
| Fio                                      | Digikey W120-100-ND Digikey                                    |
| Fio                                      | Amazon “Tinned marine grade wire"                              |
| Anel de terminais                        | Digikey A27021-ND (#6 hole)                                    |
| Terminal                                 | Digikey A09012-ND                                              |
| “Faston” terminal                        | Digikey 298-10011-ND                                           |
| 9V battery holder com terminais soldados | Digikey 708-1409-ND                                            |
| 4 AA battery holder                      | Digikey 708-1399-ND                                            |
| P-clamp                                  | Digikey 7624K-ND (check size)                                  |
| Heat-shrink tubing                       | Digikey A014C-4-ND/Mouser 650-RFN100                           |
| Barrier block (double row)               | Digikey CBB206-ND Mouser/538-2140 ou 4140/538-2141 ou 4141     |
| Barrier block jumper                     | Digikey CBB314-ND                                              |
| D-sub connectors (9 contact)             | Digikey A31886-ND (male shell)                                 |
| D-sub connectors (9 contact)             | Digikey A34104-ND (female shell)                               |
| D-sub connectors (9 contact)             | Digikey A1679-ND (male pins)                                   |
| D-sub connectors (9 contact)             | Digikey A1680-ND (female pins)                                 |
| D-sub fixing hardware                    | Digikey MDVS22-ND (screw)                                      |
| D-sub fixing hardware                    | Digikey MDVS44-ND (socket)                                     |
| MIL-C-38999 connectors                   | Digikey 956-1017-ND (13 pin panel mount receptacle with pins)  |
| MIL-C-38999 connectors                   | Digikey 956-1020-ND (13 pin plug with sockets)                 |
