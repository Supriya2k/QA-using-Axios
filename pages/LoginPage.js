class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = 'input[data-qa="login-email"]';
    this.password = 'input[data-qa="login-password"]';
    this.loginBtn = 'button[data-qa="login-button"]';
  }

  async login(email, password) {
    await this.page.fill(this.email, email);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }
}

module.exports = LoginPage;
