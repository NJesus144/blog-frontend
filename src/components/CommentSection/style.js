import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-bottom: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxComment = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  height: 100px;
  word-break: break-word;
`;
export const BoxButton = styled.div`
  display: flex;
`;
export const H2 = styled.h2`
  color: #434955;
  font-family: "Roboto";
  margin-bottom: 20px;
`;

export const Span = styled.p``;
export const Btn = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  margin-right: 5px;
  transition: all 0.3s;

  :hover {
    background-color: #e0e0e0;
  }
`;

export const P = styled.p`
  font-size: 20px;
`;
