export const CATEGORIES = [
  "Build",
  "Compete",
  "Identity",
  "Industry",
  "Learn",
  "Research",
] as const;
export type Category = (typeof CATEGORIES)[number];

/** Samueli's seven departments. Clubs list who they're pitched at; an empty
    list means open to every major, which most of them are. */
export const MAJORS = [
  "Bioengineering",
  "Chemical Engineering",
  "Civil & Environmental",
  "Computer Science",
  "Electrical & Computer",
  "Materials Science",
  "Mechanical & Aerospace",
] as const;
export type Major = (typeof MAJORS)[number];

export type Org = {
  /** Full name with the acronym in parentheses, where one exists. */
  name: string;
  blurb: string;
  /** Most clubs are genuinely more than one of these. */
  categories: Category[];
  /** Empty = open to all majors. */
  majors: Major[];
  /** Omitted for groups with no working public site. */
  website?: string;
};

export const orgs: Org[] = [
  {
    name: "3D Printing for Everyone (3D4E)",
    blurb:
      "An intercollegiate network of 3D printing and rapid-prototyping enthusiasts running modeling workshops and builds.",
    categories: ["Build", "Learn"],
    majors: [],
    website: "https://3d4eatucla.github.io/",
  },
  {
    name: "AI Safety at UCLA",
    blurb:
      "Reading groups, fellowships, and projects on making advanced AI systems safe and aligned.",
    categories: ["Research", "Learn"],
    majors: ["Computer Science"],
    website: "https://aisafetyatucla.org/",
  },
  {
    name: "American Indian Science and Engineering Society (AISES) & Bearospace",
    blurb:
      "The only professional society created by and for Native people in STEM. Part of the CEED Tri-Org with SOLES and NSBE; its Bearospace project builds and launches rockets.",
    categories: ["Identity", "Build", "Learn"],
    majors: [],
    website: "https://sites.google.com/g.ucla.edu/ucla-aises/about-us",
  },
  {
    name: "American Institute of Aeronautics and Astronautics (AIAA)",
    blurb:
      "Company info sessions, workshops, facility tours, and the front door to Rocket Project, Design Build Fly, and UAS.",
    categories: ["Build", "Industry"],
    majors: ["Mechanical & Aerospace"],
    website: "http://aiaa.seas.ucla.edu/",
  },
  {
    name: "AIAA Design Build Fly (DBF)",
    blurb:
      "An annual competition: design and fabricate a radio-controlled airplane that meets a set of performance requirements, then fly it.",
    categories: ["Compete", "Build"],
    majors: ["Mechanical & Aerospace"],
    website: "https://www.dbfucla.com/",
  },
  {
    name: "AIAA Uncrewed Aerial Systems (UAS)",
    blurb:
      "UCLA's undergraduate aerial robotics team — designing, manufacturing, and testing autonomous drone hardware and software, with technical workshops to get you there.",
    categories: ["Compete", "Build", "Research"],
    majors: ["Mechanical & Aerospace", "Electrical & Computer"],
    website: "https://www.uasatucla.com/",
  },
  {
    name: "American Institute of Chemical Engineers (AIChE)",
    blurb:
      "Networking, career, and mentorship events, plus Chem-E Car: a vehicle powered entirely by chemical reactions.",
    categories: ["Learn", "Compete", "Industry"],
    majors: ["Chemical Engineering"],
    website: "https://www.aicheatucla.com/",
  },
  {
    name: "American Society of Civil Engineers (ASCE)",
    blurb:
      "Industry networking and hands-on projects covering every corner of civil engineering.",
    categories: ["Learn", "Build", "Industry"],
    majors: ["Civil & Environmental", "Materials Science"],
    website: "https://www.ascebruins.org/",
  },
  {
    name: "American Society of Mechanical Engineers (ASME)",
    blurb:
      "Professional development plus the combat robotics and underwater robotics teams.",
    categories: ["Learn", "Build", "Compete"],
    majors: ["Mechanical & Aerospace"],
    website: "https://www.asmebruins.com/",
  },
  {
    name: "Arab American Association of Engineers and Architects (AAAEA)",
    blurb:
      "A professional Arab American association dedicated to helping, strengthening, and empowering its members.",
    categories: ["Identity", "Industry"],
    majors: [],
    website: "https://aaaeaca.org/bruin-student-chapter/",
  },
  {
    name: "Association for Computing Machinery (ACM)",
    blurb:
      "The umbrella for everything CS. Hack, AI, Cyber, Studio, Teach LA, ICPC — pick the room that already feels like home.",
    categories: ["Build", "Learn", "Compete"],
    majors: ["Computer Science", "Electrical & Computer"],
    website: "https://www.uclaacm.com",
  },
  {
    name: "Biomedical Engineering Society (BMES)",
    blurb:
      "Bringing together bioengineering undergraduates, graduate students, faculty, and alumni with academic, career, and social events.",
    categories: ["Research", "Learn", "Industry"],
    majors: ["Bioengineering"],
    website: "https://bmes.seas.ucla.edu",
  },
  {
    name: "Blockchain at UCLA",
    blurb:
      "Law, business, and undergraduate students educating and engaging the Los Angeles community on blockchain technology.",
    categories: ["Research", "Learn"],
    majors: [],
    website: "https://www.blockchainatucla.com/",
  },
  {
    name: "Bruin AI",
    blurb:
      "Reading group, project tracks, and a steadfast refusal to put \"AI\" in the name of every demo.",
    categories: ["Research", "Build"],
    majors: ["Computer Science"],
    website: "https://bruinai.org/",
  },
  {
    name: "Bruin Amateur Radio Club (BARC)",
    blurb:
      "Call sign W6YRA. A shack on the roof of Boelter Hall, license classes, repeaters, satellite work, and Thursday-night nets — on the air since the 1940s.",
    categories: ["Build", "Learn"],
    majors: [],
    website: "http://w6yra.bol.ucla.edu/index.html",
  },
  {
    name: "Bruin Earth Solutions (BES)",
    blurb:
      "A student-run environmental club fighting climate change through sustainability projects with quantifiable impact.",
    categories: ["Build", "Research"],
    majors: [],
    website: "https://bruinhomesolutions.com/",
  },
  {
    name: "Bruin Entrepreneurs (BE)",
    blurb:
      "Empowering students from every major to turn ideas into real ventures — workshops, networking, and connections to startups, accelerators, and investors.",
    categories: ["Industry", "Build"],
    majors: [],
    website: "https://uclaubs.com/bruin-entrepreneurs",
  },
  {
    name: "Bruin Racing",
    blurb:
      "Four teams, one shop. Formula, Baja, supermileage, and a lot of hours nobody logs.",
    categories: ["Compete", "Build"],
    majors: [],
    website: "https://www.bruinracing.org/",
  },
  {
    name: "Bruin Racing — Baja",
    blurb:
      "Design, assemble, test, and race an off-road vehicle in national competition.",
    categories: ["Compete", "Build"],
    majors: ["Mechanical & Aerospace"],
    website: "https://baja304.wixsite.com/bruin-racing-baja",
  },
  {
    name: "Bruin Racing — Formula",
    blurb:
      "Design, assemble, test, and race an open-wheel Formula-style car in international competition.",
    categories: ["Compete", "Build"],
    majors: ["Mechanical & Aerospace"],
    website: "https://www.bruinformula.com/",
  },
  {
    name: "Bruin Racing — Supermileage (SMV)",
    blurb:
      "Builds and races a hydrogen fuel cell vehicle in the Shell Eco-Marathon. Award-winning chassis, custom telemetry, and an obsession with using as little energy as possible.",
    categories: ["Compete", "Build"],
    majors: ["Mechanical & Aerospace"],
    website: "https://www.bruinsmv.com/",
  },
  {
    name: "Bruin Software Engineers (BSE)",
    blurb:
      "Preparing for a rapidly evolving software industry by teaching AI-era tools and guiding real projects.",
    categories: ["Build", "Industry", "Learn"],
    majors: ["Computer Science"],
    website: "https://bseatucla.com/",
  },
  {
    name: "Bruin Spacecraft Group (BSG)",
    blurb:
      "Hands-on space engineering: high-altitude balloons, low Earth orbit satellites, and scientific payloads built by undergraduates.",
    categories: ["Build", "Research"],
    majors: [],
    website: "https://bruinspace.com",
  },
  {
    name: "Building Engineers and Mentors (BEAM)",
    blurb:
      "Bringing STEM activities to underserved K-8 schools across Los Angeles.",
    categories: ["Learn"],
    majors: [],
    website: "https://beam.ucla.edu/",
  },
  {
    name: "California Geotechnical Engineering Association (CalGeo)",
    blurb:
      "Geotechnical engineering through info sessions, field trips, student projects, and socials.",
    categories: ["Learn", "Industry"],
    majors: ["Civil & Environmental"],
    website: "https://www.calgeobruins.org/",
  },
  {
    name: "Chi Epsilon (XE)",
    blurb:
      "The national civil engineering honor society, upholding scholarship, character, practicality, and sociability.",
    categories: ["Learn"],
    majors: ["Civil & Environmental"],
    website: "https://uclachiepsilon.github.io/",
  },
  {
    name: "Computer Science Graduate Student Association (CSGSA)",
    blurb:
      "The CS graduate student governing body — company visits, invited talks, panels, workshops, and the social calendar.",
    categories: ["Learn", "Industry"],
    majors: ["Computer Science"],
    website: "https://sites.google.com/g.ucla.edu/csgsa/home",
  },
  {
    name: "CruX @ UCLA",
    blurb:
      "Building the neurotech community by developing skills, networking, and working on brain-computer interface projects relevant to the industry.",
    categories: ["Compete", "Research", "Build"],
    majors: ["Bioengineering", "Electrical & Computer", "Computer Science"],
    website: "https://www.cruxucla.com/",
  },
  {
    name: "Design Create Solar",
    blurb:
      "A multidisciplinary club building solar solutions to combat inequity — refugee-camp roof installations, sun-tracking campus chargers, solar-integrated hydroponics.",
    categories: ["Build", "Learn"],
    majors: [],
    website: "https://www.esuc.ucla.edu/ewd-2020/solar/",
  },
  {
    name: "Earthquake Engineering Research Institute & SEAOSC (EERI-SEAOSC)",
    blurb:
      "Scholars working to reduce earthquake risk in California and beyond — research roundtables, an annual symposium, career fair, and office visits with structural engineers.",
    categories: ["Research", "Learn", "Industry"],
    majors: ["Civil & Environmental"],
    website: "https://sites.google.com/view/eeri-seaosc-at-ucla/",
  },
  {
    name: "Electrical and Computer Engineering Graduate and PostDoc Society (ECEGAPS)",
    blurb:
      "Professional and social events for ECE MS students, PhD students, and postdocs.",
    categories: ["Learn", "Research"],
    majors: ["Electrical & Computer"],
    website: "https://www.facebook.com/uclaecegaps/",
  },
  {
    name: "Engineering Ambassadors (EA)",
    blurb:
      "Showing prospective students and alumni what the engineering undergraduate experience actually looks like — tours, panels, external events.",
    categories: ["Learn"],
    majors: [],
    website: "https://www.seasoasa.ucla.edu/tours/",
  },
  {
    name: "Engineering Graduate Students Association (EGSA)",
    blurb:
      "Activities and communication that make the graduate experience productive, and occasionally fun.",
    categories: ["Learn"],
    majors: [],
    // Domain is dead (NXDOMAIN) but kept deliberately — Samueli still links it.
    website: "http://bruinegsa.org/",
  },
  {
    name: "Engineering Society at UCLA (ESUC)",
    blurb:
      "The oldest engineering club on campus and the umbrella over all of them — StartUp Fair, Engineering Welcome Day, Engineers Week.",
    categories: ["Industry", "Learn"],
    majors: [],
    website: "https://www.esuc.ucla.edu/",
  },
  {
    name: "Engineers Without Borders (EWB)",
    blurb:
      "Volunteer work locally and abroad, designing and implementing sustainable engineering development programs.",
    categories: ["Build", "Learn"],
    majors: [],
    website: "https://ewbucla.org/",
  },
  {
    name: "Eta Kappa Nu (HKN)",
    blurb:
      "Electrical and computer engineering honor society — free tutoring, socials, and industry job fairs.",
    categories: ["Learn", "Industry"],
    majors: ["Electrical & Computer", "Computer Science"],
    website: "https://hkn.ee.ucla.edu/",
  },
  {
    name: "exploretech.la",
    blurb:
      "An annual day of workshops, panels, and exhibitions bringing high schoolers from Title I communities across greater LA onto campus.",
    categories: ["Learn"],
    majors: [],
    website: "https://www.exploretech.la/",
  },
  {
    name: "GLITCH",
    blurb: "UCLA's Hackathon Club.",
    categories: ["Build", "Compete", "Learn"],
    majors: ["Computer Science"],
    website: "https://linktr.ee/glitchatucla",
  },
  {
    name: "IEEE Women Advancing Technology through Teamwork (WATT)",
    blurb:
      "A technical advocacy group for women and minorities in electrical engineering, run as a branch of IEEE.",
    categories: ["Identity", "Learn"],
    majors: ["Electrical & Computer"],
    website: "https://www.instagram.com/uclawatt/",
  },
  {
    name: "Institute of Electrical and Electronics Engineers (IEEE)",
    blurb:
      "Soldering nights, MicroMouse, the always-running PCB workshop. Where hardware people find each other.",
    categories: ["Build", "Learn", "Compete"],
    majors: ["Electrical & Computer"],
    website: "https://ieeebruins.com",
  },
  {
    name: "Institute of Transportation Engineers (ITE)",
    blurb:
      "Field trips, speaker sessions, and conferences with transportation engineering professionals.",
    categories: ["Industry", "Learn"],
    majors: ["Civil & Environmental"],
    website: "https://iteucla.square.site/",
  },
  {
    name: "International Society for Pharmaceutical Engineering (ISPE)",
    blurb:
      "Networking with academic and industry professionals across biotech, biomedical, and pharma.",
    categories: ["Industry", "Research"],
    majors: ["Chemical Engineering", "Bioengineering"],
    website: "https://ucla-ispe.weebly.com/",
  },
  {
    name: "Korean-American Scientists and Engineers Association (KSEA)",
    blurb:
      "Leadership, volunteering, and a network reaching every KSEA chapter in Southern California.",
    categories: ["Identity", "Industry"],
    majors: [],
    website: "https://bruinksea.weebly.com/",
  },
  {
    name: "LA Blueprint",
    blurb:
      "Student developers and designers work with nonprofits to deliver applications that best suits their needs.",
    categories: ["Build", "Industry"],
    majors: ["Computer Science"],
    website: "https://www.lablueprint.org",
  },
  {
    name: "LA Hacks",
    blurb:
      "Southern California's premier collegiate hackathon, now in its fourteenth year — 1,000+ participants and $60,000 in prizes, held in Pauley Pavilion.",
    categories: ["Build", "Compete"],
    majors: ["Computer Science"],
    website: "https://www.lahacks.com/",
  },
  {
    name: "Linux User Group (LUG)",
    blurb:
      "Free as in Freedom. Quarterly installfests where you leave with Linux on your laptop and pizza in hand, plus workshops on whatever the club is into that quarter.",
    categories: ["Build", "Learn"],
    majors: ["Computer Science"],
    website: "https://linux.ucla.edu/",
  },
  {
    name: "Materials Research Society (MRS)",
    blurb:
      "Research talks, alumni networking, and finding the summer internship or lab spot you didn't know existed.",
    categories: ["Research", "Industry"],
    majors: [
      "Materials Science",
      "Chemical Engineering",
      "Mechanical & Aerospace",
      "Electrical & Computer",
    ],
    website: "https://www.seas.ucla.edu/mrs/",
  },
  {
    name: "mentorSEAS",
    blurb: "That's us! The official UCLA School of Engineering mentorship program.",
    categories: ["Learn", "Industry"],
    majors: [],
    website: "https://linktr.ee/MentorSEAS",
  },
  {
    name: "Music Art Design Engineering (MADE)",
    blurb:
      "Where the technical side of campus and the creative side actually build something together.",
    categories: ["Build"],
    majors: [],
    website: "https://madeucla.org/"
  },
  {
    name: "National Society of Black Engineers (NSBE)",
    blurb:
      "Mentorship, conventions, and a whiteboard that holds the year together.",
    categories: ["Identity", "Learn", "Industry"],
    majors: [],
    website: "https://nsbebruins.wixsite.com/nsbe",
  },
  {
    name: "Nova for Good",
    blurb:
      "Creating high-impact technology that empowers nonprofits to better serve their communities.",
    categories: ["Build", "Industry"],
    majors: ["Computer Science"],
    website: "https://www.novaforgood.org/",
  },
  {
    name: "Out in STEM (oSTEM)",
    blurb:
      "Community and professional development for LGBTQ+ students in science, technology, engineering, and mathematics.",
    categories: ["Identity", "Industry"],
    majors: [],
    website: "https://ostem.org/",
  },
  {
    name: "Phi Sigma Rho",
    blurb:
      "A social sorority for women in engineering and engineering technologies.",
    categories: ["Identity"],
    majors: [],
    website: "https://www.phirhobruins.com/",
  },
  {
    name: "Pilipinos in Engineering and Science (PIES)",
    blurb:
      "Resources, social, academic and networking opportunities for Pilipino engineering and science students at UCLA.",
    categories: ["Identity", "Learn"],
    majors: [],
    website: "https://piesucla.wixsite.com/pies",
  },
  {
    name: "Quantum Computing Student Association (QCSA)",
    blurb: "Learning quantum algorithms and hardware from the ground up.",
    categories: ["Research", "Learn"],
    majors: ["Computer Science", "Electrical & Computer"],
    website: "https://www.qcsa-ucla.org/"
  },
  {
    name: "QWER Hacks",
    blurb:
      "UCLA's LGBTQIA+ hackathon — three days each winter, built by students for students.",
    categories: ["Build", "Identity", "Compete"],
    majors: ["Computer Science"],
    website: "https://www.qwerhacks.com/",
  },
  {
    name: "Rocket Project at UCLA",
    blurb:
      "Liquid rocketry built by undergraduates. We launch in the Mojave; we learn in the parking lot.",
    categories: ["Compete", "Build"],
    majors: [
      "Mechanical & Aerospace",
      "Electrical & Computer",
      "Computer Science",
    ],
    website: "https://www.rocketproject.seas.ucla.edu/",
  },
  {
    name: "Society of Latinx Engineers and Scientists (SOLES)",
    blurb:
      "Empowering the Hispanic community to impact the world through STEM awareness, access, and support.",
    categories: ["Identity", "Industry"],
    majors: [],
    website: "https://uclasoles.org/",
  },
  {
    name: "Society of Women Engineers (SWE)",
    blurb:
      "A long, careful network of women in engineering — the kind of place where \"you'll figure it out\" is not the answer to anything.",
    categories: ["Identity", "Industry", "Learn"],
    majors: [],
    website: "https://ucla.swe.org/",
  },
  {
    name: "SolidWorks User Group (SWUG)",
    blurb:
      "Everything SolidWorks — student licenses, the certification program, career opportunities, and User Group Network events.",
    categories: ["Learn", "Build"],
    majors: [],
    website: "https://westwoodswug.github.io/",
  },
  {
    name: "Tau Beta Pi (TBP)",
    blurb:
      "Engineering honor society — free drop-in tutoring for lower-division math and science, competitions, mentorship, and outreach.",
    categories: ["Learn"],
    majors: [],
    website: "https://tbp.seas.ucla.edu/",
  },
  {
    name: "Theta Tau",
    blurb:
      "A co-ed, professional engineering fraternity dedicated to the principles of brotherhood, professionalism, and service.",
    categories: ["Industry", "Identity"],
    majors: [],
    website: "https://www.thetataubruins.org/",
  },
  {
    name: "Upsilon Pi Epsilon (UPE)",
    blurb:
      "The international honor society for computing — career development, mentorship, and tutoring.",
    categories: ["Learn", "Industry"],
    majors: ["Computer Science", "Electrical & Computer"],
    website: "https://upe.seas.ucla.edu/",
  },
];

/** Hand-picked spread for the homepage preview — alphabetical order there
    would surface three AIAA sub-teams in a row. */
export const featured: Org[] = [
  "Association for Computing Machinery (ACM)",
  "Bruin Racing",
  "Institute of Electrical and Electronics Engineers (IEEE)",
  "Society of Women Engineers (SWE)",
  "Rocket Project at UCLA",
  "National Society of Black Engineers (NSBE)",
  "Bruin Spacecraft Group (BSG)",
  "LA Blueprint",
].map((n) => orgs.find((o) => o.name === n)!);
