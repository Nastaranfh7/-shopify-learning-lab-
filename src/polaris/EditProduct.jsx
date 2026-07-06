import React, { useState } from "react";
import { Page, Card, BlockStack, TextField, Button, Text } from "@shopify/polaris";

export default function EditProduct({ product, onUpdate }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [status, setStatus] = useState(product.status);

  const handleSave = () => {
    const updated = {
      ...product,
      name,
      price,
      status,
    };
    onUpdate(updated);
  };

  return (
    <Page title="Edit Product">
      <Card>
        <BlockStack gap="300">
          <Text as="h2" variant="headingMd">Edit Product</Text>

          <TextField label="Name" value={name} onChange={setName} />
          <TextField label="Price" value={price} onChange={setPrice} />
          <TextField label="Status" value={status} onChange={setStatus} />

          <Button primary onClick={handleSave}>Save Changes</Button>
        </BlockStack>
      </Card>
    </Page>
  );
}
