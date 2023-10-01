import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
  };
  const userController = new UserController(mockUserService as UserService);

  it("should create a new user", () => {
    const mockRequest = {
      body: {
        name: "Test Name",
        email: "test@example.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({ message: "User created" });
  });

  it("should be check if the Username has been filled in", () => {
    const mockRequest = {
      body: {
        name: "",
        email: "teste@example.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Name is required",
    });
  });

  it("should be check if the Email has been filled in", () => {
    const mockRequest = {
      body: {
        name: "Test Name",
        email: "",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Email is required",
    });
  });
});
