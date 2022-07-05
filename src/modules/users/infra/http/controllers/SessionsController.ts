import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';
import { container } from 'tsyringe';
import CreateSessionService from '../../../services/CreateSessionService';

export default class SessionsController {
  public async create(request: Request, reponse: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSession = container.resolve(CreateSessionService);

    const user = await createSession.execute({ email, password });

    return reponse.json(instanceToInstance(user));
  }
}
