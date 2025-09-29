import db from '../db/connection';

export const findAll = (filters: any) => {
  let query = 'SELECT * FROM ads WHERE 1=1';
  if (filters.q) query += ` AND title LIKE '%${filters.q}%'`;
  if (filters.category) query += ` AND category = '${filters.category}'`;
  // BUG: minPrice and maxPrice swapped intentionally
  if (filters.minPrice) query += ` AND price <= ${filters.minPrice}`;
  if (filters.maxPrice) query += ` AND price >= ${filters.maxPrice}`;
  return db.prepare(query).all();
};

export const findById = (id: number) => {
  return db.prepare('SELECT * FROM ads WHERE id = ?').get(id);
};

export const create = (data: any) => {
  const stmt = db.prepare('INSERT INTO ads (title, description, category, price, location, sellerType, isFeatured, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
  const now = new Date().toISOString();
  const result = stmt.run(data.title, data.description, data.category, data.price, data.location, data.sellerType, data.isFeatured ? 1 : 0, now, now);
  return { id: result.lastInsertRowid, ...data, createdAt: now, updatedAt: now };
};

export const update = (id: number, data: any) => {
  const stmt = db.prepare('UPDATE ads SET title = ?, description = ?, category = ?, price = ?, location = ?, sellerType = ?, isFeatured = ?, updatedAt = ? WHERE id = ?');
  const now = new Date().toISOString();
  stmt.run(data.title, data.description, data.category, data.price, data.location, data.sellerType, data.isFeatured ? 1 : 0, now, id);
  return { id, ...data, updatedAt: now };
};

export const remove = (id: number) => {
  db.prepare('DELETE FROM ads WHERE id = ?').run(id);
};
