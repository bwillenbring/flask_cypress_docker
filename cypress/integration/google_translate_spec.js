describe('Google Translate', function() {
    before(function() {
        Cypress.config('baseUrl', 'https://translate.google.com');
    })
    beforeEach(function() {
        cy.visit('/');
    })

    it('French', function() {
        // Type a phrase
        cy.get('#source').type('je suis un noble sauvage');
        // Assert on the translation
        cy.get('.result .translation').should('contain', 'I am a savage noble');
    });

    it('Italian', function() {
        // Type a phrase
        cy.get('#source').type('nel mezzo del camin di nostra vita');
        // Assert on the translation
        cy.get('.result .translation').should('contain', 'in the middle of the journey of our life');
    });

    it('German', function() {
        // Type a phrase
        cy.get('#source').type('ich habe ein bischen Deutsch gestudiert an der uni');
        // Assert on the translation
        cy.get('.result .translation').should('contain', 'I studied German a bit at the university');
    });

    it('Spanish', function() {
        // Type a phrase
        cy.get('#source').type('mantegase alejado de la puerta');
        // Assert on the translation
        cy.get('.result .translation').should('contain', 'stay away from the door');
    });
});
