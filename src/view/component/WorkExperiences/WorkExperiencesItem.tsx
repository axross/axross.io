import glamorous from 'glamorous';
import { DateTime } from 'luxon';
import { ClassAttributes, createElement } from 'react';
import theme from '../../../theme';
import WorkExperience from '../../../entity/WorkExperience';
import { gridLayoutContainer, gridLayoutItem } from '../../styleUtility/gridLayout';
import AspectRatioFixedImage from '../AspectRatioFixedImage';
import Text from '../Text';
import { flexibleLayoutContainer } from '../../styleUtility/flexibleLayout';

export type Props = ClassAttributes<HTMLElement> & {
  workExperience: WorkExperience;
  className?: string;
};

const WorkExperiencesItem = ({ workExperience, className }: Props) => (
  <Root className={className}>
    <EmployeeThumbnailImage src={workExperience.employeeThumbnailImageUrl} aspectRatio={[1, 1]} width={80} />

    <EmployeeName type="heading2">{workExperience.employeeName}</EmployeeName>

    <Period>
      <PeriodEnd type="sub">
        {workExperience.endedAt === null ? 'Still Working' : workExperience.endedAt.toLocaleString(DateTime.DATE_FULL)}
      </PeriodEnd>

      <Dash type="sub">−</Dash>

      <PeriodStart type="sub">{workExperience.startedAt.toLocaleString(DateTime.DATE_FULL)}</PeriodStart>
    </Period>

    <Summary type="body2" sentence>
      {workExperience.summary}
    </Summary>
  </Root>
);

const Root = glamorous.li({
  ...gridLayoutContainer({
    columns: ['80px', `${theme.spacing.regular}px`, '1fr'],
    rows: ['auto', 'auto', 'auto'],
    areas: [
      ['employeeThumbnailImage', '.', 'employeeName'],
      ['employeeThumbnailImage', '.', 'period'],
      ['employeeThumbnailImage', '.', 'summary'],
    ],
  }),
});

const EmployeeThumbnailImage = glamorous(AspectRatioFixedImage)(gridLayoutItem('employeeThumbnailImage'));

const EmployeeName = glamorous(Text)({ ...gridLayoutItem('employeeName'), marginBottom: theme.spacing.regular });

const Period = glamorous.div({
  ...gridLayoutItem('period'),
  ...flexibleLayoutContainer({
    direction: 'row',
  }),
  marginBottom: theme.spacing.regular,
});

const PeriodEnd = glamorous(Text)({ marginRight: theme.spacing.small });

const Dash = PeriodEnd;

const PeriodStart = glamorous(Text)();

const Summary = glamorous(Text)(gridLayoutItem('summary'));

export default WorkExperiencesItem;
