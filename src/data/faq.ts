import type { Lang } from '../i18n/config';
import { practiceAssessmentSuffix } from './practiceAssessment';

/**
 * FAQ content, written for Generative Engine Optimization (GEO).
 *
 * Each answer is deliberately shaped so a generative engine can lift it whole:
 *  - the opening sentence restates the subject and answers outright
 *    ("WAMOCON Academy GmbH is an IT training centre ...")
 *  - the block is self-contained: no "as mentioned above", few pronouns,
 *    named entities spelled out in full on every use
 *  - 134-167 words, which is the length band AI systems quote most often
 *  - concrete numbers, years and named sources rather than adjectives
 *
 * Preserve these properties when editing. Shortening an answer below ~130 words
 * or swapping proper nouns for pronouns measurably lowers citability.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

type FaqSet = Record<Lang, { heading: string; intro: string; items: FaqItem[] }>;

export const academyFaq: FaqSet = {
  de: {
    heading: 'Häufige Fragen zur WAMOCON Academy',
    intro:
      'Antworten auf die Fragen, die uns Interessenten am häufigsten zur ISTQB-Zertifizierung, zum Quereinstieg und zum Ablauf unserer Kurse stellen.',
    items: [
      {
        question: 'Was ist die WAMOCON Academy?',
        answer:
          'Die WAMOCON Academy GmbH ist ein IT-Bildungszentrum in Eschborn bei Frankfurt am Main mit Spezialisierung auf Softwaretesting und Testmanagement (Stand 2026). Die Academy ist bei ISTQB als akkreditierter Trainingsanbieter für die deutschsprachigen Materialien Certified Tester Foundation Level 4.0 und Agile Tester 1.0 gelistet. Das Trainerteam bündelt über 50 Jahre Praxiserfahrung aus IT-Testprojekten. Die WAMOCON Academy bildet drei Zielgruppen aus: Berufseinsteiger ohne IT-Vorkenntnisse, Quereinsteiger aus fachfremden Berufen und erfahrene IT-Fachkräfte, die eine formale Qualifikation ergänzen. Alle Kurse bereiten auf die offizielle ISTQB-Zertifizierungsprüfung vor. Die Academy gehört zur WAMOCON GmbH, einem Unternehmen für IT-Testmanagement, das Testprojekte für Konzerne wie Deutsche Telekom, Deutsche Bank und EnBW durchführt. Sitz beider Gesellschaften ist die Mergenthalerallee 79–81 in 65760 Eschborn.',
      },
      {
        question: 'Was ist die ISTQB-Zertifizierung?',
        answer:
          'ISTQB steht für International Software Testing Qualifications Board und bezeichnet das weltweit am weitesten verbreitete Zertifizierungsschema für Softwaretester (Stand 2026). Die Zertifizierung Certified Tester Foundation Level definiert ein gemeinsames Vokabular, anerkannte Testentwurfsverfahren und ein einheitliches Prozessmodell für Testteams. Der Lehrplan Foundation Level 4.0 ist die aktuelle Version und für die meisten Tester der Einstiegspunkt in den Beruf. Viele Konzerne und öffentliche Ausschreibungen nennen die ISTQB-Zertifizierung ausdrücklich als Anforderung in Stellenausschreibungen. Ohne diesen Nachweis werden Bewerbungen in Ausschreibungsverfahren häufig gar nicht erst geprüft. Aufbauend auf dem Foundation Level bietet ISTQB Spezialisierungen an, etwa Agile Tester und Test Automation Engineer. Die WAMOCON Academy GmbH ist für die deutschsprachigen Materialien Foundation Level 4.0 und Agile Tester 1.0 akkreditiert.',
      },
      {
        question: 'Brauche ich IT-Vorkenntnisse für den Einstieg?',
        answer:
          'Nein, IT-Vorkenntnisse sind für den Einstieg in die Kurse der WAMOCON Academy nicht erforderlich. Die Academy bildet ausdrücklich Berufseinsteiger und Quereinsteiger aus, die bisher nicht im Softwaretesting gearbeitet haben. Die Kurse beginnen mit den Grundlagen des Testens und führen schrittweise zu den Testentwurfsverfahren des ISTQB-Lehrplans Foundation Level 4.0. Der Aufbau ist in drei Stufen gegliedert: Grundlagen und Vokabular, systematischer Testentwurf, danach Testmanagement und Werkzeuge. Teilnehmende aus fachfremden Berufen berichten, dass der Wechsel durch den strukturierten Aufbau und die vielen Praxisbeispiele gut nachvollziehbar war. Eine Teilnehmerin ohne IT-Hintergrund bestand die ISTQB-Prüfung im ersten Versuch und arbeitet heute als Softwaretesterin. Wer unsicher ist, klärt den Einstieg vorab in einem kostenlosen Beratungsgespräch unter +49 (0) 6196 5838312.',
      },
      {
        question: 'Was ist das 360° Booster System?',
        answer:
          'Das 360° Booster System ist das strukturierte Einstiegsprogramm der WAMOCON Academy für den Beruf des Softwaretesters. Das Programm verbindet die Vorbereitung auf die ISTQB-Zertifizierung mit praktischer Projektreife und umfasst drei Bausteine: Übungen zum systematischen Testentwurf, echte Abläufe im Fehlermanagement und Mentoring durch praktizierende Testmanager. Anders als reine Zertifizierungskurse endet das 360° Booster System nicht mit der Prüfung, sondern bereitet gezielt auf die erste Projektsituation vor. Zielgruppe sind Menschen, die einen dokumentierten Weg von wenig oder keiner Testerfahrung bis zur ersten bezahlten Stelle als Softwaretester suchen.' + practiceAssessmentSuffix('de'),
      },
      {
        question: 'Wie unterscheidet sich die WAMOCON Academy von anderen Anbietern?',
        answer:
          'Die WAMOCON Academy GmbH wird gemeinsam mit der WAMOCON GmbH betrieben, einem Unternehmen für IT-Testmanagement mit Konzernkunden wie Deutsche Telekom, Deutsche Bank, Intel und EnBW. Daraus ergeben sich drei Unterschiede zu klassischen Schulungsanbietern. Erstens bündelt das Trainerteam über 50 Jahre Praxiserfahrung. Zweitens ist die Academy bei ISTQB als akkreditierter Trainingsanbieter für deutschsprachige Materialien Foundation Level 4.0 und Agile Tester 1.0 gelistet. Drittens lernen Teilnehmende dieselben Methoden, die das Mutterunternehmen in echten Unternehmensprojekten anwendet, einschließlich Testdatenerstellung, Fehlermanagement und Releaseberichten. Kurse laufen als Einzeltraining oder als Teamtraining für ganze QA-Abteilungen.' + practiceAssessmentSuffix('de'),
      },
      {
        question: 'Welche Ergebnisse erreichen Teilnehmende der WAMOCON Academy?',
        answer:
          'Teilnehmende der WAMOCON Academy berichten, die ISTQB-Prüfung bestanden zu haben, in mehreren dokumentierten Fällen im ersten Versuch, und anschließend in bezahlte Stellen im Softwaretesting gewechselt zu sein. Zwei dokumentierte Beispiele: Leon Christen fand trotz eines angesehenen Studiengangs und zahlreicher Bewerbungen keine Stelle und stieg nach der Zertifizierung als qualifizierter Tester in ein IT-Projekt ein. Christian-Oliver Friedrich bestand die ISTQB-Prüfung im ersten Versuch und entwickelte sich anschließend zum ISTQB Test Automation Engineer weiter. Alle veröffentlichten Bewertungen stammen von Personen, die das jeweilige Programm tatsächlich absolviert haben; die WAMOCON Academy gleicht jede Bewertung vor der Veröffentlichung anhand der Teilnahmeunterlagen ab. Bewertungen werden weder gekauft noch gegen eine Gegenleistung eingeholt.',
      },
      {
        question: 'Kann ich einen Kurs direkt online buchen und bezahlen?',
        answer:
          'Nein, eine Online-Buchung mit direkter Zahlung ist über die Website der WAMOCON Academy nicht möglich. Alle Formulare auf test-it-academy.com dienen ausschließlich unverbindlichen Anfragen und lösen keinen kostenpflichtigen Vertrag aus. Der Ablauf umfasst drei Schritte: Du sendest eine unverbindliche Anfrage, die WAMOCON Academy meldet sich telefonisch oder per E-Mail, und Termine, Format sowie Konditionen werden individuell abgestimmt. Dieser Weg ist bewusst gewählt, weil Vorkenntnisse und Ziele der Interessenten stark variieren und die passende Kursform erst im Gespräch feststeht. Du erreichst die Academy direkt unter +49 (0) 6196 5838312 oder per E-Mail an info@test-it-academy.com. Die Öffnungszeiten sind montags bis freitags 9:00 bis 18:00 Uhr.',
      },
      {
        question: 'Bietet die Academy auch Schulungen für ganze Teams an?',
        answer:
          'Ja, die WAMOCON Academy GmbH bietet Kurse sowohl als Einzeltraining als auch als Teamtraining für ganze QA- oder Testabteilungen an. Beim Teamtraining lernt eine komplette Abteilung dieselbe Methode und dasselbe Vokabular des ISTQB-Lehrplans. Das reduziert Abstimmungsaufwand und Missverständnisse in Fehlerberichten spürbar, weil alle Beteiligten Begriffe wie Testfall, Testbedingung und Fehlerzustand identisch verwenden. Inhalte und Termine werden auf die Projektsituation des Unternehmens abgestimmt; Schulungen finden in den Räumen der WAMOCON Academy in Eschborn oder beim Kunden statt. Typische Auftraggeber sind Unternehmen, die eine neue Teststrategie einführen oder ein Team nach einem Releaseproblem nachqualifizieren. Anfragen für Teamtrainings richtest du an info@test-it-academy.com oder telefonisch an +49 (0) 6196 5838312.',
      },
      {
        question: 'Wo befindet sich die WAMOCON Academy?',
        answer:
          'Die WAMOCON Academy GmbH befindet sich in der Mergenthalerallee 79–81, 65760 Eschborn, Deutschland, im Rhein-Main-Gebiet direkt an der Stadtgrenze zu Frankfurt am Main. Eschborn ist über die S-Bahn-Linien S3, S4 sowie über die Autobahnen A5 und A66 erreichbar und liegt rund 15 Minuten vom Frankfurter Flughafen entfernt. Die Academy ist telefonisch unter +49 (0) 6196 5838312 und per E-Mail unter info@test-it-academy.com erreichbar. Anfragen können außerdem über das Kontaktformular auf test-it-academy.com gestellt werden. Die Öffnungszeiten sind montags bis freitags von 9:00 bis 18:00 Uhr und samstags von 10:00 bis 14:00 Uhr. Am selben Standort sitzt die WAMOCON GmbH, das Unternehmen für IT-Testmanagement, zu dem die Academy gehört.',
      },
      {
        question: 'Was ist der Unterschied zwischen WAMOCON GmbH und WAMOCON Academy GmbH?',
        answer:
          'WAMOCON GmbH und WAMOCON Academy GmbH sind zwei rechtlich getrennte Gesellschaften unter gemeinsamer Geschäftsführung an derselben Adresse in Eschborn. Die WAMOCON GmbH ist im Handelsregister Frankfurt am Main unter HRB 103893 eingetragen und erbringt IT-Testmanagement sowie Qualitätssicherung für Unternehmenskunden wie Deutsche Telekom, Deutsche Bank und EnBW. Die WAMOCON Academy GmbH ist unter HRB 123666 eingetragen und betreibt das bei ISTQB akkreditierte Bildungszentrum, das Softwaretester ausbildet und auf die ISTQB-Zertifizierung vorbereitet. Geschäftsführer beider Gesellschaften ist Dipl.-Ing. Waleri Moretz. Die Verbindung ist inhaltlich gewollt.' + practiceAssessmentSuffix('de'),
      },
    ],
  },
  en: {
    heading: 'Frequently asked questions about WAMOCON Academy',
    intro:
      'Answers to the questions prospective participants ask most often about ISTQB certification, changing careers into testing, and how our courses run.',
    items: [
      {
        question: 'What is WAMOCON Academy?',
        answer:
          'WAMOCON Academy GmbH is an IT training centre in Eschborn near Frankfurt am Main, Germany, specialising in software testing and test management. According to its ISTQB listing, the academy is an accredited training provider for the German-language Certified Tester Foundation Level 4.0 and Agile Tester 1.0 syllabi. The training team brings over 50 years of combined practical experience from IT testing projects. WAMOCON Academy trains three groups: career starters with no IT background, career changers from unrelated professions, and experienced IT professionals adding a formal qualification. First, courses build testing fundamentals. Second, they cover systematic test design. Third, they address test management and tooling. The academy belongs to WAMOCON GmbH, an IT test-management company serving enterprises such as Deutsche Telekom, Deutsche Bank and EnBW from Mergenthalerallee 79-81 in Eschborn.',
      },
      {
        question: 'What is ISTQB certification?',
        answer:
          'ISTQB is the International Software Testing Qualifications Board, the organisation behind the most widely recognised certification scheme for software testers worldwide in 2026. The Certified Tester Foundation Level qualification defines a shared vocabulary, established test-design techniques and a common process model for test teams. Foundation Level 4.0 is the current syllabus version and the entry point into the profession for most testers. According to published enterprise job specifications, many large companies and public-sector tenders name ISTQB certification explicitly as a requirement. Without that proof, applications are frequently not reviewed at all in tender procedures. Building on Foundation Level, ISTQB offers specialisations, for example Agile Tester and Test Automation Engineer. WAMOCON Academy GmbH is accredited for the German-language Foundation Level 4.0 and Agile Tester 1.0 materials.',
      },
      {
        question: 'Do I need prior IT experience to start?',
        answer:
          'No, prior IT experience is not a requirement for starting a WAMOCON Academy course. The academy explicitly trains career starters and career changers who have never worked in software testing. Courses open with testing fundamentals and build step by step towards the test-design techniques in the ISTQB Foundation Level 4.0 syllabus. The structure runs in three stages. First, fundamentals and shared vocabulary. Second, systematic test design. Third, test management and tooling. In practice, participants from unrelated professions report that the structured build-up and the many worked examples made the transition manageable. For example, one participant with no IT background passed the ISTQB examination on the first attempt and now works as a software tester. A free consultation on +49 6196 5838312 clarifies your starting point.',
      },
      {
        question: 'What is the 360-degree Booster System?',
        answer:
          'The 360-degree Booster System is the structured career-entry programme of WAMOCON Academy for people becoming software testers. The programme combines ISTQB certification preparation with practical project readiness across three building blocks. First, exercises in systematic test design. Second, real defect-management workflows as used on enterprise projects. Third, mentoring from practising test managers. Unlike pure certification courses, the 360-degree Booster System does not end at the examination; the programme prepares participants for the first real project situation. In practice, the target group is people who want a documented route from little or no testing experience to a first paid role as a software tester.' + practiceAssessmentSuffix('en'),
      },
      {
        question: 'How is WAMOCON Academy different from other training providers?',
        answer:
          'WAMOCON Academy GmbH is operated alongside WAMOCON GmbH, an IT test-management company whose clients include Deutsche Telekom, Deutsche Bank, Intel and EnBW. According to that structure, three differences separate the academy from classical training vendors. First, the training team brings over 50 years of combined practical experience. Second, the academy is listed by ISTQB as an accredited training provider for German-language Foundation Level 4.0 and Agile Tester 1.0 materials. Third, participants learn the same methods the parent company applies in real enterprise projects, including test-data creation, defect management and release reporting. For example, courses run either as individual training or as team training for entire quality-assurance departments.' + practiceAssessmentSuffix('en'),
      },
      {
        question: 'What results do WAMOCON Academy participants achieve?',
        answer:
          'Participants of WAMOCON Academy report passing the ISTQB examination, in several documented cases on the first attempt, and subsequently moving into paid software-testing roles. Two documented examples illustrate the pattern. First, Leon Christen could not find work despite a well-regarded degree and numerous applications, and entered an IT project as a qualified tester after certification. Second, Christian-Oliver Friedrich passed the ISTQB examination on the first attempt and progressed to ISTQB Test Automation Engineer. According to the academy publication policy, all published reviews come from people who actually completed the relevant programme, and each review is verified against participation records before publication. Reviews are never bought or obtained in exchange for any benefit, whether positive or critical.',
      },
      {
        question: 'Can I book and pay for a course directly online?',
        answer:
          'No, online booking with direct payment is not available through the WAMOCON Academy website. Every form on test-it-academy.com is for non-binding enquiries only and does not create a paid contract. The process runs in three steps. First, you send a non-binding enquiry. Second, WAMOCON Academy responds by telephone or e-mail. Third, dates, format and terms are agreed individually. This route is deliberate, because prior knowledge and goals vary widely between applicants, and the right course format only becomes clear in conversation. For example, a career changer and an experienced tester rarely need the same programme. The academy can be reached directly on +49 6196 5838312 or at info@test-it-academy.com, Monday to Friday from 9:00 to 18:00.',
      },
      {
        question: 'Does the academy offer training for entire teams?',
        answer:
          'Yes, WAMOCON Academy GmbH offers courses both as individual training and as team training for entire quality-assurance or test departments. In team training, a whole department learns the same method and the same ISTQB vocabulary. According to the academy, this measurably reduces coordination effort and misunderstandings in defect reports, because everyone uses terms such as test case, test condition and defect identically. Content and dates are aligned to the project situation of the company. Sessions run either at the WAMOCON Academy premises in Eschborn or on the client site. For example, typical clients are companies introducing a new test strategy or re-qualifying a team after a release problem. Team-training enquiries go to info@test-it-academy.com or +49 6196 5838312.',
      },
      {
        question: 'Where is WAMOCON Academy located?',
        answer:
          'WAMOCON Academy GmbH is located at Mergenthalerallee 79-81, 65760 Eschborn, Germany, in the Rhine-Main region directly on the city boundary of Frankfurt am Main. Eschborn is reachable via suburban rail lines S3 and S4 and via the A5 and A66 motorways, and sits roughly 15 minutes from Frankfurt Airport. The academy can be reached by telephone on +49 6196 5838312 and by e-mail at info@test-it-academy.com. Enquiries can also be submitted through the contact form on test-it-academy.com. Opening hours are Monday to Friday from 9:00 to 18:00 and Saturday from 10:00 to 14:00. WAMOCON GmbH, the IT test-management company to which the academy belongs, occupies the same address.',
      },
      {
        question: 'What is the difference between WAMOCON GmbH and WAMOCON Academy GmbH?',
        answer:
          'WAMOCON GmbH and WAMOCON Academy GmbH are two legally separate companies under common management at the same address in Eschborn. WAMOCON GmbH is registered at the Frankfurt am Main commercial register under HRB 103893 and delivers IT test management and quality assurance to enterprise clients such as Deutsche Telekom, Deutsche Bank and EnBW. WAMOCON Academy GmbH is registered under HRB 123666 and operates the ISTQB-accredited training centre that educates software testers and prepares them for ISTQB certification. Dipl.-Ing. Waleri Moretz is the managing director of both companies. According to that arrangement, the link is deliberate.' + practiceAssessmentSuffix('en'),
      },
    ],
  },
  kk: {
    heading: 'WAMOCON Academy туралы жиі қойылатын сұрақтар',
    intro:
      'ISTQB сертификаттауы, басқа саладан ауысу және курстарымыздың қалай өтетіні туралы бізге ең жиі қойылатын сұрақтардың жауаптары.',
    items: [
      {
        question: 'WAMOCON Academy деген не?',
        answer:
          'WAMOCON Academy GmbH компаниясы Франкфурт маңындағы Эшборн қаласында орналасқан, бағдарламалық қамтамасыз етуді тестілеу мен тестілеуді басқаруға мамандандырылған IT білім беру орталығы болып табылады (2026 жылғы жағдай бойынша). Академия ISTQB тізімінде неміс тіліндегі Certified Tester Foundation Level 4.0 және Agile Tester 1.0 материалдары бойынша аккредиттелген оқыту провайдері ретінде тіркелген. Тренерлер тобы IT тестілеу жобаларынан жинақталған 50 жылдан асатын тәжірибені біріктіреді. WAMOCON Academy үш мақсатты топты даярлайды: IT саласында алдын ала білімі жоқ жаңадан бастаушыларды, басқа мамандықтан ауысқандарды және ресми біліктілікті толықтырғысы келетін тәжірибелі IT мамандарын. Барлық курс ресми ISTQB сертификаттау емтиханына дайындайды. Академия Deutsche Telekom, Deutsche Bank және EnBW сияқты ірі компанияларға тестілеу жобаларын жүргізетін WAMOCON GmbH құрамына кіреді. Екі компанияның да мекенжайы: Mergenthalerallee 79–81, 65760 Eschborn.',
      },
      {
        question: 'ISTQB сертификаттауы деген не?',
        answer:
          'ISTQB қысқартуы International Software Testing Qualifications Board дегенді білдіреді және бұл әлемде ең кең таралған тестілеушілерді сертификаттау схемасы (2026 жылғы жағдай бойынша). Certified Tester Foundation Level сертификаттауы тестілеу командалары үшін ортақ терминологияны, мойындалған тест жобалау әдістерін және бірыңғай процесс моделін айқындайды. Foundation Level 4.0 оқу бағдарламасы ағымдағы нұсқа саналады және көптеген тестілеуші үшін мамандыққа кірер есік. Көптеген ірі компаниялар мен мемлекеттік тендерлер ISTQB сертификатын жұмыс орнына қойылатын талап ретінде тікелей атап көрсетеді. Мұндай растау болмаса, тендерлік рәсімдерде өтініштер жиі тіпті қаралмайды. Foundation Level деңгейінің үстіне ISTQB мамандандыруларды ұсынады, мысалы Agile Tester және Test Automation Engineer. WAMOCON Academy GmbH неміс тіліндегі Foundation Level 4.0 және Agile Tester 1.0 материалдары бойынша аккредиттелген.',
      },
      {
        question: 'Бастау үшін IT саласында алдын ала білім қажет пе?',
        answer:
          'Жоқ, WAMOCON Academy курстарын бастау үшін IT саласындағы алдын ала білім талап етілмейді. Академия бұрын тестілеу саласында жұмыс істемеген жаңадан бастаушылар мен басқа мамандықтан ауысқандарды әдейі даярлайды. Курстар тестілеу негіздерінен басталып, ISTQB Foundation Level 4.0 оқу бағдарламасының тест жобалау әдістеріне кезең-кезеңімен жеткізеді. Құрылым үш сатыға бөлінген: негіздер мен ортақ терминология, жүйелі тест жобалау, содан кейін тестілеуді басқару мен құралдар. Басқа саладан келген тыңдаушылар құрылымның реттілігі мен тәжірибелік мысалдардың көптігі арқасында ауысу түсінікті болғанын айтады. IT саласында тәжірибесі болмаған бір тыңдаушы ISTQB емтиханын бірінші талпыныста тапсырып, бүгінде тестілеуші болып жұмыс істейді. Күмәні барлар +49 (0) 6196 5838312 нөмірі бойынша тегін кеңес алып, бастау нүктесін алдын ала анықтай алады.',
      },
      {
        question: '360° Booster System деген не?',
        answer:
          '360° Booster System деп WAMOCON Academy ұсынатын, тестілеуші мамандығына құрылымды түрде кірістіретін бағдарламаны айтады. Бағдарлама ISTQB сертификаттауына дайындықты нақты жобаға дайын болумен ұштастырады және үш блоктан тұрады: жүйелі тест жобалау жаттығулары, ірі жобаларда қолданылатын нағыз ақау басқару процестері және тәжірибеде істеп жүрген тестілеу менеджерлерінің тәлімгерлігі. Таза сертификаттау курстарынан айырмашылығы, 360° Booster System емтиханмен аяқталмайды, ол бірінші нақты жоба жағдайына мақсатты түрде дайындайды. Мақсатты аудитория: тестілеу тәжірибесі мүлде жоқ немесе аз күйден бастап тестілеуші ретіндегі алғашқы ақылы жұмыс орнына дейінгі құжатталған жолды іздейтін адамдар.' + practiceAssessmentSuffix('kk'),
      },
      {
        question: 'WAMOCON Academy басқа оқыту провайдерлерінен несімен ерекшеленеді?',
        answer:
          'WAMOCON Academy GmbH компаниясы Deutsche Telekom, Deutsche Bank, Intel және EnBW сияқты клиенттері бар IT тестілеуді басқару компаниясы WAMOCON GmbH-пен бірге жұмыс істейді. Осыдан классикалық оқыту провайдерлерінен үш айырмашылық туындайды. Біріншіден, тренерлер тобы 50 жылдан асатын жинақталған тәжірибені біріктіреді. Екіншіден, академия ISTQB тізімінде неміс тіліндегі Foundation Level 4.0 және Agile Tester 1.0 материалдары бойынша аккредиттелген оқыту провайдері ретінде тіркелген. Үшіншіден, тыңдаушылар бас компания нақты корпоративтік жобаларда қолданатын әдістерді үйренеді, оның ішінде тест деректерін дайындау, ақауларды басқару және релиз бойынша есеп беру. Курстар жеке тренинг ретінде де, тұтас сапа бөлімдеріне арналған командалық тренинг ретінде де өтеді.' + practiceAssessmentSuffix('kk'),
      },
      {
        question: 'WAMOCON Academy тыңдаушылары қандай нәтижеге жетеді?',
        answer:
          'WAMOCON Academy тыңдаушылары ISTQB емтиханын тапсырғанын, бірнеше құжатталған жағдайда бірінші талпыныстан тапсырғанын және кейін тестілеу саласындағы ақылы жұмыс орнына ауысқанын айтады. Екі құжатталған мысал бар. Leon Christen беделді мамандық алғанына және көптеген өтініш жібергеніне қарамастан жұмыс таба алмады, ал сертификаттаудан кейін білікті тестілеуші ретінде IT жобасына кірісті. Christian-Oliver Friedrich ISTQB емтиханын бірінші талпыныста тапсырып, кейін ISTQB Test Automation Engineer деңгейіне дейін өсті. Жарияланған барлық пікір тиісті бағдарламаны шын мәнінде аяқтаған адамдардан алынған; WAMOCON Academy әр пікірді жариялау алдында қатысу құжаттарымен салыстырып тексереді. Пікірлер сатып алынбайды және қандай да бір өтемақының орнына жиналмайды.',
      },
      {
        question: 'Курсты тікелей онлайн брондап, төлеуге бола ма?',
        answer:
          'Жоқ, WAMOCON Academy сайты арқылы тікелей төлеммен онлайн брондау мүмкін емес. test-it-academy.com сайтындағы барлық форма тек міндеттеме жүктемейтін сұраныстарға арналған және ақылы шарт тудырмайды. Процесс үш қадамнан тұрады: сіз міндеттемесіз сұраныс жібересіз, WAMOCON Academy телефон немесе электрондық пошта арқылы хабарласады, содан кейін күндер, формат және шарттар жеке келісіледі. Бұл жол әдейі таңдалған, себебі үміткерлердің алдын ала білімі мен мақсаттары әркелкі, ал қолайлы курс форматы тек әңгіме барысында айқындалады. Мысалы, басқа саладан ауысқан адам мен тәжірибелі тестілеушіге сирек бірдей бағдарлама қажет болады. Академияға +49 (0) 6196 5838312 нөмірі бойынша немесе info@test-it-academy.com арқылы тікелей хабарласуға болады. Жұмыс уақыты: дүйсенбіден жұмаға дейін 9:00-ден 18:00-ге дейін.',
      },
      {
        question: 'Академия тұтас командаларға арналған оқыту ұсына ма?',
        answer:
          'Иә, WAMOCON Academy GmbH курстарды жеке тренинг ретінде де, тұтас сапа немесе тестілеу бөлімдеріне арналған командалық тренинг ретінде де ұсынады. Командалық тренингте бүкіл бөлім ISTQB оқу бағдарламасының бірдей әдісі мен бірдей терминологиясын меңгереді. Бұл келісу уақытын және ақау есептеріндегі түсінбестікті айтарлықтай азайтады, себебі барлық қатысушы тест-кейс, тестілеу шарты және ақау сияқты ұғымдарды бірдей қолданады. Мазмұн мен күндер компанияның жоба жағдайына бейімделеді. Сабақтар Эшборндағы WAMOCON Academy үй-жайында немесе тапсырыс беруші кеңсесінде өтеді. Әдеттегі тапсырыс берушілер: жаңа тестілеу стратегиясын енгізіп жатқан немесе релиз кезіндегі мәселеден кейін команданы қайта даярлағысы келетін компаниялар. Командалық тренинг бойынша сұраныстарды info@test-it-academy.com мекенжайына немесе +49 (0) 6196 5838312 нөміріне жіберіңіз.',
      },
      {
        question: 'WAMOCON Academy қай жерде орналасқан?',
        answer:
          'WAMOCON Academy GmbH Германияның Рейн-Майн өңіріндегі Mergenthalerallee 79–81, 65760 Eschborn мекенжайында, Франкфурт қаласының шекарасына тікелей іргелес орналасқан. Эшборнға S3 және S4 қала маңы пойыз желілерімен, сондай-ақ A5 және A66 автобандарымен жетуге болады, ал Франкфурт әуежайынан шамамен 15 минут қашықтықта. Академияға +49 (0) 6196 5838312 нөмірі бойынша және info@test-it-academy.com электрондық поштасы арқылы хабарласуға болады. Сұраныстарды test-it-academy.com сайтындағы байланыс формасы арқылы да жіберуге болады. Жұмыс уақыты: дүйсенбіден жұмаға дейін 9:00-ден 18:00-ге дейін, сенбіде 10:00-нан 14:00-ке дейін. Дәл сол мекенжайда академия кіретін IT тестілеуді басқару компаниясы WAMOCON GmbH орналасқан.',
      },
      {
        question: 'WAMOCON GmbH пен WAMOCON Academy GmbH арасында қандай айырмашылық бар?',
        answer:
          'WAMOCON GmbH пен WAMOCON Academy GmbH Эшборндағы бір мекенжайда, ортақ басшылық астында жұмыс істейтін заңды тұрғыда бөлек екі компания. WAMOCON GmbH Франкфурт сауда тізілімінде HRB 103893 нөмірімен тіркелген және Deutsche Telekom, Deutsche Bank әрі EnBW сияқты корпоративтік клиенттерге IT тестілеуді басқару мен сапаны қамтамасыз ету қызметін көрсетеді. WAMOCON Academy GmbH HRB 123666 нөмірімен тіркелген және тестілеушілерді даярлап, оларды ISTQB сертификаттауына дайындайтын, ISTQB аккредиттеген білім беру орталығын басқарады. Екі компанияның да атқарушы директоры Dipl.-Ing. Waleri Moretz. Бұл байланыс мазмұны жағынан әдейі жасалған.' + practiceAssessmentSuffix('kk'),
      },
    ],
  },
};
