class User{

    private username : string;
    private email : string;


    constructor(){

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

export default User;