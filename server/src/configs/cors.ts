import { CorsOptions } from "cors";

console.log(process.env.DEV_ORIGIN, process.env.PROD_ORIGIN)
export const corsOptions : CorsOptions= {
    origin:'*', 
    //origin:[process.env.DEV_ORIGIN, process.env.PROD_ORIGIN], 
   // allowedHeaders: ['Content-Type', 'Authorization',"Origin", "X-Requested-With" , "Accept"],    
    credentials:true,            
    optionsSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

