import db from './connection';

db.exec('DELETE FROM ads');

const stmt = db.prepare('INSERT INTO ads (title, description, category, price, location, sellerType, isFeatured, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');

const categories = ['auto', 'nekretnine', 'elektronika', 'namještaj', 'sport', 'usluge'];
const locations = ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar', 'Varaždin'];
const now = new Date().toISOString();

for (let i = 1; i <= 30; i++) {
  stmt.run(
    `Oglas ${i}`,
    `Opis oglasa ${i}`,
    categories[i % categories.length],
    Math.floor(Math.random() * 10000),
    locations[i % locations.length],
    i % 2 === 0 ? 'private' : 'business',
    i % 3 === 0 ? 1 : 0,
    now,
    now
  );
}

console.log('Seed complete');
