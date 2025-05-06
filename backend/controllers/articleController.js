import { v2 as cloudinary } from "cloudinary"
import articleModel from "../models/articleModel.js"


// function for add article
const addArticle = async (req, res) => {
    try {

        const { title, description, category, subcategory, author } = req.body

        const image1 = req.files.image1 && req.files.image1[0]

        const image = [image1].filter((item) => item !== undefined);


        let imageUrl = await Promise.all(
            image.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )
        const articleData = {
            title,
            description,
            category,
            subcategory,
            author,
            image: imageUrl,
            date: Date.now()
        }

        console.log(articleData);

        const article = new articleModel(articleData);
        await article.save()

        res.json({ success: true, message: "Article Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

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
        
        const {articleId} = req.body
        const article = await articleModel.findById(articled)
        res.json({success:true, product})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addArticle, listArticle, removeArticle, singleArticle }