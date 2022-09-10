import {PrismaClient, User} from '@prisma/client';
import {ICreateUserDTO, IUserRepository} from '../IUserRepository';

class UserRepository implements IUserRepository {
  private db: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.db = prismaClient;
  }

  async createUser(params: ICreateUserDTO): Promise<User> {
    const created_user = await this.db.user.create({
      data: {
        ...params,
        created_at: new Date(),
      },
    });

    return created_user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user_found = await this.db.user.findUnique({
      where: {
        email,
      },
    });

    return user_found;
  }
}

export {UserRepository};
