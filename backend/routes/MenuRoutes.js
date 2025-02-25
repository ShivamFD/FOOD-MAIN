// import express from 'express';
// import multer from 'multer';
// import { addMenu, getMenus, editMenu, deleteMenu } from '../controllers/menu.controller.js';
// import upload from '../routes/uploadRoutes.js';
// const router = express.Router();

// // Multer setup for file uploads
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, 'uploads/'); // Save images to 'uploads/' folder
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + '-' + file.originalname); // Unique filename
// //   }
// // });

// // const upload = multer({ storage });

// // Routes
// router.post('/add-menu', upload.single('image'), addMenu);
// router.get('/menus', getMenus);
// router.put('/edit-menu/:id', upload.single('image'), editMenu);
// router.delete('/delete-menu/:id', deleteMenu);

// export default router;



import express from 'express';
import multer from 'multer';
import { addMenu, getMenus, editMenu, deleteMenu } from '../controllers/menu.controller.js';

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images in 'uploads/' relative to the project root (not backend/)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);  // Use a unique filename to avoid conflicts
  }
});

// Define fileFilter function to allow only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);  // Allow image file types
  } else {
    cb(new Error('Only images are allowed!'), false);  // Reject non-image files
  }
};

// Initialize multer with storage and file filter settings
const upload = multer({ storage, fileFilter });

// Routes
router.post('/add-menu', upload.single('image'), addMenu);  // Upload single image
router.get('/menus', getMenus);
router.put('/edit-menu/id', upload.single('image'), editMenu);  // Upload single image for editing
router.delete('/delete-menu/:id', deleteMenu);

export default router;
