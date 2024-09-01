import { number, required } from "joi";
import mongoose, { Schema, model } from "mongoose";
import { type } from "os";

const userSchema = new Schema({

    userName: {
        type: string,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
    },
    Image: {
        type: String,

    },
    phone: {
        type: number,
    },
    address: {
        type: String,
        required: true,
    }
    ,
    confirmEmail: {
        type: Boolean,
        default: false,
    },

    gender: {
        type: String,
        enum: ['male', 'Female']
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    role: {
        type: String,
        enum: ['user', 'admin']
    }
});

const UserModel = model("User", userSchema);


export default UserModel;