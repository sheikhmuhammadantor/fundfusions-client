import money from '../../assets/money.png'
import newsletter from '../../assets/newsletter.png'
import unity from '../../assets/unity.png'

function HowItWork() {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-evenly text-center gap-y-6 my-12'>
      <div className='lg:col-span-3 md:col-span-2 col-span-1 text-5xl font-semibold'>How It Works</div>
      <div>
        <img className='h-20 mx-auto my-4' src={money} alt="" />
        <h3 className='text-2xl font-semibold my-2'>Fund a Campaign</h3>
        <p className='max-w-[78%] mx-auto'>Meet individuals seeking healthcare and classroom supplies and donate as low as $5 to make it possible for them.</p>
      </div>
      <div>
        <img className='h-20 mx-auto my-4' src={unity} alt="" />
        <h3 className='text-2xl font-semibold my-2'>Get Solid Updates</h3>
        <p className='max-w-[78%] mx-auto'>We send you solid updates like photos, videos, cost receipts and thank you letters. You will know the impact you have made.</p>
      </div>
      <div className='lg:col-span-1 md:col-span-2 col-span-1'>
        <img className='h-20 mx-auto my-4' src={newsletter} alt="" />
        <h3 className='text-2xl font-semibold my-2'>We Do Our Part</h3>
        <p className='max-w-[78%] mx-auto'>Funds are transferred to partners upon treatment confirmation. For classroom campaigns, materials are purchased and delivered directly to the school once fully funded</p>
      </div>
    </div>
  )
}

export default HowItWork
