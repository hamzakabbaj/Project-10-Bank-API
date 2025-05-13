import axios from "axios";

export const loginAPI = async (username, password) => {
  const res = await axios.post("http://localhost:3001/api/v1/user/login", {
    email: username,
    password: password,
  });

  if (res.data.body.token) {
    const user = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {}, // empty body since we don't need to send any data
      {
        headers: {
          Authorization: `Bearer ${res.data.body.token}`,
        },
      }
    );
    return { user: user.data.body, token: res.data.body.token };
  }
  return res.data; // expects { user, token }
};
