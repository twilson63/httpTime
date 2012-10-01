// # httpTime
//
// A streaming start and stop to log the time between stream processing
//
// ## Usage
// 
// es.pipeline(
//   req,
//   ht.start(req),
//   ...
//   ht.stop(req),
//   res
// );
//
var es = require('event-stream');

// ht.start(req)
exports.start = function(obj) {
  return es.map(function(data, cb) {
    obj.label = (new Date()).toString() + '-' + process.hrtime().join('-');
    console.time(obj.label);
    cb(null, data);
  });
}

// ht.stop(req)
exports.stop = function(obj) {
  return es.map(function(data, cb) {
    if(obj.label) { console.timeEnd(obj.label); }
    cb(null, data);
  });
}
