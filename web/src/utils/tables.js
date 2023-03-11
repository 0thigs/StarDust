export const tables = [
  {
    name: 'Usuários',
    columns: [
      {
        name: 'avatar',
        prop: 'avatar',
        isImage: true,
      },
      {
        name: 'nome',
        prop: 'name',
        isImage: false,
      },
      {
        name: 'e-mail',
        prop: 'email',
        isImage: false,
      },
      {
        name: 'poeira estelar',
        prop: 'coins',
        isImage: false,
      },
      {
        name: 'xp',
        prop: 'xp',
        isImage: false,
      },
      {
        name: 'foguete',
        prop: 'selected_rocket_id',
        isImage: false,
      },
      {
        name: 'ranking',
        prop: 'ranking_id',
        isImage: false,
      },
    ],
    entity: 'users',
    relatedEntities: [
      { name: 'rockets', prop: 'selected_rocket_id' },
      { name: 'rankings', prop: 'ranking_id' },
    ],
  },
  {
    name: 'Estrelas',
    columns: [
      {
        name: 'nome',
        prop: 'name',
        isImage: false,
      },
      {
        name: 'número',
        prop: 'number',
        isImage: false,
      },
      {
        name: 'tipo',
        prop: 'isChallenge',
        isImage: false,
      },
      {
        name: 'planeta',
        prop: 'planet_id',
        isImage: true,
      },
    ],
    entity: 'stars',
    relatedEntities: [{ name: 'planets', prop: 'planet_id' }],
    boolValues: ['fase', 'desafio'],
  },
];
