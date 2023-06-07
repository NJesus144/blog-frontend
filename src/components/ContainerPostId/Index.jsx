import styled from "styled-components";
import { ContainerMainSection } from "../../layout/ContainerMainSection";
import { SectionComments } from "../SectionComments/Index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin-top: 200px;
  margin-bottom: 100px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const StyledImage = styled.div`
  background-image: url("${props => props.image}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
  max-width: 1200px;
`;

const MainTitle = styled.h1`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  font-size: 42px;
  margin-bottom: 20px;
`;

// const SectionItems = styled.div`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
//   justify-content: space-around;
// `;

// const Title = styled.h2`
//   margin-top: 20px;
//   font-family: "Inter", sans-serif;
//   text-transform: uppercase;
//   text-align: center;
// `;

// const H3 = styled.h3`
//   margin-top: 20px;
//   font-family: "Inter", sans-serif;
//   text-transform: uppercase;
//   text-align: center;
// `;
const Description = styled.p`
  font-size: 20px;
  color: #828282;
  margin-top: 40px;
  text-align: start;
  white-space: pre-wrap;
  font-family: "Inter", sans-serif;
`;

const DivDescription = styled.div`
  padding: 20px;
`;
// const Ul = styled.ul`
//   width: 100%;
//   padding: 10px;
// `;
// const Li = styled.li`
//   list-style: none;
//   font-family: "Inter", sans-serif;
//   font-size: 20px;
//   text-align: center;
// `;

export const ContainerPostId = ({ post }) => {
  return (
    <ContainerMainSection>
      <Container>
        <MainTitle>{post.subtitle}</MainTitle>

        <StyledImage image={post.banner} />
        {post.sections ? (
          <DivDescription>
            <Description>{post.sections[0].text}</Description>
          </DivDescription>
        ) : (
          ""
        )}
      </Container>
      <SectionComments post={post} />
    </ContainerMainSection>
  );
};
