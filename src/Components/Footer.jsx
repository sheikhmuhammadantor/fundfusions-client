import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer p-10 container mx-auto font-semibold">
      <aside className='mx-auto'>
        <Link to='/' className="btn bg-transparent hover:bg-transparent border-none text-xl px-0">
          <span className='font-extrabold text-3xl'>FundFusions</span>
        </Link>
        <p>
          An online real estate investing platform
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav className='mx-auto'>
      <h6 className="footer-title">Links</h6>
        <div className="flex gap-3 md:justify-normal justify-center">
          <Link to='https://github.com/sheikhmuhammadantor' target="_blank" className="text-2xl outline outline-2 hover:outline-indigo-800 cursor-pointer delay-100 rounded-full p-1 hover:text-indigo-700"><FaGithub /></Link>
          <Link to='https://www.linkedin.com/in/sheikh-muhammad-antor-570765290/' target="_blank" className="text-2xl outline outline-2 hover:outline-indigo-800 cursor-pointer delay-100 rounded-full p-1 hover:text-indigo-700"><FaLinkedin /></Link>
          <Link to='https://x.com/iamAntorSheikh' target="_blank" className="text-2xl outline outline-2 hover:outline-indigo-800 cursor-pointer delay-100 rounded-full p-1 hover:text-indigo-700"><FaTwitter /></Link>
          <Link to='https://web.facebook.com/sheikhmuhammadantor' target="_blank" className="text-2xl outline outline-2 hover:outline-indigo-800 cursor-pointer delay-100 rounded-full p-1 hover:text-indigo-700"><FaFacebook /></Link>
        </div>
      </nav>
      <nav className='mx-auto'>
        <h6 className="footer-title">Links</h6>
        <Link className="link link-hover">About</Link>
        <Link className="link link-hover">Contact Us</Link>
        <Link className="link link-hover">Support</Link>
      </nav>
    </footer>
  )
}

export default Footer
