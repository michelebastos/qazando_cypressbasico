// <reference types="cypress" />
/* global Then, When, Given */

Given('que esteja na pagina do site', () => {
	cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
});

And('clique em Sign In', () => {
	cy.get('#SubmitLogin').click()
});

Then('O sistema deve efetuar o login com sucesso, me autenticando no site', () => {
	cy.get('.account > span')
        .should('be.visible')
        .should('have.text', global.usuario.nome)
    cy.get('[class=navigation_page]').should('have.text', 'My account')
});

Then('O sistema deve notificar o email que houve um problema na autenticação', () => {
	cy.get('[class="alert alert-danger"]').should('be.visible')
		.find('ol > li').should('have.text','Authentication failed.')
});
