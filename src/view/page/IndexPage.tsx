import { ClassAttributes, createElement } from 'react';
import styled from '../../core/emotion';
import Expertise from '../../entity/Expertise';
import WorkExperience from '../../entity/WorkExperience';
import _Expertises, { ExpertisesItem } from '../component/Expertises';
import _Skills, { SkillsItem } from '../component/Skills';
import _WorkExperiences, { WorkExperiencesItem } from '../component/WorkExperiences';
import _Footer from '../component/Footer';
import _Header from '../component/Header';
import { Brick, Clean, ClientAndServer, CodeForUser, PullRequest, SpeedoMeter } from '../component/Icon';
import _Introduction from '../component/Introduction';

type Props = ClassAttributes<HTMLElement> & {
  expertises: Expertise[];
  introduction: string;
  workExperiences: WorkExperience[];
};

const IndexPage = ({ expertises, introduction, workExperiences }: Props) => (
  <Root>
    <Header />

    <Introduction>{introduction}</Introduction>

    <Expertises>
      {expertises.map(expertise => <ExpertisesItem expertise={expertise} key={expertise.type} />)}
    </Expertises>

    <Skills>
      <SkillsItem name="Both of *-side" icon={ClientAndServer}>
        We have to know well server-side to know client-side well, and vice versa. My specialty is client-side but I
        also have enough knowledge for server-side.
      </SkillsItem>

      <SkillsItem name="User Centered" icon={CodeForUser}>
        Software is made for users. I keep in mind to design UI and even to name identifiers with thinking of users.
      </SkillsItem>

      <SkillsItem name="OSS Style" icon={PullRequest}>
        I'll create an Issue when I find some problem or some kind of improvement, I'll post an Issue, fix it or improve
        it, create a Pull Request, test and build on CI and then deploy it via code reviewing.
      </SkillsItem>

      <SkillsItem name="Be Agile" icon={SpeedoMeter}>
        I think objective feedbacks from users are more important than subjective our sense of accomplishment. I like to
        improve our software little by little and as agile.
      </SkillsItem>

      <SkillsItem name="As Robust" icon={Brick}>
        The code which is not enough designed for application architecture will decline productivity soon. I always
        write robust code to keep high productivity long time.
      </SkillsItem>

      <SkillsItem name="Keep Clean" icon={Clean}>
        Code ages as same as cells. But code can be refactored. I never leave code untidy.
      </SkillsItem>
    </Skills>

    <WorkExperiences>
      {workExperiences.map(we => <WorkExperiencesItem workExperience={we} key={we.employeeName} />)}
    </WorkExperiences>

    <Footer />
  </Root>
);

const Root = styled('div')`
  grid-template-columns: 1fr;
  areas: 'header' 'introduction' 'expertises' 'skills' 'workExperiences' 'footer';
  padding: 0 calc((100% - 960px) / 2);
`;

const Header = styled(_Header)`
  grid-area: header;
`;

const Introduction = styled(_Introduction)`
  grid-area: introduction;
  margin-bottom: ${({ theme }) => theme.spacing.enormous}px;
`;

const Expertises = styled(_Expertises)`
  grid-area: expertises;
  margin-bottom: ${({ theme }) => theme.spacing.enormous}px;
`;

const Skills = styled(_Skills)`
  grid-area: skills;
  margin-bottom: ${({ theme }) => theme.spacing.enormous}px;
`;

const WorkExperiences = styled(_WorkExperiences)`
  grid-area: workExperiences;
  margin-bottom: ${({ theme }) => theme.spacing.enormous}px;
`;

const Footer = styled(_Footer)`
  grid-area: footer;
  margin: ${({ theme }) => theme.spacing.regular * 5}px 0 ${({ theme }) => theme.spacing.regular * 10}px;
`;

export default IndexPage;
