import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import theme from './theme';

interface HeaderSpanProps {
  underline?: boolean;
  strikethrough?: boolean;
}

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    background-color: ${theme.color.blackish};
    color: ${theme.color.whitish};
    font-family: "Sen", sans-serif;
    width: 90%;
    margin: 0 auto;
  }
`;

// General

export const Link = styled.a`
  color: ${theme.color.whitish};
  text-decoration: none;
`;

// NavBar

export const NavBar = styled.nav`
  height: 3.125rem;
  display: flex;
  justify-content: flex-end;
`;

export const NavBarItem = styled.div`
  height: 100%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  margin: 0 2rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  :hover {
    border-bottom: 0.3rem solid ${theme.color.yellowish};
  }
`;

// Home Section

export const HomeSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${theme.color.whitish};
  text-transform: uppercase;
`;

export const HeaderSpan = styled.span<HeaderSpanProps>`
  box-shadow: ${(props) =>
    props.underline
      ? `inset 0rem -0.3rem 0rem 0rem ${theme.color.yellowish}`
      : 'none'};
  text-decoration: ${(props) =>
    props.strikethrough ? `line-through` : 'none'};
`;
