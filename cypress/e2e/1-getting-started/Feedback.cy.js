describe('Feedback Functionality', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.feedback-click').click();
        cy.wait(1500);
    });
    
    afterEach(() => {
        cy.wait(1500);
        
        
    });

    after(() => {
        cy.get('.close-btn > img').click();
        });
    

    
    it('Submit an empty feedback', () => {
        cy.get('.submit-btn').click();
        cy.get('.successful-img > img').should('not.exist');
    });  

    it('Submit complete feedback', () => {
        cy.get('input.q1-options#Yes').click();
        cy.get('img.option-2').click();
        cy.get('textarea.text-area').type('type here there is few issues');
        cy.get('.submit-btn').click();
        cy.get('.successful-img > img').should('exist');

    });

    it('Submit feedback with not choose a thoughts', () => {
        cy.get('input.q1-options#Yes').click();
        cy.get('textarea.text-area').type('type here there is few issues');
        cy.get('.submit-btn').click();
        cy.get('.successful-img > img').should('not.exist');
    });

    it('Submit feedback with not write a feedback', () => {
        cy.get('input.q1-options#Yes').click();
        cy.get('img.option-2').click();
        cy.get('.submit-btn').click();
        cy.get('.successful-img > img').should('not.exist');
    });
    
});
