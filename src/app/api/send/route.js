import { Resend } from 'resend';

const resend = new Resend('re_Jg4MLWGx_LWTa7rGmFB2KVvCjLR6XS18b');
// const from = new Resend(process.env.FROM_EMAIL);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Apeksha apeksha1396@gmail.com',
      to: ['apeksha0513@gmail.com'],
      subject: 'Hello world',
      react: (<>
      <p>Email body</p></>),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
