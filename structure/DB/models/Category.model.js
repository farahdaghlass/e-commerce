import { Schema } from "mongoose";


const categoeyScheme = new Schema({

    name: {
        type: String,
        required: true,
        unique: true,

    },
    Image: {
        type: String,

    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

})

const categoeyModel = model('categoey', categoeyScheme);

export default categoeyModel;