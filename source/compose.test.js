const compose = require(`./compose`)

test(`compose`, () => {
  const input = ``
  const first = jest.fn(input => input)
  const second = jest.fn(input => {
    expect(first).toHaveBeenCalled()
    return input
  })
  expect(compose(first, second, input)).toBe(input)
  expect(second).toHaveBeenCalled()
})
