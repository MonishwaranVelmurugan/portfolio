import automationCertificate from '../assets/images/certifications/certificate-placeholder-1.svg'
import pythonCertificate from '../assets/images/certifications/certificate-placeholder-2.svg'

export const certificationsContent = {
  title: 'Professional Certifications',
  subtitle:
    'Industry-recognized certifications demonstrating expertise in Industrial Automation and Software Development.',

  items: [
    {
      id: 'automation-service-engineer',
      title: 'Automation Service Engineer',
      issuedBy: 'IPCS Global',
      year: '2025',
      image: automationCertificate,
      imageAlt: 'Automation Service Engineer Certificate issued by IPCS Global',
      description:
        'Successfully completed professional training in Industrial Automation covering PLC Programming, HMI, SCADA, Industrial Networking, Modbus Communication, Control Panel Design, and Industrial Process Automation.',
      credentialUrl: null,
    },

    {
      id: 'programming-essentials-python',
      title: 'Programming Essentials in Python',
      issuedBy: 'ICT Academy',
      year: '2022',
      image: pythonCertificate,
      imageAlt: 'Programming Essentials in Python Certificate issued by ICT Academy',
      description:
        'Successfully completed the Programming Essentials in Python certification covering Python fundamentals, problem-solving, functions, object-oriented programming, and software development concepts.',
      credentialUrl: null,
    },
  ],
}