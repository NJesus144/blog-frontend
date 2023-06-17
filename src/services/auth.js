import { api } from "./api/api";
import { configToken } from "./token";

export function validUserToken() {
  const response = api.get("/auth", configToken);
  return response;
}
