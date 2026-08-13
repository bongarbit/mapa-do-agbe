# Mapa do Agbê

Editor web para planejar a rede de um Agbê, desenhar a distribuição de miçangas e conferir o resultado em um modelo 3D interativo.

O projeto gera a cabaça, os cordões e as miçangas proceduralmente com [Three.js](https://threejs.org/). Também permite exportar o modelo para formatos usados por programas de modelagem 3D.

## Acesso online

O editor publicado no GitHub Pages está disponível em:

<https://bongarbit.github.io/mapa-do-agbe/>

## Funcionalidades

- Mapa editável da cabaça aberta, com o traçado diagonal das linhas.
- Visualização 3D sincronizada com o mapa de miçangas.
- Controle do número de pontos na argola e do tamanho da cabaça.
- Ajuste da quantidade de miçangas entre nós em cada fiada.
- Paleta Bongarbit expansível e criação de cores personalizadas.
- Padrões de exemplo, listras e preenchimento completo.
- Persistência automática do desenho e da paleta no navegador.
- Exportação do mapa como PNG.
- Exportação e importação do projeto no formato `.agbe`.
- Interface móvel com abas para alternar entre mapa e modelo 3D.
- Exportação do modelo como OBJ + MTL ou GLB.

## Estrutura do projeto

```text
.
├── index.html         # Entrada do GitHub Pages
├── agbe.html          # Visualizador do modelo 3D
├── agbe-carta.html    # Editor da carta de miçangas e visualização 3D
├── three-d-stage.js   # Componente de cena, câmera e exportação
└── _ds/               # Design system, tokens e fontes do Bongarbit
```

## Como executar

O projeto não possui etapa de compilação nem dependências locais. É necessário apenas um navegador moderno e um servidor HTTP local.

Na raiz da pasta, execute:

```bash
python3 -m http.server 8000
```

Depois, abra no navegador:

- Visualizador 3D: <http://localhost:8000/agbe.html>
- Editor da carta: <http://localhost:8000/agbe-carta.html>

Evite abrir os arquivos diretamente com `file://`, pois os módulos JavaScript podem ser bloqueados pelas regras de segurança do navegador.

## Como usar o editor

Em `agbe-carta.html`:

1. Escolha uma cor na paleta.
2. Clique, toque ou arraste sobre as casas editáveis do mapa para colocar miçangas.
3. Selecione **vazio** para retirar miçangas.
4. Ajuste os pontos na argola e o tamanho da cabaça para recalcular a rede.
5. Use os botões `−` e `+` da tabela para alterar as miçangas entre nós em cada fiada.
6. Ative ou desative a exibição das linhas e do traçado sobre o mapa.
7. Use **Mais cores** para habilitar outras cores Bongarbit ou adicionar uma cor personalizada.
8. Use os padrões disponíveis para iniciar ou limpar rapidamente uma composição.

Em telas sensíveis ao toque, um dedo pinta e dois dedos deslocam o mapa. As barras de rolagem também podem ser usadas para navegar. As abas **Mapa** e **Modelo 3D** alternam entre as duas visualizações em telas estreitas.

O desenho é salvo automaticamente no `localStorage` do navegador. Esse conteúdo é local ao navegador e à origem utilizada para abrir o projeto.

## Salvar e compartilhar projetos

- **Baixar mapa** gera uma imagem PNG do desenho.
- **Exportar projeto** salva parâmetros, paleta e miçangas em um arquivo `.agbe`.
- **Importar projeto** restaura um arquivo `.agbe` exportado anteriormente.

O arquivo `.agbe` usa JSON e pode ser armazenado, enviado para outra pessoa ou aberto novamente no editor. A importação substitui o projeto atualmente carregado no navegador.

## Controles do modelo 3D

- Arrastar: orbitar o modelo.
- Roda do mouse ou gesto de pinça: aproximar e afastar.
- Botão direito + arrastar: deslocar a câmera.
- Controle **girando**: ativa ou desativa a rotação automática no editor.
- `Download OBJ + MTL`: exportar geometria e materiais básicos.
- `Download GLB`: exportar o modelo em glTF binário.

As dimensões do modelo usam metros e o eixo vertical é `Y`.

## Dependências

O Three.js `0.184.0` e seus módulos auxiliares são carregados pelo [unpkg](https://unpkg.com/) por meio de um import map. Por isso, a primeira execução requer acesso à internet.

Módulos utilizados:

- `three`
- `OrbitControls`
- `OBJExporter`
- `GLTFExporter`

## Identidade visual

A pasta `_ds/` contém o design system do Bongarbit, incluindo:

- paleta institucional;
- tipografia The Mix Mono;
- tokens de espaçamento e efeitos;
- orientações editoriais e de aplicação da marca.

Consulte o arquivo `_ds/.../readme.md` antes de criar novas telas ou peças visuais.

## Limitações atuais

- Não há testes automatizados.
- Não existe processo de build ou empacotamento para uso offline.
- Parte da geração procedural está duplicada entre os dois HTMLs.
- Redes muito densas podem exigir bastante memória e processamento.
- A exportação OBJ representa materiais de forma simplificada.

## Desenvolvimento

Ao modificar o projeto, verifique pelo menos:

1. carregamento das duas páginas sem erros no console;
2. interação com câmera e editor;
3. persistência do mapa e da paleta após recarregar a página;
4. exportação e importação de `.agbe`;
5. exportação de PNG, OBJ/MTL e GLB;
6. pintura e deslocamento do mapa em telas sensíveis ao toque;
7. comportamento em telas estreitas e com diferentes densidades de pixel.

## Licença

Este repositório ainda não declara uma licença de uso. Antes de distribuir o código, as fontes ou os materiais da identidade visual, confirme as permissões aplicáveis com a equipe responsável pelo Bongarbit.
