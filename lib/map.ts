/**
 * Campus map data.
 *
 * ⚠️ PLACEHOLDER CONTENT. The building layout is diagrammatic, not survey
 * accurate, and every pin blurb below is invented to demonstrate the format.
 * Replace with real mentor-submitted spots before this goes public — see the
 * `spot` field on lib/team.ts, which is where the real answers land.
 */

export type PinCategory =
  | "study"
  | "food"
  | "classes"
  | "meet"
  | "practical";

export const categoryMeta: Record<
  PinCategory,
  { label: string; color: string; blurb: string }
> = {
  study: {
    label: "Study",
    color: "#2774ae",
    blurb: "Where to actually get work done",
  },
  food: {
    label: "Food & coffee",
    color: "#b4603a",
    blurb: "Walkable between classes",
  },
  classes: {
    label: "Classes & labs",
    color: "#003b5c",
    blurb: "Where first-year engineering happens",
  },
  meet: {
    label: "Meet here",
    color: "#d9a400",
    blurb: "mentorSEAS events and Welcome Day",
  },
  practical: {
    label: "Practical",
    color: "#5c6f80",
    blurb: "Printers, advising, lockers",
  },
};

export const categories = Object.keys(categoryMeta) as PinCategory[];

/**
 * Buildings are drawn as simple extruded blocks. Coordinates are in the
 * map's own 1600x1100 space. This is the blockout the commissioned
 * illustration eventually replaces — pins are positioned separately by
 * percentage, so swapping the artwork won't move them.
 */
export type Building = {
  id: string;
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
  /** Plazas render as open ground rather than a solid block. */
  plaza?: boolean;
};

export const buildings: Building[] = [
  { id: "ackerman", name: "Ackerman Union", x: 120, y: 90, w: 240, h: 150 },
  { id: "kerckhoff", name: "Kerckhoff Hall", x: 400, y: 110, w: 170, h: 130 },
  { id: "powell", name: "Powell Library", x: 640, y: 80, w: 210, h: 150 },
  { id: "janss", name: "Janss Steps", x: 900, y: 80, w: 150, h: 170, plaza: true },
  { id: "franz", name: "Franz Hall", x: 150, y: 340, w: 200, h: 150 },
  { id: "math", name: "Math Sciences", x: 420, y: 330, w: 260, h: 170 },
  { id: "young", name: "Young Hall", x: 740, y: 320, w: 280, h: 180 },
  { id: "molsci", name: "Molecular Sciences", x: 1080, y: 330, w: 220, h: 170 },
  { id: "cnsi", name: "CNSI", x: 1350, y: 340, w: 190, h: 160 },
  { id: "boelter", name: "Boelter Hall", x: 300, y: 580, w: 320, h: 220 },
  { id: "court", name: "Court of Sciences", x: 700, y: 600, w: 300, h: 180, plaza: true },
  { id: "geology", name: "Geology & SEL", x: 1060, y: 590, w: 240, h: 190 },
  { id: "eng6", name: "Engineering VI", x: 250, y: 860, w: 280, h: 160 },
  { id: "eng4", name: "Engineering IV", x: 580, y: 870, w: 260, h: 150 },
  { id: "eng5", name: "Engineering V", x: 880, y: 870, w: 200, h: 150 },
];

export type Pin = {
  id: string;
  title: string;
  blurb: string;
  category: PinCategory;
  /** 0–100, percentage across / down the map artwork. */
  x: number;
  y: number;
  building?: string;
  /** Links to a Member slug in lib/team.ts. */
  mentorSlug?: string;
};

