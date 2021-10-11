---
id: git
title: Usando o Git
sidebar_label: Git
---

*Escrito por Gabriel Aleksandravicius*

Nessa página: 
- É explicado resumidamente o que é o Git;
- São apresentados seus comandos principais;
- É mostrado como é o fluxo de trabalho;
- Vemos como utilizamos essa ferramenta na programação do Aurora v2;
- Indicamos algumas extensões para o VS Code.

## O que é
Git é uma ferramenta utilizada no **controle de versão** ou **versionamento**. O controle de versão é um sistema que acompanha as mudanças feitas nos arquivos de modo que é possível retornar a uma versão antiga em algum momento no futuro. Ele te permite retornar a um estado anterior, comparar as mudanças feitas com o tempo, ver quem introduziu alguma mudança que pode estar causando algum problema e mais. A vantagem de usar um Sistema de Controle de Versão (VCS) é que mesmo que você apague acidentalmente algum  arquivo ou faça alguma besteira enorme, essa situação é facilmente revertida.  

Além dessas vantagens, o Git permite que você trabalhe em conjunto com outros desenvolvedores. Ele trabalha como um Sistema de Controle de Versão Distribuída (DVCS), o que significa que cada um dos usuários clona uma imagem do repositório e de seu histórico. Portanto, se o servidor desse repositório morrer e o trabalho for perdido, qualquer um dos usuários pode reverter a situação. Além disso, o DVCS permite que os repositórios remotos dos diferentes usuários trabalhem bem simultaneamente, garantindo diferentes dinâmicas de trabalho. Veremos uma forma de se fazer isso mais à frente na seção *Uso no Aurora v2*.

![img](/img/docs/glossario/git/dvcs.png)

Existe uma diferença básica na forma como o Git funciona em relação a outros VCSs. Muitos desses outros sistemas armazenam informação como uma lista de mudanças baseadas nos arquivos. Isso significa que eles armazenam a informação como um grupo de arquivos e as mudanças feitas neles ao longo do tempo - e por isso esse mecanismo é chamado de *delta-based version control*. Por outro lado, no Git a informação é pensada como uma série de fotos de determinados instantes do sistema. Cada vez que você faz um commit é tirada uma foto dos seus arquivos e armazenada uma referência daquela foto. Se não houve nenhuma mudança o Git não salva os mesmos arquivos de novo, mas sim um link para a versão desses arquivos já armazenada.

