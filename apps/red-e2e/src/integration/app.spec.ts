describe('red', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Colors',
      testName: 'red',
    });
  });

  after(() => {
    cy.eyesClose();
  });

  it('should display red', () => {
    cy.visit('');
    cy.contains('Welcome red');
    cy.eyesCheckWindow({
      target: 'region',
      selector: {
        type: 'css',
        selector: '[data-cy="main-container"]',
      },
      layout: [{ selector: '[data-cy="main-container"]' }],
      tag: 'Red overview',
    });
  });
});
