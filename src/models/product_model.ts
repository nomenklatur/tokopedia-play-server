import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    unique: true
  },
  product_url: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: Number
  }
},
{ timestamps: true }
);

const productModel = mongoose.model('product', productSchema);

export default productModel;
