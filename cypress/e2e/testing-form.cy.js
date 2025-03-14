//describe-it pattern
//3A Model

describe('JotFOrm Registration Form Test', () => {
    it('should navigate correctly to the form URL', () => {
        
      
        //Arrange
        //our form URL https://form.jotform.com/250366619178566

        


        //Act
        cy.visit('https://form.jotform.com/250366619178566');






        //Assert
        cy.contains('New Customer Registration Form').should('be.visible');

    });
  });

 