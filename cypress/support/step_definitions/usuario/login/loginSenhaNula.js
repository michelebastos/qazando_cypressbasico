/// <reference types="cypress" />
/* global Then, When, Given */

const Faker = require('faker')

When('Informe um email válido', () => {
	global.usuario.email = 'testmimi@gmail.com'
	cy.get('#email').type(global.usuario.email)
});

And('não preencha o campo senha', () => {
	global.usuario.senha = ' '
	cy.get('#passwd').type(global.usuario.senha)
});

Then('O sistema deve notificar o email que é necessário preencher a senha', () => {
	cy.get('[class="alert alert-danger"]').should('be.visible')
		.find('ol > li').should('have.text','Password is required.')
});