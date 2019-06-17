import styled from "@emotion/styled";
import React, { Component } from "react";
import LinearGradient from "react-native-web-linear-gradient";

import Content from "./components/Content";

/** =======================================================
 * Types & Config
 * ========================================================
 */

const GRADIENT: ReadonlyArray<string> = ["#f4fffe", "#f7f9f9"];
/** =======================================================
 * React Component
 * ========================================================
 */

class App extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={GRADIENT}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Container>
          <Content />
        </Container>
      </LinearGradient>
    );
  }
}

/** =======================================================
 * Styled Components & Helpers
 * ========================================================
 */

const Container = styled("div")`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

/** =======================================================
 * Export
 * ========================================================
 */

export default App;
