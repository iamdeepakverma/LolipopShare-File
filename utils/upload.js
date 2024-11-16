import multer from "multer";

const Storage = multer({dest:"uploads"});

export default Storage;