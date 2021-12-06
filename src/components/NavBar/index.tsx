import React, { FC, useState } from 'react';
import * as Styled from '../../styled';
import NavBarItem from './NavBarItem';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';

interface NavBarItemElements {
  id: number;
  title: string;
  href: string;
}

const navBarItems: NavBarItemElements[] = [
  {
    id: 1,
    title: 'Home',
    href: '#home',
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.NavBar id="home">
      {navBarItems.map(({ id, title, href }) => (
        <NavBarItem key={id} title={title} href={href} />
      ))}
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Styled.Menu
        opened={isOpen ? true : false}
        onClick={() => setIsOpen(false)}
      >
        {navBarItems.map(({ id, title, href }) => (
          <MenuItem key={id} title={title} href={href} />
        ))}
      </Styled.Menu>
    </Styled.NavBar>
  );
};

export default NavBar;
