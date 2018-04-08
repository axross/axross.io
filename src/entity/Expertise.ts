export type ExpertiseType =
  | 'TYPESCRIPT'
  | 'REACT'
  | 'DART'
  | 'FLUTTER'
  | 'GRAPHQL'
  | 'JAVASCRIPT'
  | 'NODEJS'
  | 'HTML'
  | 'CSS';

class Expertise {
  public readonly type: ExpertiseType;

  constructor({ type }: { type: ExpertiseType }) {
    this.type = type;
  }
}

export default Expertise;
