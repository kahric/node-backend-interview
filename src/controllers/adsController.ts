import { Request, Response } from 'express';
import * as adsService from '../services/adsService';

export const getAds = (req: Request, res: Response) => {
  const ads = adsService.getAllAds(req.query);
  res.json(ads);
};

export const getAdById = (req: Request, res: Response) => {
  const ad = adsService.getAdById(Number(req.params.id));
  if (!ad) return res.status(404).json({ error: 'Not found' });
  res.json(ad);
};

export const createAd = (req: Request, res: Response) => {
  const ad = adsService.createAd(req.body);
  res.status(201).json(ad);
};

export const updateAd = (req: Request, res: Response) => {
  const ad = adsService.updateAd(Number(req.params.id), req.body);
  res.json(ad);
};

export const deleteAd = (req: Request, res: Response) => {
  adsService.deleteAd(Number(req.params.id));
  res.status(204).send();
};
