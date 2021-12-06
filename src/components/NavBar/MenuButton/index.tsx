import React, { FC } from 'react';
import * as Styled from '../../../styled';

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: any;
}

const MenuButton: FC<MenuButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Styled.MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
      <Styled.Bar style={{ transform: `rotate(${!isOpen ? 0 : '45deg'})` }} />
      <Styled.Bar
        style={{
          opacity: !isOpen ? 1 : 0,
          transform: `translateX(${!isOpen ? 0 : '20px'})`,
        }}
      />
      <Styled.Bar style={{ transform: `rotate(${!isOpen ? 0 : '-45deg'})` }} />
    </Styled.MobileMenuButton>
  );
};

export default MenuButton;
