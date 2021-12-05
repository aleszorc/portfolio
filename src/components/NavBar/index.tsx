import React, { FC, useState } from 'react';
import * as Styled from '../../styled';
import NavBarItem from './NavBarItem';
import MenuItem from './MenuItem';
import { HiMenu, HiX } from 'react-icons/hi';

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
      <Styled.MenuButton onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? <HiMenu size={'3rem'} /> : <HiX size={'3rem'} />}
      </Styled.MenuButton>
      {isOpen && (
        <Styled.Menu onClick={() => setIsOpen(false)}>
          {navBarItems.map(({ id, title, href }) => (
            <MenuItem key={id} title={title} href={href} />
          ))}
        </Styled.Menu>
      )}
    </Styled.NavBar>
  );
};

export default NavBar;
