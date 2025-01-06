const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-10 my-8 rounded-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Welcome to <span className="text-indigo-600 font-semibold">FundFusions</span>, your trusted platform for crowdfunding innovation. We are committed to helping creators, entrepreneurs, and visionaries bring their ideas to life by connecting them with backers who believe in their dreams.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
                        <p className="text-gray-600">
                            At FundFusions, our mission is to create a seamless and transparent platform where innovators and supporters can come together to build a brighter future. We strive to empower individuals to achieve their goals and make meaningful contributions to society.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
                        <p className="text-gray-600">
                            We envision a world where great ideas are never limited by resources. By fostering collaboration and innovation, we aim to be the go-to platform for crowdfunding success.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">What We Do</h2>
                        <p className="text-gray-600">
                            FundFusions connects project creators with a global network of supporters who provide the necessary funding to turn ideas into reality. From creative ventures to tech startups, we cater to a wide range of projects.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
                        <p className="text-gray-600">
                            We prioritize trust, transparency, and user experience. With advanced tools, secure transactions, and a supportive community, FundFusions is designed to make crowdfunding simple and effective.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-6">
                        Become a part of our growing community of dreamers and doers. Whether you have a project to fund or want to support groundbreaking ideas, FundFusions is here for you.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium text-lg rounded-md shadow hover:bg-indigo-700"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;