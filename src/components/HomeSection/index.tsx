import React, { FC } from 'react';
import * as Styled from '../../styled';

const HomeSection: FC = () => {
  return (
    <Styled.HomeSection>
      <Styled.Header>
        <Styled.HeaderSpan underline>Aleš Zorc</Styled.HeaderSpan>
        <br />
        <Styled.HeaderSpan strikethrough>BUSINESS </Styled.HeaderSpan>
        <Styled.HeaderSpan>FRONT-END</Styled.HeaderSpan>
        <br />
        <Styled.HeaderSpan>DEVELOPER</Styled.HeaderSpan>
      </Styled.Header>
    </Styled.HomeSection>
  );
};

export default HomeSection;
