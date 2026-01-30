# @interlude/sdk

> Write backend code, get a UI. The SDK for building internal tools with pure TypeScript.

## Installation

```bash
bun add @interlude/sdk
```

## Quick Start

```typescript
import { Action, io } from "@interlude/sdk";

export default new Action({
  name: "Create user",
  handler: async () => {
    const email = await io.input.email("Email");
    const role = await io.select("Role", ["Admin", "Member"]);

    await createUser({ email, role });
    return io.display.success("User created!");
  },
});
```

Each `await io.*` call pauses execution and renders a UI element. When the user submits, your code continues.

## API Reference

### `Action`

Define an action that can be run from the Interlude UI.

```typescript
import { Action } from "@interlude/sdk";

export default new Action({
  name: "My action",
  description: "Optional description shown in the UI",
  handler: async () => {
    // Your logic here
  },
});
```

### `io.input.*`

Collect user input with various field types.

```typescript
// Text input
const name = await io.input.text("Full name");
const name = await io.input.text("Name", { placeholder: "John Doe" });

// Email input (validated)
const email = await io.input.email("Email address");

// Number input
const amount = await io.input.number("Amount");
const amount = await io.input.number("Amount", { min: 0, max: 100 });

// Textarea for longer text
const description = await io.input.textarea("Description");

// Date picker
const date = await io.input.date("Start date");

// Date range picker
const range = await io.input.dateRange("Select period");
// range.start, range.end
```

### `io.select`

Let users choose from a list of options.

```typescript
// Single select (returns the selected value)
const role = await io.select("Role", ["Admin", "Member", "Guest"]);
// role: "Admin" | "Member" | "Guest"

// Multiple select
const permissions = await io.select.multiple("Permissions", [
  "read",
  "write",
  "delete",
]);
// permissions: ("read" | "write" | "delete")[]

// Select from table data
const user = await io.select.table("Select user", users, {
  columns: ["id", "email", "name"],
});
// user: typeof users[number]
```

### `io.confirm`

Ask for yes/no confirmation.

```typescript
const confirmed = await io.confirm("Are you sure?");
if (!confirmed) {
  return;
}
```

### `io.display.*`

Show information to the user.

```typescript
// Messages
await io.display.success("Operation completed!");
await io.display.error("Something went wrong");
await io.display.warning("This action is irreversible");
await io.display.info("Processing may take a few minutes");
await io.display.muted("Optional helper text");

// Headings
await io.display.heading("Section title");

// Metadata (key-value pairs)
await io.display.metadata([
  { label: "Email", value: user.email },
  { label: "Created", value: user.createdAt },
  { label: "Status", value: user.status },
]);

// Tables
await io.display.table(orders);

// Loading spinner
await io.display.spinner("Processing...");

// File download
await io.display.download("Download report", fileBuffer);
```

## Examples

### User Management

```typescript
import { Action, io } from "@interlude/sdk";
import { db } from "../db";

export default new Action({
  name: "Ban user",
  handler: async () => {
    const query = await io.input.text("Search by email or name");

    const users = await db.user.findMany({
      where: {
        OR: [
          { email: { contains: query } },
          { name: { contains: query } },
        ],
      },
      take: 10,
    });

    if (users.length === 0) {
      await io.display.warning("No users found");
      return;
    }

    const selected = await io.select.table("Select user to ban", users, {
      columns: ["id", "email", "name", "createdAt"],
    });

    const reason = await io.input.textarea("Ban reason");
    const duration = await io.select("Duration", [
      "24 hours",
      "7 days",
      "30 days",
      "Permanent",
    ]);

    if (!(await io.confirm(`Ban ${selected.email} for ${duration}?`))) {
      return;
    }

    await db.user.update({
      where: { id: selected.id },
      data: {
        banned: true,
        banReason: reason,
        banExpires: calculateExpiry(duration),
      },
    });

    await io.display.success(`${selected.email} has been banned`);
  },
});
```

### Order Refund

