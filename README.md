# Install
```bash
npm install
```

# Run
```bash
npm run build_dev OR npm run build_prod
```

# Watch / Live reload
```bash
gulp serve
```
For now, works for HTML and SCSS files. TS depending.

# Linter
```bash
gulp tslint
```
# Typings
```bash
 npm run typings
```

For further information take a look at [this blog post](http://blog.mgechev.com/2016/06/26/tree-shaking-angular2-production-build-rollup-javascript/).

# Update local dependencies
```bash
$ npm install -g npm-check-updates
$ npm-check-updates -u
$ npm install 
```

# Add npm package
```js
import { encode, decode } from '../node_modules/uuid-base64/index.js'

let id = encode('a14a9df2-8e0d-42ef-8075-5c38b0f93c03')
let dec = decode(id)
```

# Example. Weather in three day of a coordenates.

- Needs openweather API key. http://openweathermap.org/
- Rename config.example.ts to config.ts
- Add API key to OPEN_WEATHER_KEY

# Links
TSLint configurable rules (http://palantir.github.io/tslint/rules/)

# TODO
- ~~Use with npm~~
- ~~Add SASS~~
- Add browser-sync for ~~HTML~~, ~~SASS~~ and TypeScript
- ~~All in one JS and~~ other for CSS
- ~~Update dependencies~~
- ~~Add Linter (tslint)~~
- Gulp with ES6 https://www.timroes.de/2015/10/25/using-ecmascript6-es6-es2015-with-gulp/
https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js
    ---> Add gulpfile to tslint

# License
GPL-3.0 (https://www.gnu.org/licenses/gpl.html)
