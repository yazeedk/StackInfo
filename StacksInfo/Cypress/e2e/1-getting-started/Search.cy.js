describe('Search Bar', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').should('be.visible');
    });

    after(() => {
        cy.get('.search-bar').clear();
    });

    it('Search with full company name', () => {
        cy.get('.search-bar').type('Asal');
        cy.get('.search-bar').should('have.value', 'Asal');
        cy.wait(1000);
    });

    it('Search with first letter of company name', () => {
        cy.get('.search-bar').type('A');
        cy.get('.search-bar').should('have.value', 'A');
        cy.wait(1000);
    });

    it('Search with non-existing company', () => {
        cy.get('.search-bar').type('Meta');
        cy.get('.search-bar').should('have.value', 'Meta');
        cy.wait(1000);
    });

    it('Search for the company in capital letters', () => {
        cy.get('.search-bar').type('ASAL');
        cy.get('.search-bar').should('have.value', 'ASAL');
        cy.wait(1000);
    });

    it('Search for the company in small letters', () => {
        cy.get('.search-bar').type('asal');
        cy.get('.search-bar').should('have.value', 'asal');
        cy.wait(1000);
    });

    it('Search for the company using its first name', () => {
        cy.get('.search-bar').type('EXALT');
        cy.get('.search-bar').should('have.value', 'EXALT');
        cy.wait(1000);
    });

    it('Search for a company using a letter in the middle of its name', () => {
        cy.get('.search-bar').type('A');
        cy.get('.search-bar').should('have.value', 'A');
        cy.wait(1000);
    });

    it('Type numbers on the search bar', () => {
        cy.get('.search-bar').type('8');
        cy.get('.search-bar').should('have.value', '8');
        cy.wait(1000);
    });

    it('Type special characters on the search bar', () => {
        cy.get('.search-bar').type('%^');
        cy.get('.search-bar').should('have.value', '%^');
        cy.wait(1000);
    });

    it('Search for a company using the city it is located in', () => {
        cy.get('.search-bar').type('Nablus');
        cy.get('.search-bar').should('have.value', 'Nablus');
        cy.wait(1000);
    });

    it('Search for a company using the city it is located in', () => {
        cy.get('.search-bar').type('Mobile');
        cy.get('.search-bar').should('have.value', 'Mobile');
        cy.wait(1000);
    });
});
