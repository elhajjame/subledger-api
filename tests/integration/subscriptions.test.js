import supertest from "supertest";
import app from "../../app";

let token;

beforeAll(async () => {
  const loginRes = await supertest(app)
    .post("/api/users/login")
    .send({
      email: "testor@example.com",
      password: "testor1234",
    });

  token = loginRes.body.token;
});

describe("POST /api/subscriptions/createSub", () => {
  describe("when the input is valid", () => {
    test("should respond with a 202 status code", async () => {
      const res = await supertest(app)
        .post("/api/subscriptions/createSub")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "subscription test name",
          price: 10,
          billingCycle: "monthly",
          createdAt: `${Date.now()}`,
          userId: "6a3d6b243752e52ac48bdf02",
        });

      expect(res.statusCode).toBe(202);
    });
  });

  describe("when the given information is incorrect", () => {
    test("should respond with a 404 status code", async () => {
      const subscriptionDataBody = [
        { name: "wifi" },
        { price: 100 },
        { billingCycle: "monthly" },
        { createdAt: `${Date.now()}` },
        // { userId: "6a3d6b243752e52ac48bdf02" },
      ];

      for (const body of subscriptionDataBody) {
        const res = await supertest(app)
          .post("/api/subscriptions/createSub")
          .set("Authorization", `Bearer ${token}`)
          .send(body);

        expect(res.statusCode).toBe(404);
        expect(res.headers["content-type"]).toMatch(/application\/json/);
      }
    });
  });
});