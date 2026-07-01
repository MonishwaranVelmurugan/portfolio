const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const FORM_LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 2000,
}

export function validateContactForm(formData) {
  const errors = {}

  if (formData._honeypot?.trim()) {
    return errors
  }

  const name = formData.name.trim()
  const email = formData.email.trim()
  const subject = formData.subject.trim()
  const message = formData.message.trim()

  if (name.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).'
  } else if (name.length > FORM_LIMITS.name) {
    errors.name = `Name must be ${FORM_LIMITS.name} characters or fewer.`
  }

  if (!email) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.'
  } else if (email.length > FORM_LIMITS.email) {
    errors.email = `Email must be ${FORM_LIMITS.email} characters or fewer.`
  }

  if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.'
  } else if (subject.length > FORM_LIMITS.subject) {
    errors.subject = `Subject must be ${FORM_LIMITS.subject} characters or fewer.`
  }

  if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  } else if (message.length > FORM_LIMITS.message) {
    errors.message = `Message must be ${FORM_LIMITS.message} characters or fewer.`
  }

  return errors
}

export function hasValidationErrors(errors) {
  return Object.keys(errors).length > 0
}

export function isHoneypotTriggered(formData) {
  return Boolean(formData._honeypot?.trim())
}
