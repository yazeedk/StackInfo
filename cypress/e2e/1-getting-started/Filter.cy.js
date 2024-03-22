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
        cy.get('.PrivateSwitchBase-input').eq(7).check();
    });

    it('select tow topic', () => {
        cy.get('.PrivateSwitchBase-input').eq(7).check();
        cy.get('.PrivateSwitchBase-input').eq(6).check();
    });

    it('Select all of topics', () => {
        cy.get('.PrivateSwitchBase-input').check();
    });

    it('Select multiple topics', () => {
        cy.get('.PrivateSwitchBase-input').eq(7).check();
        cy.get('.PrivateSwitchBase-input').eq(6).check();
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.get('.PrivateSwitchBase-input').eq(4).check();   
        cy.wait(1000);
    });

    it('Unselect a topic after select it', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.get('.PrivateSwitchBase-input').eq(5).uncheck();
    });

    it('Unselect a topic after select a multiple topics', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.get('.PrivateSwitchBase-input').eq(7).check();
        cy.get('.PrivateSwitchBase-input').eq(5).uncheck();
    });

    it('reset filter button after select a topic', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.get('.PrivateSwitchBase-input').eq(7).check();
        cy.wait(1000);
        cy.get('.reset-btn').click();
    });
   
    it('Hide filter button with select a topic', () => {
        cy.get('.PrivateSwitchBase-input').eq(5).check();
        cy.contains('Hide Filters').click();
        cy.wait(1000);
        cy.get('.filter-button').click();
       // cy.get('.PrivateSwitchBase-input').eq(5).should('be.checked');
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
