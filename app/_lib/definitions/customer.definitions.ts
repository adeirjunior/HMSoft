import { Invoice } from "./invoice.definitions";

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image: string;
  invoices: Invoice[];
  total_pending: string;
  total_paid: string;
};

export type FormattedCustomersTableRaw = {
  id: string;
  name: string;
  email: string;
  image: string;
  invoices: Invoice[];
};

export type CustomerField = {
  id: string;
  name: string;
};
