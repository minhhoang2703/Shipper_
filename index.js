const express = require("express"); // Import Express Framework
const app = express(); // Store express in app
const path = require("path");
const port = 3000;

// Middleware execution for static files
module.exports = path.dirname(require.main.filename);
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
// Call bootstrap css file with class path

// Intergrated EJS Template
app.set("view engine", "ejs");
app.set("views", "./views"); // setting config option for views folder
// Intergrated EJS Template
app.get("/", (req, res) => {
    res.render("users/login_shipper");
  });
  app.get("/users/cart", (req, res) => {
    res.render("users/shipper_dashboard");
  });
  app.get("/users/checkout", (req, res) => {
    res.render("users/signup_shipper");
  });
  app.get("/users/contact", (req, res) => {
    res.render("users/order_detail");
   });
  
