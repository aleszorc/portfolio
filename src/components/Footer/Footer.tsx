import React, { FC } from 'react';
import * as Styled from '../../styled';

const Footer: FC = () => {
  return (
    <Styled.Footer>
      <Styled.Text size={1} upper>
        Designed by Aleš Zorc. {new Date().getFullYear()}.
      </Styled.Text>
    </Styled.Footer>
  );
};

export default Footer;
