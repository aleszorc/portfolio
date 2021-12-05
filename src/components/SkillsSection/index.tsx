import React, { FC } from 'react';
import * as Styled from '../../styled';

const skills = [
  {
    id: 0,
    icon: 'devicon-html5-plain',
    name: 'HTML5',
  },
  {
    id: 1,
    icon: 'devicon-css3-plain',
    name: 'CSS',
  },
  {
    id: 2,
    icon: 'devicon-javascript-plain',
    name: 'JAVASCRIPT + ES6',
  },
  {
    id: 3,
    icon: 'devicon-typescript-plain',
    name: 'TYPESCRIPT',
  },
  {
    id: 4,
    icon: 'devicon-react-plain',
    name: 'REACT',
  },
  {
    id: 5,
    icon: 'devicon-nextjs-plain',
    name: 'NEXT.JS',
  },
  {
    id: 6,
    icon: 'devicon-materialui-plain',
    name: 'MATERIAL UI',
  },
  {
    id: 7,
    icon: 'devicon-graphql-plain',
    name: 'GRAPHQL',
  },

  {
    id: 8,
    icon: 'devicon-python-plain',
    name: 'PYTHON',
  },
  {
    id: 9,
    icon: 'devicon-django-plain',
    name: 'DJANGO',
  },
  {
    id: 10,
    icon: 'devicon-git-plain',
    name: 'GIT',
  },
  {
    id: 11,
    icon: 'devicon-sourcetree-plain',
    name: 'SOURCETREE',
  },
];

const SkillsSection: FC = () => {
  return (
    <Styled.Section column id="skills">
      <Styled.SectionHeaderBox>
        <Styled.SectionHeader>Skills</Styled.SectionHeader>
      </Styled.SectionHeaderBox>
      <Styled.SectionContent>
        <Styled.SkillsBox>
          {skills.map((skill) => (
            <Styled.SkillBox key={skill.id}>
              <Styled.Text size={4}>
                <Styled.Icon className={skill.icon}></Styled.Icon>
              </Styled.Text>
              <Styled.Text size={0.8}>{skill.name}</Styled.Text>
            </Styled.SkillBox>
          ))}
        </Styled.SkillsBox>
      </Styled.SectionContent>
    </Styled.Section>
  );
};

export default SkillsSection;
