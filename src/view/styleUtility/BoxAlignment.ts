// <baseline-position>: ref. https://www.w3.org/TR/css-align-3/#typedef-baseline-position
type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';

// <content-distribution>: ref. https://www.w3.org/TR/css-align-3/#typedef-content-distribution
type ContentDistribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';

type ContentPositionWithOverflowPosition =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe flex-start'
  | 'safe flex-end';

type SelfPositionWithOverflowPosition =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'unsafe center'
  | 'unsafe start'
  | 'unsafe end'
  | 'unsafe self-start'
  | 'unsafe self-end'
  | 'unsafe flex-start'
  | 'unsafe flex-end'
  | 'safe center'
  | 'safe start'
  | 'safe end'
  | 'safe self-start'
  | 'safe self-end'
  | 'safe flex-start'
  | 'safe flex-end';

type LeftRightWithOverflowPosition = 'left' | 'right' | 'unsafe left' | 'unsafe right' | 'safe left' | 'safe right';

// ref. https://www.w3.org/TR/css-align-3/#propdef-justify-content
export type JustifyContent = 'normal' | ContentDistribution | ContentPositionWithOverflowPosition | 'left' | 'right';

// ref. https://www.w3.org/TR/css-align-3/#propdef-align-content
export type AlignContent = 'normal' | BaselinePosition | ContentDistribution | ContentPositionWithOverflowPosition;

// ref. https://www.w3.org/TR/css-align-3/#propdef-justify-items
export type JustifyItems =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | SelfPositionWithOverflowPosition
  | 'left'
  | 'right'
  | 'center'
  | 'legacy left'
  | 'legacy right'
  | 'legacy center';

// ref. https://www.w3.org/TR/css-align-3/#propdef-align-items
export type AlignItems = 'normal' | 'stretch' | BaselinePosition | SelfPositionWithOverflowPosition;

// ref. https://www.w3.org/TR/css-align-3/#propdef-justify-self
export type JustifySelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | SelfPositionWithOverflowPosition
  | LeftRightWithOverflowPosition;

// ref. https://www.w3.org/TR/css-align-3/#propdef-align-self
export type AlignSelf = 'auto' | 'normal' | 'stretch' | BaselinePosition | SelfPositionWithOverflowPosition;
