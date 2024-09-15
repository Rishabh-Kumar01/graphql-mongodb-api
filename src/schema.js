export const typeDefs = `
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
  }

  input ProductInput {
    name: String!
    description: String
    price: Float!
  }

  type Query {
    getAllProducts: [Product]
    getProductById(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, description: String, price: Float!): Product
    updateProduct(id: ID!, name: String, description: String, price: Float): Product
    deleteProduct(id: ID!): String
    bulkCreateProducts(products: [ProductInput!]!): [Product]
  }
`;
