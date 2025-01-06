import toast from "react-hot-toast";

const Contact = () => {
    const handelSendMassage = (e) => {
        e.preventDefault();
        e.target.reset();
        toast.success('Successfully Send Massage !', {
            position: "top-center",
        })
    }

    return (
        <div className="bg-gray-100 py-10 my-8 rounded-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions or need support? Get in touch with us, and we’ll be happy to assist you.
                    </p>
                </div>

                <div className="mt-8">
                    <form onSubmit={handelSendMassage} className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Your Name</label>
                            <input type="text" id="name" className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Your Email</label>
                            <input type="email" id="email" className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Your Message</label>
                            <textarea id="message" rows="5" className="w-full border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your message"></textarea>
                        </div>
                        <button className="btn w-full bg-indigo-600 text-white font-medium py-3 rounded-lg shadow hover:bg-indigo-700">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;