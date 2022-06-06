import express from 'express';
import { daftar, masuk, syaratMasuk, profilPengguna, dataPengguna } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post('/daftar',  daftar);

userRouter.post('/masuk', masuk);

userRouter.post('/profil', syaratMasuk, profilPengguna);

userRouter.get('/profil', dataPengguna);

export default userRouter;