import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// struktur data yang tersimpan pada database (collection)
const Forum = new Schema(
    {
        judul: {
            type: String,
            required: true
        },
        isi: {
            type: String,
            required: true
        },
        startDiscuss: {
            type: Date,
            default: Date.now
        },
    },
    {
        Timestamps: true,
    }
);

export default mongoose.model('Forum', Forum);