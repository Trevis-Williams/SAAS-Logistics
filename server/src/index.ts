import express, { Application, Request, Response } from "express"; 
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config(); //This reads your .env file and puts its values into process.env

const app: Application = express();// Creates the Express server. The Application type ensures TypeScript knows this is an Express application.

app.use(cors()); //Enables CORS, which lets our frontend  (running on  port  5000) talk to the backend.
app.use(express.json()); //Lets your server automatically parse JSON request bodies. Without this Express would not understand JSON.

// Calls your database connection function. This runs one time when the server starts.
connectDB();

app.get("/", (req: Request, res: Response) => {  //Test route, when you go to http://localhost:5000/ you will get API is running. This will need to be chnaged into a legit route
  res.send("API running"); 
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000; // What is is doing is PORT is assined if there is a .env file with it in there. If not it will default to 
    //port 5000
app.listen(PORT, () => {  // The app is on, in the console if you inspect elemnt you will see Server running on port 5000, this is a temprale litrale and can change.
  console.log(`Server running on port ${PORT}…`); // Port may not always show as 5000
});
