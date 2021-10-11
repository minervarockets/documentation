---
id: dicasgerais
title: Dicas gerais
sidebar_label: Dicas gerais
---

## Altium
### Imagens
- É possível gerar uma imagem de alta qualidade da PCB 3D no Altium. Pra isso, dentro do arquivo .pcbdoc aperte ctrl+c. Uma janela intitulada "3D Snapshot Resolution" vai aparecer. Selecione a resolução mais alta e aperte "OK". A imagem vai ficar na sua clipboard, pra visualizá-la abra o paint e aperte ctrl+v.

- Geralmente queremos colocar uma imagem dos esquemáticos em nossos documentos. O problema é que um print resulta numa imagem de baixa qualidade que não dá pra ser interpretada direito. Para resolver isso, exporte o esquemático como PDF (File > Smart PDF) e depois converta o PDF pra JPG [aqui](https://pdftoimage.com/pt/). O resultado é uma imagem de resolução muito superior ao print.

## VS Code
### Extensões
- A extensão C/C++ é nativa ao VS Code e é ela que usamos quando desejamos formatar o código. Nesse caso, clicamos com o botão direito na página e selecionamos a opção "Format Document". A indentação será corrigida, espaços desnecessários serão removidos etc. O formato padrão dessa formatação dedica uma linha pra cada chaves:

```cpp
void setup() 
{
    Serial.begin(9600);
    Serial.println("Chaves com linha exclusiva");
}

void loop()
{
    if (...)
    {
        ...
    }
    else
    {
        ...
    }
}
```

Para mudar isso e fazer com que as chaves fiquem na mesma linha vá em *File > Preferences > Settings* e coloque "C_Cpp.clang_format_fallbackStyle" na barra de pesquisa. Um item chamado *C_Cpp: Clang_format_fallback Style* vai aparecer. Troque "Visual Studio" por "{ BasedOnStyle: Google, IndentWidth: 4 }". Agora a formatação deixará as chaves assim:

```cpp
void setup() {
    Serial.begin(9600);
    Serial.println("Chaves na mesma linha");
}

void loop() {
    if (...) {
        ...
    } else {
        ...
    }
}
```

*[Referência](https://stackoverflow.com/questions/46111834/format-curly-braces-on-same-line-in-c-vscode)*