import { CorsOptions } from "cors";

export const corsOptions : CorsOptions= {
    //origin:'*', 
    origin:'http://localhost:3000', 
   // allowedHeaders: ['Content-Type', 'Authorization',"Origin", "X-Requested-With" , "Accept"],    
    credentials:true,            
    optionsSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

