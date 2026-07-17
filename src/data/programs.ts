import type { Lang } from '../i18n/config';

const img = (name: string) => `/images/academy/${name}`;

export const programAssets = {
  hero: img('tild6435-3037-4261-b437-346164326231__vadsv.png'),
  accreditation: img('tild6434-6538-4665-a565-663462333933__frame_929517.png'),
  accentCurve: img('tild3730-6132-4863-b462-623032303533__group_11.png'),
  network: img('tild6630-6335-4734-b539-333937613531__group.svg'),
  consultation: img('tild6466-6536-4065-b832-356661343462__wma_imagevideo_bild1.jpg'),
  diploma: img('tild3365-3962-4030-b130-636430666463__remove-bgai_17248545.png'),
  certification: img('tild6638-6237-4139-a365-313564343662__frame_929518.png'),
  webinar: img('tild6633-6566-4234-a339-386662643565__site-expert-coding-r.jpg'),
  contact: img('tild3038-3931-4334-b936-326431363630__software-developers-.jpg'),
  youtube: img('tild3337-3562-4332-a338-336131626135__facebook_5968764_1.svg'),
  facebook: img('tild6630-3537-4439-a365-386361613065__group_316.svg'),
  instagram: img('tild6634-3939-4734-b530-653162613964__group_317.svg'),
} as const;

export type ProgramCourse = {
  title: string;
  duration: string;
  format: string;
  hook: string;
};

type ProgramDates = {
  month: string;
  rows: Array<[string, string]>;
};

export const programCourses: Record<Lang, { individual: ProgramCourse[]; team: ProgramCourse[] }> = {
  de: {
    individual: [
      {
        title: 'ISTQB® CTFL Softwaretester (E-Learning)',
        duration: '3 Tage',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:ISTQB-CTFL-1-Softwaretester-de',
      },
      {
        title: 'ISTQB® CTFL + Praxistraining (E-Learning)',
        duration: '45 Tage',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:ISTQB-CTFL-Praxistraining-1-de',
      },
      {
        title: 'Testautomatisierung',
        duration: '5 Tage',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:Testautomatisierung-1-de',
      },
      {
        title: 'Individuelles Coaching (1:1)',
        duration: 'individuell',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:Coaching-1-de',
      },
      {
        title: 'Praktisches Projektmanagement nach SCRUM',
        duration: '5 Tage',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:Praktisches-Projektmanagement-SKRUM-1-de',
      },
    ],
    team: [
      {
        title: 'ISTQB® CTFL Softwaretester',
        duration: '3 Tage',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:ISTQB-CTFL-2-Softwaretester-de',
      },
      {
        title: 'ISTQB® CTFL + Praxistraining',
        duration: '45 Tage',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:ISTQB-CTFL-Praxistraining-2-de',
      },
      {
        title: 'Testautomatisierung',
        duration: '1 Tag',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:Testautomatisierung-2-de',
      },
      {
        title: 'Potenzialanalyse (Power Booster)',
        duration: '1 Tag',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:Potenzialanalyse-Power-Booster-2-de',
      },
      {
        title: 'Team Coaching (1:n)',
        duration: '5 Tage',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:Team-Coaching-2-de',
      },
      {
        title: 'Praktisches Projektmanagement nach SCRUM',
        duration: '5 Tage',
        format: 'im Präsenz-Kurs + Online-Kurs',
        hook: '#popup:Praktisches-Projektmanagement-SKRUM-2-de',
      },
    ],
  },
  en: {
    individual: [
      {
        title: 'ISTQB® CTFL software tester (e-learning)',
        duration: '3 days',
        format: 'in classroom course + online course',
        hook: '#popup:ISTQB-CTFL-Softwaretester-1-en',
      },
      {
        title: 'ISTQB® CTFL + practical training (e-learning)',
        duration: '45 days',
        format: 'in classroom course + online course',
        hook: '#popup:ISTQB-CTFL-Praxistraining-1-en',
      },
      {
        title: 'Test automation',
        duration: '5 days',
        format: 'in classroom course + online course',
        hook: '#popup:Testautomatisierung-1-en',
      },
      {
        title: 'Individual coaching (1:1)',
        duration: 'individual',
        format: 'in classroom course + online course',
        hook: '#popup:Team-Coaching-1-en',
      },
      {
        title: 'Practical project management according to SCRUM',
        duration: '5 days',
        format: 'in classroom course + online course',
        hook: '#popup:Praktisches-Projektmanagement-SKRUM-1-en',
      },
    ],
    team: [
      {
        title: 'ISTQB® CTFL software tester',
        duration: '3 days',
        format: 'in classroom course + online course',
        hook: '#popup:ISTQB-CTFL-Softwaretester-2-en',
      },
      {
        title: 'ISTQB® CTFL + Practical training',
        duration: '45 days',
        format: 'in classroom course + online course',
        hook: '#popup:ISTQB-CTFL-Praxistraining-2-en',
      },
      {
        title: 'Test automation',
        duration: '1 day',
        format: 'in classroom course + online course',
        hook: '#popup:Testautomatisierung-2-en',
      },
      {
        title: 'Potential analysis (Power Booster)',
        duration: '1 day',
        format: 'in classroom course + online course',
        hook: '#popup:Potenzialanalyse-Power-Booster-2-en',
      },
      {
        title: 'Team Coaching (1:n)',
        duration: '5 days',
        format: 'in classroom course + online course',
        hook: '#popup:Team-Coaching-2-en',
      },
      {
        title: 'Practical project management according to SCRUM',
        duration: '5 days',
        format: 'in classroom course + online course',
        hook: '#popup:Praktisches-Projektmanagement-SKRUM-2-en',
      },
    ],
  },
};

