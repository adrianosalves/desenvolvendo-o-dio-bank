Projeto desenvolvido com conceitos básicos de typescript

Tecnologias

    Typescript

Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências

npm install

3 - Execute o projeto

npm run dev

💳 Desafio: Sistema Bancário com TypeScript 

Implementação de um sistema bancário orientado a objetos em TypeScript, aplicando conceitos como encapsulamento, herança, imutabilidade e controle de acesso. 

✅ Requisitos Implementados 

    Classe base DioAccount com atributos privados e imutáveis (name, accountNumber).
    Métodos de depósito e saque com validações:
        Apenas contas ativas (status = true) podem operar.
        Saque só é permitido se houver saldo suficiente.
         
    Classe CompanyAccount com método de empréstimo, disponível apenas para contas ativas.
    Nova classe BonusAccount (herdando de DioAccount) que acrescenta R$10 a todo depósito realizado.
    Todos os atributos são privados; name e accountNumber são readonly (imutáveis).
    Arquivo app.ts com instâncias e testes de todos os tipos de conta, demonstrando o funcionamento dos métodos.     

🎯 Objetivos do Desafio 

    Aplicar boas práticas de programação orientada a objetos.
    Garantir segurança e consistência nas operações bancárias.
    Explorar herança e polimorfismo com sobrescrita de métodos.
     
