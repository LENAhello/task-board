import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendResetPasswordToken = async (email: string, token: string) => {
  const link = `${process.env.DOMAIN}/reset-password?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `
      <div>
        <a href="${link}">
          Click here to reset your password
        <a/>
      <div/>
    `
  });

}