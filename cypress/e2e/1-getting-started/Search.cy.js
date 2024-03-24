describe('Search Bar Functionality', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').should('be.visible');
    });
    
    afterEach(() => {
        cy.wait(1500);
    });

    after(() => {
        cy.get('.search-bar').clear();
    });
    
    it('Search with full company name', () => {
        cy.get('input[class="search-bar"]').type('Bisan Systems');
        cy.get('.last-search-and-results .item-text').contains('Bisan Systems').should('be.visible');
    });

    it('Search with first letter of company name', () => {
        cy.get('input[class="search-bar"]').type('A');
        cy.get('.last-search-and-results .item-text').contains('Al Andalus Software Development').should('be.visible');
    });
    
    it('Search with non-existing company', () => {
        cy.get('input[class="search-bar"]').type('Meta');
        //cy.get('.last-search-and-results').should('not.contain', '.item-text', 'Meta');
    });

    it('Search for the company in capital letters', () => {
        cy.get('input[class="search-bar"]').type('ASAL');
        cy.get('.last-search-and-results .item-text').contains('ASAL Technologies').should('be.visible');
    });

    it('Search for the company in small letters', () => {
        cy.get('input[class="search-bar"]').type('asal');
        cy.get('.last-search-and-results .item-text').contains('ASAL Technologies').should('be.visible');
        });

    it('Search for the company using its first name', () => {
        cy.get('input[class="search-bar"]').type('EXALT');
        cy.get('.last-search-and-results .item-text').contains('EXALT Technologies Ltd.').should('be.visible');
    });

    it('Search for a company using a letter in the middle of its name', () => {
        cy.get('input[class="search-bar"]').type('A');
        cy.get('.last-search-and-results .item-text').contains('Advice Technologies').should('be.visible');
    });

    it('Search for a company using his first three letters', () => {
        cy.get('input[class="search-bar"]').type('Aux');
        cy.get('.last-search-and-results .item-text').contains('Auxilium Technology').should('be.visible');
    });

    it('Type numbers on the search bar', () => {
        cy.get('input[class="search-bar"]').type('8');
        cy.get('.last-search-and-results .item-text').should('not.exist');
    });

    it('Type special characters on the search bar', () => {
        cy.get('input[class="search-bar"]').type('%^');
        cy.get('.last-search-and-results .item-text').should('not.exist');
    });

    it('Search for a company using the city it is located in', () => {
        cy.get('input[class="search-bar"]').type('Nablus').type('{enter}');;
        cy.get('.company-slogan').should('contain', 'Nablus')
    });

    it('Search for a company using his topic', () => {
        cy.get('input[class="search-bar"]').type('Mobile').type('{enter}');;
        //cy.get('.slider-element.purple').should('contain', 'Mobile')    
    });

    
    it('Open a topic from last search menu', () => {
        cy.get('input[class="search-bar"]').type('front').type('{enter}');;
        cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
        cy.get('.item-text-button').click();
    });

    it('Remove a topic from last search', () => {
        cy.get('input[class="search-bar"]').type('front').type('{enter}');;
        cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
        cy.get('button.item-text-button').click();

    });

    it('Remove all of topics from last search', () => {
        cy.get('input[class="search-bar"]').type('front').type('{enter}');;
        cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
        cy.get('.header-last > .remove-button').click();
    });

});
