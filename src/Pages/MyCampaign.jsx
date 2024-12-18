import { useEffect, useState } from "react";
import CampTableData from "../Components/MyCampaign/CampTableData";
import useAuth from "../Hook/useAuth";
import useAxios from "../Hook/useAxios";

function MyCampaign() {

  const { user } = useAuth();
  const [myCamp, setMyCamp] = useState([]);
  const [loading, setLoading] = useState([true]);
  const axiosSecure = useAxios();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/myCampaign?email=${user.email}`)
      .then(data => {
        setMyCamp(data.data);
        setLoading(false);
      })
    }
  }, []);

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info loading-lg"></span></div>
  }

  if (!myCamp.length) return <h1 className="text-center text-4xl my-16 font-semibold">No Campaign Available Yet</h1>

  return (
    <div className="mb-16">
      <h1 className="text-center text-4xl my-16 font-semibold">All My Campaigns</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th className="hidden sm:block">Amount</th>
              <th>Dateline</th>
            </tr>
          </thead>
          <tbody>
            {
              myCamp?.map((data, idx) => <CampTableData key={data?._id} data={data} idx={idx} myCamp={myCamp} setMyCamp={setMyCamp} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyCampaign
