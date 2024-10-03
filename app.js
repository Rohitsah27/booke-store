const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config(); // Load environment variables from .env file
require("./conn/conn"); // Initialize the database connection
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart")
const Order = require("./routes/order")
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);


// Creating port and starting the server
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
