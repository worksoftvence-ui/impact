import { ServiceDetail, JobVacancy, TeamMember, OfficeLocation } from '../types';

export const COMPANY_INFO = {
  name: 'Impact Control Systems Ltd',
  shortName: 'Impact Control Systems',
  tagline: 'Building Energy Management Systems Specialists',
  established: 1991,
  yearsOfExperience: 35, // since 1991 (2026)
  stats: [
    { value: '35', label: 'Years of Engineering Excellence', note: 'Founded in 1991' },
    { value: '3', label: 'Strategic UK Regional Offices', note: 'Liverpool, Leeds, London' },
    { value: '5', label: 'Tier-1 Technology Partners', note: 'Trend, Tridium, Siemens & more' },
    { value: '500+', label: 'Commercial Buildings Optimised', note: '[CONFIRM WITH CLIENT]' },
  ],
  contacts: {
    generalEmail: 'admin@impactcontrols.co.uk',
    careersEmail: 'careers@impactcontrols.co.uk',
    liverpoolPhone: '0151 254 2658',
    leedsPhone: '0113 204 9111',
    linkedIn: 'https://www.linkedin.com/company/impact-control-systems-limited/',
  },
  images: {
    logo: '/assets/aistudio/image_4ad8e19a.png',
    heroIsometric: '/src/assets/images/hero_isometric_building_1793079669967.jpg',
    dashboardMockup: '/src/assets/images/bms_dashboard_screen_1793079669923.jpg',
    plantRoom: '/src/assets/images/commercial_plant_room_1793079671093.jpg',
    engineerSite: '/src/assets/images/bms_engineer_site_1793079671612.jpg',
    headquarters: '/src/assets/images/smart_commercial_headquarters_1793079672519.jpg',
  }
};

export const PARTNERS = [
  { name: 'Trend Controls', role: 'Approved System Integrator' },
  { name: 'Tridium Niagara', role: 'Certified Solution Partner' },
  { name: 'Siemens', role: 'Building Technologies Partner' },
  { name: 'Schneider Electric', role: 'EcoStruxure Specialist' },
  { name: 'Johnson Controls', role: 'Facility Systems Partner' },
];

export const SECTORS = [
  { id: 'commercial', title: 'Commercial Offices', description: 'Multi-tenant high-rises and corporate HQs with zoned comfort.' },
  { id: 'healthcare', title: 'Healthcare & NHS', description: 'Critical temperature, pressure, and sterile environment controls.' },
  { id: 'education', title: 'Education & Campuses', description: 'Scheduled heating, ventilation, and demand-led energy saving.' },
  { id: 'retail', title: 'Retail & Leisure', description: 'High-traffic footfall comfort and centralised estate scheduling.' },
  { id: 'industrial', title: 'Industrial & Logistics', description: 'High-bay air circulation, warehouse heating, and chiller plant.' },
  { id: 'public', title: 'Public Sector & Local Gov', description: 'Decarbonisation compliance, Salix funding, and open protocols.' },
];

