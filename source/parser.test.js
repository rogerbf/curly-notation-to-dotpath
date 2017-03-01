const parse = require(`./parser`)

test(`parser is a function`, () => {
  expect(typeof (parse)).toBe(`function`)
})

test(`parser simple`, () => {
  const tokens = [
    { type: `open`, value: `{` },
    { type: `key`, value: `ncc1701` },
    { type: `open`, value: `{` },
    { type: `key`, value: `captain` },
    { type: `close`, value: `}` },
    { type: `close`, value: `}` }
  ]
  expect(parse(tokens)).toEqual([
    `ncc1701.captain`
  ])
})

test(`parser complex`, () => {
  const tokens = [
    { value: `{`, type: `open` },
    { value: `ncc1701`, type: `key` },
    { value: `{`, type: `open` },
    { value: `captain`, type: `key` },
    { value: `scienceOfficer`, type: `key` },
    { value: `}`, type: `close` },
    { value: `enterprise`, type: `key` },
    { value: `{`, type: `open` },
    { value: `numberOne`, type: `key` },
    { value: `}`, type: `close` },
    { value: `ds9`, type: `key` },
    { value: `}`, type: `close` }
  ]
  expect(parse(tokens)).toEqual([
    `ncc1701.captain`,
    `ncc1701.scienceOfficer`,
    `enterprise.numberOne`,
    `ds9`
  ])
})
