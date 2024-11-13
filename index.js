const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Book=require("../server/model/book")
const app = express();
const PORT =  5000;


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/project",{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sccessful")
})
.catch((e)=>{
    console.log("NO connection",e)
})
app.use("/",async(req,res)=>{
    try{
const result=await Book.find({})
res.send(result)
    }
    catch(error){
        console.log(error)
    }})

const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
