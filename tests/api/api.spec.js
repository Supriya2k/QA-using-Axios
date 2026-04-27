const axios = require('axios');

// Create reusable API client
const api = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 5000,
});

// Simple test runner style (since no Jest here)
async function runTests() {
  try {
    console.log("Running API Tests...\n");

    // Test 1: GET users
    const getUsers = await api.get('/users?page=2');
    console.log("GET /users status:", getUsers.status);
    console.log("Users count:", getUsers.data.data.length);

    // Test 2: POST login success
    const loginSuccess = await api.post('/login', {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    });
    console.log("POST /login success:", loginSuccess.status);
    console.log("Token:", loginSuccess.data.token);

    // Test 3: POST login failure
    try {
      await api.post('/login', {
        email: "peter@klaven"
      });
    } catch (error) {
      console.log("POST /login failure:", error.response.status);
      console.log("Error message:", error.response.data.error);
    }

    console.log("\n API Tests Completed");

  } catch (error) {
    console.error("Test failed:", error.message);
  }
}

// Run tests
runTests();
