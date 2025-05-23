import axios from "axios";
import { clearToken, getToken } from "@/utils/tokenStorage";

export const loginAPI = async (username, password) => {
  let token = getToken();
  if (!token) {
    const res = await axios.post("http://localhost:3001/api/v1/user/login", {
      email: username,
      password: password,
    });
    token = res.data.body.token;
  }

  if (token) {
    try {
      const user = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { user: user.data.body, token: token };
    } catch (error) {
      console.error("Error fetching user profile:", error);
      clearToken();
      throw error;
    }
  }
  return res.data; // expects { user, token }
};

export const updateUser = async (firstName, lastName) => {
  const token = getToken();
  const res = await axios.put(
    "http://localhost:3001/api/v1/user/profile",
    { firstName, lastName },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};
