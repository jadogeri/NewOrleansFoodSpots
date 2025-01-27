
import express,{ Request, Response } from 'express';
const app = express();

const port = process.env.PORT || 6000;


app.use(express.json());
app.get('/', (req: Request, res : Response) => {
  res.send({message:"home"});
});



app.listen(port, ()=> {
console.log(`Backend is running on http://localhost:${port}`)
})
