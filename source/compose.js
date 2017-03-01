module.exports = (...args) => args.slice(0, -1).reduce(
  (result, fn) => fn(result),
  args.slice(-1).pop()
)
