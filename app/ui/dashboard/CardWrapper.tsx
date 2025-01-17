import Card from "./card";
import { fetchCardData } from "@/app/lib/data";

export default async function CardWrapper() {
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices
      } = await fetchCardData();

    return (
        <>
         <Card title="Collected" value={totalPaidInvoices} />
        <Card title="Pending" value={totalPendingInvoices} />
        <Card title="Total Invoices" value={numberOfInvoices.toString()} />
        <Card
          title="Total Customers"
          value={numberOfCustomers.toString()}
        />
        </>
    );
}