---
id: protocolodecomm
title: Protocolo de Comunicação
sidebar_label: Protocolo de Comunicação
---

*Última atualização: 03/05/21*

No dia 03/05/21 foi feita uma reunião com a Instrumentação em que eles nos apresentaram o status atual e quais os próximos passos do protocolo de comunicação.

- Apresentação do [documento](https://docs.google.com/document/d/1zuk_TY127mGUDEY55hSPuv22tPVbvvV6rMdJWjkgwh0/edit) que trata da implementação das redes de comunicação.
- Apresentação do [diagrama de classes](https://drive.google.com/file/d/1gCOs9jzGchNZeXSdlzWi70HsHZGxAhgl/view).
- O essencial desses dois documentos é compreender as pilhas de protocolos, suas camadas e como elas se traduzem no código.
    - Do nível mais baixo para o mais alto:
        - Camada Física: Camada onde é feito o envio/recebimento dos bits pelo LoRa.
        - Camada de Enlace: Estabelece a interconexão, endereçamento, confirmação de recebimento e controle de erro.
        - Camada de Aplicação: Controla cada processo específico.
    - Essas 3 camadas são definidas em 2 classes. Camada Física + Camada de Enlace compõem a classe PhysicalPacket. Camada de Aplicação compõe a classe ApplicationPacket. Há uma terceira classe, DataPacket, que contém os dados enviados.
    - O pacote enviado é composto por 3 structs aninhados. O mais externo possui dados da camada física/enlace. O intermediário possui dados da camada de aplicação. O mais interno possui os dados de real interesse.

    ![img](/img/docs/aurora/software/comm/pilhadeprotocolos.jpg)
    ![img](/img/docs/aurora/software/comm/comm_classes.jpg)


- Todos os pacotes devem conter um dado de endereçamento na camada física. Isso vai determinar o remetente específico daquele pacote, evitando que pacotes não interessantes para certo módulo sejam inteiramente processados.
- O cálculo de checksum é realizado na camada física/enlace. Está em aberto qual algoritmo implementar. Entre CRC, MD5 e SHA1, CRC provavelmente é a melhor escolha visto que nossa maior preocupação é a verificação de erros, não segurança. Além disso, sua implementação é mais fácil que das outras. Referência: [Guia de CRC](https://archive.org/stream/PainlessCRC/crc_v3.txt).
- Ainda está em aberto se haverá algum tipo de criptografia. 
- Não haverão pacotes diferentes para cada dado, mas um pacote único contendo toda informação. Sua taxa de envio deve ser 1 Hz.
- Envio de array de floats.

## Status atual
- Já é possível enviar e ler um struct pelo RS485. 

## Proximos passos
### Instrumentação
- Testar no LoRa.
- Testar o aninhamento de três structs com o envio de dados genéricos. 
- Testar três structs com dados específicos de cada camada mas sem usar.
- Testar três structs com dados específicos de cada camada. Utilizar esses dados da maneira como o protocolo pede.

### Aviônica
- Continuar código dos sensores. 
- Fazer código do LoRa, preparando classes responsáveis pelas camadas.
- Fazer código do Manager, tornando-o apto a montar pacote e enviá-lo.
