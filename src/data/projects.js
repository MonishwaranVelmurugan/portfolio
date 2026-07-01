import trainingCrmImage from '../assets/images/projects/training-institute-crm.svg'
import dentalCrmImage from '../assets/images/projects/dental-clinic-crm.svg'
import iotDashboardImage  from "../assets/images/projects/IIOT_dash.png";
import plcMonitoringImage from "../assets/images/projects/PLC_dash.png";
import smartHomeImage from '../assets/images/projects/smart-home-automation.png'
import evChargingImage from '../assets/images/projects/ev-charging-station.png'

export const projectsContent = {
  title: 'Featured Projects',
  subtitle:
    'Selected products and engineering solutions across commercial software, industrial automation, embedded systems, and IoT.',
  items: [
    {
      id: 'training-institute-crm',
      title: 'Training Institute CRM',
      category: 'Commercial SaaS Product',
      description:
        'Commercial CRM and ERP platform for training institutes to manage admissions, courses, attendance, fees, certificates, and reporting in one system.',
      image: trainingCrmImage,
      imageAlt: 'Training Institute CRM dashboard for admissions, fees, and student management',
      techStack: ['React', 'Node.js', 'MySQL', 'REST API', 'Bootstrap'],
      features: [
        'Student and lead management',
        'Structured admission workflow',
        'Attendance and batch tracking',
        'Fee collection and receipts',
        'Certificate generation',
        'Operational reports dashboard',
        'Role-based multi-user access',
      ],
      overview:
        'A production CRM and ERP platform built to centralize institute operations from enquiry to certification.',
      problem:
        'Training institutes managed admissions, fees, and academic records across spreadsheets and disconnected tools, causing delays and reporting gaps.',
      solution:
        'Designed a modular web platform with role-based access, admission pipelines, finance workflows, and centralized reporting.',
      architecture:
        'React frontend, Node.js REST API, MySQL data layer, and service modules for admissions, finance, attendance, and reporting.',
      challenges:
        'Mapped varied institute workflows into one flexible system without overcomplicating daily operations for non-technical staff.',
      outcome:
        'Reduced manual administration, improved enquiry tracking, and gave management real-time visibility into institute performance.',
      businessValue:
        'Helped institutes operate with fewer manual errors, faster admissions processing, and clearer financial and academic oversight.',
      github: null,
      demo: null,
      screenshots: [],
    },
    {
      id: 'dental-clinic-crm',
      title: 'Dental Clinic CRM',
      category: 'Healthcare CRM',
      description:
        'Clinic management platform for dental practices to manage patients, appointments, treatments, billing, and doctor workflows.',
      image: dentalCrmImage,
      imageAlt: 'Dental Clinic CRM interface for patient records and appointment scheduling',
      techStack: ['React', 'Express', 'MySQL', 'Prisma', 'Bootstrap'],
      features: [
        'Patient profile management',
        'Appointment scheduling',
        'Doctor dashboard',
        'Billing and invoicing',
        'Treatment history records',
        'Clinic reporting',
        'Secure authentication',
      ],
      overview:
        'A healthcare CRM tailored for dental clinics to digitize patient care, scheduling, and billing operations.',
      problem:
        'Clinics relied on manual records and fragmented tools, making appointment coordination and billing history difficult to manage accurately.',
      solution:
        'Built a secure clinic platform with patient records, scheduling workflows, treatment logs, billing modules, and role-specific dashboards.',
      architecture:
        'React SPA, Express REST API, Prisma ORM on MySQL, and separate modules for patients, scheduling, billing, and reporting.',
      challenges:
        'Balanced detailed clinical and billing records with a simple interface for front-desk and administrative staff.',
      outcome:
        'Improved appointment coordination, reduced record duplication, and created a reliable digital history for patients and billing.',
      businessValue:
        'Enabled clinics to run daily operations with better patient visibility, fewer scheduling conflicts, and cleaner financial tracking.',
      github: null,
      demo: null,
      screenshots: [],
    },
    {
      id: 'industrial-iot-dashboard',
      title: 'Industrial IoT Dashboard',
      category: 'Industrial IoT',
      description:
        'Real-time dashboard for industrial equipment monitoring using ESP32 edge devices, MQTT messaging, and cloud data storage.',
      image: iotDashboardImage,
      imageAlt: 'Industrial IoT dashboard showing live sensor data and equipment monitoring',
      techStack: ['ESP32', 'MQTT', 'Python', 'Flask', 'MySQL'],
      features: [
        'Live equipment monitoring',
        'Sensor telemetry dashboard',
        'Cloud data logging',
        'Alarm and threshold alerts',
        'Historical trend analysis',
      ],
      overview:
        'An industrial monitoring platform connecting shop-floor devices to a web dashboard for live telemetry and operational insight.',
      problem:
        'Operations teams lacked a single view of equipment status, sensor readings, and alarm conditions across distributed assets.',
      solution:
        'Integrated ESP32 edge devices, MQTT messaging, and a Flask backend to collect, store, and visualize operational data in real time.',
      architecture:
        'ESP32 publishes MQTT telemetry, Flask services ingest and process data, MySQL stores logs, and the dashboard presents live and historical views.',
      challenges:
        'Maintained stable MQTT data flow and responsive visualization under continuous telemetry from multiple devices.',
      outcome:
        'Gave operators live visibility into equipment health, faster alarm response, and historical data for maintenance planning.',
      businessValue:
        'Supported better uptime decisions, reduced blind spots in production monitoring, and improved response to equipment anomalies.',
      github: null,
      demo: null,
      screenshots: [],
    },
    {
      id: 'plc-monitoring-system',
      title: 'PLC Monitoring System',
      category: 'Industrial Automation',
      description:
        'Process monitoring platform connecting PLCs and HMIs over Modbus to a web dashboard for visualization, logging, and oversight.',
      image: plcMonitoringImage,
      imageAlt: 'PLC monitoring dashboard for industrial process visualization and data logging',
      techStack: ['PLC', 'Modbus', 'Python', 'Flask', 'MySQL'],
      features: [
        'PLC data acquisition',
        'Modbus register integration',
        'Process visualization',
        'Alarm handling',
        'Historical process logging',
      ],
      overview:
        'An automation monitoring solution that extends PLC and HMI visibility to a centralized web platform.',
      problem:
        'Production teams depended on local HMI panels alone and had limited remote access to process data and machine states.',
      solution:
        'Implemented Modbus-based data acquisition with a Flask backend and dashboard for live monitoring and logged process history.',
      architecture:
        'PLCs and HMIs communicate over Modbus, Python services normalize process tags, Flask exposes APIs, and MySQL stores time-series records.',
      challenges:
        'Mapped PLC register data accurately while presenting complex process information in a clear, operator-friendly dashboard.',
      outcome:
        'Improved process visibility, simplified troubleshooting, and created a reliable audit trail of machine and process events.',
      businessValue:
        'Reduced downtime investigation time and gave supervisors remote insight into automated production processes.',
      github: null,
      demo: null,
      screenshots: [],
    },
    {
      id: 'smart-home-automation',
      title: 'Smart Home Automation',
      category: 'Embedded Systems',
      description:
        'ESP32-based home automation system for remote appliance control, sensor monitoring, and MQTT-connected cloud updates.',
      image: smartHomeImage,
      imageAlt: 'Smart home automation system built with ESP32 and MQTT connectivity',
      techStack: ['ESP32', 'MQTT', 'Arduino', 'Firebase'],
      features: [
        'Remote appliance control',
        'Environmental sensor monitoring',
        'MQTT device communication',
        'Mobile/cloud state sync',
        'Rule-based automation',
      ],
      overview:
        'An embedded automation prototype using ESP32 controllers to monitor sensors and control appliances over MQTT and Firebase.',
      problem:
        'Low-cost automation setups often lack reliable remote control, consistent device communication, and simple monitoring interfaces.',
      solution:
        'Built ESP32 firmware with MQTT messaging and Firebase integration for remote control, state tracking, and sensor visibility.',
      architecture:
        'ESP32 handles GPIO control and sensor reads, MQTT routes events, and Firebase maintains cloud state for remote access.',
      challenges:
        'Delivered stable wireless communication and responsive control within embedded hardware constraints.',
      outcome:
        'Produced a working automation system with dependable remote control and real-time sensor feedback.',
      businessValue:
        'Demonstrated a scalable approach to affordable connected home automation using open protocols and embedded hardware.',
      github: null,
      demo: null,
      screenshots: [],
    },
    {
      id: 'ev-charging-station',
      title: 'EV Charging Station Prototype',
      category: 'Embedded + IoT',
      description:
        'Smart EV charging prototype with embedded session control, MQTT telemetry, cloud logging, and simulated payment workflows.',
      image: evChargingImage,
      imageAlt: 'EV charging station prototype with remote monitoring and session tracking',
      techStack: ['ESP32', 'Python', 'MQTT', 'MySQL'],
      features: [
        'Charging session monitoring',
        'Remote station status tracking',
        'Payment workflow simulation',
        'Cloud event logging',
        'Device health alerts',
      ],
      overview:
        'A prototype smart charging platform combining embedded control, cloud monitoring, and session management for EV infrastructure testing.',
      problem:
        'EV charging prototypes require coordinated hardware control, session tracking, and remote visibility to validate real deployment scenarios.',
      solution:
        'Developed an ESP32-based controller with MQTT telemetry, Python backend services, and a monitoring interface for session and device status.',
      architecture:
        'ESP32 manages charging logic and telemetry, MQTT transports events, Python processes sessions, and MySQL stores operational logs.',
      challenges:
        'Synchronized hardware state, session logic, and cloud reporting while simulating payment and usage workflows accurately.',
      outcome:
        'Delivered an end-to-end prototype for charging monitoring, remote status visibility, and structured session records.',
      businessValue:
        'Provided a practical foundation for testing connected charging infrastructure before full commercial deployment.',
      github: null,
      demo: null,
      screenshots: [],
    },
  ],
}
