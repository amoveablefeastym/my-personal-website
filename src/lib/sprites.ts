// Hand-drawn pixel sprites. Each string is one row; each character is one pixel.
// '.' is transparent; every other character maps to a colour in PALETTE.

export const PALETTE: Record<string, string> = {
  k: '#2a2140', // outline ink
  w: '#fffaf0', // paper white
  c: '#f5ecd9', // cream
  g: '#c9bfae', // light grey
  G: '#8f8577', // grey
  b: '#5aa9e6', // screen blue
  B: '#3a7bc8', // deep blue
  l: '#d9f0fb', // pale sky
  s: '#5aa9e6', // bubble outline
  m: '#78c99b', // mint
  M: '#3f9e6c', // deep mint
  r: '#e85d3f', // tomato
  R: '#b83a26', // deep tomato
  y: '#f5c04a', // butter
  o: '#f0a35b', // crust
  O: '#c4703a', // dark crust
  p: '#b49cf0', // lilac
  f: '#f2c9a0', // skin
  n: '#6b4a3a', // coffee
};

export const SPRITES: Record<string, string[]> = {
  computer: [
    '................',
    '.kkkkkkkkkkkkkk.',
    '.kwwwwwwwwwwwwk.',
    '.kwbbbbbbbbbbwk.',
    '.kwbmmbyybbbbwk.',
    '.kwbbbbbbbbbbwk.',
    '.kwbmmmmbrrbbwk.',
    '.kwbbbbbbbbbbwk.',
    '.kwbmmmbbbbbbwk.',
    '.kwbbbbbbbbbbwk.',
    '.kwwwwwwwwwwwwk.',
    '.kkkkkkkkkkkkkk.',
    '.......kk.......',
    '....kkkkkkkk....',
    '...kggggggggk...',
    '...kkkkkkkkkk...',
  ],
  flask: [
    '.....kkkkkk.....',
    '......kwwk......',
    '......kwwk......',
    '..l...kwwk......',
    '.l.l..kwwk..p...',
    '..l..kwwwwk.....',
    '....kwwwwwwk....',
    '....kwwwwwwk....',
    '...kppppppppk...',
    '...kppwppppppk..',
    '..kppppppwpppk..',
    '..kpppppppppppk.',
    '..kpwppppppppk..',
    '..kppppppppppk..',
    '...kkkkkkkkkk...',
    '................',
  ],
  book: [
    '................',
    '................',
    '..kkkkk..kkkkk..',
    '.kwwwwwkkwwwwwk.',
    '.kwggwwkkwggwwk.',
    '.kwwwwwkkwwwwwk.',
    '.kwgggwkkwgggwk.',
    '.kwwwwwkkwwwwwk.',
    '.kwggwwkkwgggwk.',
    '.kwwwwwkkwwwwwk.',
    '.kwgggwkkwggwwk.',
    '.kwwwwwkkwwwwwk.',
    '.kkkkkkrrkkkkkk.',
    '..kkkkkrrkkkkk..',
    '.......rr.......',
    '................',
  ],
  bread: [
    '................',
    '................',
    '................',
    '.....kkkkkk.....',
    '...kkooooookk...',
    '..koyooyoooook..',
    '.kooOooOooOoook.',
    '.koOooOooOoooOk.',
    '.kooooooooooook.',
    '.kOooooooooooOk.',
    '.kOOOOOOOOOOOOk.',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................',
    '................',
  ],
  bubble: [
    '....ssss....',
    '..ss....ss..',
    '.s.ww.....s.',
    '.s.w......s.',
    's..........s',
    's..........s',
    's..........s',
    's..........s',
    '.s........s.',
    '.s........s.',
    '..ss....ss..',
    '....ssss....',
  ],
  sun: [
    '.....y.....',
    '.y...y...y.',
    '..y.yyy.y..',
    '...yyyyy...',
    '..yyyyyyy..',
    'yyyyyyyyyyy',
    '..yyyyyyy..',
    '...yyyyy...',
    '..y.yyy.y..',
    '.y...y...y.',
    '.....y.....',
  ],
  moon: [
    '...cccc....',
    '..cccc.....',
    '.cccc......',
    '.ccc.......',
    'ccc........',
    'ccc........',
    'ccc........',
    '.ccc......c',
    '.cccc...cc.',
    '..cccccccc.',
    '...cccccc..',
  ],
  heart: [
    '.rr.rr.',
    'rrrrrrr',
    'rrwrrrr',
    '.rrrrr.',
    '..rrr..',
    '...r...',
  ],
  star: [
    '...y...',
    '...y...',
    'yyyyyyy',
    '.yyyyy.',
    '..yyy..',
    '.yy.yy.',
    'yy...yy',
  ],
  npc: [
    '...kkkk...',
    '..kkkkkk..',
    '.kkffffkk.',
    '.kfkffkfk.',
    '.kffffffk.',
    '..kffffk..',
    '...kffk...',
    '..rrrrrr..',
    '.frrrrrrf.',
    '.frrrrrrf.',
    '..rrrrrr..',
    '..kkkkkk..',
    '..kk..kk..',
    '..kk..kk..',
    '.kkk..kkk.',
  ],
  npc2: [
    '...kkkk...',
    '..kkkkkk..',
    '.kkffffkk.',
    '.kfkffkfk.',
    '.kffffffk.',
    '..kffffk..',
    '...kffk...',
    '..rrrrrr..',
    '.frrrrrrf.',
    '.frrrrrrf.',
    '..rrrrrr..',
    '..kkkkkk..',
    '...kkkk...',
    '...kkkk...',
    '..kkkkkk..',
  ],
  coffee: [
    '..k..k....',
    '...k..k...',
    '..k..k....',
    'kkkkkkkk..',
    'kwwwwwwkkk',
    'knnnnnnk.k',
    'kwwwwwwk.k',
    'kwwwwwwkkk',
    'kwwwwwwk..',
    '.kwwwwk...',
    '..kkkk....',
  ],
  cube: [
    '...kk...',
    '.kkkkkk.',
    'kkkkkkkk',
    'kGkkkkGk',
    'kkGkkGkk',
    'kkkGGkkk',
    '.kkkkkk.',
    '...kk...',
  ],
  gamepad: [
    '..kkkkkkkkkk..',
    '.kggggggggggk.',
    'kggkgggggggrgk',
    'kgkkkggggrgggk',
    'kggkgggggggrgk',
    'kggggggggrgggk',
    '.kggkkkkkkggk.',
    '..kkk....kkk..',
  ],
  coin: [
    '..kkkkkk..',
    '.kyyyyyyk.',
    'kyywyyyyok',
    'kywyyyyyok',
    'kyyyyyyyok',
    'kyyyyyyyok',
    'kyyyyyyyok',
    'kyyyyyyoOk',
    '.kyooooOk.',
    '..kkkkkk..',
  ],
  loaf0: [
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '................',
    '......kkkk......',
    '....kkcccckk....',
    '...kcwcccccck...',
    '..kcccccccccck..',
    '.kcccccccccccck.',
    '.kkkkkkkkkkkkkk.',
    '................',
    '................',
  ],
  loaf1: [
    '................',
    '................',
    '................',
    '................',
    '......kkkk......',
    '....kkcccckk....',
    '...kcwcccccck...',
    '..kccccccccccck.',
    '.kkkkkkkkkkkkkk.',
    '.krrwrrrrrrrrrk.',
    '..krrrrrrrrrrk..',
    '...krrrrrrrrk...',
    '....kkkkkkkk....',
    '................',
    '................',
    '................',
  ],
  loaf2: [
    '................',
    '................',
    '................',
    '.....kkkkkk.....',
    '...kkcccccckk...',
    '..kcwccwccccck..',
    '.kccgccgccgccck.',
    '.kcgccgccgcccgk.',
    '.kcccccccccccck.',
    '.kgccccccccccgk.',
    '.kggggggggggggk.',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................',
    '................',
  ],
  loaf3: [
    '.....g...g......',
    '......g...g.....',
    '.....g...g......',
    '.....kkkkkk.....',
    '...kkooooookk...',
    '..koyooyoooook..',
    '.kooOooOooOoook.',
    '.koOooOooOoooOk.',
    '.kooooooooooook.',
    '.kOooooooooooOk.',
    '.kOOOOOOOOOOOOk.',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................',
    '................',
  ],
  notebook: [
    'kkkkkkkkkkkk',
    'kwrwwwwwwwwk',
    'kwrllllllllk',
    'kwrwwwwwwwwk',
    'kwrwbbwwbwwk',
    'kwrllllllllk',
    'kwrwwwwwwwwk',
    'kwrwbbbwwwwk',
    'kwrllllllllk',
    'kwrwwwwwwwwk',
    'kwrwbwbbwwwk',
    'kwrllllllllk',
    'kkkkkkkkkkkk',
  ],
  arrow: [
    'k....',
    'kk...',
    'kkk..',
    'kkkk.',
    'kkk..',
    'kk...',
    'k....',
  ],
};

