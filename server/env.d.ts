import { IBusiness } from "./src/interfaces/IBusiness";
import { IDetail } from "./src/interfaces/IDetail";

declare global {
  var localStorage: LocalStorage;
    namespace Express {
      interface Request {
        params:{
          searchTerm : string;

        },
        user: {
            username:string;
            email:string
            id:mongoose.Types.ObjectId
        },
        body: IUser | IUserReset | IUserDeactivated | IUserForgot | IUserAuthorized | IBusiness | IDetail
      }
    }
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: string;
        MONGODB_URI: string;
        JSON_WEB_TOKEN_SECRET: string;
        BCRYPT_SALT_ROUNDS : string;
        BASE_URL : string;
        NANOID_SIZE : string;
        PORT: number;
        NODEMAILER_USERNAME : string;
        NODEMAILER_PASSWORD : string;
        TWILIO_ACCOUNT_SID : string;
        TWILIO_AUTH_TOKEN : string;
        TWILIO_PHONE_NUMBER : string;
        COMPANY : string;
        DEV_ORIGIN : string;
        PROD_ORIGIN : string;
        GOOGLE_MAPS_API_KEY : string;
        YELP_API_KEY : string;
        YELP_BASE_URL :string;

      }
    }
  }

  export {}

  declare global {
    var localStorage: LocalStorage;
  }