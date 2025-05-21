# smart-food-ordering

# 🍔 Smart Food Delivery Application Using AWS

This is a fully serverless **Smart Food Delivery Application** built using core AWS services including **Amazon S3**, **AWS Lambda**, **API Gateway**, and **Amazon DynamoDB**. The application allows users to browse a menu, place orders, and receive confirmation, with all data processed and stored securely in the cloud.

---

## 📁 Project Files

### 1. `index.html`
- Landing page with a professional layout and background image.
- Includes call-to-action buttons: **View Menu** and **Order Now**.
- Styled with modern CSS and responsive design.

### 2. `menu.html`
- Displays food items available for ordering.
- Designed with a clean and organized layout for easy viewing.
- Can be extended for dynamic content or image integration.

### 3. `order.html`
- Interactive form where users can place food orders.
- Collects customer name, food item, and delivery address.
- Sends data via API Gateway to AWS Lambda for processing.

### 4. `thankyou.html`
- Confirmation page that thanks the customer for their order.
- Confirms that the order has been successfully placed.

---

## ☁️ AWS Services Used

### ✅ Amazon S3
- Hosts all frontend files (HTML, CSS, JS).
- Enabled static website hosting for public access.

### ✅ AWS Lambda
- Backend logic to receive order data and save to DynamoDB.
- Written in Python using Boto3 SDK.
- Triggered by API Gateway with secured access.

### ✅ Amazon API Gateway
- Provides a RESTful endpoint to accept food order requests.
- Connected to Lambda and deployed as a public API.

### ✅ Amazon DynamoDB
- NoSQL database that stores food order details.
- Attributes include `CustomerName`, `FoodItem`, and `DeliveryAddress`.

---

## 🚀 Deployment Instructions

### 1. Setup S3 Static Hosting
- Create an S3 bucket and upload all HTML files.
- Enable “Static Website Hosting” and set `index.html` as the homepage.
- Configure public access and bucket policy.

### 2. Deploy Lambda Function
- Use the provided Python code to handle order submissions.
- Assign a role with `AmazonDynamoDBFullAccess` and `AWSLambdaBasicExecutionRole`.

### 3. Create API Gateway Endpoint
- Set up a POST method integrated with the Lambda function.
- Deploy the API and copy the invoke URL.
- Update `order.html` form action with this URL.

---

## ✅ Order Workflow

1. User visits `index.html`.
2. Clicks "Order Now" to go to `order.html`.
3. Fills the order form and submits.
4. Order data is sent to API Gateway.
5. Lambda function processes the order and stores it in DynamoDB.
6. User is redirected to `thankyou.html`.

---

## 📚 References

- [Amazon S3 Documentation](https://docs.aws.amazon.com/s3)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda)
- [API Gateway Docs](https://docs.aws.amazon.com/apigateway)
- [DynamoDB Docs](https://docs.aws.amazon.com/dynamodb)
- [AWS IAM Documentation](https://docs.aws.amazon.com/iam)

---

## 👨‍💻 Author

This Smart Food Delivery Application showcases the power of AWS in building a scalable, event-driven, serverless web application with real-time processing and cloud data management.
