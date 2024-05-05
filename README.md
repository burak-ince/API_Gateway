# Mobile Bill API

This is a simple API for querying mobile bills and bill details.

## Endpoints

### Query Bill
- **Method**: GET
- **URL**: `/MobileBill/QueryBill`
- **Description**: Returns the total amount of the mobile bill for a given subscriber number and month.
- **Parameters**:
  - `subscriberNo` (string): The subscriber number.
  - `month` (string): The month for which the bill is being queried.
- **Sample Request**: `GET /MobileBill/QueryBill?subscriberNo=123456789&month=May`
- **Sample Response**:
  ```json
  {
    "subscriberNo": "123456789",
    "month": "May",
    "amount": 50
  }
  
### Query Bill Detailed
- **Method**: GET
- **URL**: `/MobileBill/QueryBillDetailed`
- **Description**: Returns detailed information about the mobile bill for a given subscriber number and month.
- **Parameters**:
  - `subscriberNo` (string): The subscriber number.
  - `month` (string): The month for which the bill details are being queried.
- **Sample Request**: `GET /MobileBill/QueryBillDetailed?subscriberNo=123456789&month=May`
- **Sample Response**:
  ```json
  {
    "subscriberNo": "123456789",
    "month": "May",
    "data": {
      "usage": {
        "calls": 50,
        "messages": 100,
        "data": "5GB"
      },
      "amount": 100
    }
  }


Running the Server
To run the server locally, follow these steps:

Install dependencies with npm install.
Start the server with node index.js.
