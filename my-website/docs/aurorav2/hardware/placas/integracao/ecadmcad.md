---
id: ecadmcad
title: ECAD + MCAD
sidebar_label: ECAD + MCAD
---

Após já termos todas as placas prontas no Altium chega o momento de se fazer a integração delas com a estrutura mecânica. Quem modela isso é o subsistema Mecânica, da Sats. Eles fazem a estrutura de PMM tanto para nós quanto para a Eletrônica e Experimentos da Sats.

## Versão preliminar #1
A primeira versão da integração foi feita com as placas exportadas no formato PARASOLID. Veja os resultados abaixo:

**Todas as placas**

![img](/img/docs/aurora/hardware/placas/integracao/ecadmcad/ecadmcad1.jpeg)

**Zoom no cubo de baixo**

![img](/img/docs/aurora/hardware/placas/integracao/ecadmcad/ecadmcad2.jpeg)

**Zoom no cubo de cima**

![img](/img/docs/aurora/hardware/placas/integracao/ecadmcad/ecadmcad3.jpeg)

**Problema no EPS**

![img](/img/docs/aurora/hardware/placas/integracao/ecadmcad/ecadmcad4.jpeg)

**Observações**

- Placas foram exportadas verdes.
- Problema no EPS não deveria acontecer, o objeto não está voador no Altium.
- Antena na RECB não deveria ficar exposta.
- Espessura das placas estava muito fina.

Para a próxima tentativa da integração as placas foram exportadas no formato Step3D. Elas foram abertas individualmente no Solid e foi observado que estavam pretas e o bug no EPS não continuou, portanto esse formato se mostrou melhor.

A espessura das placas foi aumentada pra 1.6mm. Esse valor foi determinado como padrão pela equipe. Para alterar isso no Altium, vá em Design » Layer Stack Manager.

Além disso, o modelo do GPS Featherweight foi alterado (a antena foi removida). Com isso modificado a board no Altium não contém mais a antena, evitando ter que excluí-la posteriormente na montagem completa no solid (o que estava exigindo muito da máquina).

## Versão preliminar #2
Essa versão possui todas as alterações comentadas anteriormente.

![img](/img/docs/aurora/hardware/placas/integracao/ecadmcad/ecadmcad5.JPG)

## Versão preliminar #3

![img](/img/docs/aurora/hardware/placas/integracao/ecadmcad/ecadmcad6.jpeg)

![img](/img/docs/aurora/hardware/placas/integracao/ecadmcad/ecadmcad7.jpeg)

Para as próximas versões:
- Incluir antenas
- Incluir cabos flat
## Versão final
:::caution
Em progresso!
:::