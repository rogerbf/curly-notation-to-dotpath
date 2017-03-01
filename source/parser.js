const peek = (tokens, index) =>
  index + 1 < tokens.length
    ? tokens[index + 1]
    : { type: undefined, value: undefined }

module.exports = tokens =>
  tokens
  .map((element, index, tokens) =>
    peek(tokens, index).type === `open`
    ? Object.assign({}, element, { parent: true })
    : Object.assign({}, element, { parent: false })
  )
  .reduce((state, current, index, tokens) => {
    switch (current.type) {
      case `key`:
        return (
          current.parent
          ? Object.assign(
            {},
            state,
            { depth: [ ...state.depth, current.value ] }
          )
          : Object.assign(
            {},
            state,
            {
              dotpaths: [
                ...state.dotpaths,
                state.depth.length > 0
                ? `${state.depth.join(`.`)}.${current.value}`
                : current.value
              ]
            }
          )
        )
      case `close`:
        return Object.assign(
          {},
          state,
          { depth: state.depth.slice(0, -1) }
        )
      default:
        return state
    }
  }, { depth: [], dotpaths: [] })
  .dotpaths
