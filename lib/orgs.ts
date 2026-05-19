export type Org = {
  name: string;
  blurb: string;
  category: "Build" | "Compete" | "Identity" | "Industry" | "Research";
  beginnerFriendly?: boolean;
  meets: string;
  founded: string;
  website: string;
};

export const orgs: Org[] = [
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
    meets: "Tues · Engineering VI 105",
    founded: "1976",
    website: "https://nsbebruins.wixsite.com/nsbe",
  },
  {
    name: "SHPE",
    blurb:
      "Society of Hispanic Professional Engineers — first-gen energy, professional dev, and a Dia de los Muertos potluck that shouldn't be missed.",
    category: "Identity",
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
    beginnerFriendly: true,
    meets: "Fri · Math Sciences 6627",
    founded: "2017",
    website: "https://bruinai.org/",
  },
  {
    name: "UCLA Bioengineering Society",
    blurb:
      "Pre-med-adjacent, lab-tour-rich, and the only org with a working bread-mold bioreactor in a windowsill.",
    category: "Research",
    meets: "Tues · Engineering V 5121",
    founded: "1995",
    website: "https://bmes.seas.ucla.edu",
  },
  {
    name: "Theta Tau",
    blurb:
      "Co-ed professional engineering fraternity. Fewer rituals than you'd expect; more career fairs than you'd think.",
    category: "Industry",
    meets: "Sun · Engineering VI 200",
    founded: "1907",
    website: "http://www.thetataubruins.org/",
  },
];

export const categories = ["All", "Build", "Compete", "Identity", "Industry", "Research"] as const;
