import chroma from 'chroma-js'
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

function randomFloat(min, max, rng = Math.random) {
  return rng() * (max - min) + min
}

// exclusive `max`
function randomInteger(min, max, rng = Math.random) {
  return Math.floor(rng() * (max - min)) + min
}

export function randomPastel(seed = '') {
  const rng = seedrandom(seed)

  const h = randomInteger(0, 360, rng)
  const s = randomFloat(0.1, 0.5, rng)
  const v = randomFloat(0.93, 1, rng)

  return chroma.hsv(h, s, v).hex()
}
