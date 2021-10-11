---
id: contribuindo_docs
title: Contribuindo com a documentação
sidebar_label: Contribuindo com a documentação
---
*Escrito por Gabriel Aleksandravicius*

Uma documentação de qualidade é essencial para que tenhamos o projeto bem organizado. Além disso, ao documentarmos nestas páginas conseguimos ter acesso rápido a textos e imagens - coisa que muitas vezes é demorado pelo Google Drive. Aqui, tudo está centralizado, dividido em seções e de acesso rápida através da ferramenta de search.

O objetivo desta página é explicar como que um membro da aviônica pode colaborar com a documentação.

## Repositório e permissões
A documentação está armazenada neste repositório do GitHub: https://github.com/gabrielaleks/avionicsdocumentation. O gerente possui permissões totais para commitar e fazer o deploy. Os membros, por outro lado, devem fazer um pull request solicitando que sua colaboração com a documentação seja de fato implementada. Veremos o passo-a-passo de como se fazer isso.

## Mudando a partir da interface
### Fazendo o fork

1. Vá para a página que você deseja alterar, role até o final e clique em *edit this page*.
![img](/img/docs/gerenciamento/edit_from_page.png)

2. Você será trazido para uma página de edição do arquivo .md correspondente àquela página. O GitHub te avisará que você não tem permissão para alterar o arquivo diretamente, portanto quaisquer mudanças feitas gerarão um repositório seu que é um fork desse repositório original. 

![img](/img/docs/gerenciamento/changing_in_github.jpg)

*Observação: um fork nada mais é do que uma cópia de um repositório. Esse recurso é útil pois te permite fazer modificações em um projeto que você não tem acesso e depois submetê-las aos maintainers do repositório original*

3. Faça suas alterações. Depois, escreva uma [boa mensagem de commit](https://www.lucascaton.com.br/2017/10/16/como-escrever-mensagens-de-commits-no-git) e clique em *Propose changes*.

![img](/img/docs/gerenciamento/proposing_changes.png)

4. Uma página desse tipo será exibida:

![img](/img/docs/gerenciamento/diff_complete.jpg)

Vamos analisar um item de cada vez:

i. Parte superior: Aqui é dito que as mudanças estão sendo comparadas. No Git, as comparações são feitas sempre entre códigos em momentos e/ou repositórios distintos. Neste caso, estamos comparando uma branch do repositório de fork com uma branch do repositório original. O GitHub está chamando eles de head repository e base repository, respectivamente. Perceba que nas caixas maiores estão os nomes dos repositórios (gabrielaleks/avionicsdocumentation e alksgbrl/avionicsdocumentation) e nas caixas menores estão os nomes das branches (master e patch-6). Sempre que você escolher fazer uma modificação pela interface uma nova branch de patch é gerada, logo as próximas seriam patch-7, patch-8 etc. Por fim, o final está o botão de abrir o pull request. Você só vai apertá-lo quando já tiver feito todas as modificações que quiser. Portanto, se uma página requer texto e imagem, você fará diferentes commits - um pro texto, outro pra imagem 1, outro pra imagem 2 etc - porém só **um** pull request deve ser aberto.

![img](/img/docs/gerenciamento/diff_comparing.jpg)

ii. Embaixo estão todas as diferenças entre a branch patch-6 e master. Só devem ter aqui as modificações feitas por você.

![img](/img/docs/gerenciamento/diff_changes.jpg)

### Abrindo o Pull Request
Se já tiver tudo certo, clique no botão para abrir o pull request. Uma página semelhante à anterior será aberta, porém agora você deve escrever o nome do pull request e fazer uma breve descrição do que ele implementa à documentação.

![img](/img/docs/gerenciamento/pull_request.jpg)

Clique no botão para finalmente abrir o pull request e submetê-lo para revisão. 

Você será trazido para a seção de pull requests do repositório original. Avise o gerente de que seu pull request foi feito. Quando ele tiver finalizado a revisão, duas situações são possíveis:
- Seu pull request foi aceito! Isso significa que suas mudanças foram mergeadas no repositório original e que no próximo deploy elas serão visíveis no site 🥳
- Algumas modificações foram requisitadas no seu pull request. Faça as edições pelo GitHub, resolva os pedidos de revisão e avise novamente o gerente. 

### Criando pastas

O Git não permite a criação de pastas vazias. Caso você precise criar alguma pasta para colocar suas imagens, por exemplo, você deve fazer duas etapas: criar a pasta e inserir as imagens nela. 

*Obs: A estrutura de diretórios das imagens (dentro de mywebsite/static/img/docs) deve ser a mesma dos arquivos de texto (mywebsite/docs)*

Vá até o diretório onde você quer criar a pasta e selecione *Add file* > *Create new file*

![img](/img/docs/gerenciamento/create_file.png)

Uma página de criação de arquivo será aberto. Na caixa da parte superior você dá o nome do arquivo e sua extensão. Além disso, você pode também criar um diretório. Para isso, escreva o nome que você quer e coloque '/' depois. Por fim, é necessário que exista um arquivo dentro do diretório (como comentamos, o Git não reconhece diretórios vazios). Para isso, crie um arquivo chamado .gitkeep. Não escreva nada nele, só crie e faça o commit. Pronto, agora a pasta existe e você já pode inserir imagens nela.

Por exemplo, para criar um diretório chamado *gerenciamento*:

![img](/img/docs/gerenciamento/create_folder.png)

Para inserir imagens, clique em *Add file* > *Upload files*.

## Mudando a partir do GitHub
Se preferir, você pode criar o fork diretamente pelo GitHub ao invés de ter que começar pela interface. Todas as etapas depois do fork são as mesmas já comentadas, a única diferença é o começo.

1. Vá para o repositório original da documentação.
2. Clique em fork, em cima à direita. Isso criará um fork seu do repositório caso você ainda não tenha um.
3. Agora você não está mais no repositório original, mas sim no seu. Faça as modificações na branch master ou crie uma branch a partir dela e mude lá.
4. Abra o pull request

*Obs: com o tempo seu repositório ficará desatualizado, pois a documentação é constantemente modificada. Para colocar seu repositório em dia, clique em Fetch upstream > Fetch and merge.*

## Referências
- [Precisamos falar sobre Pull Request](https://gomex.me/2020/07/05/precisamos-falar-sobre-pull-request/)
- [Como fazer um Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)