export const WHY_IMPACT = [
  {
    title: 'Turnkey Delivery from Tender to Handover',
    description: 'Single-source responsibility covering control panel manufacture, field electrical installation, software logic, and commissioning.',
    icon: 'PackageCheck'
  },
  {
    title: 'Dedicated In-House Maintenance Division',
    description: 'Expert after-care, seasonal tuning, and rapid reactive support to protect your capital infrastructure over decades.',
    icon: 'Wrench'
  },
  {
    title: 'Open Protocols & Future-Ready Systems',
    description: 'BACnet, Modbus, MQTT, and RESTful architectures that prevent proprietary lock-in and enable smooth integrations.',
    icon: 'Cpu'
  },
  {
    title: 'Cloud-Based Insights & Remote Monitoring',
    description: 'Interactive browser dashboards providing continuous visibility, automated sub-metering, and instant alarm triage.',
    icon: 'CloudSun'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Survey & Design',
    description: 'Comprehensive plant survey, thermal load assessments, functional design specifications (FDS), and panel schematics.'
  },
  {
    step: '02',
    title: 'Install & Integrate',
    description: 'Bespoke panel manufacturing, Tier-1 controller deployment, precision sensor installation, and network bus integration.'
  },
  {
    step: '03',
    title: 'Test & Commission',
    description: 'Rigorous point-to-point electrical validation, sequence verification, PID tuning, seasonal checks, and client training.'
  },
  {
    step: '04',
    title: 'Maintain & Optimise',
    description: 'Scheduled preventative maintenance, continuous energy reporting, remote diagnostics, and lifecycle upgrades.'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'new-install',
    title: 'New Install Projects',
    tagline: 'Complete BMS solutions for new construction and fit-out',
    shortDescription: 'Turnkey BMS engineering for new builds, commercial shell & core, and CAT A/B fit-outs.',
    fullIntro: 'Impact Control Systems delivers complete turnkey Building Energy Management Systems for new commercial builds, healthcare facilities, education campuses, and high-spec fit-outs. From initial tender appraisal and panel manufacturing to on-site installation and seasonal commissioning, we ensure seamless execution with zero contractor friction.',
    image: COMPANY_INFO.images.headquarters,
    iconName: 'Building2',
    features: [
      {
        title: 'System Design & Engineering',
        description: 'Comprehensive functional design specifications (FDS), control panel schematics, IO schedules, and network topology layouts engineered precisely to CIBSE guidelines and project consultant briefs.'
      },
      {
        title: 'Supply & Installation',
        description: 'Bespoke control panel build in our certified workshops, delivery of high-accuracy field sensors, smart control valves, variable speed drives (VFDs), and complete containment and wiring.'
      },
      {
        title: 'Integration & Controls Programming',
        description: 'Custom software engineering written for Trend IQ4, Tridium Niagara 4, Siemens Desigo, and Schneider platforms, including sophisticated PID weather compensation loops and free-cooling economisers.'
      },
      {
        title: 'Testing, Commissioning & Validation',
        description: 'Rigorous 100% point-to-point pre-commissioning, functional plant sequence checks, hydraulic balancing coordination, and seasonal comfort calibration.'
      },
      {
        title: 'Graphics, Alarms & Reporting',
        description: 'Interactive HTML5 web-based head-end graphics, dynamic floor plans, alarm routing matrices, and automated PDF energy summaries.'
      },
      {
        title: 'Handover, Training & Documentation',
        description: 'Full O&M manuals, software backups on digital media, marked-up CAD schematics, and hands-on operational training for your on-site facilities staff.'
      }
    ],
    benefits: [
      'Turnkey single-point accountability from tender right through to practical completion',
      'Optimised day-one energy performance, reducing baseline operational utility expenditure',
      'Non-proprietary open protocol architecture (BACnet IP, MS/TP, Modbus) preventing lock-in',
      'Intuitive browser-based graphics accessible securely from any desktop or mobile device',
      'Robust compliance with Part L Building Regulations and UK Net Zero energy standards'
    ]
  },
  {
    id: 'upgrades-retrofit',
    title: 'Upgrades & Retrofit',
    tagline: 'Modernise legacy BMS systems without unnecessary disruption',
    shortDescription: 'Migrate obsolete controllers and head-ends to modern open platforms with zero operational downtime.',
    fullIntro: 'Many commercial buildings operate with aging BMS controllers that have reached end-of-support, lack spare parts, and run outdated software vulnerable to cybersecurity issues. Impact Control Systems specialises in live changeovers and phased retrofits that safeguard your plant operation while unlocking modern energy savings.',
    image: COMPANY_INFO.images.plantRoom,
    iconName: 'RefreshCw',
    features: [
      {
        title: 'System Surveys & Risk Assessment',
        description: 'Detailed audit of existing plant room panels, field wiring condition, sensor viability, and software strategy review to formulate a phased migration plan.'
      },
      {
        title: 'Upgrade Strategy & Design',
        description: 'Tailored migration roadmap minimising plant downtime through pre-assembled drop-in backplates and backwards-compatible communication bridges.'
      },
      {
        title: 'Controller, Software & Head-End Upgrades',
        description: 'Replacement of obsolete legacy controllers (such as older Trend IQ2/IQ3 or legacy third-party units) with cutting-edge Trend IQ4, TONN8, or Tridium JACE 9000 hardware.'
      },
      {
        title: 'System Integration & Migration',
        description: 'Seamless bridging between older field buses and high-speed BACnet/IP networks, maintaining continuity of operations throughout occupied hours.'
      },
      {
        title: 'Controls Optimisation & Reprogramming',
        description: 'Re-engineering outdated control sequences with modern energy-saving algorithms, optimum start/stop, variable flow resets, and deadband management.'
      },
      {
        title: 'Testing, Commissioning & Live Changeover',
        description: 'Carefully staged changeover protocols executed out-of-hours or during low-demand windows with immediate fallback safeguards.'
      },
      {
        title: 'Graphics Refresh & Modern Web UX',
        description: 'Conversion of static low-resolution graphics into dynamic SVG/HTML5 responsive dashboards with modern energy tracking.'
      },
      {
        title: 'Training, Documentation & Ongoing Support',
        description: 'Updated electrical drawings, new point schedules, and operator re-skilling so your team hits the ground running.'
      }
    ],
    benefits: [
      'Eliminate the catastrophic business risk of obsolete, unsupportable legacy controllers',
      'Typical 15% to 30% reduction in HVAC energy consumption through modernised control logic [CONFIRM WITH CLIENT]',
      'Maintain plant continuity with seamless live changeovers and zero disruption to occupants',
      'Dramatically improve building visibility through high-resolution web interfaces',
      'Re-use viable existing field wiring and valves where possible to minimise capital spend'
    ]
  },
  {
    id: 'maintenance',
    title: 'Planned Preventative Maintenance & Support',
    tagline: 'In-house maintenance division dedicated to uptime and efficiency',
    shortDescription: 'Scheduled preventative maintenance, 24/7 reactive callouts, and seasonal energy audits.',
    fullIntro: 'An unmaintained BMS can drift out of calibration within months, causing simultaneous heating and cooling, runaway energy bills, and premature plant failure. Our dedicated in-house maintenance division keeps your building systems running at peak engineering performance year-round.',
    image: COMPANY_INFO.images.engineerSite,
    iconName: 'ShieldCheck',
    features: [
      {
        title: 'Planned Preventative Maintenance (PPM)',
        description: 'Structured site visits per agreed maintenance schedule, verifying sensor calibration, actuator travel, relay operation, and network health.'
      },
      {
        title: 'System Performance Checks & Optimisation',
        description: 'Biannual seasonal changeover tuning (summer/winter modes), deadband inspection, and fine-tuning boiler and chiller staging.'
      },
      {
        title: 'Fault Diagnosis & Reactive Support',
        description: 'Rapid on-site emergency engineering dispatch and telephone technical assistance for urgent plant room faults [CONFIRM SLA WITH CLIENT].'
      },
      {
        title: 'Software Support, Security Patches & Backups',
        description: 'Routine controller database backups stored off-site, firmware upgrades, and cybersecurity patches for networked supervisor systems.'
      },
      {
        title: 'Alarm Management & Notification Audits',
        description: 'Rationalisation of nuisance alarms and setup of critical email/SMS notifications for facilities engineers.'
      },
      {
        title: 'Remote Monitoring & Diagnostics',
        description: 'Secure remote dial-in to diagnose plant trip conditions, perform software overrides, and resolve issues without travel delays.'
      },
      {
        title: 'Compliance & Lifecycle Planning',
        description: 'Detailed condition reporting and asset lifecycle forecasts to assist facility managers with multi-year capital budget planning.'
      },
      {
        title: 'Documentation & Ongoing Training',
        description: 'Digital service sheets delivered immediately after every visit, maintaining an unbroken audit trail for building compliance.'
      }
    ],
    benefits: [
      'Maximum building uptime and reliable comfort conditions for tenants and staff',
      'Prevention of energy drift, saving thousands of pounds annually in avoidable utility costs',
      'Early identification of failing mechanical valves, actuators, or pumps before total failure',
      'Extended operating lifespan of major mechanical plant assets (boilers, chillers, AHUs)',
      'Direct access to certified senior BEMS engineers who understand your site history'
    ]
  },
  {
    id: 'remote-graphics',
    title: 'Remote Graphics Hosting',
    tagline: 'Secure, cloud-hosted BMS graphics and dashboards accessible anywhere',
    shortDescription: 'Secure cloud-hosted supervisor graphics with multi-site portfolio views and no on-premise server hassle.',
    fullIntro: 'Say goodbye to dedicated, noisy on-site supervisor PCs that crash, run out of date, or require physical presence in a basement plant room. Impact Control Systems provides secure, cloud-hosted BMS graphics environments that let your team monitor, adjust, and review your buildings from any modern browser.',
    image: COMPANY_INFO.images.dashboardMockup,
    iconName: 'MonitorDot',
    features: [
      {
        title: 'Secure Cloud-Hosted BMS Supervisor',
        description: 'Hosted in sovereign Tier-3 UK data centres with 99.9% uptime SLA, redundant power, and encrypted offsite backups [CONFIRM HOSTING SPEC].'
      },
      {
        title: 'Anywhere, Any-Device Browser Access',
        description: 'Pure HTML5 responsive interface. Access your entire BMS from laptops, tablets, or mobile phones without installing plugins or software.'
      },
      {
        title: 'Multi-Site Portfolio Aggregation',
        description: 'Manage 1 building or 50 across the UK under a single, unified sign-on with standardised navigation and portfolio-wide KPI rollups.'
      },
      {
        title: 'Real-Time Alarm Routing & Escalations',
        description: 'Instant notification dispatch via email and SMS for critical plant trips, high temperature excursions, or water leaks.'
      },
      {
        title: 'Granular Role-Based Access Control',
        description: 'Custom permission profiles for estate directors, maintenance contractors, security desks, and zone occupants.'
      },
      {
        title: 'Automated Backups & Managed Maintenance',
        description: 'Continuous cloud database synchronization, automated security updates, and daily snapshots ensuring complete disaster recovery.'
      },
      {
        title: 'Universal Controller Compatibility',
        description: 'Seamless integration with Trend IQ4/TONN, Tridium Niagara 4, Siemens Desigo, and open BACnet/IP building controllers.'
      },
      {
        title: 'Interactive 3D Schematics & Floorplans',
        description: 'Bespoke high-fidelity architectural floorplan graphics with real-time temperature heatmaps and mechanical plant animations.'
      }
    ],
    benefits: [
      'Eliminates capital costs and recurring IT maintenance for dedicated on-premise supervisor PCs',
      'Drastically cuts engineer response times by enabling instant remote diagnostics and setpoint changes',
      'Provides portfolio-level benchmarking and clarity across geographically dispersed estates',
      'Bank-grade TLS 1.3 encryption and secure VPN tunneling keeping building networks safe',
      'No client IT headaches: we handle server updates, OS security patches, and backups'
    ]
  },
  {
    id: 'energy-management',
    title: 'Energy Management & Reporting',
    tagline: 'Continuous monitoring, sub-metering, and automated carbon reduction',
    shortDescription: 'Comprehensive sub-metering, automated ESG/SECR reports, and proactive energy waste targeting.',
    fullIntro: 'You cannot manage what you do not measure. Our Energy Management & Reporting service integrates utility smart meters, sub-meters, and BEMS operational telemetry into actionable intelligence, pinpointing out-of-hours waste, validating retrofits, and supporting your statutory Net Zero targets.',
    image: COMPANY_INFO.images.heroIsometric,
    iconName: 'LineChart',
    features: [
      {
        title: 'Automated Multi-Utility Sub-Metering',
        description: 'Seamless integration of electricity, gas, heat, and water meters via Modbus, M-Bus, or BACnet into high-resolution half-hourly data streams.'
      },
      {
        title: 'Automated Executive & Technical Reports',
        description: 'Scheduled weekly and monthly PDF reports delivered to stakeholders, summarising consumption, peak demand, and cost trends.'
      },
      {
        title: 'Degree-Day Weather Normalisation',
        description: 'Intelligent regression analysis that correlates heating and cooling energy usage against actual meteorological weather data.'
      },
      {
        title: 'Baseload & Out-of-Hours Waste Alarms',
        description: 'Automated algorithms detect unusual night-time or weekend consumption spikes, alerting you to rogue plant running.'
      },
      {
        title: 'Carbon & Net Zero Compliance Support',
        description: 'Turnkey data gathering formatted for Streamlined Energy & Carbon Reporting (SECR), ESOS, and corporate ESG disclosures.'
      },
      {
        title: 'Benchmarking Against Industry Standards',
        description: 'Compare building intensity (kWh/m²) against CIBSE Guide F, TM54, and Real Estate Environmental Benchmark (REEB) standards.'
      },
      {
        title: 'Engineer-Led Energy Consultations',
        description: 'Regular reviews with senior BEMS controls engineers who interpret the telemetry and provide actionable control sequence improvements.'
      },
      {
        title: 'Tenant Sub-Billing & Cost Apportionment',
        description: 'Accurate, auditable calculation of individual tenant energy shares for multi-let commercial properties and shopping centres.'
      }
    ],
    benefits: [
      'Pinpoint and eliminate unnecessary out-of-hours energy consumption immediately',
      'Verifiable, auditable documentation supporting statutory SECR, ESOS, and Net Zero targets',
      'Prove the financial return on investment of mechanical equipment upgrades and BEMS tuning',
      'Transform complex plant telemetry into clear, visual charts that non-technical directors understand',
      'Typical identified energy savings of 10% to 25% through low-cost control strategy revisions [CONFIRM WITH CLIENT]'
    ]
  }
];

