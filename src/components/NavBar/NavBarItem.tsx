import React, { FC } from 'react';
import * as Styled from '../../styled';

interface Props {
  title: string;
  href: string;
}

const NavBarItem: FC<Props> = ({ title, href }) => {
  return (
    <Styled.NavBarItem>
      <Styled.Link href={href}>{title}</Styled.Link>
    </Styled.NavBarItem>
  );
};

export default NavBarItem;
