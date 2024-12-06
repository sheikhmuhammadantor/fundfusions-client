import { Link, useLoaderData } from "react-router-dom"

function AllCampaign() {

  const obj = useLoaderData();

  if(!obj.length) return <h1 className="text-center text-4xl my-16 font-semibold">No Campaign Available Yet</h1>

  return (
    <div className="mb-16">
      <h1 className="text-center text-4xl my-16 font-semibold">All Campaigns</h1>
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
              obj?.map((data, idx) =>
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
