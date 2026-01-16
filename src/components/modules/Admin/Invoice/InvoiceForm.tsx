'use client';

import SubmitButton from '@/components/common/button/submit-button';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useActionHandler from '@/hooks/useActionHandler';
import { createInvoice } from '@/services/invoice/invoice';
import { InvoiceFormValues, invoiceSchema } from '@/zod/invoice';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useEffect } from 'react';
import { Resolver, useFieldArray, useForm } from 'react-hook-form';

const InvoiceForm = () => {
  const { executePost } = useActionHandler();

  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema) as Resolver<InvoiceFormValues>,
    defaultValues: {
      payableTo: {
        name: '',
        address: '',
        phone: '',
      },
      items: [
        {
          itemName: '',
          quantity: '1',
          price: 0,
          total: 0,
        },
      ],
      subTotal: 0,
      discount: 0,
      tax: 0,
      grandTotal: 0,
      note: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const items = form.watch('items');
  const discount = form.watch('discount');

  const subTotal = items.reduce(
    (sum, item) => sum + (Number(item.total) || 0),
    0,
  );

  const grandTotal = subTotal - (Number(discount) || 0);

  useEffect(() => {
    form.setValue('subTotal', subTotal);
    form.setValue('grandTotal', grandTotal);
  }, [subTotal, grandTotal, form]);

  const onSubmit = async (data: InvoiceFormValues) => {
    await executePost({
      action: () => createInvoice(data),
      success: {
        onSuccess: () => {
          form.reset();
        },
        loadingText: 'Invoice creating...',
        message: 'Invoice created successfully',
        redirectPath: '/admin/invoice',
      },
      errorMessage: 'Failed to create invoice.',
    });
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h2 className="mb-6 text-2xl font-semibold">Create Invoice</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* ===== PAYABLE TO ===== */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Payable To</h3>

            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="payableTo.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="payableTo.phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="payableTo.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* ===== ITEMS ===== */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Items</h3>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className="grid items-end gap-3 md:grid-cols-12"
              >
                <FormField
                  control={form.control}
                  name={`items.${index}.itemName`}
                  render={({ field }) => (
                    <FormItem className="col-span-5">
                      <FormLabel>Item</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`items.${index}.quantity`}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Qty</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`items.${index}.price`}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => {
                            const price = Number(e.target.value) || 0;
                            form.setValue(`items.${index}.total`, price);
                            field.onChange(price);
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`items.${index}.total`}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Total</FormLabel>
                      <FormControl>
                        <Input disabled {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => remove(index)}
                >
                  <Trash size={16} />
                </Button>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={() =>
                append({
                  itemName: '',
                  quantity: '1',
                  price: 0,
                  total: 0,
                })
              }
            >
              + Add Item
            </Button>
          </div>

          {/* ===== TOTALS ===== */}
          <div className="grid gap-4 md:grid-cols-4">
            <FormItem>
              <FormLabel>Sub Total</FormLabel>
              <Input value={subTotal} disabled />
            </FormItem>

            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Tax (%)</FormLabel>
              <Input value={0} disabled />
            </FormItem>

            <FormItem>
              <FormLabel>Grand Total</FormLabel>
              <Input value={grandTotal} disabled />
            </FormItem>
          </div>

          {/* ===== NOTE ===== */}
          <FormField
            control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note</FormLabel>
                <FormControl>
                  <Input placeholder="Footer note..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <SubmitButton
            loading={form.formState.isSubmitting}
            text="Create Invoice"
          />
        </form>
      </Form>
    </div>
  );
};

export default InvoiceForm;
