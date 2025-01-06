import { useEffect, useState } from "react"
import CampaignCard from "./CampaignCard";
import useAuth from "../../Hook/useAuth";

function RunningCampaign() {

  const [camp, setCamp] = useState([]);
  const { loading } = useAuth();

  useEffect(() => {
    const currentDate = new Date();

    fetch(`${import.meta.env.VITE_URL}/campaigns`)
      .then(res => res.json())
      .then(data => {
        const newCamp = [...data].filter((obj) => new Date(obj.date) >= currentDate)
        setCamp(newCamp.slice(0, 6));
        // setCamp(data);
      })
  }, []);

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info loading-lg"></span></div>
  }

  return (
    <div className="my-10">
      <h1 className="text-4xl font-semibold text-center mb-6">
        On Going Campaign
      </h1>
      <div className="items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
        {
          camp.map((data) => <CampaignCard key={data._id} data={data} />)
        }
      </div>
    </div>
  )
}

export default RunningCampaign
