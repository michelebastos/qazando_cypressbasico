/// <reference types="cypress" />

const Faker = require('faker')

When('informe os dados de login com email válido', () => {
	global.usuario.email = 'testmimi@gmail.com'
	global.usuario.senha = '123456'
	cy.get('#email').type(global.usuario.email)
	cy.get('#passwd').type(global.usuario.senha)
});
