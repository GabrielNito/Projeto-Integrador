import Threads from '../Entities/threads.entity';

export class ThreadsRepository {
  async findMany() {
    return await Threads.findMany();
  }

  async findById(id: number) {
    return await Threads.findUnique({ where: { id } });
  }
}
