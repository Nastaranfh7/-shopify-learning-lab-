import React, { useState } from "react";
import { Page, Card, BlockStack, Text, Button } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export default function PolarisCRUD() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    { id: "1", name: "Digital Course", price: "$49", status: "Active" },
    { id: "2", name: "Premium Theme", price: "$199", status: "Draft" },
  ]);

  const handleCreate = (newProduct) => {
    setProducts([...products, newProduct]);
    navigate("/crud/list");
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    navigate("/crud/list");
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
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
  );
}
