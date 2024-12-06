import { useContext, useEffect } from "react"
import { AuthContext } from "../Providers/AuthProvider";

function MyDonations() {

  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   fetch('http://localhost:3000/myDonations', {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(user?.email)
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   console.log(user.email)
  // }, []);

  return (
    <div>
      <h1>My Donations</h1>
    </div>
  )
}

export default MyDonations
