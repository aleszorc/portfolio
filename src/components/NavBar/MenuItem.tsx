import React, { FC } from 'react';
import * as Styled from '../../styled';
import { HashLink as Link } from 'react-router-hash-link';

interface MenuItemProps {
  title: string;
  href: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, href }) => {
  return (
    <Styled.MenuItem>
      <Link to={`/${href}`} style={{ textDecoration: 'none' }}>
        <Styled.LinkWrapper>{title}</Styled.LinkWrapper>
      </Link>
    </Styled.MenuItem>
  );
};

export default MenuItem;
