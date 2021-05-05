const request = require("supertest");
const app = require("../app");

describe("GET /api/get p", () => {
  test("It should respond with an array of students", async () => {
    request(app)
      .get("/api/get")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "15")
      .expect(200)
      .expect({
        Cidade_idCidade: "2",
        descricao: "é um parque ecológico",
        idLocal: "3",
        localizacao: "Centro da cidade",
        nome: "Parque ecológico",
        referencia: "",
      })
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});

describe("GET /user name John", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/user")
      .expect({ name: "john" })
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

describe("GET /user name Claire", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/user")
      .expect({ name: "Claire" })
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
