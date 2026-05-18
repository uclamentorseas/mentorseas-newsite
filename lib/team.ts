export type Committee = "Presidency" | "Academic & Growth" | "Social & Engagement" | "Tech";

export type Member = {
  slug: string;
  name: string;
  role: string;
  committee: Committee;
  major: string;
  image: string;
  hometown: string;
  snippet: string;       // short hover blurb (1–2 sentences)
  philosophy: string;
  wish: string;
  spot: string;
  funFact: string;
  linkedin: string;
};

const portraits = ["/ucla1.jpg", "/ucla2.jpg", "/ucla3.jpg", "ivan.jpg", "/ucla-aerial.jpg"];
const portrait = (i: number) => portraits[i % portraits.length];

export const team: Member[] = [
  // ── Co-Presidents ────────────────────────────────────────────
  {
    slug: "julie-huyen-bui",
    name: "Julie Huyen Bui",
    role: "Co-President",
    committee: "Presidency",
    major: "Mechanical Engineering",
    image: "/julie.jpg",
    hometown: "Santa Rosa, CA",
    snippet:
      "",
    philosophy:
      "",
    wish:
      "I wish I knew freshman year that UCLA only feels overwhelming until you start putting yourself out there—joining clubs, talking to people in class, and going to events even when it feels awkward. I also wish I knew that no one has everything figured out, so it is better to explore early, ask for help, and not compare your timeline to everyone else’s!",
    spot: "",
    funFact: "I have taken selfies with over 20 NBA players!",
    linkedin: "https://www.linkedin.com/in/juliehuyenbui/"
  },
  {
    slug: "vanessa-tran",
    name: "Vanessa Tran",
    role: "Co-President",
    committee: "Presidency",
    major: "",
    image: portrait(1),
    hometown: "",
    snippet:
      "",
    philosophy:
      "",
    wish:
      "",
    spot: "",
    funFact: "",
    linkedin: ""
  },

    // ── Tech ─────────────────────────────────────────────────────
  {
    slug: "ivan-fang",
    name: "Ivan Fang",
    role: "Tech Lead",
    committee: "Tech",
    major: "Computer Science",
    image: "/ivan.jpg",
    hometown: "Singapore",
    snippet:
      "Maintains our website (this one). Believes good infrastructure is the kindest thing you can build for a community.",
    philosophy:
      "What can be done tomorrow should be done today!",
    wish:
      "Your GPA will be fine",
    spot: "Eclipse Gaming Lounge",
    funFact: "Always on the hill...",
    linkedin: "https://www.linkedin.com/in/ivan-fang-dev/"
  },
  {
    slug: "pavan-gudavalli",
    name: "Pavan Gudavalli",
    role: "Tech Developer",
    committee: "Tech",
    major: "Computer Science and Math Econ",
    image: "/pavan.jpg",
    hometown: "",
    snippet:
      "I work on the website with my team. I also do work for the D1 tennis team, CEC, and Bruinwalk",
    philosophy:
      "",
    wish:
      "Talk to as many people as possible as you'll never know what you get out of a conversation",
    spot: "",
    funFact: "I've climbed 15 14ers",
    linkedin: "https://www.linkedin.com/in/pavan-gudavalli/"
  },
  {
    slug: "rohan-jones",
    name: "Rohan Jones",
    role: "Tech Developer",
    committee: "Tech",
    major: "Computer Science",
    image: "/rohan.jpg",
    hometown: "San Jose, CA",
    snippet:
      "I'll be working on making this website work for you!",
    philosophy:
      "Live without regrets",
    wish:
      "Don't be afraid to try something new and meet new people!",
    spot: "B plate yum",
    funFact: "I'm pretty good at Minesweeper!",
    linkedin: "https://www.linkedin.com/in/rohan-jones-274bb62b9/"
  },
  {
    slug: "shaleen-thaker",
    name: "Shaleen Thaker",
    role: "Tech Developer",
    committee: "Tech",
    major: "Computer Science",
    image: "/shaleen.jpeg",
    hometown: "",
    snippet:
      "I work on and run the website with the rest of the tech team. I'm also a board member for Bruin Software Engineers!",
    philosophy:
      "Life for engineers is waiting outside the classroom. Don't waste any time to get out there and explore what fills you with joy and what you could spend your life doing",
    wish:
      "Life for engineers is waiting outside the classroom. Don't waste any time to get out there and explore what fills you with joy and what you could spend your life doing",
    spot: "",
    funFact: "My highest step count day was 48000 steps",
    linkedin: "https://www.linkedin.com/in/shaleen-thaker-a409a4271/"
  },

  // ── Social & Engagement ──────────────────────────────────────
  {
    slug: "alyson-jeong",
    name: "Alyson Jeong",
    role: "",
    committee: "Social & Engagement",
    major: "Civil Engineering",
    image: "/alyson.jpg",
    hometown: "",
    snippet:
      "I'm on the board of Social & Engagement, which handles all the event and media planning for MentorSEAS! I'm also a part of Daily Bruin, Catalyst STEM Newsletter, and ASCE @ UCLA :')",
    philosophy:
      "",
    wish:
      "Find time to do what you love! It gets easy to push things to the side once the quarter starts to pick up, so carving out time to do the things that help you decompress will keep you on your feet throughout the school year.",
    spot: "",
    funFact: "Jamba followed me on ig…",
    linkedin: "www.linkedin.com/in/alyson-jeong"
  },
  {
    slug: "kana-park",
    name: "Kana Park",
    role: "",
    committee: "Social & Engagement",
    major: "Bioengineering",
    image: "/kana.jpg",
    hometown: "",
    snippet:
      "The Social & Engagement Team manages the MentorSEAS socials and plans events for mentors & mentees to attend. You can also find me in the Biomedical Engineering Society and Society of Women Engineers.",
    philosophy:
      "",
    wish:
      "GO OUT!! Bus to Ktown and study at a cafe. Explore museums around LA. Hang out with your friends in Westwood. Do everything that you may or may not have romanticized about and actually do them! First year is all about making college home.",
    spot: "",
    funFact: "I am on level 13,659 on Royal Match",
    linkedin: "www.linkedin.com/in/kana-park"
  },
  {
    slug: "ronak-chadha",
    name: "Ronak Chadha",
    role: "",
    committee: "Social & Engagement",
    major: "Computer Science and Engineering",
    image: "/ronak.jpg",
    hometown: "",
    snippet:
      "I work on the social and engagement team to plan events, build community, recruit mentors, and manage our social media prescence. I am also a board member on Bruin Software Engineers and love to play basketball and swim in my free time.",
    philosophy:
      "",
    wish:
      "Have fun, try out new things, explore LA with your U-Pass or ZipCar, and go to football and basketball games! Make sure to make time for yourself and don't bury your head in the books.",
    spot: "",
    funFact: "I've traveled to 14 countries!",
    linkedin: "https://www.linkedin.com/in/ronak-chadha/"
  },
  {
    slug: "savinna-mattar",
    name: "Savinna Mattar",
    role: "",
    committee: "Social & Engagement",
    major: "Civil Engineering",
    image: portrait(2),
    hometown: "",
    snippet:
      "The Social & Engagement Team plans events that build community and support for the MentorSEAS members. We organize socials and run the social media! I am also a part of UCLA's Timber-Strong Design Build team and Alumni Scholars Club.",
    philosophy:
      "",
    wish:
      "Push yourself to go events, club meetings, and social activites, even if you're scared or going alone. It is the best way to meet new people, and it teaches you how to grow in new environments!",
    spot: "",
    funFact: "I love playing pickleball!",
    linkedin: "https://www.linkedin.com/in/savinna-mattar-69959234b/"
  },

    // ── Academic & Growth ────────────────────────────────────────
  {
    slug: "sagarika-manian",
    name: "Sagarika Manian",
    role: "",
    committee: "Academic & Growth",
    major: "Materials Engineering",
    image: "/sagarika.jpg",
    hometown: "",
    snippet:
      "The Academic & Growth Team helps students with their academics and career development by creating study guides, course plans, workshops, and more. I am also involved with Rocket Project and Alumni Scholars Club, and I also love to play golf!",
    philosophy:
      "",
    wish:
      "Live the UCLA Life! Explore Los Angeles, go to the football and basketball games, take a bus to the beach, and make memories with your friends. There is more to UCLA than just academics: take advantage of all of the opportunities here (plus the amazing weather)! ",
    spot: "",
    funFact: "I know how to play more than 5 sports both lefty and righty!",
    linkedin: "www.linkedin.com/in/sagarika-manian"
  },
  {
    slug: "caroline-chen",
    name: "Caroline Chen",
    role: "",
    committee: "Academic & Growth",
    major: "Electrical Engineering",
    image: "/caroline.JPG",
    hometown: "",
    snippet:
      "I am a member of the Academic & Growth team, where I hope to support fellow Bruins in engineering by providing more resources for them to succeed! I am also involved with IEEE and WATT this year at UCLA.",
    philosophy:
      "",
    wish:
      "I wish I knew more study spots around campus. Fall quarter I ended up studying in my room a lot, but throughout the year I was able to find some nice study spots both on and off campus. I would've loved it if there was a more comprehensive list of study spots made available early in the year!",
    spot: "",
    funFact: "I've had pet chickens for a majority of my life.",
    linkedin: "www.linkedin.com/in/caroline-chen-9271572b3"
  },
  {
    slug: "dishti-wadhwani",
    name: "Dishti Wadhwani",
    role: "",
    committee: "Academic & Growth",
    major: "Chemical Engineering",
    image: portrait(1),
    hometown: "",
    snippet:
      "I am part of the Academic & Growth Team! I am also involved with AIChE and UCLA's Indian classical dance team, Taara. ",
    philosophy:
      "",
    wish:
      "Say yes to everything!! It may be common advice, but you never know what's going to lead to you meeting your people.",
    spot: "",
    funFact: "I've tested 46 different chocolate chip cookie recipes :)",
    linkedin: "https://www.linkedin.com/in/dishti-wadhwani-8a8b33241/"
  },
  {
    slug: "lily-sarkissian",
    name: "Lily Sarkissian",
    role: "",
    committee: "Academic & Growth",
    major: "Bioengineering",
    image: "/lily.jpg",
    hometown: "",
    snippet:
      "I am apart of the Academic & Growth Team, which helps connect incoming students with engineering clubs across campus and provides advice regarding classing planning. I am also heavily involved in the Biomedical Engineering Society with their community outreach program. ",
    philosophy:
      "",
    wish:
      "Make an effort to join clubs, not just to build your resume but to meet new people and attend activities! You will not magically develop a friend group or integrate yourself into the college culture if you do not purposefully put yourself out there! Once you do that, you will feel much more at home.",
    spot: "",
    funFact: "I once went jet skiing and zip lining for the first time on the same day",
    linkedin: "https://www.linkedin.com/in/lily-sarkissian-1678a63b1/"
  },
];

export const committees: { key: Committee; label: string; blurb: string; subtitle: string }[] = [

  {
    key: "Tech",
    label: "Committee I",
    blurb:
      "The website, the pairings tool, the data we keep on whether this is actually working. Built by mentors, for mentors.",
    subtitle: "How we keep it running.",
  },
  {
    key: "Social & Engagement",
    label: "Committee II",
    blurb:
      "Potlucks, intramurals, study groups, the group chat. Everything that turns a pairing into a friendship and a friendship into a life.",
    subtitle: "How we become friends.",
  },
  {
    key: "Academic & Growth",
    label: "Committee III",
    blurb:
      "Tutoring, study workshops, research-pathway pairings, and the quiet handing-down of how each professor actually grades.",
    subtitle: "How we get better, slowly.",
  },
];

export function findMember(slug: string) {
  return team.find((m) => m.slug === slug);
}
