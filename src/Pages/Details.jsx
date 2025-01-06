import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";

function Details() {

  const [datelineOver, setDatelineOver] = useState(false);
  const { user } = useAuth();
  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState([true]);
  const param = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/campaign/${param?.id}`)
      .then(res => res.json())
      .then(data => {
        setAllData(data);
        setLoading(false);
      })
  }, []);

  const { _id, title, photo, type, date, description, amount } = allData || {};

  useEffect(() => {
    const currentDate = new Date();
    if (new Date(allData?.date) >= currentDate) setDatelineOver(true);
  }, [allData]);

  const handelDonation = () => {
    const { email, displayName } = user || {};

    if (!datelineOver) {
      return Swal.fire({
        title: 'Warning !',
        text: `Campaign Dateline Over !`,
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }

    fetch(`${import.meta.env.VITE_URL}/campaign/:id`, {
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

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info loading-lg"></span></div>
  }

  return (
    <div className="px-2 my-8">
      <div className="card card-compact bg-base-100 mx-auto shadow-xl border md:flex-row p-3 sm:p-5">
        <figure>
          <img className="rounded-xl min-h-full object-cover" src={photo} alt={title} />
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
