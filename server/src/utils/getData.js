import { readFileSync } from 'node:fs'

/**
 * Reads data from a JSON file and returns the parsed JSON object.
 *
 * @param {string} name - The name of the JSON file in the 'data' directory.
 * @returns {Object} The parsed JSON object from the specified file.
 */
const getData = (name) => {
  const data = readFileSync(
    new URL(`../data/${name}`, import.meta.url),
    'utf-8'
  )
  return JSON.parse(data)
}

export default getData
