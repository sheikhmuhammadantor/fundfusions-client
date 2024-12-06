import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import CampTableData from "../Components/MyCampaign/CampTableData";

function MyCampaign() {

  const { user } = useContext(AuthContext);
  const [myCamp, setMyCamp] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myCampaign?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyCamp(data);
        })
    }
  }, []);

  if(!myCamp.length) return <h1 className="text-center text-4xl my-16 font-semibold">No Campaign Available Yet</h1>

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
            myCamp?.map((data, idx) => <CampTableData  key={data?._id} data={data} idx={idx} myCamp={myCamp} setMyCamp={setMyCamp} />)
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default MyCampaign
