# create-phaser-game

A template for creating new Phaser 3 games with Webpack.

## Usage

    yarn create phaser-game [name-of-your-phaser-game]

This will generate a directory with the following contents:

    ./name-of-your-phaser-game
    ├── index.html
    ├── package.json
    ├── public
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon.ico
    │   └── site.webmanifest
    ├── src
    │   ├── index.css
    │   └── index.js
    ├── webpack.config.js
    └── yarn.lock

The **src/index.js** file is where your `Phaser.Game` will be instantiated.
You can `import` new scenes from your app into this file like so:

```javascript
import Phaser from "phaser"
import BootScene from "./scenes/boot"
import WorldScene from "./scenes/world"

document.addEventListener("DOMContentLoaded", () => {
  new Phaser.Game({
    type: Phaser.AUTO,
    scenes: [
      BootScene,
      WorldScene
    ]
  })
})
```

A scene in **src/scenes** might look something like this:

```javascript
import { Scene } from "phaser"
import tiles from "../images/tiles"

export default class Boot extends Scene {
  constructor() {
    super({ key: "BootScene", active: true })
  }

  preload() {
    this.load.image("tiles", tiles)
  }
}
```

## Development

To run tests:

    yarn test

To actually generate an app:

    yarn start [name-of-your-phaser-game]

And, for lint checks of the local library:

    yarn lint
