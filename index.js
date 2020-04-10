const path = require("path")
const fs = require("fs")
const { execSync } = require("child_process")

const name = process.argv[2]
const root = process.cwd()
const dir = path.resolve(root, name)

function copy(file, dest) {
  const source = path.join(__dirname, "src", file)
  dest = dest || file
  const destination = path.join(dir, "src", dest)
  const content = fs.readFileSync(source)

  fs.writeFileSync(destination, content)
}

// generate the whole app
require("create-minimal-webpack-app")
execSync("yarn add phaser")
copy("index.js")
copy("index.css")
