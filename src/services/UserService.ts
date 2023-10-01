export interface User {
  name: string;
  email: string;
}

const db = [
  {
    name: "User Name",
    email: "email@example.com",
  },
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    console.log(this.db);
  };

  getAllUsers = () => {
    return this.db;
  };

  deleteUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    console.log("User deleted successfully", this.db);
    return this.db.filter(function (userName) {
      return userName != user;
    });
  };
}
