# Mapa do Agbê

Protótipo web para visualizar um Agbê em 3D e criar uma carta de distribuição de miçangas sobre a rede do instrumento.

O projeto gera a cabaça, os cordões e as miçangas proceduralmente com [Three.js](https://threejs.org/). Também permite exportar o modelo para formatos usados por programas de modelagem 3D.

## Funcionalidades

- Visualização interativa do Agbê em 3D.
- Rotação, aproximação e deslocamento da câmera.
- Editor visual da carta de miçangas.
- Alteração da quantidade de linhas da rede.
- Aplicação de padrões predefinidos.
- Persistência local do desenho no navegador.
- Exportação da carta como PNG.
- Exportação do modelo como OBJ + MTL ou GLB.

## Estrutura do projeto

```text
.
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
2. Clique ou arraste sobre a carta para colocar miçangas.
3. Use `Alt` ou o botão direito para apagar.
4. Use `Shift` enquanto pinta para preencher uma fiada inteira.
5. Ajuste a quantidade de linhas para recalcular a rede.
6. Ative ou desative a exibição dos cordões.
7. Use os padrões disponíveis para restaurar rapidamente uma composição.

O desenho é salvo automaticamente no `localStorage` do navegador. Esse conteúdo é local ao navegador e à origem utilizada para abrir o projeto.

## Controles do modelo 3D

- Arrastar: orbitar o modelo.
- Roda do mouse ou gesto de pinça: aproximar e afastar.
- Botão direito + arrastar: deslocar a câmera.
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
3. persistência após recarregar a página;
4. exportação de PNG, OBJ/MTL e GLB;
5. comportamento em telas estreitas e com diferentes densidades de pixel.

## Licença

Este repositório ainda não declara uma licença de uso. Antes de distribuir o código, as fontes ou os materiais da identidade visual, confirme as permissões aplicáveis com a equipe responsável pelo Bongarbit.
