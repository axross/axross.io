import { AlignContent, AlignItems, AlignSelf, JustifyContent, JustifyItems, JustifySelf } from './BoxAlignment';

export const gridLayoutContainer = ({
  columns,
  rows,
  areas,
  justifyContent,
  alignContent,
  justifyItems,
  alignItems,
}: {
  columns: string[];
  rows: string[];
  areas: string[][];
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
}) =>
  ({
    display: 'grid',
    gridTemplateColumns: columns.join(' '),
    gridTemplateRows: rows.join(' '),
    gridTemplateAreas: areas.map(rowItems => `"${rowItems.join(' ')}"`).join(' '),
    justifyContent: justifyContent as any,
    alignContent: alignContent as any,
    justifyItems: justifyItems as any,
    alignItems: alignItems as any,
  } as any);

export const gridLayoutItem = (
  area: string,
  {
    justifySelf,
    alignSelf,
  }: {
    justifySelf?: JustifySelf;
    alignSelf?: AlignSelf;
  } = {},
) => ({
  gridArea: area,
  justifySelf: justifySelf as any,
  alignSelf: alignSelf as any,
});
