/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://example.cypress.io/todo')
    })
    
    it('can add new todo items', () => {
        // We'll store our item text in a variable so we can reuse it
        const ts = require('../../fixtures/example.json');
        
        ts.forEach(element => {
          cy.get('[data-test=new-todo]').type(`${element.Task}{enter}`)
        });
        
      
        
    

        cy.get('.todo-list li')
          .should('have.length', 4)
  
      })
    
    
    
    
     } )

