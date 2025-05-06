import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Number, required:true }
})

const articleModel =mongoose.models.article || mongoose.model("article", articleSchema)

export default articleModel;