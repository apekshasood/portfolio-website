import React, { useState } from 'react'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to backend)
    console.log(formData);
};
  return (
    <div className='container mx-auto my-6'>
      <div className='items-center'>
        <h1 className='text-center text-4xl lg-text-6xl font-extrabold text-[#C5C4CA] py-12'>{"<Contact Me />"}</h1>
       <div className="container">
    <div className="grid lg:grid-cols-12 grid-row-12 gap-12">
    <div className="col-span-5 flex lg:justify-center items-start">
      <h1 className='text-4xl lg-text-6xl font-extrabold'> <span className='text-[#C652EE]'>CONTACT</span> ME</h1>

    </div>
    <div className="col-span-7">
    <form onSubmit={handleSubmit} className="max-w-md lg:mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
            </div>
            <button className='w-full sm:w-auto px-6 py-2 rounded-lg border-2 border-[#C652EE]'>Send</button>
        </form>
    </div>
    </div>
       </div>
      </div>
    </div>
  )
}

export default ContactMe