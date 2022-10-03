import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

describe('Homework 3', () => {
  before(() => {
    cy.visit('/');
  });

  it('demoqa form', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = Math.random().toString().slice(2, 12);
    const address = faker.address.streetAddress();

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('[type="radio"]#gender-radio-3').check({ force: true });
    cy.get('#userNumber').type(phone);
    cy.get('#subjectsInput').type('English{enter}');
    cy.get('[type="checkbox"]#hobbies-checkbox-3').click({ force: true });    
    cy.get('#currentAddress').type(address);
    cy.get('#submit').click({ force: true });

    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain.text', `${firstName} ${lastName}`);
    cy.get('table > tbody > tr:nth-child(2) > td:nth-child(2)').should('contain.text', email);
    cy.get('table > tbody > tr:nth-child(3) > td:nth-child(2)').should('contain.text', 'Other');
    cy.get('table > tbody > tr:nth-child(4) > td:nth-child(2)').should('contain.text', phone);
    cy.get('table > tbody > tr:nth-child(6) > td:nth-child(2)').should('contain.text', 'English');
    cy.get('table > tbody > tr:nth-child(7) > td:nth-child(2)').should('contain.text', 'Music');
    cy.get('table > tbody > tr:nth-child(9) > td:nth-child(2)').should('contain.text', address);
  });
});
