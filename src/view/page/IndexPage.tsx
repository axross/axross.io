import { ClassAttributes, createElement } from 'react';
import styled from '../../core/emotion';
import _Expertises, { ExpertisesItem } from '../component/Expertises';
import _Attitudes, { AttitudesItem } from '../component/Attitudes';
import _WorkExperiences, { WorkExperiencesItem } from '../component/WorkExperiences';
import _Footer from '../component/Footer';
import _Header from '../component/Header';
import _Introduction from '../component/Introduction';
import { Consumer as StateConsumer } from '../context/state';

type Props = ClassAttributes<HTMLElement> & {};

const IndexPage = ({  }: Props) => (
  <StateConsumer>
    {state => (
      <Root>
        <Header name={state.name} title={state.title} />

        <Introduction>{state.introduction}</Introduction>

        <Expertises>
          {state.expertises.map(expertise => <ExpertisesItem expertise={expertise} key={expertise.iconType} />)}
        </Expertises>

        <Attitudes>
          {state.attitudes.map(attitude => <AttitudesItem attitude={attitude} key={attitude.iconType} />)}
        </Attitudes>

        <WorkExperiences>
          {state.workExperiences.map(we => <WorkExperiencesItem workExperience={we} key={we.employeeName} />)}
        </WorkExperiences>

        <Footer />
      </Root>
    )}
  </StateConsumer>
);

const Root = styled('div')`
  grid-template-columns: 1fr;
  areas: 'header' 'introduction' 'expertises' 'attitudes' 'workExperiences' 'footer';
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

const Attitudes = styled(_Attitudes)`
  grid-area: attitudes;
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
