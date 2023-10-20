# Projeto-DTI --> Case Pet Shop  🐶🐾
Em suma, o projeto realiza a seguinte ação: a partir dos dados fornecidos pelo usuário, ele checa qual  Pet Shop propõem o melhor custo benefício para o cliente a partir dos dados inseridos. Para a realização desse projeto, é válido salientar que eu atuei em duas frentes:

- Frontend que pode ser executado no navegador
- Arquivo js que é executado no próprio terminal

## Sumário
- [Premissas Assumidas](#premissas-assumidas)
- [Decisões de projeto](#decisoes-de-projeto)
- [Instruções para executar o sistema](#instrucoes-para-executar-o-projeto)

## Premissas Assumidas

Ao desenvolver a solução para determinar o melhor petshop para Eduardo levar seus cães com base nos critérios de custo e proximidade, foram adotadas as seguintes premissas:

1. **Precificação Estável:** Considera-se que as informações de preços fornecidas para os petshops Meu Canino Feliz, Vai Rex e ChowChawgas permanecem constantes durante a execução do programa, independentemente de variações temporais não especificadas. Ou seja, os preços citados para os serviços de banho para cães pequenos e grandes não sofrem alterações além das mencionadas nos dias de semana e finais de semana.

2. **Custo-eficácia como Fator Preditivo Único:** O principal critério para determinar o melhor petshop é o custo total do banho, considerando a distância ao canil de Eduardo e os preços para cães pequenos e grandes. Não são considerados outros fatores, como qualidade do serviço, tempo de espera, disponibilidade ou comodidades adicionais que um petshop possa oferecer.

3. **Informações de Localização Precisas:** A distância entre o canil de Eduardo e os petshops (Meu Canino Feliz, Vai Rex e ChowChawgas) é fornecida com precisão e estática. Não são considerados fatores variáveis, como tráfego, que poderiam afetar o tempo de deslocamento real.

4. **Empate Resolvido pela Proximidade:** Em caso de empate entre dois ou mais petshops em termos de custo total, a decisão final será baseada na proximidade física. O petshop mais próximo do canil de Eduardo será considerado o melhor em caso de empate.

5. **Entrada de Dados Corretamente Fornecida:** É assumido que o usuário inserirá as informações necessárias de maneira correta e no formato esperado, incluindo o tamanho dos cães (pequenos ou grandes) e a data que pretende agendar o banho.

Essas premissas são essenciais para a correta execução do algoritmo de determinação do melhor petshop e ajudam a estabelecer os critérios e limitações do sistema, proporcionando uma base sólida para a tomada de decisão.

## Decisões de projeto
Ao longo da implementação do projeto, foi-se necessário a tomada de várias decisões de acordo com as minhas preferências, assim como as áreas de conhecimento nas quais eu já havia um bom "background". Desse modo, eu decidi utilizar a linguagem JavaScript, uma vez que essa é a linguagem na qual eu já estou familiarizada. Além disso, como já foi citado anteriormente, eu decidi ir além do que havia sido proposto pela case e também implementei o Frontend (responsivo e acessível). Desse modo, a decisão de projetos será distrinchada em duas vertentes. Outrossmim, no que diz respeito da lógica das funções para calcular os preços, eu decidi usar a mesma função tanto pro código do Frontend que é executado no navegador, quanto no código js que é compilado no próprio terminal. Essa decisão foi um fator muito importante na minha tomada de decisões pois me poupou muito tenpo.

Em relação à padronização do código, eu tive cuidado com os seguintes pontos:

- Estrutura e Oganização de pastas
- Padronização de nome de variáveis (CamelCase)
- Configuração do Eslint + Prettier

### Código Frontend
Antes de tudo, eu optei por começar pelo design do meu sistema, dado que essa é umas das minhas partes prediletas. Dessa forma, eu utilizei o figma para fazer alguns testes e decidir qual seria a proposta do meu design. Por fim, acabei optando por me inspirar no site da Rocketseat, pois eu gosto de cores com alto contraste, além de adorar a combinação do roxo com preto! Pra isso, eu inspecionei os elementos do site para que eu pudesse pegar os valores específicos de cada um dos componentes.

Link do site da Rocketseat: https://www.rocketseat.com.br/

Por conseguinte, eu adicionei todos os botões e inputs no arquivo jsx. Eu cogitei a ideia de usar alguma biblioteca ´ra pegar esses componentes já prontos, como o Bootstrap ou antd, por exemplo. Contudo, no fim acabei optando em fazer manualmente, já que eram coisas simples. Após isso, decidi que eu iria fazer tudo na mesma página, pra facilitar indentificação de bugs, erros de lógica e compreensão do código, de forma geral. Em seguida, eu criei uma lógica pra incrementar ou decrementar a quantidade de cachorros quando os botões fossem clicados. Depois disso, adicionei algumas configurações do eslint e do prettier pra facilitar o meu trabalho e melhorar a padronização / estética do código. Depois disso, eu decidi criar um Themes na pasta styles pra facilitar a estilização da página (caso eu queira mudar alguma estilização futuramente).

Depois disso, eu comecei a estrturar a lógica do sistema. Eu comecei testando se a função estava pegando os dados corretament. Pra fazer isso, eu usei uma extensão chamada "console Ninja", ela é muito prática pois já mostra o resultado do console.log no poróprio código no VSCODE. Eu comecei calculando aoenas os valores do "Meu Canino Feliz" pra ter certeza que os resultados estavam corretos. Em seguida, eu montei as funções pra calcular o "Vai Rex" e "ChowChawgas". Como eu não tinha feito o teste unitário até então, eu calculei alguns valores na calculadora e fui comparando com o que estava sendo impresso no console. Quando eu vi que os resultados estavam batendo com o esperado, eu comecei a elaborar a lógica de prioridade com base na distância. Pra implementar essa função, eu decidi criar um objeto pra cada um dos Pet Shops. Esse objetos contém as seguintes informações: name, price e distance. A partir disso eu criei uma função que criava um vetor com os objetos que apresentassem os menores valores (em caso de empate) e partir disso eu chamei uma função pra ordenar esse vetor em ordem crescente com base no valor da distância.

Depois de muitos e muitos testes, eu comecei a mudar algumas coisas no Styles a fim de ajustar a responsividade do frontend. Até então ele é responsivo para todos os tamanhos de tela superiores ao tamanho do galaxy fold (width = 280px). Futuramente eu desejo melhorar o código e diminuir a quantidade de @medias, assim como a quantidade de div's desnecessárias.

### Código compilado no Terminal

## Instruções para executar o sistema
Para executar este projeto localmente, siga os seguintes passos:

1. Clone o repositório para a sua máquina local:
   ```bash
     git clone https://github.com/AmandaFernandes0701/Frontend-SmartGym---Projeto-Trainee.git
   
2. Navegue até o diretório do projeto:
   ```bash
    cd SmartGym

3. Instale as dependências do projeto:
   ```bash
    npm install

4. Para iniciar o servidor de desenvolvimento e visualizar a aplicação localmente, execute:
   ```bash
    npm start

