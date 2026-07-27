import type { Lang } from '../i18n/config';

const img = (name: string) => `/images/academy/${name}`;

export const assets = {
  logo: img('tild3162-6531-4739-a437-653366376633__wmatransparent.png'),
  favicon: img('tild3661-6362-4233-a538-636439366365__frame_929516.png'),
  hero: img('tild3034-3664-4337-b734-326139353235__young-programmer-is-.jpg'),
  workspace: img('tild3038-3931-4334-b936-326431363630__software-developers-.jpg'),
  consultation: img('tild6537-3034-4532-a562-323161646230__04_.png'),
  missionRing: img('tild6538-3231-4433-a531-633461653736__rectangle.png'),
  accentCurve: img('tild3730-6132-4863-b462-623032303533__group_11.png'),
  trainerGroup: img('tild3864-3733-4965-b336-663539653137__wma_trainer_gruppenf.jpg'),
  certificate: img('tild3137-3839-4564-b063-326265656661__wma_akkreditierung_i.png'),
  accreditationStrip: img('tild3438-3437-4465-b730-646339663633__frame_929519.png'),
  diploma: img('tild3365-3962-4030-b130-636430666463__remove-bgai_17248545.png'),
  laptopTrainer: img('tild6130-3637-4836-a562-333834303031__jn.png'),
  testerCloseup: img('tild6633-6566-4234-a339-386662643565__site-expert-coding-r.jpg'),
  academyMark: img('tild3166-3165-4466-b539-623636316262__wamocon_academy-05.svg'),
  ditele: img('tild6230-6463-4530-a631-353632323538__-3_deu-1.svg'),
  appEn: img('tild6331-6362-4837-b333-343461653664__-3_eng_1.svg'),
  badge: img('tild3666-6334-4662-a639-333936613364__ki-siegel_wamocon.png'),
  footerLogo: img('tild3332-6361-4037-b230-633562663766__group_319.svg'),
  magazine: img('tild3736-3363-4433-b632-323661323435__wmc_magazin_eng_-_wm.jpg'),
  aboutHero: img('tild3838-3030-4564-a133-303164373338__hh.png'),
  boosterHero: img('tild3038-6537-4261-a337-393132613162__hh.png'),
  certificationHero: img('tild3836-6332-4664-a133-666239613761__cone.svg'),
  diteleHero: img('tild3364-6530-4464-b665-656162366131__vdva.png'),
};

export const pageMeta = {
  de: {
    title: 'ISTQB®-Schulungen & Softwaretester-Ausbildung | WAMOCON Academy',
    description:
      'IT-Bildungszentrum für Softwaretesting, ISTQB®-Zertifizierung und praxisnahe Weiterbildung in Eschborn.',
  },
  en: {
    title: 'ISTQB® Training & Software Tester Courses | WAMOCON Academy',
    description:
      'IT training center for software testing, ISTQB® certification and practical education in Eschborn.',
  },
} satisfies Record<Lang, { title: string; description: string }>;

