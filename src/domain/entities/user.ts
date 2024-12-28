import * as bcrypt from "bcrypt";


export type UserProps = {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class User {
    public props: Required<UserProps>;
    constructor(props: UserProps) {
        this.props = {
            ...props,
            id: props.id || null,
            createdAt: props.createdAt || null,
            updatedAt: props.updatedAt || null
        }
    }

    public static create(firstName: string, lastName: string, password: string): User {

        const hashedPassword = bcrypt.hashSync(password, 10);

        return new User({
            firstName,
            lastName,
            password: hashedPassword,
        } as UserProps);
    }

}