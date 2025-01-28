export class User{

    private username : string ;
    private email : string;
    private firstName : string;
    private lastName : string;


    constructor(){
        this.username = "";
        this.email =""

    }

    public setUsername(username: string): void{
        this.username = username;
    }

    public getUsername(): string{
        return this.username;
    }

    public setEmail(email: string): void{
        this.email = email;
    }

    public getEmail(): string{
        return this.email;
    }
}

