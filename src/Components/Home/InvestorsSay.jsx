import { Typewriter } from "react-simple-typewriter"

function InvestorsSay() {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-evenly text-center gap-y-8 gap-5 mb-12'>
      <div className='lg:col-span-3 md:col-span-2 col-span-1 text-5xl font-semibold mb-4 text-left'>
        <h1 className="text-5xl font-semibold text-center">
          What Investors are Saying{''}
          <span className="font-bold text-7xl text-[#477594]">
            <Typewriter
              words={['', '']}
              loop={5}
              cursor
              cursorStyle='_' />
          </span>
        </h1>
      </div>
      <div>
        <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
          <img className="max-w-full max-h-full" src='https://randomuser.me/api/portraits/men/12.jpg' alt="" />
        </label>
        <h3 className='text-2xl font-semibold my-2'>Stan A</h3>
        <p className='max-w-[78%] mx-auto'>Their careful selection and vetting of sponsors and deals has enabled me to invest with confidence.</p>
      </div>
      <div>
        <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
          <img className="max-w-full max-h-full" src='https://randomuser.me/api/portraits/men/31.jpg' alt="" />
        </label>
        <h3 className='text-2xl font-semibold my-2'>Robert J.</h3>
        <p className='max-w-[78%] mx-auto'>FundFusions allowed me to diversify my overall portfolio by adding different types of real estate.</p>
      </div>
      <div>
        <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
          <img className="max-w-full max-h-full" src='https://randomuser.me/api/portraits/men/40.jpg' alt="" />
        </label>
        <h3 className='text-2xl font-semibold my-2'>Jim M.</h3>
        <p className='max-w-[78%] mx-auto'>I have always been favorably impressed with their knowledge of the commercial real estate markets.</p>
      </div>
      <div>
        <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
          <img className="max-w-full max-h-full" src='https://randomuser.me/api/portraits/men/83.jpg' alt="" />
        </label>
        <h3 className='text-2xl font-semibold my-2'>John T.</h3>
        <p className='max-w-[78%] mx-auto'>FundFusions offered me access in a way that just didn’t exist before.</p>
      </div>
      <div>
        <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
          <img className="max-w-full max-h-full" src='https://randomuser.me/api/portraits/men/4.jpg' alt="" />
        </label>
        <h3 className='text-2xl font-semibold my-2'>Doh Jon</h3>
        <p className='max-w-[78%] mx-auto'>Their careful selection and vetting of sponsors and deals has enabled me to invest with confidence.</p>
      </div>
      <div>
        <label htmlFor="my-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
          <img className="max-w-full max-h-full" src='https://randomuser.me/api/portraits/men/33.jpg' alt="" />
        </label>
        <h3 className='text-2xl font-semibold my-2'>Doh Jon</h3>
        <p className='max-w-[78%] mx-auto'>I like for Each deal and sponsor are carefully screened before presenting to investors.</p>
      </div>
    </div>
  )
}

export default InvestorsSay
