import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-bottom: 50px;
  margin: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  margin-bottom: 100px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxComment = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  height: 150px;

  word-break: break-word;
`;
export const BoxButton = styled.div`
  display: flex;
`;

export const Span = styled.p``;
export const Btn = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  margin-right: 5px;
  transition: all 0.3s;
  margin-top: 5px;

  :hover {
    background-color: #e0e0e0;
  }
`;

export const P = styled.p`
  font-size: 20px;
`;
