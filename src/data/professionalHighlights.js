import { FiSettings, FiCpu, FiMonitor } from 'react-icons/fi'

export const professionalHighlightsContent = {
  title: 'Professional Highlights',
  items: [
    {
      id: 'industrial-automation',
      title: 'Industrial Automation',
      description:
        'Delivered automation systems integrating PLCs, HMIs, Modbus, MQTT, and cloud monitoring for process visibility and control.',
      icon: FiSettings,
    },
    {
      id: 'embedded-product-development',
      title: 'Embedded Product Development',
      description:
        'Designed embedded devices with ESP32, Raspberry Pi, and Arduino for sensing, control, and connected product prototypes.',
      icon: FiCpu,
    },
    {
      id: 'full-stack-development',
      title: 'Full Stack Software Development',
      description:
        'Built CRM platforms, SaaS applications, dashboards, and REST APIs used in training, healthcare, and industrial operations.',
      icon: FiMonitor,
    },
  ],
}
