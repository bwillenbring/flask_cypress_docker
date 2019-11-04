describe('FlaskSpec', function() {

    it('Open url', function() {
        // Access the home page
        cy.visit('/');
        assert.isTrue(1 > 0);
    })

});
