/// <reference types="cypress" />

export default class AuthencationElements {

    static btnAcessarAuthentication() {
        return cy.get('.login')
    }

    static labelUsuarioAuthenticado() {
        return cy.get('.account > span')
    }

    static painelNotificacaoErro() {
        return cy.get('div.alert.alert-danger')
    }

    static mensagensPainelNotificacaoErro() {
        return this.painelNotificacaoErro().find('ol > li')
    }

    static btnLogin() {
        return cy.get('#SubmitLogin')
    }

    static  inputEmailLogin() {
        return cy.get('#email')
    }

    static inputSenhaLogin() {
        return cy.get('#passwd')
    }
}