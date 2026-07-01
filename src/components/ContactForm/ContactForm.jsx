import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { contactContent } from '../../data/contact'
import { isEmailJsConfigured } from '../../config/emailjs'
import { sendContactEmail } from '../../utils/sendEmail'
import {
  FORM_LIMITS,
  hasValidationErrors,
  isHoneypotTriggered,
  validateContactForm,
} from '../../utils/validateContactForm'
import { cn } from '../../utils/cn'
import { cardBase, cardPadding } from '../../utils/styles'
import Button from '../Button'

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  _honeypot: '',
}

export default function ContactForm({ className }) {
  const { form } = contactContent
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isHoneypotTriggered(formData)) {
      setStatus('success')
      setFeedback(form.successMessage)
      setFormData(initialFormState)
      return
    }

    const validationErrors = validateContactForm(formData)
    if (hasValidationErrors(validationErrors)) {
      setErrors(validationErrors)
      setStatus('error')
      setFeedback('Please correct the highlighted fields.')
      return
    }

    setStatus('submitting')
    setFeedback('')
    setErrors({})

    if (!isEmailJsConfigured()) {
      setStatus('error')
      setFeedback(form.notConfiguredMessage)
      return
    }

    try {
      await sendContactEmail(formData)
      setStatus('success')
      setFeedback(form.successMessage)
      setFormData(initialFormState)
    } catch (error) {
      setStatus('error')
      setFeedback(
        error.message === 'EMAILJS_NOT_CONFIGURED'
          ? form.notConfiguredMessage
          : form.errorMessage,
      )
    }
  }

  const inputClasses = (fieldName) =>
    cn(
      'w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-text outline-none transition-colors placeholder:text-muted focus:border-primary',
      errors[fieldName] ? 'border-error' : 'border-border',
    )

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(cardBase, cardPadding, 'sm:p-8', className)}
      aria-label="Contact form"
      noValidate
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="_honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData._honeypot}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-5">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-text">
            {form.nameLabel}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={FORM_LIMITS.name}
            value={formData.name}
            onChange={handleChange}
            placeholder={form.namePlaceholder}
            className={inputClasses('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-sm text-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-text">
            {form.emailLabel}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={FORM_LIMITS.email}
            value={formData.email}
            onChange={handleChange}
            placeholder={form.emailPlaceholder}
            className={inputClasses('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-sm text-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-text">
            {form.subjectLabel}
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            maxLength={FORM_LIMITS.subject}
            value={formData.subject}
            onChange={handleChange}
            placeholder={form.subjectPlaceholder}
            className={inputClasses('subject')}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          />
          {errors.subject && (
            <p id="contact-subject-error" className="mt-1.5 text-sm text-error" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-text">
            {form.messageLabel}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={FORM_LIMITS.message}
            value={formData.message}
            onChange={handleChange}
            placeholder={form.messagePlaceholder}
            className={cn(inputClasses('message'), 'min-h-[120px] resize-y')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1.5 text-sm text-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className={cn(
            'mt-4 text-sm',
            status === 'success' ? 'text-success' : 'text-error',
          )}
        >
          {feedback}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="mt-6"
        isLoading={status === 'submitting'}
        disabled={status === 'submitting'}
      >
        {status !== 'submitting' && <FiSend className="h-4 w-4" aria-hidden="true" />}
        {status === 'submitting' ? form.sendingLabel : form.submitLabel}
      </Button>
    </form>
  )
}
