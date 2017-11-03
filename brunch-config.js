module.exports = {
  paths: {
    public: 'static',
    watched: ['src']
  },
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^src\/scripts\/(?!libs)/,
        'vendor.js': /^src\/scripts\/libs/
      }
    },
    stylesheets: { joinTo: 'app.css' }
  },
  modules: {
    nameCleaner: function(path) {
      return path.replace(/^src\/scripts\//, '')
                 .replace(/-\d+(?:\.\d+)+(?:\.min)/, '');
    }
  }
};
