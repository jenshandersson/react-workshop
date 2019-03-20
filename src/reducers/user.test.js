import reducer from "./user";
import { LOG_IN } from "../actions/user";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      loggedInUser: null
    });
  });

  it("should handle LOG_IN", () => {
    expect(
      reducer([], {
        type: LOG_IN,
        user: { email: "jens@test.com" }
      })
    ).toEqual({
      loggedInUser: { email: "jens@test.com" }
    });
  });
});
