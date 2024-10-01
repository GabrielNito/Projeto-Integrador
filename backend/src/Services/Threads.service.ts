import { ThreadsRepository } from '../Repositories/Threads.repository';

export class ThreadsService {
  private _threadsRepository = new ThreadsRepository();
  async getAllThreads() {
    return await this._threadsRepository.findMany();
  }

  async getThreadsById(id: number) {
    return await this._threadsRepository.findById(id);
  }
}
