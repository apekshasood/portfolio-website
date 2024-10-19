import nodemailer from 'nodemailer'

export async function POST(req, res) {
  const { name, email, message } = await req.json()

  // Validate input data
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Nodemailer transport configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like SendGrid, etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password (use environment variables for security)
    },
  })

  // Email content
  const mailOptions = {
    from: email, // Sender's email
    to: 'apekshasood03@gmail.com', // Your email where you want to receive the message
    subject: `New contact message from ${name}`,
    text: message,
  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: 'Email not sent' }), {
      status: 500,
    })
  }
}
