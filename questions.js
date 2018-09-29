const DEFAULTS = {
  amount: 20,
  search: '',
  featured: true,
  orientation: 'landscape',
  width: 1200,
  height: 800,
}

const questions = {
  amount: {
    type: 'input',
    name: 'amount',
    message: 'How many images (up to 50)?',
    validate: function (value) {
      value = parseInt(value, 10)
      const pass = typeof value === 'number' &&
      value > 0 &&
      value < 50 &&
      value === parseInt(value.toFixed(), 10)
      if (pass) {
        return true
      }

      return 'Please enter a number between 0 and 50'
    },
    default: DEFAULTS.amount,
  },

  search: {
    type: 'input',
    name: 'search',
    message: 'What search term?',
    default: DEFAULTS.search,
  },

  featured: {
    type: 'confirm',
    name: 'featured',
    message: 'Only featured images?',
    default: DEFAULTS.featured,
  },

  orientation: {
    type: 'list',
    name: 'orientation',
    message: 'What orientation?',
    choices: ['Portrait', 'Landscape', 'Squarish', 'Custom',],
    filter: function(val) {
      return val.toLowerCase()
    },
    default: DEFAULTS.orientation,
  },

  width: {
    type: 'input',
    name: 'width',
    message: 'Width?',
    validate: function (value) {
      value = parseInt(value, 10)
      const pass = typeof value === 'number' &&
      value > 0 &&
      value === parseInt(value.toFixed(), 10)
      if (pass) {
        return true
      }

      return 'Please enter a number greater than 0'
    },
    default: DEFAULTS.width,
  },

  height: {
    type: 'input',
    name: 'height',
    message: 'Height?',
    validate: function (value) {
      value = parseInt(value, 10)
      const pass = typeof value === 'number' &&
        value > 0 &&
        value === parseInt(value.toFixed(), 10)
      if (pass) {
        return true
      }

      return 'Please enter a number greater than 0'
    },
    default: DEFAULTS.height,
  },
}

const secondaryQuestions = [questions.height,]

const mainQuestions = Object.values(questions).filter(q => {
  return !secondaryQuestions.includes(q)
})

module.exports = {
  mainQuestions,
  secondaryQuestions,
}