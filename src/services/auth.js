import { api } from "./api/api";
import { configToken } from "./token";

export async function validUserToken() {
  const response = await api.get("/auth", configToken);
  return response;
}
