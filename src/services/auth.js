import { api } from "./api/api";

export function validUserToken(configToken) {
  const response = api.get("/auth", configToken);
  return response;
}
