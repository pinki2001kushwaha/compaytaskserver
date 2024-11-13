const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.static('public'));



mongoose.connect("mongodb://localhost:27017/project",{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sccessful")
})
.catch((e)=>{
    console.log("NO connection",e)
})

const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
