// توضیح فارسی برای تو:
// این کامپوننت یک فرم کامل Polaris می‌سازد.
// شامل TextField، Select، Checkbox و دکمهٔ Submit است.

import React from "react";
import {
  Page,
  Card,
  BlockStack,
  TextField,
  Select,
  Checkbox,
  Button,
  Text,
} from "@shopify/polaris";

export default function PolarisForm() {
  // -----------------------------
  // 🔵 state های فرم
  // -----------------------------

  // نام محصول
  const [productName, setProductName] = React.useState("");

  // دسته‌بندی محصول
  const [category, setCategory] = React.useState("digital");

  // فعال بودن محصول
  const [isActive, setIsActive] = React.useState(false);

  // -----------------------------
  // 🔵 گزینه‌های Select
  // -----------------------------
  const categoryOptions = [
    { label: "Digital Product", value: "digital" },
    { label: "Physical Product", value: "physical" },
    { label: "Service", value: "service" },
  ];

  // -----------------------------
  // 🔵 تابع Submit
  // -----------------------------
  const handleSubmit = () => {
    alert(
      `Product Created:\nName: ${productName}\nCategory: ${category}\nActive: ${isActive}`
    );
  };

  return (
    <Page title="Polaris Form Example">
      <Card>
        <BlockStack gap="300">
          <Text as="h2" variant="headingMd">
            Create Product
          </Text>

          {/* TextField */}
          <TextField
            label="Product Name"
            value={productName}
            onChange={setProductName}
            autoComplete="off"
          />

          {/* Select */}
          <Select
            label="Category"
            options={categoryOptions}
            value={category}
            onChange={setCategory}
          />

          {/* Checkbox */}
          <Checkbox
            label="Active Product"
            checked={isActive}
            onChange={setIsActive}
          />

          {/* Submit Button */}
          <Button primary onClick={handleSubmit}>
            Submit
          </Button>
        </BlockStack>
      </Card>
    </Page>
  );
}
