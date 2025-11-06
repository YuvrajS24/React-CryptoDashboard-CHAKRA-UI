import DashboardLayout from "../../Componentss/DashboardLayout"
import Transaction from "./components/Transactions"
import PortfolioSection from "./components/PortfolioSection"
import PriceSection from "./components/PriceSection"
import InfoCard from "./components/InfoCard"
 import { Grid, GridItem } from "@chakra-ui/react"


  const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">

<Grid 

  gridTemplateColumns={{
    base:"repeat(1,1fr)",
    xl:"repeat(2,1fr)"
  }}

 

  gap="6"

>
   <GridItem  colSpan={{
      
      base:1,
      lg:2,

   }}>
      <PortfolioSection />
   </GridItem>



   <GridItem colSpan={1}>
     
       <PriceSection/>
   </GridItem>

   <GridItem colSpan={1}>
     
       <Transaction/>
   </GridItem>


   <GridItem colSpan={1}>
     
      <InfoCard inverted={false} imgUrl="/dot_bg.svg" text="  Learn more about Loans – Keep your Bitcoin, access it’s value without selling it."
        tagText="Loans"
      />
   </GridItem>

   <GridItem colSpan={1}>
     
     <InfoCard inverted={true} imgUrl="/grid_bg.svg" text="Learn more about our real estate, mortgage, and  corporate account services"
      tagText="Contact"
     
      />
   </GridItem>


</Grid>


    </DashboardLayout>
  )
}

export default Dashboard

