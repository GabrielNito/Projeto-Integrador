import Visits from '../Entities/visits.entity';

export class VisitsRepository {
  async findMany() {
    return await Visits.findMany({ include: { user: true } });
  }

  async findById(id: number) {
    return await Visits.findUnique({ where: { id }, include: { user: true } });
  }
}
