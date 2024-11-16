import express from "express";
import { Fileupload,downloadImage } from "../controllers/fileupload.js";
import Storage from "../utils/upload.js";

const router = express.Router();

router.post("/upload", Storage.single("file") ,Fileupload)
router.get("/file/:fileid",downloadImage)

export default router