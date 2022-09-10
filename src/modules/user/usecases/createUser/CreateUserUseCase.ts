import {UseCase} from '../../../../models/UseCase';
import {User} from '../../models/User';
import {
  ICreateUserDTO,
  IUserRepository,
} from '../../repositories/IUserRepository';

class CreateUserUseCase implements UseCase<ICreateUserDTO, User> {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(params: ICreateUserDTO): Promise<User> {
    const {uid, email, name} = params;

    if (!uid || !email || !name) {
      throw new Error('Email and name are required');
    }

    const user_found = await this.userRepository.findUserByEmail(email);

    if (user_found) {
      throw new Error('User already exists');
    }

    const created_user = await this.userRepository.createUser(params);

    return created_user;
  }
}

export {CreateUserUseCase};
