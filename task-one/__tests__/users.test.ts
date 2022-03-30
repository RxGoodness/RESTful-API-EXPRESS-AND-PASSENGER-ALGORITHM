const request = require("supertest");
import app from "../app";

// interface Data {
//     userId: string;
//     organization: string,
//     createdAt: string,
//     updatedAt: string,
//     products: string[],
//     marketValue: string,
//     address: string,
//     ceo: string,
//     country: string,
//     noOfEmployees:number,
//     employees:string[]
// };

const data = {
  userId: "a6982ca4-b83b-48a2-86f6-bef1350ac285",
  organization: "node ninja",
  createdAt: "2020-08-12T19:04:55.455Z",
  updatedAt: "2020-08-12T19:04:55.455Z",
  products: ["developers", "pizza"],
  marketValue: "90%",
  address: "sangotedo",
  ceo: "cn",
  country: "Taiwan",
  noOfEmployees: 2,
  employees: ["james bond", "jackie chan"], 
};


let userId: string;

describe("Should respond with 200 when user is posted", () => {

  it("POST /send", async () =>  {
    const res = await request(app)
      .post("/users")
      .expect("Content-Type", /json/)
      .send({
        data,
      })
      expect(res.status).toBe(200)
  });

  it("should return 404 status code", async () => {
    const res = await request(app).post("/").send(data);
    expect(res.status).toBe(404);
  }) 

});

describe("Should return 200 for users found", () => {
  it("GET /", async () => {
    const res = await request(app).get("/users")
      .send({
        data
      })
      expect(res.status).toBe(200)
  });

  it("GET /", async () => {
    const res = await request(app).get("/use")
      .send({
        data
      })
      expect(res.status).toBe(404)
  });
});


describe("GET /:id", () => {

    it("should return an 404 status for item not found", async () => {
        // const userId = "a6982ca4-b83b-48a2-86f6-bef1350ac285";
        const res = await request(app).get(`/${userId}`);
        expect(res.status).toBe(404);
    });

});

describe("PUT /", () => {

  it("should return an 404 status for item not found", async () => {
      // const userId = "a6982ca4-b83b-48a2-86f6-bef1350ac285";
      const res = await request(app).put(`/${userId}`);
      expect(res.status).toBe(404);
  });

});

describe("DELETE /", () => {

    it("should return an 404 status for item not found", async () => {
        // const userId = "a6982ca4-b83b-48a2-86f6-bef1350ac285";
        const res = await request(app).delete(`/${userId}`);
        expect(res.status).toBe(404);
    });

    it("DELETE /user/:id", async () => {
      const res = await request(app).delete(`/users/${userId}`)
        delete(res.data)
        expect(res.status).toBe(200);
    });

});