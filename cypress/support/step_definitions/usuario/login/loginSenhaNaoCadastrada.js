/// <reference types="cypress" />
/* global Then, When, Given */

const Faker = require('faker')

When('Informe uma senha não cadastrada no site', () => {
	global.usuario.email = 'testmimi@gmail.com'
	global.usuario.senha = '17856'
	cy.get('#email').type(global.usuario.email)
	cy.get('#passwd').type(global.usuario.senha)
});