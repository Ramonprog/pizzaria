
import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./components/month-revenue-card";
import { MonthOrdersAmountCard } from "./components/month-ordes-amount-card";
import { DayOrdersAmountCard } from "./components/day-ordes-amount-card";
import { MonthCancelOrdersAmountCard } from "./components/month-cancel-orders-amount-card";
import { RevenueChart } from "./components/revenue-chart";
import { PopularProductsChart } from "./components/popular-products-chart";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCancelOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}