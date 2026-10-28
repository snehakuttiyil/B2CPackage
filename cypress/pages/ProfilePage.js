
class ProfileMenuPage {
  elements = {
    profileName: 'supplier one',
    email: 'supplier@gmail.com',
    changePassword: 'Change Password',
    signOut: 'Sign out',
  };

  openProfileMenu() {
    cy.contains('button', this.elements.profileName)
      .should('be.visible')
      .click();
  }

  verifyProfileMenuVisible() {
    // Open the dropdown first
    this.openProfileMenu();

    // Verify the menu options
    cy.contains(this.elements.changePassword)
      .should('be.visible');

    cy.contains(this.elements.signOut)
      .should('be.visible');
  }

  clickChangePassword() {
    cy.contains(this.elements.changePassword)
      .should('be.visible')
      .click();
  }

  clickSignout() {
    cy.contains(this.elements.signOut)
      .should('be.visible')
      .click();
  }
}

export default ProfileMenuPage;
