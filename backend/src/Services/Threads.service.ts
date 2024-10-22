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

  async createThread(body: CreateThreadsDTO) {
    const { title, userId } = body;

    return await this._threadsRepository.create(title, userId);
  }
}
