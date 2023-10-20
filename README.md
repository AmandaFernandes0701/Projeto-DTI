# Projeto-DTI --> Case Pet Shop  🐶🐾
Em suma, o projeto realiza a seguinte ação: a partir dos dados fornecidos pelo usuário, ele checa qual  Pet Shop propõem o melhor custo benefício para o cliente a partir dos dados inseridos. Para a realização desse projeto, é válido salientar que eu atuei em duas frentes:

- Frontend que pode ser executado no navegado
- Arquivo js que é rodado no próprio terminal

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

5. **Entrada de Dados Corretamente Fornecida:** É assumido que o usuário inserirá as informações necessárias de maneira correta e no formato esperado, incluindo o tamanho dos cães (pequenos ou grandes) e o dia da semana em que pretende agendar o banho.

Essas premissas são essenciais para a correta execução do algoritmo de determinação do melhor petshop e ajudam a estabelecer os critérios e limitações do sistema, proporcionando uma base sólida para a tomada de decisão.

## Decisões de projeto
aaaaaaaaa

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

