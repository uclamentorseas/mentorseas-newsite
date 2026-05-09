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
};

const portraits = ["/ucla1.jpg", "/ucla2.jpg", "/ucla3.jpg", "ivan.jpg", "/ucla-aerial.jpg"];
const portrait = (i: number) => portraits[i % portraits.length];

export const team: Member[] = [
  // ── Co-Presidents ────────────────────────────────────────────
  {
    slug: "priya-mahalingam",
    name: "Priya Mahalingam",
    role: "Co-President",
    committee: "Presidency",
    major: "Bioengineering, M.S.",
    image: portrait(0),
    hometown: "Fremont, CA",
    snippet:
      "Hated her first lab. Doing a Ph.D. in it now. Believes mentorship is mostly the part where you stay.",
    philosophy:
      "The best mentors are the ones who tell you exactly when you’re overthinking — and exactly when you’re not thinking enough.",
    wish:
      "That you don’t need to have liked your first lab to keep going. I hated mine. I’m doing a Ph.D. in it now.",
    spot: "The bench by Inverted Fountain at 6 PM",
    funFact: "Letterpress printing at the Hammer Museum",
  },
  {
    slug: "marcus-wei",
    name: "Marcus Wei",
    role: "Co-President",
    committee: "Presidency",
    major: "Materials Science",
    image: portrait(1),
    hometown: "Arcadia, CA",
    snippet:
      "Restores vintage Casio calculators. Thinks office hours are a personality trait. Will sit with you in silence while you cry over a problem set.",
    philosophy:
      "Mentorship isn’t advice. It’s sitting next to someone, in silence, while they crash out a problem set. You stay; that’s the whole job.",
    wish:
      "That CS 31 is hard for everyone, that linear algebra is a personality trait, and that office hours are not a sign of weakness.",
    spot: "Engineering V atrium, north side",
    funFact: "Restoring vintage Casio calculators",
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
  },
  {
    slug: "ines-garcia",
    name: "Ines García",
    role: "Pairings Engine",
    committee: "Tech",
    major: "Mechanical Engineering",
    image: portrait(2),
    hometown: "El Paso, TX",
    snippet:
      "Wrote the (carefully unautomated) tool that lets coordinators see applications side by side.",
    philosophy:
      "I read every application twice. Then I sit with it for a day. Then I match.",
    wish:
      "That asking for help isn’t a debt. Mentors signed up because they wanted you to ask.",
    spot: "Royce Hall steps, golden hour",
    funFact: "She makes excellent salsa macha",
  },
  {
    slug: "jamal-kuria",
    name: "Jamal Kuria",
    role: "Data & Outcomes",
    committee: "Tech",
    major: "Computer Engineering",
    image: portrait(0),
    hometown: "Nairobi → Davis, CA",
    snippet:
      "Tracks how pairings go. Says spreadsheets are the second-most useful form of love.",
    philosophy:
      "If we can’t measure whether mentees feel less alone, we’re not really paying attention.",
    wish:
      "That every metric in your life is a question, not a verdict.",
    spot: "Engineering IV roof, around dusk",
    funFact: "Plays five-a-side at the IM field",
  },
  {
    slug: "ada-nguyen",
    name: "Ada Nguyen",
    role: "Design & Communications",
    committee: "Tech",
    major: "Design | Media Arts (D|MA) + CS",
    image: portrait(1),
    hometown: "Garden Grove, CA",
    snippet:
      "Set the typography you’re reading right now. Insists Fraunces and a deadline are best friends.",
    philosophy:
      "A good interface is a quiet teacher. It says: yes, you can do this — and gets out of the way.",
    wish:
      "That you’ll fall in love with at least one tool well enough to argue with it.",
    spot: "Broad Art Center, 1st-floor corridor",
    funFact: "Hand-binds zines of student work",
  },

  // ── Social & Engagement ──────────────────────────────────────
  {
    slug: "sofia-hernandez",
    name: "Sofia Hernandez",
    role: "Committee Lead",
    committee: "Social & Engagement",
    major: "Civil & Environmental",
    image: portrait(0),
    hometown: "El Paso, TX",
    snippet:
      "Runs our quarterly potlucks. Believes any group dynamic is fixable with eight kinds of dip.",
    philosophy:
      "If your mentee hasn’t laughed yet, you haven’t really met them.",
    wish:
      "That your first friend group will not be your last, and that’s okay.",
    spot: "Royce Hall steps, golden hour",
    funFact: "Films grainy super-8 of campus events",
  },
  {
    slug: "aanya-reddy",
    name: "Aanya Reddy",
    role: "Events Programming",
    committee: "Social & Engagement",
    major: "Computer Science",
    image: portrait(1),
    hometown: "Sunnyvale, CA",
    snippet:
      "Birds at the Botanical Garden. Designs our event posters. Will absolutely not let you skip the karaoke night.",
    philosophy:
      "Make the events feel like a low-stakes hangout — never a workshop you have to ‘perform’ at.",
    wish:
      "That you’ll get one bad TA and one TA who changes the way you think. Both will be in the same quarter.",
    spot: "Powell, the booth with the broken outlet",
    funFact: "Birding at the UCLA Botanical Garden",
  },
  {
    slug: "chris-park",
    name: "Chris Park",
    role: "Pairings & Onboarding",
    committee: "Social & Engagement",
    major: "Electrical Engineering",
    image: portrait(2),
    hometown: "Seoul → Glendale, CA",
    snippet:
      "Reads every application twice. Will not match you to ‘the guy from the slideshow.’",
    philosophy:
      "A pairing is a guess. If it’s wrong, we re-pair. No drama.",
    wish:
      "That ‘fit’ is real, and worth waiting another week for.",
    spot: "Kerckhoff coffee, second-floor balcony",
    funFact: "Builds analog synths from kits",
  },
  {
    slug: "lila-brooks",
    name: "Lila Brooks",
    role: "Community Storyteller",
    committee: "Social & Engagement",
    major: "Chemical Engineering",
    image: portrait(0),
    hometown: "Portland, OR",
    snippet:
      "Runs our Instagram, takes the photos, writes the captions, and protects the group chat from itself.",
    philosophy:
      "If you can capture how someone laughs, you can capture how they teach.",
    wish:
      "That you’ll regret not joining one club, and that you can still join it junior year.",
    spot: "Engineering VI patio, after 3 PM",
    funFact: "35mm film, mostly black and white",
  },

    // ── Academic & Growth ────────────────────────────────────────
  {
    slug: "lin-chen",
    name: "Lin Chen",
    role: "Committee Lead",
    committee: "Academic & Growth",
    major: "Aerospace Engineering",
    image: portrait(2),
    hometown: "Shanghai → Irvine, CA",
    snippet:
      "Runs the study-skills workshops. Has a binder of UCLA professor reviews going back four quarters.",
    philosophy:
      "I don’t teach calculus. I teach you to ask the question before the calculus.",
    wish:
      "That a B+ in Math 33B is a perfectly nice grade.",
    spot: "Engineering IV, the old aerospace bookcase",
    funFact: "Watercolor sketches of Westwood storefronts",
  },
  {
    slug: "owen-patel",
    name: "Owen Patel",
    role: "Tutoring Coordinator",
    committee: "Academic & Growth",
    major: "Computer Science",
    image: portrait(0),
    hometown: "Edison, NJ",
    snippet:
      "Built our peer-tutor schedule. Will explain pointers in twelve different ways before giving up.",
    philosophy:
      "If a TA can’t explain it, that’s their problem. We just need to find a sophomore who can.",
    wish:
      "That recursion clicks suddenly, usually around 2 AM, and there’s no shame in waiting until then.",
    spot: "Powell, the table closest to the printer",
    funFact: "Long-distance trail running in the Santa Monicas",
  },
  {
    slug: "mei-tanaka",
    name: "Mei Tanaka",
    role: "Research Pathways",
    committee: "Academic & Growth",
    major: "Bioengineering",
    image: portrait(1),
    hometown: "Honolulu, HI",
    snippet:
      "Knows which labs take undergrads. Knows which ones actually mean it.",
    philosophy:
      "Cold-emailing PIs is a learned skill. We rehearse together.",
    wish:
      "That research is just chores you happen to find interesting.",
    spot: "Engineering V 4th floor, by the printer that always works",
    funFact: "Reads novels on the Janss steps before sunset",
  },
  {
    slug: "daniel-rivera",
    name: "Daniel Rivera",
    role: "Curriculum Liaison",
    committee: "Academic & Growth",
    major: "Mechanical Engineering",
    image: portrait(2),
    hometown: "San Antonio, TX",
    snippet:
      "Takes notes for Engineering 96 and shares them anyway. Quiet kind of generous.",
    philosophy:
      "There is no shortcut. There is, however, a study group that meets every Thursday.",
    wish:
      "That you can switch out of pre-med without anyone’s permission.",
    spot: "Math Sciences 6th floor lounge",
    funFact: "Salsa social at the Wooden Center, Wednesdays",
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
