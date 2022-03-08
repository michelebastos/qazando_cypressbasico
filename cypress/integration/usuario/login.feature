#language:en
Feature: Login do usuario
    Eu como consumidor
    Quero poder realizar login de acesso ao site
    Para que eu possa realizar compras
    Scenario: Login com email valido
        Given que esteja na pagina do site
        When informe os dados de login com email válido
        And clique em Sign In
        Then O sistema deve efetuar o login com sucesso, me autenticando no site

    Scenario: Login com email valido, pressionando ENTER
        Given que esteja na pagina do site
        When informe dados de login com email válido, pressionado Enter após
        Then O sistema deve efetuar o login com sucesso, me autenticando no site

    Scenario: Login com email nulo
        Given que esteja na pagina do site
        When não preencha o campo email
        And clique em Sign In
        Then O sistema deve notificar o email que é necessário preencher o email

    Scenario: Login com senha errada
        Given que esteja na pagina do site
        When Informe um email válido
        And informe uma senha errada
        And clique em Sign In
        Then O sistema deve notificar que a senha digitada é inválida

    Scenario: Login com senha nula
        Given que esteja na pagina do site
        When Informe um email válido
        And não preencha o campo senha
        And clique em Sign In
        Then O sistema deve notificar o email que é necessário preencher a senha    
    Scenario: Login com email não cadastrado
        Given que esteja na pagina do site
        When Informe um email não cadastrado no site
        And clique em Sign In
        Then O sistema deve notificar o email que houve um problema na autenticação
    
    Scenario: Login com senha não cadastrado
        Given que esteja na pagina do site
        When Informe uma senha não cadastrada no site
        And clique em Sign In
        Then O sistema deve notificar o email que houve um problema na autenticação