export const pins: Pin[] = [
  {
    id: "boelter-4th",
    title: "Boelter 4th floor alcoves",
    blurb:
      "Past the elevators, on the left. Dead after 6pm and nobody ever books them.",
    category: "study",
    x: 26,
    y: 59,
    building: "Boelter Hall",
    mentorSlug: "ivan-fang",
  },
  {
    id: "sel",
    title: "SEL, lower level",
    blurb:
      "The silent floor. Good chairs, no cell service, which is arguably the point.",
    category: "study",
    x: 74,
    y: 62,
    building: "Geology & SEL",
    mentorSlug: "sagarika-manian",
  },
  {
    id: "math-5th",
    title: "Math Sciences 5th floor",
    blurb:
      "Empty classrooms between lectures, and whiteboards nobody wipes down.",
    category: "study",
    x: 34,
    y: 37,
    building: "Math Sciences",
    mentorSlug: "pavan-gudavalli",
  },
  {
    id: "powell-reading",
    title: "Powell reading room",
    blurb:
      "North Campus, but the nicest room to study in on campus. Worth the walk once a week.",
    category: "study",
    x: 46,
    y: 14,
    building: "Powell Library",
  },
  {
    id: "bombshelter",
    title: "Bombshelter Bistro",
    blurb:
      "Closest real food to Boelter. Get there before 12:15 or don't bother.",
    category: "food",
    x: 53,
    y: 65,
    building: "Court of Sciences",
    mentorSlug: "rohan-jones",
  },
  {
    id: "synapse",
    title: "Café in CNSI",
    blurb:
      "Quiet, decent espresso, mostly grad students. Nobody will talk to you.",
    category: "food",
    x: 90,
    y: 38,
    building: "CNSI",
  },
  {
    id: "kerckhoff-coffee",
    title: "Kerckhoff Coffee House",
    blurb:
      "Worth the walk north when you need to not be in South Campus for an hour.",
    category: "food",
    x: 30,
    y: 16,
    building: "Kerckhoff Hall",
    mentorSlug: "caroline-chen",
  },
  {
    id: "court-trucks",
    title: "Court of Sciences food trucks",
    blurb: "Rotating trucks most weekdays. Cheaper than everything indoors.",
    category: "food",
    x: 58,
    y: 61,
    building: "Court of Sciences",
  },
  {
    id: "boelter-3400",
    title: "Boelter 3400",
    blurb:
      "Where most intro engineering lectures land. Sit house-left — the projector glares.",
    category: "classes",
    x: 33,
    y: 66,
    building: "Boelter Hall",
  },
  {
    id: "young-2200",
    title: "Young Hall lecture halls",
    blurb:
      "The big chem lectures. Arrive early or you're in row 40 squinting.",
    category: "classes",
    x: 55,
    y: 36,
    building: "Young Hall",
    mentorSlug: "kana-park",
  },
  {
    id: "eng4-shop",
    title: "Engineering IV machine shop",
    blurb:
      "Bruin Racing lives here. Walk in and ask what you can hand someone.",
    category: "classes",
    x: 44,
    y: 86,
    building: "Engineering IV",
    mentorSlug: "julie-huyen-bui",
  },
  {
    id: "bruin-plaza",
    title: "Bruin Plaza",
    blurb:
      "Engineering Welcome Day. This is the spot where you'll meet your mentor.",
    category: "meet",
    x: 15,
    y: 15,
    building: "Ackerman Union",
    mentorSlug: "julie-huyen-bui",
  },
  {
    id: "eng6-courtyard",
    title: "Engineering VI courtyard",
    blurb:
      "Our Thursday hangouts. Look for the table with the gold tablecloth.",
    category: "meet",
    x: 24,
    y: 85,
    building: "Engineering VI",
    mentorSlug: "julie-huyen-bui",
  },
  {
    id: "boelter-printers",
    title: "Boelter 2nd floor printers",
    blurb:
      "The ones that actually work. The 4th floor pair will eat your problem set.",
    category: "practical",
    x: 26,
    y: 67,
    building: "Boelter Hall",
    mentorSlug: "shaleen-thaker",
  },
  {
    id: "advising",
    title: "Engineering advising",
    blurb:
      "Where you go to fix a schedule. Show up in person — email takes a week.",
    category: "practical",
    x: 33,
    y: 59,
    building: "Boelter Hall",
    mentorSlug: "alyson-jeong",
  },
  {
    id: "eng6-lockers",
    title: "Engineering VI lockers",
    blurb:
      "First floor, free, first-come. Saves carrying a laptop around all day.",
    category: "practical",
    x: 21,
    y: 89,
    building: "Engineering VI",
  },
];
