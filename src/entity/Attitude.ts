class Attitude {
  public readonly iconType: AttitudeIconType;
  public readonly name: string;
  public readonly description: string;

  constructor({ iconType, name, description }: { iconType: AttitudeIconType; name: string; description: string }) {
    this.iconType = iconType;
    this.name = name;
    this.description = description;
  }
}

export enum AttitudeIconType {
  BRICK = 'BRICK',
  CLEAN = 'CLEAN',
  CLIENT_AND_SERVER = 'CLIENT_AND_SERVER',
  PULL_REQUEST = 'PULL_REQUEST',
  SPEEDOMETER = 'SPEEDOMETER',
  CODE_FOR_USER = 'CODE_FOR_USER',
}

export default Attitude;
