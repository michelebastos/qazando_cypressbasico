/// <reference types="cypress" />

const Faker = require ('faker');
const { min } = require('lodash');

describe('Testes no site', () => {
                
    it('Login do usuario com novo email', () => {
        cy.visit('/')
        cy.get('[class=login]').click()
        cy.get('#email_create').type(Faker.internet.email())
        cy.get('button[id=SubmitCreate]').click()
    });

    it('Preencher os campos obrigatórios', () => {
        
        cy.get('input[id=id_gender2]').click()
        cy.get('input[id=customer_firstname]').type(Faker.name.firstName());
        cy.get('input[id=customer_lastname]').type(Faker.name.lastName());
        cy.get('input[id=passwd]').type(Faker.internet.password());
        
        cy.get('select[id=days]')
            .select('22');
        cy.get('select[id=months]')
            .select('12');
        cy.get('select[id=years]')
            .select('1987');
        cy.get('input[id=optin]').click();

        cy.get('input[id=company]').type(Faker.company.companyName());
        cy.get('#address1').type(Faker.address.streetAddress());
        cy.get('input[id=city]').type(Faker.address.cityName())
        cy.get('#id_state').select(`${Faker.datatype.number({min:1, max:20})}`);
        cy.get('input[id=postcode]').type(`${Faker.datatype.number({min:10000, max:99999})}`);;
        cy.get('input[id=phone_mobile]').type(Faker.phone.phoneNumberFormat());
        cy.get('input[id=alias]').type('My adress test');
    });

    it('Finalizar o cadastro', () => {
        
        cy.get('button[id=submitAccount]').click()
        cy.get('[class=navigation_page]').should('have.text', 'My account')
    });
});