```typescript
import { Action, io } from "@interlude/sdk";
import { stripe } from "../lib/stripe";
import { db } from "../db";

export default new Action({
  name: "Refund order",
  handler: async () => {
    const orderId = await io.input.text("Order ID");

    const order = await db.order.findUnique({
      where: { id: orderId },
      include: { items: true, user: true },
    });

    if (!order) {
      await io.display.error("Order not found");
      return;
    }

    await io.display.heading(`Order ${order.id}`);
    await io.display.metadata([
      { label: "Customer", value: order.user.email },
      { label: "Total", value: `$${order.total}` },
      { label: "Status", value: order.status },
    ]);

    await io.display.table(order.items);

    const refundType = await io.select("Refund type", ["Full", "Partial"]);

    let amount = order.total;
    if (refundType === "Partial") {
      amount = await io.input.number("Refund amount", {
        min: 0.01,
        max: order.total,
      });
    }

    const reason = await io.input.textarea("Reason for refund");

    await stripe.refunds.create({
      payment_intent: order.stripePaymentIntent,
      amount: Math.round(amount * 100),
    });

    await db.order.update({
      where: { id: orderId },
      data: { status: "refunded", refundReason: reason },
    });

    await io.display.success(`Refunded $${amount} to ${order.user.email}`);
  },
});
```

### Bulk Export

```typescript
import { Action, io } from "@interlude/sdk";
import { db } from "../db";

export default new Action({
  name: "Export orders",
  handler: async () => {
    const dateRange = await io.input.dateRange("Select date range");

    const statuses = await io.select.multiple("Order statuses", [
      "pending",
      "paid",
      "shipped",
      "delivered",
      "refunded",
    ]);

    await io.display.spinner("Fetching orders...");

    const orders = await db.order.findMany({
      where: {
        createdAt: { gte: dateRange.start, lte: dateRange.end },
        status: { in: statuses },
      },
    });

    await io.display.info(`Found ${orders.length} orders`);
    await io.display.table(orders.slice(0, 5));

    if (orders.length > 5) {
      await io.display.muted(`...and ${orders.length - 5} more`);
    }

    const format = await io.select("Export format", ["CSV", "JSON", "Excel"]);

    const file = await generateExport(orders, format);

    await io.display.download("Download export", file);
  },
});
```

## Backend Integration

The SDK is backend-agnostic. Use the appropriate adapter for your backend.

### Convex

```typescript
import { Interlude } from "@interlude/sdk/convex";
import * as actions from "./actions";

export const interlude = new Interlude({ actions });
```

### NestJS

```typescript
import { Module } from "@nestjs/common";
import { InterludeModule } from "@interlude/sdk/nestjs";
import * as actions from "./actions";

@Module({
  imports: [
    InterludeModule.register({
      actions,
      sessionStore: "redis",
    }),
  ],
})
export class AppModule {}
```

### Express

```typescript
import express from "express";
import { createInterludeHandler } from "@interlude/sdk/express";
import * as actions from "./actions";

const app = express();
app.use("/interlude", createInterludeHandler({ actions }));
app.listen(3000);
```

### Standalone

```typescript
import { InterludeRuntime } from "@interlude/sdk/runtime";
import * as actions from "./actions";

const runtime = new InterludeRuntime({ actions });

// Integrate with your own HTTP/WebSocket server
await runtime.startSession(actionId);
await runtime.submitIO(sessionId, ioId, value);
await runtime.getSession(sessionId);
```

## Project Structure

```
my-project/
├── actions/
│   ├── users/
│   │   ├── create-user.ts
│   │   └── ban-user.ts
│   ├── orders/
│   │   ├── refund-order.ts
│   │   └── bulk-export.ts
│   └── index.ts
└── server.ts
```

Export your actions:

```typescript
// actions/index.ts
export { default as createUser } from "./users/create-user";
export { default as banUser } from "./users/ban-user";
export { default as refundOrder } from "./orders/refund-order";
export { default as bulkExport } from "./orders/bulk-export";
```

Or use auto-discovery:

```typescript
import { Interlude } from "@interlude/sdk/convex";

export const interlude = new Interlude({
  actionsDir: "./actions",
});
```

## Type Safety

All `io.*` methods are fully typed. Select options return literal types:

```typescript
const role = await io.select("Role", ["Admin", "Member"] as const);
// role: "Admin" | "Member"

const user = await io.select.table("User", users);
// user: typeof users[number]
```

## License

MIT
