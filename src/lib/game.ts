// Visitor progression: XP, levels, coins, and quests. Shared by the HUD, quest log, and arcade.

export const LEVELS = [0, 60, 150, 280, 450, 650, 900, 1200, 1500];
export const XP = {
  visitWorld: 10,
  visitPage: 5,
  readEnd: 25,
  secret: 50,
  quest: 100,
  arcade: 20,
};

export interface Quest {
  id: string;
  name: string;
  desc: string;
}

export const QUESTS: Quest[] = [
  { id: 'tourist',   name: 'Tourist',          desc: 'Visit all four worlds: Projects, Research, Writing, Funsies.' },
  { id: 'bookworm',  name: 'Bookworm',         desc: 'Read one of my stories or plays all the way to the end.' },
  { id: 'cases',     name: 'Case Cracker',     desc: 'Reach the end of three project or research write-ups.' },
  { id: 'collector', name: 'Collector',        desc: 'Find five secrets hidden around the site.' },
  { id: 'arcade',    name: 'Arcade Regular',   desc: 'Play both games in the arcade.' },
  { id: 'hi',        name: 'Say Hi',           desc: 'Open an email link. (Then actually send it, I’d love that.)' },
  { id: 'complete',  name: 'Completionist',    desc: 'Find every secret.' },
];
