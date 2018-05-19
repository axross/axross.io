type Theme = {
  spacing: Record<SpacingVariant, Spacing>;
  typography: Record<TypographyVariant, Typography>;
};

type SpacingVariant = 'small' | 'regular' | 'large' | 'huge' | 'enormous';

type Spacing = number;

type Typography = {
  family: string;
  size: number;
  weight: number;
  italic?: boolean;
};

type TypographyVariant =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'body1'
  | 'body2'
  | 'caption';

export default Theme;
