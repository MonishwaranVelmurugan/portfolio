import workshopPlc from '../assets/images/workshops/plc-workshop.jpg'
import workshopIot from '../assets/images/workshops/iiot-workshop.jpg'
import workshopEmbedded from '../assets/images/workshops/embedded-seminar.jpg'
import workshopAutomation from '../assets/images/workshops/tvs-training.jpg'

export const workshopsContent = {
  title: 'Workshops & Guest Lectures',

  subtitle:
    'Technical workshops, guest lectures, seminars, and industrial training programs delivered for engineering institutions and industry professionals.',

  items: [
    {
      id: 'plc-programming-workshops',

      title: 'PLC Programming Workshops',

      institution:
        'KLN College of Engineering, Thiagarajar College of Engineering, AAA College of Engineering & Technology, and Partner Institutions',

      audience: 'Engineering Students & Faculty',

      duration: '1–2 Days',

      description:
        'Conducted practical PLC Programming workshops covering PLC hardware configuration, ladder logic programming, timers, counters, digital and analog I/O, industrial sensors, HMI integration, and real-time industrial automation applications through hands-on laboratory sessions.',

      image: workshopPlc,

      imageAlt:
        'PLC Programming Workshop conducted at engineering colleges',
    },

    {
      id: 'iiot-seminar-workshop',

      title: 'Industrial Internet of Things (IIoT) Seminar & Workshop',

      institution:
        'Thiagarajar College of Engineering, KLN College of Engineering, and Partner Institutions',

      audience: 'Engineering Students',

      duration: '1–2 Days',

      description:
        'Delivered Industrial Internet of Things (IIoT) seminars and practical workshops covering ESP32 development, MQTT communication, cloud connectivity, sensor interfacing, industrial networking, edge computing, and Industry 4.0 applications with live demonstrations.',

      image: workshopIot,

      imageAlt:
        'Industrial Internet of Things Seminar and Workshop',
    },

    {
      id: 'embedded-systems-seminar',

      title: 'Embedded Systems & IoT Seminar',

      institution:
        'KLN College of Engineering, AAA College of Engineering & Technology, Thiagarajar College of Arts & Science, and Partner Institutions',

      audience: 'Engineering & Science Students',

      duration: '1 Day',

      description:
        'Presented technical seminars and practical workshops introducing Embedded Systems, Arduino, ESP32, IoT architecture, sensor interfacing, wireless communication, microcontrollers, and prototype development for real-world engineering applications.',

      image: workshopEmbedded,

      imageAlt:
        'Embedded Systems and IoT Seminar',
    },

    {
      id: 'industrial-training',

      title: 'Industrial Arduino & PLC Programming Training',

      institution: 'TVS Sundaram Brake Linings',

      audience: 'Senior Engineers',

      duration: '3 Days',

      description:
        'Delivered industrial training for senior engineers focusing on Arduino programming, PLC programming, industrial automation concepts, ladder logic development, hardware interfacing, industrial communication protocols, and practical control system implementation.',

      image: workshopAutomation,

      imageAlt:
        'Industrial Arduino and PLC Programming Training for TVS Sundaram Brake Linings',
    },
  ],
}