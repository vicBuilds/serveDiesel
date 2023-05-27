const express = require("express");
const app = express();

// Diesel price data
const dieselPrices = [
  {
    id: "Andhra Pradesh",
    name: "Andhra Pradesh",
    price: 98.27,
  },
  {
    id: "Assam",
    name: "Assam",
    price: 83.94,
  },
  {
    id: "Bihar",
    name: "Bihar",
    price: 94.04,
  },
  {
    id: "Chhattisgarh",
    name: "Chhattisgarh",
    price: 95.44,
  },
  {
    id: "Gujarat",
    name: "Gujarat",
    price: 92.06,
  },
  {
    id: "Haryana",
    name: "Haryana",
    price: 90.2,
  },
  {
    id: "Himachal Pradesh",
    name: "Himachal Pradesh",
    price: 83.36,
  },
  {
    id: "Jammu And Kashmir",
    name: "Jammu And Kashmir",
    price: 85.15,
  },
  {
    id: "Jharkhand",
    name: "Jharkhand",
    price: 94.61,
  },
  {
    id: "Karnataka",
    name: "Karnataka",
    price: 87.49,
  },
  {
    id: "Kerala",
    name: "Kerala",
    price: 94.84,
  },
  {
    id: "Madhya Pradesh",
    name: "Madhya Pradesh",
    price: 93.93,
  },
  {
    id: "Maharashtra",
    name: "Maharashtra",
    price: 95.59,
  },
  {
    id: "Odisha",
    name: "Odisha",
    price: 94.76,
  },
  {
    id: "Punjab",
    name: "Punjab",
    price: 85.71,
  },
  {
    id: "Rajasthan",
    name: "Rajasthan",
    price: 93.72,
  },
  {
    id: "Tamil Nadu",
    name: "Tamil Nadu",
    price: 94.71,
  },
  {
    id: "Telangana",
    name: "Telangana",
    price: 97.82,
  },
  {
    id: "Uttar Pradesh",
    name: "Uttar Pradesh",
    price: 89.71,
  },
  {
    id: "Uttarakhand",
    name: "Uttarakhand",
    price: 90.29,
  },
  {
    id: "West Bengal",
    name: "West Bengal",
    price: 92.76,
  },
  {
    id: "NCT Of Delhi",
    name: "NCT Of Delhi",
    price: 89.62,
  },
];

// Endpoint to get diesel prices
app.get("/diesel-prices", (req, res) => {
  res.status(200).json({
    message: "Here is your data",
    data: dieselPrices,
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
