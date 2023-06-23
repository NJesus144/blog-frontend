import styled from "styled-components";

export const MainContainerLastPosts = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  gap: 64px;
  margin: auto;

  padding-bottom: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
  gap: 32px;

  @media (max-width: 1300px) {
    width: 800px;
  }

  @media (max-width: 880px) {
    width: 600px;
    flex-direction: column;
    gap: 0;
    padding: 0;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const StyleParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  color: #1a1a1a;

  span {
    color: #74768f;
  }
`;
export const Content = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1216px;

  @media (max-width: 1300px) {
    width: 800px;
    flex-direction: column;
  }

  @media (max-width: 880px) {
    width: 600px;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
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
