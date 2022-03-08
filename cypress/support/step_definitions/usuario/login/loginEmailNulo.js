/// <reference types="cypress" />
/* global Then, When, Given */

const Faker = require('faker')

When('não preencha o campo email', () => {
	global.usuario.email = ' '
	cy.get('#email').type(global.usuario.email)
});

Then('O sistema deve notificar o email que é necessário preencher o email', () => {
	cy.get('[class="alert alert-danger"]').should('be.visible')
		.find('ol > li').should('have.text','An email address required.')
});