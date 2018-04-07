import { AlignContent, AlignItems, AlignSelf, JustifyContent, JustifyItems, JustifySelf } from './BoxAlignment';

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export const flexibleLayoutContainer = ({
  direction,
  wrap,
  justifyContent,
  alignContent,
  justifyItems,
  alignItems,
}: {
  direction?: Direction;
  wrap?: Wrap;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
}) =>
  ({
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justifyContent as any,
    alignContent: alignContent as any,
    justifyItems: justifyItems as any,
    alignItems: alignItems as any,
  } as any);

export const flexibleLayoutItem = ({
  order,
  grow,
  shrink,
  basis,
  justifySelf,
  alignSelf,
}: {
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: any;
  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
}) => ({
  order,
  flexGrow: grow,
  flexShrink: shrink,
  flexBasis: basis,
  justifySelf: justifySelf as any,
  alignSelf: alignSelf as any,
});
