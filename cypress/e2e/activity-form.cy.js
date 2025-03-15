


//Test Case 1
//Verify that the form is displayed correctly
//describe-it pattern
//3A Model

describe('should navigate correctly to the form URL', () => {

beforeEach(() => {
//act
cy.visit('https://form.jotform.com/250300322146540');

//assert
cy.contains('Practice Activity Form').should('be.visible');

});

it('Testing the form', () => {
//arrenge
//header_1, #input_35 field, #input_25 botton, .error-navigation-message This field is required.

//act
cy.get('#input_25').click();

//assert
cy.get('.error-navigation-message').should('contain','This field is required.');

});

it('correct input send', () => {
//arrenge
//#input_35 field, #input_25 botton, .thankyou-main-text ty-text sucess message

//act
cy.get('#input_35').type('John');
cy.get('#input_25').click();


//assert
cy.url().should('include', '/submit.jotform.com'); 
cy.get('.thankyou-main-text').should('contain','Thank You!');

});


});
