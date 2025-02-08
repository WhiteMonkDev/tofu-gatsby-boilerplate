const url = '/';

describe('template spec', () => {
  it('passes', () => {
    cy.visit(url).waitForRouteChange();
  });
});
