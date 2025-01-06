import { useEffect, useState } from "react"
import CampaignCard from "../Components/Home/CampaignCard";
import useAuth from "../Hook/useAuth";
import CampTableData from "../Components/MyCampaign/CampTableData";

function MyDonations() {

  const { user } = useAuth();
  const [myCamp, setMyCamp] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_URL}/myDonations?email=${user.email}`)
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
      <h1 className="text-4xl font-semibold text-center mb-6">
        My Donation's
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th className="hidden sm:block">Amount</th>
              <th>Dateline</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {
              myCamp?.map((data, idx) => <CampTableData key={data?._id} data={data} idx={idx} myCamp={myCamp} setMyCamp={setMyCamp} campaign={false} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyDonations
