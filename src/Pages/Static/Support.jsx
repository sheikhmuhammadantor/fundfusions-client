import { Link } from "react-router-dom"

const Support = () => {
    return (
        <div className="bg-gray-100 py-10 my-8 rounded-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Support</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Need help with our platform? Our dedicated support team is here to assist you.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">FAQs</h2>
                        <p className="text-gray-600">
                            Browse through our Frequently Asked Questions to find quick solutions to common issues.
                        </p>
                        <Link to="https://wa.me/8801957710483" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium mt-3 inline-block">Learn More</Link>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Live Chat</h2>
                        <p className="text-gray-600">
                            Connect with our support team through live chat for real-time assistance.
                        </p>
                        <Link to="https://wa.me/8801957710483" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium mt-3 inline-block">Start Chat</Link>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Email Support</h2>
                        <p className="text-gray-600">
                            Reach out to us via email, and we’ll respond within 24 hours.
                        </p>
                        <Link to="mailto:support@fundfusions.com" className="text-indigo-600 font-medium mt-3 inline-block">Email Us</Link>
                    </div>

                    <div className="p-6 bg-white shadow rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Community Forum</h2>
                        <p className="text-gray-600">
                            Join discussions and find solutions from our community of users.
                        </p>
                        <Link to="https://wa.me/8801957710483" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium mt-3 inline-block">Visit Forum</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;