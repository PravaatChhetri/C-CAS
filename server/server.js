const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const UserModel = require("./models/userModel");
const MenuModel = require("./models/menuModel");
const InventoryModel = require("./models/inventoryModel");
const Order = require("./models/orderModel");
const FeedbackModel = require("./models/feedbackModel");

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
// Increase the limit for URL-encoded payloads (adjust the limit as needed)
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//routes

//Users
//getting the users
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//checking if the user exists
app.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    const saltRounds = 10; // You can adjust this based on your requirements
    const hashed = await bcrypt.hash(password, saltRounds);
    
    if (!password === hashed) {
      return res.status(400).send("Incorrect Password");
    }
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//adding a new user
app.post("/users", async (req, res) => {
  try {
    const { name, email, role, password } = await req.body;
    console.log(req.body);
    const user = await UserModel.create({
      name,
      email,
      role,
      password,
    });
    res.status(201).json(user);
    console.log("User Added");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//removing a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(id);
    res.status(200).json(deletedUser);
    console.log("User Deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//menu
//getting the items in the menu
app.get("/menu", async (req, res) => {
  try {
    const menuItems = await MenuModel.find({});
    res.status(200).json(menuItems);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//adding a new item to the menu
app.post("/menu", async (req, res) => {
  try {
    const { name, price, image, category, veg_status } = await req.body;
    const specials_status = false;
    const approved_status = false;
    // Get the filename of the uploaded image
    console.log(req.body);
    // Create a new menu item with the provided data
    const menuItem = await MenuModel.create({
      name,
      price,
      image,
      category,
      veg_status,
      specials_status,
      approved_status,
    });
    res.status(201).json(menuItem);
    console.log("Menu Item Added");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

app.delete("/menu/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await MenuModel.findByIdAndDelete(id);
    res.status(200).json(deletedItem);
    console.log("Menu Item Deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

app.put("/menu/approve/:id", async (req, res) => {
  try {
    const menuItemId = req.params.id;

    // Find the menu item by its ID
    const menuItem = await MenuModel.findById(menuItemId);

    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    // Update the approved_status to true
    menuItem.approved_status = true;

    // Save the updated menu item
    await menuItem.save();

    res.status(200).json({ message: "Menu item approved successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//Inventory
//getting the items in the inventory
app.get("/inventory", async (req, res) => {
  try {
    const inventoryItems = await InventoryModel.find({});

    res.status(200).json(inventoryItems);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//adding a new item to the inventory
app.post("/inventory", async (req, res) => {
  try {
    const { name, price, image, quantity, threshold } = await req.body;
    approved_status = false;
    // Create a new menu item with the provided data
    const inventoryItem = await InventoryModel.create({
      name,
      price,
      image,
      quantity,
      threshold,
      approved_status,
    });
    res.status(201).json(inventoryItem);
    console.log("Inventory Item Added");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//Delete Inventory Item
app.delete("/inventory/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await InventoryModel.findByIdAndDelete(id);
    res.status(200).json(deletedItem);
    console.log("Inventory Item Deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

app.put("/inventory/approve/:id", async (req, res) => {
  try {
    const inventoryItemId = req.params.id;

    // Find the menu item by its ID
    const inventoryItem = await InventoryModel.findById(inventoryItemId);

    if (!inventoryItem) {
      return res.status(404).json({ message: "Inventory item not found" });
    }

    // Update the approved_status to true
    inventoryItem.approved_status = true;

    // Save the updated menu item
    await inventoryItem.save();

    res.status(200).json({ message: "Inventory item approved successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//Getting Feedbacks
app.get("/feedbacks", async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find({});
    res.status(200).json(feedbacks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//Adding Feedbacks
app.post("/feedbacks", async (req, res) => {
  try {
    const { name, email, subject, message } = await req.body;
    console.log(req.body);
    const feedback = await FeedbackModel.create({
      name,
      email,
      subject,
      message,
    });
    res.status(201).json(feedback);
    console.log("Feedback Added");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

//Delete Feedback
app.delete("/feedbacks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await FeedbackModel.findByIdAndDelete(id);
    res.status(200).json(deletedItem);
    console.log("Feedback Deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});


//Place Order
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/orders/:email', async (req, res) => {
 try{const { email } = req.params;
  if (!email) {
    return res.status(400).json({ message: 'Email is required in the query parameters' });
  }

  const orders = await Order.find({ email }); // Filter orders by email

  if (orders.length === 0) {
    return res.status(404).json({ message: 'No orders found for the provided email' });
  }

  res.json(orders);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Server Error' });
}});


app.post('/orders', async (req, res) => {
  const { email, items, quantity, price, total } = req.body;

  try {
    const newOrder = new Order({
      email,
      items,
      quantity,
      price,
      total,
      status: 'Pending',
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/orders/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = 'Completed';

    await order.save();

    res.status(200).json({ message: 'Order completed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/top-selling-products', async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders from your database

    // Create a map to keep track of product quantities
    const productMap = new Map();

    // Loop through the orders and count the quantity of each product
    for (const order of orders) {
      for (let i = 0; i < order.items.length; i++) {
        const productName = order.items[i];
        const productQuantity = order.quantity[i];
        if (productMap.has(productName)) {
          productMap.set(productName, productMap.get(productName) + productQuantity);
        } else {
          productMap.set(productName, productQuantity);
        }
      }
    }

    // Sort the products by quantity in descending order
    const sortedProducts = [...productMap.entries()].sort((a, b) => b[1] - a[1]);

    // Get the top 3 most selling products
    const topSellingProducts = sortedProducts.slice(0, 3);

    res.status(200).json(topSellingProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

mongoose.set("strictQuery", false);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
