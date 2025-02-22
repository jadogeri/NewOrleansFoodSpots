import { CorsOptions } from "cors";

export const corsOptions : CorsOptions= {
    origin:'*', 
    credentials:true,            
    optionsSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