export const home = {
  hero: {
    title: 'WAMOCON Academy',
    de:
      'Unser IT-Bildungszentrum in Eschborn bietet Ihnen praxisnahe Ausbildungsmöglichkeiten im Softwaretesting',
    en:
      'Our IT training center in Eschborn offers practical software-testing education',
    cta: { de: 'Beratung erhalten', en: 'Receive advice' },
    stats: [
      { value: '50+', de: 'IT-Projekte', en: 'IT projects' },
      { value: '5500+', de: 'Projekttage', en: 'Project days' },
      { value: '15+', de: 'Softwaretester', en: 'Software tester' },
    ],
  },
  intro: {
    heading: {
      de: '40 Jahre gebündelte Praxiserfahrung unseres Teams',
      en: '40 years of combined practical experience within our team',
    },
    paragraphs: {
      de: [
        'Die WAMOCON Academy ist Ihr Sprungbrett in die Welt des Softwaretestings. Die WAMOCON Academy GmbH ist bei ISTQB® als akkreditierter Trainingsanbieter für deutschsprachige CTFL 4.0- und Agile Tester 1.0-Trainingsmaterialien gelistet. Unsere praxisnahen Kurse bereiten auf die jeweilige Zertifizierungsprüfung vor.',
        'Egal, ob Sie Berufseinsteiger, Quereinsteiger oder erfahrener Profi sind: Bei uns finden Sie die passende Weiterbildung! Erweitern Sie Ihre Fähigkeiten im Testmanagement und heben Sie sich mit einer zusätzlichen Qualifikation gemäß dem ISTQB®-Lehrplan von der Masse ab. Starten Sie jetzt Ihre Erfolgsgeschichte mit der WAMOCON Academy!',
      ],
      en: [
        'WAMOCON Academy is your springboard into software testing. WAMOCON Academy GmbH is listed by ISTQB® as an accredited training provider for German-language CTFL 4.0 and Agile Tester 1.0 training materials. Our practical courses prepare participants for the relevant certification examination.',
        'Whether you are a career starter, lateral entrant or experienced professional, we have the right training for you! Expand your test management skills and stand out from the crowd with an additional qualification in accordance with the ISTQB® curriculum. Start your success story now with the WAMOCON Academy!',
      ],
    },
    mission: {
      de: 'Die WAMOCON Academy stärkt die IT-Branche durch gezielte Expertenschulung im Testmanagement.',
      en: 'The WAMOCON Academy strengthens the IT industry through targeted expert training in test management.',
    },
  },
  success: {
    heading: {
      de: 'Starten Sie Ihre Erfolgsgeschichte mit der WAMOCON Academy',
      en: 'Start your success story with the WAMOCON Academy',
    },
    text: {
      de:
        'Die WAMOCON Academy ist mehr als nur ein Ausbildungsort. Sie ist Ihre strategische Plattform für die Entwicklung entscheidender Fähigkeiten und die Beschleunigung Ihrer Karriere im IT-Bereich. Ob durch maßgeschneiderte Einzelkurse oder dynamische Teamkurse, wir bieten Ihnen einzigartige Chancen für den erfolgreichen Berufseinstieg und die Erreichung neuer Karriereziele. Lassen Sie sich von uns auf Ihrem Weg zur nächsten Entwicklungsstufe begleiten und profitieren Sie von unserem umfassenden Know-how und Netzwerk.',
      en:
        'The WAMOCON Academy is more than just a training venue. It is your strategic platform for developing critical skills and accelerating your career in IT. Whether through customized individual courses or dynamic team courses, we offer you unique opportunities to successfully launch your career and achieve new career goals. Let us accompany you on your way to the next level of development and profit from our extensive know-how and network.',
    },
    without: {
      title: { de: 'Ohne die WAMOCON Academy', en: 'Without the WAMOCON Academy' },
      items: {
        de: [
          'Niedriges Gehalt',
          'Ablehnung der Bewerbung um eine Stelle',
          'Geringe Aufstiegsmöglichkeiten',
          'Mangelndes Fachwissen im Bereich Testmanagement',
        ],
        en: [
          'Low salary',
          'Rejection of an application for a position',
          'Few opportunities for advancement',
          'Lack of expertise in the area of test management',
        ],
      },
    },
    with: {
      title: { de: 'Mit der WAMOCON Academy', en: 'With the WAMOCON Academy' },
      items: {
        de: [
          'Überdurchschnittliches Gehalt',
          'Arbeit an Projekten, die Ihnen gefallen',
          'Hohe Entwicklungsmöglichkeiten dank ISTQB®-Zertifizierung',
          'Fachwissen von erfahrenen Mentoren',
        ],
        en: [
          'Above-average salary',
          'Work on projects that you like',
          'High development opportunities thanks to ISTQB® certification',
          'Expert knowledge from experienced mentors',
        ],
      },
    },
  },
  istqb: {
    title: 'ISTQB® Certified Tester:',
    de:
      'Entdecken Sie die Welt des Softwaretestings mit unseren umfassenden Kursen, die Ihnen nicht nur tiefgehendes theoretisches Wissen über Testverfahren, Testmodelle und Testwerkzeuge vermitteln, sondern auch praxisnahe Einblicke bieten.',
    en:
      'Discover the world of software testing with our comprehensive courses, which not only provide you with in-depth theoretical knowledge of test procedures, test models and test tools, but also offer practical insights.',
    closing: {
      de:
        'Unsere realitätsnahen Anwendungsfälle verdeutlichen, wie Sie theoretische Konzepte in erfolgreichen IT-Projekten umsetzen können. Mit unserer Unterstützung sind Sie bestens gerüstet, um die komplexen Herausforderungen moderner IT-Projekte zu meistern und Ihre Karriere als Softwaretester voranzutreiben.',
      en:
        'Our realistic use cases illustrate how you can implement theoretical concepts in successful IT projects. With our support, you are ideally equipped to master the complex challenges of modern IT projects and advance your career as a software tester.',
    },
  },
};