export const VACANCIES: JobVacancy[] = [
  {
    id: 'bems-project-engineer',
    slug: 'bems-project-engineer',
    title: 'BEMS Project Engineer',
    location: 'Liverpool (Head Office) / Regional Projects',
    type: 'Full-time, Permanent',
    salary: 'Competitive Salary + Car Allowance + Pension [CONFIRM WITH CLIENT]',
    shortDescription: 'Full lifecycle engineering ownership of turnkey Building Energy Management System projects from tender through to design, programming, and handover.',
    overview: 'Impact Control Systems is seeking an experienced, proactive BEMS Project Engineer to lead turnkey commercial projects from tender handover through to completion. You will take full technical and commercial ownership of projects, coordinating with clients, consultants, and electrical installation teams to deliver high-performance control systems.',
    responsibilities: [
      {
        category: 'Project Management & Commercial Control',
        items: [
          'Manage end-to-end project timelines, procurement schedules, and site installation milestones.',
          'Liaise directly with client project managers, M&E contractors, and consulting engineers.',
          'Review project commercial deliverables, variations, and milestone applications.'
        ]
      },
      {
        category: 'System Design & Development',
        items: [
          'Develop detailed Functional Design Specifications (FDS), description of operations, and IO schedules.',
          'Produce and review control panel electrical schematics in accordance with BS 7671.',
          'Author and simulate control strategies and software logic on Trend (SET) and/or Tridium Niagara 4.'
        ]
      },
      {
        category: 'Installation, Testing & Commissioning',
        items: [
          'Supervise electrical installation subcontractors on site, enforcing quality and safety standards.',
          'Conduct comprehensive point-to-point pre-commissioning of all field equipment and digital controllers.',
          'Perform live plant tuning, loop calibration, and seasonal performance validation.'
        ]
      },
      {
        category: 'Technical Support, Training & Handover',
        items: [
          'Configure supervisory web graphics, dynamic plant pages, and alarm distribution.',
          'Deliver professional system demonstrations and training sessions to client facility management teams.',
          'Compile comprehensive O&M documentation, as-fitted schematics, and project closure packs.'
        ]
      }
    ],
    requirements: [
      'Proven track record as a BMS / BEMS Project Engineer delivering commercial projects in the UK',
      'Certified proficiency with Trend (IQ3, IQ4, IQEco) and/or Tridium Niagara 4 (TCP certified preferred)',
      'Solid working knowledge of HVAC systems, plant room mechanics, variable speed drives, and energy metering',
      'Experience managing on-site electrical installation teams and enforcing safety protocols (SMSTS / SSSTS preferred)',
      'Full UK Driving Licence and willingness to travel to project sites across the North West and UK',
      'Right to work in the UK (Note: We are unable to sponsor overseas candidates at this time)'
    ],
    benefits: [
      'Attractive and competitive base salary negotiable based on experience [CONFIRM WITH CLIENT]',
      'Company car or generous monthly car allowance scheme',
      'Company contributory pension scheme and private healthcare cover [CONFIRM WITH CLIENT]',
      'Supplied with high-spec laptop, mobile tech toolkit, and company smartphone',
      'Ongoing manufacturer training, accreditations, and clear director-track progression'
    ]
  },
  {
    id: 'bems-commissioning-engineer',
    slug: 'bems-commissioning-engineer',
    title: 'BEMS Commissioning Engineer',
    location: 'Leeds (Yorkshire & North East)',
    type: 'Full-time, Permanent',
    salary: 'Competitive Salary + Van/Allowance + Overtime [CONFIRM WITH CLIENT]',
    shortDescription: 'Lead on-site commissioning, software loading, network integration, and final client validation across Yorkshire.',
    overview: 'We are expanding our Yorkshire operations and are looking for a dedicated BEMS Commissioning Engineer based in or near Leeds. You will work closely with our regional project operations team to commission sophisticated building controls, verify communication buses, and deliver snag-free handovers to clients.',
    responsibilities: [
      {
        category: 'On-Site Commissioning & Testing',
        items: [
          'Perform point-to-point electrical validation of all digital and analogue IO across plant rooms.',
          'Commission field bus networks including BACnet MS/TP, BACnet/IP, Modbus RTU/TCP, and M-Bus.',
          'Verify sensor calibration (temperature, humidity, CO2, pressure) and actuator stroke travel.'
        ]
      },
      {
        category: 'Software Loading & Strategy Tuning',
        items: [
          'Download and test control strategies on Trend IQ4 and Tridium JACE controllers.',
          'Tune PID control loops for optimum stability, rapid setpoint acquisition, and energy efficiency.',
          'Set up weather compensation curves, time schedules, optimum start/stop routines, and night purges.'
        ]
      },
      {
        category: 'Graphics & Head-End Integration',
        items: [
          'Configure local head-end graphics or connect controllers to cloud-hosted supervisory dashboards.',
          'Test alarm escalation sequences, dial-out routings, and historical trend logging.',
          'Coordinate with M&E commissioning engineers for integrated plant testing.'
        ]
      }
    ],
    requirements: [
      'Minimum 3 years hands-on commissioning experience in the UK BMS sector [CONFIRM WITH CLIENT]',
      'Technical competence with Trend (IQ4) or Tridium N4 systems',
      'Electrical background (City & Guilds 2365 / 2382 18th Edition or equivalent NVQ Level 3)',
      'Valid CSCS / ECS card',
      'Full UK Driving Licence',
      'Right to work in the UK (we are unable to sponsor overseas candidates)'
    ],
    benefits: [
      'Competitive salary with generous overtime and travel allowances [CONFIRM WITH CLIENT]',
      'Fully expensed modern company van with fuel card or car allowance',
      'Supplied with specialized test meters, commissioning lead kits, and rugged laptop',
      'Manufacturer refresher training and Niagara 4 certification support',
      'Friendly, collaborative regional team environment'
    ]
  },
  {
    id: 'service-ppm-engineer',
    slug: 'service-ppm-engineer',
    title: 'Service and PPM Engineer',
    location: 'Manchester & North West',
    type: 'Full-time, Permanent',
    salary: 'Competitive Salary + Fully Equipped Van + Standby [CONFIRM WITH CLIENT]',
    shortDescription: 'Deliver planned preventative maintenance, seasonal tuning, fault diagnostics, and client care across the North West.',
    overview: 'Join our dedicated in-house maintenance division providing scheduled servicing and emergency reactive support to our long-standing client portfolio across the North West. As a front-line engineer, you will be the trusted face of Impact Control Systems, keeping critical facilities running reliably.',
    responsibilities: [
      {
        category: 'Planned Preventative Maintenance (PPM)',
        items: [
          'Conduct scheduled maintenance visits per client service contracts across corporate and public facilities.',
          'Inspect BMS panels, clean filters, tighten electrical connections, and check power supply voltages.',
          'Test and recalibrate immersion, duct, and space sensors to prevent energy drift.'
        ]
      },
      {
        category: 'Fault Diagnostics & Reactive Callouts',
        items: [
          'Diagnose hardware and software faults on Trend, Tridium, Siemens, or legacy systems.',
          'Replace faulty actuators, control valves, relays, or failed controller modules promptly.',
          'Participate in a shared out-of-hours call-out rota with competitive standby allowances [CONFIRM WITH CLIENT].'
        ]
      },
      {
        category: 'Client Advisory & Reporting',
        items: [
          'Advise site facility managers on operational improvements and energy-saving opportunities.',
          'Complete electronic field service reports detailing completed checks and recommendations before leaving site.',
          'Back up controller databases to secure cloud storage after any configuration adjustment.'
        ]
      }
    ],
    requirements: [
      'Prior experience in a BMS mobile service or maintenance role in the UK',
      'Good practical knowledge of Trend, Tridium, Schneider, or Johnson Controls systems',
      'Strong diagnostic and electrical fault-finding capabilities',
      'Excellent interpersonal communication skills when dealing directly with building owners',
      'Valid UK Driving Licence and ECS card'
    ],
    benefits: [
      'Generous base salary plus call-out retainer and overtime earnings [CONFIRM WITH CLIENT]',
      'Fully equipped modern service vehicle with private use option',
      'Comprehensive tool and PPE provision including calibrated test instruments',
      'Company pension contribution and life insurance scheme [CONFIRM WITH CLIENT]',
      'Strong support from senior office technical directors whenever complex queries arise'
    ]
  },
  {
    id: 'graduate-bems-engineer',
    slug: 'graduate-bems-engineer',
    title: 'Graduate BEMS Engineer',
    location: 'London & South East',
    type: 'Full-time, Permanent',
    salary: 'Structured Graduate Package + Mentorship [CONFIRM WITH CLIENT]',
    shortDescription: 'Accelerate your career in smart building automation and sustainability with structured 2-year mentorship and certified training.',
    overview: 'A premier career gateway for an ambitious engineering graduate (Building Services, Electrical, Mechanical, Mechatronics, or Renewable Energy) wanting to specialise in smart building controls and decarbonisation. You will be mentored directly by senior directors, gaining hands-on plant room experience combined with advanced software engineering.',
    responsibilities: [
      {
        category: 'Technical Training & Development',
        items: [
          'Undertake fully funded manufacturer training courses (Trend Controls and Tridium Niagara).',
          'Learn the physical principles of commercial HVAC: boilers, chillers, AHUs, heat pumps, and district heating.',
          'Master control algorithms including PID loops, weather compensation, and variable speed flow control.'
        ]
      },
      {
        category: 'Site Engineering & Commissioning Assistance',
        items: [
          'Shadow senior project engineers on commercial sites across Greater London.',
          'Assist with electrical point-to-point testing, sensor calibration, and wiring verification.',
          'Participate in building energy audits, data logging, and sub-metering commissioning.'
        ]
      },
      {
        category: 'Documentation & Software Support',
        items: [
          'Draft CAD control schematics, IO schedules, and technical submittals under supervision.',
          'Build intuitive HTML5 user interface graphics and dashboard pages for clients.',
          'Support remote diagnostics and continuous energy analysis reporting.'
        ]
      }
    ],
    requirements: [
      'Degree (BEng / BSc / MEng) in Electrical, Mechanical, Building Services, Mechatronics, or Energy Engineering (2:1 or higher preferred)',
      'Genuine enthusiasm for green buildings, energy efficiency, and IoT automation',
      'Strong analytical capabilities and comfortable with software programming logic',
      'Comfortable working in both professional corporate offices and active commercial plant rooms',
      'Full UK Driving Licence (or actively taking lessons)',
      'Right to work in the UK (no overseas visa sponsorship available at this time)'
    ],
    benefits: [
      'Competitive graduate starting package with formal annual salary reviews [CONFIRM WITH CLIENT]',
      'Full sponsorship of industry accreditations (BCIA, Trend, Tridium)',
      'Direct one-to-one mentorship from experienced industry leaders',
      'Funded professional memberships (CIBSE / IET / BCIA)',
      'Clear, defined career progression to Project Engineer or Commissioning Engineer within 24 months'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Alex Price',
    role: 'Managing Director',
    initials: 'AP',
    bio: 'Founder and managing director driving Impact Control Systems since 1991, with over 35 years of experience delivering turnkey building energy solutions across the UK.'
  },
  {
    name: 'Adam Somerfield',
    role: 'Regional Projects Operations Director, Yorkshire',
    initials: 'AS',
    bio: 'Leading regional operations, major project delivery, and engineering excellence across Yorkshire and the North East.'
  },
  {
    name: 'Alex Makinson',
    role: 'Regional Projects Operations Director, North West',
    initials: 'AM',
    bio: 'Overseeing complex commercial installations, panel manufacturing, and site operations across the North West heartland.'
  },
  {
    name: 'Paul Cuerden',
    role: 'Service Director',
    initials: 'PC',
    bio: 'Directing the dedicated in-house maintenance division, ensuring 24/7 client response, plant longevity, and continuous building efficiency.'
  },
  {
    name: 'Tom Nolan',
    role: 'Director',
    initials: 'TN',
    bio: 'Guiding corporate strategy, key client relationships, and technological innovation in open protocol building automation.'
  },
  {
    name: 'Matty Price',
    role: 'Director',
    initials: 'MP',
    bio: 'Managing commercial operations, strategic client tenders, and sustainable growth across our national office network.'
  }
];

export const OFFICES: OfficeLocation[] = [
  {
    name: 'Head Office (Liverpool)',
    tag: 'National Headquarters & Panel Operations',
    address: '16 Tapton Way',
    postalCode: 'Liverpool L13 1DA',
    phone: '0151 254 2658',
    email: 'admin@impactcontrols.co.uk',
    isConfirmed: true
  },
  {
    name: 'Leeds Office',
    tag: 'Yorkshire & North East Operations',
    address: '3 Howley Park Business Village, Morley',
    postalCode: 'Leeds LS27 0BZ',
    phone: '0113 204 9111',
    email: 'admin@impactcontrols.co.uk',
    isConfirmed: true
  },
  {
    name: 'London Office',
    tag: 'London & South East Regional Hub',
    address: 'Greater London Hub [CONFIRM ADDRESS WITH CLIENT]',
    postalCode: 'London [CONFIRM POSTCODE]',
    phone: '0151 254 2658 (Direct to London Team) [CONFIRM NUMBER]',
    email: 'admin@impactcontrols.co.uk',
    isConfirmed: false
  }
];

export const FAQS = [
  {
    q: 'What is a BEMS and how does it differ from a standard BMS?',
    a: 'A Building Energy Management System (BEMS) is an advanced Building Management System with specialized energy metering, continuous data monitoring, and intelligent algorithms. While a basic BMS controls equipment on/off states, a BEMS continuously monitors and optimises energy consumption, indoor air quality, and environmental comfort to drastically cut operational utility bills.'
  },
  {
    q: 'Which BMS controller platforms do you support and engineer?',
    a: 'We are certified partners with industry-leading manufacturers including Trend Controls (IQ3, IQ4, IQEco), Tridium Niagara (N4/JACE), Siemens Building Technologies (Desigo), Schneider Electric (EcoStruxure), and Johnson Controls. We specialize in open BACnet, Modbus, and M-Bus protocols.'
  },
  {
    q: 'Can you upgrade our BMS without shutting down our building or plant?',
    a: 'Yes. Our specialized retrofitting process utilizes phased live changeovers, pre-engineered drop-in panels, and backwards-compatible bridges. We carry out critical cut-overs during scheduled low-demand windows or out-of-hours, ensuring tenant heating, cooling, and ventilation remain active and uninterrupted.'
  },
  {
    q: 'What does your turnkey BEMS service encompass?',
    a: 'We provide complete single-source accountability: initial plant survey and tender design, control panel manufacture, electrical wiring and containment, software engineering, point-to-point commissioning, cloud graphics hosting, staff training, and ongoing planned preventative maintenance.'
  },
  {
    q: 'How does remote graphics hosting benefit our facilities team?',
    a: 'It removes the need for expensive, vulnerable on-site supervisor PCs that run out of date. Your facilities team can securely view and control temperatures, time schedules, and plant graphics from any standard desktop, tablet, or smartphone web browser, with automated offsite backups and instant fault notifications.'
  }
];
