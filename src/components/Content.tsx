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
        <Title>天天吉</Title>
        <SubTitle>Everyday Luck</SubTitle>
        <ImageContainer>
          <img src={`${process.env.PUBLIC_URL}/google.png`} />
          <img src={`${process.env.PUBLIC_URL}/apple.png`} />
        </ImageContainer>
        <DescriptionText>
          This app uses repetitive-learning and a game-based approach to provide
          small, portable lessons covering the <b>Hanyu Shuiping Kaoshi</b>{" "}
          (Chinese Proficiency Test) vocabulary content. The Hanyu Shuiping
          Kaoshi is a standardized Chinese proficiency tests which provides a
          set of vocabulary for learners to practice and learn. There are 5,000
          words provided here to learn.
        </DescriptionText>
        <DescriptionText>
          The goal of the app is to provide an easy and approachable way to
          practice learning and reviewing these words everyday. That's where the
          notion 天天吉 comes into play. You just need a little luck everyday to
          learn Chinese! The name itself also hides a clever joke, if you read
          "jí" differently as "jú", the name is 天天桔 - "Everyday Orange" or
          "Everyday Mandarin".
        </DescriptionText>
        <a
          target="blank"
          href="https://en.wikipedia.org/wiki/Hanyu_Shuiping_Kaoshi"
        >
          Learn more about the HSK
        </a>
        <br />
        <br />
        <a target="blank" href="https://github.com/bonham000/mandarin">
          Open Source Project
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
  max-width: 525px;
  max-height: 500px;
  text-align: center;
`;

const Title = styled("h1")`
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 65px;
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
