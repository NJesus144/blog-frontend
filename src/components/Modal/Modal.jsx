import styled from "styled-components";

const ContainerModal = styled.div`
  background-color: red;
  z-index: 999;
  height: 100vh;

  opacity: 0.5;
`;

export const Modal = ({ isOpen }) => {
  if (isOpen) {
    return <ContainerModal>12</ContainerModal>;
  } else {
    <></>;
  }
};
