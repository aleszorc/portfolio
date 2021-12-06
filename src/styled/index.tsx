import styled, { css, createGlobalStyle } from 'styled-components';
import theme from './theme';

interface HeaderSpanProps {
  underline?: boolean;
  strikethrough?: boolean;
  rotated?: boolean;
}

interface SectionProps {
  alignCenter?: boolean;
  column?: boolean;
}

interface SectionContentColumnProps {
  center?: boolean;
}

interface TextProps {
  size: number;
  upper?: boolean;
}

interface MenuProps {
  opened?: boolean;
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
    padding-left: 5%;
    padding-right: 5%;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

// CSS helpers

const baseHeaderStyles = css`
  font-weight: 500;
  color: ${theme.color.whitish};
  text-transform: uppercase;
`;

const baseFlex = css`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// General

export const LinkWrapper = styled.div`
  color: ${theme.color.whitish};
`;

export const Link = styled.a`
  color: ${theme.color.whitish};
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    box-shadow: inset 0rem -0.2rem 0rem 0rem ${theme.color.main};
  }
`;

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.size + 'rem'};
  text-transform: ${(props) => (props.upper ? 'uppercase' : 'none')};
  line-height: 2rem;
  margin: 0;
`;

export const HeaderSpan = styled.span<HeaderSpanProps>`
  display: inline-block;
  box-shadow: ${(props) =>
    props.underline
      ? `inset 0rem -0.3rem 0rem 0rem ${theme.color.main}`
      : 'none'};
  text-decoration: ${(props) =>
    props.strikethrough ? `line-through` : 'none'};
  transform: ${(props) => (props.rotated ? 'rotate(15deg)' : 'none')};
  transition: 500ms;
`;

export const Header = styled.h1`
  ${baseHeaderStyles}
  font-size: 3rem;
  &:hover ${HeaderSpan} {
    transform: rotate(0deg);
    transition: 500ms;
  }
`;

export const Section = styled.section<SectionProps>`
  ${baseFlex}
  min-height: 100vh;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: ${(props) => (props.alignCenter ? 'center' : 'flex-start')};
`;

export const SectionHeaderBox = styled.div`
  ${baseFlex}
  justify-content: center;
  padding-bottom: 5rem;
  @media (max-width: 768px) {
    padding-bottom: 0rem;
  }
`;

export const SectionHeader = styled.h2`
  ${baseHeaderStyles}
  font-size: 2rem;
  box-shadow: inset 0rem -0.3rem 0rem 0rem ${theme.color.main};
  text-align: center;
`;

export const SectionContent = styled.div`
  ${baseFlex}
  justify-content: space-around;
`;

export const SectionContentColumn = styled.div<SectionContentColumnProps>`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SubsectionHeader = styled.h3`
  ${baseHeaderStyles}
  font-size: 1.5rem
`;

export const Icon = styled.i`
  &:hover {
    color: ${theme.color.main};
  }
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
  &:hover {
    border-bottom: 0.3rem solid ${theme.color.main};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0;
  padding-top: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Bar = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: ${theme.color.whitish};
  transition: all 0.3s linear;
  transform-origin: -3px;
  position: relative;
`;

export const Menu = styled.div<MenuProps>`
  position: absolute;
  text-align: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
  top: 5rem;
  transition: all 0.3s linear;
  transform: ${(props) =>
    !props.opened ? 'translateX(500px)' : 'translateX(0)'};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  ${baseHeaderStyles}
  font-size: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// About Section

export const PortraitImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 15rem;
  width: 20rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 15rem;
  }
`;

export const SkillsBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SkillBox = styled.div`
  display: flex;
  width: 10rem;
  padding-bottom: 4rem;
  flex-direction: column;
  align-items: center;
`;

// Work Section

export const WorkImageWrapper = styled.div`
  width: 30%;
  padding-left: 5rem;
`;

export const WorkImage = styled.img`
  padding-top: 5rem;
  width: 100%;
  height: auto;
`;

// Contact Section

export const ContactBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;
