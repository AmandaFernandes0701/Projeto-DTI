# Projeto DTI --> Caso Pet Shop 🐶🐾

Em resumo, este projeto realiza a seguinte ação: com base nos dados fornecidos pelo usuário, verifica qual Pet Shop oferece a melhor relação custo-benefício para o cliente, considerando os dados inseridos. Para a execução deste projeto, é válido enfatizar que atuei em duas frentes:

- Frontend que pode ser executado em um navegador da web.
- Código JavaScript que é executado no terminal.

## Sumário
- [Suposições Adotadas](#suposições-adotadas)
- [Decisões do Projeto](#decisões-do-projeto)
  - [Código Frontend](#código-frontend)
  - [Código Compilado no Terminal](#código-compilado-no-terminal)
- [Testes Unitários](#testes-unitários)
- [Instruções para Executar o Sistema](#instruções-para-executar-o-sistema)

## Suposições Adotadas

Ao desenvolver a solução para determinar o melhor pet shop para Eduardo levar seus cães com base em critérios de custo e proximidade, adotaram-se as seguintes suposições:

1. **Precificação Estável:** Considera-se que as informações de preços fornecidas para os pet shops "Meu Canino Feliz", "Vai Rex" e "ChowChawgas" permanecem constantes durante a execução do programa, independentemente de variações temporais não especificadas. Em outras palavras, os preços citados para os serviços de banho de cães pequenos e grandes não mudam além dos especificados para dias de semana e finais de semana.

2. **Custo-eficácia como Único Fator Preditivo:** O principal critério para determinar o melhor pet shop é o custo total do banho, considerando a distância até o canil de Eduardo e os preços para cães pequenos e grandes. Outros fatores, como qualidade do serviço, tempo de espera, disponibilidade ou comodidades adicionais que um pet shop possa oferecer, não são considerados.

3. **Informações de Localização Precisas:** A distância entre o canil de Eduardo e os pet shops (Meu Canino Feliz, Vai Rex e ChowChawgas) é fornecida com precisão e é estática. Fatores variáveis, como tráfego, que poderiam afetar o tempo de deslocamento real, não são considerados.

4. **Desempate Resolvido pela Proximidade:** Em caso de empate entre dois ou mais pet shops em termos de custo total, a decisão final será baseada na proximidade física. O pet shop mais próximo do canil de Eduardo será considerado o melhor em caso de empate.

5. **Entrada de Dados Correta Fornecida:** Supõe-se que o usuário inserirá as informações necessárias corretamente e no formato esperado, incluindo o tamanho dos cães (pequenos ou grandes) e a data em que pretende agendar o banho.

Essas suposições são essenciais para a execução correta do algoritmo de determinação do melhor pet shop e ajudam a estabelecer os critérios e limitações do sistema, fornecendo uma base sólida para a tomada de decisões.

## Decisões do Projeto

Ao longo da implementação do projeto, várias decisões foram tomadas com base em minhas preferências e conhecimento em áreas específicas. Portanto, optei por usar a linguagem JavaScript, pois é uma linguagem com a qual já estou familiarizada. Além disso, como mencionado anteriormente, decidi ir além do que foi proposto no caso e também implementei o frontend (responsivo e acessível). Assim, as decisões do projeto serão detalhadas em duas vertentes. Além disso, em relação à lógica das funções para calcular os preços, decidi usar a mesma função tanto para o código frontend executado no navegador quanto para o código JavaScript compilado no terminal. Essa decisão foi significativa para o desenvolvimento do projeto, pois economizou muito tempo.

Quanto à padronização do código, prestei atenção aos seguintes pontos:

- Estrutura e organização de pastas.
- Padronização de nomes de variáveis, pastas e arquivos gerais (CamelCase).
- Padronização de nomes de pastas e arquivos em "pages" (PascalCase).
- Configuração do Eslint + Prettier + Editor config.
- Linguagem padrão: Inglês.

### Código Frontend

Antes de tudo, decidi começar pelo design do sistema, uma vez que esta é uma das minhas partes favoritas. Por esse motivo, utilizei o Figma para testar diferentes designs e escolhi um design inspirado no site da Rocketseat. Gosto de cores de alto contraste e da combinação de roxo com preto, o que achei atraente. Para isso, inspecionei os elementos do site da Rocketseat para capturar valores específicos de cada componente.

[Site da Rocketseat](https://www.rocketseat.com.br/)

Em seguida, adicionei todos os botões e campos de entrada no arquivo JSX. Considerei usar uma biblioteca para obter componentes prontos, como Bootstrap ou Ant Design, para esses elementos, mas optei por criá-los manualmente, uma vez que eram relativamente simples. Depois, decidi construir tudo em uma única página para facilitar a identificação de erros, falhas na lógica e a compreensão geral do código. A seguir, criei uma lógica para incrementar ou decrementar o número de cães quando os botões eram clicados.

Também adicionei algumas configurações do Eslint e do Prettier para agilizar meu trabalho e melhorar a padronização e estética do código. Além disso, criei uma pasta "Themes" no diretório "styles" para simplificar os ajustes de estilo com base no tema da aplicação web.

Após isso, comecei a estruturar a lógica do sistema. Inicialmente, testei se a função estava obtendo corretamente os dados. Para fazer isso, usei uma extensão chamada "Console Ninja", que exibe convenientemente os resultados do `console.log` diretamente no Visual Studio Code. Comecei calculando os valores apenas para "Meu Canino Feliz" para garantir que os resultados estivessem corretos. Em seguida, desenvolvi as funções para calcular os preços para "Vai Rex" e "ChowChawgas". Como ainda não havia realizado testes unitários até então, calcule

i manualmente alguns valores e os comparei com o que era impresso no console. Quando confirmei que os resultados correspondiam ao esperado, comecei a trabalhar na lógica de priorização com base na distância. Para implementar essa funcionalidade, decidi criar um objeto para cada um dos pet shops. Esses objetos continham as seguintes informações: "name," "price," e "distance." Em seguida, criei uma função que gerava uma matriz com os objetos que tinham os menores valores (em caso de empate). A partir disso, chamei uma função para ordenar essa matriz em ordem crescente com base no valor da distância contida em cada um desses objetos.

Depois de inúmeros testes e ajustes, fiz algumas alterações no estilo para melhorar a responsividade do frontend. Até esse momento, ele era responsivo para todos os tamanhos de tela maiores que a largura do Galaxy Fold (280px). No futuro, pretendo aprimorar o código e reduzir o número de consultas `@media` e elementos `<div>` desnecessários.

Por fim, tive a ideia de usar toasts para tornar o sistema mais dinâmico e atraente. Para isso, utilizei uma biblioteca chamada React-Toastify. Li a documentação e busquei maneiras de estilizar os toasts para combinar com as cores do tema da aplicação web.

Também estava considerando adicionar uma imagem ao lado do título, para o qual pesquisei imagens no site [Storyset](https://storyset.com/dog). No entanto, devido a limitações de tempo, optei por adiar isso e me concentrar na criação do código compilado no terminal, pois é um requisito fundamental do caso.

No futuro, pretendo estilizar o seletor de datas usando a biblioteca Material Design, disponível [aqui](https://m3.material.io/components/date-pickers/specs). Não fiz isso na época devido a restrições de tempo.

### Código Compilado no Terminal

Assim que terminei de criar o código frontend executado no navegador, comecei a trabalhar no código compilado no terminal. Como já tinha uma função pronta, pude concluir essa parte muito mais rapidamente. Decidi criar um arquivo chamado `terminalFunction.js` exclusivamente para compilar o código no terminal. Como eu só tinha experiência em executar código pelo terminal usando C++, fazer um código JavaScript dessa maneira foi uma experiência enriquecedora e desafiadora.

O primeiro desafio que encontrei foi como compilar o código corretamente no terminal. Portanto, pesquisei e encontrei uma maneira interessante de fazer isso. Usei a função `readline.createInterface` e instalei algumas dependências necessárias. Em seguida, fiz as adaptações necessárias e testei o código várias vezes.

Finalmente, quando estava funcionando perfeitamente, decidi explorar maneiras de estilizar o terminal e torná-lo visualmente atraente. Percebi que poderia aprimorar ainda mais o código, então fiz o seguinte:

- Restringir o formato da entrada de data pelo usuário. Para isso, usei uma biblioteca chamada `date-fns`.
- Permitir que o usuário chame a função novamente após sua conclusão (se desejar).

## Testes Unitários

Finalmente, quando concluí o código para compilação, comecei a escrever testes unitários. Decidi não realizar testes extensivos, pois calcular manualmente os valores esperados consumiria muito tempo. Para executar o arquivo `calculatePrices.test.js`, tive que configurar o Babel. Instalei a biblioteca `jest` para realizar os testes e adicionei o comando "test" no arquivo `package.json`.

## Instruções para Executar o Sistema

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório para a sua máquina local:
   ```bash
   https://github.com/AmandaFernandes0701/Projeto-DTI.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Projeto DTI - Amanda
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Para iniciar o servidor de desenvolvimento e visualizar a aplicação localmente, execute:
   ```bash
   npm run dev
   ```

5. Se desejar executar o código pelo terminal, navegue até o seguinte diretório:
   ```bash
   Projeto DTI - Amanda\src\functions\terminalFunction.js
   ```

6. Após chegar ao diretório mencionado no passo 5, você pode executar o seguinte comando no terminal:
   ```bash
   node terminalFunction.js
   ```

7. Para executar testes unitários, utilize o seguinte comando:
   ```bash
   npm test
   ```


## Instruções para Executar o Sistema

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório para a sua máquina local:
   ```bash
   https://github.com/AmandaFernandes0701/Projeto-DTI.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Projeto DTI - Amanda
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Para iniciar o servidor de desenvolvimento e visualizar a aplicação localmente, execute:
   ```bash
   npm run dev
   ```

5. Se desejar executar o código pelo terminal, navegue até o seguinte diretório:
   ```bash
   Projeto DTI - Amanda\src\functions\terminalFunction.js
   ```

6. Após chegar ao diretório mencionado no passo 5, você pode executar o seguinte comando no terminal:
   ```bash
   node terminalFunction.js
   ```

7. Para executar testes unitários, utilize o seguinte comando:
   ```bash
   npm test
   ```
