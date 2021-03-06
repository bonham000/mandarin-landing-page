import styled from "@emotion/styled";
import React from "react";

/** ========================================================================
 * Config
 * =========================================================================
 */

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.everyday.luck&hl=en";
const APP_STORE = "";
const HSK_INFO = "https://en.wikipedia.org/wiki/Hanyu_Shuiping_Kaoshi";
const GITHUB = "https://github.com/bonham000/mandarin";
const REPO = "https://github.com/bonham000/everyday-luck-app";
const TERMS_OF_USE = `${REPO}/blob/master/documents/TERMS_OF_USE.md`;
const PRIVACY_POLICY = `${REPO}/blob/master/documents/PRIVACY_POLICY.md`;

/** =======================================================
 * React Component
 * ========================================================
 */

const Content = () => {
  return (
    <Container>
      <ContentContainer>
        <img className="orange" src={`${process.env.PUBLIC_URL}/orange.png`} />
        <Title>天天吉</Title>
        <SubTitle>Everyday Luck 🍀</SubTitle>
        <ImageContainer>
          <a target="blank" href={PLAY_STORE}>
            <img
              className="app-link"
              src={`${process.env.PUBLIC_URL}/google.png`}
            />
          </a>
          <a target="blank" href={APP_STORE}>
            <img
              className="app-link"
              src={`${process.env.PUBLIC_URL}/apple.png`}
            />
          </a>
        </ImageContainer>
        <DescriptionText>
          This app uses repetitive-learning and a game-based approach to provide
          small, portable lessons covering the{" "}
          <a target="blank" href={HSK_INFO}>
            <b>Hanyu Shuiping Kaoshi</b>
          </a>{" "}
          (Chinese Proficiency Test) vocabulary content. The Hanyu Shuiping
          Kaoshi is a standardized Chinese proficiency tests which provides a
          set of vocabulary for learners to practice and learn. This app
          provides 5,000 words to learn.
        </DescriptionText>
        <DescriptionText>
          The goal of the app is to provide an easy and approachable way to
          practice learning and reviewing these words everyday. That's where the
          notion 天天吉 comes into play. You just need a little luck everyday to
          learn Chinese! The name itself also hides a clever joke, if you read
          "jí" differently as "jú", the name is 天天桔 - "Everyday Orange" or
          "Everyday Mandarin".
        </DescriptionText>
        <a target="blank" href={GITHUB}>
          Open Source Project
        </a>
        <DocumentsBox>
          <TermsText>
            Everyday Luck
            <a className="terms" target="blank" href={TERMS_OF_USE}>
              Terms of Use
            </a>
            &
            <a className="terms" target="blank" href={PRIVACY_POLICY}>
              Privacy Policy
            </a>
          </TermsText>
        </DocumentsBox>
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
  margin-top: -200px;
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
  font-weight: 600;
`;

const DescriptionText = styled("p")`
  font-size: 15px;
`;

const TermsText = styled("p")`
  margin: 5px;
  font-size: 11px;
  color: rgb(40, 40, 40);
`;

const ImageContainer = styled("div")`
  padding: 2px;
  align-items: center;
  justify-content: center;
`;

const DocumentsBox = styled("div")`
  margin-top: 16px;
  text-align: center;
`;

/** =======================================================
 * Export
 * ========================================================
 */

export default Content;
