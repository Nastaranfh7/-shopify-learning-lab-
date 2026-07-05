// توضیح فارسی برای تو:
// این کامپوننت یک صفحهٔ دو ستونه با Layout می‌سازد:
// ستون اصلی (Main) و ستون ساید (Sidebar) هر کدام یک Card دارند.

import React from 'react';
import {
  Page,
  Layout,
  Card,
  BlockStack,
  Text,
  Button,
} from '@shopify/polaris';

export default function PolarisLayout() {
  return (
    <Page title="Dashboard Layout Example">
      <Layout>
        {/* ستون اصلی صفحه */}
        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Main Section Card
              </Text>
              <Text as="p" variant="bodyMd">
                This card represents the main content area of the dashboard.
              </Text>
              <Button primary>
                Primary Action
              </Button>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* ستون سایدبار صفحه */}
        <Layout.Section secondary>
          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingMd">
                Sidebar Card
              </Text>
              <Text as="p" variant="bodyMd">
                This card represents the sidebar area with additional information.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
