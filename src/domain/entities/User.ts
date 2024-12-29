import { ICreateUserRequestDTO } from "domain/dtos/ICreateUserRequestDTO";
import { IUpdateUserRequestDTO } from "domain/dtos/IUpdateUserRequestDTO";
import { Email } from "domain/valueObjects/email";

export interface UserInterface {
    name: string
    email: Email
    password: string
}


export class UserEntity {
    private _name: string
    private _email: Email
    private _password: string


    constructor(props: UserInterface){
        this._name = props.name
        this._password = props.password
        this._email = props.email
    }

    static create({ email, name, password} : ICreateUserRequestDTO): UserEntity{
        const newEmail = new Email({ address: email})
        return new UserEntity({ name, email: newEmail, password})
    }


    static update(updatedUser: IUpdateUserRequestDTO): IUpdateUserRequestDTO {
        if(updatedUser.email){
            updatedUser.email = new Email({ address: updatedUser.email }).address
        }
        return updatedUser
    }


    get name(): string {
        return this._name
    }

    get email(): Email {
        return this._email
    }

    get password(): string {
        return this._password
    }
}