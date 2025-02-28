// import Product from '../models/productModel.js';
// import { deleteFile } from '../utils/file.js';
// // const mongoose= require('mongoose')
// import mongoose from 'mongoose';
// import Menu from '../models/menu.model.js';

// // @desc     Fetch All Products with Advanced Filtering
// // @method   GET
// // @endpoint /api/v1/products
// // @access   Public
// const getProducts = async (req, res, next) => {
//   try {
//     const { limit, skip, search, category, priceRange } = req.query;

//     // Build the filter object
//     const filter = {};
//     if (search) filter.name = { $regex: search, $options: 'i' };
//     // if (category) filter.category = new RegExp(`^${category}$`, 'i');
//     // if (footwearType) filter.footwearType = footwearType;
//     if (priceRange) {
//       const [minPrice, maxPrice] = priceRange.split('-').map(Number);
//       filter.price = { $gte: minPrice || 0, $lte: maxPrice || Infinity };
//     }
//     // if (brands) filter.brand = { $in: brands.split(',').map((b) => b.trim()) };

//     const total = await Product.countDocuments(filter);

//     const products = await Product.find(filter)
//     .populate('menu', 'name description')  // 👈 Menu ka data fetch karna
//       .limit(Number(limit) || 10)
//       .skip(Number(skip) || 0);

//     if (!products.length) {
//       return res.status(404).json({ message: 'No products found!' });
//     }

//     res.status(200).json({
//       products,
//       totalPages: Math.ceil(total / (limit || 10)),
//       totalProducts: total,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc     Fetch top-rated products
// // @method   GET
// // @endpoint /api/v1/products/top
// // @access   Public
// const getTopProducts = async (req, res, next) => {
//   try {
//     const products = await Product.find().sort({ rating: -1 }).limit(3);
//     res.status(200).json(products);
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc     Fetch Single Product
// // @method   GET
// // @endpoint /api/v1/products/:id
// // @access   Public
// const getProduct = async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.id).populate('menu', 'name description'); // 👈 Populate Menu Data

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found!' });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc     Create Product
// // @method   POST
// // @endpoint /api/v1/products
// // @access   Private/Admin
// const createProduct = async (req, res, next) => {
//   try {
//     const { name, image, description,  price, countInStock  } = req.body;
    
//         // ✅ Menu ka naam se ID dhundh ke store karna
//     const menu = await Menu.findOne({ name: menuId});
//     if (!menu) {
//       return res.status(404).json({ message: 'Menu not found!' });
//     }

//     const product = new Product({
//       user: req.user._id,
//       name,
//       image,
//       description,
//       price,
//       countInStock,
//       menu: menu._id,  // 👈 Store only Menu ID
//     });

//  // ✅ Menu ke `products` array me yeh product add karega
//  menu.products.push(product._id);
//  await menu.save();

//     const createdProduct = await product.save();
//     res.status(201).json({ message: 'Product created', createdProduct });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc     Update Product
// // @method   PUT
// // @endpoint /api/v1/products/:id
// // @access   Private/Admin
// const updateProduct = async (req, res, next) => {
//   try {
//     const { name, image, description, brand, category, footwearType, price, countInStock , menuId} = req.body;
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found!' });
//     }


//     // ✅ Agar naya menuIddiya hai to ID dhundho
//     if (menuName) {
//       const menu = await Menu.findOne({ name: menuId});
//       if (!menu) {
//         return res.status(404).json({ message: 'Menu not found!' });
//       }
//       product.menu = menu._id;
//     }

//     product.name = name || product.name;
//     product.image = image || product.image;
//     product.description = description || product.description;
//     // product.brand = brand || product.brand;
//     // product.category = category || product.category;
//     // product.footwearType = footwearType || product.footwearType;
//     product.price = price || product.price;
//     product.countInStock = countInStock || product.countInStock;

//     const updatedProduct = await product.save();

//     res.status(200).json({ message: 'Product updated', updatedProduct });
//   } catch (error) {
//     next(error);
//   }
// };

// // @desc     Delete Product
// // @method   DELETE
// // @endpoint /api/v1/products/:id
// // @access   Private/Admin
// const deleteProduct = async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found!' });
//     }

//     await Product.deleteOne({ _id: product._id });
//     deleteFile(product.image);

//     res.status(200).json({ message: 'Product deleted' });
//   } catch (error) {
//     next(error);
//   }
// };


// const createProductReview = async (req, res) => {
//   try {
//     const { id: productId } = req.params;
//     const { rating, comment } = req.body;
//     const userId = req.user._id;

//     console.log("📥 Received productId:", productId); // ✅ Debugging
//     console.log("📥 Rating:", rating, "Comment:", comment); // ✅ Debugging

//     if (!mongoose.Types.ObjectId.isValid(productId)) { // ✅ Fix error here
//       console.log("❌ Invalid productId format");
//       return res.status(400).json({ message: "Invalid Product ID" });
//     }

