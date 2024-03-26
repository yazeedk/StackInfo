describe('Search Bar Functionality', () => {
    beforeEach(() => {
        cy.visit('https://stacksinfo.web.app');
        cy.get('.search-bar').should('be.visible');
    });
    
    afterEach(() => {
        cy.wait(1000);
    });

    after(() => {
        cy.get('.search-bar').clear();
    });
    

    it('Search with full company name', () => {
        cy.get('input[class="search-bar"]').type('Bisan Systems');
        cy.get('.company-name').should('contain', 'Bisan Systems');
    });
    
    it('Search with first letter of company name', () => {
        cy.get('input[class="search-bar"]').type('A');
        cy.get('.last-search-and-results .item-text').each(($element) => {
            cy.wrap($element).invoke('text').should('match', /^A/);    
        });
    });

    it('Search with non-existing company', () => {
        cy.get('input[class="search-bar"]').type('Meta');
        cy.get('.company-name').should('not.exist');    
    });

    it('Search for the company in capital letters', () => {
        cy.get('input[class="search-bar"]').type('ASAL');
        cy.get('.company-name').contains('ASAL Technologies').should('be.visible');
    });

    it('Search for the company in small letters', () => {
        cy.get('input[class="search-bar"]').type('asal');
        cy.get('.company-name').contains('ASAL Technologies').should('be.visible');
    });

    it('Search for the company using its first name', () => {
        cy.get('input[class="search-bar"]').type('EXALT');
        cy.get('.company-name').contains('EXALT').should('be.visible');
    });

    it('Search for a company using a letter in the middle of its name', () => {
        cy.get('input[class="search-bar"]').type('A');
        cy.get('.company-name').contains('Advice Technologies').should('be.visible');
    });

    it('Search for a company using his first three letters', () => {
        cy.get('input[class="search-bar"]').type('Aux');
        cy.get('.company-name').contains('Auxilium Technology').should('be.visible');
    });

    it('Type numbers on the search bar', () => {
        cy.get('input[class="search-bar"]').type('8');
        cy.get('p.title-not-fround').should('be.visible');
    });

    it('Type special characters on the search bar', () => {
        cy.get('input[class="search-bar"]').type('%^');
        cy.get('p.title-not-fround').should('be.visible');
    });

    it('Search for a company using the city it is located in', () => {
        cy.get('input[class="search-bar"]').type('Nablus').type('{enter}');
        cy.get('.company-slogan').should('contain', 'Nablus');
    });

    it('Search for a company using his topic', () => {
        cy.get('input[class="search-bar"]').type('Mobile').type('{enter}');
        cy.get('.slider-element.mobile').should('contain', 'Mobile');   
    });

    it('Open a topic from last search menu', () => {
        cy.get('input[class="search-bar"]').type('front').type('{enter}');
        cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
        cy.get('.item-text-button').click();
    });

    it('Remove a topic from last search', () => {
        cy.get('input[class="search-bar"]').type('front').type('{enter}');
        cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
        cy.get('button.item-text-button').click();

    });

    it('Remove all of topics from last search', () => {
        cy.get('input[class="search-bar"]').type('front').type('{enter}');
        cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
        cy.get('.header-last > .remove-button').click();
    });

    it('Search with full company name for suggestion', () => {
        cy.get('input[class="search-bar"]').type('Bisan Systems');
        cy.get('.last-search-and-results .item-text').contains('Bisan Systems').should('be.visible');
    });

    it('Search with first letter of company name for suggestion', () => {
        cy.get('input[class="search-bar"]').type('A');
        cy.get('.last-search-and-results .item-text').each(($element) => {
            cy.wrap($element).invoke('text').should('match', /^A/);
        });
    });
    
    it('Search for a company using his topic for suggestion', () => {
        cy.get('input[class="search-bar"]').type('Mobile').type('{enter}');
        cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
        cy.get('.last-search-and-results .item-text').should('contain', 'Mobile');   
    });

    it('Search for a company using his sub topic for suggestion', () => {
        cy.get('input[class="search-bar"]').type('MySQL').type('{enter}');
        cy.get('#root > div > div.navbar > div.search-bar-container > input').click();
        cy.get('.last-search-and-results .item-text').should('contain', 'MySQL');   
    });

    it('Search for a company using his city for suggestion', () => {
        cy.get('input[class="search-bar"]').type('He');
        cy.get('.item-text').should('contain', 'Hebron');
    });
});
