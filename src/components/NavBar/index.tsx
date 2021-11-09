import React, { FC } from 'react';
import * as Styled from '../../styled';
import NavBarItem from './NavBarItem';

interface NavBarItemElements {
  id: number;
  title: string;
  href: string;
}

const navBarItems: NavBarItemElements[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'About',
    href: '#about',
  },
  {
    id: 3,
    title: 'Work',
    href: '#work',
  },
  {
    id: 4,
    title: 'Contact',
    href: '#contact',
  },
];

const NavBar: FC = () => {
  return (
    <Styled.NavBar>
      {navBarItems.map(({ id, title, href }) => (
        <NavBarItem key={id} title={title} href={href} />
      ))}
    </Styled.NavBar>
  );
};

export default NavBar;
