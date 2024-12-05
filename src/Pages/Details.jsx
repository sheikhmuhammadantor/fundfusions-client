import { useLoaderData } from "react-router-dom"

function Details() {

  const camp = useLoaderData();
  console.log(camp);

  return (
    <div>
      <h1>Details</h1>
    </div>
  )
}

export default Details
