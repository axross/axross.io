import glamorous from 'glamorous';
import { ClassAttributes, createElement, MouseEventHandler } from 'react';
import JobExperience from '../../entity/JobExperience';
import Counter from './Counter';

type Props = ClassAttributes<HTMLElement> & {
  jobExperiences: JobExperience[];
  count: number;
  onClickIncrement: MouseEventHandler<HTMLElement>;
  onClickDecrement: MouseEventHandler<HTMLElement>;
};

const IndexPage = ({ jobExperiences, count, onClickIncrement, onClickDecrement }: Props) => (
  <Root>
    <ul>{jobExperiences.map(jobExperience => <li key={jobExperience.employee}>{jobExperience.employee}</li>)}</ul>

    <Counter count={count} onClickIncrement={onClickIncrement} onClickDecrement={onClickDecrement} />
  </Root>
);

const Root = glamorous.div({});

export default IndexPage;
