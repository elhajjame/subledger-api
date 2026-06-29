import supertest from "supertest";
import app from "../../app";

describe("POST /api/users/login", () => {
  describe("when given valid data", () => {
    test("responds with a 200 status code", async () => {
      const fakeUserData = {
        name: `name-${Date.now()}`,
        email: `name-${Date.now()}@gmail.com`,
        password: "password123",
        passwordConfirm: "password123",
        role: "user",
      };

      await supertest(app)
        .post("/api/users/signup")
        .send(fakeUserData);

      // Login with the created user
      const res = await supertest(app)
        .post("/api/users/login")
        .send({
          email: fakeUserData.email,
          password: fakeUserData.password,
        });

      expect(res.statusCode).toBe(200);
      expect(res.headers["content-type"]).toMatch(/application\/json/);
    });
  });

  describe("when the email is missing", () => {
    test("responds with a 404 status code", async () => {
      const res = await supertest(app)
        .post("/api/users/login")
        .send({
          password: "password123",
        });

      expect(res.statusCode).toBe(404);
    });
  });

  describe("when the password is missing", () => {
    test("responds with a 404 status code", async () => {
      const res = await supertest(app)
        .post("/api/users/login")
        .send({
          email: "test@example.com",
        });

      expect(res.statusCode).toBe(404);
    });
  });
});