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

`;

const JumboHeading = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  color: ${cssVariables.COLOR_WHITE};

  padding: 10px 0;
`;

const CentrePiece = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${cssVariables.COLOR_BLACK};

  padding: ${cssVariables.PADDING_DOUBLE};

  border-radius: 3px;

  &:before {
    content: '';
    position: absolute;
    left: 10px;
    right: 10px;
    top: -20px;
    bottom: -20px;

    border: 2px solid ${cssVariables.COLOR_WHITE};
    border-radius: 3px;
    clip-path: polygon(0 75%, 0 0, 100% 0%, 100% 100%, 25% 100%, 25% 75%);
  }

  &:after {
    content: '';
    position: absolute;
    left: -10px;
    right: -10px;
    top: -10px;
    bottom: -10px;

    border: 2px solid ${cssVariables.COLOR_BLACK};
    border-radius: 3px;
    clip-path: polygon(0 0, 65% 0%, 65% 25%, 100% 25%, 100% 100%, 0 100%);
  }

  p {
    color: ${cssVariables.COLOR_WHITE};
  }
`;

export default class Jumbotron extends Component {
  state = {
    subNavOpen: false,
  }

  render() {
    return (
      <StyledJumbotron>
        <CentrePiece>
          <JumboHeading>Robinson &middot; Lam</JumboHeading>
          <p onClick={() => { this.setState({ subNavOpen: !this.state.subNavOpen })}}>
            Design &middot; Development &middot; Volleyball
          </p>

          { this.state.subNavOpen && (
            <div><p>Navigation</p></div>
          )}
        </CentrePiece>
      </StyledJumbotron>
    );
  }
}
