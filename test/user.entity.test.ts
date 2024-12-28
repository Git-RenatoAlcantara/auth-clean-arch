import { User, UserProps } from "../src/domain/entities/user";

describe("User Test", () => {
    test('constructor', () => {
        let userProps: UserProps = {
            firstName: "Renato",
            lastName: "Alcantara",
            email: "renatoalcantara2022@gmail.com",
            password: "renato123"
        }

        let user = new User(userProps);
        expect(user.props).toStrictEqual({
            ...userProps, id: null, createdAt: null, updatedAt: null
        });

        
        userProps = {
            firstName: "Renato",
            lastName: "Alcantara",
            email: "renatoalcantara2022@gmail.com",
            password: "renato123",
            createdAt: new Date()
        }

        user = new User(userProps);
        expect(user.props).toStrictEqual({
            ...userProps, id: null, updatedAt: null
        });
    })
});