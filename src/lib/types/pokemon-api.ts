type Name = {
  language: Resource;
  name: string;
};
type Resource = {
  name: string;
  url: string;
};
type TypeResource = {
  name: Type;
  url: string;
};
export enum Type {
  Normal = 'normal',
  Fighting = 'fighting',
  Flying = 'flying',
  Poison = 'poison',
  Ground = 'ground',
  Rock = 'rock',
  Bug = 'bug',
  Ghost = 'ghost',
  Steel = 'steel',
  Fire = 'fire',
  Water = 'water',
  Grass = 'grass',
  Electric = 'electric',
  Psychic = 'psychic',
  Ice = 'ice',
  Dragon = 'dragon',
  Dark = 'dark',
  Fairy = 'fairy',
}

export type Move = {
  flavor_text_entries: Array<{ flavor_text: string; language: Resource; }>;
  names: Array<Name>;
  power: number;
  type: TypeResource;
};
export type MoveEntry = {
  move: Resource;
  version_group_details: Array<{ level_learned_at: number; }>;
};
export type Species = {
  names: Array<Name>;
};
type SpritesOther = {
  'official-artwork': {
    front_default: string;
  };
};
type Sprites = {
  front_default: string;
  other: SpritesOther;
};
type Stat = {
  base_stat: number;
  effort: 0;
  stat: Resource;
};
type TypeEntry = {
  slot: number;
  type: TypeResource;
};

export type Pokemon = {
  height: number;
  id: number;
  moves: Array<MoveEntry>;
  name: string;
  sprites: Sprites;
  stats: Array<Stat>;
  types: Array<TypeEntry>;
  weight: number;
};
