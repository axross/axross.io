// import { ClassAttributes, ComponentType, CSSLength, createElement, HTMLProps, ReactElement } from 'react';
// import styled from '../../core/emotion';
// import Theme from '../../core/Theme';

// // type DefaultComponentType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

// type Props = ClassAttributes<HTMLElement> & {
//   cols: number;
//   gap?: CSSLength;
//   className?: string;
//   children: ReactElement<any>[] | ReactElement<any>;
// };

// // const Grid = ({ component, cols, gap, className, children }: Props) => {
// //   if (component) {
// //     if (typeof component === 'string') {
// //       RootBase.withComponent(component as keyof JSX.IntrinsicElements);
// //     } else {
// //       RootBase.withComponent(component as ComponentType<any>);
// //     }
// //   } else {
// //     RootBase;
// //   }

// //   const Root = component ? RootBase.withComponent(component as any) : RootBase;

// //   return (
// //     <Root cols={cols} gap={gap} className={className}>
// //       {children}
// //     </Root>
// //   );
// // };

// const Grid = styled<Props, 'ul'>('ul')`
//   display: grid;
//   grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
//   grid-gap: ${({ gap, theme }) => {
//     console.log(theme);

//     if (gap === undefined) return theme.spacing.regular;
//     if ((theme.spacing as any)[gap] !== undefined) return (theme.spacing as any)[gap];

//     return gap;
//   }}px;
// `;

// export default Grid;
