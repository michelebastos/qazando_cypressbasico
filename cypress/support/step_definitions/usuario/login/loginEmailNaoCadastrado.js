/// <reference types="cypress" />
/* global Then, When, Given */

const Faker = require('faker')

When('Informe um email não cadastrado no site', () => {
	global.usuario.email = 'testmimi88@gmail.com'
	global.usuario.senha = '123456'
	cy.get('#email').type(global.usuario.email)
	cy.get('#passwd').type(global.usuario.senha)
});