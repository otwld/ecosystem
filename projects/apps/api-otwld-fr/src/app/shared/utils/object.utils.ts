export type tMongoBase = string | number | Array<string> | Array<number> | boolean | null;
export type cRecord = { [key: string]: cRecord | tMongoBase };

/*
   this function transform a complex object into a single level object to be mongo-update-friendly.
   exemple:
   {
      key: {
        subKey: 42
      },
      otherKey: 43
   }
    ===>
    {
      'key.subKey': 42,
      'otherKey': 43
    }
 */
export function multipleLevelObjectToOne(source: cRecord, initialKey?: string): Record<string, tMongoBase> {
  const final: { [key: string]: tMongoBase } = {};

  const _reccExplore = (parent: cRecord, key: string): void => {
    Object.keys(parent).forEach((key2) => {
      const compose = key + '.' + key2;
      if (typeof parent[key2] === 'object' && !(parent[key2] instanceof Array)) {
        _reccExplore(<cRecord>parent[key2], compose);
      } else {
        final[compose] = <tMongoBase>parent[key2];
      }
    });
  };

  Object.keys(source).forEach((key) => {
    if (typeof source[key] === 'object' && !(source[key] instanceof Array)) {
      _reccExplore(<cRecord>source[key], key);
    } else {
      final[key] = <tMongoBase>source[key];
    }
  });

  return final;
}
