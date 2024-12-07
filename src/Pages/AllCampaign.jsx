import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"

function AllCampaign() {

  const obj = useLoaderData();
  const [allCamp, setAllCamp] = useState(obj);

  if (!allCamp?.length) return <h1 className="text-center text-4xl my-16 font-semibold">No Campaign Available Yet</h1>

  const handelSortClick = () => {
    const [...sortCamp] = allCamp.sort((a, b) => parseInt(a.amount) - parseInt(b.amount));
    setAllCamp(sortCamp);
    console.log(sortCamp);
    console.log(allCamp);
  }

  return (
    <div className="mb-16">
      <div className="text-right mr-6"><button onClick={handelSortClick} className="btn btn-warning text-black text-xl">Sort</button></div>
      <h1 className="text-center text-4xl mb-8 font-semibold">All Campaigns</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th className="hidden sm:block">Campaign Type</th>
              <th>Dateline</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              allCamp.map((data, idx) =>
                <tr key={data?._id}>
                  <th>{idx + 1}</th>
                  <th>{data?.title}</th>
                  <td className="hidden sm:block">{data?.type}</td>
                  <td>{data?.date}</td>
                  <td>${data?.amount}</td>
                  <td><Link to={`/campaign/${data?._id}`} className="badge badge-accent min-w-max">See more</Link></td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllCampaign
