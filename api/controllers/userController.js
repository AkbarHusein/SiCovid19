// import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from "../models/userModel.js";

export const daftar = function(req, res) {
    const penggunaBaru = new User(req.body);
    penggunaBaru.hash_password = bcrypt.hashSync(req.body.password, 8);
    penggunaBaru.save(function(err, pengguna) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        pengguna.hash_password = undefined;
        return res.json(pengguna);
      }
    });
};

export const masuk = function(req, res) {
    User.findOne({
      email: req.body.email
    }, function(err, pengguna) {
      if (err) throw err;
      if (!pengguna || !pengguna.comparePassword(req.body.password)) {
        return res.status(401).json({ message: 'Autentikasi gagal. Username atau Password tidak valid' });
      }
      return res.json({ token: jsonwebtoken.sign({ email: pengguna.email, namaLengkap: pengguna.namaLengkap, _id: pengguna._id }, 'RESTFULAPIs') });
    });
};

export const syaratMasuk = function(req, res, next) {
    if (req.pengguna) {
      next();
    } else {
  
      return res.status(401).json({ message: 'Pengguna tidak ditemukan' });
    }
};

export const profilPengguna = function(req, res, next) {
    if (req.pengguna) {
      res.send(req.pengguna);
      next();
    } 
    else {
     return res.status(401).json({ message: 'Token tidak valid' });
    }
};

export const dataPengguna = async (req, res) => {
    try {
        const products = await User.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
   
}