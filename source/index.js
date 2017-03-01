const tokenizer = require(`./tokenizer`)
const parser = require(`./parser`)
const compose = require(`./compose`)

export default compose.bind(null, tokenizer, parser)
