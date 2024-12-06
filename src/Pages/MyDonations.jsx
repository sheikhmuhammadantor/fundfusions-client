import { useContext, useEffect } from "react"
import { AuthContext } from "../Providers/AuthProvider";

function MyDonations() {

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if(user?.email){
      fetch(`http://localhost:3000/myDonations?email=${user.email}`)
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }, []);

  return (
    <div>
      <h1>My Donations</h1>
    </div>
  )
}

export default MyDonations
