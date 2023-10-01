import { User, UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it("should create new user", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("user-test", "emailtest@email.com");
    expect(mockConsole).toHaveBeenCalledWith(mockDb);
  });

  it("sust delete a user from the Database", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.deleteUser("user-test", "emailtest@email.com");
    expect(mockConsole).toHaveBeenCalledWith(
      "User deleted successfully",
      mockDb
    );
  });
});
