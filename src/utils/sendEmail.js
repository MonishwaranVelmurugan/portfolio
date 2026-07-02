import emailjs from '@emailjs/browser'
import { emailjsConfig, isEmailJsConfigured } from '../config/emailjs'

const AUTO_REPLY_TEMPLATE_ID = 'template_flkzow3'

export async function sendContactEmail(formData) {
  if (!isEmailJsConfigured()) {
    throw new Error('EMAILJS_NOT_CONFIGURED')
  }

  const templateParams = {
    from_name: formData.name.trim(),
    from_email: formData.email.trim(),
    subject: formData.subject.trim(),
    message: formData.message.trim(),
    to_name: 'Monishwaran Velmurugan',
  }

  // Send the message to you
  await emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.templateId,
    templateParams,
    emailjsConfig.publicKey,
  )

  // Send an automatic reply to the visitor
  await emailjs.send(
    emailjsConfig.serviceId,
    AUTO_REPLY_TEMPLATE_ID,
    templateParams,
    emailjsConfig.publicKey,
  )
}