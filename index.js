// # httpTime
//
// A streaming start and stop to log the time between stream processing
//
// ## Usage
// 
// es.pipeline(
//   req,
//   httpTime.start(req),
//   ...
//   httpTime.stop(req),
//   res
// );
//
var es = require('event-stream');

// httpTime.start(req)
exports.start = function(obj) {
  return es.map(function(data, cb) {
    obj.label = (new Date()).toString() + '-' + process.hrtime().join('-');
    console.time(obj.label);
    cb(null, data);
  });
}

// httpTime.stop(req)
exports.stop = function(obj) {
  return es.map(function(data, cb) {
    console.timeEnd(obj.label);
    cb(null, data);
  });
}
