module.exports =
  function longestConsecutiveLength(array) {
    var set = new Set(array);
    var count = 0;

    set.forEach(function(i) {
      if (!set.has(i - 1)) {
        var currentI = i;
        var tempCount = 1;
        while (set.has(currentI + 1)) {
          currentI += 1;
          tempCount += 1;
        }
        count = Math.max(count, tempCount);
      }
    }
    )
    return count;
  }
