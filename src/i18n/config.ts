export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

export type NavLink = {
  key: string;
  de: { label: string; href: string };
  en: { label: string; href: string };
  children?: NavLink[];
};

export const nav: NavLink[] = [
  {
    key: 'home',
    de: { label: 'Startseite', href: '/' },
    en: { label: 'Start page', href: '/en/' },
  },
  {
    key: 'about-group',
    de: { label: 'Über uns', href: '/ber-die-akademie/' },
    en: { label: 'About us', href: '/en/about-us/' },
    children: [
      {
        key: 'about',
        de: { label: 'Über die Academy', href: '/ber-die-akademie/' },
        en: { label: 'About the Academy', href: '/en/about-us/' },
      },
      {
        key: 'booster',
        de: { label: '360° Booster System', href: '/360-booster-system/' },
        en: { label: '360° Booster System', href: '/en/360-booster-system/' },
      },
      {
        key: 'reviews',
        de: { label: 'Bewertungen', href: '/bewertungen/' },
        en: { label: 'Reviews', href: '/en/reviews/' },
      },
    ],
  },
  {
    key: 'certification',
    de: { label: 'ISTQB®-Zertifizierung', href: '/istqb-zertifizierung/' },
    en: { label: 'ISTQB® certification', href: '/en/istqb-certification/' },
  },
  {
    key: 'ditele',
    de: { label: 'DiTeLe App', href: '/ditele-app/' },
    en: { label: 'DiTeLe App', href: '/en/ditele-app/' },
  },
  {
    key: 'contact',
    de: { label: 'Kontakt', href: '/kontakt/' },
    en: { label: 'Contact us', href: '/en/contacts/' },
  },
];

export const legalNav = {
  privacy: {
    de: { label: 'Datenschutz', href: '/datenschutz/' },
    en: { label: 'Privacy policy', href: '/privacy-policy/' },
  },
  imprint: {
    de: { label: 'Impressum', href: '/impressum/' },
    en: { label: 'Imprint', href: '/imprint/' },
  },
};

export const ui = {
  de: {
    'lang.switch': 'EN',
    'lang.label': 'Sprache wechseln',
    'nav.menu': 'Menü',
    'nav.close': 'Schließen',
    'cookie.text': 'Externe Medien werden nur mit Ihrer Einwilligung geladen.',
    'cookie.accept': 'Alle akzeptieren',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.navigation': 'Navigation',
    'footer.follow': 'Folgen Sie uns auf sozialen Medien',
    'form.title': 'Beratung erhalten',
    'form.text':
      'Rufen Sie uns an +49 (0) 6196 5838312, oder hinterlassen Sie unten Ihre Kontaktdaten, damit wir Sie erreichen und Ihre Fragen beantworten können.',
    'form.name': 'Ihr Name',
    'form.phone': 'Telefon',
    'form.email': 'E-Mail',
    'form.message': 'Ihre Frage',
    'form.submit': 'Anfrage senden',
    'form.consent.pre': 'Informationen zur Verarbeitung Ihrer Anfrage finden Sie in der ',
    'form.consent.link': 'Datenschutzerklärung',
    'form.consent.post': '. Mit dem Absenden entsteht kein kostenpflichtiger Vertrag.',
  },
  en: {
    'lang.switch': 'DE',
    'lang.label': 'Switch language',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'cookie.text': 'External media is loaded only with your consent.',
    'cookie.accept': 'Accept all',
    'footer.rights': 'All rights reserved.',
    'footer.navigation': 'Navigation',
    'footer.follow': 'Follow us on social media',
    'form.title': 'Receive advice',
    'form.text':
      'Give us a call +49 (0) 6196 5838312, or leave your contact details below so that we can reach you and answer your questions.',
    'form.name': 'Your name',
    'form.phone': 'Telephone',
    'form.email': 'E-Mail',
    'form.message': 'Your question',
    'form.submit': 'Send request',
    'form.consent.pre': 'Information about how we process your request is provided in the ',
    'form.consent.link': 'privacy policy',
    'form.consent.post': '. Submitting this form does not create a paid contract.',
  },
} as const;

export const company = {
  name: 'WAMOCON Academy GmbH',
  street: 'Mergenthalerallee 79–81',
  city: '65760 Eschborn',
  phone: '+49 (0) 6196 5838312',
  phoneHref: 'tel:+4961965838312',
  email: 'info@test-it-academy.com',
  emailHref: 'mailto:info@test-it-academy.com',
  hours: {
    de: ['Montag - Freitag: 9:00 - 18:00 Uhr', 'Samstag: 10:00 - 14:00 Uhr'],
    en: ['Monday - Friday: 9:00 am - 6:00 pm', 'Saturday: 10:00 am - 2:00 pm'],
  },
  social: {
    youtube: 'https://www.youtube.com/@WAMOCONACADEMY',
    facebook: 'https://tr-tr.facebook.com/WAMOCONACADEMY/',
    linkedin: 'https://de.linkedin.com/company/wamocon-gmbh',
    instagram: 'https://www.instagram.com/bildungszentrum_wma/',
  },
} as const;
