import React, { useState } from 'react'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = formData

    if (!name || !email || !message) {
      alert('All fields are required')
      return
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Something went wrong while sending the email.')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-4xl font-extrabold text-[#C5C4CA] py-12">
        {'<Contact Me />'}
      </h1>

      {isSubmitted && (
        <p className="text-green-500 mb-4">Message sent successfully!</p>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-[#C5C4CA]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-[#C5C4CA]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-[#C5C4CA]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2 rounded-lg bg-[#C652EE] text-white font-bold"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactMe
