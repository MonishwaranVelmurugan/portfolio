import { FiCpu, FiGlobe, FiMonitor, FiBookOpen } from 'react-icons/fi'

export const aboutContent = {
  title: 'About Me',
  paragraphs: [
    'I am a Senior Project Engineer with practical experience in Industrial IoT, Embedded Systems, Industrial Automation, PLC Programming, and Full Stack Development. I design and deliver systems that connect industrial hardware, software platforms, and business operations into reliable, production-ready solutions.',
    'My work includes commercial software products, cloud-connected IoT platforms, PLC-integrated automation, and intelligent embedded devices. I have built CRM and ERP platforms for training institutes and healthcare organizations, developed real-time industrial dashboards, and implemented Modbus and MQTT-based monitoring for shop-floor equipment.',
    'Alongside project delivery, I lead technical workshops and mentor engineering students, helping teams apply automation and software concepts to real industry use cases. I focus on maintainable engineering, clear system design, and outcomes that hold up in live operating environments.',
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
