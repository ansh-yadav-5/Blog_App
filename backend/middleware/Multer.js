// import multer from 'multer';
// import path from 'path';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images'); // Ensure this directory exists
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + path.extname(file.originalname));
//     },
// });

// export default multer({ storage: storage }); 

// // export const upload = multer({ storage: storage });

// // export default upload;




import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images"); // make sure folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;  //  default export