const { region } = require('../types')

const cities = require('./cities')
const districts = require('./districts')
const townships = require('./townships')

module.exports = {
  name: 'Mandalay',
  localName: 'မန္တလေး',
  type: region,
  divisions: [
    ...cities,
    ...districts,
    ...townships
  ]
}
