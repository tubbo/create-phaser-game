const { execSync } = require("child_process")
const { existsSync, readFileSync } = require("fs")
const clean = () => execSync("rm -rf tmp")

beforeEach(clean)

test("creates a new phaser and webpack app in the specified directory", () => {
  process.argv[2] = "tmp"
  require("./index")

  expect(existsSync(`${__dirname}/tmp/package.json`)).toBe(true)
  expect(existsSync(`${__dirname}/tmp/src/index.js`)).toBe(true)

  const config = JSON.parse(readFileSync(`${__dirname}/tmp/package.json`))

  expect(config.name).toBe("tmp")
  expect(Object.keys(config.dependencies)).toContain("phaser")
})

afterEach(clean)
