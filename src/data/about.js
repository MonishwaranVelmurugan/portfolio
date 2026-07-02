import { FiCpu, FiGlobe, FiMonitor, FiBookOpen } from 'react-icons/fi'

export const aboutContent = {
  title: 'About Me',
  paragraphs: [
  'I am a Senior Project Engineer at IPCS Global and the Founder of Rennovia Solutions, specializing in Industrial IoT, Embedded Systems, PLC Automation, and Full Stack Software Development. I design and deliver intelligent automation platforms, cloud-connected IoT solutions, embedded products, and scalable business applications that help organizations improve productivity, streamline operations, and accelerate digital transformation.',
  'Through Rennovia Solutions, I develop innovative software products and customized solutions for industries, educational institutions, and healthcare organizations. My work includes SaaS-based CRM and ERP platforms, cloud-enabled Industrial IoT systems, PLC-integrated automation, real-time monitoring dashboards, and secure MQTT and Modbus communication solutions for industrial environments.',
  'Beyond software development, I am passionate about sharing knowledge through technical seminars, workshops, and corporate training programs in Industrial IoT, PLC Programming, Embedded Systems, and Automation Technologies. I enjoy mentoring aspiring engineers, building practical solutions to real-world challenges, and creating technology that delivers measurable business value.',
],
  expertise: [
    {
      title: 'Industrial IoT',
      description:
        'Integrated connected industrial systems using MQTT, Modbus, PLCs, sensors, and cloud platforms for live monitoring and control.',
      icon: FiGlobe,
    },
    {
      title: 'Embedded Systems',
      description:
        'Built embedded products with ESP32, Arduino, Raspberry Pi, and STM32 for sensing, control, and device-level intelligence.',
      icon: FiCpu,
    },
    {
      title: 'Enterprise Software',
      description:
        'Delivered CRM, SaaS, dashboards, and business applications used by training institutes, clinics, and operational teams.',
      icon: FiMonitor,
    },
    {
      title: 'Training & Mentorship',
      description:
        'Conducted hands-on workshops and guest lectures focused on industrial automation, embedded systems, and practical engineering skills.',
      icon: FiBookOpen,
    },
  ],
}
