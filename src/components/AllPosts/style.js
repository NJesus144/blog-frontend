import styled from "styled-components";

export const TitleSection = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #1a1a1a;
`;

export const SectionRowAndHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  margin: auto;
`;

export const DivButton = styled.div`
  margin-top: 30px;
`;

export const ContainerRowPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  padding: 10px;

  @media (max-width: 620px) {
    margin-top: 100px;
    padding: 0;
  }
`;
