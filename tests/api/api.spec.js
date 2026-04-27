import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {

  test('GET users - validate response', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.data[0]).toHaveProperty('email');
  });

  test('POST login - success', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/login', {
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('token');
  });

  test('POST login - failure', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/login', {
      data: {
        email: "peter@klaven"
      }
    });

    expect(response.status()).toBe(400);

    const body = await response.json();
    expect(body).toHaveProperty('error');
  });

});
