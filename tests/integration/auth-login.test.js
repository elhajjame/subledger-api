// import supertest from "supertest";
// import app from "../../app";

// describe("POST api/users/login", () => {
//   describe("when given valid data", () => {
//     test("respond with a 200 status code", async () => {
//       const res = await supertest(app).post("/api/users/login").send({
//         email: "test@example.com",
//         password: "password123",
//       });
//       expect(res.statusCode).toBe(200);
//       expect(res.headers["content-type"]).toMatch(/application\/json/);
//     });
//   });

//   describe("when the email is messing", () => {
//     test("response with a 404 status code", async () => {
//       const res = await supertest(app).post("/api/users/login").send({
//         password: "password123",
//       });
//       expect(res.statusCode).toBe(404);
//     });
//   });

//   describe("when the password missing", () => {
//     test("response with a status code 404", async () => {
//       const res = await supertest(app).post("/api/users/login").send({
//         email: "test@example.com",
//       });
//       expect(res.statusCode).toBe(404);
//     });
//   });
// });
import request from "supertest";
import { expect } from "chai";
import app from "../../app.js";

describe("POST /api/users/login", () => {
  describe("when given valid data", () => {
    it("should respond with a 200 status code", async () => {
      const res = await request(app).post("/api/users/login").send({
        email: "test@example.com",
        password: "password123",
      });

      expect(res.status).to.equal(200);
      expect(res.headers["content-type"]).to.match(/application\/json/);
    });
  });

  describe("when the email is missing", () => {
    it("should respond with a 404 status code", async () => {
      const res = await request(app).post("/api/users/login").send({
        password: "password123",
      });
      expect(res.status).to.equal(404);
    });
  });

  describe("when the password is missing", () => {
    it("should respond with a 404 status code", async () => {
      const res = await request(app).post("/api/users/login").send({
        email: "test@example.com",
      });

      expect(res.status).to.equal(404);
    });
  });
});
