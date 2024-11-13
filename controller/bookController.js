const Book = require('../model/book');

 const getAllBooks=async(req,res)=>{
    try{
const result=await Book.find({})
res.send(result)
    }
    catch(error){
        console.log(error)
    }
 }
const addBook = async (req, res) => {

    try {
        const { title, author, description } = req.body;
        const newUser = new Book({ title, author, description  });
        const savedUser = await newUser.save();
        res.status(201).send(savedUser)
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllBooks, addBook, deleteBook };
