// Every easter egg on the site. The client script, toast, and /secrets sticker book all read from here.

export interface Secret {
  id: string;
  name: string;
  sprite: string;
  found: string; // shown once discovered
  hint: string;  // shown while still locked
}

export const SECRETS: Secret[] = [
  { id: 'poke',      sprite: 'heart',    name: 'Poke Poke',        hint: 'Some portraits don’t like being clicked. Try anyway. A few times.',            found: 'You poked my face five times and learned when my play opens.' },
  { id: 'bubble',    sprite: 'bubble',   name: 'Task Complete',    hint: 'Something is floating near the top of the homepage.',                         found: 'You popped the Bubblist bubble. Confetti is how I reward finished tasks.' },
  { id: 'bread',     sprite: 'bread',    name: 'Fully Baked',      hint: 'Ideas rise like dough. Something in the footer needs a little help.',            found: 'You baked the Half-Baked loaf all the way through.' },
  { id: 'npc',       sprite: 'npc',      name: 'Just an NPC',      hint: 'Someone is pacing at the very bottom of every page.',                          found: 'You talked to the NPC. The line comes from my short story “I Write to You in Your Life”.' },
  { id: 'joy',       sprite: 'coffee',   name: 'Looking for Joy',  hint: 'A stranger at a café is searching for someone. Type her name, anywhere.',      found: 'You found Joy, from my stage play “If They’ll Never Hear You”.' },
  { id: 'cube',      sprite: 'cube',     name: 'The Black Cube',   hint: 'A very small, very dark shape is hiding in the character sheet.',              found: 'The past is never dead. It’s not even past. (Faulkner, and an old version of this site.)' },
  { id: 'skills',    sprite: 'star',     name: 'Skill Tree',       hint: 'My skills aren’t just stickers. Inspect a few of them.',                        found: 'You traced four skills back to the projects where I used them.' },
  { id: 'pages',     sprite: 'book',     name: 'Loose Pages',      hint: 'Shake the book on the Writing page.',                                          found: 'A page fell out of my notebook: a real line from something I wrote.' },
  { id: 'terminal',  sprite: 'computer', name: 'whoami',           hint: 'The computer on the Projects page still boots.',                              found: 'You booted my computer and read my files.' },
  { id: 'globe',     sprite: 'globe',    name: 'Around the World', hint: 'A tiny world is spinning on the homepage, and another in Research. Give one a spin.', found: 'You spun my globe: China, Singapore, Evanston, and the two languages I live in. 你好！' },
  { id: 'tetrad',    sprite: 'notebook', name: 'Тетрадь',          hint: 'I live in more than two languages. Find the third one on the character sheet, or just say hi in Russian.', found: 'You flipped a Russian flashcard from Тетрадь, my notebook-paper flashcard app. Приве́т!' },
];

// Real lines from my writing, used by the "Loose Pages" egg.
export const LOOSE_PAGES = [
  { line: 'She sometimes wondered if these people were just NPCs in a game.', from: 'I Write to You in Your Life', href: '/writing/i-write-to-you-in-your-life' },
  { line: 'The earliest guest arrived thirty minutes late.', from: 'I Write to You in Your Life', href: '/writing/i-write-to-you-in-your-life' },
  { line: 'She wondered a lot of things about her husband.', from: 'I Write to You in Your Life', href: '/writing/i-write-to-you-in-your-life' },
  { line: 'Everything we write is about love.', from: 'If They’ll Never Hear You', href: '/writing/if-theyll-never-hear-you' },
  { line: 'What’s the point of singing songs, if they’ll never even hear you?', from: 'If They’ll Never Hear You', href: '/writing/if-theyll-never-hear-you' },
  { line: 'You put yourself into something and it becomes its own thing and then it tells you what it’s about.', from: 'If They’ll Never Hear You', href: '/writing/if-theyll-never-hear-you' },
  { line: 'Freedom, in the end, isn’t escaping or floating. It’s the willingness to act without guarantees.', from: 'Unwritten', href: '/writing/unwritten' },
  { line: 'It’s about what we do with what we inherit. Whether we keep carrying it, or finally put it down.', from: 'Unwritten', href: '/writing/unwritten' },
];
