import { callApi } from "./index";

describe("testing api", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls google and returns data to me", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

    //assert on the response
    callApi("https://google.com").then(res => {
      expect(res.data).toEqual("12345");
    });
  });
});
