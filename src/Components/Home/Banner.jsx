import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center">
        Your Idea Your{' '}
        <span className="font-bold text-[#477594]">
          <Typewriter
            words={['Perspective', 'Vision', 'Future', 'Dream!', 'Journey', 'Voice', 'Purpose!', 'Legacy', 'Innovation']}
            loop={5}
            cursor
            cursorStyle='_'/>
        </span>
      </h1>
      {/* </div> */}
      <Swiper className="my-12" spaceBetween={30} slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}>
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-blue-600 text-white text-center h-[60vh] grid place-items-center rounded-xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/GpTPhcD/idea.webp)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Fund Your Dream Project Today</h2>
              <p>Join thousands of creators and entrepreneurs launching their campaigns on FundFusion.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-blue-600 text-white text-center h-[60vh] grid place-items-center rounded-xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/zbGwbc2/minutes.webp)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Start Your Campaign in Minutes</h2>
              <p>FundFusions makes it simple to create your campaign and share your vision with the world.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-blue-600 text-white text-center h-[60vh] grid place-items-center rounded-xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/ch50rtf/believe.jpg)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Back Projects You Believe In</h2>
              <p>Explore innovative campaigns and support ideas that excite you.</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="bg-blue-600 text-white text-center h-[60vh] grid place-items-center rounded-xl bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: 'url(https://i.ibb.co.com/T40GWMF/dream.jpg)' }}>
            <div>
              <h2 className="text-4xl font-bold mb-2">Make Your Ideas Reality</h2>
              <p>With FundFusions, you can bring your creative ideas to life and get the support you need.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
