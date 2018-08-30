var _ = {};

(function() {


  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var uniqueArray = [];

    array = array.sort();
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== array[i+1]) {
        uniqueArray.push(array[i]);
      }
    }

    return uniqueArray;
  };

}).call(this);
