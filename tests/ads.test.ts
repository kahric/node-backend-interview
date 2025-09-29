import request from 'supertest';
import app from '../src/app';

describe('Ads API', () => {
  it('should list ads', async () => {
    const res = await request(app).get('/ads');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a single ad', async () => {
    const res = await request(app).get('/ads/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('should create an ad', async () => {
    const ad = {
      title: 'Test ad',
      description: 'Test desc',
      category: 'auto',
      price: 5000,
      location: 'Zagreb',
      sellerType: 'private',
      isFeatured: true
    };
    const res = await request(app).post('/ads').send(ad);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
