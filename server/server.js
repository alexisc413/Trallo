import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 8080
const app = express();

app.use(cors());
app.use(express.json())
app.use("/record", records)

//to find specific record by id:
//  /record/1234

//to find all records
// /record

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
