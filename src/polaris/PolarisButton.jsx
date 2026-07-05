// توضیح فارسی برای تو:
// این کامپوننت انواع مختلف دکمه‌های Polaris را نمایش می‌دهد.
// همهٔ متن‌های روی صفحه انگلیسی هستند، فقط کامنت‌ها فارسی‌اند.

import React from "react";
import { Page, Card, BlockStack, Button, Text } from "@shopify/polaris";

export default function PolarisButton() {

  // توضیح فارسی:
  // این تابع برای تست onClick است.
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <Page title="Polaris Button Examples">
      <Card>
        <BlockStack gap="300">
          <Text as="h2" variant="headingMd">
            Button Variants
          </Text>

          {/* دکمهٔ اصلی */}
          <Button primary onClick={handleClick}>
            Primary Button
          </Button>

          {/* دکمهٔ خطرناک */}
          <Button destructive onClick={handleClick}>
            Destructive Button
          </Button>

          {/* دکمهٔ Outline */}
          <Button outline onClick={handleClick}>
            Outline Button
          </Button>

          {/* دکمهٔ ساده */}
          <Button onClick={handleClick}>
            Default Button
          </Button>

          {/* دکمهٔ Plain */}
          <Button plain onClick={handleClick}>
            Plain Button
          </Button>
        </BlockStack>
      </Card>
    </Page>
  );
}
