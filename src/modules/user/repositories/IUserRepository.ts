import {User} from '../models/User';

export interface ICreateUserDTO {
  uid: string;
  email: string;
  name: string;
  photoUrl?: string;
}

export interface IUserRepository {
  createUser: (data: ICreateUserDTO) => Promise<User>;
  findUserByEmail: (email: string) => Promise<User | null>;
}
