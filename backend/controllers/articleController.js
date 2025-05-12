import { v2 as cloudinary } from "cloudinary"
import articleModel from "../models/articleModel.js"


// function for add article
const addArticle = async (req, res) => {
    try {
        const { title, description, category, subcategory, author, date } = req.body;

        const uploadedImage = await cloudinary.uploader.upload(req.files.image[0].path);
        const imageUrl = uploadedImage.secure_url;

        const newArticle = new articleModel({
            title,
            description,
            category,
            subcategory,
            author,
            date,
            image: [image]  // Înlocuiește cu array dacă vrei să păstrezi mai multe imagini
        });

        await newArticle.save();
        res.status(201).json({ message: 'Articolul a fost adăugat!', success: true });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
};


// function for list article
const listArticle = async (req, res) => {
    try {

        const articles = await articleModel.find({});
        res.json({ success: true, articles })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for removing article
const removeArticle = async (req, res) => {
    try {
        await articleModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Article Removed" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// function for single article info
const singleArticle = async (req, res) => {
    try {

        const { articleId } = req.body
        const article = await articleModel.findById(articleId)
        res.json({ success: true, article })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addArticle, listArticle, removeArticle, singleArticle }