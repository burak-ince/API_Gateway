const express = require('express');
const app = express();
const port = 5001;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Endpoint for querying mobile bill
app.get('/MobileBill/QueryBill', (req, res) => {
  const { subscriberNo, month } = req.query;

  // Dummy response (replace with actual logic to query bill)
  const bill = {
    subscriberNo,
    month,
    amount: 50 // Sample bill amount
  };

  res.json(bill);
});

// Endpoint for querying mobile bill details
app.get('/MobileBill/QueryBillDetailed', (req, res) => {
  const { subscriberNo, month } = req.query;

  // Dummy response (replace with actual logic to query bill details)
  const billDetails = {
    subscriberNo,
    month,
    data: {
      usage: {
        calls: 50,
        messages: 100,
        data: "5GB"
      },
      amount: 100 // Sample bill amount
    }
  };

  res.json(billDetails);
});

// Start the server
app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
