import { Request } from 'express';
import { CreateThreadsDTO } from '../Dtos/create/CreateThreadsDTO.dto';
import { ThreadsRepository } from '../Repositories/Threads.repository';
import { UpdateThreadDTO } from '../Dtos/update/UpdateThreadDTO.dto';

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

  async updateThread(data: UpdateThreadDTO, req: Request) {
    const user = req.user;

    const thread = await this._threadsRepository.findById(data.id);

    if (thread?.userId !== user?.id) {
      throw Error('Operation not allowed');
    }

    return await this._threadsRepository.update(data);
  }

  async deleteThread(req: Request) {
    const id = Number(req.params.id);
    const user = req.user;
    const thread = await this._threadsRepository.findById(id);

    console.log(user?.id, thread?.userId);

    if (user?.id !== thread?.userId) {
      throw Error('Operation not allowed');
    }

    return await this._threadsRepository.delete(id);
  }
}
