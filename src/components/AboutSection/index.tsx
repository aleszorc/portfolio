import React, { FC } from 'react';
import * as Styled from '../../styled';

const AboutSection: FC = () => {
  return (
    <Styled.Section column id="about">
      <Styled.SectionHeaderBox>
        <Styled.SectionHeader>About me</Styled.SectionHeader>
      </Styled.SectionHeaderBox>
      <Styled.SectionContent>
        <Styled.SectionContentColumn center>
          <Styled.Text size={1.2}>
            Hello world! I'm Aleš. For the last 10 years I have been working
            with and in startups, mostly in business development and sales. As a
            non-technical founder, I set out to improve my programming skills to
            stay on the cutting edge of technology and better support my team.
            My passion for programming is growing by the minute and I am very
            excited to see where it will take me.
          </Styled.Text>
        </Styled.SectionContentColumn>
        <Styled.PortraitImageWrapper>
          <img src="https://i.ibb.co/0c9y1DN/portrait.png" alt="Aleš" />
        </Styled.PortraitImageWrapper>
      </Styled.SectionContent>
    </Styled.Section>
  );
};

export default AboutSection;
