import React from "react";
import { Page, IndexTable, Card } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

export default function ProductsList({ products, onDelete }) {
  const navigate = useNavigate();

  return (
    <Page title="Products List">
      <Card>
        <IndexTable
          itemCount={products.length}
          headings={[
            { title: "Name" },
            { title: "Price" },
            { title: "Status" },
            { title: "Actions" },
          ]}
          selectable={false}
        >
          {products.map((product) => (
            <IndexTable.Row id={product.id} key={product.id}>
              <IndexTable.Cell>{product.name}</IndexTable.Cell>
              <IndexTable.Cell>{product.price}</IndexTable.Cell>
              <IndexTable.Cell>{product.status}</IndexTable.Cell>
              <IndexTable.Cell>
                <button onClick={() => navigate(`/crud/edit/${product.id}`)}>Edit</button>
                <button onClick={() => onDelete(product.id)}>Delete</button>
              </IndexTable.Cell>
            </IndexTable.Row>
          ))}
        </IndexTable>
      </Card>
    </Page>
  );
}
