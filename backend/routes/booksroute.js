import express from "express";
import { Book } from "../models/bookmodel.js";
const router = express.Router();
//Route for saving a new book by using post method--

router.post("/", async (request, response) => {
    try {
        //validation--
        if (!request.body.title || !request.body.author || !request.body.publishyear) {
            return response.status(400).send({
                message: "Send all the required feilds:title,author,publishyear",
            })
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishyear: request.body.publishyear,
        };
        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//Route for get all books from database
router.get("/", async (request, response) => {
    try {
        const books = await Book.find({});
        // return response.status(200).json(books);
        return response.status(200).json({
            count: books.length,
            data: books

        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//Route for get one book from database so we need to give id type thing
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        // return response.status(200).json(books);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//update the book in mangoose so first we need the book id then we need the body in which we modify--

router.put("/:id", async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishyear) {
            return response.status(400).send({
                message: "Send all the required feilds:title,author,publishyear",
            })
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }
        return response.status(200).send({ message: "Book updated successfully" });


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//Delete the book in mangoose so first we need the book id only  which we modify--

router.delete("/:id", async (request, response) => {
    try {

        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }
        return response.status(200).send({ message: "Book deleted successfully" });


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

export default router;
