export enum Effectiveness {
  Null = 0,
  Weak = 0.5,
  Normal = 1,
  Strong = 2,
}

const TypeNames = {
  Normal: 'Normal',
  Fire: 'Fire',
  Water: 'Water',
  Grass: 'Grass',
  Electric: 'Electric',
  Ice: 'Ice',
  Fighting: 'Fighting',
  Poison: 'Poison',
  Ground: 'Ground',
  Flying: 'Flying',
  Psychic: 'Psychic',
  Bug: 'Bug',
  Rock: 'Rock',
  Ghost: 'Ghost',
  Dragon: 'Dragon',
  Dark: 'Dark',
  Steel: 'Steel',
  Fairy: 'Fairy',
};

export interface Type {
  name: string;
  defendingMultiplier: Record<string, Effectiveness>;
  attackingMultiplier: Record<string, Effectiveness>;
}

function generateTypeInfo(
  name: string,
  defendingMultiplier: Record<string, Effectiveness>,
  attackingMultiplier: Record<string, Effectiveness>
): Type {
  const attack = Types.reduce((prev, type) => {
    return {
      ...prev,
      [type]: attackingMultiplier[type] || Effectiveness.Normal,
    };
  }, {});

  const defend = Types.reduce((prev, type) => {
    return {
      ...prev,
      [type]: defendingMultiplier[type] || Effectiveness.Normal,
    };
  }, {});

  return {
    name,
    defendingMultiplier: defend,
    attackingMultiplier: attack,
  };
}

export const Types = Object.values(TypeNames);
export const BattleTypes = {
  // [TypeNames.Normal]: generateTypeInfo(
  //   TypeNames.Normal,
  //   {
  //     [TypeNames.Fighting]: Effectiveness.Strong,
  //     [TypeNames.Ghost]: Effectiveness.Null,
  //   },
  //   {
  //     [TypeNames.Rock]: Effectiveness.Weak,
  //     [TypeNames.Ghost]: Effectiveness.Null,
  //     [TypeNames.Steel]: Effectiveness.Weak,
  //   }
  // ),
  // [TypeNames.Fire]: generateTypeInfo(
  //   TypeNames.Fire,
  //   {
  //     [TypeNames.Fire]: Effectiveness.Weak,
  //     [TypeNames.Water]: Effectiveness.Strong,
  //     [TypeNames.Grass]: Effectiveness.Weak,
  //     [TypeNames.Ice]: Effectiveness.Weak,
  //     [TypeNames.Ground]: Effectiveness.Strong,
  //     [TypeNames.Bug]: Effectiveness.Weak,
  //     [TypeNames.Rock]: Effectiveness.Strong,
  //     [TypeNames.Steel]: Effectiveness.Weak,
  //     [TypeNames.Fairy]: Effectiveness.Weak,
  //   },
  //   {
  //     [TypeNames.Fire]: Effectiveness.Weak,
  //     [TypeNames.Water]: Effectiveness.Weak,
  //     [TypeNames.Grass]: Effectiveness.Strong,
  //     [TypeNames.Ice]: Effectiveness.Strong,
  //     [TypeNames.Bug]: Effectiveness.Strong,
  //     [TypeNames.Rock]: Effectiveness.Weak,
  //     [TypeNames.Dragon]: Effectiveness.Weak,
  //     [TypeNames.Steel]: Effectiveness.Strong,
  //   }
  // ),
  // [TypeNames.Water]: generateTypeInfo(
  //   TypeNames.Water,
  //   {
  //     [TypeNames.Fire]: Effectiveness.Weak,
  //     [TypeNames.Water]: Effectiveness.Weak,
  //     [TypeNames.Grass]: Effectiveness.Strong,
  //     [TypeNames.Electric]: Effectiveness.Strong,
  //     [TypeNames.Ice]: Effectiveness.Weak,
  //     [TypeNames.Steel]: Effectiveness.Weak,
  //   },
  //   {
  //     [TypeNames.Fire]: Effectiveness.Strong,
  //     [TypeNames.Water]: Effectiveness.Weak,
  //     [TypeNames.Grass]: Effectiveness.Weak,
  //     [TypeNames.Ground]: Effectiveness.Strong,
  //     [TypeNames.Rock]: Effectiveness.Strong,
  //     [TypeNames.Dragon]: Effectiveness.Weak,
  //   }
  // ),
  // [TypeNames.Grass]: generateTypeInfo(
  //   TypeNames.Grass,
  //   {
  //     [TypeNames.Fire]: Effectiveness.Strong,
  //     [TypeNames.Water]: Effectiveness.Weak,
  //     [TypeNames.Grass]: Effectiveness.Weak,
  //     [TypeNames.Electric]: Effectiveness.Weak,
  //     [TypeNames.Ice]: Effectiveness.Strong,
  //     [TypeNames.Poison]: Effectiveness.Strong,
  //     [TypeNames.Ground]: Effectiveness.Weak,
  //     [TypeNames.Flying]: Effectiveness.Strong,
  //     [TypeNames.Bug]: Effectiveness.Strong,
  //   },
  //   {
  //     [TypeNames.Fire]: Effectiveness.Weak,
  //     [TypeNames.Water]: Effectiveness.Strong,
  //     [TypeNames.Grass]: Effectiveness.Weak,
  //     [TypeNames.Poison]: Effectiveness.Weak,
  //     [TypeNames.Ground]: Effectiveness.Strong,
  //     [TypeNames.Flying]: Effectiveness.Weak,
  //     [TypeNames.Bug]: Effectiveness.Weak,
  //     [TypeNames.Rock]: Effectiveness.Strong,
  //     [TypeNames.Dragon]: Effectiveness.Weak,
  //     [TypeNames.Steel]: Effectiveness.Weak,
  //   }
  // ),
  [TypeNames.Electric]: generateTypeInfo(
    TypeNames.Electric,
    {
      [TypeNames.Electric]: Effectiveness.Weak,
      [TypeNames.Ground]: Effectiveness.Strong,
      [TypeNames.Flying]: Effectiveness.Weak,
      [TypeNames.Steel]: Effectiveness.Weak,
    },
    {
      [TypeNames.Water]: Effectiveness.Strong,
      [TypeNames.Grass]: Effectiveness.Weak,
      [TypeNames.Electric]: Effectiveness.Weak,
      [TypeNames.Ground]: Effectiveness.Null,
      [TypeNames.Flying]: Effectiveness.Strong,
      [TypeNames.Dragon]: Effectiveness.Weak,
    }
  ),
};
