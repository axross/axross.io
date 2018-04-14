import { DateTime } from 'luxon';
import { ClassAttributes, createElement } from 'react';
import styled from '../../../core/emotion';
import WorkExperience from '../../../entity/WorkExperience';
import AspectRatioFixedImage from '../AspectRatioFixedImage';
import Text from '../Text';

export type Props = ClassAttributes<HTMLElement> & {
  workExperience: WorkExperience;
  className?: string;
};

const WorkExperiencesItem = ({ workExperience, className }: Props) => (
  <Root className={className}>
    <EmployeeThumbnailImage src={workExperience.employeeThumbnailImageUrl} aspectRatio={[1, 1]} width="80px" />

    <EmployeeName type="heading2">{workExperience.employeeName}</EmployeeName>

    <Period>
      <PeriodEnd type="body2">
        {workExperience.endedAt === null ? 'Still Working' : workExperience.endedAt.toLocaleString(DateTime.DATE_FULL)}
      </PeriodEnd>

      <Dash type="body2">−</Dash>

      <PeriodStart type="body2">{workExperience.startedAt.toLocaleString(DateTime.DATE_FULL)}</PeriodStart>
    </Period>

    <Summary sentence>{workExperience.summary}</Summary>
  </Root>
);

const Root = styled('li')`
  display: grid;
  grid-template-columns: 80px ${({ theme }) => theme.spacing.regular}px 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'employeeThumbnailImage . employeeName'
    'employeeThumbnailImage . period'
    'employeeThumbnailImage . summary';
`;

const EmployeeThumbnailImage = styled(AspectRatioFixedImage)`
  grid-area: employeeThumbnailImage;
`;

const EmployeeName = styled(Text)`
  grid-area: employeeName;
  margin-bottom: ${({ theme }) => theme.spacing.regular}px;
`;

const Period = styled('div')`
  grid-area: period;
  display: flex;
  direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.regular}px;
`;

const PeriodEnd = styled(Text)`
  margin-right: ${({ theme }) => theme.spacing.small}px;
`;

const Dash = PeriodEnd;

const PeriodStart = Text;

const Summary = styled(Text)`
  grid-area: summary;
`;

export default WorkExperiencesItem;
