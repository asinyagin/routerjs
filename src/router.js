Router.start = function(routes) {
  $(window).on('hashchange', function(e) {
    var newUrl = e.originalEvent.newURL;
    var path = newUrl.substring(newUrl.indexOf('#') + 1);

    var matchers = Object.keys(routes)
      .map(function(pattern) { return Router.matcher(path, pattern); });
    // Chrome doesn't support Array.find(). =(
    var matcher = null;
    for (var i = 0; i < matchers.length; i++) {
      if (matchers[i].match()) {
        matcher = matchers[i];
        break;
      }
    }

    if (matcher) routes[matcher.pattern()](matcher.params());
  });
};
