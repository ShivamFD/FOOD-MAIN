
import Menu from '../models/menu.model.js';
import fs from 'fs';
import Product from '../models/productModel.js'; // Assuming you have a Product model

// Add a new menu item
export const addMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : null; // Save image filename if uploaded
console.log(req.body);
    if (!name || !description  || !image) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const menu = new Menu({ name, description,  image });
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all menu items
export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Edit a menu item
export const editMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const menuId = req.params.id;

    const existingMenu = await Menu.findById(menuId);
    if (!existingMenu) {
      return res.status(404).json({ message: 'Menu item not found!' });
    }

    // Handle image update
    let updatedImage = existingMenu.image;
    if (req.file) {
      updatedImage = req.file.filename;
      if (existingMenu.image) {
        fs.unlinkSync(`uploads/${existingMenu.image}`); // Delete old image
      }
    }

    const updatedMenu = await Menu.findByIdAndUpdate(
      menuId,
      { name, description, image: updatedImage },
      { new: true }
    );

    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a menu item
export const deleteMenu = async (req, res) => {
  try {
    const menuId = req.params.id;
    const menu = await Menu.findById(menuId);

    if (!menu) {
      return res.status(404).json({ message: 'Menu item not found!' });
    }

    if (menu.image) {
      fs.unlinkSync(`uploads/${menu.image}`); // Delete image file
    }

    await Menu.findByIdAndDelete(menuId);
    res.status(200).json({ message: 'Menu item deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Function to get a menu and its associated products
export const getMenuWithProducts = async (req, res) => {
  try {
    const menuId = req.params.id;  // Get the menu ID from the request parameters

    // Find the menu by ID and populate the 'products' field
    const menu = await Menu.findById(menuId).populate('products'); 

    if (!menu) {
      return res.status(404).json({ message: ' not found' });
    }

    res.json(menu);  // Send the menu with populated product details
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default {
  addMenu,
  getMenus,
  editMenu,
  deleteMenu,
  getMenuWithProducts
};
