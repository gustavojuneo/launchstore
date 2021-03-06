const express = require('express')
const routes = express.Router()

const HomeController = require('../app/controllers/HomeController')

const users = require('./users')
const products = require('./products')

// Home
routes.get('/', HomeController.index)

// Users
routes.use('/users', users)

// Products
routes.use('/products', products)

// Alias
routes.get('/ads/create', function (req, res) {
  return res.redirect('/products/create')
})

module.exports = routes
