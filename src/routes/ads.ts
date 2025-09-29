import { Router } from 'express';
import * as adsController from '../controllers/adsController';

const router = Router();

router.get('/', adsController.getAds);
router.get('/:id', adsController.getAdById);
router.post('/', adsController.createAd);
router.put('/:id', adsController.updateAd);
router.delete('/:id', adsController.deleteAd);

export default router;
