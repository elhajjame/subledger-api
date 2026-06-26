// import supertest from "supertest";
// // import authController from "../../controllers/authController";
// import { request, response } from "express";
// import app from "../../app";

// describe("POST /api/users/signup", () => {
//   describe("given valid signup information", () => {
//     // should save data in database
//     // respond with a json obj and 200 status code
//     test("respond with a 200 status code", async () => {
//       const res = await supertest(app)
//         .post("/api/users/signup")
//         .send({
//           name: `mehdi-${Date.now()}`,
//           email: `mehdi-${Date.now()}@gmail.com`,
//           role: "user",
//           password: `${Date.now()}`,
//           passwordConfirm: `${Date.now()}`,
//         });
//       expect(res.statusCode).toBe(202);
//       expect(res.headers["content-type"]).toMatch(/application\/json/);
//     });
//   });

//   describe("when the given info are incorrect ", () => {
//     // respond with a statusCode 400
//     test("response whit statusCond 400", async () => {
//       const bodyData = [
//         { name: "name" },
//         { email: "test@email.com" },
//         { role: "user" },
//         { password: "password1234" },
//         { passwordConfirm: "password1234" },
//       ];
//       for (const body of bodyData) {
//         const res = await supertest(app).post("/api/users/signup").send(body);
//         expect(res.statusCode).toBe(404);
//       }
//     });
//   });
// });
