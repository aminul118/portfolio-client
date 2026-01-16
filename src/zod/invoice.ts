import { z } from 'zod';

export const itemSchema = z.object({
  itemName: z.string().min(1, 'Item name required'),
  quantity: z.string().min(1), // just text (7 Days, 1 Month, etc.)
  price: z.coerce.number().min(0),
  total: z.coerce.number().min(0),
});

export const invoiceSchema = z.object({
  invoiceNo: z.string().optional(),
  invoiceDate: z.string().optional(),
  payableTo: z.object({
    name: z.string().min(2),
    address: z.string().optional(),
    phone: z.string().optional(),
  }),
  items: z.array(itemSchema).min(1),
  subTotal: z.coerce.number(),
  discount: z.coerce.number().min(0),
  tax: z.coerce.number().min(0),
  grandTotal: z.coerce.number(),
  note: z.string().optional(),
});

export type InvoiceFormValues = z.infer<typeof invoiceSchema>;
