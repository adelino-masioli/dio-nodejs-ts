import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = (request: Request, response: Response) => {
    const user = request.body;

    if (!user.name) {
      return response
        .status(400)
        .json({ message: "Bad request! Name is required" });
    }

    if (!user.email) {
      return response
        .status(400)
        .json({ message: "Bad request! Email is required" });
    }

    this.userService.createUser(user.name, user.email);

    return response.status(201).json({ message: "User created" });
  };

  getAllUsers = (request: Request, response: Response) => {
    const users = this.userService.getAllUsers();
    response.status(200).json({ users: users });
  };

  deleteUser = (request: Request, response: Response) => {
    const userName = request.body;
    this.userService.deleteUser(userName.name, userName.email);
    return response.status(200).json({ message: "User deleted successfully" });
  };
}
