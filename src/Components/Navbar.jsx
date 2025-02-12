import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import { RiSunLine } from 'react-icons/ri'
import { IoIosMoon } from 'react-icons/io'
import useAuth from '../Hook/useAuth'

function Navbar() {

  const { user, signOutUser } = useAuth();
  const [theme, setTheme] = useState("light");

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
    <li><NavLink to="/campaigns">All Campaign</NavLink></li>
    {
      user?.email ?
        <>
          <li><NavLink to="/addCampaign">Add Campaign</NavLink></li>
          <li><NavLink to="/myCampaign">My Campaign</NavLink></li>
          <li><NavLink to="/myDonations">My Donations</NavLink></li>
        </>
        : <>
          <li><NavLink to="/aboutUs">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
        </>
    }
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
    <div className="navbar container mx-auto fixed top-0 left-[50%] -translate-x-[50%] z-50 bg-base-100 px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
            {
              user?.email ?
                <>
                  <li><NavLink to="/aboutUs">About Us</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/support">Support</NavLink></li>
                </>
                : ""
            }
          </ul>
        </div>
        <Link to='/' className="btn bg-transparent hover:bg-transparent border-none text-xl px-0">
          <span className='font-extrabold text-3xl'>FundFusions</span>
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
              <div className="absolute top-12 right-0 bg-white shadow-lg border rounded w-60 p-2 hidden group-hover:block z-20">
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
              <Link to="/register" className="btn text-lg hidden sm:flex">Register</Link>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar
