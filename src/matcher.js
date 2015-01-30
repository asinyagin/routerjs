Router.matcher = function(path, pattern) {
  return {
    pattern: function() { return pattern; },
    match: function() {
      var pathNodes = path.split('/');
      var patternNodes = pattern.split('/');
      if (pathNodes.length !== patternNodes.length) return false;
      return patternNodes.every(function(node, idx) {
        return node.charAt(0) === ':' || node === pathNodes[idx];
      });
    },
    params: function() {
      var pathNodes = path.split('/');
      var patternNodes = pattern.split('/');
      return patternNodes.reduce(function(params, node, idx) {
        if (node.charAt(0) == ':')
          params[node.substring(1)] = pathNodes[idx];
        return params;
      }, {});
    }
  };
};
