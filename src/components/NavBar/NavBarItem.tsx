import React, { FC } from 'react';
import * as Styled from '../../styled';
import { HashLink as Link } from 'react-router-hash-link';

interface Props {
  title: string;
  href: string;
}

const NavBarItem: FC<Props> = ({ title, href }) => {
  return (
    <Styled.NavBarItem>
      <Link to={`/${href}`} style={{ textDecoration: 'none' }}>
        <Styled.LinkWrapper>{title}</Styled.LinkWrapper>
      </Link>
    </Styled.NavBarItem>
  );
};

export default NavBarItem;
