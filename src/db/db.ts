import type { TGameDB } from '@/types';

import Dexie, { type EntityTable } from 'dexie';

const db = new Dexie('GameDB') as Dexie & {
  game: EntityTable<
  TGameDB,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  game: '++id, board, answer' // primary key "id" (for the runtime!)
});

export type { TGameDB };
export default db;
