
const fs = require('fs')

let env

try {
  env = { ...JSON.parse(fs.readFileSync('./.env.lambda')), ...process.env }
} catch (e) {
  env = process.env // eslint-disable-line prefer-destructuring
}