/// <reference types="cypress" />
/* global Then, When, Given */

const Faker = require('faker')


Given('que esteja na pagina do site', () => {
	cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
});

When('Informe um usuário válido', () => {
	global.usuario.email = 'testmimi@gmail.com'
	cy.get('#email').type(global.usuario.email)
});

And('informe uma senha errada', () => {
	cy.get('#passwd').type('1289')
});

Then('O sistema deve notificar que a senha digitada é inválida', () => {
	cy.get('[class="alert alert-danger"]').should('be.visible')
		.find('ol > li').should('have.text','Invalid password.')
});
