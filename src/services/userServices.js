import { api } from "./api/api";

export function createUser(name, username, email, password) {
  const response = api.post(`/user`, { name, username, email, password });
  return response;
}
