import LoginPage from '../../pages/LoginPage';

describe('Supplier Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('TC01 - should login with correct credentials', () => {
    cy.fixture('supplierLogin').then((data) => {
      loginPage.login(
        data.validUser.email,
        data.validUser.password
      );

      cy.location('pathname', { timeout: 15000 })
        .should('include', '/supplier/orders');
    });
  });

  it('TC02 - should reject an incorrect password and show validation error', () => {

    cy.fixture('supplierLogin').then((data) => {
      loginPage.login(
        data.incorrectPassword.email,
        data.incorrectPassword.password
      );

      cy.location('pathname', { timeout: 10000 })
        .should('include', '/login/supplier');
    });
  });

  it('TC03 - should validate an empty email with appropriate errror message', () => {
    cy.fixture('supplierLogin').then((data) => {
      loginPage.login(
        data.emptyEmail.email,
        data.emptyEmail.password
      );

      cy.get('input[type="email"]')
        .then(($email) => {
          expect($email[0].validity.valueMissing).to.equal(true);
        });
    });
  });

  it('TC04 - should validate an empty password', () => {
    cy.fixture('supplierLogin').then((data) => {
      loginPage.login(
        data.emptyPassword.email,
        data.emptyPassword.password
      );

      cy.get('input[type="password"]')
        .then(($password) => {
          expect($password[0].validity.valueMissing).to.equal(true);
        });
    });
  });

  it('TC05 - should validate empty email and password', () => {
    cy.fixture('supplierLogin').then((data) => {
      loginPage.login(
        data.emptyCredentials.email,
        data.emptyCredentials.password
      );

      cy.get('input[type="email"]').then(($email) => {
        cy.get('input[type="password"]').then(($password) => {
          expect(
            $email[0].validity.valueMissing ||
            $password[0].validity.valueMissing
          ).to.equal(true);
        });
      });

      cy.location('pathname')
        .should('include', '/login/supplier');
    });
  });
});
