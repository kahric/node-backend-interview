import * as adsRepository from '../repositories/adsRepository';

export const getAllAds = (filters: any) => {
  return adsRepository.findAll(filters);
};

export const getAdById = (id: number) => {
  return adsRepository.findById(id);
};

export const createAd = (data: any) => {
  return adsRepository.create(data);
};

export const updateAd = (id: number, data: any) => {
  return adsRepository.update(id, data);
};

export const deleteAd = (id: number) => {
  return adsRepository.remove(id);
};
