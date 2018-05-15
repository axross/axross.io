type Theme = {
  spacing: Record<SpacingVariant, Spacing>;
  typography: Record<TypographyVariant, Typography>;
};

type SpacingVariant = 'small' | 'regular' | 'large' | 'huge' | 'enormous';

type Spacing = number;

type Typography = {
  size: number;
  weight: number;
};

type TypographyVariant = 'body1' | 'body2' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5';

export default Theme;
