import React, { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import toast from 'react-hot-toast'
import { AuthContext } from '../Providers/AuthProvider'

function Navbar() {

  const { user, signOutUser } = useContext(AuthContext)
  const [theme, setTheme] = useState("light");

  const html = document.getElementsByTagName('html')[0];
  html.setAttribute("data-theme", theme);

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addCampaign">Add Campaign</NavLink></li>
    <li><NavLink to="/campaigns">All Campaign</NavLink></li>
    <li><NavLink to="/myCampaign">My Campaign</NavLink></li>
    <li><NavLink to="/myDonations">My Donations</NavLink></li>
  </>

  const handelSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success('Successfully Sign Out !', {})
      })
      .catch(() => {
        toast.error("Sign Out Error !", {})
      })
  }

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl px-0">
          <img className='h-full bg-white rounded-lg' src={logo} alt="FundFusions Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link onClick={handelSignOut} className="btn text-lg">Log Out</Link>
      </div>
    </div>
  )
}

export default Navbar
