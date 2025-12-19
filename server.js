const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('<h1>welcome to our class</h1>');
});

const products = [
    {
        id:1,
        name: "Ipone"
    },
    {
        id:2,
        name: "samsung"
    },
    {
        id:3,
        name: "watches"
    },
    {
        id:4, 
        name: "TVs"
    } 
];
app.get('products', (req, res) => {
    res.json(products);
});

app.get('/products/:id',(req, res) => {
    const newData = products.filter (items=> items.id.toString() === req.params.id);
    return res.send(newData);
});

app.post('/addproducts', (req, res) => {
   const {id, name} = req.body;
    console.log(id, name);
    return res.send('Data stored.....');
});

app.listen(3002, () => {
    console.log('Server started...');
});