export const programContent = {
  de: {
    title: 'Bildungsprogramme für Softwaretester: Seminare im Überblick',
    heroAccent: 'Bildungsprogramme für Softwaretester:',
    heroRest: 'Seminare im Überblick',
    lead: 'Die WAMOCON Academy GmbH ist bei ISTQB® als akkreditierter Trainingsanbieter für deutschsprachige CTFL 4.0- und Agile Tester 1.0-Trainingsmaterialien gelistet. Unsere Kurse bereiten Fachleute praxisnah auf die jeweilige Zertifizierungsprüfung vor.',
    benefitsTitle: 'Vorteile unserer Kurse',
    benefits: [
      ['Umfassende Ausbildung', 'Grundlagen und fortgeschrittene Techniken des Softwaretestens.'],
      ['Praxisorientierte Inhalte', 'Praktische Einblicke und Ubungen.'],
      ['Karriereförderung', 'Vorbereitung auf die Zertifizierung und eine erfolgreiche IT-Karriere.'],
    ],
    individualTitle: 'Einzelkurse',
    teamTitle: 'Teamkurse',
    networkText: 'Studierende der WAMOCON Academy erhalten die einzigartige Möglichkeit, sich online und offline mit führenden Experten zu treffen und auszutauschen, was ihnen neue Karrierechancen eröffnet und ihr berufliches Netzwerk erweitert.',
    datesTitle: 'Termine im überblick',
    dates: [
      {
        month: 'In Planung',
        rows: [['Neue Kurstermine werden bekannt gegeben.', 'In Planung']],
      },
    ] as ProgramDates[],
    moreDetails: 'Mehr Details',
    adviceTitle: 'Beratung erhalten',
    adviceText: 'Rufen Sie uns an +49 6196 5838311, oder hinterlassen Sie unten Ihre Kontaktdaten, damit wir Sie erreichen und Ihre Fragen beantworten können.',
    form: { name: 'Ihr Name', phone: 'Telefon', email: 'E-Mail', submit: 'Anfrage senden' },
    consent: 'Ihre Anfrage an die WAMOCON Academy GmbH ist unverbindlich und stellt keinen Kauf dar. Informationen zur Verarbeitung Ihrer Daten finden Sie in der Datenschutzerklärung.',
    futureTitleAccent: 'Mit Bildung in die Zukunft:',
    futureTitleRest: 'Werden Sie ISTQB® Softwaretester bei WAMOCON Academy',
    futureIntro: 'ist die Möglichkeit, die Kompetenz im Bereich Testmanagement zu erreichen.',
    futureText: 'WAMOCON bietet Seminare im Testmanagement für Einsteiger und Quereinsteiger mit intensiven Praxisinhalten. Die WAMOCON Academy GmbH ist im offiziellen ISTQB®-Anbieterverzeichnis für CTFL 4.0 und Agile Tester 1.0 (deutsch) gelistet.',
    stepsTitle: 'Schritte zur Vorbereitung auf die Zertifizierungsprüfung',
    steps: [
      'Bewerbung',
      'Vorbereitung auf das Seminar',
      'Teilnahme am Seminar',
      '(Optional) Wiederholung der Inhalte aus dem Seminar',
      'Zertifizierung ISTQB® Certified Tester Foundation Level',
      'Neuer Job erfolgreiches IT-Projekt',
    ],
    prep: [
      ['Optimale Prüfungsvorbereitung', 'Die Vorbereitung auf die ISTQB®-Zertifizierung erfolgt unter der Anleitung erfahrener Spezialisten. Die Academy stellt alle notwendigen Materialien und Ressourcen für eine gründliche Vorbereitung zur Verfügung, um sicherzustellen, dass Sie die Prüfung erfolgreich bestehen.'],
      ['Wo soll ich zuerst anfangen?', 'Nehmen Sie an Ihrem ersten kostenlosen Webinar teil, um zu erfahren, wie Sie Ihre Karriere als Softwaretester effektiv starten oder vorantreiben können. Es bietet die Möglichkeit, Fragen zu stellen und Antworten von Experten zu erhalten, die Ihnen dabei helfen, Ihren beruflichen Weg zu verbessern.'],
    ],
    webinarTitle: 'Das erwartet dich im Webinar',
    webinarIntroTitle: 'Für wen ist das Live-Webinar ein Muss?',
    webinarIntro: 'Einstieg ins SOFTWARETESTING – Zielgruppe und Nutzen des Webinars.',
    webinarItems: [
      ['Was verdient ein zertifizierter Softwaretester 2023?', 'Einblick in Gehaltsstrukturen und Karriereaussichten.'],
      ['Vorwelchen typischen Herausforderungen steht ein Tester?', 'Diskussion der gängigen Probleme und Hürden im Testmanagement.'],
      ['Staatliches Förderprogramm: Bildungsgutschein', 'Eine Förderung kann im Einzelfall möglich sein. Über Voraussetzungen, förderfähige Kosten und Bewilligung entscheiden die zuständige Agentur für Arbeit oder das Jobcenter. Bitte lassen Sie die Förderung vor einer Anmeldung schriftlich bestätigen.'],
      ['Was zeichnet einen erfolgreichen Softwaretester aus?', 'Wichtige Fähigkeiten und Eigenschaften eines erfolgreichen Testers.'],
    ],
    webinarClosing: 'In sechs Erfolgsschritten zum ISTQB® Certified Tester Foundation Level!',
    video: 'Video ANSCHAUEN',
    contactTitle: 'Kontakt',
    openingTitle: 'Öffnungszeiten:',
    opening: ['Montag - Freitag: 9:00 - 18:00 Uhr', 'Samstag: 10:00 - 14:00 Uhr'],
    follow: 'Folgen Sie uns auf sozialen Medien',
    location: 'Standort:',
    phone: 'Telefon:',
    email: 'E-Mail:',
    imprint: 'Impressum',
    close: 'Schließen',
  },
  en: {
    title: 'Educational programs for software testers',
    heroAccent: 'Educational programs for software testers:',
    heroRest: 'Seminars at a glance',
    lead: 'WAMOCON Academy GmbH is listed by ISTQB® as an accredited training provider for German-language CTFL 4.0 and Agile Tester 1.0 training materials. Our practical courses prepare professionals for the relevant certification examination.',
    benefitsTitle: 'Advantages of our courses',
    benefits: [
      ['Comprehensive training', 'Fundamentals and advanced techniques of software testing.'],
      ['Practice-oriented content', 'Practical insights and exercises.'],
      ['Career advancement', 'Preparation for certification and a successful IT career.'],
    ],
    individualTitle: 'Individual courses',
    teamTitle: 'Team courses',
    networkText: 'WAMOCON Academy students are given the unique opportunity to meet and interact with leading experts online and offline, opening up new career opportunities and expanding their professional network.',
    datesTitle: 'Dates at a glance',
    dates: [
      {
        month: 'Planned',
        rows: [['New course dates will be announced.', 'Planned']],
      },
    ] as ProgramDates[],
    moreDetails: 'More details',
    adviceTitle: 'Get advice',
    adviceText: 'Give us a call +49 6196 5838311, or leave your contact details below so that we can reach you and answer your questions.',
    form: { name: 'Your name', phone: 'Telephone', email: 'E-Mail', submit: 'Send request' },
    consent: 'Your inquiry to WAMOCON Academy GmbH is non-binding and does not constitute a purchase. Information about the processing of your data can be found in the privacy policy.',
    futureTitleAccent: 'Into the future with education:',
    futureTitleRest: 'Become an ISTQB® software tester at WAMOCON Academy',
    futureIntro: 'is the opportunity to achieve competence in the area of test management.',
    futureText: 'As an official ISTQB® partner, WAMOCON offers exclusive seminars in test management for beginners and career changers with intensive practical content. Our seminar participants and our own employees benefit from this!',
    stepsTitle: 'Steps to prepare for the certification exam',
    steps: [
      'Application',
      'Preparation for the seminar',
      'Participation in the seminar',
      '(Optional) Repetition of the contents of the seminar',
      'Certification ISTQB® Certified Tester Foundation Level',
      'New job Successful IT project',
    ],
    prep: [
      ['Optimal exam preparation', 'Preparation for the ISTQB® certification takes place under the guidance of experienced specialists. The Academy provides all the necessary materials and resources for thorough preparation to ensure that you pass the exam successfully.'],
      ['Where should I start first?', 'Attend your first free webinar to learn how to effectively start or advance your career as a software tester. It offers the opportunity to ask questions and get answers from experts to help you improve your career path.'],
    ],
    webinarTitle: 'What you can expect in the webinar',
    webinarIntroTitle: 'For whom is the live webinar a must?',
    webinarIntro: 'Entry into SOFTWARETESTING - Target group and benefits of the webinar.',
    webinarItems: [
      ['What will a certified software tester earn in 2023?', 'Insight into salary structures and career prospects.'],
      ['What typical challenges does a tester face?', 'Discussion of common problems and hurdles in test management.'],
      ['State funding program: Education voucher', 'Funding may be available in individual cases. The responsible employment agency or job centre decides eligibility, covered costs and approval. Please obtain written confirmation before registering.'],
      ['What makes a successful software tester?', 'Important skills and characteristics of a successful tester.'],
    ],
    webinarClosing: 'Six successful steps to ISTQB® Certified Tester Foundation Level!',
    video: 'WATCH video',
    contactTitle: 'Contact us',
    openingTitle: 'Opening hours:',
    opening: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
    follow: 'Follow us on social media',
    location: 'Location:',
    phone: 'Phone:',
    email: 'E-Mail:',
    imprint: 'Imprint',
    close: 'Close',
  },
} satisfies Record<Lang, Record<string, unknown>>;
