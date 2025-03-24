import { getFormattedDate } from "../utils/getFormattedDate";

class User {

    constructor(username, email, password){

        this.username = username;
        this.email = email;
        this.password = password;
        this.created_date = getFormattedDate();

    }    

    setUsername = (username) => this.username = username;

    setEmail = (email) => this.email = email;

    setPassword = (password) => this.password = password;

    setCreatedDate =  () => this.created_date = getFormattedDate();

    getUsername = () => this.username;

    getEmail = () => this.email;

    getPassword = () => this.password;

    getCreadtedDate = () => this.created_date;

    
}

export default User;