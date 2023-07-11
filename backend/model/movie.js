import mongoose from "mongoose";
const Schema = mongoose.Schema;

const movieSchame = new Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Rate: {
            type: Number,
            required: true,
        },
        Num: {
            type: Number,
            required: true,
        },
        Link: {
            type: String,
            required: true
        },
        Time: {
            type: String,
            required: true
        },
        Actor: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export const Movie = mongoose.model("movies", movieSchame);