const { region, state, unionTerritory } = require('./types')

const Yangon = require('./yangon')
const Mandalay = require('./mandalay')

module.exports = [
  {
    name: 'Ayeyarwady',
    localName: 'ဧရာဝတီ',
    type: region
  },
  {
    name: 'Bago',
    localName: 'ပဲခူး',
    type: region
  },
  {
    name: 'Chin',
    localName: 'ချင်း',
    type: state
  },
  {
    name: 'Kachin',
    localName: 'ကချင်',
    type: state
  },
  {
    name: 'Kayah',
    localName: 'ကယား',
    type: state
  },
  {
    name: 'Kayin',
    localName: 'ကရင်',
    type: state
  },
  {
    name: 'Magway',
    localName: 'မကွေး',
    type: region
  },
  {
    ...Mandalay
  },
  {
    name: 'Mon',
    localName: 'မွန်',
    type: state
  },
  {
    name: 'Rakhine',
    localName: 'ရခိုင်',
    type: state
  },
  {
    name: 'Shan',
    localName: 'ရှမ်း',
    type: state
  },
  {
    name: 'Sagaing',
    localName: 'စစ်ကိုင်း',
    type: region
  },
  {
    name: 'Tanintharyi',
    localName: 'တနင်္သာရီ',
    type: region
  },
  {
    ...Yangon
  },
  {
    name: 'Naypidaw',
    localName: 'နေပြည်တော်',
    type: unionTerritory
  }
]
