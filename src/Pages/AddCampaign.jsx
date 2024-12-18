import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../Hook/useAuth";

function AddCampaign() {

  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const {email, displayName:name} = user || {};

  const handelAddCampaign = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const date = form.date.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const photo = form.photo.value;

    const newCampaign = { title, type, date, description, name, email, amount, photo }

    fetch(`${import.meta.env.VITE_URL}/addCampaign`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCampaign)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success !',
            text: 'New Campaign Added',
            icon: 'success',
            confirmButtonText: 'Close'
          })
        }
      })
  }

  return (
    <section className="my-12">
      <div className="my-6 ml-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold outline outline-1 w-max py-1 px-3 rounded-full cursor-pointer hover:outline-2 hover:shadow-xl"><FaArrowLeft /> Back to home</Link>
      </div>
      <div>
        <div className="bg-base-200 w-full shadow-2xl border rounded-2xl py-6">
          <div className="text-center px-4">
            <h2 className="text-3xl font-semibold mb-3">Add New Campaign</h2>
            <p className="">Bring your idea to life! Share your vision, set goals, and inspire others to support you. <br /> Fill in the form below to begin your journey toward making a difference.</p>
          </div>
          {/* From Start Her - */}
          <form onSubmit={handelAddCampaign} className="card-body ">
            {/* Campaign Title */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" name="title" placeholder="Campaign Title" className="input input-bordered" required />
              </div>
              {/* Campaign type */}
              <div className="w-full grid grid-cols-4 justify-evenly items-end">
                <h1 className="col-span-4 md:mt-0 mt-2">Campaign type</h1>
                <label className="label justify-center gap-2 lg:col-span-1 md:col-span-2 col-span-2 sm:col-span-1">
                  <span className="label-text">Personal</span>
                  <input type="radio" name="type" value="Personal" className="radio radio-warning" />
                </label>
                <label className="label justify-center gap-2 lg:col-span-1 md:col-span-2 col-span-2 sm:col-span-1">
                  <span className="label-text">Startup</span>
                  <input type="radio" name="type" value="Startup" className="radio radio-warning" />
                </label>
                <label className="label justify-center gap-2 lg:col-span-1 md:col-span-2 col-span-2 sm:col-span-1">
                  <span className="label-text">Business</span>
                  <input type="radio" name="type" value="Business" className="radio radio-warning" />
                </label>
                <label className="label justify-center gap-2 lg:col-span-1 md:col-span-2 col-span-2 sm:col-span-1">
                  <span className="label-text">Ideas</span>
                  <input type="radio" name="type" value="Ideas" className="radio radio-warning" />
                </label>
              </div>
            </div>
            {/* Category */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Deadline </span>
                </label>
                <DatePicker className="input input-bordered w-full" name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              {/* Minimum Donation Amount */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <input type="number" name="amount" placeholder="Minimum donation amount" className="input input-bordered" required />
              </div>
            </div>
            {/* Photo URL */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
              </div>
            </div>
            {/* Description */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
              </div>
            </div>
            {/* Email & User Name - (Read Only/ you can not edit this field) */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} readOnly className="input input-bordered" required />
              </div>
            </div>
            {/* Add Button */}
            <div className="mt-8 mx-8 text-center">
              <button className="btn btn-accent text-lg text-white outline-2 outline outline-black outline-offset-0 w-full">Add New Campaign</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddCampaign
