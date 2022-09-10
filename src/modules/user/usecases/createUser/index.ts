import PrismaRepository from '../../../../db/PrismaRepository';
import {UserRepository} from '../../repositories/implementations/UserRepository';
import {CreateUserController} from './CreateUserController';
import {CreateUserUseCase} from './CreateUserUseCase';

const prismaClient = PrismaRepository.getInstance();
const userRepository = new UserRepository(prismaClient);
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export {createUserController};