//     const product = await Product.findById(productId);

//     if (!product) {
//       res.statusCode = 404;
//       throw new Error('Product not found!');
//     }

//     console.log("✅ Product found:", product.name); // ✅ Debugging

//     const existingReview = product.reviews.find((review) => review.user.toString() === userId.toString());

//     if (existingReview) {
//       existingReview.rating = rating;
//       existingReview.comment = comment;
//     } else {
//       const newReview = {
//         user: userId,
//         name: req.user.name,
//         rating: Number(rating),
//         comment,
//       };
//       product.reviews.push(newReview);
//     }

//     product.numReviews = product.reviews.length;
//     product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.numReviews;

//     await product.save();
//     res.status(200).json({ message: "Review added successfully" });

//   } catch (error) {
//     console.error("❌ Error adding review:", error);
//     res.status(500).json({ message: "Internal Server Error", error: error.message });
//   }
// };



// export {
//   getProducts,
//   getProduct,
//   createProduct,
//   updateProduct,
//   deleteProduct,
//   getTopProducts,
//   createProductReview,
// };






import Product from '../models/productModel.js';
import { deleteFile } from '../utils/file.js';
import mongoose from 'mongoose';
import Menu from '../models/menu.model.js';

// @desc     Fetch All Products with Advanced Filtering
// @method   GET
// @endpoint /api/v1/products
// @access   Public
const getProducts = async (req, res, next) => {
  try {
    const { limit, skip, search,  priceRange } = req.query;

    // Build the filter object
    const filter = {};
    if (search) filter.name = { $regex: search, $options: 'i' };
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filter.price = { $gte: minPrice || 0, $lte: maxPrice || Infinity };
    }

    const total = await Product.countDocuments(filter);
    
    const products = await Product.find(filter)
      .populate('menu', 'name description')  // Populate Menu Data
      .limit(Number(limit) || 1000)
      .skip(Number(skip) || 0);

    if (!products.length) {
      return res.status(404).json({ message: 'No products found!' });
    }

    res.status(200).json({
      products,
      totalPages: Math.ceil(total / (limit || 10)),
      totalProducts: total,
    });
  } catch (error) {
    next(error);
  }
};





// @desc     Fetch top-rated products
// @method   GET
// @endpoint /api/v1/products/top
// @access   Public
const getTopProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ rating: -1 }).limit(3); // Fetch the top 3 products based on rating
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// @desc     Fetch Single Product
// @method   GET
// @endpoint /api/v1/products/:id
// @access   Public
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('menu', 'name description'); // Populate Menu Data

    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

// @desc     Create Product
// @method   POST
// @endpoint /api/v1/products
// @access   Private/Admin
// const createProduct = async (req, res, next) => {
//   try {
//     const { name, image, description, price, countInStock, menuId } = req.body;
//     const menu = await Menu.findById(menuId);
//     // Ensure that the menuIdis provided
//     if (!menuId) {
//       return res.status(400).json({ message: 'Menu name is required!' });
//     }

//     // ✅ Menu ka naam se ID dhundh ke store karna
//     // const menu = await Menu.findOne({ name: menuId});
//     if (!menu) {
//       return res.status(404).json({ message: 'Menu not found!' });
//     }

//     const product = new Product({
//       user: req.user._id,
//       name,
//       image,
//       description,
//       price,
//       countInStock,
//       menu: menuId,  // Store only Menu ID
//     });

//     // ✅ Menu ke `products` array me yeh product add karega
//     menu.products.push(product._id);
//     await menu.save();

//     const createdProduct = await product.save();
//     res.status(201).json({ message: 'Product created', createdProduct });
//   } catch (error) {
//     next(error);
//   }
// };


// const createProduct = async (req, res, next) => {
//   try {
//     // Destructure the fields from the request body
//     const { name, image, description, price, countInStock, menuId } = req.body;

//     // Check if menuId is provided
//     if (!menuId) {
//       return res.status(400).json({ message: 'Menu ID is required!' });
//     }

//     // Find the menu by the provided menuId
//     const menu = await Menu.findById(menuId);

//     // If the menu is not found, return a 404 error
//     if (!menu) {
//       return res.status(404).json({ message: 'Menu not found!' });
//     }

//     // Create a new product using the provided data
//     const product = new Product({
//       user: req.user._id, // Assuming the logged-in user's ID
//       name,
//       image,
//       description,
//       price,
//       countInStock,
//       menu: menu.Id,  // Store only Menu ID in the Product schema
//     });

//     // Add the product's ID to the menu's products array
//     menu.products.push(product._id);
//     await menu.save(); // Save the updated menu

//     // Save the newly created product
//     const createdProduct = await product.save();

//     // Respond with the created product and a success message
//     res.status(201).json({ message: 'Product created', createdProduct });
//   } catch (error) {
//     // Catch and forward errors to the error handling middleware
//     next(error);
//   }
// };


