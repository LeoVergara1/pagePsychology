// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
  copycat:{
        "fonts" : ["app/fonts/"],
        "images": [],
        verbose : true, //shows each file that is copied to the destination directory
        onlyChanged: true //only copy a file if it's modified time has changed (only effective when using brunch watch)
      }
};

exports.npm = {
    enabled: true,
    styles: {
        },
    globals: {jQuery: "jquery", $: "jquery"}
};
