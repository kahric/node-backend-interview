import db from './connection';

db.exec(`CREATE TABLE IF NOT EXISTS ads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  description TEXT,
  category TEXT,
  price REAL,
  location TEXT,
  sellerType TEXT,
  isFeatured INTEGER,
  createdAt TEXT,
  updatedAt TEXT
)`);

console.log('Migration complete');
