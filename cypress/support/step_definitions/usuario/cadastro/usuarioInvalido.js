/// <reference types="cypress" />

const Faker = require ('faker')
 

Given('que eu esteja no site da loja', () => {
	cy.visit('/')
})

When('tente informar um email invalido', () => {
	cy.get('[class=login]').click()
    cy.get('#email_create').type('testes')
    cy.get('button[id=SubmitCreate]').click()
})

const newLocal = 'O sistema deve exibir mensagem impeditiva: email é invalido'
Then(newLocal, () => {
	cy.get('#create_account_error').should('have.text', 'Invalid email address.')
});
