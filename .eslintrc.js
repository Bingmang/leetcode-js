module.exports = {
  "rules": {
    "semi": [2, "never"],
    'no-undef': [2],
    'no-tabs': 2,
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', {
      "code": 80,
      "ignoreComments": true,
    }],
  },
  "env": {
    "es6": true,
    "node": true,
    "mocha": true,
  },
  "parser": "babel-eslint",
};
