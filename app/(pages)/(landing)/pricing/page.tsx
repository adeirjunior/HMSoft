import PricingTable from "@/app/_ui/components/table/PricingTable"
import PricingTableDiferences from "@/app/_ui/components/table/PricingTableDiferences"

export default function Pricing() {
  return <><main
   className="
   flex
   relative
   z-20
   overflow-hidden
   justify-center
   "
   >
   <PricingTable/>
</main>
<PricingTableDiferences/>
</>
}
