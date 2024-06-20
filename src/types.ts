export type Skill = {
  name: string;
  xp: number;
  level: number;
  maxlevel: number;
  description: string;
}

export type Inventory = {
  [key: string]: number;
}

export type XPPacket = {
  fishing?: number;
}

export type Item = {
  name: string;
  xp: XPPacket;
  description: string;
  ticks: number;
}
