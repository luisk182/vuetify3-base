import { client } from "../config";

export async function login(email: string, password: string) {
  const body = {
    email,
    password,
  };
  try {
    const { data } = await client.post("/sessions", body);
    return data;
  } catch (err) {
    return null;
  }
}
