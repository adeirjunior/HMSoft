import Database from '@tauri-apps/plugin-sql';

const db = Database.load('sqlite:test.db');

export default db;