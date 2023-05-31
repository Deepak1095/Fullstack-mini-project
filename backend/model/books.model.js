const { default: mongoose } = require("mongoose");


const BookSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        genre: { type: String, required: true },
        author: { type: String, required: true },
        publishing_year: { type: Number, required: true },
    }
)

const BookModel=mongoose.model("books",BookSchema)

module.exports={
    BookModel
}