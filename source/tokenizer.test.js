const tokenizer = require(`./tokenizer`)

test(`multiline`, () => {
  const data = `
  {
    ncc1701 {
      captain,
      firstOfficer
    }
  }
  `

  expect(tokenizer(data)).toEqual([
    { type: `open`, value: `{` },
    { type: `key`, value: `ncc1701` },
    { type: `open`, value: `{` },
    { type: `key`, value: `captain` },
    { type: `key`, value: `firstOfficer` },
    { type: `close`, value: `}` },
    { type: `close`, value: `}` }
  ])
})

test(`no spaces`, () => {
  const data = `{ncc1701{captain}}`

  expect(tokenizer(data)).toEqual([
    { type: `open`, value: `{` },
    { type: `key`, value: `ncc1701` },
    { type: `open`, value: `{` },
    { type: `key`, value: `captain` },
    { type: `close`, value: `}` },
    { type: `close`, value: `}` }
  ])
})

test(`commas`, () => {
  const data = `{ncc1701{captain,firstOfficer}}`

  expect(tokenizer(data)).toEqual([
    { type: `open`, value: `{` },
    { type: `key`, value: `ncc1701` },
    { type: `open`, value: `{` },
    { type: `key`, value: `captain` },
    { type: `key`, value: `firstOfficer` },
    { type: `close`, value: `}` },
    { type: `close`, value: `}` }
  ])
})
