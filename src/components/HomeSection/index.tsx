import React, { FC } from 'react';
import * as Styled from '../../styled';

const HomeSection: FC = () => {
  return (
    <Styled.Section alignCenter>
      <Styled.Header>
        <Styled.HeaderSpan underline>Aleš Zorc</Styled.HeaderSpan>
        <br />
        <Styled.HeaderSpan>Front-end</Styled.HeaderSpan>
        <br />
        <Styled.HeaderSpan>Develope</Styled.HeaderSpan>
        <Styled.HeaderSpan rotated>r</Styled.HeaderSpan>
      </Styled.Header>
    </Styled.Section>
  );
};

export default HomeSection;
