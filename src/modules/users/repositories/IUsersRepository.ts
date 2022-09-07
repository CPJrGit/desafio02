import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  id?: string;
  admin?: boolean;
  created_at: Date;
  updated_at: Date;
}

interface IUsersRepository {
  create({ name, email, created_at, updated_at }: ICreateUserDTO): User;
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  turnAdmin(user: User): User;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
