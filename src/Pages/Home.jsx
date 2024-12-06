import Banner from "../Components/Home/Banner"
import HowItWork from "../Components/Home/HowItWork"
import InvestorsSay from "../Components/Home/InvestorsSay"
import RunningCampaign from "../Components/Home/RunningCampaign"

function Home() {
  return (
    <section>
      <Banner />
      <br />
      <HowItWork />
      <br />
      <RunningCampaign />
      <br />
      <InvestorsSay />
      <br />
    </section>
  )
}

export default Home
