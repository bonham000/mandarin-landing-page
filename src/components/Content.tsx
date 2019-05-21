import styled from "@emotion/styled";
import React from "react";

/** =======================================================
 * React Component
 * ========================================================
 */

const Content = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>很多汉字</Title>
        <SubTitle>Mandarin Learning App</SubTitle>
        <ImageContainer>
          <img src={`${process.env.PUBLIC_URL}/google.png`} />
          <img src={`${process.env.PUBLIC_URL}/apple.png`} />
        </ImageContainer>
        <DescriptionText>
          This app uses the vocabulary content from the{" "}
          <b>Hanyu Shuiping Kaoshi</b> (Chinese Proficiency Test). This test is
          the standardized test of Standard Chinese language proficiency of
          China for non-native speakers such as foreign students and overseas
          Chinese.
        </DescriptionText>
        <DescriptionText>
          There are 6 levels total, which comprise a total of 5,000 words and
          about 2,500 characters. The goal of the app is to break these lessons
          into a series of small challenges which can be mastered with a little
          practice each day.
        </DescriptionText>
        <a
          target="blank"
          href="https://en.wikipedia.org/wiki/Hanyu_Shuiping_Kaoshi"
        >
          Learn more about the HSK
        </a>
      </ContentContainer>
    </Container>
  );
};

/** =======================================================
 * Styled Components & Helpers
 * ========================================================
 */

const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContentContainer = styled("div")`
  padding: 12px;
  max-width: 500px;
  max-height: 500px;
  text-align: center;
`;

const Title = styled("h1")`
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 75px;
  font-weight: bold;
`;

const SubTitle = styled("h1")`
  margin-top: 10;
  margin-bottom: 10;
  font-size: 25px;
  font-weight: 500;
`;

const DescriptionText = styled("p")`
  font-size: 15px;
`;

const ImageContainer = styled("div")`
  padding: 2px;
  align-items: center;
  justify-content: center;
`;

/** =======================================================
 * Export
 * ========================================================
 */

export default Content;
