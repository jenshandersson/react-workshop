import { getToken } from "../api";

/*
 * action types
 */

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export type User = { email: string; name: string; token: string };

/*
 * action creators
 */

export function loginUser(user: User) {
  return { type: LOG_IN, user };
}

export function logoutUser() {
  return { type: LOG_OUT };
}

export const loginUserAsync = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    const data = await getToken(email, password);
    const user = {
      email,
      name: "Demo user",
      token: data.access_token
    };
    dispatch(loginUser(user));
  } catch (e) {
    console.warn(e);
  }
};
