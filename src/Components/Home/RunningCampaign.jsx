import { useEffect, useState } from "react"
import CampaignCard from "./CampaignCard";

function RunningCampaign() {

  const [camp, setCamp] = useState([]);

  useEffect(() => {
    const currentDate = new Date();

    fetch('http://localhost:3000/campaigns')
      .then(res => res.json())
      .then(data => {
        const newCamp = data.filter((obj) => new Date(obj.date) >= currentDate)
        setCamp(newCamp.slice(0, 6));
      })
  }, []);

  return (
    <div className="m-8">
      <h1 className="text-5xl font-semibold text-center mb-16">
        On Going Campaign
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
        {
          camp.map((data) => <CampaignCard key={data._id} data={data} />)

        }
        {/* {
          console.log(camp)
        } */}
      </div>
    </div>
  )
}

export default RunningCampaign
