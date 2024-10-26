import { UpdateThreadDTO } from '../Dtos/update/UpdateThreadDTO.dto';
import Threads from '../Entities/threads.entity';

export class ThreadsRepository {
  async findMany() {
    return await Threads.findMany({ include: { posts: true, user: true } });
  }

  async findById(id: number) {
    return await Threads.findUnique({
      where: { id },
      include: { posts: true, user: true },
    });
  }

  async create(title: string, userId: number) {
    return await Threads.create({
      data: {
        title,
        userId,
      },
    });
  }

  async update(dto: UpdateThreadDTO) {
    const { id, ...data } = dto;
    return await Threads.update({
      where: { id },
      data,
    });
  }
}
