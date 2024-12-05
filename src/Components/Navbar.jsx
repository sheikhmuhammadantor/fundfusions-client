import React, { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import toast from 'react-hot-toast'
import { AuthContext } from '../Providers/AuthProvider'
import { RiSunLine } from 'react-icons/ri'
import { IoIosMoon } from 'react-icons/io'

function Navbar() {

  const { user, signOutUser } = useContext(AuthContext)
  const [theme, setTheme] = useState("dark");

  const html = document.getElementsByTagName('html')[0];
  html.setAttribute("data-theme", theme);

  const handelChangeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  }

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
        <span onClick={handelChangeTheme} className="btn btn-sm text-2xl hidden md:block ml-2">
          {
            (theme === "dark") ? <RiSunLine /> : <IoIosMoon />
          }
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
            <div className="relative group">
              <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
                <img className="max-w-full max-h-full" src={user?.photoURL} alt="" />
              </label>
              <div className="absolute top-12 right-0 bg-white shadow-lg border rounded w-60 p-2 hidden group-hover:block">
                <ul>
                  <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer font-semibold">{user?.displayName}</li>
                  <br />
                  <Link onClick={handelSignOut} className="btn text-lg w-full">Log Out</Link>
                </ul>
              </div>
            </div>
            :
            <div className='flex items-center gap-2'>
              <Link to="/login" className="btn text-lg">Login</Link>
              <Link to="/register" className="btn text-lg">Register</Link>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar
