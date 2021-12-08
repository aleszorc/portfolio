import React, { FC } from 'react';
import * as Styled from '../../styled';

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Styled.Footer>
      <Styled.ScrollToTop>
        <Styled.Text size={1.3} upper onClick={() => scrollToTop()}>
          Go to Top
        </Styled.Text>
      </Styled.ScrollToTop>

      <Styled.Text size={1} upper>
        Designed by Aleš Zorc. {new Date().getFullYear()}.
      </Styled.Text>
    </Styled.Footer>
  );
};

export default Footer;
