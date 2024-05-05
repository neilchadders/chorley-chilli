import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/product.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config(); // load environment variables

connectDB(); // connect to MongoDB

const importData = async () => { // import data to MongoDB
  try {
    await Order.deleteMany(); // delete all orders 
    await Product.deleteMany(); // delete all products     
    await User.deleteMany(); // delete all users    // FIRST WE ARE CLEARING DB

    const createdUsers = await User.insertMany(users); // insert users to MongoDB

    const adminUser = createdUsers[0]._id; // make the first user as admin

    const sampleProducts = products.map((product) => { 
      return { ...product, user: adminUser }; 
    }); 

    await Product.insertMany(sampleProducts); // insert products to MongoDB      

    console.log('Data Imported!'.green.inverse); // colors package 
    process.exit(); // exit with success
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // exit with failure
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') { // if we run node seeder -d, we destroy data
  destroyData();
} else {
  importData();
}