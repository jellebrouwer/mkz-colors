describe('green', () => {
  before(() => {
    cy.eyesOpen({
      appName: 'Colors',
      testName: 'green',
    });
  });

  after(() => {
    cy.eyesClose();
  });

  it('should display green', () => {
    cy.visit('');
    cy.contains('Welcome green');
    cy.eyesCheckWindow({
      target: 'region',
      selector: {
        type: 'css',
        selector: '[data-cy="main-container"]',
      },
      layout: [{ selector: '[data-cy="main-container"]' }],
      tag: 'Green overview',
    });
  });
});
