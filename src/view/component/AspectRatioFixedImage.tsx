import { ClassAttributes, createElement } from 'react';
import styled from '../../core/emotion';

type AspectRatio = [number, number];

type Props = {
  src: string;
  aspectRatio: AspectRatio;
  width?: string;
  height?: string;
  className?: string;
};

const AspectRatioFixedImage = ({
  src,
  aspectRatio,
  width = '100%',
  height = 'auto',
  className,
}: ClassAttributes<HTMLElement> & Props) => (
  <Root width={width} height={height} className={className}>
    <Inner src={src} aspectRatio={aspectRatio} />
  </Root>
);

const Root = styled<{ width: string; height: string }, 'div'>('div')`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Inner = styled<{ src: string; aspectRatio: AspectRatio }, 'div'>('div')`
  padding-top: ${({ aspectRatio }) => 100 / aspectRatio[0] * aspectRatio[1]}%;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default AspectRatioFixedImage;
