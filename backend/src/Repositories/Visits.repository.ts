import Visits from '../Entitites/visits.entity';

export class VisitsRepository {
  async findMany() {
    return await Visits.findMany({ include: { user: true } });
  }
}
