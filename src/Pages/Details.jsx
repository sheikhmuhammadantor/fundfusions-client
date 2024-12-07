import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

function Details() {

  const [datelineOver, setDatelineOver] = useState(false);
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { _id, title, photo, type, date, description, amount } = data || {};

  useEffect(() => {
    const currentDate = new Date();
    if (new Date(data?.date) >= currentDate) setDatelineOver(true);
  }, []);

  const handelDonation = (campId) => {
    const { email, displayName } = user || {};

    if (!datelineOver) {
      return Swal.fire({
        title: 'Warning !',
        text: `Campaign Dateline Over !`,
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }

    fetch('http://localhost:3000/campaign/:id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, photo, type, date, description, amount, email, displayName })
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success !',
            text: 'Successfully Donated !',
            icon: 'success',
            confirmButtonText: 'Close'
          })
        }
      })
  }

  return (
    <div className="px-2">
      <div className="card card-compact bg-base-100 max-w-[800px] mx-auto my-12 shadow-xl border md:flex-row p-3 sm:p-5">
        <figure>
          <img className="rounded-xl" src={photo} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="badge badge-success text-white p-3">${amount}</div>
          <p>{description}</p>
          <div className="badge badge-primary text-white p-3">{type}</div>
          <p className="underline">{date}</p>
          <div className="card-actions justify-center mt-4">
            <button onClick={() => handelDonation(_id)} className="btn btn-sm btn-accent text-lg px-8 disabled:btn-info disabled:opacity-60 disabled:cursor-none">Donate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
