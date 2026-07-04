import { Page, Card, BlockStack, Text, Button } from "@shopify/polaris";

export default function PolarisPage() {
  return (
    <Page
      title="Polaris Demo Page"
      primaryAction={{
        content: "Primary Action",
        onAction: () => alert("Primary action clicked!"),
      }}
    >
      <BlockStack gap="400">
        <Card>
          <BlockStack gap="200">
            <Text as="h2" variant="headingMd">
              Welcome to Polaris
            </Text>

            <Text as="p" variant="bodyMd">
              این اولین صفحهٔ Polaris تو هست. از اینجا می‌تونی تمام کامپوننت‌های
              Polaris رو تست کنی.
            </Text>

            <Button onClick={() => alert("Button clicked!")}>
              Click me
            </Button>
          </BlockStack>
        </Card>

        <Card>
          <BlockStack gap="200">
            <Text as="h2" variant="headingMd">
              Second Card
            </Text>

            <Text as="p" variant="bodyMd">
              این یک کارت دومه برای اینکه ببینی چطور چند کارت کنار هم قرار می‌گیرن.
            </Text>
          </BlockStack>
        </Card>
      </BlockStack>
    </Page>
  );
}
