import { prisma } from "@/_lib/utils/prisma";
import {
  CreateInvoiceQueryType,
  UpdateInvoiceQueryType,
} from "@/_lib/definitions/invoice.definitions";

export const createInvoiceQuery = async ({
  customerId,
  amountInCents,
  status,
  date,
}: CreateInvoiceQueryType) =>
  prisma.invoices.create({ data: { customerId, date, amount: amountInCents, status } });

export const updateInvoiceQuery = async ({
  customerId,
  amountInCents,
  status,
  id,
}: UpdateInvoiceQueryType) =>
  prisma.invoices.update({ where: { id }, data: {status, customerId, amount: amountInCents} });
    

export const deleteInvoiceQuery = async ({ id }: { id: string }) =>
  prisma.invoices.delete({ where: { id } });
