const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test('Login test', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://automationexercise.com/login');

  await login.login('test@test.com', 'password');

  await expect(page).toHaveURL(/login/);
});
