import React, { FC } from 'react';
import * as Styled from '../../styled';

const ContactSection: FC = () => {
  return (
    <Styled.Section column id="contact">
      <Styled.SectionHeaderBox>
        <Styled.SectionHeader>Contact</Styled.SectionHeader>
      </Styled.SectionHeaderBox>
      <Styled.SectionContent>
        <Styled.ContactBox>
          <Styled.Text size={1.2}>
            If you have any questions about me or my work, or have a business
            idea I should know about, I'm your guy! I'm available to grab a
            coffee and chat!
          </Styled.Text>
          <br />
          <Styled.Text size={1.2}>You can always reach me at:</Styled.Text>
          <br />
          <Styled.Text size={1.2} upper>
            <Styled.Link href="mailto:ales.zorc1@gmail.com?subject=Getting in Touch with Aleš">
              ales.zorc1@gmail.com
            </Styled.Link>
          </Styled.Text>
          <br />
          <Styled.Text size={1.2}>Thanks for stopping by!</Styled.Text>
        </Styled.ContactBox>
      </Styled.SectionContent>
    </Styled.Section>
  );
};

export default ContactSection;
