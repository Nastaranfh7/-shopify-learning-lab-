import React, { useState } from "react";
import { Page, Card, BlockStack, Text, Button } from "@shopify/polaris";

export default function PolarisCRUD() {
  const [products, setProducts] = useState([
    { id: "1", name: "Digital Course", price: "$49", status: "Active" },
    { id: "2", name: "Premium Theme", price: "$199", status: "Draft" },
  ]);

  return (
    <Page title="CRUD Dashboard">
      <Card>
        <BlockStack gap="300">
          <Text as="h2" variant="headingMd">CRUD System Ready</Text>
          <Text>Products are now managed from a central state.</Text>

          <Button primary>
            Go to Create Page
          </Button>
        </BlockStack>
      </Card>
    </Page>
  );
}
