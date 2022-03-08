/// <reference types="cypress" />

const Faker = require('faker')


When('informe dados de login com email válido, pressionado Enter após', () => {
	
	cy.get('#email').type(global.usuario.email)
	cy.get('#passwd').type(`${global.usuario.senha}{enter}`)
});