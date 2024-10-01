import users from '../Entitites/users.entity';
export class UserRepository {
  async findMany() {
    return await users.findMany();
  }
}
