import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';

import { Jumbotron } from '../components'

const HomePage = styled.div`
  display: flex;
`;

export default withSiteData(() => (
  <HomePage>
    <Jumbotron />
  </HomePage>
))