export const courses = [
  {
    type: { de: 'Einzelkurse', en: 'Individual courses' },
    title: { de: 'ISTQB® CTFL Softwaretester (E-Learning)', en: 'ISTQB® CTFL software tester (e-learning)' },
    duration: { de: '3 Tage', en: '3 days' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
  {
    type: { de: 'Einzelkurse', en: 'Individual courses' },
    title: { de: 'ISTQB® CTFL + Praxistraining (E-Learning)', en: 'ISTQB® CTFL + practical training (e-learning)' },
    duration: { de: '45 Tage', en: '45 days' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
  {
    type: { de: 'Einzelkurse', en: 'Individual courses' },
    title: { de: 'ISTQB® CTFL Softwaretester', en: 'ISTQB® CTFL software tester' },
    duration: { de: '3 Tage', en: '3 days' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
  {
    type: { de: 'Einzelkurse', en: 'Individual courses' },
    title: { de: 'ISTQB® CTFL + Praxistraining', en: 'ISTQB® CTFL + Practical training' },
    duration: { de: '45 Tage', en: '45 days' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses' },
    title: { de: 'Testautomatisierung', en: 'Test automation' },
    duration: { de: '5 Tage', en: '5 days' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses' },
    title: { de: 'Praktisches Projektmanagement nach SCRUM', en: 'Practical project management according to SCRUM' },
    duration: { de: '5 Tage', en: '5 days' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses' },
    title: { de: 'Individuelles Coaching (1:1)', en: 'Individual coaching (1:1)' },
    duration: { de: 'individuell', en: 'individual' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses' },
    title: { de: 'Team Coaching (1:n)', en: 'Team Coaching (1:n)' },
    duration: { de: '1 Tag', en: '1 day' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses' },
    title: { de: 'Potenzialanalyse (Power Booster)', en: 'Potential analysis (Power Booster)' },
    duration: { de: '1 Tag', en: '1 day' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course' },
  },
];

export const steps = {
  de: [
    'Bewerbung',
    'Vorbereitung auf das Seminar',
    'Teilnahme am Seminar',
    '(Optional) Wiederholung der Inhalte aus dem Seminar',
    'Zertifizierung ISTQB® Certified Tester Foundation Level',
    'Neuer Job / erfolgreiches IT-Projekt',
  ],
  en: [
    'Application',
    'Preparation for the seminar',
    'Participation in the seminar',
    '(Optional) Repetition of the contents of the seminar',
    'Certification ISTQB® Certified Tester Foundation Level',
    'New job / Successful IT project',
  ],
} satisfies Record<Lang, string[]>;

export const dates = {
  de: {
    title: 'Kurs ISTQB® Certified Tester Foundation Level',
    groups: [
      {
        month: 'In Planung',
        rows: [
          ['Neue Termine', 'In Planung'],
        ],
      },
    ],
  },
  en: {
    title: 'Dates at a glance',
    groups: [
      {
        month: 'Planned',
        rows: [
          ['New dates', 'Planned'],
        ],
      },
    ],
  },
} satisfies Record<Lang, { title: string; groups: { month: string; rows: string[][] }[] }>;

export const pages = {
  courses: {
    image: img('tild6435-3037-4261-b437-346164326231__vadsv.png'),
    de: {
      title: 'Bildungsprogramme für Softwaretester: Seminare im Überblick',
      eyebrow: 'Kurse',
      lead:
        'Die WAMOCON Academy GmbH ist im offiziellen ISTQB®-Anbieterverzeichnis für deutschsprachige CTFL 4.0- und Agile Tester 1.0-Trainingsmaterialien gelistet. Die Kurse verbinden Theorie und Praxis des Softwaretestens.',
      sections: [
        {
          title: 'Vorteile unserer Kurse',
          text:
            'Umfassende Ausbildung, Karriereförderung und praxisorientierte Inhalte verbinden Grundlagen und fortgeschrittene Techniken des Softwaretestens mit praktischen Einblicken und Übungen.',
          items: ['Umfassende Ausbildung', 'Karriereförderung', 'Praxisorientierte Inhalte'],
        },
        {
          title: 'Mit Bildung in die Zukunft: Werden Sie ISTQB® Softwaretester bei WAMOCON Academy',
          text:
            'WAMOCON bietet Seminare im Testmanagement für Einsteiger und Quereinsteiger mit intensiven Praxisinhalten und Vorbereitung auf die jeweilige Zertifizierungsprüfung.',
        },
        {
          title: 'Wo soll ich zuerst anfangen?',
          text:
            'Nehmen Sie an Ihrem ersten kostenlosen Webinar teil, um zu erfahren, wie Sie Ihre Karriere als Softwaretester effektiv starten oder vorantreiben können. Es bietet die Möglichkeit, Fragen zu stellen und Antworten von Experten zu erhalten, die Ihnen dabei helfen, Ihren beruflichen Weg zu verbessern.',
          items: [
            'Einstieg ins SOFTWARETESTING: Zielgruppe und Nutzen des Webinars.',
            'Was verdient ein zertifizierter Softwaretester 2023? Einblick in Gehaltsstrukturen und Karriereaussichten.',
            'Vor welchen typischen Herausforderungen steht ein Tester? Diskussion der gängigen Probleme und Hürden im Testmanagement.',
            'Bildungsgutschein: Eine Förderung kann im Einzelfall möglich sein. Die zuständige Agentur für Arbeit oder das Jobcenter entscheidet über Voraussetzungen, Umfang und Bewilligung.',
            'Was zeichnet einen erfolgreichen Softwaretester aus? Wichtige Fähigkeiten und Eigenschaften eines erfolgreichen Testers.',
          ],
        },
      ],
    },
    en: {
      title: 'Educational programs for software testers',
      eyebrow: 'Courses',
      lead:
        'WAMOCON Academy GmbH is listed in the official ISTQB® provider directory for German-language CTFL 4.0 and Agile Tester 1.0 training materials. The courses combine software-testing theory and practice.',
      sections: [
        {
          title: 'Advantages of our courses',
          text:
            'Comprehensive training, career development and practice-oriented content combine the basics and advanced techniques of software testing with practical insights and exercises.',
          items: ['Comprehensive training', 'Career development', 'Practice-oriented content'],
        },
        {
          title: 'With education into the future: Become an ISTQB® software tester at WAMOCON Academy',
          text:
            'WAMOCON, as an official ISTQB® partner, offers exclusive test management seminars for beginners and career changers with intensive practical content. Our seminar participants and our own employees benefit from this!',
        },
        {
          title: 'Where should I start first?',
          text:
            'Attend your first free webinar to learn how to effectively start or advance your career as a software tester. It gives you the opportunity to ask questions and get answers from experts who will help you improve your career path.',
          items: [
            'Introduction to SOFTWARE TESTING: target group and benefits of the webinar.',
            'What does a certified software tester earn? Insight into salary structures and career prospects.',
            'What typical challenges does a tester face? Discussion of common problems and hurdles in test management.',
            'Bildungsgutschein: funding may be possible in individual cases. The responsible employment agency or job centre decides eligibility, scope and approval.',
            'What distinguishes a successful software tester? Important skills and characteristics of a successful tester.',
          ],
        },
      ],
    },
  },
  about: {
    image: assets.aboutHero,
    de: {
      title: 'Der Weg zum Erfolg beginnt mit der WAMOCON Academy',
      eyebrow: 'Über die Academy',
      lead:
        'Unser Bildungszentrum bietet mehr als nur Kurse. Es ist Ihre Startrampe für eine erfolgreiche IT-Karriere. Hier verwandeln wir Lernende in IT-Profis, die bereit sind, die Herausforderungen der heutigen digitalen Welt zu meistern.',
      sections: [
        {
          title: 'Unterstützung durch erfahrene Dozenten',
          text:
            'Der theoretische Unterricht wird in verständlicher Form vermittelt, und die angebotenen Übungen und Beispiele aus der Praxis von Branchenexperten helfen dabei, ein tiefes Verständnis für die tatsächlichen Aufgaben eines Testers schnell und einfach zu erlangen.',
        },
        {
          title: 'Die wichtigsten Vorteile, die die Academy bietet',
          text:
            'Dank dieser Vorteile bietet die WAMOCON Academy eine umfassende und qualitativ hochwertige Ausbildung für Fachleute, damit sie in der Lage sind, persönliche und berufliche Ziele in der sich schnell verändernden Technologiewelt zu erreichen.',
          items: [
            'Ausbildung nach internationalen Qualitätsstandards',
            'Breites Spektrum an Ausbildungsprogrammen',
            'Moderne Bildungstechnologien und Bildungsmethoden',
            'Individueller Lernansatz',
            'Praxisorientierung',
            'Unterstützung und Mentoring',
          ],
        },
        {
          title: 'WMC-Methode +',
          text:
            'Die IT-Welt war noch nie so komplex wie heute, besonders durch den rasanten Fortschritt der künstlichen Intelligenz. Hier kommt die WMC-Methode ins Spiel, die auf 40 Jahren gebündelter Praxiserfahrung unseres Teams im Test- und Qualitätsmanagement aufbaut.',
          items: [
            'Priorisierung',
            'Risikobewertung',
            'Zeitmanagement',
            'Strategische Ausrichtung',
            'Stakeholder-Management',
            'Ressourcenallokation',
            'Reaktionsfähigkeit',
            'Risikominderung',
            'Kontinuierliches Monitoring',
          ],
        },
      ],
    },
    en: {
      title: 'The path to success starts with the WAMOCON Academy',
      eyebrow: 'About the Academy',
      lead:
        'Our training center offers more than just courses. It is your launchpad for a successful IT career. Here we transform learners into IT professionals who are ready to master the challenges of today’s digital world.',
      sections: [
        {
          title: 'Support from experienced lecturers',
          text:
            'The theoretical lessons are taught in an understandable form, and the exercises and practical examples offered by industry experts help participants quickly and easily gain a deep understanding of the actual tasks of a tester.',
        },
        {
          title: 'The key benefits offered by the Academy',
          text:
            'Thanks to these advantages, the WAMOCON Academy offers comprehensive, high-quality training for professionals so that they can achieve personal and professional goals in the rapidly changing world of technology.',
          items: [
            'Training according to international quality standards',
            'Wide range of training programs',
            'Modern educational technologies and methods',
            'Individual learning approach',
            'Practical orientation',
            'Support and mentoring',
          ],
        },
        {
          title: 'WMC method +',
          text:
            'The IT world has never been as complex as it is today, especially due to the rapid progress of artificial intelligence. This is where the WMC method comes into play: it builds on 40 years of combined practical experience within our team in testing and quality management.',
          items: [
            'Prioritization',
            'Risk assessment',
            'Time management',
            'Strategic direction',
            'Stakeholder management',
            'Resource allocation',
            'Responsiveness',
            'Risk mitigation',
            'Continuous monitoring',
          ],
        },
      ],
    },
  },
  booster: {
    image: assets.boosterHero,
    de: {
      title: '360° Booster System für Deine IT-Karriere',
      eyebrow: '360° Booster System',
      lead:
        'WAMOCON hat einen umfassenden Ansatz entwickelt, der alle Aspekte der Projektarbeit im IT-Testing abdeckt.',
      sections: [
        {
          title: '360°-Karriere-Booster-System für IT',
          text:
            'Dieses 360-Grad-System zur erfolgreichen Karriereentwicklung umfasst eine Reihe von Schritten und ermöglicht es, Herausforderungen zu meistern und den Weg zum Erfolg auf die effektivste Weise zu bewältigen.',
        },
        {
          title: 'Das WAMOCON-Team nutzt dieses System',
          text:
            'Das WAMOCON-Team nutzt dieses System, um die Qualität der Arbeit jedes einzelnen Mitarbeiters zu verbessern, erfolgreiche Tests durchzuführen und IT-Projekte erfolgreich abzuschließen.',
        },
      ],
    },
    en: {
      title: '360° Booster system for your IT career',
      eyebrow: '360° Booster System',
      lead:
        'WAMOCON has developed a comprehensive approach that covers all aspects of project work in IT testing.',
      sections: [
        {
          title: '360° career booster system for IT',
          text:
            'This 360-degree system for successful career development includes a series of steps and makes it possible to master challenges and manage the path to success in the most effective way.',
        },
        {
          title: 'The WAMOCON team uses this system',
          text:
            'The WAMOCON team uses this system to improve the quality of work of each employee, perform successful tests and complete IT projects successfully.',
        },
      ],
    },
  },
  reviews: {
    image: assets.trainerGroup,
    de: {
      title: 'Das sagen erfolgreiche Absolventen',
      eyebrow: 'Bewertungen',
      lead: 'Wir begleiten dich Schritt für Schritt bei deinem Einstieg in der IT-Branche.',
      sections: [],
    },
    en: {
      title: 'What successful graduates say',
      eyebrow: 'Reviews',
      lead: 'We guide you step by step as you enter the IT industry.',
      sections: [],
    },
  },
  certification: {
    image: assets.certificationHero,
    de: {
      title: 'ISTQB® Zertifizierung',
      eyebrow: 'ISTQB® Certified Tester',
      lead:
        'Werden Sie zum Qualitätsexperten: ISTQB® Certified Tester Foundation Level (CTFL). Qualitätssicherung ist der Schlüssel zum Erfolg jedes Softwareprojekts.',
      sections: [
        {
          title: 'Was Sie im ISTQB® CTFL Training lernen',
          text:
            'Unser umfassendes Training bereitet Sie optimal auf die offizielle ISTQB®-Zertifizierung vor und vermittelt Ihnen praxisnahe Kenntnisse, die sofort in der täglichen Arbeit einsetzbar sind.',
          items: [
            'Grundlagen des Softwaretestens',
            'Testen im Softwareentwicklungszyklus',
            'Statisches Testen und Reviews',
            'Testdesigntechniken',
            'Testmanagement',
            'Testwerkzeuge',
          ],
        },
        {
          title: 'Warum ist die ISTQB® Zertifizierung wertvoll?',
          text:
            'Die ISTQB®-Zertifizierung ist weltweit anerkannt und gilt als Qualitätssiegel für Testexperten. Sie steigert Ihre Karrierechancen und bietet sofortigen Nutzen für Unternehmen.',
          items: ['Globale Anerkennung', 'Steigern Sie Ihre Karrierechancen', 'Sofortiger Nutzen für Unternehmen'],
        },
      ],
    },
    en: {
      title: 'ISTQB® Certification',
      eyebrow: 'ISTQB® Certified Tester',
      lead:
        'Become a quality expert: ISTQB® Certified Tester Foundation Level (CTFL). Quality assurance is the key to the success of every software project.',
      sections: [
        {
          title: 'What you learn in ISTQB® CTFL training',
          text:
            'Our comprehensive training prepares you optimally for the official ISTQB® certification and provides practical knowledge that can be used immediately in everyday work.',
          items: [
            'Software testing basics',
            'Testing in the software development lifecycle',
            'Static testing and reviews',
            'Test design techniques',
            'Test management',
            'Test tools',
          ],
        },
        {
          title: 'Why is ISTQB® certification valuable?',
          text:
            'ISTQB® certification is recognized worldwide and is regarded as a quality seal for testing experts. It increases your career opportunities and provides immediate benefits for companies.',
          items: ['Global recognition', 'Increase your career opportunities', 'Immediate benefit for companies'],
        },
      ],
    },
  },
  ditele: {
    image: assets.diteleHero,
    de: {
      title: 'DiTeLe App',
      eyebrow: 'Digitale Lern- und Testumgebung',
      lead:
        'DiTeLe unterstützt praxisnahes Lernen, Übungen und reale Anwendungsszenarien für Softwaretester.',
      sections: [
        {
          title: 'Praxis in realitätsnahen Anwendungsfällen',
          text:
            'Unsere realitätsnahen Anwendungsfälle verdeutlichen, wie Sie theoretische Konzepte in erfolgreichen IT-Projekten umsetzen können.',
        },
        {
          title: 'Optimal vorbereitet',
          text:
            'Mit unserer Unterstützung sind Sie bestens gerüstet, um die komplexen Herausforderungen moderner IT-Projekte zu meistern und Ihre Karriere als Softwaretester voranzutreiben.',
        },
      ],
    },
    en: {
      title: 'DiTeLe App',
      eyebrow: 'Digital learning and testing environment',
      lead:
        'DiTeLe supports practical learning, exercises and realistic application scenarios for software testers.',
      sections: [
        {
          title: 'Practice in realistic use cases',
          text:
            'Our realistic use cases illustrate how you can implement theoretical concepts in successful IT projects.',
        },
        {
          title: 'Optimally prepared',
          text:
            'With our support, you are ideally equipped to master the complex challenges of modern IT projects and advance your career as a software tester.',
        },
      ],
    },
  },
} as const;

export const testimonials = [
  'Natalie',
  'Artur',
  'Alexander',
  'Olga',
  'Jonathan',
].map((name) => ({
  name,
  role: { de: 'Teilnehmerin WAMOCON Academy', en: 'Participant WAMOCON Academy' },
  text: {
    de:
      'Die WAMOCON Academy begleitet Teilnehmer Schritt für Schritt beim Einstieg in die IT-Branche.',
    en:
      'The WAMOCON Academy guides participants step by step as they enter the IT industry.',
  },
}));

export const legal = {
  accessibility: {
    de: {
      title: 'Erklärung zur Barrierefreiheit',
      blocks: [
        'Stand: 21. Juli 2026\nDie WAMOCON Academy GmbH ist bemüht, ihre Website im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG) barrierefrei zugänglich zu machen.',
        'Stand der Vereinbarkeit mit den Anforderungen\nAls Maßstab wenden wir die Norm EN 301 549 an, die auf die Web Content Accessibility Guidelines (WCAG) 2.1 Konformitätsstufe AA verweist. Diese Website ist mit den genannten Anforderungen teilweise vereinbar. Die nachstehend aufgeführten Punkte sind uns bekannt und werden derzeit überarbeitet.',
        'Nicht barrierefreie Inhalte\nFür einzelne Videoinhalte liegen noch keine vollständigen Untertitel oder Transkripte vor (WCAG 1.2.2, 1.2.3).\nEingebettete Inhalte von Drittanbietern, insbesondere YouTube und Google Maps, unterliegen nicht unserer Kontrolle. Für die Barrierefreiheit dieser Inhalte ist der jeweilige Anbieter verantwortlich.\nEinzelne dekorative Animationen und Bewegungseffekte werden derzeit überprüft. Nutzerinnen und Nutzer, die in ihrem Betriebssystem reduzierte Bewegung aktiviert haben, erhalten bereits eine reduzierte Darstellung (WCAG 2.3.3).',
        'Alternativen und Kontakt\nSind einzelne Inhalte für Sie nicht zugänglich, wenden Sie sich bitte an uns. Wir stellen Ihnen die benötigten Informationen auf einem anderen Weg zur Verfügung, zum Beispiel telefonisch oder per E-Mail.',
        'Feedback und Kontaktangaben\nSie können uns Barrieren auf dieser Website jederzeit melden und barrierefreie Alternativen anfordern:\nWAMOCON Academy GmbH, Mergenthalerallee 79–81, 65760 Eschborn\nTelefon: +49 (0) 6196 5838312\nE-Mail: info@test-it-academy.com\nWir bestätigen den Eingang Ihrer Rückmeldung zeitnah und antworten inhaltlich innerhalb von sechs Wochen.',
        'Durchsetzungsverfahren\nWenn Sie mit unserer Antwort nicht zufrieden sind oder keine Antwort erhalten, können Sie sich an die Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen (MLBF) wenden.\nMarktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen – Anstalt öffentlichen Rechts (MLBF AöR)\nCarl-Miller-Straße 6, 39112 Magdeburg\nTelefon: +49 391 289 230 23\nE-Mail: kontakt@mlbf-barrierefrei.de\nWebsite: mlbf-barrierefrei.de',
        'Erstellung dieser Erklärung\nDiese Erklärung wurde am 21. Juli 2026 erstellt. Grundlage war eine interne Prüfung der Website anhand der WCAG 2.1 Stufe AA. Wir überprüfen die Erklärung regelmäßig und aktualisieren sie, sobald sich Funktionen oder der Stand der Barrierefreiheit ändern.',
      ],
    },
    en: {
      title: 'Accessibility Statement',
      blocks: [
        'Last updated: 21 July 2026\nWAMOCON Academy GmbH is committed to making its website accessible in accordance with the German Accessibility Strengthening Act (Barrierefreiheitsstärkungsgesetz, BFSG).',
        'Compliance status\nWe apply the EN 301 549 standard, which refers to the Web Content Accessibility Guidelines (WCAG) 2.1 at conformance level AA. This website is partially compliant with those requirements. The items listed below are known to us and are currently being addressed.',
        'Non-accessible content\nSome video content does not yet have complete captions or transcripts (WCAG 1.2.2, 1.2.3).\nEmbedded third-party content, in particular YouTube and Google Maps, is outside our control. The respective provider is responsible for the accessibility of that content.\nSome decorative animations and motion effects are currently under review. Visitors who have enabled reduced motion in their operating system already receive a reduced presentation (WCAG 2.3.3).',
        'Alternatives and contact\nIf any content is not accessible to you, please contact us. We will provide the information you need by another route, for example by telephone or e-mail.',
        'Feedback and contact details\nYou can report accessibility barriers on this website and request accessible alternatives at any time:\nWAMOCON Academy GmbH, Mergenthalerallee 79–81, 65760 Eschborn, Germany\nTelephone: +49 (0) 6196 5838312\nE-mail: info@test-it-academy.com\nWe acknowledge receipt of your feedback promptly and provide a substantive reply within six weeks.',
        'Enforcement procedure\nIf you are not satisfied with our response, or receive no response, you can contact the German market surveillance authority for the accessibility of products and services (MLBF).\nMarktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen – Anstalt öffentlichen Rechts (MLBF AöR)\nCarl-Miller-Straße 6, 39112 Magdeburg, Germany\nTelephone: +49 391 289 230 23\nE-mail: kontakt@mlbf-barrierefrei.de\nWebsite: mlbf-barrierefrei.de',
        'Preparation of this statement\nThis statement was prepared on 21 July 2026 following an internal review of the website against WCAG 2.1 level AA. We review it regularly and update it whenever functions or the state of accessibility change.',
      ],
    },
  },
  imprint: {
    de: {
      title: 'Impressum',
      blocks: [
        'Angaben gemäß § 5 DDG\nWAMOCON Academy GmbH\nMergenthalerallee 79–81\n65760 Eschborn\nDeutschland',
        'Kontakt\nTelefon: +49 (0) 6196 5838312\nE-Mail: info@test-it-academy.com',
        'Vertretung und Register\nGeschäftsführer: Dipl.-Ing. Waleri Moretz\nSitz der Gesellschaft: Eschborn\nRegistergericht: Amtsgericht Frankfurt am Main\nHandelsregisternummer: HRB 123666\nUmsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE344930486',
        'Verbraucherstreitbeilegung\nDie WAMOCON Academy GmbH ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        'Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV\nDipl.-Ing. Waleri Moretz\nMergenthalerallee 79–81\n65760 Eschborn',
        'Haftung für Links\nUnser Angebot enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist der jeweilige Anbieter verantwortlich. Bei Bekanntwerden konkreter Rechtsverletzungen entfernen wir betroffene Links unverzüglich.',
      ],
    },
    en: {
      title: 'Imprint',
      blocks: [
        'Information under Section 5 DDG\nWAMOCON Academy GmbH\nMergenthalerallee 79–81\n65760 Eschborn\nGermany',
        'Contact\nTelephone: +49 (0) 6196 5838312\nE-mail: info@test-it-academy.com',
        'Representation and register\nManaging Director: Dipl.-Ing. Waleri Moretz\nRegistered office: Eschborn\nRegister court: Local Court Frankfurt am Main\nCommercial register number: HRB 123666\nVAT identification number under Section 27a UStG: DE344930486',
        'Consumer dispute resolution\nWAMOCON Academy GmbH is neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
        'Editorial responsibility pursuant to section 18(2) MStV\nDipl.-Ing. Waleri Moretz\nMergenthalerallee 79–81\n65760 Eschborn',
        'Liability for links\nOur website contains links to external third-party websites over whose content we have no influence. The respective provider is responsible for linked content. We remove affected links promptly when we become aware of a specific infringement.',
      ],
    },
  },
  privacy: {
    de: {
      title: 'Datenschutz',
      blocks: [
        'Stand: 21. Juli 2026\nDiese Datenschutzerklärung beschreibt die Verarbeitung personenbezogener Daten auf test-it-academy.com.',
        '1. Verantwortlicher\nWAMOCON Academy GmbH\nMergenthalerallee 79–81\n65760 Eschborn\nTelefon: +49 (0) 6196 5838312\nE-Mail und Kontakt für Datenschutzanfragen: info@test-it-academy.com\nGeschäftsführer: Dipl.-Ing. Waleri Moretz\nEin Datenschutzbeauftragter ist nicht bestellt.',
        '2. Hosting und Server-Protokolle\nDie Astro-Website wird über Vercel Inc. bereitgestellt. Beim Aufruf werden technisch erforderliche Verbindungsdaten verarbeitet, insbesondere IP-Adresse, Zeitpunkt, angeforderte URL, Referrer, Browser und Betriebssystem. Zweck ist die sichere und stabile Bereitstellung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Protokolle werden nur so lange gespeichert, wie dies für Betrieb, Sicherheit und Fehleranalyse erforderlich ist. Informationen des Anbieters: vercel.com/legal/privacy-notice.',
        '3. Kontakt- und Kursanfragen\nDie Formulare dienen ausschließlich unverbindlichen Anfragen und lösen keinen kostenpflichtigen Vertrag aus. Verarbeitet werden Name, E-Mail-Adresse, optional Telefonnummer sowie die freiwillig eingegebenen Inhalte. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen und Art. 6 Abs. 1 lit. f DSGVO für sonstige Anfragen. Die Übermittlung und interne E-Mail-Zustellung erfolgen über Vercel und Microsoft 365/Microsoft Graph. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten oder ein anschließendes Vertragsverhältnis entgegenstehen.',
        '4. Schutz der Formulare mit Cloudflare Turnstile\nBei aktiver Nutzung eines Formulars wird Cloudflare Turnstile von Cloudflare, Inc. geladen. Turnstile verarbeitet technische Verbindungs-, Browser- und Interaktionsdaten, um automatisierte Eingaben und Missbrauch zu erkennen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; technisch erforderliche Speicherzugriffe dienen der ausdrücklich angeforderten, geschützten Formularfunktion. Turnstile wird serverseitig verifiziert. Informationen: cloudflare.com/privacypolicy.',
        '5. Einwilligungsverwaltung und externe Medien\nDie Website speichert Ihre Auswahl zu externen Medien lokal in Ihrem Browser unter „wamocon-academy-consent-v1“. Dies ist für die Verwaltung Ihrer Auswahl erforderlich. YouTube-Videos und Google Maps werden erst geladen, wenn Sie „Externe Medien“ erlauben. Dann können insbesondere IP-Adresse, Browserdaten, aufgerufene Seite und gegebenenfalls Kontodaten an Google Ireland Limited beziehungsweise verbundene Unternehmen übermittelt werden. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Sie können die Einwilligung jederzeit über „Datenschutzeinstellungen“ im Footer widerrufen. Informationen: policies.google.com/privacy.',
        '6. Bewertungen und Teilnehmerstimmen\nAuf unserer Bewertungsseite können Sie freiwillig eine Bewertung abgeben. Verarbeitet werden Ihr Name, Ihre Bewertung und die freiwillig eingegebenen Inhalte. Die Veröffentlichung Ihrer Bewertung zusammen mit Ihrem Namen als Teilnehmerstimme auf den Websites und in den Social-Media-Kanälen der WAMOCON Academy GmbH erfolgt ausschließlich auf Grundlage Ihrer gesonderten, freiwilligen Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Ohne diese Einwilligung wird Ihre Bewertung nicht veröffentlicht; die Abgabe einer Bewertung ist keine Voraussetzung für die Teilnahme an unseren Programmen. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft unter info@test-it-academy.com widerrufen. Wir entfernen die Veröffentlichung dann unverzüglich von unseren Websites; bereits erfolgte Übernahmen durch Dritte oder Social-Media-Plattformen können wir nicht in jedem Fall rückgängig machen. Bewertungen werden gelöscht, sobald die Einwilligung widerrufen wird oder der Zweck der Veröffentlichung entfällt.',
        '7. Keine Reichweitenmessung und keine Werbung\nAuf dieser Astro-Website werden Yandex Metrica einschließlich Webvisor, Google Analytics, Google AdSense und reCAPTCHA nicht eingesetzt. Es findet keine Reichweitenmessung oder personalisierte Werbung durch diese Dienste statt. Google Fonts werden nicht von Google-Servern geladen.',
        '8. Empfänger und Drittlandübermittlungen\nEmpfänger können Vercel, Microsoft und bei Formularnutzung Cloudflare sein. Google/YouTube erhält erst nach Ihrer Einwilligung Daten. Soweit Anbieter Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten, stützen sie die Übermittlung nach eigener Angabe auf einen Angemessenheitsbeschluss, insbesondere das EU-US Data Privacy Framework, oder geeignete Garantien wie EU-Standardvertragsklauseln. Soweit ein Anbieter als Auftragsverarbeiter tätig wird, ist eine Vereinbarung nach Art. 28 DSGVO erforderlich.',
        '9. Ihre Rechte\nSie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Anfragen richten Sie an info@test-it-academy.com. Sie können sich außerdem bei einer Datenschutzaufsichtsbehörde beschweren; zuständig ist insbesondere der Hessische Beauftragte für Datenschutz und Informationsfreiheit, datenschutz.hessen.de.',
        '10. Sicherheit und Aktualisierung\nWir schützen die Website durch TLS-Verschlüsselung, Sicherheits-Header, Zugriffsbeschränkungen und weitere angemessene technische und organisatorische Maßnahmen. Diese Erklärung wird aktualisiert, wenn sich Funktionen, Dienstleister oder die Rechtslage ändern.',
      ],
    },
    en: {
      title: 'Privacy policy',
      blocks: [
        'Last updated: 21 July 2026\nThis privacy policy describes personal-data processing on test-it-academy.com.',
        '1. Controller\nWAMOCON Academy GmbH\nMergenthalerallee 79–81\n65760 Eschborn, Germany\nTelephone: +49 (0) 6196 5838312\nE-mail and privacy contact: info@test-it-academy.com\nManaging Director: Dipl.-Ing. Waleri Moretz\nNo data protection officer has been appointed.',
        '2. Hosting and server logs\nThis Astro website is delivered through Vercel Inc. When it is accessed, technically necessary connection data is processed, including the IP address, time, requested URL, referrer, browser and operating system. The purpose is secure and stable delivery. The legal basis is Article 6(1)(f) GDPR. Logs are retained only for as long as required for operation, security and troubleshooting. Provider information: vercel.com/legal/privacy-notice.',
        '3. Contact and course inquiries\nForms are solely for non-binding inquiries and do not create a paid contract. We process your name, e-mail address, optional telephone number and content you voluntarily enter. The legal bases are Article 6(1)(b) GDPR for pre-contractual steps and Article 6(1)(f) GDPR for other inquiries. Transmission and internal e-mail delivery use Vercel and Microsoft 365/Microsoft Graph. Data is deleted when the inquiry has been completed unless statutory retention duties or a subsequent contractual relationship require longer retention.',
        '4. Form protection with Cloudflare Turnstile\nWhen you actively use a form, Cloudflare Turnstile from Cloudflare, Inc. is loaded. Turnstile processes technical connection, browser and interaction data to identify automated input and misuse. The legal basis is Article 6(1)(f) GDPR; technically necessary storage access supports the protected form function you requested. Tokens are verified server-side. Information: cloudflare.com/privacypolicy.',
        '5. Consent management and external media\nYour external-media choice is stored locally in your browser under “wamocon-academy-consent-v1”. This is necessary to manage your choice. YouTube videos and Google Maps load only after you allow external media. Google Ireland Limited and affiliated companies may then receive your IP address, browser data, visited page and, where applicable, account data. The legal bases are Article 6(1)(a) GDPR and Section 25(1) TDDDG. You can withdraw consent at any time through “Privacy settings” in the footer. Information: policies.google.com/privacy.',
        '6. Reviews and participant testimonials\nYou can submit a review voluntarily on our reviews page. We process your name, your rating and the content you enter voluntarily. Publishing your review together with your name as a participant testimonial on the websites and social-media channels of WAMOCON Academy GmbH takes place solely on the basis of your separate, voluntary consent under Article 6(1)(a) GDPR. Without that consent your review is not published; submitting a review is not a condition for taking part in our programmes. You may withdraw your consent at any time for the future at info@test-it-academy.com. We will then remove the publication from our websites without delay; we cannot always reverse copies already made by third parties or social-media platforms. Reviews are deleted once consent is withdrawn or the purpose of publication no longer applies.',
        '7. No audience measurement or advertising\nThis Astro website does not use Yandex Metrica or Webvisor, Google Analytics, Google AdSense or reCAPTCHA. Those services do not perform audience measurement or personalised advertising here. Google Fonts are not loaded from Google servers.',
        '8. Recipients and international transfers\nRecipients may include Vercel, Microsoft and, when a form is used, Cloudflare. Google/YouTube receives data only after consent. Where providers process data outside the European Economic Area, they state that they rely on an adequacy decision, especially the EU-US Data Privacy Framework, or safeguards such as EU Standard Contractual Clauses. An Article 28 GDPR agreement is required where a provider acts as a processor.',
        '9. Your rights\nSubject to the GDPR, you have rights of access, rectification, erasure, restriction, data portability and objection. You may withdraw consent at any time for the future. Contact info@test-it-academy.com. You may also complain to a supervisory authority; in particular, the Hessian Commissioner for Data Protection and Freedom of Information, datenschutz.hessen.de.',
        '10. Security and updates\nWe protect the website using TLS encryption, security headers, access controls and other appropriate technical and organisational measures. We update this policy when functions, providers or legal requirements change.',
      ],
    },
  },
} as const;
