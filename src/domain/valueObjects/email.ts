import { EmailErrorType } from "domain/enum/EmailErrorType"

type EmailProps = {
    address: string
}


export class Email {
    private _address: string
    constructor(props: EmailProps){
        if(
            props.address == null || 
            !props.address.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            )
        ){
            throw new Error(EmailErrorType.InvaInvalidEmail)
        }

        this._address = props.address;
    }

    get address(): string {
        return this._address
    }
}