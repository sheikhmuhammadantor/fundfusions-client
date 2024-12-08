import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Providers/AuthProvider";
import CampaignCard from "../Components/Home/CampaignCard";

function MyDonations() {

  const { user } = useContext(AuthContext);
  const [myCamp, setMyCamp] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://fund-fusions-server.vercel.app/myDonations?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyCamp(data);
          setLoading(false);
        })
    }
  }, []);

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info loading-lg"></span></div>
  }

  if (!myCamp.length) return <h1 className="text-center text-4xl my-16 font-semibold">You Have No Donation Yet</h1>

  return (
    <div className="m-8">
      <h1 className="text-5xl font-semibold text-center mb-16">
        My Donation's
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
        {
          myCamp.map((data) => <CampaignCard key={data._id} data={data} callFrom="myDonation" />)
        }
      </div>
    </div>
  )
}

export default MyDonations
