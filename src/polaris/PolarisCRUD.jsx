import React, { useState } from "react";
import { Page, Card, BlockStack, Text, Button } from "@shopify/polaris";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";

import CreateProduct from "./CreateProduct.jsx";
import EditProduct from "./EditProduct.jsx";
import ProductsList from "./ProductsList.jsx";

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/products.js";

export default function PolarisCRUD() {
  const navigate = useNavigate();

const [products, setProducts] = useState(getProducts());
;

const handleCreate = (newProduct) => {
  createProduct(newProduct);          // به API بگو محصول جدید اضافه کن
  setProducts(getProducts());         // دوباره لیست را از API بگیر
  navigate("/crud/list");
};

const handleUpdate = (updatedProduct) => {
  updateProduct(updatedProduct);      // به API بگو این محصول را آپدیت کن
  setProducts(getProducts());         // لیست جدید را از API بگیر
  navigate("/crud/list");
};


const handleDelete = (id) => {
  deleteProduct(id);                  // به API بگو این محصول را حذف کن
  setProducts(getProducts());         // لیست جدید را از API بگیر
};

  return (
    <Routes>

      {/* Dashboard */}
      <Route
        path="/"
        element={
          <Page title="CRUD Dashboard">
            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingMd">CRUD System Ready</Text>
                <Text>Products are now managed from a central state.</Text>

                <Button primary onClick={() => navigate("/crud/create")}>
                  Go to Create Page
                </Button>

                <Button onClick={() => navigate("/crud/list")}>
                  View Products List
                </Button>
              </BlockStack>
            </Card>
          </Page>
        }
      />

      {/* Create */}
      <Route
        path="create"
        element={<CreateProduct onCreate={handleCreate} />}
      />

      {/* List */}
      <Route
        path="list"
        element={
          <ProductsList
            products={products}
            onDelete={handleDelete}
          />
        }
      />

      {/* Edit */}
      <Route
        path="edit/:id"
        element={<EditWrapper products={products} onUpdate={handleUpdate} />}
      />

    </Routes>
  );
}

function EditWrapper({ products, onUpdate }) {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  return <EditProduct product={product} onUpdate={onUpdate} />;
}
