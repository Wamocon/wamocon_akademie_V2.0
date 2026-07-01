import type { Lang } from '../i18n/config';

const img = (name: string) => `/images/academy/${name}`;

export const assets = {
  logo: img('tild3162-6531-4739-a437-653366376633__wmatransparent.png'),
  favicon: img('tildafavicon.ico'),
  hero: img('tild3034-3664-4337-b734-326139353235__young-programmer-is-.jpg'),
  workspace: img('tild3038-3931-4334-b936-326431363630__software-developers-.jpg'),
  trainerGroup: img('tild3864-3733-4965-b336-663539653137__wma_trainer_gruppenf.jpg'),
  certificate: img('tild3137-3839-4564-b063-326265656661__wma_akkreditierung_i.png'),
  diploma: img('tild3365-3962-4030-b130-636430666463__remove-bgai_17248545.png'),
  laptopTrainer: img('tild6130-3637-4836-a562-333834303031__jn.png'),
  testerCloseup: img('tild6633-6566-4234-a339-386662643565__site-expert-coding-r.jpg'),
  academyMark: img('tild3166-3165-4466-b539-623636316262__wamocon_academy-05.svg'),
  ditele: img('tild6230-6463-4530-a631-353632323538__-3_deu-1.svg'),
  appEn: img('tild6331-6362-4837-b333-343461653664__-3_eng_1.svg'),
  badge: img('tild3666-6334-4662-a639-333936613364__ki-siegel_wamocon.png'),
  magazine: img('tild3736-3363-4433-b632-323661323435__wmc_magazin_eng_-_wm.jpg'),
};

export const pageMeta = {
  de: {
    title: 'WAMOCON Academy',
    description:
      'IT-Bildungszentrum für Softwaretesting, ISTQB®-Zertifizierung und praxisnahe Weiterbildung in Eschborn.',
  },
  en: {
    title: 'WAMOCON Academy',
    description:
      'IT training center for software testing, ISTQB® certification and practical education in Eschborn.',
  },
} satisfies Record<Lang, { title: string; description: string }>;

