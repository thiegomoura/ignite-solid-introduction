import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const userId = request.params;

    const users = this.listAllUsersUseCase.execute();

    return response.json(users);
  }
}

export { ListAllUsersController };
