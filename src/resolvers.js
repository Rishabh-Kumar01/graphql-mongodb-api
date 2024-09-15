import { Product } from "./models/product.js";

export const resolvers = {
  Query: {
    getAllProducts: async () => {
      try {
        return await Product.find();
      } catch (error) {
        throw new Error(`Failed to fetch products: ${error.message}`);
      }
    },
    getProductById: async (_, { id }) => {
      try {
        const product = await Product.findById(id);
        if (!product) throw new Error("Product not found");
        return product;
      } catch (error) {
        throw new Error(`Failed to fetch product: ${error.message}`);
      }
    },
  },
  Mutation: {
    createProduct: async (_, { name, description, price }) => {
      try {
        const newProduct = new Product({ name, description, price });
        return await newProduct.save();
      } catch (error) {
        throw new Error(`Failed to create product: ${error.message}`);
      }
    },
    updateProduct: async (_, { id, ...updates }) => {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
          new: true,
        });
        if (!updatedProduct) throw new Error("Product not found");
        return updatedProduct;
      } catch (error) {
        throw new Error(`Failed to update product: ${error.message}`);
      }
    },
    deleteProduct: async (_, { id }) => {
      try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) throw new Error("Product not found");
        return "Product deleted successfully";
      } catch (error) {
        throw new Error(`Failed to delete product: ${error.message}`);
      }
    },
    bulkCreateProducts: async (_, { products }) => {
      try {
        const createdProducts = await Product.create(products);
        return createdProducts;
      } catch (error) {
        throw new Error(`Failed to bulk create products: ${error.message}`);
      }
    },
  },
};
