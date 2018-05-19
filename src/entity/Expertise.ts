class Expertise {
  public readonly iconType: ExpertiseIconType;
  public readonly name: string;

  constructor({ iconType, name }: { iconType: ExpertiseIconType; name: string }) {
    this.iconType = iconType;
    this.name = name;
  }
}

export enum ExpertiseIconType {
  TYPESCRIPT = 'TYPESCRIPT',
  REACT = 'REACT',
  DART = 'DART',
  FLUTTER = 'FLUTTER',
  GRAPHQL = 'GRAPHQL',
  JAVASCRIPT = 'JAVASCRIPT',
  NODEJS = 'NODEJS',
  HTML = 'HTML',
  CSS = 'CSS',
}

export default Expertise;
