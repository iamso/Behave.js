module.exports = {
  options: {
    separator: '\n\n',
    stripBanners: false,
  },

  dist: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['src/behave.js'],
    dest: 'behave.js'
  }
};
