// src/api/products.js

const PRODUCTS = [
  { id: "1", name: "Digital Course", price: "$49", status: "Active" },
  { id: "2", name: "Premium Theme", price: "$199", status: "Draft" },
];

export function getProducts() {
  return PRODUCTS;
}

export function createProduct(product) {
  PRODUCTS.push(product);
  return product;
}

export function updateProduct(updatedProduct) {
  const index = PRODUCTS.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    PRODUCTS[index] = updatedProduct;
  }
  return updatedProduct;
}

export function deleteProduct(id) {
  const index = PRODUCTS.findIndex(p => p.id === id);
  if (index !== -1) {
    PRODUCTS.splice(index, 1);
  }
  return id;
}
