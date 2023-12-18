import { StatusEnum } from "@prisma/client";

export type Invoice = {
  id: string;
  customerId: string;
  amount: number;
  date: Date;
  status: string;
};

export type InvoiceState = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image: string;
  email: string;
  amount: number;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = ({
  customers: { name: string; email: string; image: string } | null;
} & {
  id: string;
  customerId: string;
  amount: number;
  status: StatusEnum;
  date: Date;
  customersId: string | null;
})[];

export type InvoiceForm = {
  id: string;
  customerId: string;
  amount: number;
  status: StatusEnum;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image: string;
  date: string;
  amount: number;
  status: StatusEnum;
};

export type UpdateInvoiceQueryType = {
  customerId: string;
  amountInCents: number;
  status: StatusEnum;
  id: string;
};

export type CreateInvoiceQueryType = {
  customerId: string;
  amountInCents: number;
  status: StatusEnum;
  date: string;
};
