import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const created_at = new Date();
    const updated_at = new Date();

    const emailExists = this.usersRepository.findByEmail(email);

    if (emailExists) {
      throw new Error("Email is already taken");
    }

    return this.usersRepository.create({
      email,
      name,
      created_at,
      updated_at,
    });
  }
}

export { CreateUserUseCase };
