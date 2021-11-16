import '@percy/cypress';

describe('home page', () => {
    it('should have paragraph tag', () => {
        cy.visit('/')
      
        
    // Take a snapshot for visual diffing
    cy.percySnapshot();

    });
});