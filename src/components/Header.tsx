import styled from "@emotion/styled";
import React from "react";

/** =======================================================
 * Types & Config
 * ========================================================
 */

/** =======================================================
 * React Component
 * ========================================================
 */

const Header = () => {
  return (
    <HeaderContainer>
      <Title>React Web Starter</Title>
    </HeaderContainer>
  );
};

/** =======================================================
 * Styled Components & Helpers
 * ========================================================
 */

const HeaderContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-horizontal: 25;
  padding-vertical: 15;
`;

const Title = styled("h1")`
  color: white;
  font-size: 26;
  font-weight: 500;
`;

/** =======================================================
 * Export
 * ========================================================
 */

export default Header;
