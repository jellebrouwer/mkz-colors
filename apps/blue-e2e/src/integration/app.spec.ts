describe('blue', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Colors',
      testName: 'blue',
    });
  });

  after(() => {
    cy.eyesClose();
  });

  it('should display blue', () => {
    cy.visit('');
    cy.contains('Welcome blue');
    cy.eyesCheckWindow({
      target: 'region',
      selector: {
        type: 'css',
        selector: '[data-cy="main-container"]',
      },
      layout: [{ selector: '[data-cy="main-container"]' }],
      tag: 'Blue overview',
    });
  });
});
