import emailjs from '@emailjs/browser'
import { emailjsConfig, isEmailJsConfigured } from '../config/emailjs'

export async function sendContactEmail(formData) {
  if (!isEmailJsConfigured()) {
    throw new Error('EMAILJS_NOT_CONFIGURED')
  }

  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.templateId,
    {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      to_name: 'Monishwaran Velmurugan',
    },
    emailjsConfig.publicKey,
  )
}
