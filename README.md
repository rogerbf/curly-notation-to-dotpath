# curly-notation-to-dotpath

Convert curly notation into a collection of dotpaths.

## usage

```javascript
const parse = require(`curly-notation-to-dotpath`)

parse(`
  {
    a {
      nested {
        property,
        two,
        more
      }
    },
    b {
      c
    }
  }
`)
// [
//   `a.nested.property`,
//   `a.nested.two`,
//   `a.nested.more`,
//   `b.c`
// ]
```
