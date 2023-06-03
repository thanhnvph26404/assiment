import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'
import mongooseDelete from 'mongoose-delete'
const plugins = [mongoosePaginate, mongooseDelete]

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        }
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    flavor: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
    deleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true, versionKey: false })

plugins.forEach((plugin) => {
    productSchema.plugin(plugin, {
        deletedAt: true,
        overrideMethods: true,
    })
})

export default mongoose.model('Product', productSchema)