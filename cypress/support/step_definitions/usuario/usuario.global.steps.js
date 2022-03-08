// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../pages/authentication.page')

Given('cliquei para realizar sign-in', () => {
  AuthenticationPage.clicarParaAcessar()
})
