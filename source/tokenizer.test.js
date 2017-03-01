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

test(`commas complex`, () => {
  const data = `
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
  `
  expect(tokenizer(data)).toEqual([
    { type: `open`, value: `{` },
    { type: `key`, value: `a` },
    { type: `open`, value: `{` },
    { type: `key`, value: `nested` },
    { type: `open`, value: `{` },
    { type: `key`, value: `property` },
    { type: `key`, value: `two` },
    { type: `key`, value: `more` },
    { type: `close`, value: `}` },
    { type: `close`, value: `}` },
    { type: `key`, value: `b` },
    { type: `open`, value: `{` },
    { type: `key`, value: `c` },
    { type: `close`, value: `}` },
    { type: `close`, value: `}` }
  ])
})
