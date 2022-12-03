import  express  from "express";
import connDb from "./healper.js";
const app = express()


app.use('/', (req, res)=> {
    res.send('<h1>Hi, there!</h1>')
})

await connDb()

app.listen(3000, ()=> {console.log('listening..');})