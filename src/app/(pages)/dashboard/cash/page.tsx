import Revenue from "@/_ui/components/dashboard/revenue";
import TodaySales from "@/_ui/components/dashboard/today-sales";
import { Grid } from "@tremor/react";
import { categories } from "@/_lib/utils/data";
import UsersOverview from "@/_ui/components/dashboard/users-overview";

export default function page() {
  return (
    <Grid
      numItemsLg={3}
      className="gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"
    >
      {categories.map((item, index) => (
        <Revenue key={index} item={item} />
      ))}
      <TodaySales className="col-span-full lg:col-span-1" />
      <UsersOverview />
    </Grid>
  );
}
