GraphQL API with Node.js, Apollo Server, and MongoDB
This project demonstrates how to build a GraphQL API using Node.js, Apollo Server, and MongoDB. It provides a flexible and efficient approach to data fetching and manipulation, showcasing the power of GraphQL in modern API development.
Features

GraphQL API setup with Apollo Server
MongoDB integration using Mongoose
CRUD operations for a Product model
Bulk insert functionality
ES6 syntax throughout the codebase

Prerequisites

Node.js (v14 or later recommended)
MongoDB

Setup

Clone the repository:
```
git clone https://github.com/your-username/graphql-mongodb-api.git
cd graphql-mongodb-api
```

Install dependencies:
```
npm install
```

Create a .env file in the root directory and add your MongoDB URI:
```
MONGODB_URI=mongodb://localhost:27017/your_database_name
```

Start the server:
```
node server.js
```


The GraphQL playground will be available at http://localhost:4000.
Project Structure
```
graphql-mongodb-api/
│
├── src/
│   ├── models/
│   │   └── product.js
│   ├── schema.js
│   └── resolvers.js
│
├── .env
└── server.js
```

Available Operations
Queries

getAllProducts: Fetch all products
getProductById: Get a product by its ID

Mutations

createProduct: Create a new product
updateProduct: Update an existing product
deleteProduct: Delete a product
bulkCreateProducts: Create multiple products at once