export const home = {
  hero: {
    title: 'WAMOCON Academy',
    de:
      'Unser IT-Bildungszentrum, geprüft und genehmigt vom Regierungspräsidium, bietet Ihnen erstklassige Ausbildungsmöglichkeiten',
    en:
      'Our IT training center, audited and approved by the regional council, offers you first-class training opportunities',
    cta: { de: 'Beratung erhalten', en: 'Receive advice' },
    stats: [
      { value: '50+', de: 'IT-Projekte', en: 'IT projects' },
      { value: '5500+', de: 'Projekttage', en: 'Project days' },
      { value: '15+', de: 'Softwaretester', en: 'Software tester' },
    ],
  },
  intro: {
    heading: {
      de: 'Mehr als 25 Jahre praktische Erfahrung unserer Trainer',
      en: 'More than 25 years of practical experience of our trainers',
    },
    paragraphs: {
      de: [
        'Die WAMOCON Academy ist Ihr Sprungbrett in die Welt des Softwaretestings! Als offizieller Partner des International Software Testing Qualifications Board (ISTQB®) bieten wir Ihnen hochwertige Bildung und Ausbildung, die auf Erfolg ausgerichtet ist. Unsere Studierenden profitieren von umfassenden Ressourcen und fundiertem Wissen, um die ISTQB®-Zertifizierung mit Leichtigkeit zu meistern und ihre Karriere in der boomenden IT-Branche voranzutreiben.',
        'Egal, ob Sie Berufseinsteiger, Quereinsteiger oder erfahrener Profi sind - bei uns finden Sie die passende Weiterbildung! Erweitern Sie Ihre Fähigkeiten im Testmanagement und heben Sie sich mit einer zusätzlichen Qualifikation gemäß dem ISTQB®-Lehrplan von der Masse ab. Starten Sie jetzt Ihre Erfolgsgeschichte mit der WAMOCON Academy!',
      ],
      en: [
        'The WAMOCON Academy is your springboard into the world of software testing! As an official partner of the International Software Testing Qualifications Board (ISTQB®), we offer you high-quality education and training that is designed for success. Our students profit from comprehensive resources and in-depth knowledge to master the ISTQB® certification with ease and advance their careers in the booming IT industry.',
        'Whether you are a career starter, lateral entrant or experienced professional - we have the right training for you! Expand your test management skills and stand out from the crowd with an additional qualification in accordance with the ISTQB® curriculum. Start your success story now with the WAMOCON Academy!',
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
        'Die WAMOCON Academy ist mehr als nur ein Ausbildungsort - sie ist Ihre strategische Plattform für die Entwicklung entscheidender Fähigkeiten und die Beschleunigung Ihrer Karriere im IT-Bereich. Ob durch maßgeschneiderte Einzelkurse oder dynamische Teamkurse, wir bieten Ihnen einzigartige Chancen für den erfolgreichen Berufseinstieg und die Erreichung neuer Karriereziele. Lassen Sie sich von uns auf Ihrem Weg zur nächsten Entwicklungsstufe begleiten und profitieren Sie von unserem umfassenden Know-how und Netzwerk.',
      en:
        'The WAMOCON Academy is more than just a training venue - it is your strategic platform for developing critical skills and accelerating your career in IT. Whether through customized individual courses or dynamic team courses, we offer you unique opportunities to successfully launch your career and achieve new career goals. Let us accompany you on your way to the next level of development and profit from our extensive know-how and network.',
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
    'Teilnahme am Seminar',
    'Vorbereitung auf das Seminar',
    '(Optional) Wiederholung der Inhalte aus dem Seminar',
    'Zertifizierung ISTQB® Certified Tester Foundation Level',
    'Neuer Job / erfolgreiches IT-Projekt',
  ],
  en: [
    'Application',
    'Participation in the seminar',
    'Preparation for the seminar',
    '(Optional) Repetition of the contents of the seminar',
    'Certification ISTQB® Certified Tester Foundation Level',
    'New job / Successful IT project',
  ],
} satisfies Record<Lang, string[]>;

export const dates = {
  de: {
    title: 'Kurs ISTQB® Certified Tester Foundation Level',
    month: 'Januar 2025',
    rows: [
      ['Donnerstag, 30. Januar 2025', 'frei'],
      ['Freitag, 31. Januar 2025', 'frei'],
      ['Samstag, 01. Februar 2025', 'frei'],
    ],
  },
  en: {
    title: 'Dates at a glance',
    month: 'October 2024',
    rows: [
      ['Thursday, October 10, 2024', 'free'],
      ['Friday, October 11, 2024', 'free'],
      ['Saturday, October 12, 2024', 'free'],
    ],
  },
} satisfies Record<Lang, { title: string; month: string; rows: string[][] }>;

export const pages = {
  courses: {
    image: assets.workspace,
    de: {
      title: 'Bildungsprogramme für Softwaretester: Seminare im Überblick',
      eyebrow: 'Kurse',
      lead:
        'Als offizieller Partner von ISTQB® bietet die Academy zertifizierte Kurse an, die ein tiefes Eintauchen in die Theorie und Praxis des Softwaretests ermöglichen. Mit diesen Kursen bereiten sich Fachleute auf die ISTQB®-Zertifizierung vor – den Goldstandard in der Branche.',
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
            'WAMOCON bietet als offizieller ISTQB® Partner exklusive Seminare im Testmanagement für Einsteiger und Quereinsteiger an mit intensiven Praxisinhalten. Davon profitieren unsere Seminarteilnehmer und unsere eigenen Mitarbeiter!',
        },
        {
          title: 'Wo soll ich zuerst anfangen?',
          text:
            'Nehmen Sie an Ihrem ersten kostenlosen Webinar teil, um zu erfahren, wie Sie Ihre Karriere als Softwaretester effektiv starten oder vorantreiben können. Es bietet die Möglichkeit, Fragen zu stellen und Antworten von Experten zu erhalten, die Ihnen dabei helfen, Ihren beruflichen Weg zu verbessern.',
          items: [
            'Einstieg ins SOFTWARETESTING – Zielgruppe und Nutzen des Webinars.',
            'Was verdient ein zertifizierter Softwaretester 2023? – Einblick in Gehaltsstrukturen und Karriereaussichten.',
            'Vor welchen typischen Herausforderungen steht ein Tester? – Diskussion der gängigen Probleme und Hürden im Testmanagement.',
            'Staatliches Förderprogramm: Bildungsgutschein – Teilnehmer können mit einem Bildungsgutschein vom Arbeitsamt kostenlos an unseren IT-Seminaren teilnehmen.',
            'Was zeichnet einen erfolgreichen Softwaretester aus? – Wichtige Fähigkeiten und Eigenschaften eines erfolgreichen Testers.',
          ],
        },
      ],
    },
    en: {
      title: 'Educational programs for software testers',
      eyebrow: 'Courses',
      lead:
        'As an official partner of ISTQB®, the Academy offers certified courses that enable deep immersion in the theory and practice of software testing. With these courses, professionals prepare for ISTQB® certification - the gold standard in the industry.',
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
            'Introduction to SOFTWARE TESTING - target group and benefits of the webinar.',
            'What does a certified software tester earn? - Insight into salary structures and career prospects.',
            'What typical challenges does a tester face? - Discussion of common problems and hurdles in test management.',
            'State funding program: Bildungsgutschein - participants can attend our IT seminars free of charge with an education voucher from the employment agency.',
            'What distinguishes a successful software tester? - Important skills and characteristics of a successful tester.',
          ],
        },
      ],
    },
  },
  about: {
    image: assets.trainerGroup,
    de: {
      title: 'Der Weg zum Erfolg beginnt mit der WAMOCON Academy',
      eyebrow: 'Über die Academy',
      lead:
        'Unser Bildungszentrum bietet mehr als nur Kurse - es ist Ihre Startrampe für eine erfolgreiche IT-Karriere. Hier verwandeln wir Lernende in IT-Profis, die bereit sind, die Herausforderungen der heutigen digitalen Welt zu meistern.',
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
            'Die IT-Welt war noch nie so komplex wie heute, besonders durch den rasanten Fortschritt der künstlichen Intelligenz. Hier kommt die WMC-Methode ins Spiel, die seit zwanzig Jahren zuverlässig und ohne Ausfälle funktioniert, weil sie zeitunabhängig ist.',
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
        'Our training center offers more than just courses - it is your launchpad for a successful IT career. Here we transform learners into IT professionals who are ready to master the challenges of today’s digital world.',
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
            'The IT world has never been as complex as it is today, especially due to the rapid progress of artificial intelligence. This is where the WMC method comes into play: it has worked reliably for twenty years because it is independent of time.',
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
    image: assets.laptopTrainer,
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
    image: assets.certificate,
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
    image: assets.testerCloseup,
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
  imprint: {
    de: {
      title: 'Impressum',
      blocks: [
        'WAMOCON Academy GmbH\nMergenthaleralee 79 - 81\n65760 Eschborn\n+49 (0) 6196 5838312\ninfo@test-it-academy.de',
        'Geschäftsführung\nDipl.- Ing. Waleri Moretz.\nSitz der Gesellschaft ist Eschborn\nHandelsregister: Eschborn HRB 123666\nUmsatzsteuer-Identifikationsnummer: DE344930486',
        'Datenschutzerklärung\nDownload Datenschutzerklärung (2021, Deutsch, PDF)',
        'Haftung für Links\nUnser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      ],
    },
    en: {
      title: 'Imprint',
      blocks: [
        'WAMOCON Academy GmbH\nMergenthaleralee 79 - 81\n65760 Eschborn\n+49 (0) 6196 5838312\ninfo@test-it-academy.de',
        'Managing Director\nDipl.- Ing. Waleri Moretz.\nThe company is based in Eschborn\nCommercial register: Eschborn HRB 123666\nSales tax identification number: DE344930486',
        'Privacy policy\nDownload privacy policy (2021, German, PDF)',
        'Liability for links\nOur website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.',
      ],
    },
  },
  privacy: {
    de: {
      title: 'Datenschutz',
      blocks: [
        'Der Datenschutz Ihrer Daten wird von uns sehr ernst genommen. Ihre personenbezogenen Daten werden vertraulich, entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
        'Server-Log-Files\nUnsere Seite speichert automatisch folgende Daten bei einem Besuch unserer Seite ab: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage.',
        'Kontaktformular\nIn dem Kontaktformular werden Name und E-Mail Adresse abgefragt. Diese Daten werden für die Kontaktierung der Kunden, Nachfragen und mögliche Terminvereinbarung verwendet.',
        'Google Analytics\nDer Internetauftritt von www.wamocon.com benutzt Google Analytics, einen Webanalysedienst der Google Inc. Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website ermöglichen.',
        'Google Maps\nDiese Webseite verwendet Google Maps von Google Inc. Durch Nutzung dieser Webseite erklären Sie sich mit der Erfassung, Bearbeitung sowie Nutzung der automatisiert erhobenen Daten einverstanden.',
        'reCAPTCHA\nZum Schutz Ihrer Anfragen per Internetformular verwenden wir den Dienst reCAPTCHA des Unternehmens Google Inc.',
        'Recht auf Auskunft, Löschung, Widerruf\nIhnen steht ein Auskunftsrecht über alle personenbezogenen Daten zu, welche über Sie gespeichert wurden.',
      ],
    },
    en: {
      title: 'Privacy policy',
      blocks: [
        'We take the privacy of your data very seriously. Your personal data will be treated confidentially and in accordance with the statutory data protection regulations and this privacy policy. Complete protection of data against access by third parties is not possible.',
        'Server log files\nOur website automatically saves the following data when you visit our website: browser type and browser version, operating system used, referrer URL, host name of the accessing computer and time of the server request.',
        'Contact form\nName and e-mail address are requested in the contact form. This data is used for contacting customers, making inquiries and possibly arranging appointments.',
        'Google Analytics\nThe website of www.wamocon.com uses Google Analytics, a web analysis service of Google Inc. Google Analytics uses cookies to help the website analyze how users use the site.',
        'Google Maps\nThis website uses Google Maps from Google Inc. By using this website, you consent to the collection, processing and use of automatically collected data.',
        'reCAPTCHA\nTo protect your requests via the Internet form, we use the reCAPTCHA service of Google Inc.',
        'Right to information, deletion, revocation\nYou have a right of access to all personal data stored about you.',
      ],
    },
  },
} as const;
