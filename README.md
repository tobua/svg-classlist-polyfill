# SVG classList Polyfill

Polyfill for classList methods (contains, add, remove, toggle) on SVG elements which aren't supported on IE11 and other older browsers.

## Installation and Usage

```
npm install svg-classlist-polyfill
```

```
import 'svg-classlist-polyfill'
```

That's it, polyfill will only be added if current environment doesn't already support the methods. Here is how regular usage afterwards might look like:

```js
const icon = document.querySelector('svg.icon')

icon.classList.add('icon--blue')
icon.classList.toggle('icon--rotate')
icon.classList.remove('icon--blue')
icon.classList.contains('icon--blue') === false
```

**Avoid** setting the class with `icon.className = 'icon icon--blue'` as this isn't properly supported in IE11 and will not work together with the polyfill.

## Tests

There are a few test cases available in `test.js`. Serve a simple website with `npm test` opening this in a browser will run a few test cases quickly indicating whether the polyfill is working well.

## Source

Sourcecode partially taken from this [Gist](https://gist.github.com/EvanAgee/350b5072e1ec3d82d34cc6a735914eff).
