module.exports = {
  paths: {
    watched: ['src', 'site']
  },
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^src(?!.*libs).*/,
        'vendor.js': [/^node_modules/, /^src(?:.*libs).*/]
      }
    },
    stylesheets: { joinTo: 'app.css' }
  },
  modules: {
    nameCleaner: function(path) {
      return path.replace(/^src.*\/(?:libs\/)?/, '')
                 .replace(/-\d+(?:\.\d+)+(?:\.min)/, '');
    }
  },
  conventions: {
    ignored: [/\/_(?!default|index)/, /vendor\/(node|j?ruby-.+|bundle)\//]
  },
  plugins: {
    hugo: { sourceFolder: 'site' }
  }
};
