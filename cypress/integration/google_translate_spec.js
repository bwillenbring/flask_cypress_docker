describe('Google Translate', function() {
    before(function() {
        Cypress.config('baseUrl', 'https://translate.google.com');
    })
    beforeEach(function() {
        cy.visit('/');
    })

    it('French', function() {
        // Type a phrase
        cy
            .get('#source')
            .type('je suis un noble sauvage');
        // Assert on the translation
        cy
            .get('.result .translation')
            .invoke('text')
            .should('contain', 'I am a')
            .and('contain', 'noble')
            .and('contain', 'savage');
    });

    it('Italian', function() {
        // Type a phrase
        cy
        .get('#source')
        .type('nel mezzo del camin di nostra vita');
        // Assert on the translation
        cy
            .get('.result .translation')
            .should('contain', 'the middle')
            .and('contain', 'journey')
            .and('contain', 'life');
    });

    it('German', function() {
        // Type a phrase
        cy
            .get('#source')
            .type('ich habe ein bischen Deutsch gestudiert an der uni');
        // Assert on the translation
        cy
            .get('.result .translation')
            .invoke('text')
            .should('contain', 'I')
            .and('contain', 'studied')
            .and('contain', 'little')
            .and('contain', 'German')
            .and('contain','university')
    });

    it('Spanish', function() {
        // Type a phrase
        cy
            .get('#source')
            .type('mantegase alejado de la puerta');
        // Assert on the translation
        cy
            .get('.result .translation')
            .should('contain', 'away')
            .and('contain', 'door');
    });
});
