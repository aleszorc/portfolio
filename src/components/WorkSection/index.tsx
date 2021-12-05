import React, { FC } from 'react';
import * as Styled from '../../styled';

const WorkSection: FC = () => {
  return (
    <Styled.Section column id="work">
      <Styled.SectionHeaderBox>
        <Styled.SectionHeader>Recent Work</Styled.SectionHeader>
      </Styled.SectionHeaderBox>
      <Styled.SectionContent>
        <Styled.SectionContentColumn>
          <Styled.SubsectionHeader>Cronus</Styled.SubsectionHeader>
          <Styled.Text size={1}>
            All-in-one digital printing automation system.
          </Styled.Text>
          <Styled.Text size={1}>MADE WITH:</Styled.Text>
          <Styled.Text size={2.5}>
            <i className="devicon-react-plain"></i>{' '}
            <i className="devicon-nextjs-plain"></i>{' '}
            <i className="devicon-materialui-plain"></i>
          </Styled.Text>
          <Styled.WorkImage src="/images/cronus.png" alt="cronus" />
        </Styled.SectionContentColumn>
        <Styled.SectionContentColumn>
          <Styled.SubsectionHeader>Pregl Digital</Styled.SubsectionHeader>
          <Styled.Text size={1}>
            Cross-platform lab inventory management mobile app.
          </Styled.Text>
          <Styled.Text size={1}>MADE WITH:</Styled.Text>
          <Styled.Text size={2.5}>
            <i className="devicon-react-plain"></i>{' '}
            <i className="devicon-typescript-plain"></i>{' '}
            <i className="devicon-graphql-plain"></i>{' '}
          </Styled.Text>
          <Styled.WorkImageWrapper>
            <Styled.WorkImage src="/images/pregldigital.png" alt="cronus" />
          </Styled.WorkImageWrapper>
        </Styled.SectionContentColumn>
      </Styled.SectionContent>
    </Styled.Section>
  );
};

export default WorkSection;
