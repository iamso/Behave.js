module.exports = {
  options: {
    mangle: true,
    compress: {
      drop_console: true
    },
    preserveComments: false,
    sourceMap: true
  },
  dist: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['behave.js'],
    dest: 'behave.min.js'
  }
};
