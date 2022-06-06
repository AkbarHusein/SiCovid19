import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

// struktur data yang tersimpan pada database (collection)
const DataUser = new Schema(
    {
        namaLengkap: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            required: true
        },
        noTelp: {
            type: Number,
            required: true
        },
        hash_password: {
            type: String,
            required: true
        },
        TanggalDaftar: {
            type: Date,
            default: Date.now
        },
    },
    {
        Timestamps: true,
    }
);

DataUser.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};

export default mongoose.model('User', DataUser);