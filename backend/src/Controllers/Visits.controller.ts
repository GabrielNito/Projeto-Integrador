import { NextFunction, Request, Response } from 'express';
import { VisitsService } from '../Services/Visits.service';

export class VisitsController {
  private _visitsService: VisitsService;

  constructor() {
    this._visitsService = new VisitsService();
  }

  getAllVisits = async (_req: Request, res: Response, next: NextFunction) => {
    const data = await this._visitsService.getAllVisits();
    try {
      res.status(200).json({
        message: 'Success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  getVisitById = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const data = await this._visitsService.getVisitById(id);
    try {
      res.status(200).json({
        message: 'Success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}
