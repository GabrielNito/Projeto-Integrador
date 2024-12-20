import { VisitsRepository } from '../Repositories/Visits.repository';

export class VisitsService {
  private _visitRepository = new VisitsRepository();

  async getAllVisits() {
    return await this._visitRepository.findMany();
  }

  async getVisitById(id: number) {
    return await this._visitRepository.findById(id);
  }
}
