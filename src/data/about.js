import { FiCpu, FiGlobe, FiMonitor, FiBookOpen } from 'react-icons/fi'

export const aboutContent = {
  title: 'About Me',

  paragraphs: [
    'I am a Senior Project Engineer at IPCS Global and the Founder of Rennovia Solutions, a technology company specializing in Industrial IoT, Artificial Intelligence, Embedded Systems, PLC Automation, and Full Stack Software Development. I design and deliver intelligent automation platforms, cloud-connected IoT solutions, embedded products, and scalable business applications that help organizations improve productivity, streamline operations, and accelerate digital transformation.',

    'Through Rennovia Solutions, I collaborate with industries, educational institutions, healthcare organizations, and startups to develop innovative software products and intelligent automation solutions. My work includes SaaS-based CRM and ERP platforms, cloud-enabled Industrial IoT systems, PLC-integrated automation, real-time monitoring dashboards, secure MQTT and Modbus communication solutions, and custom engineering applications tailored to real-world business challenges.',

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
        'Delivered CRM, ERP, SaaS platforms, dashboards, and business applications for industries, educational institutions, and healthcare organizations.',
      icon: FiMonitor,
    },
    {
      title: 'Training & Mentorship',
      description:
        'Conducted hands-on workshops, industrial seminars, corporate training, and guest lectures focused on PLC Programming, Industrial IoT, Embedded Systems, and Automation Technologies.',
      icon: FiBookOpen,
    },
  ],
}