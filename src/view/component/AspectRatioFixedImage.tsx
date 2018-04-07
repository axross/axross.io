import glamorous from 'glamorous';
import { ClassAttributes, createElement, CSSLength } from 'react';

type AspectRatio = [number, number];

type Props = {
  src: string;
  aspectRatio: AspectRatio;
  width?: CSSLength;
  height?: CSSLength;
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

const Root = glamorous.div(({ width, height }: { width: CSSLength; height: CSSLength }) => ({ width, height }));

const Inner = glamorous.div(({ src, aspectRatio }: { src: string; aspectRatio: AspectRatio }) => ({
  paddingTop: `${100 / aspectRatio[0] * aspectRatio[1]}%`,
  backgroundImage: `url(${src})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
}));

export default AspectRatioFixedImage;
