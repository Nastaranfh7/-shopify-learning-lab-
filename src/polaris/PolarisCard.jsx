import React from "react";
import {
  Page,
  Card,
  BlockStack,
  InlineStack,
  Text,
} from "@shopify/polaris";

export default function PolarisCards() {
  return (
    <Page title="Advanced Cards Example">
      <InlineStack gap="400" align="start">
        {/* Card اول */}
        <Card>
          <BlockStack gap="300">
            <Text as="h2" variant="headingMd">Sales Overview</Text>
            <Text as="p" variant="bodyMd">Total sales this month: $4,200</Text>
          </BlockStack>
        </Card>

        {/* Card دوم */}
        <Card>
          <BlockStack gap="300">
            <Text as="h2" variant="headingMd">Active Users</Text>
            <Text as="p" variant="bodyMd">Current active users: 128</Text>
          </BlockStack>
        </Card>

        {/* Card سوم */}
        <Card>
          <BlockStack gap="300">
            <Text as="h2" variant="headingMd">Orders</Text>
            <Text as="p" variant="bodyMd">Pending orders: 14</Text>
          </BlockStack>
        </Card>
      </InlineStack>
    </Page>
  );
}
