import { CorsOptions } from "cors";

export const corsOptions : CorsOptions= {
    origin:'*', 
    allowedHeaders: ['Content-Type', 'Authorization'],    
    credentials:true,            
    optionsSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

