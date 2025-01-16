import express from 'express';
import Author from '../models/author.model.js';

const router = express.Router();

//get authors
router.get('/', async(req,res) =>{
    try {
        const author = await Author.find();
        res.json(author);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }

})

//adding new Author

router.post("/",async(req,res) =>{
    try {
        const newAuthor = new Author(req.body);
        await newAuthor.save();
        res.status(201).json(newAuthor);
        
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
    
})

//update an author
router.put('/:id', async(req,res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!author) return res.status(404).json({message: 'Author not found'});
        res.json(author);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
})

//delete an author

router.delete('/:id', async(req,res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if(!author) return res.status(404).json({message: 'Author not found'});
        res.json({message: 'Author deleted'});
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
})

export default router;
