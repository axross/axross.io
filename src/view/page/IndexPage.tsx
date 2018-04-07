import glamorous from 'glamorous';
import { ClassAttributes, createElement, MouseEventHandler } from 'react';
import WorkExperience from '../../entity/WorkExperience';
import theme from '../../theme';
import { gridLayoutContainer, gridLayoutItem } from '../styleUtility/gridLayout';
import _Expertises, { ExpertisesItem } from '../component/Expertises';
import _WorkExperiences, { WorkExperiencesItem } from '../component/WorkExperiences';
import _Header from '../component/Header';
import { Css, Dart, Flutter, GraphQL, Html, JavaScript, Nodejs, React, TypeScript } from '../component/Icon';
import _Introduction from '../component/Introduction';
import Counter from './Counter';

type Props = ClassAttributes<HTMLElement> & {
  workExperiences: WorkExperience[];
  count: number;
  onClickIncrement: MouseEventHandler<HTMLElement>;
  onClickDecrement: MouseEventHandler<HTMLElement>;
};

const IndexPage = ({ workExperiences, count, onClickIncrement, onClickDecrement }: Props) => (
  <Root>
    <Header />

    <Introduction />

    <Expertises rows={5}>
      <ExpertisesItem name="TypeScript" icon={TypeScript} />

      <ExpertisesItem name="React" icon={React} />

      <ExpertisesItem name="Dart" icon={Dart} />

      <ExpertisesItem name="Flutter" icon={Flutter} />

      <ExpertisesItem name="GraphQL" icon={GraphQL} />

      <ExpertisesItem name="JavaScript" icon={JavaScript} />

      <ExpertisesItem name="Node.js" icon={Nodejs} />

      <ExpertisesItem name="HTML" icon={Html} />

      <ExpertisesItem name="CSS" icon={Css} />
    </Expertises>

    <WorkExperiences>
      {workExperiences.map(we => <WorkExperiencesItem workExperience={we} key={we.employeeName} />)}
    </WorkExperiences>

    <Counter count={count} onClickIncrement={onClickIncrement} onClickDecrement={onClickDecrement} />
  </Root>
);

const Root = glamorous.div({
  ...gridLayoutContainer({
    columns: ['1fr'],
    rows: ['auto', 'auto', 'auto'],
    areas: [['header'], ['introduction'], ['expertises'], ['workExperiences']],
  }),
  padding: '0 calc((100% - 960px)  / 2)',
});

const Header = glamorous(_Header)(gridLayoutItem('header'));

const Introduction = glamorous(_Introduction)({
  ...gridLayoutItem('introduction'),
  marginBottom: theme.spacing.enormous,
});

const Expertises = glamorous(_Expertises)({ ...gridLayoutItem('expertises'), marginBottom: theme.spacing.enormous });

const WorkExperiences = glamorous(_WorkExperiences)({
  ...gridLayoutItem('workExperiences'),
  marginBottom: theme.spacing.enormous,
});

export default IndexPage;
