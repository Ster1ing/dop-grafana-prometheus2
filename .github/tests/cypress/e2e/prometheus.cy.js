describe('Prometheus Test', () => {

  beforeEach(() => {
    //const someMetric = 'container_cpu_usage_seconds_total';
    const someMetric = 'up';
    cy.visit('127.0.0.1:9090');
    //cy.visit(Cypress.env('CYPRESS_PROMETHEUS_URL'));
    cy.get('div.cm-line').type(someMetric);
    cy.get('button.execute-btn').click();
  });

  it('/graph', () => {
    cy.url().should('match', /graph/);
  });

  it('The container with "webapp" service incuded to monitoring', () => {
    cy.get('span').should('contain', 'webapp');
  });

  it('The container with "redis" service incuded to monitoring', () => {
    cy.get('span').should('contain', 'redis');
  });

});
