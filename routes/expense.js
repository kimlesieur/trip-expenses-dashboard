// require express and it's router component
const express = require('express');
const { route } = require('express/lib/application');

const router = express.Router();

// require the middlewares and callback functions from the controller directory

const { create, expenseById, read, update, remove, expenseByDate } = require('../controllers');

// Create POST route to create an expense
router.post('/expense/create', create);

// Create PUT route to update an expense
router.put('/expense/:id', expenseById, update);


// Create DELETE route to remove an expense
router.delete('/expense/:id', remove)

// Create GET route to read an expense
router.get('/expense/:id', expenseById, read);
router.get('/expense/list/:expenseDate', expenseByDate, read);

// Create GET route to read a list of expenses
router.get('/expense/', read)

// Create a callback to handle url params

module.exports = router;
