const express = require("express"); // Import Express Framework
const app = express(); // Store express in app
const path = require("path");


// Middleware execution for static files
module.exports = path.dirname(require.main.filename);
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
// Call bootstrap css file with class path

// Intergrated EJS Template
app.set("view engine", "ejs");
app.set("views", "./views"); // setting config option for views folder
// Intergrated EJS Template
app.get("/", (req, res) => {
    res.render("shipper/login_shipper");
  });
  app.get("/signup", (req, res) => {
    res.render("shipper/signup_shipper");
  });
  app.get("/dashboard", (req, res) => {
    res.render("shipper/shipper_dashboard");
  });
  app.get("/order", (req, res) => {
    res.render("shipper/order_detail");
   });
  
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
})