Outras características do Git:
- A maioria das operações depende apenas dos arquivos locais, portanto não é necessário acesso constante à internet.
- Como todo o histórico fica disponível localmente, a maioria das operações é praticamente instantânea.
- Tudo no Git passa por um [checksum](https://pt.wikipedia.org/wiki/Soma_de_verifica%C3%A7%C3%A3o) antes de ser armazenado no repositório e é então referenciado a partir desse checksum. Isso significa que é impossível mudar o conteúdo de algo sem que o Git saiba. 
    - O Git usa o algoritmo de hash SHA-1, que é uma string de 40 caracteres composta por hexadecimais determinada pelo conteúdo do arquivo ou do diretório. Tudo do Git é armazenado no banco de dados pelo valor hash, não pelo nome do arquivo.
- O Git geralmente apenas adiciona dados ao banco de dados. Depois de feito um commit, é difícil que a informação seja perdida. 
- Existem três estados em que os arquivos do Git podem existir: **modified**, **staged** e **commited**.
    - *Modified:* O arquivo foi modificado mas não foi commitado ao banco de dados ainda. 
    - *Staged:* O arquivo modificado foi marcado na versão atual para ser incorporado ao próximo commit.
    - *Commited:* O arquivo foi armazenado no banco de dados local.

Podemos então dividir um projeto Git em três seções principais: **working tree** (diretório de trabalho), **staging area** (área de preparação) e o **Git directory** (diretório Git).

![img](/img/docs/glossario/git/gitsections.png)

A working tree, localizada no disco local, é onde os arquivos provenientes do banco de dados do diretório do Git ficam disponíveis pra que você trabalhe.

A staging area é um arquivo contido no diretório Git que armazena informações sobre o que vai entrar no próximo commit. 

O Git directory é onde o Git armazena os metadados e banco de dados do seu projeto. Essa é a parte principal do Git e é o que é copiado quando você clona um repositório.

Em resumo, o trabalho com o Git ocorre da seguinte forma:
1. Você modifica arquivos na working tree.
2. Você prepara (stage) as mudanças que quer que façam parte do próximo commit, transferindo elas pra staging area.
3. Você commita os arquivos, o que pega eles na staging area e armazena uma foto deles no diretório Git.


## Comandos principais
- git init -> inicializa um diretório como repositório Git
- git clone [url] -> clona um repositório inteiro a partir do seu URL
- git status -> mostra arquivos novos, arquivos modificados, arquivos marcados pra commit
- git add [file] -> marca um arquivo pro próximo commit 
- git reset [file] -> remove o arquivo do próximo commit ao mesmo tempo em que mantém as mudanças
- git commit -m "[message]" -> commita os arquivos marcados 
- git log -> mostra todos os commits da branch atual
- git branch -> lista as branches; um * aparece do lado da branch atual
- git branch [branch-name] -> cria uma nova branch no commit atual
- git checkout -> troca pra outra branch
- git merge [branch] -> dá merge (mescla) da branch marcada na branch atual
- git push [alias] [branch] -> armazena os commits feitos na branch no diretório Git
- git pull -> busca e dá merge com o projeto local quaisquer commits que existam no diretório Git

Veja o cheat sheet completo [aqui](https://education.github.com/git-cheat-sheet-education.pdf).

## Git Workflow
É possível trabalhar apenas com uma única branch em projetos pessoais, porém nos projetos em que há uma equipe por trás do desenvolvimento é importante prestar atenção no que cada um dos desenvolvedores está trabalhando e usar mecanismos que auxiliem na produtividade e evitem erros. Um método de se fazer isso é usando o Git Workflow.

O Git Workflow define um modelo de ramificação do projeto com base em seu ciclo de lançamento. São atribuídas funções específicas para as diferentes ramificações e definido quando interagir com elas. As ramificações são: **master**, **develop**, **feature**, **release** e **hotfix**. Veremos sobre cada uma delas a seguir.

### Branches Principais
O repositório central (também chamado de *origin*) possui duas branches de existência infinita: **master** e **develop**. 

Na branch master fica o código em estado aprovado para produção (utilizado pelos usuários). A branch develop é inicialmente um clone da branch master e serve como ramificação para as branches de desenvolvimento. A develop também é chamada de branch de integração porque nela são integradas todas as mudanças preparadas para o próximo release. Quando o código da develop atinge um ponto estável e está pronto para ser liberado, é feito um merge dessa branch na master. Por definição, cada vez que esse merge é feito temos uma nova versão do software em produção.

![img](/img/docs/glossario/git/masterdevelop.png)

### Branches de Suporte
Além das branches principais, o Git Worflow conta com algumas branches de suporte que permitem o desenvolvimento paralelo do time de devs, o acompanhamento das novas features e uma resolução rápida de bugs que surgem na master. Essas branches têm todas um tempo de vida limitado, pois são deletadas depois de terem sido integradas nas branches principais. São 3: **feature**, **release** e **hotfix**. Cada uma possui um propósito específico, uma branch específica da qual elas devem se originar e uma outra específica para a qual elas farão o merge.

#### Feature branches
As branchs de feature se originam a partir da develop e fazem o merge também na develop. A convenção do nome é feature/[nomedafeature].  

Essas branches são usadas no desenvolvimento das features que incorporarão o projeto em releases futuras. A branch de feature existe enquanto essa feature estiver em desenvolvimento e, uma vez terminada, deve ser mergeada na develop.

![img](/img/docs/glossario/git/feature.png)

#### Release branches
As branches de release se originam a partir da develop e fazem o merge na develop e na master. A convenção do nome é release/[numerodaversao].

A branche de release é usada como estágio final antes de integrar todos os novos releases na branch master. É nela em que são feitos ajustes finais, como solução de pequenos bugs. 

Criamos uma branch de release quando a develop já está praticamente finalizada e o código está pronto pra ser integrado à produção. Todos os features necessários para a próxima release já devem ter sido mergeados na develop antes de criar a branch de release.

Depois das eventuais mudanças terem sido feitas na branch de release, ela deve ser mergeada na master (pois teremos uma nova versão do software). Além disso, também deve ser mergeada na develop para que essa branch contenha todas as pequenas modificações feitas na release.

![img](/img/docs/glossario/git/release.png)

#### Hotfix branches
As branches de hotfix se originam a partir da master e fazem o merge na master e na develop. A convenção do nome é hotfix/[nomedofix].

As branches de hotfix surgem da necessidade de se resolver rapidamente algum problema inesperado da branch master.

![img](/img/docs/glossario/git/hotfix.png)

### Visão Geral
A imagem abaixo reúne o fluxo de trabalho completo:

![img](/img/docs/glossario/git/fullworkflow.png)

## Uso no Aurora v2
O código necessário na aviônica é extensivo e deve compreender todos os sensores e módulos presentes no EPS e CDHS. Para isso, todos os membros se dedicam a alguma atividade e o Git Workflow é empregado. Temos branches de feature pra cada um dos módulos presentes nas placas.

![img](/img/docs/glossario/git/workflowrockets.jpg)

## Extensões VS Code
O VS Code já vem com todo o suporte necessário pra uso do Git e integração com o Github, porém algumas extensões podem ser instaladas para melhorar a experiência. As recomendadas são:
- Git Graph: mostra um gráfico do histórico do repositório Git.
- GitLens: mostra diversos detalhes do Git nos arquivos. 

## Referências
- https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control

- https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow

- https://nvie.com/posts/a-successful-git-branching-model/

- https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04