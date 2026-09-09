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
  kk: {
    title: 'ISTQB® курстары және тестілеуші мамандығы | WAMOCON Academy',
    description:
      'Эшборндағы IT білім беру орталығы: бағдарламалық қамтамасыз етуді тестілеу, ISTQB® сертификаттауы және тәжірибеге негізделген біліктілік арттыру.',
  },
} satisfies Record<Lang, { title: string; description: string }>;

export const home = {
  hero: {
    title: 'WAMOCON Academy',
    de:
      'Unser IT-Bildungszentrum in Eschborn bietet dir praxisnahe Ausbildungsmöglichkeiten im Softwaretesting',
    en:
      'Our IT training center in Eschborn offers practical software-testing education',
    kk:
      'Эшборндағы IT білім беру орталығымыз бағдарламалық қамтамасыз етуді тестілеу саласында тәжірибеге негізделген оқу мүмкіндіктерін ұсынады',
    cta: { de: 'Beratung erhalten', en: 'Receive advice', kk: 'Кеңес алу' },
    stats: [
      { value: '50+', de: 'IT-Projekte', en: 'IT projects', kk: 'IT жобасы' },
      { value: '5500+', de: 'Projekttage', en: 'Project days', kk: 'жоба күні' },
      { value: '15+', de: 'Softwaretester', en: 'Software tester', kk: 'тестілеуші маман' },
    ],
  },
  intro: {
    heading: {
      de: 'über 50 Jahre gebündelte Praxiserfahrung unseres Teams',
      en: 'over 50 years of combined practical experience within our team',
      kk: 'командамыздың 50 жылдан асатын жинақталған тәжірибесі',
    },
    paragraphs: {
      de: [
        'Die WAMOCON Academy ist dein Sprungbrett in die Welt des Softwaretestings. Die WAMOCON Academy GmbH ist bei ISTQB® als akkreditierter Trainingsanbieter für deutschsprachige CTFL 4.0- und Agile Tester 1.0-Trainingsmaterialien gelistet. Unsere praxisnahen Kurse bereiten auf die jeweilige Zertifizierungsprüfung vor.',
        'Egal, ob du Berufseinsteiger, Quereinsteiger oder erfahrener Profi bist: Bei uns findest du die passende Weiterbildung! Erweitere deine Fähigkeiten im Testmanagement und hebe dich mit einer zusätzlichen Qualifikation gemäß dem ISTQB®-Lehrplan von der Masse ab. Starte jetzt deine Erfolgsgeschichte mit der WAMOCON Academy!',
      ],
      en: [
        'WAMOCON Academy is your springboard into software testing. WAMOCON Academy GmbH is listed by ISTQB® as an accredited training provider for German-language CTFL 4.0 and Agile Tester 1.0 training materials. Our practical courses prepare participants for the relevant certification examination.',
        'Whether you are a career starter, lateral entrant or experienced professional, we have the right training for you! Expand your test management skills and stand out from the crowd with an additional qualification in accordance with the ISTQB® curriculum. Start your success story now with the WAMOCON Academy!',
      ],
      kk: [
        'WAMOCON Academy сізге бағдарламалық қамтамасыз етуді тестілеу әлеміне сенімді қадам жасауға көмектеседі. WAMOCON Academy GmbH компаниясы ISTQB тізімінде неміс тіліндегі CTFL 4.0 және Agile Tester 1.0 оқу материалдары бойынша аккредиттелген оқыту провайдері ретінде тіркелген. Тәжірибеге негізделген курстарымыз тиісті сертификаттау емтиханына дайындайды.',
        'Мансабын жаңа бастаған болсаңыз да, басқа саладан ауысып келсеңіз де, тәжірибелі маман болсаңыз да, өзіңізге қажет бағдарламаны бізден табасыз. Тестілеуді басқару саласындағы біліктілігіңізді кеңейтіп, ISTQB® оқу бағдарламасына сай қосымша біліктілікпен көпшіліктің арасынан ерекшеленіңіз. Табысты мансабыңызды бүгін WAMOCON Academy-мен бастаңыз.',
      ],
    },
    mission: {
      de: 'Die WAMOCON Academy stärkt die IT-Branche durch gezielte Expertenschulung im Testmanagement.',
      en: 'The WAMOCON Academy strengthens the IT industry through targeted expert training in test management.',
      kk: 'WAMOCON Academy тестілеуді басқару саласындағы мақсатты сарапшылық даярлық арқылы IT саласын күшейтеді.',
    },
  },
  success: {
    heading: {
      de: 'Starte deine Erfolgsgeschichte mit der WAMOCON Academy',
      en: 'Start your success story with the WAMOCON Academy',
      kk: 'Табысты мансабыңызды WAMOCON Academy-мен бастаңыз',
    },
    text: {
      de:
        'Die WAMOCON Academy ist mehr als nur ein Ausbildungsort. Sie ist deine strategische Plattform für die Entwicklung entscheidender Fähigkeiten und die Beschleunigung deiner Karriere im IT-Bereich. Ob durch maßgeschneiderte Einzelkurse oder dynamische Teamkurse, wir bieten dir einzigartige Chancen für den erfolgreichen Berufseinstieg und die Erreichung neuer Karriereziele. Lass dich von uns auf deinem Weg zur nächsten Entwicklungsstufe begleiten und profitiere von unserem umfassenden Know-how und Netzwerk.',
      en:
        'The WAMOCON Academy is more than just a training venue. It is your strategic platform for developing critical skills and accelerating your career in IT. Whether through customized individual courses or dynamic team courses, we offer you unique opportunities to successfully launch your career and achieve new career goals. Let us accompany you on your way to the next level of development and profit from our extensive know-how and network.',
      kk:
        'WAMOCON Academy жай ғана оқу орны емес. Бұл IT саласындағы мансабыңызды жеделдетуге және шешуші дағдыларды дамытуға арналған стратегиялық алаңыңыз. Жеке қажеттілікке бейімделген курстар арқылы да, серпінді командалық курстар арқылы да біз сізге кәсіби жолды сәтті бастауға және жаңа мансаптық мақсаттарға жетуге нақты мүмкіндік ашамыз. Келесі даму сатысына бет алғанда бізбен бірге болыңыз, ауқымды тәжірибеміз бен кәсіби байланыс желімізді пайдаланыңыз.',
    },
    without: {
      title: {
        de: 'Ohne die WAMOCON Academy',
        en: 'Without the WAMOCON Academy',
        kk: 'WAMOCON Academy болмаса',
      },
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
        kk: [
          'Төмен жалақы',
          'Жұмысқа өтінішіңізден бас тарту',
          'Қызметте өсу мүмкіндігінің аздығы',
          'Тестілеуді басқару саласындағы білімнің жеткіліксіздігі',
        ],
      },
    },
    with: {
      title: {
        de: 'Mit der WAMOCON Academy',
        en: 'With the WAMOCON Academy',
        kk: 'WAMOCON Academy-мен бірге',
      },
      items: {
        de: [
          'Überdurchschnittliches Gehalt',
          'Arbeit an Projekten, die dir gefallen',
          'Hohe Entwicklungsmöglichkeiten dank ISTQB®-Zertifizierung',
          'Fachwissen von erfahrenen Mentoren',
        ],
        en: [
          'Above-average salary',
          'Work on projects that you like',
          'High development opportunities thanks to ISTQB® certification',
          'Expert knowledge from experienced mentors',
        ],
        kk: [
          'Орташадан жоғары жалақы',
          'Өзіңізге ұнайтын жобалардағы жұмыс',
          'ISTQB® сертификаты ашатын кең өсу мүмкіндігі',
          'Тәжірибелі тәлімгерлердің кәсіби білімі',
        ],
      },
    },
  },
  istqb: {
    title: 'ISTQB® Certified Tester',
    de:
      'Entdecke die Welt des Softwaretestings mit unseren umfassenden Kursen, die dir nicht nur tiefgehendes theoretisches Wissen über Testverfahren, Testmodelle und Testwerkzeuge vermitteln, sondern auch praxisnahe Einblicke bieten.',
    en:
      'Discover the world of software testing with our comprehensive courses, which not only provide you with in-depth theoretical knowledge of test procedures, test models and test tools, but also offer practical insights.',
    kk:
      'Тестілеу әдістері, тестілеу модельдері мен құралдары туралы терең теориялық білім берумен қатар нақты тәжірибені де көрсететін кешенді курстарымызбен бағдарламалық қамтамасыз етуді тестілеу әлемін ашыңыз.',
    closing: {
      de:
        'Unsere realitätsnahen Anwendungsfälle verdeutlichen, wie du theoretische Konzepte in erfolgreichen IT-Projekten umsetzen kannst. Mit unserer Unterstützung bist du bestens gerüstet, um die komplexen Herausforderungen moderner IT-Projekte zu meistern und deine Karriere als Softwaretester voranzutreiben.',
      en:
        'Our realistic use cases illustrate how you can implement theoretical concepts in successful IT projects. With our support, you are ideally equipped to master the complex challenges of modern IT projects and advance your career as a software tester.',
      kk:
        'Өмірден алынған мысалдарымыз теориялық ұғымдарды табысты IT жобаларында қалай қолдануға болатынын нақты көрсетеді. Біздің қолдауымызбен сіз заманауи IT жобаларының күрделі міндеттерін шешуге және тестілеуші ретіндегі мансабыңызды алға жылжытуға толық дайын боласыз.',
    },
  },
};

