import qs from "querystring";
import { store } from "../store";

const BASE = "https://staging.baseup.me/api/v1";

const authUrl = `${BASE}/oauth/token/`;

export const callApi = path => {
  const state = store.getState();
  const token = state.user.loggedInUser.token;
  return fetch(`${BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/vnd.api+json"
    }
  }).then(res => res.json());
};

export const getToken = async (username, password) => {
  const params = {
    client_id: "gbNB4y8t9KjDQxWyndAXy0ta1e4mvmN5Fc0vKaPL",
    grant_type: "password",
    username,
    password
  };
  try {
    const response = await fetch(authUrl, {
      method: "post",
      body: qs.stringify(params),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(r => r.json());
    console.log(response);
    if (response && response.data && response.data.access_token) {
      return response.data;
    }
    if (response.errors) {
      throw new Error(response.errors[0].detail);
    }
  } catch (e) {
    throw new Error("Login exception");
  }
  return null;
};
