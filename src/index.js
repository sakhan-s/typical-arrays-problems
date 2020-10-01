
exports.min = function min (array) {
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  return Math.max.apply(null, array);;
}

exports.avg = function avg (array) {
  const sum = array.reduce((a, b) => a + b, 0);
  const avg = (sum / array.length) || 0;
}
