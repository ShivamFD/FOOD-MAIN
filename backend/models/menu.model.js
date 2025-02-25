// import mongoose from 'mongoose';

// const menuSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   // price: Number,
//   image: String
  
// });

// const Menu = mongoose.model('Menu', menuSchema);

// export default Menu;



import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // Store related products
});

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;
