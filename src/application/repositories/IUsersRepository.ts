import { ICreateUserRequestDTO } from "domain/dtos/ICreateUserRequestDTO"
import { IUpdateUserRequestDTO } from "domain/dtos/IUpdateUserRequestDTO"
import { IUserInRequestDTO } from "domain/dtos/IUserInRequestDTO"
import { IUserOutRequestDTO } from "domain/dtos/IUserOutRequestDTO"

export interface IUsersRepository {
    create(data: ICreateUserRequestDTO): Promise<IUserOutRequestDTO>
  }