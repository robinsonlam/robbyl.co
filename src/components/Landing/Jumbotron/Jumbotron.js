import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import * as cssVariables from '../../../styling/variables';

const StyledJumbotron = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  padding: 0 ${cssVariables.PADDING_GENERAL};

  align-items: center;
  justify-content: center;

  border: 1px solid red;
`;

const JumboHeading = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 10px 0;
  letter-spacing: 0.1em;
`;

export default class Jumbotron extends Component {
  state = {
    subNavOpen: false,
  }

  render() {
    return (
      <StyledJumbotron>
        <JumboHeading>Robinson &middot; Lam</JumboHeading>
        <p onClick={() => { this.setState({ subNavOpen: !this.state.subNavOpen })}}>Design - Development - Volleyball</p>

        { this.state.subNavOpen && (
          <div><p>Navigation</p></div>
        )}
      </StyledJumbotron>
    );
  }
}