const createProduct = async (req, res, next) => {
  try {
    const { name, image, description, price, countInStock, menuId, menuName } = req.body;

    // Check if all required fields are provided
    if (!name || !image || !description || !price || !countInStock) {
      return res.status(400).json({ message: 'All product fields are required!' });
    }

    let menu;

    // If menuId is provided, check if it's a valid ObjectId and use it
    if (menuId) {
      if (!mongoose.Types.ObjectId.isValid(menuId)) {
        return res.status(400).json({ message: 'Invalid menuId format!' });
      }

      // Fetch the menu using the menuId
      menu = await Menu.findById(menuId);

      // Ensure menu exists before proceeding
      if (!menu) {
        return res.status(404).json({ message: 'Menu id not found!' });
      }
    }
    // If menuId is not provided, search by menuName
    else if (menuName) {
      // Ensure that the menuName passed is being queried against the "name" field in Menu.
      menu = await Menu.findOne({ name: menuName });

      // Ensure menu exists before proceeding
      if (!menu) {
        return res.status(404).json({ message: 'Menu name not found!' });
      }
    } else {
      return res.status(400).json({ message: 'Menu ID or Menu Name is required!' });
    }

    // Create a new product
    const product = new Product({
      user: req.user?._id, // Assuming the logged-in user's ID
      name,
      image,
      description,
      price,
      countInStock,
      menu: menu._id,  // Store the menu ID in the Product schema
    });

    // Add the product's ID to the menu's products array
    menu.products.push(product._id);
    await menu.save(); // Save the updated menu

    // Save the new product
    const createdProduct = await product.save();

    // Now populate the menu data when sending the response
    const populatedProduct = await Product.findById(createdProduct._id).populate('menu', 'name description');

    res.status(201).json({ message: 'Product created successfully', populatedProduct });

  } catch (error) {
    console.error(error); // Log the error for internal debugging

    // Check if error is related to a validation issue or database problem
    if (error.name === 'ValidationError' || error instanceof mongoose.Error) {
      return res.status(400).json({ message: 'Validation error', error: error.message });
    }

    // Handle generic internal server errors
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};





// @desc     Update Product
// @method   PUT
// @endpoint /api/v1/products/:id
// @access   Private/Admin
// const updateProduct = async (req, res, next) => {
//   try {
//     const { name, image, description, price, countInStock, menuId} = req.body;

//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found!' });
//     }

//     // ✅ Agar naya menuIddiya hai to ID dhundho
//     if (menuId) {
//       console.log( "menu id :" + menuId);
//       const menu = await Menu.findOne({ name: menuId});
//       if (!menu) {
//         return res.status(404).json({ message: 'Menu id1 not found!' });
//       }
//       product.menu = menu._id;
//     }

//     product.name = name || product.name;
//     product.image = image || product.image;
//     product.description = description || product.description;
//     product.price = price || product.price;
//     product.countInStock = countInStock || product.countInStock;

//     const updatedProduct = await product.save();

//     res.status(200).json({ message: 'Product updated', updatedProduct });
//   } catch (error) {
//     next(error);
//   }
// };
const updateProduct = async (req, res, next) => {
  try {
    const { name, image, description, price, countInStock, menuId } = req.body;

    // Find the product by the provided product ID (using req.params.id)
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    // If menuId is provided, check for a valid menu
    if (menuId) {
      console.log("menu id :", menuId);

      // Validate menuId, assuming it's an ObjectId
      const menu = await Menu.findById(menuId); // Use `findById` to search by ObjectId
      if (!menu) {
        return res.status(404).json({ message: 'Menu not found!' }); // Return error if menu not found
      }

      // Assign the menu ID to the product's menu field
      product.menu = menu._id;
    }

    // Update the product fields
    product.name = name || product.name;
    product.image = image || product.image;
    product.description = description || product.description;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;

    // Save the updated product
    const updatedProduct = await product.save();

    // Send success response
    res.status(200).json({ message: 'Product updated', updatedProduct });
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};


// @desc     Delete Product
// @method   DELETE
// @endpoint /api/v1/products/:id
// @access   Private/Admin
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    await Product.deleteOne({ _id: product._id });
    deleteFile(product.image);

    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    next(error);
  }
};

// @desc     Create Product Review
// @method   POST
// @endpoint /api/v1/products/:id/reviews
// @access   Private
const createProductReview = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    const existingReview = product.reviews.find((review) => review.user.toString() === userId.toString());

    if (existingReview) {
      existingReview.rating = rating;
      existingReview.comment = comment;
    } else {
      const newReview = {
        user: userId,
        name: req.user.name,
        rating: Number(rating),
        comment,
      };
      product.reviews.push(newReview);
    }

    product.numReviews = product.reviews.length;
    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.numReviews;

    await product.save();
    res.status(200).json({ message: "Review added successfully" });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
};
