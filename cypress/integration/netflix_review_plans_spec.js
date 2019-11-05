describe('Netflix Account Signup', function() {

    before(function() {
        // Set baseUrl
        Cypress.config('baseUrl', 'https://www.netflix.com');
        // Go to the main page
        cy.visit('/');
    })

    it('requests landing page', function() {
        // Asserts "Free for 30 days"
        cy.get('[data-uia="freeTrial-subtitle"]').invoke('text').should('eq', 'Free for 30 days.');
    });

    it('clicks start 30 day free trial', function() {
        // Click Try 30 days free button
        cy.get('button[data-uia="home-cta"]:contains("TRY 30 DAYS FREE"):first').click();

        // Ensure URL has changed, and you're on Step 1 of 3
        cy.url().should('contain', `${Cypress.config('baseUrl')}/signup?action=planSelectionWithContext`);
        cy.get('.stepIndicator').invoke('text').should('eq', 'STEP 1 OF 3');

    });

    it('reviews plans and verifies features', function() {
        // Click See Plans
        cy.get('button:contains("SEE THE PLANS")').click();
        cy.url().should('eq', `${Cypress.config('baseUrl')}/signup/planform`);

        // Define Netflix plans
        const plans = ['Basic','Standard','Premium'];

        // Define Netflix plan features
        const plan_features = {
            "HD available": {
                Basic: 'No',
                Standard: 'Yes',
                Premium: 'Yes'
            },
            "Ultra HD available": {
                Basic: 'No',
                Standard: 'No',
                Premium: 'Yes'
            },
            "Screens you can watch on at the same time": {
                Basic: '1',
                Standard: '2',
                Premium: '4'
            }
        };

        // Locate the Feature Plan Table and constrain all selectors within the table
        cy.get('table[data-uia="plan-grid-feature-table"] tbody').within(table => {
            // There is a row that corresponds to the feature
            for (let feature in plan_features) {
                // The first column contains the feature key
                cy.get('tr:has(td:eq(0):contains("' + feature + '"))').should('exist').within(row => {
                    plans.forEach(plan => {
                        cy.get(`td[aria-label="${plan}"]`).should('contain', plan_features[feature][plan]);
                    });
                });
            }
        })
    });

    it('chooses a plan and confirms netflix will not allow us to continue', function() {
        // Click Continue
        cy.get('button[data-uia="cta-plan-selection"]').scrollIntoView().trigger('mouseover').click();

        // Assert that your url has not changed
        cy.url().should('eq', `${Cypress.config('baseUrl')}/signup/planform`);

        // Assert that an error message appears showing that we cannot continue
        cy.get('[data-uia="UIMessage-content"]').scrollIntoView().should('contain','Sorry, we are unable to complete that action now. Please try again later.');
    });
});
