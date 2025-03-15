//describe-it pattern
//3A Model
//beforeEach


describe('should navigate correctly to the form URL', () => {

    beforeEach(() => {
        //arrange
        // our web https://form.jotform.com/250366619178566
        //act
        cy.visit('https://form.jotform.com/250366619178566');
        //assert
        cy.contains('New Customer Registration Form').should('be.visible');
    });

    it('Testing the form', () => {
        //arrenge first_3 full name, last_3 last name, input_25 save button
        //act
        cy.get('#first_3').type('John');
        cy.get('#last_3').type('Ulloa');
        //assert
        cy.get('#first_3').should('have.value', 'John');
        cy.get('#last_3').should('have.value', 'Ulloa');

        cy.get('#input_25').click();
    });

    it('validate error message', () => {
        //arrange
        //act
        cy.get('#input_25').click();
        //assert
        cy.get('.error-navigation-message').should('contain','This field is required.');
        cy.debug();
    }
    );

});

 