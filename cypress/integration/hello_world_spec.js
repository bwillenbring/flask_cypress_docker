describe('Hello World Test Spec', function() {

    afterEach(function() {
        // Preserve your session
        cy.preserve_session();
    })

    it.skip('Login to home page', function() {
        // Access the home page
        cy.visit('/', {failOnStatusCode: false});
        // type in the password
        cy.get('[name="password"]').type('ag3ntben{enter}');
        // Assert that you see what you expect
        cy.get('#content h1')
            .should('contain','Decomplexifier')
            .and('contain', 'Coder')
            .and('contain', 'Writer')
            .and('contain','Doodler')
            .and('not.contain','Bungler');
        // Preserve your session
        cy.preserve_session();
    })

    it.skip('Click Work Button', function() {
        // Click the work button
        cy.get('a[href="/work-samples"][data-initialized="true"]').click();
        // There should be
        cy.get(':header:contains("Projects & Long running Initiatives")').should('be.visible');
    });
});

Cypress.Commands.add('preserve_session', function() {
    cy.getCookie('Locked').then(cookie => {
        Cypress.config('Locked', cookie.value);
        Cypress.Cookies.defaults({
            whitelist: ['Locked', cookie.value],
        });
    });
})
