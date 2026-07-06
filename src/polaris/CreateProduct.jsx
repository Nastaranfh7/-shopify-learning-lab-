import React, { useState } from "react";
import { Page, Card, BlockStack, TextField, Button, Text } from "@shopify/polaris";

export default function CreateProduct({ onCreate }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("Active");

  const handleSave = () => {
    const newProduct = {
      id: Date.now().toString(),
      name,
      price,
      status,
    };
    onCreate(newProduct);
  };

  return (
    <Page title="Create Product">
      <Card>
        <BlockStack gap="300">
          <Text as="h2" variant="headingMd">Add New Product</Text>

          <TextField label="Name" value={name} onChange={setName} />
          <TextField label="Price" value={price} onChange={setPrice} />
          <TextField label="Status" value={status} onChange={setStatus} />

          <Button primary onClick={handleSave}>Save Product</Button>
        </BlockStack>
      </Card>
    </Page>
  );
}
