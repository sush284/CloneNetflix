import mongodb  from 'mongodb';
// import bcrypt from 'bcrypt';
import express from 'express';
// import xlsxFile from 'read-excel-file'
// import  jwt from 'jsonwebtoken';
// import Parse from 'body-parser'
let MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://sush284:sush284@cluster0.el0s6ri.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri,{
});

const app = express();
const PORT = 9192;

app.use(express.json());
app.use(express.urlencoded());

// CALL A SERVER AND LISTEN
app.listen(PORT,function(err){
    if(err) console.error(err)
    console.log("Server is running on port",PORT)
});


client.connect(err =>{
    if(err){
        console.log(err)
    }
    console.log("CONNECTED TO DB " +db.databaseName);
})

const db = client.db('netflix_user');
client.close();


