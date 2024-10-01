import { Router } from 'express';
import { VisitsController } from '../Controllers/Visits.controller';

const router = Router();
const visits = new VisitsController();

router.get('/', visits.getAllVisits);

export default router;
