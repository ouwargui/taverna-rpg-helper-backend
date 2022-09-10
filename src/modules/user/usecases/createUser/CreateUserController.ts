import {Request, Response} from 'express';
import {Controller} from '../../../../models/Controller';
import {CreateUserUseCase} from './CreateUserUseCase';

class CreateUserController implements Controller {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {uid, email, name, photoUrl} = req.body;

    const created_user = await this.createUserUseCase.execute({
      uid,
      email,
      name,
      photoUrl,
    });

    return res.status(201).json({user: created_user});
  }
}

export {CreateUserController};
