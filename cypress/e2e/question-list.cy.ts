/// <reference types="cypress" />

describe('QuestionList Component', () => {
  beforeEach(() => {
    // Öffne die Anwendung vor jedem Test
    cy.visit('/'); // Passe die URL an deine lokale Entwicklungsumgebung an
    cy.viewport('iphone-5');

    //get all ion-buttons
    cy.get('ion-button').eq(1).click();

    cy.wait(1000);

    cy.get('ion-button').eq(0).click();
  });

  it('should display two questions at the beginning', () => {
    // get all ion-item-sliding elements and check if there are two
    var items = cy.get('ion-item-sliding');
    items.should('have.length', 2);
  });

  it('should add a question on clicking the plus button', () => {
    // Hier kommen weitere Cypress-Befehle für den zweiten Test
    // Du könntest den Plus-Button anklicken und dann überprüfen, ob eine Frage hinzugefügt wurde.
  });
});
