import { css } from 'react-emotion';
import Theme from '../../core/Theme';

type SpacingVariant = keyof Theme['spacing'];
type Gap = SpacingVariant | number | string;

const grid = ({ columns, gap }: { columns: number; gap: Gap }) => ({ theme }: { theme: Theme }) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-gap: ${(theme.spacing as any)[gap] !== undefined ? `${(theme.spacing as any)[gap]}px` : gap};
`;

export default grid;
