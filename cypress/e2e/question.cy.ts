/// <reference types="cypress" />

describe('Question Component', () => {
  beforeEach(() => {
    // Öffne die Anwendung vor jedem Test
    cy.visit('/question-list'); // Passe die URL an deine lokale Entwicklungsumgebung an
    cy.viewport('iphone-5');

    cy.get('ion-button').eq(0).click();
  });

  it('should be empty at the beginning', () => {
    cy.get('ion-item-sliding').should('have.length', 0);
  });

  it('should add a question on clicking the plus button', () => {
    cy.get('ion-item')
      .eq(1)
      .children()
      .type('Wie viele Beine hat ein Hund?')
      .should('have.value', 'Wie viele Beine hat ein Hund?');
    cy.get('ion-back-button').eq(1).click();
    cy.get('ion-item-sliding').should('have.length', 1);
  });
});
