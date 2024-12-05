import { useLoaderData } from "react-router-dom"

function AllCampaign() {

  const obj = useLoaderData();

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
                <tr>
                  <th>{idx + 1}</th>
                  <th>{data?.title}</th>
                  <td className="hidden sm:block">{data?.type}</td>
                  <td>{data?.date}</td>
                  <td>{data?.amount}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllCampaign
