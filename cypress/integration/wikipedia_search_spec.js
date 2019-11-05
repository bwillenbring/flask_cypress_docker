describe('Wikipedia Search', function() {
    before(function() {
        Cypress.config('baseUrl', 'https://wikipedia.org');
    })
    beforeEach(function() {
        cy.visit('/');
    })

    it('goes to Umberto Eco page in Italian', function() {
        // Set language to Italian
        cy.get('#searchLanguage').select('it');
        // Type Umberto Eco into search input
        cy.get('#searchInput').type('Umberto Eco')
        // Assert on the 1st autocomplete result, and click it
        cy.get('.suggestions-dropdown a:first').should('contain','semiologo, filosofo e scrittore italiano').click();
        // Assert on the wikipedia page URL
        cy.url().should('contain','/wiki/Umberto_Eco');
        // Assert there is a specific phrase in a specific section
        cy.get('h3:contains("Morte")')
            .scrollIntoView().next()
            .should('contain', '19 febbraio 2016');
    });

    it('goes to Tex Avery page in English', function() {
        // Set language to Italian
        cy.get('#searchLanguage').select('en');
        // Type Umberto Eco into search input
        cy.get('#searchInput').type('Tex Avery')
        //  Assert on the 1st autocomplete result, and click it
        cy.get('.suggestions-dropdown a:first').should('contain','American animator, cartoonist, voice actor and director').click();
        // Assert on the wikipedia page URL
        cy.url().should('contain','/wiki/Tex_Avery');
        // Assert there is a specific phrase in a specific section
        cy.get('h3:contains("Accident to eye")')
            .scrollIntoView().next()
            .should('contain', 'the paper clip hit Avery in his left eye')
            .and('contain','He instantly lost use of his eye');
    });
});
