import styled from "@emotion/styled";
import React, { Component } from "react";
import LinearGradient from "react-native-web-linear-gradient";

import Header from "./components/Header";

/** =======================================================
 * Types & Config
 * ========================================================
 */

const GRADIENT: ReadonlyArray<any> = ["#EE6060", "#FF3F3F"];

/** =======================================================
 * React Component
 * ========================================================
 */

class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  render(): JSX.Element {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={GRADIENT}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Container>
          <Header />
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
  height: 100vh;
  width: 100vw;
`;

/** =======================================================
 * Export
 * ========================================================
 */

export default App;
