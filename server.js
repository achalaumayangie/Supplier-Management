const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routesc
//const postRoutes = require('./routes/posts');
const supplierRoutes = require('./routes/suppliers');


//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
// app.use(postRoutes);
app.use(supplierRoutes);

const PORT = 8000;
//const DB_URL = 'mongodb+srv://twg:twg123@cluster0.g6c3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DB_URL = 'mongodb+srv://ITP_users:BmOeCla3ag6huxYm@cluster0.vmcdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
.then(() =>{
     console.log('DB connected');
})
.catch((err) => console.log('DB connection ERROR',err));



app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});