/** Merge horizontal runs of the same colour into single rects. */
export function spriteRects(rows: string[]) {
  const rects: { x: number; y: number; w: number; fill: string }[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === '.' || !PALETTE[ch]) { x++; continue; }
      let w = 1;
      while (row[x + w] === ch) w++;
      rects.push({ x, y, w, fill: PALETTE[ch] });
      x += w;
    }
  });
  return { rects, width: Math.max(...rows.map(r => r.length)), height: rows.length };
}

// ── Spinning globe: frames generated by scrolling a little world map behind a round mask ──
const GLOBE_MASK = [
  '....kkkk....',
  '..kkbbbbkk..',
  '.kbbbbbbbbk.',
  '.kbbbbbbbbk.',
  'kbbbbbbbbbbk',
  'kbbbbbbbbbbk',
  'kbbbbbbbbbbk',
  'kbbbbbbbbbbk',
  '.kbbbbbbbbk.',
  '.kbbbbbbbbk.',
  '..kkbbbbkk..',
  '....kkkk....',
];
const WORLD_MAP = [
  '........................',
  '....mm.........mmm......',
  '...mmmm.......mmmmm.....',
  '..mmmmm......mmmmmmm....',
  '...mmm.......mmmmmmmm...',
  '....mm........mmmmm.m...',
  '....m..........mmm..mm..',
  '...............mm...m...',
  '...........m.........m..',
  '..........mmm...........',
  '........................',
  '........................',
];
export const GLOBE_FRAMES = 6;
for (let f = 0; f < GLOBE_FRAMES; f++) {
  const off = f * 4;
  SPRITES[`globe${f}`] = GLOBE_MASK.map((row, r) =>
    Array.from(row).map((ch, c) => {
      if (ch !== 'b') return ch;
      if (r === 2 && c === 3) return 'w';
      return WORLD_MAP[r][(c + off) % 24] === 'm' ? 'm' : 'b';
    }).join('')
  );
}
SPRITES.globe = SPRITES.globe0;
