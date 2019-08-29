import seedrandom from 'seedrandom'

function toSrgb(c) {
  c /= 255
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

export function relativeLuminance(r, g, b) {
  const sR = toSrgb(r),
    sG = toSrgb(g),
    sB = toSrgb(b)
  return 0.2126 * sR + 0.7152 * sG + 0.0722 * sB
}

function randomInteger(min, max, rng = Math.random) {
  return Math.floor(rng() * (max + 1 - min)) + min
}

export function randomPastel(seed = '') {
  const rng = seedrandom(seed)

  const h = randomInteger(1, 360, rng)
  const s = randomInteger(20, 40, rng)
  const l = randomInteger(70, 90, rng)

  return `hsl(${h}, ${s}%, ${l}%)`
}
