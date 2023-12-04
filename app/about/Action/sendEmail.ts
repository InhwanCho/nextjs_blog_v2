'use server'
import { Resend } from 'resend'
import { getErrorMessage, validateString } from '../lib/utils'
const api_key = process.env.RESEND_API_KEY //@0.16.0

// 필요 시 react-email로 이메일 폼 변경.
export const sendEmail = async (formData: FormData) => {
  const resend = new Resend(api_key)
  const message = formData.get('message')
  const senderEmail = formData.get('senderEmail')

  if (!validateString(senderEmail, 200)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }
  let data
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'whdlsghks2@gmail.com',
      subject: 'Hello World',
      reply_to: senderEmail as string,
      text: message as string,
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }
  return { data }
}
