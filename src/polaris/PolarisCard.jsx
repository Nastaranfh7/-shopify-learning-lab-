import { Page, Card, BlockStack, Text } from "@shopify/polaris";

export default function PolarisPage() {
  return (
    <Page title="My Polaris Page">
      <Card>
        <BlockStack gap="400">
          <Text as="h2" variant="headingMd">
            Welcome to Polaris
          </Text>
          <Text>This is a full Polaris page with a card.</Text>
        </BlockStack>
      </Card>
    </Page>
  );
}
