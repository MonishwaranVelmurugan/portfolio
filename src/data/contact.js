import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'
import { siteConfig } from './site'

export const contactContent = {
  title: 'Let’s Connect',
  subtitle:
  'Whether you have a project, collaboration opportunity, technical consultation, or training requirement, feel free to get in touch. I would be happy to discuss how we can work together.',
  form: {
    nameLabel: 'Full Name',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'What would you like to discuss?',
    messageLabel: 'Message',
    messagePlaceholder: 'Share a brief overview of your project or inquiry...',
    submitLabel: 'Contact Me',
    sendingLabel: 'Sending...',
    successMessage: 'Thank you. Your message has been sent successfully.',
    errorMessage: 'Unable to send your message. Please try again or email me directly.',
    notConfiguredMessage:
      'Email service is not configured yet. Please use the contact details provided or email me directly.',
  },
  infoCards: [
    {
      id: 'email',
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: FiMail,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
      icon: FiPhone,
    },
    {
      id: 'location',
      label: 'Location',
      value: siteConfig.location,
      href: null,
      icon: FiMapPin,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: siteConfig.linkedin,
      icon: FiLinkedin,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'View GitHub Profile',
      href: siteConfig.github,
      icon: FiGithub,
    },
  ],
  resume: {
    label: 'Download Resume',
    href: siteConfig.resumeUrl,
    icon: FiDownload,
  },
}
