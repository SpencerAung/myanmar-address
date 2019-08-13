const { region } = require('../types');

const cities = require('./cities');
const districts  = require('./districts');
const townships = require('./townships');

module.exports = {
  name: 'Yangon',
  localName: 'ရန်ကုန်',
  type: region,
  divisions: [
    ...cities,
    ...districts,
    ...townships,
  ],
};
