import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Amiko');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  font-family: 'Amiko', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
  'Lucida Grande', sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
`;

const GlobalNavigation = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  display: inline-block;
`;

export default () => (
  <Router>
    <div>
      <GlobalNavigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
      </GlobalNavigation>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
