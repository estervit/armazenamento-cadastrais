## Armazenamento de Dados Cadastrais - turma setembro/2024

### Formulário de Cadastro 

## 📋 Detalhes sobre a Avaliação

Este projeto consiste em um sistema simples de **Formulário de cadastro**, desenvolvido em **JavaScript**, com manipulação de dados no **localStorage**. 
Ele segue o padrão de projeto **Factory** para criar instâncias dos cadastros e oferece funcionalidades básicas como: criar, consultar e deletar usuários diretamente pelo navegador.

A avaliação envolveu:

- Criação da interface do formulário.
- Consultar usuários cadastrados.
- Remover cadastros existentes.

## 📊 Avaliação

A avaliação do sistema foi feita com base nos seguintes critérios:

1. **Planejamento da Avaliação:** 
- Definição de Critérios: Inicialmente, foram definidos os critérios de avaliação, que incluíram  desempenho, uso do padrão factory e armazenamento no localStorage.
- Escopo da Avaliação: O foco foi em garantir que todas as funcionalidades essenciais do sistema, como cadastro, consulta e exclusão de usuários, fossem testadas.
2. **Testes de Funcionalidade:** 
- Cadastro de Usuários: Foram realizados testes para verificar se o formulário de cadastro funcionava corretamente.
- Consulta de Usuários: Testes foram feitos para garantir que a funcionalidade de consulta filtrasse corretamente os usuários com base nos critérios especificados (nome e e-mail).
- Exclusão de Usuários: Verificou-se se a exclusão de usuários funcionava como esperado, incluindo a confirmação da ação para evitar exclusões acidentais.
3. **Verificação do Padrão Factory:** 
- Revisão de Código: O código foi revisado para garantir que a implementação do padrão factory estivesse correta.
4. **Avaliação do Armazenamento no localStorage** 
- Persistência de Dados: Testou-se se os dados inseridos permaneciam acessíveis após o fechamento e reabertura do navegador, validando o uso do localStorage.
5. **Conclusões e Melhorias Futuras**
- Com base na avaliação, foram identificadas áreas de sucesso e oportunidades para melhorias futuras, como a implementação de novas funcionalidades ou ajustes na interface do usuário.

## 📍 Dificuldades Conhecidas

Durante o desenvolvimento, algumas dificuldades foram enfrentadas, como:

- Padrão Factory;
- JavaScript;
- Consultar e remover cadastros;

## 🚀 Como Utilizar o Sistema

Para utilizar o sistema, siga as instruções abaixo:

1. **Clone o repositório**
    ```bash
    git clone  https://github.com/estervit/armazenamento-cadastrais.git
    ```
2. **Abra o arquivo HTML(index.html) do sistema em um navegador compatível**

3. Cadastro de Usuários:
    - **Preencha os campos obrigatórios no formulário**
    - **Nome:** Insira seu nome completo.
    - **E-mail:** Digite um endereço de e-mail válido.
    - **Celular:** Informe seu número de telefone, apenas com dígito números.
    - **Data de Nascimento:** Selecione sua data de nascimento no campo apropriado.
    - Clique no botão **"Cadastrar"** para salvar os dados.

4. Listagem de Usuários: 
    - Após o cadastro, os usuários registrados serão exibidos em uma lista abaixo do formulário, mostrando nome e e-mail.
    - Utilize o campo de busca para encontrar usuários digitando parte do nome.
    - Clique no botão **"Buscar"** para filtrar a lista de usuários.

5. Exclusão de Usuários:
    - Para remover um usuário, clique no botão **"Deletar"** ao lado do nome do usuário desejado.
    - Confirme a exclusão na janela de confirmação que aparecerá.

6. Armazenamento de Dados: 
    - Os dados dos usuários são salvos no localStorage do navegador, então você pode fechar e reabrir o navegador sem perder as informações.

## 🛠️ Funcionalidades do Sistema:

- **Campos do Formulário**: 
  - `Cadastro`: Permite que novos usuários sejam registrados ao preencher o formulário com os dados acima.
  - `Listagem de Usuários`: Exibe todos os usuários cadastrados em uma lista, mostrando nome e e-mail.
  - `Consulta de Usuários`: Funcionalidade para pesquisar usuários pelo nome e e-mail, facilitando a localização de informações específicas.
  - `Exclusão de Usuários`: Permite a remoção de usuários da lista, com uma confirmação para evitar exclusões acidentais.
  - `Validaçao de Dados`: Realiza validações em campos de entrada, como verificar se o email possui formato correto e se o celular contém apenas números.
  - `Armazenamento Local`: Utiliza o localStorage do navegador para armazenar dados de usuários, garantindo que as informações persistam entre as sessões do navegador.

## 💻 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- ``Javascript``
- ``HTML``
- ``LocalStorage``

## Autor da Versão

**Ester Tavares** > [estervit](https://github.com/estervit)
**Estou ansiosa para ouvir suas impressões,sugestões e Feedback!** 