export const courses = [
  {
    type: { de: 'Einzelkurse', en: 'Individual courses', kk: 'Жеке курстар' },
    title: { de: 'ISTQB® CTFL Softwaretester (E-Learning)', en: 'ISTQB® CTFL software tester (e-learning)', kk: 'ISTQB® CTFL тестілеуші (электрондық оқыту)' },
    duration: { de: '3 Tage', en: '3 days', kk: '3 күн' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
  },
  {
    type: { de: 'Einzelkurse', en: 'Individual courses', kk: 'Жеке курстар' },
    title: { de: 'ISTQB® CTFL + Praxistraining (E-Learning)', en: 'ISTQB® CTFL + practical training (e-learning)', kk: 'ISTQB® CTFL және тәжірибелік тренинг (электрондық оқыту)' },
    duration: { de: '45 Tage', en: '45 days', kk: '45 күн' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
  },
  {
    type: { de: 'Einzelkurse', en: 'Individual courses', kk: 'Жеке курстар' },
    title: { de: 'ISTQB® CTFL Softwaretester', en: 'ISTQB® CTFL software tester', kk: 'ISTQB® CTFL тестілеуші' },
    duration: { de: '3 Tage', en: '3 days', kk: '3 күн' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
  },
  {
    type: { de: 'Einzelkurse', en: 'Individual courses', kk: 'Жеке курстар' },
    title: { de: 'ISTQB® CTFL + Praxistraining', en: 'ISTQB® CTFL + Practical training', kk: 'ISTQB® CTFL және тәжірибелік тренинг' },
    duration: { de: '45 Tage', en: '45 days', kk: '45 күн' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses', kk: 'Командалық курстар' },
    title: { de: 'Testautomatisierung', en: 'Test automation', kk: 'Тестілеуді автоматтандыру' },
    duration: { de: '5 Tage', en: '5 days', kk: '5 күн' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses', kk: 'Командалық курстар' },
    title: { de: 'Praktisches Projektmanagement nach SCRUM', en: 'Practical project management according to SCRUM', kk: 'SCRUM бойынша тәжірибелік жоба басқару' },
    duration: { de: '5 Tage', en: '5 days', kk: '5 күн' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses', kk: 'Командалық курстар' },
    title: { de: 'Individuelles Coaching (1:1)', en: 'Individual coaching (1:1)', kk: 'Жеке коучинг (1:1)' },
    duration: { de: 'individuell', en: 'individual', kk: 'жеке келісім бойынша' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses', kk: 'Командалық курстар' },
    title: { de: 'Team Coaching (1:n)', en: 'Team Coaching (1:n)', kk: 'Командалық коучинг (1:n)' },
    duration: { de: '1 Tag', en: '1 day', kk: '1 күн' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
  },
  {
    type: { de: 'Teamkurse', en: 'Team courses', kk: 'Командалық курстар' },
    title: { de: 'Potenzialanalyse (Power Booster)', en: 'Potential analysis (Power Booster)', kk: 'Әлеуетті бағалау (Power Booster)' },
    duration: { de: '1 Tag', en: '1 day', kk: '1 күн' },
    format: { de: 'im Präsenz-Kurs + Online-Kurs', en: 'in classroom course + online course', kk: 'аудиториялық курс және онлайн курс' },
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
  kk: [
    'Өтініш беру',
    'Семинарға дайындық',
    'Семинарға қатысу',
    '(Қосымша) Семинар материалын қайталау',
    'ISTQB® Certified Tester Foundation Level сертификаттауы',
    'Жаңа жұмыс немесе табысты IT жоба',
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
  kk: {
    title: 'Курс кестесі',
    groups: [
      {
        month: 'Жоспарлануда',
        rows: [
          ['Жаңа күндер', 'Жоспарлануда'],
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
          title: 'Mit Bildung in die Zukunft: Werde ISTQB® Softwaretester bei WAMOCON Academy',
          text:
            'WAMOCON bietet Seminare im Testmanagement für Einsteiger und Quereinsteiger mit intensiven Praxisinhalten und Vorbereitung auf die jeweilige Zertifizierungsprüfung.',
        },
        {
          title: 'Wo soll ich zuerst anfangen?',
          text:
            'Nimm an deinem ersten kostenlosen Webinar teil, um zu erfahren, wie du deine Karriere als Softwaretester effektiv starten oder vorantreiben kannst. Es bietet die Möglichkeit, Fragen zu stellen und Antworten von Experten zu erhalten, die dir dabei helfen, deinen beruflichen Weg zu verbessern.',
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
    kk: {
      title: 'Тестілеушілерге арналған білім беру бағдарламалары: семинарларға шолу',
      eyebrow: 'Курстар',
      lead:
        'WAMOCON Academy GmbH компаниясы неміс тіліндегі CTFL 4.0 және Agile Tester 1.0 оқу материалдары бойынша ISTQB® ресми провайдерлер тізімінде тіркелген. Курстар бағдарламалық қамтамасыз етуді тестілеудің теориясы мен тәжірибесін біріктіреді.',
      sections: [
        {
          title: 'Курстарымыздың артықшылықтары',
          text:
            'Толыққанды даярлық, мансаптық өсу және тәжірибеге бағытталған мазмұн тестілеудің негіздері мен озық әдістерін нақты мысалдар әрі жаттығулармен ұштастырады.',
          items: ['Толыққанды даярлық', 'Мансаптық өсу', 'Тәжірибеге бағытталған мазмұн'],
        },
        {
          title: 'Біліммен болашаққа: WAMOCON Academy-де ISTQB® тестілеушісі болыңыз',
          text:
            'WAMOCON тестілеуді басқару бойынша семинарларды жаңадан бастаушыларға және басқа саладан ауысқандарға ұсынады. Онда тәжірибелік мазмұн басым, сонымен қатар тиісті сертификаттау емтиханына дайындық жүреді.',
        },
        {
          title: 'Ең алдымен неден бастаған жөн?',
          text:
            'Алғашқы тегін вебинарымызға қатысып, тестілеуші ретіндегі мансабыңызды қалай тиімді бастауға немесе алға жылжытуға болатынын біліңіз. Онда сұрақ қоюға және кәсіби жолыңызды жақсартуға көмектесетін сарапшылардан жауап алуға мүмкіндік бар.',
          items: [
            'БАҒДАРЛАМАЛЫҚ ҚАМТАМАСЫЗ ЕТУДІ ТЕСТІЛЕУГЕ кіріспе: вебинардың мақсатты аудиториясы мен пайдасы.',
            'Сертификатталған тестілеуші қанша табыс табады? Жалақы құрылымы мен мансаптық болашаққа шолу.',
            'Тестілеуші қандай қиындықтарға жиі тап болады? Тестілеуді басқарудағы кең тараған мәселелерді талқылау.',
            'Bildungsgutschein білім беру ваучері: қаржыландыру жекелеген жағдайда ғана мүмкін. Шарттарды, көлемді және мақұлдауды жұмыспен қамту агенттігі немесе Jobcenter шешеді.',
            'Табысты тестілеушіні не ерекшелейді? Табысты маманның басты дағдылары мен қасиеттері.',
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
        'Unser Bildungszentrum bietet mehr als nur Kurse. Es ist deine Startrampe für eine erfolgreiche IT-Karriere. Hier verwandeln wir Lernende in IT-Profis, die bereit sind, die Herausforderungen der heutigen digitalen Welt zu meistern.',
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
            'Die IT-Welt war noch nie so komplex wie heute, besonders durch den rasanten Fortschritt der künstlichen Intelligenz. Hier kommt die WMC-Methode ins Spiel, die auf über 50 Jahren gebündelter Praxiserfahrung unseres Teams im Test- und Qualitätsmanagement aufbaut.',
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
            'The IT world has never been as complex as it is today, especially due to the rapid progress of artificial intelligence. This is where the WMC method comes into play: it builds on over 50 years of combined practical experience within our team in testing and quality management.',
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
    kk: {
      title: 'Табысқа апарар жол WAMOCON Academy-ден басталады',
      eyebrow: 'Академия туралы',
      lead:
        'Білім беру орталығымыз курстардан әлдеқайда көбін ұсынады. Бұл табысты IT мансабыңызға арналған ұшу алаңы. Мұнда біз оқушыларды бүгінгі цифрлық әлемнің сын-қатерлерін жеңуге дайын IT мамандарына айналдырамыз.',
      sections: [
        {
          title: 'Тәжірибелі оқытушылардың қолдауы',
          text:
            'Теориялық сабақтар түсінікті тілмен беріледі, ал сала сарапшылары ұсынатын жаттығулар мен нақты мысалдар тестілеушінің күнделікті міндеттерін тез әрі оңай меңгеруге көмектеседі.',
        },
        {
          title: 'Академия ұсынатын басты артықшылықтар',
          text:
            'Осы артықшылықтардың арқасында WAMOCON Academy мамандарға жедел өзгеретін технология әлемінде жеке және кәсіби мақсаттарына жетуге мүмкіндік беретін кешенді әрі сапалы білім ұсынады.',
          items: [
            'Халықаралық сапа стандарттарына сай оқыту',
            'Оқу бағдарламаларының кең спектрі',
            'Заманауи білім беру технологиялары мен әдістері',
            'Оқытудың жеке тәсілі',
            'Тәжірибеге бағдарлану',
            'Қолдау және тәлімгерлік',
          ],
        },
        {
          title: 'WMC әдісі +',
          text:
            'IT әлемі бүгінгідей күрделі болып көрген емес, әсіресе жасанды интеллекттің қарқынды дамуы себебінен. Дәл осы жерде командамыздың тестілеу және сапаны басқару саласындағы 50 жылдан асатын жинақталған тәжірибесіне сүйенетін WMC әдісі көмекке келеді.',
          items: [
            'Басымдық белгілеу',
            'Тәуекелді бағалау',
            'Уақытты басқару',
            'Стратегиялық бағдар',
            'Мүдделі тараптармен жұмыс',
            'Ресурстарды бөлу',
            'Жедел әрекет ету',
            'Тәуекелді азайту',
            'Тұрақты мониторинг',
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
    kk: {
      title: '360° Booster System сіздің IT мансабыңыз үшін',
      eyebrow: '360° Booster System',
      lead:
        'WAMOCON IT тестілеу жобаларындағы жұмыстың барлық қырын қамтитын кешенді тәсіл әзірледі.',
      sections: [
        {
          title: 'IT саласына арналған 360° мансап жүйесі',
          text:
            'Мансапты табысты дамытуға арналған бұл 360 градустық жүйе бірқатар қадамнан тұрады және қиындықтарды жеңіп, табысқа апарар жолды барынша тиімді өтуге мүмкіндік береді.',
        },
        {
          title: 'WAMOCON командасы осы жүйемен жұмыс істейді',
          text:
            'WAMOCON командасы әр қызметкердің жұмыс сапасын арттыру, тестілеуді сәтті жүргізу және IT жобаларын нәтижелі аяқтау үшін осы жүйені пайдаланады.',
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
    kk: {
      title: 'Табысты түлектер не дейді',
      eyebrow: 'Пікірлер',
      lead: 'IT саласына кіргенде біз сізді әр қадамда қолдап отырамыз.',
      sections: [],
    },
  },
  certification: {
    image: assets.certificationHero,
    de: {
      title: 'ISTQB® Zertifizierung',
      eyebrow: 'ISTQB® Certified Tester',
      lead:
        'Werde zum Qualitätsexperten: ISTQB® Certified Tester Foundation Level (CTFL). Qualitätssicherung ist der Schlüssel zum Erfolg jedes Softwareprojekts.',
      sections: [
        {
          title: 'Was du im ISTQB® CTFL Training lernst',
          text:
            'Unser umfassendes Training bereitet dich optimal auf die offizielle ISTQB®-Zertifizierung vor und vermittelt dir praxisnahe Kenntnisse, die sofort in der täglichen Arbeit einsetzbar sind.',
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
            'Die ISTQB®-Zertifizierung ist weltweit anerkannt und gilt als Qualitätssiegel für Testexperten. Sie steigert deine Karrierechancen und bietet sofortigen Nutzen für Unternehmen.',
          items: ['Globale Anerkennung', 'Steigere deine Karrierechancen', 'Sofortiger Nutzen für Unternehmen'],
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
    kk: {
      title: 'ISTQB® сертификаттауы',
      eyebrow: 'ISTQB® Certified Tester',
      lead:
        'Сапа жөніндегі сарапшы болыңыз: ISTQB® Certified Tester Foundation Level (CTFL). Сапаны қамтамасыз ету кез келген бағдарламалық жоба табысының кілті.',
      sections: [
        {
          title: 'ISTQB® CTFL тренингінде не үйренесіз',
          text:
            'Кешенді тренингіміз сізді ресми ISTQB® сертификаттауына мұқият дайындайды және күнделікті жұмыста бірден қолдануға болатын тәжірибелік білім береді.',
          items: [
            'Бағдарламалық қамтамасыз етуді тестілеу негіздері',
            'Әзірлеу циклындағы тестілеу',
            'Статикалық тестілеу және шолулар',
            'Тест жобалау әдістері',
            'Тестілеуді басқару',
            'Тестілеу құралдары',
          ],
        },
        {
          title: 'ISTQB® сертификаттауы неге құнды?',
          text:
            'ISTQB® сертификаты бүкіл әлемде танылған және тестілеу сарапшылары үшін сапа белгісі саналады. Ол мансаптық мүмкіндіктеріңізді арттырады әрі компанияларға бірден пайда әкеледі.',
          items: ['Әлемдік мойындау', 'Мансаптық мүмкіндіктердің артуы', 'Компанияларға бірден пайда'],
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
            'Unsere realitätsnahen Anwendungsfälle verdeutlichen, wie du theoretische Konzepte in erfolgreichen IT-Projekten umsetzen kannst.',
        },
        {
          title: 'Optimal vorbereitet',
          text:
            'Mit unserer Unterstützung bist du bestens gerüstet, um die komplexen Herausforderungen moderner IT-Projekte zu meistern und deine Karriere als Softwaretester voranzutreiben.',
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
    kk: {
      title: 'DiTeLe қосымшасы',
      eyebrow: 'Цифрлық оқу және тестілеу ортасы',
      lead:
        'DiTeLe тестілеушілерге тәжірибеге негізделген оқуды, жаттығуларды және нақты қолданыс сценарийлерін ұсынады.',
      sections: [
        {
          title: 'Өмірден алынған жағдайлардағы тәжірибе',
          text:
            'Нақты мысалдарымыз теориялық ұғымдарды табысты IT жобаларында қалай қолдануға болатынын көрсетеді.',
        },
        {
          title: 'Толық дайындық',
          text:
            'Біздің қолдауымызбен сіз заманауи IT жобаларының күрделі міндеттерін шешуге және тестілеуші ретіндегі мансабыңызды алға жылжытуға толық дайын боласыз.',
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
  role: {
    de: 'Teilnehmerin WAMOCON Academy',
    en: 'Participant WAMOCON Academy',
    kk: 'WAMOCON Academy тыңдаушысы',
  },
  text: {
    de:
      'Die WAMOCON Academy begleitet Teilnehmer Schritt für Schritt beim Einstieg in die IT-Branche.',
    en:
      'The WAMOCON Academy guides participants step by step as they enter the IT industry.',
    kk:
      'WAMOCON Academy тыңдаушыларын IT саласына кірігудің әр қадамында қолдап отырады.',
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
    kk: {
      title: 'Қолжетімділік туралы мәлімдеме',
      // Courtesy translation. The German document remains the binding version,
      // so the page carries a precedence notice pointing at it.
      notice: {
        text: 'Бұл қазақ тіліндегі мәтін ыңғайлылық үшін жасалған аударма. Заңды күші бар нұсқа ретінде тек неміс тіліндегі түпнұсқа қолданылады:',
        linkLabel: 'неміс тіліндегі түпнұсқа',
        href: '/barrierefreiheit/',
      },
      blocks: [
        'Жаңартылған күні: 2026 жылғы 21 шілде\nWAMOCON Academy GmbH өз сайтын Германияның қолжетімділікті күшейту туралы заңына (Barrierefreiheitsstärkungsgesetz, BFSG) сәйкес қолжетімді етуге ұмтылады.',
        'Талаптарға сәйкестік жағдайы\nӨлшем ретінде біз EN 301 549 стандартын қолданамыз, ол Web Content Accessibility Guidelines (WCAG) 2.1 нұсқасының AA сәйкестік деңгейіне сілтейді. Бұл сайт аталған талаптарға ішінара сәйкес келеді. Төменде санамаланған тармақтар бізге белгілі және қазір пысықталуда.',
        'Қолжетімсіз мазмұн\nКейбір бейне материалдарда толық субтитрлер немесе транскрипт әлі жоқ (WCAG 1.2.2, 1.2.3).\nҮшінші тараптардың ендірілген мазмұны, әсіресе YouTube пен Google Maps, біздің бақылауымызда емес. Ол мазмұнның қолжетімділігіне тиісті провайдер жауапты.\nЖекелеген сәндік анимациялар мен қозғалыс әсерлері қазір тексерілуде. Операциялық жүйесінде қозғалысты азайту режимін қосқан пайдаланушылар қазірдің өзінде жеңілдетілген көріністі алады (WCAG 2.3.3).',
        'Балама жолдар және байланыс\nЕгер қандай да бір мазмұн сізге қолжетімсіз болса, бізге хабарласыңыз. Қажетті ақпаратты басқа жолмен, мысалы телефон немесе электрондық пошта арқылы ұсынамыз.',
        'Кері байланыс және байланыс деректері\nОсы сайттағы кедергілер туралы кез келген уақытта хабарлап, қолжетімді балама сұрай аласыз:\nWAMOCON Academy GmbH, Mergenthalerallee 79–81, 65760 Eschborn, Германия\nТелефон: +49 (0) 6196 5838312\nЭлектрондық пошта: info@test-it-academy.com\nХабарламаңыздың келіп түскенін жедел растаймыз және алты апта ішінде мазмұны бойынша жауап береміз.',
        'Мәжбүрлеу рәсімі\nЕгер жауабымызға көңіліңіз толмаса немесе жауап алмасаңыз, өнімдер мен қызметтердің қолжетімділігі жөніндегі федералдық жерлердің нарықтық қадағалау органына (MLBF) жүгіне аласыз.\nMarktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und Dienstleistungen, Anstalt öffentlichen Rechts (MLBF AöR)\nCarl-Miller-Straße 6, 39112 Magdeburg, Германия\nТелефон: +49 391 289 230 23\nЭлектрондық пошта: kontakt@mlbf-barrierefrei.de\nВеб-сайт: mlbf-barrierefrei.de',
        'Осы мәлімдеменің дайындалуы\nБұл мәлімдеме 2026 жылғы 21 шілдеде дайындалды. Негіз ретінде сайттың WCAG 2.1 AA деңгейі бойынша ішкі тексерісі алынды. Мәлімдемені тұрақты қайта қарап отырамыз және функциялар не қолжетімділік жағдайы өзгерген сайын жаңартамыз.',
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
    kk: {
      title: 'Заңды мәліметтер',
      // Courtesy translation. The German document remains the binding version,
      // so the page carries a precedence notice pointing at it.
      notice: {
        text: 'Бұл қазақ тіліндегі мәтін ыңғайлылық үшін жасалған аударма. Заңды күші бар нұсқа ретінде тек неміс тіліндегі түпнұсқа қолданылады:',
        linkLabel: 'неміс тіліндегі түпнұсқа',
        href: '/impressum/',
      },
      blocks: [
        '§ 5 DDG талаптарына сай мәліметтер\nWAMOCON Academy GmbH\nMergenthalerallee 79–81\n65760 Eschborn\nГермания',
        'Байланыс\nТелефон: +49 (0) 6196 5838312\nЭлектрондық пошта: info@test-it-academy.com',
        'Өкілдік және тіркеу\nАтқарушы директор: Dipl.-Ing. Waleri Moretz\nКомпанияның орналасқан жері: Eschborn\nТіркеу соты: Amtsgericht Frankfurt am Main\nСауда тізілімінің нөмірі: HRB 123666\n§ 27a UStG бойынша қосылған құн салығының сәйкестендіру нөмірі: DE344930486',
        'Тұтынушылық дауларды шешу\nWAMOCON Academy GmbH тұтынушылық татуластыру органындағы дауды шешу рәсіміне қатысуға дайын емес және қатысуға міндетті емес.',
        '§ 18 абз. 2 MStV бойынша редакциялық жауапты тұлға\nDipl.-Ing. Waleri Moretz\nMergenthalerallee 79–81\n65760 Eschborn',
        'Сілтемелер үшін жауапкершілік\nСайтымызда үшінші тараптардың сыртқы сайттарына сілтемелер бар. Олардың мазмұнына біздің ықпалымыз жүрмейді. Сілтеме берілген беттердің мазмұнына тиісті провайдер жауап береді. Нақты құқық бұзушылық белгілі болған жағдайда тиісті сілтемелерді дереу жоямыз.',
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
        '7. KI-Chat-Assistent\nDiese Website bietet einen Chat-Assistenten an. Er ist ein KI-System und kein Mensch. Seine Antworten werden automatisch erzeugt, stützen sich ausschließlich auf die Inhalte dieser Website und können Fehler enthalten; sie sind keine Rechts- oder Vertragsberatung.\nIhre Eingabe wird an unsere eigene Serverfunktion übermittelt und von dort an ein Sprachmodell weitergegeben, das auf Servern der WAMOCON-Gruppe betrieben wird. Es findet keine Übermittlung an einen externen KI-Anbieter statt. Ihre Eingaben werden nicht zum Training des Modells verwendet.\nDer Inhalt Ihrer Nachrichten wird nicht gespeichert und nicht protokolliert. Protokolliert werden ausschließlich technische Kennzahlen ohne Personenbezug (Sprache der Anfrage, Zeichenanzahl, Anzahl der herangezogenen Website-Abschnitte). Der Gesprächsverlauf besteht nur im Speicher Ihres Browsers und wird beim Schließen der Seite verworfen.\nRechtsgrundlage ist unser berechtigtes Interesse an einer effizienten Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Bitte geben Sie keine besonderen Kategorien personenbezogener Daten oder vertrauliche Informationen in den Chat ein; nutzen Sie für persönliche Anliegen info@test-it-academy.com.',
        '8. Keine Reichweitenmessung und keine Werbung\nAuf dieser Astro-Website werden Yandex Metrica einschließlich Webvisor, Google Analytics, Google AdSense und reCAPTCHA nicht eingesetzt. Es findet keine Reichweitenmessung oder personalisierte Werbung durch diese Dienste statt. Google Fonts werden nicht von Google-Servern geladen.',
        '9. Empfänger und Drittlandübermittlungen\nEmpfänger können Vercel, Microsoft und bei Formularnutzung Cloudflare sein. Google/YouTube erhält erst nach Ihrer Einwilligung Daten. Soweit Anbieter Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten, stützen sie die Übermittlung nach eigener Angabe auf einen Angemessenheitsbeschluss, insbesondere das EU-US Data Privacy Framework, oder geeignete Garantien wie EU-Standardvertragsklauseln. Soweit ein Anbieter als Auftragsverarbeiter tätig wird, ist eine Vereinbarung nach Art. 28 DSGVO erforderlich.',
        '10. Ihre Rechte\nSie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Eine Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Anfragen richten Sie an info@test-it-academy.com. Sie können sich außerdem bei einer Datenschutzaufsichtsbehörde beschweren; zuständig ist insbesondere der Hessische Beauftragte für Datenschutz und Informationsfreiheit, datenschutz.hessen.de.',
        '11. Sicherheit und Aktualisierung\nWir schützen die Website durch TLS-Verschlüsselung, Sicherheits-Header, Zugriffsbeschränkungen und weitere angemessene technische und organisatorische Maßnahmen. Diese Erklärung wird aktualisiert, wenn sich Funktionen, Dienstleister oder die Rechtslage ändern.',
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
        '7. AI chat assistant\nThis website offers a chat assistant. It is an AI system, not a human. Its answers are generated automatically, draw exclusively on the content of this website and may contain errors; they are not legal or contractual advice.\nYour input is sent to our own server function and from there to a language model operated on WAMOCON group servers. There is no transfer to an external AI provider. Your input is not used to train the model.\nThe content of your messages is neither stored nor logged. Only non-personal technical metrics are recorded (language of the request, character count, number of website sections consulted). The conversation exists only in your browser and is discarded when you close the page.\nThe legal basis is our legitimate interest in answering enquiries efficiently (Article 6(1)(f) GDPR). Please do not enter special categories of personal data or confidential information into the chat; for personal matters please use info@test-it-academy.com.',
        '8. No audience measurement or advertising\nThis Astro website does not use Yandex Metrica or Webvisor, Google Analytics, Google AdSense or reCAPTCHA. Those services do not perform audience measurement or personalised advertising here. Google Fonts are not loaded from Google servers.',
        '9. Recipients and international transfers\nRecipients may include Vercel, Microsoft and, when a form is used, Cloudflare. Google/YouTube receives data only after consent. Where providers process data outside the European Economic Area, they state that they rely on an adequacy decision, especially the EU-US Data Privacy Framework, or safeguards such as EU Standard Contractual Clauses. An Article 28 GDPR agreement is required where a provider acts as a processor.',
        '10. Your rights\nSubject to the GDPR, you have rights of access, rectification, erasure, restriction, data portability and objection. You may withdraw consent at any time for the future. Contact info@test-it-academy.com. You may also complain to a supervisory authority; in particular, the Hessian Commissioner for Data Protection and Freedom of Information, datenschutz.hessen.de.',
        '11. Security and updates\nWe protect the website using TLS encryption, security headers, access controls and other appropriate technical and organisational measures. We update this policy when functions, providers or legal requirements change.',
      ],
    },
    kk: {
      title: 'Құпиялылық саясаты',
      // Courtesy translation. The German document remains the binding version,
      // so the page carries a precedence notice pointing at it.
      notice: {
        text: 'Бұл қазақ тіліндегі мәтін ыңғайлылық үшін жасалған аударма. Заңды күші бар нұсқа ретінде тек неміс тіліндегі түпнұсқа қолданылады:',
        linkLabel: 'неміс тіліндегі түпнұсқа',
        href: '/datenschutz/',
      },
      blocks: [
        'Жаңартылған күні: 2026 жылғы 21 шілде\nБұл құпиялылық саясаты test-it-academy.com сайтындағы дербес деректерді өңдеуді сипаттайды.',
        '1. Деректерді өңдеуші\nWAMOCON Academy GmbH\nMergenthalerallee 79–81\n65760 Eschborn, Германия\nТелефон: +49 (0) 6196 5838312\nДеректерді қорғау сұрақтары бойынша электрондық пошта: info@test-it-academy.com\nАтқарушы директор: Dipl.-Ing. Waleri Moretz\nДеректерді қорғау жөніндегі уәкіл тағайындалмаған.',
        '2. Хостинг және сервер журналдары\nAstro негізіндегі сайт Vercel Inc. арқылы ұсынылады. Сайтқа кірген кезде техникалық тұрғыда қажет байланыс деректері өңделеді: IP мекенжайы, уақыты, сұралған URL, referrer, браузер және операциялық жүйе. Мақсаты: сайттың қауіпсіз әрі тұрақты жұмысы. Құқықтық негізі: GDPR 6-бабы 1-тармағының f тармақшасы. Журналдар пайдалану, қауіпсіздік және қателерді талдау үшін қажет мерзімде ғана сақталады. Провайдер туралы ақпарат: vercel.com/legal/privacy-notice.',
        '3. Байланыс және курс сұраныстары\nФормалар тек міндеттеме жүктемейтін сұраныстарға арналған және ақылы шарт тудырмайды. Аты-жөніңіз, электрондық пошта мекенжайыңыз, қалауыңыз бойынша телефон нөміріңіз және өзіңіз енгізген мәтін өңделеді. Құқықтық негіздері: шарт жасасу алдындағы әрекеттер үшін GDPR 6-бабы 1-тармағының b тармақшасы, өзге сұраныстар үшін сол баптың f тармақшасы. Жіберу және ішкі поштамен жеткізу Vercel және Microsoft 365 (Microsoft Graph) арқылы жүзеге асады. Сұраныс толық өңделгеннен кейін, заңды сақтау мерзімдері немесе кейінгі шарттық қатынас кедергі болмаса, деректер жойылады.',
        '4. Формаларды Cloudflare Turnstile арқылы қорғау\nФорманы белсенді пайдаланған кезде Cloudflare, Inc. компаниясының Cloudflare Turnstile қызметі жүктеледі. Turnstile автоматтандырылған енгізу мен теріс пайдалануды анықтау үшін техникалық байланыс, браузер және өзара әрекет деректерін өңдейді. Құқықтық негізі: GDPR 6-бабы 1-тармағының f тармақшасы. Техникалық тұрғыда қажет жад қатынасы сіз сұраған қорғалған форма функциясына қызмет етеді. Turnstile сервер жағында тексеріледі. Ақпарат: cloudflare.com/privacypolicy.',
        '5. Келісімді басқару және сыртқы медиа\nСайт сыртқы медиаға қатысты таңдауыңызды браузеріңізде „wamocon-academy-consent-v1“ кілтімен жергілікті сақтайды. Бұл таңдауыңызды басқару үшін қажет. YouTube бейнелері мен Google Maps тек сіз „Сыртқы медиа“ рұқсатын бергенде жүктеледі. Сол кезде IP мекенжайы, браузер деректері, ашылған бет және жағдайға қарай аккаунт деректері Google Ireland Limited компаниясына немесе онымен байланысты компанияларға берілуі мүмкін. Құқықтық негіздері: GDPR 6-бабы 1-тармағының a тармақшасы және TDDDG 25-бабының 1-тармағы. Келісімді кез келген уақытта сайттың төменгі бөлігіндегі „Құпиялылық параметрлері“ арқылы кері қайтара аласыз. Ақпарат: policies.google.com/privacy.',
        '6. Пікірлер және тыңдаушы лебіздері\nПікірлер бетінде өз пікіріңізді ерікті түрде қалдыра аласыз. Аты-жөніңіз, бағаңыз және өзіңіз енгізген мәтін өңделеді. Пікіріңізді аты-жөніңізбен бірге WAMOCON Academy GmbH сайттарында және әлеуметтік желі арналарында тыңдаушы лебізі ретінде жариялау тек GDPR 6-бабы 1-тармағының a тармақшасына сай бөлек берілген ерікті келісіміңіз негізінде жүзеге асады. Мұндай келісімсіз пікіріңіз жарияланбайды, ал пікір қалдыру бағдарламаларымызға қатысудың шарты емес. Келісімді кез келген уақытта болашаққа қатысты info@test-it-academy.com арқылы кері қайтара аласыз. Ол жағдайда жарияланымды сайттарымыздан дереу аламыз; үшінші тұлғалар немесе әлеуметтік желі платформалары бұрын көшіріп алған мазмұнды әрқашан қайтара алмаймыз. Келісім кері қайтарылған немесе жариялау мақсаты жойылған сәтте пікірлер өшіріледі.',
        '7. Жасанды интеллект чат көмекшісі\nБұл сайтта чат көмекшісі жұмыс істейді. Ол адам емес, жасанды интеллект жүйесі. Оның жауаптары автоматты түрде жасалады, тек осы сайттың мазмұнына сүйенеді және қате қамтуы мүмкін; олар заңгерлік немесе шарттық кеңес болып саналмайды.\nЕнгізген мәтініңіз біздің серверлік функциямызға жіберіледі, ол жерден WAMOCON тобының серверлерінде жұмыс істейтін тілдік модельге беріледі. Сыртқы жасанды интеллект провайдеріне ешқандай беру жүрмейді. Енгізген мәтініңіз модельді оқыту үшін пайдаланылмайды.\nХабарламаларыңыздың мазмұны сақталмайды және журналға жазылмайды. Тек дербес деректерге қатысы жоқ техникалық көрсеткіштер тіркеледі: сұраныс тілі, таңба саны, пайдаланылған сайт бөлімдерінің саны. Әңгіме тарихы тек браузеріңіздің жадында тұрады және бетті жапқанда жойылады.\nҚұқықтық негізі: сұраныстарға тиімді жауап берудегі заңды мүддеміз (GDPR 6-бабы 1-тармағының f тармақшасы). Чатқа дербес деректердің ерекше санаттарын немесе құпия ақпаратты енгізбеңіз; жеке мәселелер бойынша info@test-it-academy.com мекенжайын пайдаланыңыз.',
        '8. Аудиторияны өлшеу және жарнама жүргізілмейді\nБұл Astro сайтында Yandex Metrica (Webvisor қоса), Google Analytics, Google AdSense және reCAPTCHA пайдаланылмайды. Аталған қызметтер арқылы аудиторияны өлшеу де, дербестендірілген жарнама да жүргізілмейді. Google Fonts қаріптері Google серверлерінен жүктелмейді.',
        '9. Алушылар және үшінші елдерге беру\nАлушылар қатарында Vercel, Microsoft, ал форманы пайдаланғанда Cloudflare болуы мүмкін. Google және YouTube деректерді тек сіздің келісіміңізден кейін алады. Провайдерлер деректерді Еуропалық экономикалық аймақтан тыс өңдейтін болса, олар өз мәлімдемесі бойынша бұл берілімді жеткіліктілік туралы шешімге, әсіресе EU-US Data Privacy Framework шеңберіне, немесе ЕО стандартты шарттық ережелері сияқты тиісті кепілдіктерге негіздейді. Провайдер өңдеуші ретінде әрекет еткен жағдайда GDPR 28-бабына сай келісім қажет.',
        '10. Сіздің құқықтарыңыз\nGDPR талаптарына сай сізде ақпарат алу, түзету, жою, өңдеуді шектеу, деректерді тасымалдау және қарсылық білдіру құқықтары бар. Келісімді кез келген уақытта болашаққа қатысты кері қайтара аласыз. Сұраныстарды info@test-it-academy.com мекенжайына жіберіңіз. Сонымен қатар деректерді қорғау жөніндегі қадағалау органына шағымдана аласыз; бұл орган, атап айтқанда, Гессен жері бойынша деректерді қорғау және ақпарат еркіндігі жөніндегі уәкіл, datenschutz.hessen.de.',
        '11. Қауіпсіздік және жаңарту\nСайтты TLS шифрлауымен, қауіпсіздік тақырыптарымен, қатынасты шектеумен және басқа да тиісті техникалық әрі ұйымдастырушылық шаралармен қорғаймыз. Функциялар, қызмет көрсетушілер немесе құқықтық жағдай өзгергенде осы саясат жаңартылады.',
      ],
    },
  },
} as const;
