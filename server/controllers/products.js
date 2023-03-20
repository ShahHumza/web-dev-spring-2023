const express = require('express');
const router = express.Router();

router  
    .get('/', (req,res) => {
        
    })
    .get('/:id', (req,res) => {
        res.send({
            items:[
                {
                  "id": 1,
                  "name": "Product 1"
                }
              ]
        })
    })
    .post('/', (req,res) => {
        res.send('Thank you for your order')
    })
    .patch('/:id', (req,res) => {

    })
    .delete('/:id', (req,res) => {

    })

module.exports = router;