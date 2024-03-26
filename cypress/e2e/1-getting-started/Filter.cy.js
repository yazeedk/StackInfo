describe('Filter Functionality', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.filter-button').click();
    });
    
    afterEach(() => {

        cy.wait(1200);
    });

    after(() => {
    });
    
    it('Select one topic', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.get('.PrivateSwitchBase-input').eq(5).should('be.checked');
        cy.get('.slider-element.backend').should('contain', 'MySQL');
    });

    it('Select tow topic', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.get('.PrivateSwitchBase-input').eq(6).check();
        cy.get('.PrivateSwitchBase-input').eq(5).should('be.checked');
        cy.get('.PrivateSwitchBase-input').eq(6).should('be.checked');
        cy.get('.slider-element:contains("MySQL")').should('be.visible');
        cy.get('.slider-element:contains("Mobile")').should('be.visible');
    });


    it('Select all of topics', () => {
        cy.get('.PrivateSwitchBase-input').check();
        cy.get('.PrivateSwitchBase-input').each(($checkbox) => {
            cy.wrap($checkbox).should('be.checked');
          });
          cy.get('.slider-element').should('be.visible');
    });

    it('Select multiple topics', () => {
        [7, 6, 5, 4].forEach(index => {
        cy.get('.PrivateSwitchBase-input').eq(index).check().should('be.checked');
    });
    cy.get('.slider-element').should('be.visible');  
    });

    
    it('Unselect a topic after select it', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.get('.PrivateSwitchBase-input').eq(5).uncheck().should('not.be.checked');
    });
    
    it('Unselect a topic after select a multiple topics', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.get('.PrivateSwitchBase-input').eq(7).check();
        cy.get('.PrivateSwitchBase-input').eq(5).uncheck();
        cy.get('.PrivateSwitchBase-input').eq(5).uncheck().should('not.be.checked');
        cy.get('.PrivateSwitchBase-input').eq(5).check().should('be.checked');
    });

    it('Select a sub topic', () => {
        cy.get(':nth-child(7) > .dropdown-title > :nth-child(2) > [data-testid="KeyboardArrowDownIcon"]').click();
        cy.get('input#Flutter').check();
        cy.get('.slider-element.mobile').should('be.visible');
    });
    
    it('Select multible sub topics', () => {
        cy.get(':nth-child(7) > .dropdown-title > :nth-child(2) > [data-testid="KeyboardArrowDownIcon"]').click();
        cy.get('input#Flutter').check();
        cy.get('input#Xamarin').check();
        cy.get('.slider-element.mobile').should('be.visible');
    });
    
    
    it('Reset filter button after select a topic', () => {
        cy.get(':nth-child(5) > .dropdown-title > :nth-child(2) > [data-testid="KeyboardArrowDownIcon"]').click();
        cy.get('input.PrivateSwitchBase-input#React[name="frontend"][type="checkbox"]').click();
    });

    it('Hide filter button with select a topic', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.contains('Hide Filters').click();
        cy.wait(1000);
        cy.get('.filter-button').click();
    });

    it('Hide filter button with select a sub topic', () => {
        cy.get(':nth-child(5) > .dropdown-title > :nth-child(2) > [data-testid="KeyboardArrowDownIcon"]').click();
        cy.get('input.PrivateSwitchBase-input#React[name="frontend"][type="checkbox"]').click();
        cy.contains('Hide Filters').click();
        cy.get('.filter-button').click();
        cy.wait(1000);
        cy.get(':nth-child(5) > .dropdown-title > :nth-child(2) > [data-testid="KeyboardArrowDownIcon"]').click();
        cy.get('input.PrivateSwitchBase-input#React[name="frontend"][type="checkbox"]').should('be.checked');
    });

    it('Hide filter button with select a sub topic', () => {
        cy.get(':nth-child(5) > .dropdown-title > :nth-child(2) > [data-testid="KeyboardArrowDownIcon"]').click();
        cy.get('input.PrivateSwitchBase-input#React[name="frontend"][type="checkbox"]').click();
        cy.get('#Angular').click();
        cy.wait(1000);
        cy.get('button.clear-all-btn').click();
        cy.contains('Hide Filters').click();
    });
    
});
