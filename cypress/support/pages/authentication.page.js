
/// <reference types="cypress" />

const AuthenticationElements = require('../elements/authentication.elements')

export default class AuthenticationPage {

   static clicarParaAcessar() {
        cy.visit('').then(()=>{
            return AuthenticationElements.btnAcessarAuthentication().click()
            .url().should('include','controller=authentication&back=my-account')
        })
    }

    static validarUsuarioAuthenticado() {
       return AuthenticationElements.labelUsuarioAuthenticado()
                .should('be.visible')
                .should('have.text',global.usuario.nome)
    }

    static existePainelErro(){
        return AuthenticationElements.painelNotificacaoErro()
                .should('be.visible')
    }

    static verificaTratamentoErro(mensagemValidacao){
        this.existePainelErro().then(()=>{
            return AuthenticationElements.mensagensPainelNotificacaoErro().each((mensagem) => {
                    expect(mensagem.text()).to.equal(mensagemValidacao)
            })
        })
    }

    static cliqueLogin() {
        return AuthenticationElements.btnLogin().click()
    }

    static digitarEmailLogin() {
        return AuthenticationElements.inputEmailLogin().type(global.usuario.email,{force:true})
    }

    static digitarSenhaLogin(options) {
        let senha = global.usuario.senha
        if (options) {
            if(options.enter) {
                senha = `${senha}{enter}`
            }
        }
        return AuthenticationElements.inputSenhaLogin().type(senha,{force:true})
    }

    static preencherDadosLogin(options) {
        return this.digitarEmailLogin().then(() => {
                this.digitarSenhaLogin(options)
        })
    }

}