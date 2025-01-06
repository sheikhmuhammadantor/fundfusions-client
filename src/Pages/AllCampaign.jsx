import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import CampaignCard from "../Components/Home/CampaignCard";

function AllCampaign() {

  const [allCamp, setAllCamp] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const currentDate = new Date();

    fetch(`${import.meta.env.VITE_URL}/campaigns`)
      .then(res => res.json())
      .then(data => {
        // const newCamp = [...data].filter((obj) => new Date(obj.date) >= currentDate)
        // setCamp(newCamp.slice(0, 6));
        setAllCamp(data);
        setLoading(false);
      })
  }, []);

  const handelSortClick = () => {
    fetch(`${import.meta.env.VITE_URL}/campaigns/sort`)
      .then((res) => res.json())
      .then((data) => setAllCamp([...data]))
  }

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info loading-lg"></span></div>
  }

  if (!allCamp?.length) return <h1 className="text-center text-4xl my-16 font-semibold">No Campaign Available Yet</h1>

  return (
    <div className="mb-16">
      <div className="text-right mr-6"><button onClick={handelSortClick} className="btn btn-warning text-black text-xl">Sort</button></div>
      <h1 className="text-center text-4xl mb-8 font-semibold">All Campaigns: {allCamp?.length}</h1>
      <div className="items-stretch grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-10 place-items-center">
        {
          allCamp?.map((data) => <CampaignCard key={data._id} data={data} />)
        }
      </div>
    </div>
  )
}

export default AllCampaign
