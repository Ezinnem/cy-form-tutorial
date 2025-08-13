describe('Registration Form', () => {
  it('registers a user successfully', () => {
    cy.visit('/'); // open homepage

    cy.get('[data-cy=name]').type('John Doe');
    cy.get('[data-cy=email]').type('john@example.com');
    cy.get('[data-cy=password]').type('password123');
    cy.get('[data-cy=submit]').click();

    cy.get('[data-cy=message]')
      .should('be.visible')
      .and('contain', 'Welcome, John Doe!');
  });

  it('shows error when fields are empty', () => {
    cy.visit('/');
    cy.get('[data-cy=submit]').click();
    cy.get('[data-cy=message]')
      .should('contain', 'Please fill in all fields');
  });
});
