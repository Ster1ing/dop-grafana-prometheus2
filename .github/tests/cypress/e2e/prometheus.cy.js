describe('Prometheus Test', () => {

  beforeEach(() => {
    //const someMetric = 'container_cpu_usage_seconds_total';
    const someMetric = 'up';
    cy.visit(Cypress.env('PROMETHEUS_URL'));
    cy.get('div.cm-line').type(someMetric);
    cy.get('button.execute-btn').click();
  });

  it('The container with "webapp" service incuded to monitoring', () => {
    cy.get('span').should('contain', 'webappTest2233');
  });

  it('The container with "redis" service incuded to monitoring', () => {
    cy.get('span').should('contain', 'redis');
  });

});
