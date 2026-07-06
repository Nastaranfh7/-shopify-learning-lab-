import React, { useState, useCallback } from "react";
import {
  Page,
  Card,
  IndexTable,
  Text,
  Button,
  useIndexResourceState,
} from "@shopify/polaris";

export default function PolarisIndexTable() {
  // -----------------------------
  // 🔵 داده‌های فرضی جدول
  // -----------------------------
  const products = [
    { id: "1", name: "Digital Course", price: "$49", status: "Active" },
    { id: "2", name: "Premium Theme", price: "$199", status: "Draft" },
    { id: "3", name: "Shopify App", price: "$29", status: "Active" },
    { id: "4", name: "Consulting Service", price: "$99", status: "Active" },
  ];

  // -----------------------------
  // 🔵 مدیریت انتخاب ردیف‌ها
  // -----------------------------
  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
  } = useIndexResourceState(products);

  // -----------------------------
  // 🔵 اکشن حذف گروهی
  // -----------------------------
  const handleBulkDelete = useCallback(() => {
    alert(`Deleting items: ${selectedResources.join(", ")}`);
  }, [selectedResources]);

  // -----------------------------
  // 🔵 رندر جدول
  // -----------------------------
  const rowMarkup = products.map(({ id, name, price, status }, index) => (
    <IndexTable.Row
      id={id}
      key={id}
      position={index}
    >
      <IndexTable.Cell>{name}</IndexTable.Cell>
      <IndexTable.Cell>{price}</IndexTable.Cell>
      <IndexTable.Cell>{status}</IndexTable.Cell>
      <IndexTable.Cell>
        <Button plain onClick={() => alert(`Editing ${name}`)}>
          Edit
        </Button>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Page title="Polaris IndexTable Example">
      <Card>
        <IndexTable
          resourceName={{ singular: "product", plural: "products" }}
          itemCount={products.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          onSelectionChange={handleSelectionChange}
          headings={[
            { title: "Name" },
            { title: "Price" },
            { title: "Status" },
            { title: "Actions" },
          ]}
        >
          {rowMarkup}
        </IndexTable>

        {/* Bulk Actions */}
        {selectedResources.length > 0 && (
          <div style={{ padding: "1rem" }}>
            <Button destructive onClick={handleBulkDelete}>
              Delete Selected
            </Button>
          </div>
        )}
      </Card>
    </Page>
  );
}
