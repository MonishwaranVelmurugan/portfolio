/**
 * EmailJS public configuration.
 * Store credentials in .env — never commit real keys to version control.
 * Required variables: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
}

export function isEmailJsConfigured() {
  return Boolean(
    emailjsConfig.serviceId &&
      emailjsConfig.templateId &&
      emailjsConfig.publicKey,
  )
}
