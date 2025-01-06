import Banner from "../Components/Home/Banner"
import HowItWork from "../Components/Home/HowItWork"
import InvestorsSay from "../Components/Home/InvestorsSay"
import RunningCampaign from "../Components/Home/RunningCampaign"
import Support from "./Static/Support"

function Home() {
  return (
    <section>
      <Banner />
      <RunningCampaign />
      <HowItWork />
      <Support />
      <InvestorsSay />
    </section>
  )
}

export default Home
