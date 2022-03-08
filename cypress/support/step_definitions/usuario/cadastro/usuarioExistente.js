/// <reference types="cypress" />

const Faker = require ('faker')

Given('que eu esteja no site da loja', () => {
	cy.visit('/')
})

When('tente informar um email já cadastrado', () => {
	cy.get('[class=login]').click()
    cy.get('#email_create').type('testmimi@gmail.com')
    cy.get('button[id=SubmitCreate]').click()
});

Then('O sistema deve exibir mensagem impeditiva informando que o email já foi cadastrado', () => {
	cy.get('#create_account_error').should('have.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one. ')
});