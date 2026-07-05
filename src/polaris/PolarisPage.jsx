// توضیح فارسی برای تو:
// این کامپوننت یک صفحهٔ کامل Polaris است که شامل title، primaryAction و دو تا Card می‌باشد.
// تمام متن‌هایی که روی صفحه نمایش داده می‌شوند انگلیسی هستند.

import React from 'react';
import {
  Page,
  Card,
  BlockStack,
  Text,
  Button,
} from '@shopify/polaris';

export default function PolarisPage() {
  // توضیح فارسی:
  // این تابع برای دکمهٔ اصلی صفحه است. فعلاً فقط یک alert ساده نمایش می‌دهد.
  const handlePrimaryAction = () => {
    alert('Primary action clicked ✨');
  };

  return (
    <Page
      title="Sample Polaris Page"
      primaryAction={{
        content: 'Create New Item',
        onAction: handlePrimaryAction,
      }}
    >
      <BlockStack gap="400">
        <Card>
          <BlockStack gap="300">
            {/* توضیح فارسی:
                این عنوان کارت اول است. روی صفحه انگلیسی نمایش داده می‌شود. */}
            <Text as="h2" variant="headingMd">
              First Card
            </Text>

            <Text as="p" variant="bodyMd">
              This is a simple card inside the page to show the basic structure.
            </Text>

            <Button onClick={() => alert('First card button clicked')}>
              Click Me
            </Button>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack gap="300">
            <Text as="h2" variant="headingMd">
              Second Card
            </Text>

            <Text as="p" variant="bodyMd">
              This card could be used for listing orders or products.
            </Text>
          </BlockStack>
        </Card>
      </BlockStack>
    </Page>
  );
}
