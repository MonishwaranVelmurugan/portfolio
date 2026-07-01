import profileImage from '../assets/images/profile.jpg'
import resume from '../resume.pdf'

export const heroContent = {
  greeting: "Hello, I'm",
  name: 'Monishwaran Velmurugan',
  title: 'Senior Project Engineer',
  specializations: [
    'Industrial IoT',
    'Embedded Systems',
    'PLC Automation',
    'Full Stack Development',
  ],
  description:
    'Senior Project Engineer specializing in Industrial IoT, embedded systems, and full-stack software. I design automation platforms, connected devices, and business applications that solve operational problems on the factory floor and in production environments.',

  profileImage,

  profileAlt:
    'Monishwaran Velmurugan, Senior Project Engineer specializing in Industrial IoT and automation',

  primaryCta: {
    label: 'View Projects',
    href: '#projects',
  },

  secondaryCta: {
    label: 'Download Resume',
    href: resume,
  },
}