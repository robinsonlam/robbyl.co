import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-static';

import * as cssVariables from '../../../styling/variables';

const StyledGlobalNavigation = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;

  padding: ${cssVariables.PADDING_GENERAL};
`;

const StyledLink = styled(Link)`
  padding: 0.6rem 1rem;
  margin: 0 ${cssVariables.PADDING_SMALL};
  display: inline-block;

  color: ${cssVariables.COLOR_BLACK};
  text-decoration: none;

  transition: all 0.34s ease-in-out;

  &:hover {
    background: ${cssVariables.COLOR_BLACK};
    color: ${cssVariables.COLOR_WHITE};
    border-radius: 2px;
  }
`;

export default class GlobalNavigation extends Component {
  render() {
    return (
      <StyledGlobalNavigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/work">Work</StyledLink>
        <StyledLink to="/contact">Contact Me!</StyledLink>
      </StyledGlobalNavigation>
    );
  }
}
