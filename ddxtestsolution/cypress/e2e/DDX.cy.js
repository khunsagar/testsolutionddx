/// <reference types="Cypress" />



describe('Test Solution for DDX', function () {
    beforeEach('LOgin to Website', function () {
        Cypress.config('defaultCommandTimeout', 50000);
        cy.visit('http://live.techpanda.org/')
    
    });
  

  
    it('should be able to register user with given details ', function () {
      cy.get('.account-cart-wrapper>a').click();
      cy.get('.links>ul>li>a[title="Register" ]').click()
      cy.get('#firstname').type('Automation')
      cy.get('#lastname').type('Test')
      cy.get('#middlename').type('ttbq')
      let email = Math.random().toString(36).slice(2, 7)
      cy.log(email)
      const  emailDynamic = email+''+'@dummy.com';
      cy.log(emailDynamic)
      cy.get('#email_address').type(emailDynamic)
      cy.get('#password').type('123123')
      cy.get('#confirmation').type('123123')
      cy.get('.buttons-set > .button > :nth-child(1) > span').click({force:true})
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.')
    });
  });
  

