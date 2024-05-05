import express from 'express'; 
import dotenv from 'dotenv'; 
dotenv.config();
import connectDB from './config/db.js';
import products from './data/product.js';


connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => { // create a route
    res.send('Api is running...!');
});

app.get('/api/products', (req, res) => { 
    res.json(products);
});


app.get('/api/products/:id', (req,res) => {
    const product =products.find((p)=> p._id===req.params.id);
    res.json(product)
})

app.listen(port, () => console.log(`Server running on ${port}`))