export type Org = {
  name: string;
  blurb: string;
  category: "Build" | "Compete" | "Identity" | "Industry" | "Learn" | "Research";
  beginnerFriendly?: boolean;
  meets: string;
  founded: string;
  website: string;
};

export const orgs: Org[] = [
  {
    name: "BSE",
    blurb:
      "Bruin Software Engineers - Preparing for a rapidly evolving software industry by teaching AI-era tools, guiding real projects, and building a community of dedicating developers.",
    category: "Build",
    beginnerFriendly: true,
    meets: "Fri · Young Hall 1044",
    founded: "2025",
    website: "https://bseatucla.com/",
  },
  {
    name: "Bruin Racing",
    blurb:
      "Five teams, one shop. Formula, Baja, supermileage, rocketry, and a quiet electric-vehicle group nobody can shut up about.",
    category: "Build",
    beginnerFriendly: true,
    meets: "Tues · Engineering IV Shop",
    founded: "1987",
    website: "https://www.bruinracing.org/",
  },
  {
    name: "ACM at UCLA",
    blurb:
      "The umbrella for everything CS. Hack, AI, Cyber, Studio, Teach LA, ICPC — pick the room that already feels like home.",
    category: "Build",
    beginnerFriendly: true,
    meets: "Wed · Engineering VI 289",
    founded: "1969",
    website: "https://www.uclaacm.com",
  },
  {
    name: "IEEE",
    blurb:
      "Soldering nights, MicroMouse, the always-running PCB workshop. Where hardware people find each other.",
    category: "Build",
    meets: "Mon · Engineering IV 17",
    founded: "1968",
    website: "https://ieeebruins.com",
  },
  {
    name: "Society of Women Engineers",
    blurb:
      "A long, careful network of women in engineering — the kind of place where \"you'll figure it out\" is not the answer to anything.",
    category: "Identity",
    beginnerFriendly: true,
    meets: "Thurs · Boelter 4760",
    founded: "1971",
    website: "https://ucla.swe.org/",
  },
  {
    name: "NSBE",
    blurb:
      "National Society of Black Engineers, UCLA chapter. Mentorship, conventions, and a whiteboard that holds the year together.",
    category: "Identity",
    beginnerFriendly: true,
    meets: "Tues · Engineering VI 105",
    founded: "1976",
    website: "https://nsbebruins.wixsite.com/nsbe",
  },
  {
    name: "SHPE",
    blurb:
      "Society of Hispanic Professional Engineers — first-gen energy, professional dev, and a Dia de los Muertos potluck that shouldn't be missed.",
    category: "Identity",
    beginnerFriendly: true,
    meets: "Wed · Boelter 3400",
    founded: "1979",
    website: "https://uclasoles.org/",
  },
  {
    name: "Rocket Project",
    blurb:
      "Liquid rocketry built by undergraduates. We launch in the Mojave; we learn in the parking lot.",
    category: "Compete",
    meets: "Sat · Engineering IV Roof Lab",
    founded: "2003",
    website: "http://rocketproject.seas.ucla.edu/",
  },
  {
    name: "Bruin AI",
    blurb:
      "Reading group, project tracks, and a steadfast refusal to put \"AI\" in the name of every demo.",
    category: "Research",
    meets: "Apply",
    founded: "2017",
    website: "https://bruinai.org/",
  },
  {
    name: "BMES",
    blurb:
      "Biomedical Engineering Society - Bringing together bioengineering undergraduates, graduate students, faculty, and alumni with academic, career, and social events.",
    category: "Research",
    beginnerFriendly: true,
    meets: "Tues · Engineering V 5121",
    founded: "1995",
    website: "https://bmes.seas.ucla.edu",
  },
  {
    name: "Theta Tau",
    blurb:
      "A co-ed, professional engineering fraternity dedicated to the principles of brotherhood, professionalism, and service.",
    category: "Industry",
    meets: "Sun · Engineering VI 200",
    founded: "1907",
    website: "http://www.thetataubruins.org/",
  },
  {
    name: "AIChE",
    blurb:
      "American Institute of Chemical Engineers - Connecting chemical engineering students through networking, career, and mentorship events.",
    category: "Learn",
    beginnerFriendly: true,
    meets: "Tues · Mong Learning Center",
    founded: "1907",
    website: "https://www.aicheatucla.com/",
  },
  {
    name: "ASCE",
    blurb:
      "American Society of Civil Engineers - Networking and hands-on experience in projects covering all areas of civil engineering.",
    category: "Learn",
    beginnerFriendly: true,
    meets: "",
    founded: "1907",
    website: "https://www.ascebruins.org/",
  },
  {
    name: "ASME",
    blurb:
      "American Society of Mechanical Engineers - Professional development, academic and social opportunities for students interested in mechanical engineering.",
    category: "Learn",
    beginnerFriendly: true,
    meets: "",
    founded: "1907",
    website: "https://www.asmebruins.com/",
  },
  {
    name: "Blockchain at UCLA",
    blurb:
      "Advancing the frontier of the world-changing technology through blockchain education.",
    category: "Research",
    meets: "Boelter 3440",
    founded: "1907",
    website: "https://www.blockchainatucla.com/",
  },
  {
    name: "CruX @ UCLA",
    blurb:
      "Building the neurotech community by developing skills, networking, and working on brain-computer interface projects relevant to the industry.",
    category: "Compete",
    beginnerFriendly: true,
    meets: "Join a Team",
    founded: "1907",
    website: "https://www.cruxucla.com/",
  },
  {
    name: "Eta Kappa Nu",
    blurb:
      "Electrical and computer engineering honor society - tutoring, socials, and industry exposure.",
    category: "Learn",
    meets: "Engineering IV 67-127",
    founded: "2006",
    website: "https://hkn.ee.ucla.edu/",
  },
  {
    name: "ITE",
    blurb:
      "Institute of Transportation Engineers - meet and interact with transportation engineering professionals.",
    category: "Industry",
    meets: "Boelter 4275",
    founded: "1907",
    website: "https://iteucla.wixsite.com/iteatucla",
  },
  {
    name: "LA Blueprint",
    blurb:
      "Student developers and designers work with nonprofits to deliver applications that best suits their needs.",
    category: "Build",
    meets: "Apply",
    founded: "1907",
    website: "https://lablueprint.org/students",
  },
  {
    name: "Nova for Good",
    blurb:
      "Creating high-impact technology that empowers nonprofits to better serve their communities.",
    category: "Build",
    meets: "Apply",
    founded: "2018",
    website: "https://www.novaforgood.org/",
  },
  {
    name: "PIES",
    blurb:
      "Pilipinos in Engineering and Science - provides resources, social, academic and networking opportunities for Pilipino engineering and science students at UCLA.",
    category: "Identity",
    beginnerFriendly: true,
    meets: "Young Hall 4216",
    founded: "1993",
    website: "https://piesucla.wixsite.com/pies",
  },
  {
    name: "Tau Beta Pi",
    blurb:
      "Engineering Honor Society - tutoring for engineering classes, engineering competitions, mentorship, and outreach events.",
    category: "Learn",
    meets: "Boelter 6266",
    founded: "1993",
    website: "https://tbp.seas.ucla.edu/",
  },
  {
    name: "Upsilon Pi Epsilon",
    blurb:
      "Computer Science Honor Society - maximizing the personal and professional growth of students in the field of Computer Science.",
    category: "Learn",
    meets: "Boelter 4685/4801",
    founded: "1993",
    website: "https://upe.seas.ucla.edu/",
  },
];

export const categories = ["All", "Build", "Compete", "Identity", "Industry", "Learn", "Research"] as const;
