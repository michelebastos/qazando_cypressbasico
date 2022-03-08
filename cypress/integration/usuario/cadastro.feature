#language:en
Feature: Cadastro de usuario
    Eu como consumidor 
    Quero poder realizar o cadastro de usuario
    Para que eu possa acessar o site
    Scenario: Cadastro de usuario com email valido
        Given que eu esteja no site da loja
        When clico em cadastrar usuario
        And informo meu email
        And preencho todo dados cadastrais obrigatórios
        Then O sistema realize meu cadastro de usuario, me autenticando no site
    
    Scenario: Cadastro de usuario com email invalido
        Given que eu esteja no site da loja
        When tente informar um email invalido
        Then O sistema deve exibir mensagem impeditiva: email é invalido

    Scenario: Cadastro de usuario com email já cadastrado no site
        Given que eu esteja no site da loja
        When tente informar um email já cadastrado
        Then O sistema deve exibir mensagem impeditiva informando que o email já foi cadastrado