import { css } from 'react-emotion';
import { CSSLength } from 'react';
import Theme, { Spacing } from '../../core/Theme';

type Gap = keyof Spacing | CSSLength;

const grid = ({ columns, gap }: { columns: number; gap: Gap }) => ({ theme }: { theme: Theme }) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-gap: ${(theme.spacing as any)[gap] !== undefined ? `${(theme.spacing as any)[gap]}px` : gap};
`;

export default grid;
