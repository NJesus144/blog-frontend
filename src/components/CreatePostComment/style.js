import styled from "styled-components";

export const Textarea = styled.textarea`
  resize: none;

  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #434955;
  opacity: 0.6;
  border: 2px solid #ffff;
  border-top: 2px solid #c7c9ca;
  background-color: #f3f3f3;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  transition: ease-in-out 0.3s;

  :focus {
    border: 2px solid #4aa884;
  }
`;

export const Form = styled.form`
  max-width: 1000px;

  button {
    width: 250px;
  }
  @media (max-width: 420px) {
    button {
      width: 200px;
      padding: 10px;
    }
  }
`;

// export const Button = styled.button`
//   padding: 20px 30px;
//   border: none;
//   background-color: #942292;
//   color: #fff;
//   font-family: "Roboto", sans-serif;
//   font-size: 16px;
//   text-transform: uppercase;
//   margin-bottom: 20px;
//   transition: all 0.3s;
//   border-radius: 6px;

//   :hover {
//     background-color: #b405ae;
//     cursor: pointer;
//   }
// `;
