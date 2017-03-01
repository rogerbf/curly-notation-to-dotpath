module.exports = input =>
  input
  .replace(`,`, ` `)
  .split(/([{}])|\s+/)
  .filter(value => value && value.length > 0)
  .map(value => {
    switch (value) {
      case `{`:
        return { value, type: `open` }
      case `}`:
        return { value, type: `close` }
      default:
        return { value, type: `key` }
    }
  })
