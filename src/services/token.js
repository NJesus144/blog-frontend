const token = localStorage.getItem("@Auth:token");
export const configToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

// export const configToken = () => {
//   if (token) {
//     const tokenConfig = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     return tokenConfig;
//   }
// };
