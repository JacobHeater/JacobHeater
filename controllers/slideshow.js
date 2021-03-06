define([
  '../modules/slideshow'
], function(module) {
  return module.controller('slideshowController', function(view, model, module, page){
    var controls = view.controls;
    var slidedeck = controls.slidedeck;
    slidedeck.muv.repeat([
      {
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/a/af/Lily-flower-free.jpg',
        imgTitle: 'Lilies!',
        caption: 'Lillies Smell so Wonderful!'
      }
    ], module.template('slides'), {
      clear: true
    });
  });
});
