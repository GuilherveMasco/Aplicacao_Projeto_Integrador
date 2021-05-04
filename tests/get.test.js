const request = require("supertest");
const app = require("../server/app");

describe("GET /api/get ", () => {
  test("It should respond with an array of students", async () => {
    const response = await request(app).get("/api/get");
    expect(response.nome).toEqual(["Guilherme", "Matt", "Joel", "Michael"]);
  });
});