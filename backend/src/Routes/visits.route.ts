import { Router } from 'express';
import { VisitsController } from '../Controllers/Visits.controller';

const router = Router();
const visits = new VisitsController();

router.get('/', visits.getAllVisits);

router.get('/:id', visits.getVisitById);

export default router;
