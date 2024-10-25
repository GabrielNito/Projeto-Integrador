import { Request } from 'express';
import { CreateThreadsDTO } from '../Dtos/create/CreateThreadsDTO.dto';
import { ThreadsRepository } from '../Repositories/Threads.repository';

export class ThreadsService {
  private _threadsRepository = new ThreadsRepository();
  async getAllThreads() {
    return await this._threadsRepository.findMany();
  }

  async getThreadById(id: number) {
    return await this._threadsRepository.findById(id);
  }

  async createThread(body: CreateThreadsDTO, req: Request) {
    const { title } = body;

    const user = req.user;

    if (!user?.id) {
      throw Error('Operation not allowed');
    }

    if (user?.status !== 'active') {
      throw Error('User must be active');
    }

    return await this._threadsRepository.create(title, Number(user.id));
  }
}
