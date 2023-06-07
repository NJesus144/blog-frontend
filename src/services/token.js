const token = localStorage.getItem("@Auth:token");
export const configToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
